import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Mengizinkan Googlebot merayapi seluruh folder dan file
      disallow: '/private/', // Opsional: cegah folder rahasia jika ada
    },
    sitemap: 'https://coinqqslotvip.com/sitemap.xml', // Sesuaikan dengan domain kamu nanti
  }
}