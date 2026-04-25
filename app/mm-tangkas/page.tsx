'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { LayoutGrid, ShieldCheck, Zap, Trophy, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function TangkasPage() {
  // Filter data kategori tangkas dari pusat data
  const tangkasGames = GAMES.filter(game => game.category === 'tangkas');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section - Classic Royal Theme */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-red-700/20 rounded-lg text-red-500 shadow-[0_0_15px_rgba(185,28,28,0.3)]">
                <Star size={28} className="fill-red-500 animate-spin-slow" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-yellow-500">
                MM Tangkas Royal Center
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
              Uji Keberuntungan & Strategi di Permainan Bola Tangkas Klasik
            </p>
          </div>

          {/* Tangkas Feature Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <LayoutGrid size={18} />, label: 'Classic 7-Card' },
              { icon: <Zap size={18} />, label: 'Fast Settlement' },
              { icon: <ShieldCheck size={18} />, label: '100% Fair Engine' },
              { icon: <Trophy size={18} />, label: 'Royal Flush Bonus' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-red-900/5 border border-red-900/10 rounded-[2rem] group hover:bg-red-800/10 hover:border-red-500/30 transition-all duration-300">
                <div className="text-red-500 mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Tangkas Games Grid - Portrait Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {tangkasGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[35px] overflow-hidden border border-white/5 hover:border-red-600/50 transition-all duration-500 shadow-2xl">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  
                  {/* Badge Classic */}
                  <div className="absolute top-4 left-4 bg-red-700/90 backdrop-blur-md px-3 py-1 rounded-full border border-red-400/30">
                    <span className="text-[8px] font-black text-white italic uppercase tracking-widest">LEGENDARY</span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-70px] bg-gradient-to-t from-[#080808] via-[#080808] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-red-500 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">
                    {game.provider}
                  </p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-[20px] bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white font-black uppercase italic text-xs shadow-lg shadow-red-900/40 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-white" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Bola Tangkas Focus */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-red-600 tracking-tighter leading-tight">
                COINQQSLOT: Bandar Bola Tangkas Online & MM Tangkas Terpercaya Indonesia
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Kembalikan memori kejayaan Anda di meja ketangkasan kartu bersama <Link href="/" className="text-red-600 hover:text-white transition font-black underline decoration-red-600/30 underline-offset-4">{SITE_CONFIG.name}</Link>. Permainan <strong className="text-white">Bola Tangkas Online</strong> atau yang lebih dikenal dengan MM Tangkas (Mickey Mouse) adalah salah satu permainan kartu paling ikonik yang tetap menjadi primadona bagi para pemain veteran maupun pemula di Indonesia.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-700 pl-4">
                  Mengapa Bermain Tangkas di {SITE_CONFIG.name}?
                </h3>
                <p>
                  Kami menghadirkan pengalaman bermain bola tangkas asli dengan sistem mesin yang fair dan transparan. Tidak ada manipulasi angka atau campur tangan bot, sehingga setiap kartu yang keluar murni berdasarkan keberuntungan dan strategi pembacaan pola Anda.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-red-900/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2 text-red-100/70">
                    <li><strong>Tangkasnet & 88Tangkas:</strong> Akses ke dua provider tangkas paling legendaris dengan satu akun.</li>
                    <li><strong>Bonus Hadiah Melimpah:</strong> Dapatkan bonus tambahan untuk kombinasi Royal Flush, 5 of a Kind, hingga Four of a Kind.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2 text-red-100/70">
                    <li><strong>Akses Tanpa Download:</strong> Mainkan langsung melalui browser smartphone atau desktop Anda dengan lancar.</li>
                    <li><strong>Sistem Deposit 24 Jam:</strong> Proses transaksi tercepat untuk mengisi saldo koin tangkas Anda kapan saja.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-700 pl-4">
                  Strategi Menang MM Tangkas
                </h3>
                <p>
                  Kunci utama dalam memenangkan permainan bola tangkas di <strong className="text-white">{SITE_CONFIG.name}</strong> adalah kesabaran dalam membaca "jalannya mesin". Dengan fitur <Link href="/rtp-live" className="text-red-500 underline font-black italic">RTP Live Tangkas</Link>, Anda bisa melihat meja mana yang sedang memberikan pembayaran koin tertinggi hari ini. Jangan lewatkan kesempatan untuk meraih barang berharga atau jackpot harian yang disediakan oleh provider Tangkas pilihan Anda.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-700 pl-4">
                  Layanan Bantuan & Link Alternatif
                </h3>
                <p>
                  Jika Anda mengalami kendala saat melakukan pengisian koin atau penarikan kemenangan, tim <Link href="/contact" className="text-red-500 underline">Customer Service</Link> kami siap melayani Anda melalui Live Chat dan WhatsApp. Pastikan Anda selalu menggunakan <Link href="/link-alternatif" className="text-red-500 underline italic">Link Alternatif Tangkas</Link> resmi kami untuk menghindari gangguan internet positif dan menjaga keamanan akun Anda tetap terlindungi.
                </p>

                <div className="mt-12 p-8 bg-red-700/5 border border-red-700/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-red-600 text-sm md:text-base mb-4">
                    "Susun kartumu, dapatkan Royal Flush, dan jadilah raja tangkas di COINQQSLOT!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-red-700 text-white px-10 py-4 rounded-full not-italic font-black hover:bg-red-600 transition shadow-lg shadow-red-700/40"
                  >
                    DAFTAR & MAIN TANGKAS
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