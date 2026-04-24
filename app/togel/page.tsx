'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Ticket, Timer, Trophy, Globe, Play } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function TogelPage() {
  // Filter data kategori togel dari pusat data
  const togelGames = GAMES.filter(game => game.category === 'togel');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-red-600/20 rounded-lg text-red-500">
                <Ticket size={28} className="animate-bounce" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-yellow-500">
                International Lottery Hub
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-80">
              Pasaran Togel Terlengkap dengan Diskon Terbesar
            </p>
          </div>

          {/* Togel Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Timer size={18} />, label: 'Result Tercepat' },
              { icon: <Trophy size={18} />, label: 'Hadiah 4D x10.000' },
              { icon: <Globe size={18} />, label: '20+ Pasaran' },
              { icon: <Ticket size={18} />, label: 'Diskon Terbesar' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 bg-red-600/5 border border-red-600/20 rounded-2xl text-red-500 group hover:bg-red-600/10 transition-all">
                {item.icon}
                <span className="text-[9px] font-black uppercase mt-2 text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Togel Grid - Full Portrait Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {togelGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-red-600/50 transition-all duration-500">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90" />
                  
                  {/* Status Gacor / Open */}
                  <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full shadow-lg shadow-red-600/30">
                    <span className="text-[10px] font-black text-white italic uppercase">OPEN</span>
                  </div>
                </div>

                <div className="p-5 relative mt-[-60px] bg-gradient-to-t from-[#111] via-[#111] to-transparent text-center">
                  <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-red-500 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 tracking-widest">{game.provider}</p>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-black uppercase italic text-xs shadow-lg shadow-red-600/20 transition-all active:scale-95"
                  >
                    Pasang Sekarang <Play size={14} className="fill-white" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Long Form & Keyword Rich */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-red-600 tracking-tighter leading-tight">
                COINQQSLOT: Bandar Togel Online Terpercaya dengan Pasaran WLA Terlengkap
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Selamat datang di <Link href="/" className="text-red-500 hover:text-white transition font-black underline decoration-red-500/30 underline-offset-4">{SITE_CONFIG.name}</Link>, platform judi togel online nomor satu yang menyediakan akses ke berbagai pasaran togel internasional paling populer di dunia. Kami berkomitmen untuk memberikan pengalaman bertaruh yang aman, adil, dan transparan bagi setiap member yang ingin mencoba peruntungan melalui tebak angka jitu.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-600 pl-4">
                  Daftar Pasaran Togel Resmi & Terpopuler
                </h3>
                <p>
                  Di {SITE_CONFIG.name}, Anda dapat memasang taruhan untuk berbagai jenis pasaran yang sudah diakui secara global. Kami menyediakan hasil keluaran (result) tercepat dan paling akurat yang diambil langsung dari situs resmi setiap negara pengeluaran:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Togel Singapore (SGP):</strong> Pasaran paling legendaris dengan jadwal buka Senin, Rabu, Kamis, Sabtu, dan Minggu.</li>
                    <li><strong>Togel Hongkong (HK):</strong> Pilihan utama pemain malam hari dengan result setiap jam 23:00 WIB.</li>
                    <li><strong>Togel Sydney (SDY):</strong> Pasaran siang hari yang sangat diminati oleh komunitas togel Indonesia.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Togel Macau:</strong> Pasaran modern dengan jadwal putaran hingga 6 kali dalam satu hari.</li>
                    <li><strong>Togel Taiwan & Cambodia:</strong> Alternatif pasaran WLA dengan peluang kemenangan yang kompetitif.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-600 pl-4">
                  Hadiah Togel Terbesar & Diskon Pemasangan
                </h3>
                <p>
                  Kami menawarkan struktur hadiah kemenangan tertinggi di kelasnya. Untuk pemasangan <strong className="text-white">Togel 4D</strong>, Anda berkesempatan memenangkan hadiah hingga x10.000 dari nilai taruhan Anda. Selain itu, kami juga memberikan diskon pemasangan yang sangat besar, sehingga modal bermain Anda menjadi lebih hemat namun tetap memiliki peluang keuntungan maksimal.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-600 pl-4">
                  Prediksi Jitu & Data Keluaran (Paito)
                </h3>
                <p>
                  Untuk membantu Anda dalam meracik angka keberuntungan, <strong className="text-white">{SITE_CONFIG.name}</strong> menyediakan fitur pendukung seperti Buku Mimpi, Tabel Shio terbaru, hingga Data Paito yang sangat lengkap. Jangan lupa untuk selalu memantau halaman <Link href="/rtp-live" className="text-red-500 hover:text-white transition font-black underline italic">RTP Gacor Terupdate</Link> kami untuk mendapatkan informasi game lain yang sedang dalam kondisi "hot" hari ini.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-red-600 pl-4">
                  Kemudahan Akses Link Alternatif Togel
                </h3>
                <p>
                  Pastikan Anda selalu login melalui <Link href="/link-alternatif" className="text-red-500 hover:text-white transition font-black underline italic">Link Alternatif Resmi COINQQSLOT</Link> untuk menghindari kendala teknis atau pemblokiran situs. Tim teknis kami selalu siaga memperbarui infrastruktur website agar proses penginputan angka dan penarikan dana kemenangan (Withdraw) Anda berjalan lancar dalam hitungan menit saja.
                </p>

                <div className="mt-12 p-8 bg-red-600/5 border border-red-600/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-red-500 text-sm md:text-base mb-4">
                    "Tebak angkanya, pasang taruhannya, dan jadilah jutawan berikutnya bersama kami!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-red-600 text-white px-8 py-3 rounded-full not-italic font-black hover:bg-red-500 transition shadow-lg shadow-red-600/40"
                  >
                    DAFTAR & PASANG TOGEL SEKARANG
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