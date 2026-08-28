import { AnimatePresence, motion as Motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/site'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(navItems[0].href)
  const { scrollYProgress } = useScroll()
  const readingProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (documentHeight - scrollBottom < 4) {
        setActiveSection(navItems[navItems.length - 1].href)
        return
      }

      const activationLine = window.scrollY + window.innerHeight * 0.62
      const currentSection = [...sections].reverse().find((section) => {
        return section.offsetTop <= activationLine
      })

      if (currentSection?.id) {
        setActiveSection(`#${currentSection.id}`)
      }
    }

    const scrollToHashSection = () => {
      const hashSection = window.location.hash
        ? document.querySelector(window.location.hash)
        : null

      hashSection?.scrollIntoView()
    }

    const updateActiveSectionAfterNavigation = () => {
      window.setTimeout(() => {
        scrollToHashSection()
        if (window.location.hash) {
          setActiveSection(window.location.hash)
        }
        updateActiveSection()
      }, 120)
      window.setTimeout(updateActiveSection, 520)
    }

    updateActiveSection()
    updateActiveSectionAfterNavigation()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('hashchange', updateActiveSectionAfterNavigation)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSectionAfterNavigation)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // El header flota separado del borde, así que la superficie va en la píldora y
  // en el botón, nunca en el <header>: una banda a todo el ancho dejaría ver el
  // contenido de la página por encima de ella.
  const surfaceClassName = isScrolled
    ? 'border-white/[0.14] bg-slate-950/[0.72] shadow-[0_18px_44px_rgba(2,6,23,0.42)] backdrop-blur-2xl'
    : 'border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md'

  return (
    <>
      <Motion.div
        aria-hidden="true"
        style={{ scaleX: readingProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sky-300/70 via-sky-200/45 to-transparent"
      />

      <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <nav className="relative z-10 mx-auto flex min-h-14 w-full max-w-7xl items-center px-5 py-1.5 sm:px-8 lg:px-14">
        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border p-1.5 transition-all duration-700 ease-out md:flex ${surfaceClassName}`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-[0.92rem] transition duration-500 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                    : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className={`ml-auto inline-flex rounded-full border p-2.5 text-slate-100 transition-all duration-700 ease-out hover:bg-white/10 md:hidden ${surfaceClassName}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="relative z-10 mx-5 mt-2 rounded-[1.4rem] border border-white/10 bg-slate-950 p-3 shadow-[0_24px_60px_rgba(2,6,23,0.5)] sm:mx-8 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-2xl border px-4 py-3 text-sm transition duration-300 ${
                      isActive
                        ? 'border-white/15 bg-white/[0.08] text-white'
                        : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
