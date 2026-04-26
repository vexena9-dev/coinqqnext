'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Trophy, Zap, PlayCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
// 1. IMPORT DARI PUSAT DATA
import { GAMES, SITE_CONFIG } from '../data'; 

export default function SportsPage() {
  // 2. FILTER DATA: Hanya ambil kategori 'sports'
  const sportsGames = (GAMES as any[]).filter(game => game.category === 'sports');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
                <Trophy size={28} className="fill-blue-500" />
              </div>
              <h1 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
                Sportsbook Center
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl uppercase tracking-tighter">
              Nikmati pengalaman taruhan olahraga terbaik dengan odds tertinggi di {SITE_CONFIG.name}.
            </p>
          </div>

          {/* Featured Stats/Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <Zap className="text-blue-500" size={32} />, title: 'Live Betting', desc: 'Pasaran Langsung 24/7', color: 'from-blue-600/10' },
              { icon: <ShieldCheck className="text-green-500" size={32} />, title: 'Secure Payout', desc: 'Pembayaran Instan & Aman', color: 'from-green-600/10' },
              { icon: <PlayCircle className="text-yellow-500" size={32} />, title: 'HD Streaming', desc: 'Nonton Sambil Pasang', color: 'from-yellow-600/10' },
            ].map((stat, i) => (
              <div key={i} className={`bg-gradient-to-br ${stat.color} to-transparent border border-white/5 p-5 rounded-3xl flex items-center gap-4`}>
                {stat.icon}
                <div>
                  <h4 className="font-black text-sm uppercase italic">{stat.title}</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Provider Grid - Mengambil dari sportsGames */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsGames.map((game) => (
              <div key={game.id} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-blue-500/50">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">{game.name}</h3>
                    {game.status && (
                      <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-full font-black uppercase italic">{game.status}</span>
                    )}
                  </div>
                  {/* Provider Name sebagai deskripsi singkat */}
                  <p className="text-xs text-gray-400 font-bold leading-relaxed mb-6 uppercase tracking-tight">
                    Platform {game.provider} dengan pasaran terlengkap dan odds tertinggi untuk taruhan olahraga Anda.
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="block w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic text-sm transition-all shadow-lg shadow-blue-600/20"
                  >
                    Main Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Tetap sama, hanya SITE_CONFIG.name yang otomatis */}
          <section className="mt-16 border-t border-white/5 pt-12">
            <div className="bg-[#111] p-6 md:p-10 rounded-[40px] border border-white/5 shadow-inner">
              <h2 className="text-xl md:text-3xl font-black uppercase italic mb-6 text-blue-500">
                {SITE_CONFIG.name}: Situs Taruhan Olahraga & Judi Bola Terpercaya 2026
              </h2>
    <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-relaxed space-y-4 font-medium uppercase tracking-tight">
      <p>
        Selamat datang di <Link href="/" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">COINQQSLOT</Link>, platform taruhan olahraga (Sportsbook) paling inovatif. Kami menghadirkan pengalaman bertaruh kelas dunia dengan dukungan teknologi Next.js yang memastikan akses super cepat saat Anda mengecek skor pertandingan.
      </p>

      <h3 className="text-white font-black text-sm md:text-lg mt-6 uppercase">Mengapa Memilih Sportsbook di Sini?</h3>
      <p>
        Sebagai penyedia layanan <Link href="/rtp-live" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">RTP Live Terupdate</Link>, kami memahami bahwa akurasi data adalah segalanya. Tidak hanya di permainan slot, pada kategori olahraga pun kami menyediakan odds yang sangat kompetitif dan transparan bagi seluruh member setia kami.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Pasaran Terlengkap:</strong> Nikmati ribuan pertandingan setiap bulan dengan opsi taruhan <Link href="/link-alternatif" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">Link Alternatif Anti Blokir</Link> yang selalu aktif 24 jam.</li>
        <li><strong>Event Bonus Melimpah:</strong> Jangan lewatkan berbagai promo menarik yang bisa Anda cek langsung di halaman <Link href="/promosi" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">Promosi Bonus Deposit</Link> kami.</li>
        <li><strong>Keamanan Data:</strong> Kami menjamin privasi Anda dengan protokol keamanan ketat, sehingga Anda bisa fokus meracik strategi kemenangan.</li>
      </ul>

      <h3 className="text-white font-black text-sm md:text-lg mt-6 uppercase">Strategi Menang Taruhan Olahraga</h3>
      <p>
        Untuk meraih kemenangan maksimal, pastikan Anda selalu memantau statistik tim dan menggunakan <Link href="/contact" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">Layanan Bantuan 24/7</Link> jika mengalami kendala dalam melakukan deposit atau penarikan dana. <strong className="text-white">COINQQSLOT</strong> berkomitmen memberikan pelayanan terbaik bagi komunitas pecinta olahraga di Indonesia.
      </p>

      <div className="mt-8 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl italic">
        "Gunakan prediksi jitu Anda dan pasang taruhan sekarang di platform terpercaya dengan <Link href="/referral" className="text-blue-500 hover:text-white transition font-black underline decoration-blue-500/30 underline-offset-4">Sistem Referral Tertinggi</Link>."
      </div>
    </div>
  </div>
</section>
        </main>
      </div>
    </div>
  );
}