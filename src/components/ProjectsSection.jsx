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

      {/* Glows del fondo. El envoltorio mide el ancho del viewport y el alto de
          la sección, así que van en % de Proyectos y la siguen aunque se añadan
          filas, en vez de ir a rem absolutos desde el top del documento. El
          primero sobresale por arriba: es el que cierra la bajada del hero. */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2">
        <div className="absolute left-1/2 top-[-15rem] h-[14rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-200/5 blur-[150px]" />
        <div className="absolute right-[8%] top-[17%] h-[16rem] w-[26rem] rounded-full bg-cyan-200/5 blur-[180px]" />
        <div className="absolute left-1/2 top-[56%] h-[18rem] w-[40rem] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[180px]" />
      </div>
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
