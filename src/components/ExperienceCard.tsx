import { urlFor } from '@/sanity'
import { Experience } from '@/typings'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex-shrink-0 w-[500px] py-10 px-12 rounded-lg bg-[#333]
      snap-center opacity-40 hover:opacity-100 transition-opacity duration-200'>
      <div className='h-[50vh] overflow-y-auto scrollbar-black'>
        <h3 className='text-4xl'>{experience.jobTitle}</h3>
        <p className='text-2xl font-bold mt-1'>{experience.company}</p>
        <div className='flex space-x-2 mt-4'>
          {experience.technologies.map(technology => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              width={24} height={24}
              alt={technology.title}
            />
          ))}
        </div>
        <p className='py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()}
          &nbsp;-&nbsp;
          {experience.isCurrentlyWorkingHere ? 'Working Here' : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-2 pb-2 ml-5 text-lg'>
          {experience.points.map((point, index) => (
            <li key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}