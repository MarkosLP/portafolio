import { motion as Motion } from 'framer-motion'

function SectionDivider() {
  return (
    <Motion.div
      initial={{ opacity: 0, scaleX: 0.92 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-1"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </Motion.div>
  )
}

export default SectionDivider
