import { ArrowUpRight, Github, Send } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/site'

function ContactSection() {
  const [suggestion, setSuggestion] = useState('')
  const githubLink = profile.contactLinks.find((link) => link.icon === 'github')
  const emailLink = profile.contactLinks.find((link) => link.icon === 'mail')

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = suggestion.trim()
    if (!message || !emailLink?.href) return

    const subject = encodeURIComponent('Sugerencia desde el portfolio')
    const body = encodeURIComponent(message)
    window.location.href = `${emailLink.href}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 pb-8 pt-4">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_72%_30%,rgba(125,211,252,0.08),transparent_30%)]" />
      <div className="contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="GitHub y una sugerencia rápida."
            description="Dejo este espacio simple: código, proyectos y una vía breve para mandar una idea o comentario."
          />
          <div className="mt-7 h-px w-32 bg-gradient-to-r from-sky-200/50 to-transparent" />
        </div>

        <div className="contact-panel">
          <Motion.a
            href={githubLink?.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.42 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="group flex min-h-[5.25rem] items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_16px_42px_rgba(2,6,23,0.12)] transition duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.045] text-sky-200">
                <Github className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-sky-100/[0.38]">
                  GitHub
                </p>
                <p className="mt-1 truncate text-[0.95rem] text-slate-100">
                  {githubLink?.value}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:text-white" />
          </Motion.a>

          <Motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.42, delay: 0.05 }}
            onSubmit={handleSubmit}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_16px_42px_rgba(2,6,23,0.12)]"
          >
            <label
              htmlFor="suggestion"
              className="text-[0.72rem] uppercase tracking-[0.16em] text-sky-100/[0.38]"
            >
              Sugerencia
            </label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(event) => setSuggestion(event.target.value)}
              rows="3"
              maxLength="240"
              placeholder="Una idea breve..."
              className="mt-3 min-h-20 w-full resize-none rounded-[0.95rem] border border-white/10 bg-slate-950 px-3 py-3 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-200/40 focus:bg-slate-900"
            />
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">{suggestion.length}/240</span>
              <button
                type="submit"
                disabled={!suggestion.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-sky-100 px-4 py-2.5 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-45"
              >
                Enviar
                <Send className="h-4 w-4" />
              </button>
            </div>
          </Motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
