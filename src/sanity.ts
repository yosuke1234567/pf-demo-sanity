import { createClient, ClientConfig } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-10-21',
  useCdn: false,
}

// Set up hte client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

export const urlFor = (source: SanityImageSource) => {
  const options = {
    projectId: config.projectId!,
    dataset: config.dataset!
  }
  return imageUrlBuilder(options).image(source)
}