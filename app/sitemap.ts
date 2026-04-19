import { MetadataRoute } from 'next'
import { BANNERS, GAMES } from './data/banners'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coinqqslotvip.com'

  // 1. Halaman Utama
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // 2. Otomatis buat sitemap untuk setiap Gambar Banner (SEO Gambar)
  const bannerRoutes = BANNERS.map((banner) => ({
    url: `${baseUrl}${banner}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // 3. Otomatis buat sitemap untuk setiap Game (SEO Konten)
  const gameRoutes = GAMES.map((game) => ({
    url: `${baseUrl}/games/${game.id}`, // Asumsi kamu punya halaman detail game nanti
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))
  const bannerEntries = BANNERS.map((banner) => ({
    url: `${baseUrl}${banner.src}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...routes, ...bannerRoutes, ...gameRoutes, ...bannerEntries,]
}