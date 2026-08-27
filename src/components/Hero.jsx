import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { createElement } from 'react'
import avatarMarcos from '../assets/AvatarMarcos.jpg'
import { profile } from '../data/site'

function splitHeadline({ headline, headlineAccent }) {
  const start = headlineAccent ? headline.indexOf(headlineAccent) : -1

  if (start < 0) return { lead: headline, accent: '', trail: '' }

  return {
    lead: headline.slice(0, start),
    accent: headlineAccent,
    trail: headline.slice(start + headlineAccent.length),
  }
}

function Hero() {
  const MotionDiv = motion.div
  const { lead, accent, trail } = splitHeadline(profile)
  const portraitLinks = [
    {
      label: 'Email',
      icon: Mail,
      link: profile.contactLinks.find((link) => link.icon === 'mail'),
      brand: 'email',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      link: profile.contactLinks.find((link) => link.icon === 'linkedin'),
      brand: 'linkedin',
    },
    {
      label: 'IG',
      icon: Instagram,
      link: profile.contactLinks.find((link) => link.icon === 'instagram'),
      brand: 'instagram',
    },
  ]

  return (
    <section
      id="inicio"
      className="grid min-h-[calc(86dvh-7rem)] grid-cols-1 items-center gap-9 pb-2 pt-6 md:min-h-[calc(82dvh-7rem)] md:grid-cols-[minmax(0,1fr)_280px] md:gap-12 md:pt-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-16"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="order-2 mx-auto w-full max-w-[250px] md:order-2 md:max-w-[280px] lg:max-w-[330px]"
      >
        <div className="ai-portrait relative">
          <div className="relative rounded-[1.8rem] border border-white/10 bg-slate-950/35 shadow-[0_28px_70px_rgba(2,6,23,0.28)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
              <img
                src={avatarMarcos}
                alt="Avatar de Marcos"
                width="640"
                height="960"
                className="h-full w-full object-cover object-top"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(125,211,252,0.1),transparent_30%)] opacity-70 mix-blend-screen" />
              <div className="ai-portrait-steam" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-2">
                <div className="grid grid-cols-3 gap-2">
                  {portraitLinks.map((portraitLink) => {
                    const IconComponent = portraitLink.icon
                    const { label, link, brand } = portraitLink
                    const isActive = Boolean(link?.href)
                    const isExternal = link?.href && !link.href.startsWith('mailto:')
                    const brandClassNames = {
                      email:
                        'border-[#EA4335]/40 bg-[#EA4335]/20 text-red-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_24px_rgba(234,67,53,0.18)]',
                      linkedin:
                        'border-[#0A66C2]/45 bg-[#0A66C2]/25 text-sky-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_24px_rgba(10,102,194,0.2)]',
                      instagram:
                        'border-[#E1306C]/40 bg-[#E1306C]/20 text-pink-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_24px_rgba(225,48,108,0.18)]',
                    }
                    const brandHoverClassNames = {
                      email: 'hover:border-[#EA4335]/65 hover:bg-[#EA4335]/35 hover:text-red-100',
                      linkedin:
                        'hover:border-[#0A66C2]/70 hover:bg-[#0A66C2]/40 hover:text-sky-100',
                      instagram:
                        'hover:border-[#E1306C]/65 hover:bg-[#E1306C]/35 hover:text-pink-100',
                    }
                    const className = `flex h-9 items-center justify-center rounded-[0.85rem] border ring-1 ring-white/[0.04] backdrop-blur-md transition duration-300 ${brandClassNames[brand]} ${
                      isActive
                        ? `hover:-translate-y-0.5 hover:scale-[1.03] ${brandHoverClassNames[brand]}`
                        : 'cursor-default opacity-55'
                    }`

                    if (!isActive) {
                      return (
                        <span key={label} className={className}>
                          {createElement(IconComponent, { className: 'h-4 w-4' })}
                        </span>
                      )
                    }

                    return (
                      <a
                        key={label}
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        aria-label={label}
                        title={label}
                        className={className}
                      >
                        {createElement(IconComponent, { className: 'h-4 w-4' })}
                      </a>
                    )
                  })}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/[0.08] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/[0.72]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        className="order-1 min-w-0"
      >
        <div className="max-w-[43rem]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-sky-200/60 to-transparent"
            />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-sky-100/[0.82] sm:text-[0.76rem]">
              {profile.name}
            </p>
          </div>

          <h1 className="mt-6 max-w-[15ch] break-words font-display text-[2.9rem] leading-[1.02] text-white sm:text-[3.9rem] md:text-[4.2rem] lg:text-[5rem]">
            {lead}
            <span className="bg-gradient-to-br from-white via-sky-100 to-sky-300/70 bg-clip-text text-transparent">
              {accent}
            </span>
            {trail}
          </h1>

          <p className="mt-7 max-w-[36rem] break-words text-[1rem] leading-8 text-slate-200/[0.88] sm:text-[1.06rem]">
            {profile.intro}
          </p>

          <p className="mt-3 max-w-[34rem] break-words text-[0.95rem] leading-7 text-slate-300/[0.76]">
            {profile.supporting}
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <motion.a
            href="#proyectos"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex min-w-[12rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-sky-100 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(125,211,252,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(125,211,252,0.2)]"
          >
            Ver proyectos
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex min-w-[12rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
          >
            Contacto
            <Mail className="h-4 w-4" />
          </motion.a>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default Hero
