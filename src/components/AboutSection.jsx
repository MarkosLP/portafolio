import { motion } from 'framer-motion'
import { Layers3, LayoutPanelTop } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { aboutContent } from '../data/site'

const highlightIcons = {
  layout: LayoutPanelTop,
  layers: Layers3,
}

function AboutSection() {
  const MotionDiv = motion.div
  const MotionSection = motion.section

  return (
    <MotionSection
      id="sobre-mi"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid scroll-mt-24 gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
    >
      <div>
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={aboutContent.description}
        />
        <p className="mt-5 max-w-2xl text-[0.96rem] leading-7 text-slate-300/[0.78] sm:text-[0.98rem] sm:leading-8">
          {aboutContent.note}
        </p>
      </div>

      <div className="grid gap-4">
        {aboutContent.highlights.map(({ icon, title, text }, index) => {
          const IconComponent = highlightIcons[icon]

          return (
            <MotionDiv
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              whileHover={{ y: -2 }}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.12)] backdrop-blur-xl transition-colors duration-500 hover:border-white/15 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-sky-300/15 bg-sky-300/10 text-sky-200">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-[1.18rem] text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-slate-300/[0.82]">{text}</p>
                </div>
              </div>
            </MotionDiv>
          )
        })}

        <div className="flex flex-wrap gap-2 pt-2">
          {aboutContent.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-slate-900/45 px-3.5 py-1.5 text-[0.8rem] text-slate-200/[0.88]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default AboutSection
