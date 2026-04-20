import { MetadataRoute } from 'next'
import { BANNERS, GAMES } from './data/banners'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coinqqslotvip.com'

  // 1. Daftar Semua Slug Halaman
  const slugs = [
    '', 'sports', 'esports', 'slots', 'casino', 'togel', 'poker', 'e-lottery', 
    'fishing', 'arcade', 'mm-tangkas', 'promosi', 'referral', 'link-alternatif', 
    'rtp-live', 'about', 'contact', 'register', 'login', 'popular-slots', 
    'categories', 'vip-member', 'tournaments', 'news', 'blog', 'events', 
    'announcements', 'testimonials', 'faqs', 'support', 'terms', 'privacy', 
    'referal-program', 'affiliate', 'mobile-app', 'responsible-gaming', 
    'payment-methods', 'security', 'cario', 'habanero', 'idnslot', 'microgaming', 
    'pragmatic-play', 'playtech', 'yggdrasil', 'customer-complaints', 'live-chat-support', 
    'email-support', 'phone-support', 'social-media-support', 'deposit-methods', 
    'withdrawal-methods', 'transaction-times', 'limits-and-fees', 'security-measures', 
    'game-rules', 'betting-limits', 'payout-information', 'bonus-terms', 
    'wagering-requirements', 'game-providers', 'software-information', 
    'licensing-and-regulation', 'fair-play-policies', 'privacy-policies', 
    'account-management', 'technical-support', 'responsible-gaming-resources', 
    'promotions-and-bonuses', 'fat-panda', 'bng', '5g', 'spinomenal', 'evoplay', 
    'red-tiger', 'push-gaming', 'relax-gaming', 'blueprint-gaming', 'elk-studios', 
    'ttg', 'wazdan', 'nolimitcity', 'gamomat', 'endorphina', 'btg', 'kalamba-games', 
    'iron-dog-studio', 'gameart', 'pp98', 'slot-mania', 'pengaduan-konsumen', 
    'welcome-bonus', 'deposit-bonus', 'free-spins', 'cashback', 'loyalty-points', 
    'vip-exclusive-bonuses'
  ];

  const mainRoutes = slugs.map((slug) => ({
    url: `${baseUrl}${slug === '' ? '' : `/${slug}`}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: slug === '' ? 1 : 0.8,
  }));

  // 2. Sitemap untuk Game (SEO Konten)
  const gameRoutes = GAMES.map((game) => ({
    url: `${baseUrl}/games/${game.id}`, 
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...gameRoutes];
}