'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Gamepad2, Rocket, Target, Monitor, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ESPORTS_GAMES = [
  {
    id: 'dota2',
    name: 'Dota 2',
    provider: 'SABA Esports',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625065/imgi_19_e-sabaesports_bcbak4.jpg',
    odds: 'ODDS TERTINGGI',
  },
  {
    id: 'mlbb',
    name: 'Mobile Legends',
    provider: 'TF Gaming',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625069/imgi_20_e-tfgaming_f2ycti.jpg',
    odds: 'LIVE STREAM',
  },
  {
    id: 'csgo',
    name: 'CS:GO / CS2',
    provider: 'CMD Esports',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625072/imgi_21_e-ftesport_prgyu5.jpg',
    odds: 'FAST MARKET',
  },
  {
    id: 'ns-soft',
    name: 'nSoft Esports',
    provider: 'NSoft Esports',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625056/imgi_17_nsoft_ed3u7k.jpg',
    odds: 'HOT MATCH',
  },
  {
    id: 'sportgg',
    name: 'SportGG',
    provider: 'Sportgg Esports',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775366587/imgi_15_sportgg_gyg11p.jpg',
    odds: 'STABLE',
  },
  {
    id: 'valorant',
    name: 'Valorant',
    provider: 'SBO Esports',
    image: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367189/imgi_127_20241105100958778_f0gsri.webp',
    odds: 'POPULAR',
  }
];

export default function EsportsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-10 relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-500">
                <Gamepad2 size={28} />
              </div>
              <h1 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
                Esports Betting Center
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl uppercase tracking-tighter">
              Akses taruhan game kompetitif terbaik dunia dengan pasaran paling update dan fitur live streaming HD.
            </p>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Monitor size={18} />, label: 'Live Stream' },
              { icon: <Rocket size={18} />, label: 'Instant Settlement' },
              { icon: <Target size={18} />, label: 'Pro Markets' },
              { icon: <Gamepad2 size={18} />, label: 'All Titles' },
            ].map((feature, i) => (
              <div key={i} className="bg-purple-500/5 border border-purple-500/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-purple-400">
                {feature.icon}
                <span className="text-[9px] font-black uppercase">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {ESPORTS_GAMES.map((game) => (
              <div key={game.id} className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
                <div className="aspect-[4/5] relative">
                  <img src={game.image} alt={game.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[8px] bg-purple-600 px-2 py-0.5 rounded font-black mb-1 inline-block">{game.odds}</span>
                    <h3 className="text-sm md:text-base font-black uppercase italic">{game.name}</h3>
                    <p className="text-[9px] text-gray-500 font-bold uppercase">{game.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article dengan Anchor Text */}
          <section className="mt-16 border-t border-white/5 pt-12">
            <div className="bg-[#111] p-6 md:p-10 rounded-[40px] border border-white/5 shadow-inner">
              <h2 className="text-xl md:text-3xl font-black uppercase italic mb-6 text-purple-500">
                COINQQSLOT: Portal Taruhan Esports Terlengkap & Terpercaya
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-relaxed space-y-4 font-medium uppercase tracking-tight">
                <p>
                  Era baru industri gaming telah tiba di <Link href="/" className="text-purple-500 hover:text-white transition font-black underline decoration-purple-500/30 underline-offset-4">COINQQSLOT</Link>. Kami menghadirkan bursa taruhan Esports terlengkap untuk Anda para penggemar game kompetitif seperti Dota 2, Mobile Legends (MLBB), Counter Strike 2, hingga Valorant.
                </p>

                <h3 className="text-white font-black text-sm md:text-lg mt-6 uppercase">Keunggulan Bertaruh Esports di Sini</h3>
                <p>
                  Dukungan server berkecepatan tinggi memastikan Anda tidak ketinggalan momen krusial saat melakukan taruhan jalan. Lengkapi strategi Anda dengan memantau <Link href="/rtp-live" className="text-purple-500 hover:text-white transition font-black underline decoration-purple-500/30 underline-offset-4">Persentase Kemenangan Live</Link> untuk memaksimalkan keuntungan harian Anda di semua lini permainan kami.
                </p>

                <p>
                  Nikmati kemudahan akses melalui <Link href="/link-alternatif" className="text-purple-500 hover:text-white transition font-black underline decoration-purple-500/30 underline-offset-4">Link Resmi Anti Blokir</Link> yang menjamin keamanan akun dan saldo Anda tetap aman. Kami juga memberikan kemudahan transaksi melalui berbagai metode yang bisa Anda pelajari di halaman <Link href="/about" className="text-purple-500 hover:text-white transition font-black underline decoration-purple-500/30 underline-offset-4">Tentang Layanan Kami</Link>.
                </p>

                <div className="mt-8 p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-xl italic">
                  "Dapatkan bonus tambahan eksklusif setiap kali Anda mengajak teman bergabung melalui program <Link href="/referral" className="text-purple-500 hover:text-white transition font-black underline decoration-purple-500/30 underline-offset-4">Referral Esports COINQQSLOT</Link>."
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}