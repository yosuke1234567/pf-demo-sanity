import { urlFor } from '@/sanity'
import { Skill as SkillType } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
  skill: SkillType
  directionLeft?: boolean
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div
      className='group relative flex w-24 h-24 rounded-full'
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <img src={urlFor(skill.image).url()} alt='' className='absolute top-0 left-0 object-fit w-full h-full rounded-full
        border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out' />
      <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-full text-2xl
        font-bold opacity-0 group-hover:opacity-100 group-hover:bg-[#00000088] ease-in-out transition duration-300'>
        {skill.progress}%
      </div>
    </motion.div>
  )
}