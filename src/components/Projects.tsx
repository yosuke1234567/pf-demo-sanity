import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      className='relative h-screen max-w-full flex flex-col md:flex-row justify-evenly items-center
      mx-auto overflow-hidden text-left'
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="section-heading">Projects</h2>
      <div className="relative w-full h-full flex overflow-x-scroll snap-x snap-mandatory">
        {projects.map(project => (
          <article key={project._id} className='flex flex-col items-center justify-center
            w-screen h-full p-20 md:p-44 flex-shrink-0 snap-center'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="" alt="" />
            <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
              <h3 className='text-4xl font-semibold text-center'>
                {project.title}
              </h3>
              <div className='flex space-x-4 justify-center'>
                {
                  project.technologies.map(technology => (
                    <img className='w-8 h-8' key={technology._id} src={urlFor(technology.image).url()} alt="" />
                  ))
                }
              </div>
              <p className='text-lg'>
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="absolute top-[30%] left-0 w-full h-[50%] bg-[#f7ab0a]/10 -skew-y-12 -z-10"></div>
    </motion.div>
  )
}