import { BANNERS, MENU_ITEMS } from '@/app/data/banners';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Definisikan tipe params sebagai Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return MENU_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

// Tambahkan await di sini untuk memperbaiki error 'split'
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // Wajib di-await agar tidak undefined
  
  if (!slug) return { title: 'COINQQSLOT' };

  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `COINQQSLOT - ${title}`,
    description: `Selamat datang di halaman resmi ${title} COINQQSLOT.`,
  };
}

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
  'pp98', 'slot-mania', 'pengaduan-konsumen', 'welcome-bonus', 'deposit-bonus', 'free-spins', 'cashback', 'loyalty-points', 'vip-exclusive-bonuses'
];

const ALL_VALID_SLUGS = [...MENU_ITEMS.map(item => item.slug), ...ADDITIONAL_SLUGS];

export default async function DetailPage({ params }: Props) {
  // Wajib di-await agar tidak error toLowerCase
  const { slug } = await params;

  if (!slug || !ALL_VALID_SLUGS.includes(slug.toLowerCase())) {
    notFound();
  }

  const displayName = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="flex-1 p-4 md:p-8 min-h-screen bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-black mb-6 text-yellow-500 border-l-4 border-yellow-500 pl-4">
          HALAMAN {displayName}
        </h1>
        
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex flex-col items-center text-center py-10">
            <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-yellow-500 text-4xl animate-pulse">⏳</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Segera Hadir!</h2>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Saat ini tim kami sedang menyiapkan konten eksklusif untuk halaman <span className="text-yellow-500 font-semibold">{displayName}</span>. 
              Silakan kembali lagi dalam waktu dekat.
            </p>
            
            <Link 
              href="/" 
              className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}