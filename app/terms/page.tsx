'use client';

import React from 'react';
import { ShieldAlert, Scale, UserCheck, Wallet, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  const rules = [
    {
      icon: <UserCheck size={20} />,
      title: "Batasan Usia & Registrasi",
      desc: "Setiap member wajib berusia minimal 18 tahun. Satu pengguna hanya diperbolehkan memiliki satu akun resmi dengan data yang valid."
    },
    {
      icon: <Wallet size={20} />,
      title: "Kebijakan Transaksi",
      desc: "Deposit dan Withdraw wajib menggunakan rekening atau e-wallet yang terdaftar. Nama pada rekening harus sesuai dengan nama profil member."
    },
    {
      icon: <Scale size={20} />,
      title: "Fair Play & Kejujuran",
      desc: "Segala bentuk manipulasi sistem, penggunaan bot, atau eksploitasi bug akan mengakibatkan pembekuan saldo dan penutupan akun permanen."
    },
    {
      icon: <ShieldAlert size={20} />,
      title: "Privasi & Keamanan",
      desc: "Kami menjaga kerahasiaan data member dengan enkripsi tingkat tinggi. Member bertanggung jawab penuh atas keamanan password masing-masing."
    }
  ];

  return (
    <main className="flex-1 p-4 md:p-10 min-h-screen bg-[#080808]">
      <div className="max-w-4xl mx-auto mt-6">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <ShieldAlert size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Syarat & Ketentuan
            </h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-1">
              Regulasi Resmi Platform COINQQSLOT
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-[#111] rounded-[50px] border border-white/5 overflow-hidden shadow-2xl">
          <div className="h-2 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 w-full" />
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rules.map((rule, index) => (
                <div key={index} className="group p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                    {rule.icon}
                    <h4 className="font-black italic uppercase text-sm tracking-tight text-white">{rule.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed uppercase font-bold tracking-tight">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
              <AlertTriangle className="text-red-500 shrink-0" size={24} />
              <p className="text-[10px] text-red-500/80 font-black uppercase italic leading-loose">
                Pihak COINQQSLOT berhak mengubah syarat dan ketentuan sewaktu-waktu tanpa pemberitahuan sebelumnya. Keputusan manajemen bersifat mutlak dan tidak dapat diganggu gugat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}