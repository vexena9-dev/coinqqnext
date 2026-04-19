'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { BANNERS, GAMES } from './data/banners';
import { 
  Home as HomeIcon, 
  Flame, 
  X, 
  User, 
  Trophy, 
  Zap, 
  Menu, 
  Megaphone, 
  Users, 
  Link as LinkIcon, 
  BarChart3, 
  Headphones,
  Info
} from 'lucide-react';

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data General untuk Mobile Menu (Agar sama dengan Sidebar Desktop)
  const generalMenuItems = [
    { name: 'MM Tangkas', icon: <Zap size={20} /> },
    { name: 'Togel', icon: <Trophy size={20} /> },
    { name: 'Promosi', icon: <Megaphone size={20} /> },
    { name: 'Referral', icon: <Users size={20} /> },
    { name: 'Link Alternatif', icon: <LinkIcon size={20} /> },
    { name: 'RTP Live', icon: <BarChart3 size={20} /> },
    { name: 'Bantuan', icon: <Headphones size={20} /> },
    { name: 'Tentang Kami', icon: <Info size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans">
      {/* Navbar Atas */}
      <nav className="border-b border-white/5 bg-[#0f0f0f]/95 backdrop-blur-md px-4 md:px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="/logo.webp" 
            alt="COINQQSLOT Logo" 
            className="h-7 md:h-10 w-auto object-contain transition group-hover:scale-105"
          />
        </div>
        <div className="flex gap-3">
          <button onClick={() => setShowModal(true)} className="px-5 py-2 text-xs font-bold bg-[#222] border border-white/10 rounded-lg uppercase">Masuk</button>
          <button onClick={() => setShowModal(true)} className="px-5 py-2 text-xs font-bold bg-yellow-500 text-black rounded-lg uppercase">Daftar</button>
        </div>
      </nav>

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
    pauseOnMouseEnter: false // Agar tidak berhenti saat mouse di atas banner
  }}
onSwiper={(swiper) => {
  setTimeout(() => {
    // Hapus baris swiper.autoplay.run() yang bikin error
    swiper.autoplay.start();
  }, 500);
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
              <button key={item.name} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition group">
                <div className="text-yellow-500">{item.icon}</div>
                <span className="font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">{item.name}</span>
              </button>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <button className="flex items-center gap-4 p-4 rounded-2xl bg-yellow-500 text-black font-bold uppercase">
              <User size={20} />
              <span>Profil Akun</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0f0f0f]/95 border-t border-white/10 px-6 flex justify-between items-center z-50 shadow-2xl">
        <button className="flex flex-col items-center gap-1 text-yellow-500">
          <HomeIcon size={22} />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
          <Trophy size={22} />
          <span className="text-[10px] font-bold uppercase">Promo</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
          <Zap size={22} />
          <span className="text-[10px] font-bold uppercase">Live</span>
        </button>
        {/* Tombol Menu sebagai pengganti Akun */}
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