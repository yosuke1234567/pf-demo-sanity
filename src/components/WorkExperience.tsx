import ExperienceCard from '@/components/ExperienceCard'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative h-screen flex flex-col md:flex-row items-center max-w-full mx-auto overflow-hidden'
    >
      <h2 className='section-heading'>Experience</h2>
      <div className='w-full flex space-x-5 p-10 mt-8 snap-x snap-mandatory overflow-x-scroll'>
        {experiences.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}