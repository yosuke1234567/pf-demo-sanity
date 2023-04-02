import Skill from '@/components/Skill'
import { Skill as SkillType } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      className='h-screen relative flex flex-col xl:flex-row items-center justify-center
        xl:space-y-0 max-w-[2000px] mx-auto text-center md:text-left xl:px-10'
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className='section-heading'>Skills</h2>
      <p className='section-heading top-28 tracking-[3px] text-sm'>Hover over a skill for current proficiency</p>
      <div className='grid grid-cols-4 gap-5 pt-8'>
        {
          skills.map(skill => (
            <Skill key={skill._id} skill={skill} />
          ))
        }
      </div>
    </motion.div>
  )
}