import { CalendarClock, LayoutTemplate, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { servicesContent } from '../data/site'

const serviceIcons = {
  web: LayoutTemplate,
  ai: Sparkles,
  internal: CalendarClock,
}

function ServicesSection() {
  const MotionDiv = motion.div

  return (
    <section id="servicios" className="relative scroll-mt-24 pb-8 pt-4">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_72%_30%,rgba(125,211,252,0.08),transparent_30%)]" />
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {servicesContent.services.map(({ icon, title, text, project }, index) => {
            const IconComponent = serviceIcons[icon]

            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="flex flex-col rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.12)] backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-sky-300/15 bg-sky-300/10 text-sky-200">
                  {IconComponent ? <IconComponent className="h-5 w-5" /> : null}
                </div>
                <h3 className="mt-4 font-display text-[1.18rem] text-white">{title}</h3>
                <p className="mb-5 mt-2 text-[0.95rem] leading-7 text-slate-300/[0.82]">{text}</p>
                <div className="mt-auto border-t border-white/[0.06] pt-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-sky-100/[0.38]">
                    Proyecto
                  </p>
                  <p className="mt-1 text-[0.85rem] text-slate-200/[0.75]">{project}</p>
                </div>
              </MotionDiv>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
