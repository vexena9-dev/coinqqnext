'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, Link2, ExternalLink, Smartphone, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '../data';

export default function LinkAlternatifPage() {
  // Data Link Alternatif - Finena bisa sesuaikan dengan domain yang dimiliki
  const LINKS = [
    { id: 1, label: "Server Utama (Asia)", url: SITE_CONFIG.url, status: "Online", speed: "15ms" },
    { id: 2, label: "Server Cadangan 1", url: "https://heylink.me/coinqqs/", status: "Online", speed: "22ms" },
    { id: 3, label: "Server Cadangan 2", url: "https://freebit-coin.com/go/cqs/", status: "Online", speed: "18ms" },
    { id: 4, label: "Server Mobile App", url: "https://coinqqslot88.net", status: "Online", speed: "25ms" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-[10px] font-black uppercase italic mb-6">
              <ShieldCheck size={14} /> Koneksi Aman & Terenkripsi
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 leading-none">
              Link Alternatif Resmi
            </h1>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] opacity-80 leading-relaxed">
              Gunakan daftar link di bawah ini jika situs utama tidak dapat diakses demi keamanan data akun Anda.
            </p>
          </div>

          {/* Links Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 mb-20">
            {LINKS.map((link) => (
              <div key={link.id} className="group bg-[#111] p-1 rounded-[30px] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden">
                <div className="bg-[#111] p-4 md:p-6 rounded-[29px] flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-500">
                      <Link2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase italic text-lg tracking-tight group-hover:text-yellow-500 transition-colors">
                        {link.label}
                      </h3>
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase text-gray-500">
                        <span className="flex items-center gap-1"><Globe size={12} /> {link.speed}</span>
                        <span className="flex items-center gap-1 text-emerald-500 italic">● {link.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={link.url}
                    target="_blank"
                    className="w-full md:w-auto px-10 py-4 bg-yellow-500 text-black font-black uppercase italic text-xs rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95 shadow-lg shadow-yellow-900/20"
                  >
                    Kunjungi Situs <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24 text-center">
            {[
              { icon: <Lock />, title: "SSL Security", desc: "Enkripsi tingkat tinggi untuk keamanan transaksi." },
              { icon: <Smartphone />, title: "Mobile Ready", desc: "Akses lancar melalui Android & iOS tanpa lag." },
              { icon: <ShieldCheck />, title: "Anti Nawala", desc: "Update link berkala untuk menghindari pemblokiran." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                <div className="text-yellow-500 flex justify-center mb-4">{feature.icon}</div>
                <h4 className="font-black uppercase italic mb-2 tracking-tighter">{feature.title}</h4>
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* SEO Article Section */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-yellow-500 tracking-tighter leading-tight text-center md:text-left">
                Pentingnya Menggunakan Link Alternatif {SITE_CONFIG.name} yang Resmi
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Dalam dunia perjudian online, keamanan akses adalah prioritas utama. <strong className="text-white">{SITE_CONFIG.name}</strong> menyediakan berbagai <strong className="text-yellow-500">Link Alternatif</strong> resmi untuk mengantisipasi adanya pemblokiran akses internet positif oleh penyedia layanan internet di Indonesia. Dengan menggunakan link resmi, Anda terhindar dari bahaya situs *phishing* yang bertujuan mencuri data pribadi dan saldo akun Anda.
                </p>
                <p>
                  Kami menyarankan Anda untuk selalu menyimpan halaman ini sebagai referensi utama saat ingin bermain. Setiap link yang terdaftar di sini telah melalui uji keamanan ketat dan menggunakan protokol HTTPS terenkripsi. Selain itu, link alternatif kami dioptimalkan untuk akses cepat, memastikan Anda tidak kehilangan momen berharga saat bertaruh di <Link href="/slots" className="text-yellow-500 underline">Slot Gacor</Link> atau <Link href="/sports" className="text-yellow-500 underline">Sportsbook</Link>.
                </p>
                <div className="mt-12 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-yellow-500 text-sm md:text-base mb-4">
                    "Akses aman, bermain nyaman, jackpot tetap di tangan. Gunakan link resmi COINQQSLOT!"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}