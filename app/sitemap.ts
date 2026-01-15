import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://synkub.com', // replace with actual domain
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}