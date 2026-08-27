import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/site'

const icons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
}

function ContactSection() {
  return (
    <section id="contacto" className="relative scroll-mt-24 pb-8 pt-4">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_72%_30%,rgba(125,211,252,0.08),transparent_30%)]" />
      <div className="contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Dónde encontrarme."
            description="Código, perfil profesional y contacto directo. Para cualquier propuesta, el correo es la vía más rápida."
          />
          <div className="mt-7 h-px w-32 bg-gradient-to-r from-sky-200/50 to-transparent" />
        </div>

        <div className="contact-panel">
          {profile.contactLinks.map((link, index) => {
            const Icon = icons[link.icon]
            const isExternal = link.href.startsWith('http')

            return (
              <Motion.a
                key={link.href}
                href={link.href}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="group flex min-h-[5.25rem] items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_16px_42px_rgba(2,6,23,0.12)] transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.045] text-sky-200">
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.72rem] uppercase tracking-[0.16em] text-sky-100/[0.38]">
                      {link.label}
                    </p>
                    <p className="mt-1 truncate text-[0.95rem] text-slate-100">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:text-white" />
              </Motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
