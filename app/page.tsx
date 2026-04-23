'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { BANNERS, GAMES } from './data/banners';
import Link from 'next/link';
import { 
  Home as HomeIcon, Flame, X, User, Trophy, Zap, Menu, Gamepad2, 
  Dices, Spade, Ticket, Fish, Users, 
  Headphones, Link as LinkIcon, Info,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTx, setCurrentTx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [liveGames, setLiveGames] = useState(GAMES);

  const LIVE_TRANSACTIONS = [
    { id: 1, user: "Fin***", amount: "IDR 250.000", type: "Withdraw", game: "Mahjong Ways" },
    { id: 2, user: "Riz***", amount: "IDR 1.000.000", type: "Withdraw", game: "Gates of Olympus" },
    { id: 3, user: "Sya***", amount: "IDR 50.000", type: "Deposit" },
    { id: 4, user: "And***", amount: "IDR 3.500.000", type: "Withdraw", game: "Sweet Bonanza" },
    { id: 5, user: "Ray***", amount: "IDR 250.000", type: "Withdraw", game: "Baccarat" },
    { id: 6, user: "Men***", amount: "IDR 1.200.100", type: "Deposit"},
    { id: 7, user: "Tiu***", amount: "IDR 50.001", type: "Deposit" },
    { id: 8, user: "Ire***", amount: "IDR 300.000", type: "Withdraw", game: "Mahjong Wins" },
    { id: 9, user: "Tiu***", amount: "IDR 50.001", type: "Withdraw", game: "Spaceman" },
    { id: 10, user: "Men***", amount: "IDR 1.020.123", type: "Withdraw", game: "Roulette" },
    { id: 11, user: "Sya***", amount: "IDR 50.000", type: "Withdraw", game: "Starlight Princess" },
  ];

  // Logic: Auto-update RTP tiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveGames((prevGames) =>
        prevGames.map((game) => {
          const change = (Math.random() * 0.4 - 0.2); 
          let newRtp = parseFloat((game.rtp + change).toFixed(1));
          if (newRtp > 99) newRtp = 99;
          if (newRtp < 65) newRtp = 65;
          return { ...game, rtp: newRtp };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Logic: Live Transaction Pop-up
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        setCurrentTx((prev) => (prev + 1) % LIVE_TRANSACTIONS.length);
        setIsVisible(true);
      }, 500); 
    }, 5000);
    return () => clearInterval(interval);
  }, [LIVE_TRANSACTIONS.length]);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-8 pb-24 overflow-hidden">
          {/* Swiper Banner */}
          <div className="w-full mb-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[#111]">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect={'fade'}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {BANNERS.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
                    <img src={banner.src} alt={banner.alt} className="w-full h-full object-fill md:object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RTP TERPANAS SECTION - Mengurutkan otomatis berdasarkan RTP tertinggi */}
          <div className="mt-4 mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500 animate-pulse">
                  <Zap size={22} className="fill-yellow-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">RTP Terpanas Hari Ini</h3>
              </div>
              <Link href="/rtp-live" className="text-[10px] font-black text-yellow-500 uppercase border border-yellow-500/20 px-4 py-1.5 rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                Lihat Semua
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...liveGames]
                .sort((a, b) => b.rtp - a.rtp) 
                .slice(0, 4) 
                .map((game) => (
                  <div key={game.id} className="relative group overflow-hidden rounded-2xl border border-white/5 bg-[#121212] p-2 transition-all duration-700">
                    <div className="absolute top-2 right-2 z-10 bg-red-600 text-[8px] font-black px-2 py-0.5 rounded-full animate-bounce">
                      HOT
                    </div>
                    <img src={game.img} alt={game.name} className="w-full aspect-square object-cover rounded-xl mb-3 shadow-lg" />
                    <div className="px-1">
                      <span className="text-[10px] font-bold truncate block uppercase text-gray-500 mb-2">{game.name}</span>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-green-400">{game.rtp}%</span>
                        <div className="w-16 h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                          <div 
                            className="h-full bg-green-500 transition-all duration-1000" 
                            style={{ width: `${game.rtp}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* PROMO PREVIEW */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6 text-blue-500">
              <div className="flex items-center gap-3">
                <Trophy size={20} className="fill-blue-500" />
                <h3 className="text-lg md:text-2xl font-black uppercase italic text-white">Event & Bonus</h3>
              </div>
              <Link href="/promosi" className="text-xs font-bold uppercase tracking-tighter">Lihat Semua</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/promosi" className="relative h-40 md:h-48 rounded-3xl overflow-hidden border border-white/10 group shadow-lg">
                <img src="/panvlet.jpg" alt="Promo Utama" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-5 flex flex-col justify-end">
                  <h4 className="font-black text-lg uppercase italic leading-none">Bonus Deposit 100%</h4>
                </div>
              </Link>
              <Link href="/promosi" className="relative h-40 md:h-48 rounded-3xl overflow-hidden border border-white/10 group shadow-lg">
                <img src="/banners/mistery-box.png" alt="Promo Mingguan" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-5 flex flex-col justify-end">
                  <h4 className="font-black text-lg uppercase italic leading-none">Mistery Box</h4>
                </div>
              </Link>
            </div>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Link href="/referral" className="bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 p-6 rounded-3xl group hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3 text-blue-400"><Users size={24} /><h4 className="font-black italic uppercase">Referral</h4></div>
              <p className="text-[10px] text-gray-400 leading-tight uppercase font-bold">Nikmati komisi seumur hidup.</p>
            </Link>
            <Link href="/link-alternatif" className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/20 p-6 rounded-3xl group hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3 text-purple-400"><LinkIcon size={24} /><h4 className="font-black italic uppercase">Anti Blokir</h4></div>
              <p className="text-[10px] text-gray-400 leading-tight uppercase font-bold">Akses aman link resmi kami.</p>
            </Link>
            <Link href="/contact" className="bg-gradient-to-br from-green-600/20 to-transparent border border-green-500/20 p-6 rounded-3xl group hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3 text-green-400"><Headphones size={24} /><h4 className="font-black italic uppercase">Dukungan 24/7</h4></div>
              <p className="text-[10px] text-gray-400 leading-tight uppercase font-bold">Layanan Live Chat nonstop.</p>
            </Link>
          </div>
        </main>
      </div>

      {/* Pop-up Toast Transaksi */}
      <div className={`fixed bottom-24 md:bottom-10 left-4 z-[60] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-[#161616]/95 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[240px]">
          <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-500"><Zap size={20} className="fill-yellow-500" /></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase">{LIVE_TRANSACTIONS[currentTx]?.user}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${LIVE_TRANSACTIONS[currentTx]?.type.toLowerCase() === 'withdraw' ? 'bg-green-500 text-black' : 'bg-blue-500 text-white'}`}>{LIVE_TRANSACTIONS[currentTx]?.type}</span>
            </div>
            <span className="text-sm font-black text-white">{LIVE_TRANSACTIONS[currentTx]?.amount}</span>
          </div>
          <button onClick={() => setIsVisible(false)} className="ml-2 text-gray-500 hover:text-white"><X size={14} /></button>
        </div>
      </div>

      {/* CSS Global */}
      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #eab308 !important; opacity: 1; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </div>
  );
}