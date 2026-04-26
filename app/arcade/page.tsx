'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Joystick, Zap, Cpu, Sparkles, Play, Monitor } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function ArcadePage() {
    
  const arcadeGames = GAMES.filter(game => (game as any).category === 'arcade');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <div className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section - Retro Neon Theme */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <Joystick size={28} className="animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500">
                Ultimate Arcade Zone
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
              Mainkan Game Ketangkasan Klasik dengan Jackpot Digital Modern
            </p>
          </div>

          {/* Arcade Feature Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Monitor size={18} />, label: 'Ultra HD Graphics' },
              { icon: <Zap size={18} />, label: 'Fast Game Pace' },
              { icon: <Cpu size={18} />, label: 'Provably Fair' },
              { icon: <Sparkles size={18} />, label: 'Daily Bonuses' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-pink-500/5 border border-pink-500/10 rounded-[2rem] group hover:bg-pink-500/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="text-pink-500 mb-2 group-hover:scale-125 transition-transform drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                  {item.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Arcade Games Grid - Portrait Style */}
          {arcadeGames.length === 0 ? (
            <div className="text-center py-20 mb-16">
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Tidak ada game arcade tersedia saat ini.</p>
            </div>
          ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {arcadeGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[35px] overflow-hidden border border-white/5 hover:border-pink-500/50 transition-all duration-500 shadow-2xl">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  
                  {/* Neon Badge */}
                  <div className="absolute top-4 right-4 bg-pink-600/90 backdrop-blur-md px-3 py-1 rounded-full border border-pink-400/30">
                    <span className="text-[8px] font-black text-white italic uppercase tracking-widest">
                     {(game as any).status || 'ARCADE'}
                    </span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-70px] bg-gradient-to-t from-[#080808] via-[#080808] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-pink-500 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">
                    Provider: {game.provider}
                  </p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-[20px] bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase italic text-xs shadow-lg shadow-pink-900/40 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-white" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* SEO Article Section - Arcade & Mini Games Focus */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] -z-10" />
              
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-pink-500 tracking-tighter leading-tight">
                COINQQSLOT: Pusat Game Arcade Online & Mini Games Paling Gacor 2026
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Nikmati nostalgia bermain mesin dingdong dalam bentuk digital yang lebih modern dan menguntungkan hanya di <Link href="/" className="text-pink-500 hover:text-white transition font-black underline decoration-pink-500/30 underline-offset-4">{SITE_CONFIG.name}</Link>. Kategori <strong className="text-white">Arcade Online</strong> kami dirancang untuk Anda yang menyukai permainan cepat dengan mekanisme yang sederhana namun menawarkan pembayaran kemenangan yang fantastis.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-pink-500 pl-4">
                  Variasi Game Arcade Paling Seru
                </h3>
                <p>
                  Kami menghadirkan koleksi game arcade dari provider ternama seperti <strong className="text-pink-500">Pragmatic Play, CQ9, dan Spadegaming</strong>. Setiap permainan memiliki karakteristik unik, mulai dari tebak pemenang, balapan virtual, hingga permainan ketangkasan tangan yang memerlukan konsentrasi tinggi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-pink-900/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2 text-pink-100/70">
                    <li><strong>Coin Toss & Card Games:</strong> Game tebak koin atau kartu dengan hasil instan.</li>
                    <li><strong>Virtual Racing:</strong> Pasang taruhan pada balapan kuda atau anjing virtual yang memacu adrenalin.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2 text-pink-100/70">
                    <li><strong>Climb to Victory:</strong> Bantu karakter Anda memanjat rintangan untuk mendapatkan multiplier besar.</li>
                    <li><strong>Bingo & Keno:</strong> Permainan angka cepat yang sangat populer di kalangan pecinta arcade.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-pink-500 pl-4">
                  Mengapa Memilih Arcade di {SITE_CONFIG.name}?
                </h3>
                <p>
                  Keunggulan utama bermain arcade di platform kami adalah transparansi dan keadilan (Fair Play). Seluruh sistem kami menggunakan teknologi RNG yang telah terverifikasi secara internasional. Selain itu, Anda bisa memantau <Link href="/rtp-live" className="text-pink-400 underline font-black italic">RTP Live Arcade</Link> untuk melihat persentase kemenangan dari setiap mesin yang sedang aktif, sehingga strategi bermain Anda menjadi lebih terukur.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-pink-500 pl-4">
                  Kemudahan Bertransaksi & Akses Aman
                </h3>
                <p>
                  Dapatkan akses tanpa gangguan melalui <Link href="/link-alternatif" className="text-pink-500 underline italic">Link Alternatif Resmi Arcade</Link>. Kami mendukung berbagai metode pembayaran mulai dari transfer bank lokal hingga dompet digital. Seluruh proses deposit dan penarikan saldo ditangani oleh sistem otomatis tercepat, memungkinkan Anda untuk fokus sepenuhnya pada permainan dan kemenangan Anda.
                </p>

                <div className="mt-12 p-8 bg-pink-600/5 border border-pink-600/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-pink-500 text-sm md:text-base mb-4">
                    "Uji ketangkasanmu sekarang, kumpulkan poinnya, dan tukarkan dengan kemenangan uang tunai di COINQQSLOT!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full not-italic font-black hover:bg-pink-500 transition shadow-lg shadow-pink-500/20"
                  >
                    MAIN ARCADE SEKARANG
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}