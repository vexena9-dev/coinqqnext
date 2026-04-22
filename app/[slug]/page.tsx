import { MENU_ITEMS } from '../data/banners'; // Gunakan path relatif
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Pastikan MENU_ITEMS sudah di-export di banners.ts
  return MENU_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!slug) return { title: 'COINQQSLOT' };

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { title: `COINQQSLOT - ${title}` };
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;

  // Gabungkan slug dari menu utama dan daftar tambahan manual
  const ADDITIONAL_SLUGS = [
  'register', 'login', 'popular-slots', 'categories', 'vip-member', 'tournaments', 'news', 'blog',
  'events', 'announcements', 'testimonials', 'faqs', 'support', 'terms', 'privacy',
  'referal-program', 'affiliate', 'mobile-app', 'responsible-gaming', 'payment-methods', 'security',
  'cario', 'habanero', 'idnslot', 'microgaming', 'pragmatic-play', 'playtech', 'yggdrasil',
  'customer-complaints', 'live-chat-support', 'email-support', 'phone-support', 'social-media-support',
  'deposit-methods', 'withdrawal-methods', 'transaction-times', 'limits-and-fees', 'security-measures',
  'game-rules', 'betting-limits', 'payout-information', 'bonus-terms', 'wagering-requirements',
  'game-providers', 'software-information', 'licensing-and-regulation', 'fair-play-policies', 'privacy-policies',
  'account-management', 'technical-support', 'responsible-gaming-resources', 'promotions-and-bonuses',
  'fat-panda', 'bng', '5g', 'spinomenal', 'evoplay', 'red-tiger', 'push-gaming', 'relax-gaming', 'blueprint-gaming', 'elk-studios',
  'ttg', 'wazdan', 'nolimitcity', 'gamomat', 'endorphina', 'btg', 'kalamba-games', 'iron-dog-studio', 'gameart',
  'pp98', 'slot-mania', 'pengaduan-konsumen', 'welcome-bonus', 'deposit-bonus', 'free-spins', 'cashback', 'loyalty-points', 'vip-exclusive-bonuses', 
  'sports', 'esports', 'slots', 'casino', 'togel', 'poker', 'e-lottery', 
  'fishing', 'arcade', 'mm-tangkas', 'promosi', 'referral', 
  'link-alternatif', 'rtp-live', 'about', 'contact', 'faq'
];
  const ALL_VALID_SLUGS = [...MENU_ITEMS.map(item => item.slug), ...ADDITIONAL_SLUGS];

  if (!slug || !ALL_VALID_SLUGS.includes(slug.toLowerCase())) {
    notFound();
  }

  const displayName = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="flex-1 p-4 md:p-8 min-h-[70vh] bg-[#080808]">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-black mb-6 text-yellow-500 border-l-4 border-yellow-500 pl-4 uppercase">
          Halaman {displayName}
        </h1>
        <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 text-center">
          <span className="text-5xl block mb-4">⏳</span>
          <h2 className="text-xl font-bold mb-2">Segera Hadir!</h2>
          <p className="text-gray-400">Konten untuk {displayName} sedang kami siapkan.</p>
          <Link href="/" className="mt-8 inline-block bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}