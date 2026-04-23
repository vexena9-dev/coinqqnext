'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Flame, Star, Zap, Trophy, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

const SLOT_PROVIDERS = [
  { id: 'pragmatic', name: 'Pragmatic Play', games: '250+ Games', status: 'HOT', img: 'https://cdn.globalcontentcloud.com/game-images/pragmaticplay/732/thumbnail.webp' },
  { id: 'pgsoft', name: 'PG Soft', games: '120+ Games', status: 'POPULAR', img: 'https://cdn.globalcontentcloud.com/game-images/idnslot/14145/thumbnail.webp' },
  { id: 'habanero', name: 'Habanero', games: '180+ Games', status: 'STABLE', img: 'https://cdn.globalcontentcloud.com/game-images/habanero/52/thumbnail.webp' },
  { id: 'microgaming', name: 'Microgaming', games: '300+ Games', status: 'LEGEND', img: 'https://cdn.globalcontentcloud.com/game-images/idnslot/14168/thumbnail.webp' },
  { id: 'nolimit', name: 'Nolimit City', games: '80+ Games', status: 'NEW', img: 'https://cdn.globalcontentcloud.com/game-images/nolimit-city/9505/thumbnail.webp' },
  { id: 'idns', name: 'IDNSlot', games: '100+ Games', status: 'LOCAL PRIDE', img: 'https://cdn.globalcontentcloud.com/game-images/slot-mania/12518/thumbnail.webp' },
];

export default function SlotsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Slot Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                <Flame size={28} className="fill-orange-500 animate-pulse" />
              </div>
              <h1 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
                Online Slot Universe
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl uppercase tracking-tighter">
              Koleksi mesin slot online terlengkap dengan fitur jackpot progresif dan provider kelas dunia hanya di COINQQSLOT.
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {SLOT_PROVIDERS.map((provider) => (
              <div key={provider.id} className="group relative bg-[#111] border border-white/5 rounded-[32px] overflow-hidden hover:border-orange-500/50 transition-all duration-500 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 relative">
                  <img src={provider.img} alt={provider.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg">
                     <span className="text-[8px] font-black text-orange-500 uppercase italic">{provider.status}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm md:text-lg font-black uppercase italic tracking-tighter">{provider.name}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">{provider.games}</p>
                  </div>
                  <Link href="https://link-daftar-anda.com" className="p-3 bg-orange-500 rounded-full hover:bg-orange-400 transition shadow-lg shadow-orange-500/20">
                    <Play size={16} className="fill-white text-white ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section dengan Anchor Text */}
          <section className="mt-16 border-t border-white/5 pt-12">
            <div className="bg-[#111] p-6 md:p-10 rounded-[40px] border border-white/5 shadow-inner">
              <h2 className="text-xl md:text-3xl font-black uppercase italic mb-6 text-orange-500">
                COINQQSLOT: Situs Judi Slot Online Gacor & Terpercaya 2026
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-relaxed space-y-4 font-medium uppercase tracking-tight">
                <p>
                  Nikmati pengalaman bermain di <Link href="/" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">COINQQSLOT</Link>, destinasi utama bagi para pecinta mesin slot online yang mencari hiburan berkualitas tinggi. Kami bermitra dengan provider global seperti Pragmatic Play, PG Soft, dan Habanero untuk menghadirkan ribuan pilihan game dengan grafik memukau.
                </p>

                <h3 className="text-white font-black text-sm md:text-lg mt-6 uppercase">Keuntungan Bermain Slot di COINQQSLOT</h3>
                <p>
                  Kami selalu memastikan setiap pemain mendapatkan peluang terbaik. Oleh karena itu, kami sangat menyarankan Anda untuk selalu memantau halaman <Link href="/rtp-live" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">RTP Slot Live Gacor</Link> kami sebelum memulai taruhan. Data yang kami sajikan diperbarui setiap menit untuk memberikan panduan akurat mengenai game mana yang sedang dalam kondisi "panas".
                </p>

                <p>
                  Keamanan akses menjadi prioritas kami. Gunakan fasilitas <Link href="/link-alternatif" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">Link Alternatif Resmi</Link> untuk menghindari pemblokiran dan pastikan Anda selalu terhubung dengan layanan pelanggan melalui <Link href="/contact" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">Dukungan Bantuan 24/7</Link> kami.
                </p>

                <p>
                  Jangan lewatkan kesempatan untuk klaim berbagai penawaran menarik yang tersedia di menu <Link href="/promosi" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">Promo Bonus Slot</Link>. Bagi Anda yang ingin mendapatkan penghasilan tambahan tanpa modal, silakan bergabung dalam program <Link href="/referral" className="text-orange-500 hover:text-white transition font-black underline decoration-orange-500/30 underline-offset-4">Referral Seumur Hidup</Link> kami.
                </p>

                <div className="mt-8 p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-xl italic font-bold">
                  "Kemenangan besar menanti Anda. Putar mesin keberuntungan Anda di COINQQSLOT dan rasakan sensasi mendapatkan Maxwin hari ini!"
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}