import BackgroundCircles from '@/components/BackgroundCircles'
import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import Link from 'next/link'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center overflow-hidden'>
      <BackgroundCircles />
      <img src={urlFor(pageInfo.heroImage).url()} width={300} height={300} alt='' className='relative' />
      <div className='relative text-center'>
        <span className='pb-2 text-gray-500 tracking-[12px]'>{pageInfo.role}</span>
        <h1 className='mt-2 mb-5 text-5xl lg:text-6xl font-bold tracking-wider'>{pageInfo.name}</h1>
        <div>
          <Link href='#about' className='hero-button'>About</Link>
          <Link href='#experience' className='hero-button'>Experience</Link>
          <Link href='#skills' className='hero-button'>Skills</Link>
          <Link href='#projects' className='hero-button'>Projects</Link>
        </div>
      </div>
    </div>
  )
}