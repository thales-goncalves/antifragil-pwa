import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_ENVIRONMENT

export const sanityClient = Object.freeze(
  createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2023-05-03',
  }),
)
