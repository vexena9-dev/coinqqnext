'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Zap, Globe2, BarChart3, ShieldCheck, Play, Award } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function ELotteryPage() {
  // Filter data kategori togel/e-lottery dari pusat data
  const eLotteryGames = GAMES.filter(game => game.category === 'togel');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section - Modern Emerald Theme */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Zap size={28} className="fill-emerald-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-500">
                E-Lottery Next-Gen
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80 leading-tight">
              Sistem Pengundian Angka Digital Tercepat & Transparan
            </p>
          </div>

          {/* E-Lottery Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Globe2 size={18} />, label: 'Global Access', color: 'text-blue-400' },
              { icon: <BarChart3 size={18} />, label: 'Live Analytics', color: 'text-emerald-400' },
              { icon: <ShieldCheck size={18} />, label: 'Verified Results', color: 'text-green-500' },
              { icon: <Award size={18} />, label: 'High Multiplier', color: 'text-yellow-500' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-[2rem] group hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300">
                <div className={`${item.color} mb-2 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>

          {/* E-Lottery Grid - Modern Portrait Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {eLotteryGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[35px] overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-70 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90" />
                  
                  {/* Digital Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/30">
                    <span className="text-[8px] font-black text-white italic uppercase tracking-widest">E-Result</span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-70px] bg-gradient-to-t from-[#080808] via-[#080808] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-emerald-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">
                    Digital Market {game.provider}
                  </p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-[20px] bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-black font-black uppercase italic text-xs shadow-lg shadow-emerald-900/40 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Digital Lottery Focus */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
              
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-emerald-500 tracking-tighter leading-tight">
                E-Lottery {SITE_CONFIG.name}: Revolusi Judi Togel Digital & Live Draw Tercepat
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Selamat datang di masa depan perjudian angka. <Link href="/" className="text-emerald-500 hover:text-white transition font-black underline decoration-emerald-500/30 underline-offset-4">{SITE_CONFIG.name}</Link> menghadirkan fitur <strong className="text-white">E-Lottery</strong>, sebuah platform inovatif yang menggabungkan tradisi menebak angka dengan teknologi pengundian digital terkini. Kami menjamin setiap angka yang keluar diproses secara transparan dan real-time, memberikan Anda peluang kemenangan yang adil tanpa manipulasi.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-emerald-500 pl-4">
                  Kenapa E-Lottery Lebih Unggul?
                </h3>
                <p>
                  Berbeda dengan togel konvensional, E-Lottery menawarkan frekuensi pengundian yang lebih fleksibel dan pilihan pasar yang lebih luas. Anda tidak perlu lagi menunggu waktu yang lama untuk mengetahui hasil keberuntungan Anda.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-emerald-900/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kecepatan Transaksi:</strong> Input angka dan klaim kemenangan dilakukan secara instan melalui saldo akun Anda.</li>
                    <li><strong>Live Streaming Draw:</strong> Saksikan proses pengundian angka secara langsung untuk memastikan keaslian hasil.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Analitik Paito Digital:</strong> Gunakan data statistik keluaran sebelumnya yang disusun secara sistematis untuk mempermudah prediksi Anda.</li>
                    <li><strong>Akses Tanpa Batas:</strong> Bermain kapan saja dan di mana saja melalui <Link href="/link-alternatif" className="text-emerald-500 underline italic">Link Alternatif Resmi</Link> kami.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-emerald-500 pl-4">
                  Keamanan & Lisensi Resmi
                </h3>
                <p>
                  Privasi adalah segalanya di <strong className="text-white">{SITE_CONFIG.name}</strong>. Seluruh taruhan Anda dalam sistem E-Lottery dilindungi oleh protokol keamanan SSL tercanggih. Kami juga berafiliasi dengan asosiasi lottery internasional (WLA) untuk memastikan standar layanan kami tetap terjaga. Jika Anda memiliki pertanyaan mengenai cara bermain atau kendala deposit, tim <Link href="/contact" className="text-emerald-400 underline">Bantuan Pelanggan</Link> kami siap melayani Anda 24 jam setiap hari.
                </p>

                <div className="mt-12 p-8 bg-emerald-600/5 border border-emerald-600/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-emerald-400 text-sm md:text-base mb-4">
                    "Nikmati kemudahan menebak angka di era digital dan raih hadiah jutaan rupiah setiap harinya!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-emerald-600 text-black px-10 py-4 rounded-full not-italic font-black hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/20"
                  >
                    COBA E-LOTTERY SEKARANG
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