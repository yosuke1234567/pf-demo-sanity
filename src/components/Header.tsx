import { FaGithub } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center overflow-hidden'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center'>
        <a href="https://github.com/yosuke1234567">
          <FaGithub color='#aaa' size='2em' />
        </a>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1
        }}
        className='flex items-center text-gray-400'>
        <Link href="#contact">
          <MdOutlineMail size='2em' className='inline-flex' />
          <span className='hidden md:inline-flex md:ml-2'>Get In Touch</span>
        </Link>
      </motion.div>
    </header>
  )
}