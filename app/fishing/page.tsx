'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Anchor, Waves, Target, Zap, Play, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function FishingPage() {
  // Filter data kategori fishing dari pusat data
  const fishingGames = GAMES.filter(game => game.category === 'fishing');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section - Deep Sea Theme */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Anchor size={28} className="animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-500">
                Ocean Hunter Center
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
              Tembak Ikan & Raih Jackpot Jackpot Terbesar di Kedalaman Laut
            </p>
          </div>

          {/* Fishing Action Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Target size={18} />, label: 'Auto Lock Aim' },
              { icon: <Zap size={18} />, label: 'Power Up Weapon' },
              { icon: <Waves size={18} />, label: 'Multiplayer Arena' },
              { icon: <LifeBuoy size={18} />, label: 'Easy Withdraw' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-cyan-600/5 border border-cyan-600/20 rounded-2xl text-cyan-400 group hover:bg-cyan-600/10 transition-all">
                {item.icon}
                <span className="text-[9px] font-black uppercase mt-2 text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Fishing Grid - Portrait Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {fishingGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-cyan-600/50 transition-all duration-500 shadow-2xl">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  
                  {/* Jackpot Badge */}
                  <div className="absolute top-4 left-4 bg-cyan-600/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-900/40">
                    <span className="text-[9px] font-black text-white italic uppercase tracking-widest">BIG JACKPOT</span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-60px] bg-gradient-to-t from-[#080808] via-[#080808] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-cyan-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">
                    {game.provider}
                  </p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-[20px] bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-black font-black uppercase italic text-xs shadow-lg shadow-cyan-900/40 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Fishing & Arcade Focus */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-cyan-500 tracking-tighter leading-tight">
                COINQQSLOT: Situs Judi Tembak Ikan Online Terpercaya & Game Arcade Terlengkap
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Siapkan senjata Anda dan jelajahi kekayaan bawah laut di <Link href="/" className="text-cyan-500 hover:text-white transition font-black underline decoration-cyan-500/30 underline-offset-4">{SITE_CONFIG.name}</Link>. Game <strong className="text-white">Tembak Ikan Online</strong> (Fishing) merupakan salah satu permainan arcade paling favorit karena menggabungkan keseruan bermain video game dengan peluang memenangkan hadiah uang tunai yang sangat besar.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-cyan-500 pl-4">
                  Provider Tembak Ikan Kelas Dunia
                </h3>
                <p>
                  Kami bekerja sama dengan pengembang game global untuk memastikan grafik yang memukau dan gameplay yang lancar. Anda dapat menikmati berbagai variasi game dari provider ternama:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-cyan-900/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Joker Gaming Fishing:</strong> Pelopor game tembak ikan dengan jackpot progresif paling melegenda.</li>
                    <li><strong>Spadegaming Fishing:</strong> Menawarkan tema mitologi Asia dengan visual yang luar biasa indah.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>CQ9 & Microgaming:</strong> Game arcade cepat dengan fitur multiplier senjata yang mematikan.</li>
                    <li><strong>Pragmatic Play Fishing:</strong> Inovasi terbaru dengan misi harian dan bonus melimpah.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-cyan-500 pl-4">
                  Tips Menang Tembak Ikan Online
                </h3>
                <p>
                  Kunci utama dalam memenangkan permainan tembak ikan di <strong className="text-white">{SITE_CONFIG.name}</strong> adalah pengelolaan amunisi (chip) dan target yang tepat. Jangan hanya menembak secara acak; gunakan fitur <strong className="text-cyan-400">Lock Aim</strong> untuk mengunci monster laut besar atau bos yang memiliki nilai jackpot tinggi. Selalu pantau halaman <Link href="/rtp-live" className="text-cyan-400 underline italic">RTP Live Hari Ini</Link> untuk melihat game fishing mana yang sedang memberikan pembayaran terbaik.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-cyan-500 pl-4">
                  Akses Cepat & Layanan 24 Jam
                </h3>
                <p>
                  Nikmati kemudahan deposit dan withdraw melalui sistem otomatis kami yang hanya membutuhkan waktu kurang dari 3 menit. Jika Anda mengalami kesulitan saat login, gunakan <Link href="/link-alternatif" className="text-cyan-500 underline italic">Link Alternatif Resmi Fishing</Link> agar sesi bermain Anda tidak terganggu. Layanan customer service kami selalu siaga 24/7 untuk membantu Anda menjadi pemburu laut terbaik.
                </p>

                <div className="mt-12 p-8 bg-cyan-600/5 border border-cyan-600/20 rounded-[40px] italic font-bold text-center text-cyan-500">
                  <p className="text-sm md:text-base mb-4">
                    "Taklukkan monster laut sekarang dan jadilah penguasa samudera di COINQQSLOT!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-cyan-600 text-black px-10 py-4 rounded-full not-italic font-black hover:bg-cyan-500 transition shadow-lg shadow-cyan-500/20"
                  >
                    DAFTAR & TEMBAK SEKARANG
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}