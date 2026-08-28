import { motion as Motion } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { navItems, profile } from '../data/site'

function Footer() {
  const year = new Date().getFullYear()
  const emailHref = profile.contactLinks.find((link) => link.icon === 'mail')?.href

  return (
    <Motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-t border-white/10 pt-10"
    >
      <div className="flex flex-col gap-8 pb-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-[0.92rem] uppercase tracking-[0.26em] text-slate-100">
            {profile.name}
          </p>
          <p className="mt-3 text-[0.9rem] leading-7 text-slate-400">
            {profile.role}. Portfolio personal en construcción continua.
          </p>
        </div>

        <nav aria-label="Enlaces del pie" className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] text-slate-400 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center">
        <p className="text-[0.82rem] text-slate-500">
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={emailHref}
            className="group/footer-link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.82rem] text-slate-300 transition duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
          >
            Escríbeme
            <Mail className="h-3.5 w-3.5 transition-transform duration-500 group-hover/footer-link:-translate-y-0.5" />
          </a>
          <a
            href="#inicio"
            className="group/footer-link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.82rem] text-slate-300 transition duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover/footer-link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </Motion.footer>
  )
}

export default Footer
