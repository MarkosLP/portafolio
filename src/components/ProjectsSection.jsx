import { motion as Motion } from 'framer-motion'
import ProjectRow from './ProjectRow'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

function ProjectsSection() {
  return (
    <Motion.section
      id="proyectos"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-24 py-10 sm:py-14"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 border-y border-white/[0.04] bg-[linear-gradient(180deg,rgba(8,15,28,0.4),rgba(10,18,32,0.16)_46%,rgba(8,15,28,0.32))]" />
      <div className="flex flex-col gap-8 sm:gap-9">
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyectos propios, explicados sin rodeos."
          description="Una selección breve de lo que estoy cerrando: una web rápida, una tienda de aplicaciones de IA y una herramienta interna para gestionar turnos."
        />

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="max-w-3xl text-[0.88rem] leading-7 text-sky-100/[0.58] sm:text-sm">
          Los enlaces y capturas del resto de proyectos se añadirán aquí cuando
          estén listos para publicar.
        </div>
      </div>
    </Motion.section>
  )
}

export default ProjectsSection
