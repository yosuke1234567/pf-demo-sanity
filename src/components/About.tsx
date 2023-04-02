import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='relative flex items-center justify-center md:justify-evenly flex-col md:flex-row h-screen max-w-7xl px-10 mx-auto'
    >
      <h2 className='section-heading'>About</h2>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.profilePic).url()} className='w-56 md:w-64 xl:w-[400px] py-8 mb-0'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h3 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
        </h3>
        <p className=' max-w-xl text-base'>{pageInfo.backgroundInfomation}</p>
      </div>
    </motion.div>
  )
}