import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'
import { Experience } from '@/typings'

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  } | order(dateStarted desc)
`

export const fetchExperiences = async () => {
  const data: Experience[] = await sanityClient.fetch(query)

  return data
}