import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SectionDivider from './components/SectionDivider'
import ServicesSection from './components/ServicesSection'
import backgroundPpal from './assets/backgroundppal.jpg'

function App() {
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const backdropRange = shouldReduceMotion ? [0, 0] : [0, 36]
  const hazeRange = shouldReduceMotion ? [0, 0] : [0, 22]
  const backdropY = useSpring(useTransform(scrollY, [0, 900], backdropRange), {
    stiffness: 70,
    damping: 28,
    mass: 0.35,
  })
  const hazeY = useSpring(useTransform(scrollY, [0, 900], hazeRange), {
    stiffness: 60,
    damping: 30,
    mass: 0.4,
  })

  return (
    <div className="relative isolate overflow-hidden bg-[#060b16] text-slate-100">
      <a
        href="#main-content"
        className="sr-only-focusable fixed left-4 top-4 z-[60] rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white shadow-[0_18px_40px_rgba(2,6,23,0.4)]"
      >
        Saltar al contenido
      </a>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060914_0%,#08101d_50%,#090f1b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[56rem] overflow-hidden">
          <Motion.div
            style={{ y: backdropY }}
            className="absolute inset-x-0 top-[-5rem] h-[66rem] opacity-[0.8]"
          >
            <div
              className="site-backdrop-frame"
              style={{ backgroundImage: `url(${backgroundPpal})` }}
            >
              <div className="site-window-lights hidden md:block" />
            </div>
          </Motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.08)_16%,rgba(2,6,23,0.16)_34%,rgba(2,6,23,0.32)_56%,rgba(2,6,23,0.54)_76%,rgba(2,6,23,0.76)_90%,#02050b_100%)]" />
          {/* Scrim lateral: da contraste al texto del hero sin apagar la foto entera. */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,18,0.72)_0%,rgba(4,8,18,0.46)_34%,rgba(4,8,18,0.12)_58%,transparent_78%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_26%)]" />

          {/* Luces del altavoz. Mismo anclaje que la foto, pero por encima de los
              scrims para que no las apague el degradado. */}
          <Motion.div
            style={{ y: backdropY }}
            className="absolute inset-x-0 top-[-5rem] h-[66rem]"
          >
            <div className="site-backdrop-frame">
              <div className="site-speaker hidden md:block" aria-hidden="true">
                <i />
              </div>
            </div>
          </Motion.div>
        </div>
        <div className="absolute inset-x-0 top-[24rem] h-[48rem] overflow-hidden">
          <Motion.div
            style={{ y: hazeY, backgroundImage: `url(${backgroundPpal})` }}
            className="absolute inset-x-[-10%] top-[1rem] h-[46rem] bg-cover bg-center bg-no-repeat opacity-[0.06] blur-[28px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.06)_18%,rgba(2,6,23,0.14)_38%,rgba(2,6,23,0.3)_62%,rgba(2,6,23,0.56)_82%,rgba(2,6,23,0.82)_100%)]" />
        </div>
        <div className="absolute inset-x-0 top-[54rem] h-[70rem] bg-[linear-gradient(180deg,rgba(11,18,32,0)_0%,rgba(11,18,32,0.34)_20%,rgba(12,20,35,0.72)_52%,rgba(10,17,30,0.96)_100%)]" />
        <div className="absolute left-1/2 top-[36rem] h-[14rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-200/5 blur-[150px]" />
        <div className="absolute right-[8%] top-[62rem] h-[16rem] w-[26rem] rounded-full bg-cyan-200/5 blur-[180px]" />
        <div className="site-lamp-cone absolute left-[-1.5rem] top-[7.5rem] h-[18rem] w-[22rem] sm:left-[1.8rem] sm:top-[9.4rem]" />
        <div className="absolute left-1/2 top-[88rem] h-[18rem] w-[40rem] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[180px]" />
        <div className="site-vignette absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main
          id="main-content"
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-5 pb-20 pt-24 sm:gap-14 sm:px-8 sm:pt-28 md:gap-14 lg:gap-16 lg:px-14 lg:pb-24"
        >
          <Hero />
          <ProjectsSection />
          <AboutSection />
          <SectionDivider />
          <ServicesSection />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
