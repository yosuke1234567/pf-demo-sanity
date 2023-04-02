import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute h-[200px] w-[200px] border border-[#333] rounded-full mt-52 animate-ping'></div>
      <div className='absolute h-[300px] w-[300px] border border-[#333] rounded-full mt-52'></div>
      <div className='absolute h-[500px] w-[500px] border border-[#333] rounded-full mt-52'></div>
      <div className='absolute h-[650px] w-[650px] border border-[#f7ab0a] opacity-20 rounded-full mt-52 animate-pulse'></div>
      <div className='absolute h-[800px] w-[800px] border border-[#333] rounded-full mt-52'></div>
    </motion.div>
  )
}