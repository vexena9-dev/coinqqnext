import { MENU_ITEMS } from '../data/banners';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE_CONFIG } from '../data/config'; // Pastikan path ke config sudah benar
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Daftar slug tambahan untuk validasi
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

export async function generateStaticParams() {
  return MENU_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

// Fungsi SEO: Memberikan judul unik untuk setiap slug di Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const displayName = slug.replace(/-/g, ' ').toUpperCase();
  
  return {
    title: `${displayName} | ${SITE_CONFIG.name} - Hub Hiburan Resmi`,
    description: `Jelajahi informasi eksklusif mengenai ${displayName} di platform ${SITE_CONFIG.name}. Keamanan terjamin dengan sistem enkripsi 256-bit.`,
    alternates: {
      canonical: `https://coinqqslotvip.com/${slug}`, // SEO: Mencegah duplicate content
    }
  };
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;
  const ALL_VALID_SLUGS = [...MENU_ITEMS.map(item => item.slug), ...ADDITIONAL_SLUGS];

  if (!slug || !ALL_VALID_SLUGS.includes(slug.toLowerCase())) {
    notFound();
  }

  const displayName = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="flex-1 p-4 md:p-8 min-h-[70vh] bg-[#080808]">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl md:text-4xl font-black mb-8 text-yellow-500 border-l-4 border-yellow-500 pl-4 uppercase italic tracking-tighter">
          Eksklusif: {displayName}
        </h1>

        <div className="bg-[#111] p-8 md:p-16 rounded-[40px] border border-white/5 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <span className="text-6xl block mb-6 animate-bounce">🚀</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter text-white">
              Segera Mengudara!
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
                Kami sedang melakukan kalibrasi sistem tingkat tinggi untuk memastikan kategori <span className="text-yellow-500">{displayName}</span> hadir dengan standar kemenangan tertinggi. 
              </p>
              
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 italic">
                <p className="text-[11px] md:text-xs text-gray-500 leading-loose uppercase">
                  "Inovasi tidak bisa terburu-buru. Kami sedang mengintegrasikan provider terbaik dunia ke dalam platform {SITE_CONFIG.name} khusus untuk Anda."
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                <Link 
                  href="/" 
                  className="w-full md:w-auto bg-yellow-500 text-black px-10 py-4 rounded-2xl font-black uppercase italic text-xs hover:bg-white transition-all active:scale-95 shadow-lg"
                >
                  Eksplor Game Lain
                </Link>
                <Link 
                  href="/promosi" 
                  className="w-full md:w-auto border border-white/10 text-white px-10 py-4 rounded-2xl font-black uppercase italic text-[10px] hover:bg-white/5 transition-all"
                >
                  Cek Bonus Terbaru
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Manfaat Tambahan untuk SEO */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
          <div className="p-6 rounded-3xl border border-white/5 bg-[#111]">
              <h4 className="text-yellow-500 font-black uppercase italic text-sm mb-2">Keamanan Terjamin</h4>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Enkripsi data 256-bit tingkat tinggi di situs {SITE_CONFIG.name}.</p>
          </div>
          <div className="p-6 rounded-3xl border border-white/5 bg-[#111]">
              <h4 className="text-yellow-500 font-black uppercase italic text-sm mb-2">Sistem Fair Play</h4>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Layanan dukungan 24/7 untuk kenyamanan bermain Anda.</p>
          </div>
        </div>
      </div>
    </main>
  );
}