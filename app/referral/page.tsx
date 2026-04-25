'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Users, Gift, Share2, Wallet, ArrowRight, Copy, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '../data';

export default function ReferralPage() {
  const [copied, setCopied] = React.useState(false);
  const referralLink = `${SITE_CONFIG.url}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: <Users size={24} />,
      title: "Daftar & Login",
      desc: "Masuk ke akun COINQQSLOT Anda dan ambil kode referral unik di menu profil."
    },
    {
      icon: <Share2 size={24} />,
      title: "Sebarkan Link",
      desc: "Bagikan link referral Anda ke media sosial, grup WhatsApp, atau teman dekat."
    },
    {
      icon: <Gift size={24} />,
      title: "Teman Bergabung",
      desc: "Pastikan teman Anda mendaftar menggunakan link atau kode referral Anda."
    },
    {
      icon: <Wallet size={24} />,
      title: "Terima Komisi",
      desc: "Dapatkan komisi otomatis setiap kali teman Anda bermain, berlaku seumur hidup!"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header Section */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
              Program Referral
            </h1>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
              Bangun Kerajaan Bisnis Anda & Dapatkan Penghasilan Pasif Seumur Hidup
            </p>
          </div>

          {/* Referral Tool Box */}
          <div className="bg-[#111] rounded-[40px] border border-blue-500/20 p-6 md:p-10 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10 text-blue-500 pointer-events-none">
              <Users size={200} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-black uppercase italic mb-6 flex items-center gap-3">
                <Share2 className="text-blue-500" /> Link Referral Anda
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-black/50 border border-white/5 p-4 rounded-2xl flex items-center justify-between overflow-hidden">
                  <code className="text-blue-400 font-mono text-xs md:text-sm truncate mr-4">
                    {referralLink}
                  </code>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-blue-500"
                  >
                    {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                <Link 
                  href={SITE_CONFIG.url}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic text-xs rounded-2xl transition-all shadow-lg shadow-blue-900/40 text-center"
                >
                  Cek Statistik Referral
                </Link>
              </div>
              {copied && <p className="text-emerald-500 text-[10px] font-bold mt-2 uppercase animate-pulse">Link berhasil disalin ke clipboard!</p>}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-[35px] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/5">
                  {step.icon}
                </div>
                <h3 className="font-black uppercase italic mb-2 tracking-tighter text-lg">{step.title}</h3>
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed uppercase">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bonus Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-[40px] border border-blue-500/10">
              <h3 className="text-2xl font-black uppercase italic mb-4 text-blue-400">Keuntungan Referral</h3>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-gray-400">
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-blue-500" /> Komisi hingga 0.3% dari total turnover teman.</li>
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-blue-500" /> Pembagian komisi dilakukan setiap minggu secara otomatis.</li>
                <li className="flex items-center gap-3"><ArrowRight size={14} className="text-blue-500" /> Tidak ada batas maksimal jumlah teman yang diajak.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/20 to-transparent p-8 rounded-[40px] border border-emerald-500/10">
              <h3 className="text-2xl font-black uppercase italic mb-4 text-emerald-400">Transparansi Data</h3>
              <p className="text-xs font-bold uppercase leading-relaxed text-gray-400">
                Sistem kami mencatat setiap aktivitas referral Anda secara real-time. Anda bisa memantau jumlah bawahan, total taruhan mereka, hingga jumlah komisi yang akan Anda terima langsung melalui dashboard member.
              </p>
            </div>
          </div>

          {/* SEO Article Section */}
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-blue-500 tracking-tighter leading-tight text-center md:text-left">
                Program Referral COINQQSLOT: Cara Mudah Dapat Uang Tanpa Modal
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                  Ingin mendapatkan penghasilan tambahan tanpa harus bermain? <strong className="text-white">Program Referral {SITE_CONFIG.name}</strong> adalah jawabannya. Kami menawarkan sistem kemitraan paling menguntungkan bagi Anda yang ingin menjadi bagian dari kesuksesan kami. Cukup dengan mengajak rekan atau kerabat bergabung, Anda sudah bisa menikmati aliran dana segar setiap minggunya.
                </p>
                <p>
                  Sistem referral kami dirancang untuk jangka panjang. <strong className="text-blue-400 italic">Komisi Seumur Hidup</strong> berarti selama member yang Anda ajak tetap aktif bermain, Anda akan terus menerima persentase dari perputaran taruhan mereka. Strategi ini sangat cocok bagi Anda yang memiliki komunitas atau jaringan sosial yang luas di dunia game online.
                </p>
                <div className="mt-12 p-8 bg-blue-500/5 border border-blue-500/20 rounded-[40px] italic font-bold text-center">
                  <p className="text-blue-500 text-sm md:text-base mb-4">
                    "Ajak temanmu, bangun jaringanmu, dan nikmati hasilnya setiap hari Senin bersama COINQQSLOT!"
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