'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { BANNERS, GAMES } from './data/banners';
import Link from 'next/link';
import { 
  Home as HomeIcon, 
  Flame, 
  X, 
  User, 
  Trophy, 
  Zap, 
  Menu, 
  Gamepad2, 
  Coins, 
  Dices, 
  Spade, 
  Ticket, 
  Fish, 
  Joystick, 
  Sword,
  Megaphone,
  Users,
  Headphones,
  Link as LinkIcon,
  BarChart3,
  Info,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const generalMenuItems = [
  { name: 'Sports', icon: <Trophy size={18} />, status: 'NEW', slug: 'sports' },
  { name: 'Esports', icon: <Gamepad2 size={18} />, status: 'NEW', slug: 'esports' },
  { name: 'Slots', icon: <Flame size={18} />, status: 'HOT', slug: 'slots' },
  { name: 'Casino', icon: <Dices size={18} />, status: '', slug: 'casino' },
  { name: 'Togel', icon: <Ticket size={18} />, status: '', slug: 'togel' },
  { name: 'Poker', icon: <Spade size={18} />, status: '', slug: 'poker' },
  { name: 'E-Lottery', icon: <Coins size={18} />, status: '', slug: 'e-lottery' },
  { name: 'Fishing', icon: <Fish size={18} />, status: '', slug: 'fishing' },
  { name: 'Arcade', icon: <Joystick size={18} />, status: '', slug: 'arcade' },
  { name: 'MM Tangkas', icon: <Sword size={18} />, status: '', slug: 'mm-tangkas' },
  { name: 'Referral', icon: <Users size={20} />, slug: 'referral' },
  { name: 'Link Alternatif', icon: <LinkIcon size={20} />, slug: 'link-alternatif' },
  { name: 'Bantuan', icon: <Headphones size={20} />, slug: 'contact' },
  { name: 'Tentang Kami', icon: <Info size={20} />, slug: 'about' },
];
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans">

      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-8 pb-24 overflow-hidden">
          {/* Swiper Banner */}
          <div className="w-full mb-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[#111]">
<Swiper
  modules={[Autoplay, Pagination, EffectFade]}
  effect={'fade'}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  }}

  className="mySwiper"
>
  {BANNERS.map((banner) => (
    <SwiperSlide key={banner.id}>
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
        <img 
          src={banner.src} 
          alt={banner.alt} 
          className="w-full h-full object-fill md:object-cover" 
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          </div>

          {/* Section Game */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3 text-orange-500">
              <Flame size={20} className="fill-orange-500 animate-pulse" />
              <h3 className="text-lg md:text-2xl font-black uppercase italic text-white">Popular Slots</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GAMES.map((game) => (
              <div key={game.id} className="bg-[#121212] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-4 bg-[#161616]">
                  <h4 className="text-[11px] md:text-sm font-bold truncate mb-3">{game.name}</h4>
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                    <span>RTP</span>
                    <span className="text-green-400">{game.rtp}%</span>
                  </div>
                  <div className="w-full h-1 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${game.rtp}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-[#080808]/fb backdrop-blur-md p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-black italic text-yellow-500 uppercase">Menu Coinqqslot</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full">
              <X size={24} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {generalMenuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={`/${item.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)} // Menutup menu setelah klik
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-yellow-500">{item.icon}</div>
                    <span className="font-bold text-gray-300 group-hover:text-white uppercase tracking-wider text-sm">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Menampilkan Badge Status jika ada (NEW/HOT) */}
                  {item.status && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                      item.status === 'HOT' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </Link>
              ))}
            <div className="h-px bg-white/10 my-4" />
            
            <button className="flex items-center gap-4 p-4 rounded-2xl bg-yellow-2400 text-black font-bold uppercase">
              <Link
                  href="https://coinqqslot88.net/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-yellow-500 text-black hover:bg-yellow-200 transition mt-4 w-full"
                  >              
                  <User size={20} />
                  <span className="font-bold uppercase text-sm">PROFIL AKUN</span>
              </Link>
            </button>
          </div>
        </div>
      )}

        {/* Mobile Bottom Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0f0f0f]/95 border-t border-white/10 px-6 flex justify-between items-center z-50 shadow-2xl">
          
          {/* Tombol Home - Tetap di halaman utama */}
          <Link href="/" className="flex flex-col items-center gap-1 text-yellow-500">
            <HomeIcon size={22} />
            <span className="text-[10px] font-bold uppercase">Home</span>
          </Link>

          {/* Tombol Promo - Mengarah ke slug 'promosi' */}
          <Link href="/promosi" className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <Trophy size={22} />
            <span className="text-[10px] font-bold uppercase">Promo</span>
          </Link>

          {/* Tombol RTP Live - Mengarah ke slug 'rtp-live' */}
          <Link href="/rtp-live" className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <Zap size={22} />
            <span className="text-[10px] font-bold uppercase">RTP Live</span>
          </Link>

          {/* Tombol Menu - Membuka Overlay Menu Utama */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`flex flex-col items-center gap-1 transition ${isMobileMenuOpen ? 'text-yellow-500' : 'text-gray-500'}`}
          >
            <Menu size={22} />
            <span className="text-[10px] font-bold uppercase">Menu</span>
          </button>
        </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #eab308 !important; opacity: 1; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </div>
  );
}