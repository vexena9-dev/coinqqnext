'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Gift, ChevronRight, Timer, ShieldCheck, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '../data';

export default function PromosiPage() {
  // Data dummy promosi - Kamu bisa memindahkan ini ke data/games.ts jika mau
// Update bagian ini di dalam PromosiPage()
const PROMOS = [
  {
    id: 1,
    title: "Welcome Bonus 150%", // Sesuaikan dengan gambar Cloudinary kamu
    desc: "Dapatkan bonus deposit pertama 150% hingga Rp1.500.000! Mulai petualangan Anda di Coinqqslot dengan modal lebih besar.",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_17_promotion_10_production_43_zufykb.webp",
    minDepo: "IDR 50.000",
    maxBonus: "IDR 1.500.000",
    tag: "Member Baru",
    color: "from-orange-600 to-yellow-500",
  },
  {
    id: 2, // Gunakan ID 7 sesuai gambar kodinganmu jika ingin sinkron total
    title: "Bonus Reload 50%",
    desc: "Nikmati bonus reload 50% setiap kali Anda melakukan deposit ulang! Pastikan untuk memanfaatkan penawaran ini.",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_24_promotion_30_production_43_zcomzc.webp",
    minDepo: "IDR 50.000",
    maxBonus: "Unlimited",
    tag: "Reload Bonus",
    color: "from-blue-600 to-indigo-500",
  },
  {
    id: 3, // Gunakan ID 8 sesuai gambar
    title: "Bonus Petir Merah 10%",
    desc: "Dapatkan bonus petir merah 10% untuk semua kerugian Anda! Mainkan dengan tenang di Coinqqslot.",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_19_promotion_40_production_43_qempg4.webp",
    minDepo: "IDR 100.000",
    maxBonus: "Unlimited",
    tag: "Special Promo",
    color: "from-red-600 to-pink-600",
  },
  {
    id: 4, // Gunakan ID 9 sesuai gambar
    title: "Bonus Cashback VIP 20%",
    desc: "Dapatkan cashback VIP 20% untuk semua kerugian Anda! Kami memberikan perlindungan ekstra untuk member setia.",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1771059783/imgi_19_16991_695c4069a92dd6.23713114_rwcrtx.webp",
    minDepo: "IDR 2.000.000",
    maxBonus: "Unlimited",
    tag: "VIP Cashback",
    color: "from-purple-600 to-fuchsia-500",
  }
];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-[10px] font-black uppercase italic mb-4">
              <Star size={12} className="fill-yellow-500" /> Promo Eksklusif {SITE_CONFIG.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
              Bonus & Keuntungan
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-tighter">
              Nikmati berbagai macam bonus melimpah dan promosi harian yang dirancang khusus untuk meningkatkan peluang kemenangan Anda.
            </p>
          </div>

          {/* Promo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
{PROMOS.map((promo) => (
  <div key={promo.id} className="group relative bg-[#111] rounded-[40px] border border-white/5 overflow-hidden hover:border-yellow-500/40 transition-all duration-500 shadow-2xl">
    
    {/* Gambar Promo */}
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={promo.img} // Ambil dari data
        alt={promo.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
      />
      {/* Overlay Gradasi agar nyambung dengan konten bawah */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
      
      {/* Tag Melayang */}
      <div className="absolute top-4 left-4">
        <span className={`bg-gradient-to-r ${promo.color} text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg`}>
          {promo.tag}
        </span>
      </div>
    </div>

    <div className="p-8">
      <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-3 group-hover:text-yellow-500 transition-colors">
        {promo.title}
      </h3>
                  <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6">
                    {promo.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[8px] text-gray-500 uppercase font-black mb-1">Min. Deposit</p>
                      <p className="text-xs font-black text-white">{promo.minDepo}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[8px] text-gray-500 uppercase font-black mb-1">Max. Bonus</p>
                      <p className="text-xs font-black text-yellow-500">{promo.maxBonus}</p>
                    </div>
                  </div>

                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-black font-black uppercase italic text-xs hover:bg-yellow-500 transition-all active:scale-95 group/btn"
                  >
                    Ambil Bonus <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Section - Promotion Focus */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-yellow-500 tracking-tighter leading-tight">
                Keuntungan Bergabung di {SITE_CONFIG.name}: Situs Judi Online dengan Bonus Terbesar
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Sebagai situs judi online terpercaya di Indonesia, <Link href="/" className="text-yellow-500 underline font-black">{SITE_CONFIG.name}</Link> selalu berkomitmen untuk memanjakan membernya. Kami memahami bahwa modal tambahan dalam bentuk bonus adalah kunci utama bagi para pemain untuk memperpanjang durasi bermain dan meningkatkan peluang meraih jackpot. Itulah sebabnya kami menghadirkan jajaran <strong className="text-white">Promosi Judi Online</strong> paling kompetitif di tahun 2026.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                  Welcome Bonus New Member 100% di Awal
                </h3>
                <p>
                  Bagi Anda yang baru saja bergabung, nikmati <strong className="text-white">Bonus New Member 100%</strong> yang bisa diklaim langsung setelah deposit pertama. Bonus ini berlaku untuk permainan slot populer seperti Pragmatic Play dan PG Soft. Dengan syarat TO (Turnover) yang rendah dan masuk akal, kami memastikan setiap pemain memiliki kesempatan nyata untuk melakukan withdraw hasil kemenangan mereka.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-3xl border border-white/5">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rollingan Mingguan Casino:</strong> Nikmati cashback dari total taruhan Anda di meja Live Casino setiap minggunya.</li>
                    <li><strong>Bonus Deposit Harian:</strong> Tambahan saldo setiap hari untuk pengisian deposit pertama Anda.</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Event Jackpot Slot:</strong> Hadiah ekstra bagi pemain yang berhasil mendapatkan perkalian besar (Multiplier).</li>
                    <li><strong>Bonus Ulang Tahun:</strong> Kejutan spesial dari kami di hari bahagia Anda.</li>
                  </ul>
                </div>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                  Sistem Transaksi Cepat & Aman
                </h3>
                <p>
                  Semua bonus yang kami tawarkan didukung oleh sistem keuangan yang sehat dan stabil. Proses klaim bonus dilakukan secara otomatis melalui sistem tanpa perlu menunggu lama. Cukup masuk ke akun Anda, lakukan deposit, dan pilih promosi yang sesuai di halaman menu bonus. Gunakan <Link href="/link-alternatif" className="text-yellow-500 italic underline">Link Alternatif Resmi</Link> kami untuk akses yang lebih aman dan terhindar dari kendala teknis.
                </p>

                <div className="mt-12 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-yellow-500 text-sm md:text-base mb-4 uppercase">
                    "Kemenangan Anda adalah kebahagiaan kami. Ambil bonusmu sekarang dan jadilah juara di COINQQSLOT!"
                  </p>
                  <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-white text-black px-10 py-4 rounded-full not-italic font-black hover:bg-yellow-500 transition shadow-lg shadow-yellow-500/20"
                  >
                    DAFTAR & KLAIM PROMO
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