'use client';

import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    { q: "Bagaimana cara daftar?", a: "Klik tombol DAFTAR di pojok kanan atas dan isi data diri lengkap sesuai rekening bank Anda." },
    { q: "Berapa minimal deposit?", a: "Minimal deposit hanya IDR 10.000 melalui Bank, E-Wallet, atau Pulsa tanpa potongan." },
    { q: "Apakah aman bermain di sini?", a: "Sangat aman. Kami menggunakan sistem enkripsi terbaru untuk melindungi data privasi member." }
  ];

  return (
    <main className="flex-1 p-4 md:p-8 min-h-screen bg-[#080808]">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-black mb-6 text-yellow-500 border-l-4 border-yellow-500 pl-4 uppercase italic">
          Pusat Bantuan (FAQ)
        </h1>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
                <HelpCircle size={16} className="text-yellow-500" /> {item.q}
              </h3>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed font-bold uppercase">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}