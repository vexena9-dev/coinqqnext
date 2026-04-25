'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Headphones, MessageSquare, Send, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '../data';

export default function ContactPage() {
  const CONTACT_METHODS = [
    {
      id: 1,
      name: "Live Chat 24/7",
      desc: "Respon tercepat langsung melalui browser Anda.",
      action: "Chat Sekarang",
      icon: <MessageSquare size={24} />,
      color: "from-yellow-500 to-orange-600",
      link: "https://t.ly/Lchatcoin"
    },
    {
      id: 2,
      name: "WhatsApp Official",
      desc: "Layanan deposit dan bantuan via chat WhatsApp.",
      action: "Kirim Pesan",
      icon: <span className="font-bold text-xl">WA</span>,
      color: "from-emerald-500 to-green-600",
      link: "https://t.ly/WAofcCoinqqslot"
    },
    {
      id: 3,
      name: "Telegram Support",
      desc: "Update info event dan bantuan teknis via Telegram.",
      action: "Gabung Grup",
      icon: <Send size={24} />,
      color: "from-blue-500 to-sky-600",
      link: "https://t.me/coinqqslot"
    },
{
      id: 4,
      name: "Telegram Channel",
      desc: "Update bocoran slot gacor & event harian.",
      action: "Join Channel",
      icon: <Send size={24} />,
      color: "from-sky-500 to-blue-600",
      link: "https://t.me/coinqqslotofficial"
    },
    {
      id: 5,
      name: "Instagram Official",
      desc: "Konten eksklusif & info pemenang mingguan.",
      action: "Follow Us",
      icon: <span className="font-bold text-xl italic underline decoration-pink-500">IG</span>,
      color: "from-purple-600 via-pink-600 to-orange-500",
      link: "https://www.instagram.com/coinqq_official/"
    },
    {
      id: 6,
      name: "X / Twitter",
      desc: "Diskusi komunitas & info link anti blokir.",
      action: "Follow X",
      icon: <span className="font-black text-xl">X</span>,
      color: "from-gray-700 to-black",
      link: "https://x.com/coinqqslott"
    },
    {
      id: 7,
      name: "Facebook Fanspage",
      desc: "Grup diskusi & bagi-bagi voucher gratis.",
      action: "Like Page",
      icon: <span className="font-bold text-2xl">f</span>,
      color: "from-blue-700 to-blue-900",
      link: "https://www.facebook.com/coinqqslotofficiall"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-[10px] font-black uppercase italic mb-6">
              <Headphones size={14} /> Layanan Bantuan Prioritas
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
              Tim Support Kami Siap Membantu Anda 24 Jam Tanpa Libur
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {CONTACT_METHODS.map((method) => (
              <Link 
                href={method.link} 
                key={method.id}
                className="group bg-[#111] p-1 rounded-[35px] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                <div className="bg-[#111] p-8 rounded-[34px] flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/50 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase italic tracking-tighter mb-1">{method.name}</h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{method.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-700 group-hover:text-yellow-500 group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Support Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Clock size={20} />, title: "Waktu Respon", value: "< 2 Menit" },
              { icon: <ShieldCheck size={20} />, title: "Privasi Chat", value: "End-to-End Encrypted" },
              { icon: <Headphones size={20} />, title: "Staf Online", value: "15+ Operator" },
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center">
                <div className="text-yellow-500 flex justify-center mb-4">{box.icon}</div>
                <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">{box.title}</h4>
                <p className="text-sm font-black uppercase italic text-white">{box.value}</p>
              </div>
            ))}
          </div>

          {/* SEO Content Section */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-yellow-500 tracking-tighter leading-tight">
                Layanan Pelanggan Terbaik di {SITE_CONFIG.name}
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Kenyamanan Anda dalam bermain di <strong className="text-white">{SITE_CONFIG.name}</strong> adalah prioritas utama kami. Oleh karena itu, kami menyediakan saluran komunikasi yang lengkap dan mudah dijangkau. Baik Anda memiliki pertanyaan mengenai proses pendaftaran, kendala saat transaksi deposit, atau ingin klaim bonus promosi, tim Customer Service kami yang profesional siap memberikan solusi instan.
                </p>
                <p>
                  Kami beroperasi <strong className="text-white italic">24 jam sehari, 7 hari seminggu</strong>, termasuk hari libur nasional. Hal ini kami lakukan untuk memastikan bahwa kapan pun Anda menemui kendala di meja permainan atau saat memutar slot, bantuan selalu tersedia hanya dalam hitungan detik. Gunakan layanan <strong className="text-yellow-500">Live Chat Resmi</strong> untuk mendapatkan respon tercepat dibandingkan saluran komunikasi lainnya.
                </p>
                <div className="mt-12 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-yellow-500 text-sm md:text-base uppercase">
                    "Kami bangga melayani Anda. Hubungi kami sekarang dan rasakan pengalaman VIP di setiap interaksi."
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