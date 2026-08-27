import { ArrowUpRight, CalendarDays, Github, Globe2, Store } from 'lucide-react'
import { motion } from 'framer-motion'

// Cada proyecto tiene un tono propio para que las filas no se lean iguales en
// reposo. El acento ya existía, pero solo aparecía como hairline al hacer hover.
const visualMeta = {
  web: {
    icon: Globe2,
    accent: 'from-cyan-200/60',
    tone: 'text-cyan-200/70',
    toneHover: 'group-hover:text-cyan-200',
  },
  store: {
    icon: Store,
    accent: 'from-violet-200/60',
    tone: 'text-violet-200/70',
    toneHover: 'group-hover:text-violet-200',
  },
  shifts: {
    icon: CalendarDays,
    accent: 'from-emerald-200/60',
    tone: 'text-emerald-200/70',
    toneHover: 'group-hover:text-emerald-200',
  },
}

function ProjectRow({ project, index }) {
  const MotionArticle = motion.article
  const meta = visualMeta[project.visual] ?? visualMeta.web
  const Icon = meta.icon

  const links = [
    project.demoUrl && { key: 'demo', href: project.demoUrl, label: 'Ver proyecto', icon: ArrowUpRight },
    project.repoUrl && { key: 'repo', href: project.repoUrl, label: 'Código', icon: Github },
  ].filter(Boolean)

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-white/10 last:border-b"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-white/[0.015] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-[-1px] h-px bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${meta.accent}`}
      />

      <div className="relative flex flex-col gap-5 px-1 py-8 md:flex-row md:items-center md:gap-8 md:py-9">
        <div className="flex shrink-0 items-center gap-4">
          <span
            className={`font-display text-[0.95rem] tabular-nums transition-colors duration-500 ${meta.tone} ${meta.toneHover}`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {project.image ? (
            <img
              src={project.image}
              alt={`Captura de ${project.name}`}
              loading="lazy"
              className="h-14 w-20 rounded-[0.75rem] border border-white/10 object-cover"
            />
          ) : (
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.045] transition duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08] ${meta.tone} ${meta.toneHover}`}
            >
              <Icon className="h-5 w-5" />
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-[1.5rem] leading-tight text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.7rem] md:text-[1.9rem]">
              {project.name}
            </h3>
            <span className="text-[0.8rem] tabular-nums text-slate-500">{project.year}</span>
          </div>

          <p className="mt-2 max-w-[54ch] text-[0.95rem] leading-7 text-slate-300/[0.78]">
            {project.description}
          </p>

          <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] text-slate-400">
            {project.technologies.map((tech, techIndex) => (
              <li key={tech} className="flex items-center gap-2">
                {techIndex > 0 && (
                  <span aria-hidden="true" className="text-slate-600">
                    /
                  </span>
                )}
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3 md:justify-end">
          {links.length > 0 ? (
            links.map((link) => {
              const IconComponent = link.icon

              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[0.82rem] font-semibold text-slate-100 transition duration-300 hover:border-white/25 hover:bg-white/[0.09]"
                >
                  {link.label}
                  <IconComponent className="h-4 w-4" />
                </a>
              )
            })
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-[0.76rem] text-slate-400">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-200/70" />
              {project.status ?? 'En desarrollo'}
            </span>
          )}
        </div>
      </div>
    </MotionArticle>
  )
}

export default ProjectRow
