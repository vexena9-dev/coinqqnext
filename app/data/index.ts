
export interface Game {
  id: number;
  name: string;
  provider: string;
  rtp: number;
  img: string;
  category: string;
}

export * from './banners';
export * from './games';

export const SITE_CONFIG = {
  name: 'COINQQSLOT',
  url: 'https://heylink.me/coinqqs/',
  description: 'Situs Judi Online Terpercaya dengan RTP Live Gacor 2026',
};

// Tambahan opsional untuk navigasi agar konsisten di seluruh web
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Slots', href: '/slots' },
  { name: 'Sports', href: '/sports' },
  { name: 'Casino', href: '/casino' },
  { name: 'RTP Live', href: '/rtp-live' },
  { name: 'Promosi', href: '/promosi' },
  { name: 'MM Tangkas', href: '/mm-tangkas' },
  { name: 'Arcade', href: '/arcade' },
  { name: 'Fishing', href: '/fishing' },
  { name: 'Poker', href: '/poker' },
  { name: 'E-Lottery', href: '/e-lottery' },
  { name: 'Togel', href: '/togel' },
  { name: 'Referral', href: '/referral' },
  { name: 'Link Alternatif', href: '/link-alternatif' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Kontak', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
];
