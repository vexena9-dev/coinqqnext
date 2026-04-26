'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Spade, ShieldCheck, Users, Trophy, Play } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function PokerPage() {
  // Filter data kategori poker dari pusat data
  const pokerGames = (GAMES as any[]).filter(game => game.category === 'poker');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section - Professional Poker Theme */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-indigo-600/20 rounded-lg text-indigo-400">
                <Spade size={28} className="fill-indigo-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-600">
                Poker & Card Games
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
              Uji Strategi Anda di Meja Kartu Paling Kompetitif
            </p>
          </div>

          {/* Poker Features Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Users size={18} />, label: '100% Player vs Player' },
              { icon: <ShieldCheck size={18} />, label: 'No Bot System' },
              { icon: <Trophy size={18} />, label: 'Jackpot Melimpah' },
              { icon: <Spade size={18} />, label: 'Turnamen Mingguan' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-indigo-600/5 border border-indigo-600/20 rounded-2xl text-indigo-400 group hover:bg-indigo-600/10 transition-all">
                {item.icon}
                <span className="text-[9px] font-black uppercase mt-2 text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Poker Grid - Portrait Style (Matching Casino/Togel) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {pokerGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-indigo-600/50 transition-all duration-500 shadow-2xl">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90" />
                  
                  {/* Badge RTP/Status */}
                  <div className="absolute top-4 left-4 bg-indigo-600/80 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-400/30">
                    <span className="text-[9px] font-black text-white italic uppercase">HOT TABLE</span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-60px] bg-gradient-to-t from-[#111] via-[#111] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-indigo-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">
                    {game.provider}
                  </p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-indigo-600 hover:to-blue-500 text-white font-black uppercase italic text-xs shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-white" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Long Form & Strategy Oriented */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-indigo-400 tracking-tighter leading-tight">
                COINQQSLOT: Situs Judi Poker Online & DominoQQ Terpercaya 100% Player vs Player
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Selamat datang di arena kartu paling bergengsi, <Link href="/" className="text-indigo-400 hover:text-white transition font-black underline decoration-indigo-400/30 underline-offset-4">{SITE_CONFIG.name}</Link>. Kami menghadirkan platform <strong className="text-white">Poker Online</strong> terbaik yang dirancang khusus untuk para pecinta strategi dan adu ketangkasan kartu. Di sini, kami menjamin pengalaman bermain yang murni 100% Player vs Player (PVP) tanpa campur tangan bot atau admin, sehingga kemenangan Anda ditentukan sepenuhnya oleh keahlian Anda sendiri.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-indigo-500 pl-4">
                  Variasi Game Kartu Paling Lengkap
                </h3>
                <p>
                  Sebagai agen resmi dari provider kartu ternama, {SITE_CONFIG.name} menyediakan berbagai jenis permainan tradisional hingga modern yang bisa Anda akses hanya dengan satu akun VIP:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-indigo-900/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Texas Hold'em Poker:</strong> Varian poker paling ikonik di dunia dengan turnamen harian berhadiah besar.</li>
                    <li><strong>DominoQQ:</strong> Permainan kartu domino tradisional yang mengandalkan kombinasi angka tertinggi.</li>
                    <li><strong>Bandar Ceme:</strong> Jadilah bandar dan tantang pemain lain di meja taruhan cepat.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Capsa Susun:</strong> Susun 13 kartu Anda menjadi kombinasi terbaik untuk mengalahkan lawan.</li>
                    <li><strong>Super10 & Sakong:</strong> Game kartu sederhana namun menawarkan adrenalin dan jackpot yang fantastis.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-indigo-500 pl-4">
                  Sistem Fair Play & Keamanan Data Terjamin
                </h3>
                <p>
                  Kami sangat menjaga integritas permainan. Dengan sistem <strong className="text-white">Fair Play</strong> yang ketat, setiap pembagian kartu dilakukan secara acak menggunakan sistem RNG (Random Number Generator) bersertifikasi internasional. Selain itu, <Link href="/link-alternatif" className="text-indigo-400 hover:text-white transition font-black underline italic">Link Alternatif Poker</Link> kami selalu aktif untuk memastikan Anda dapat mengakses meja taruhan kapan pun tanpa hambatan blokir nawala.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-indigo-500 pl-4">
                  Bonus Jackpot & Referral Seumur Hidup
                </h3>
                <p>
                  Jangan lewatkan kesempatan untuk meraih <strong className="text-indigo-400">Global Jackpot</strong> yang terus bertambah setiap detiknya. Selain kemenangan dari meja, Anda juga bisa mendapatkan pasif income melalui program <Link href="/referral" className="text-indigo-400 hover:text-white transition font-black underline italic">Referral Poker</Link>. Cukup ajak teman Anda bermain, dan dapatkan komisi chip gratis yang akan masuk otomatis ke akun Anda setiap minggunya.
                </p>

                <div className="mt-12 p-8 bg-indigo-600/5 border border-indigo-600/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-indigo-400 text-sm md:text-base mb-4">
                    "Tunjukkan kemampuan bluffing Anda dan jadilah raja poker di COINQQSLOT!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full not-italic font-black hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/40"
                  >
                    DAFTAR & MAIN POKER SEKARANG
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