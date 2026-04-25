'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, Target, Award, Users, Zap, CheckCircle2, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data';

export default function AboutPage() {
  const stats = [
    { label: "Member Aktif", value: "1M+", icon: <Users size={20} /> },
    { label: "Tingkat Kemenangan", value: "98.5%", icon: <Zap size={20} /> },
    { label: "Lisensi Resmi", value: "PAGCOR", icon: <Award size={20} /> },
    { label: "Layanan", value: "24/7", icon: <Globe size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Hero Section */}
          <div className="relative rounded-[50px] overflow-hidden mb-16 border border-white/5 bg-[#111] p-8 md:p-20 shadow-2xl">
            <div className="absolute top-0 right-0 p-20 opacity-5 text-white pointer-events-none">
              <ShieldCheck size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-[10px] font-black uppercase italic mb-6">
                <Target size={14} /> Visi & Misi Terpercaya
              </div>
              <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 leading-none">
                Tentang {SITE_CONFIG.name}
              </h1>
              <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed uppercase tracking-tight">
                Platform hiburan digital kelas dunia yang berkomitmen memberikan pengalaman bermain paling adil, aman, dan menguntungkan bagi seluruh masyarakat Indonesia.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-[40px] border border-white/5 text-center group hover:border-yellow-500/30 transition-all duration-500">
                <div className="text-yellow-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-4xl font-black italic tracking-tighter mb-1 uppercase group-hover:text-yellow-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter border-l-4 border-yellow-500 pl-6">
                Kenapa Memilih Kami?
              </h2>
              <p className="text-gray-400 text-sm leading-loose uppercase tracking-tight font-medium">
                {SITE_CONFIG.name} bukan sekadar situs game biasa. Kami membangun ekosistem yang mengutamakan kenyamanan pengguna melalui teknologi mutakhir dan tim profesional yang berpengalaman di industri iGaming selama lebih dari satu dekade.
              </p>
              
              <div className="space-y-4">
                {[
                  "Sistem Keamanan Data Berlapis (SSL 256-bit)",
                  "Proses Deposit & Withdraw Tercepat",
                  "Transparansi Nilai RTP Game",
                  "Layanan Konsumen Personal 24 Jam"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-xs font-black uppercase tracking-tighter italic">
                    <CheckCircle2 size={16} className="text-yellow-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-10 rounded-[50px] border border-yellow-500/10 flex flex-col justify-center italic">
               <p className="text-xl md:text-2xl font-black leading-tight text-white mb-6">
                "Misi kami adalah menghadirkan standar emas dalam layanan hiburan daring, di mana setiap pemain merasa seperti seorang VIP."
               </p>
               <span className="text-yellow-500 font-black uppercase tracking-widest text-xs">— Management Team</span>
            </div>
          </div>

          {/* SEO & History Section */}
          <section className="border-t border-white/5 pt-16">
            <div className="prose prose-invert max-w-none text-gray-500 text-xs md:text-sm leading-[2] space-y-8 font-medium uppercase tracking-tight text-justify">
              <h2 className="text-white text-2xl font-black italic uppercase tracking-tighter">Sejarah & Lisensi Resmi</h2>
              <p>
                Didirikan pada tahun 2020, <strong className="text-white">{SITE_CONFIG.name}</strong> telah berkembang pesat menjadi salah satu pemimpin pasar di industri hiburan online. Dengan lisensi resmi dari otoritas internasional seperti <strong className="text-yellow-500 underline">PAGCOR</strong> dan <strong className="text-yellow-500 underline">BMM Testlabs</strong>, kami menjamin bahwa setiap permainan yang tersedia di platform kami telah melalui uji keadilan (fair play) yang sangat ketat.
              </p>
              <p>
                Kami terus berinovasi dengan mengintegrasikan sistem pembayaran yang beragam, mulai dari bank lokal ternama, e-wallet, hingga pulsa tanpa potongan. Fokus kami adalah memberikan kemudahan akses bagi seluruh kalangan pemain di Indonesia tanpa terkecuali. Kepercayaan Anda adalah aset terbesar kami, dan kami berkomitmen untuk menjaga integritas tersebut seiring dengan perkembangan teknologi digital di masa depan.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}