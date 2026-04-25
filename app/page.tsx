'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { BANNERS, GAMES } from './data/banners';
import { PROMOS } from './data/promos';
import Link from 'next/link';
import { 
  Flame, X, User, Trophy, Zap, Gamepad2, 
  Users, Headphones, Link as LinkIcon, 
  Target, Award, ShieldCheck, Share2, 
  ChevronRight, ArrowRight, Play,
  Send
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const [currentTx, setCurrentTx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [liveGames, setLiveGames] = useState(GAMES);
  const latestPromos = PROMOS.slice(0, 3);

  const LIVE_TRANSACTIONS = [
    { id: 1, user: "Fin***", amount: "IDR 250.000", type: "Withdraw" },
    { id: 2, user: "Riz***", amount: "IDR 1.000.000", type: "Withdraw" },
    { id: 3, user: "Sya***", amount: "IDR 50.000", type: "Deposit" },
    { id: 4, user: "And***", amount: "IDR 3.500.000", type: "Withdraw" },
  ];

  useEffect(() => {
    const rtpInterval = setInterval(() => {
      setLiveGames((prev) => prev.map(g => ({ ...g, rtp: Math.min(99, Math.max(65, parseFloat((g.rtp + (Math.random() * 0.4 - 0.2)).toFixed(1)))) })));
    }, 3000);
    const txInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => { setCurrentTx(p => (p + 1) % LIVE_TRANSACTIONS.length); setIsVisible(true); }, 500);
    }, 5000);
    return () => { clearInterval(rtpInterval); clearInterval(txInterval); };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans relative">
      <div className="max-w-[1600px] mx-auto flex">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-8 pb-24 overflow-hidden">
          {/* SECTION 1: BANNER */}
          <div className="w-full mb-12 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-[#111]">
            <Swiper modules={[Autoplay, Pagination, EffectFade]} effect={'fade'} loop autoplay={{ delay: 3000 }} pagination={{ clickable: true }}>
              {BANNERS.map((banner) => (
                <SwiperSlide key={banner.id}>
                  <div className="relative aspect-[21/9] md:aspect-[3/1]">
                    <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* SECTION 2: RTP TERPANAS (New Design) */}
          <section className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-orange-500">RTP Terpanas</h2>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Update Real-Time Tiap 3 Detik</p>
              </div>
              <Link href="/rtp-live" className="text-xs font-black uppercase text-gray-400 hover:text-orange-500 transition-colors">Lihat Semua →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...liveGames].sort((a, b) => b.rtp - a.rtp).slice(0, 4).map((game) => (
                <div key={game.id} className="bg-[#111] p-3 rounded-[32px] border border-white/5 group hover:border-orange-500/30 transition-all">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                    <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-orange-500 text-[8px] font-black rounded-lg">LIVE</div>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase truncate w-24">{game.name}</span>
                    <span className="text-sm font-black italic text-orange-500">{game.rtp}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-orange-500 shadow-[0_0_10px_#f97316]" style={{ width: `${game.rtp}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: TENTANG KAMI (Brief) */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-10 rounded-[45px] border border-white/5 flex flex-col justify-center">
              <h2 className="text-3xl font-black uppercase italic mb-4">Kenapa COINQQSLOT?</h2>
              <p className="text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-tight mb-6">
                Platform hiburan digital terpercaya dengan lisensi resmi PAGCOR, memberikan jaminan keamanan data 256-bit dan proses transaksi secepat kilat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase"><ShieldCheck className="text-yellow-500" size={16}/> Fair Play</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase"><Zap className="text-yellow-500" size={16}/> Auto-Deposit</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-6 rounded-[35px] border border-white/5 flex flex-col items-center justify-center text-center">
                <Award className="text-yellow-500 mb-2" size={32} />
                <span className="text-xl font-black italic">PAGCOR</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Certified Platform</span>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-[35px] border border-white/5 flex flex-col items-center justify-center text-center">
                <Users className="text-blue-500 mb-2" size={32} />
                <span className="text-xl font-black italic">1M+</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Active Members</span>
              </div>
            </div>
          </section>

          {/* SECTION 4: REFERRAL (Passive Income) */}
          <section className="mb-16 bg-blue-600 rounded-[50px] p-8 md:p-12 relative overflow-hidden group">
            <Share2 className="absolute top-10 right-10 text-white/10 group-hover:scale-125 transition-transform duration-1000" size={200} />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4 leading-none text-white">Dapatkan Pasif Income!</h2>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-8 opacity-80">Ajak temanmu bergabung dan nikmati komisi hingga 0.3% seumur hidup tanpa batas.</p>
              <Link href="/referral" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black uppercase italic text-xs hover:bg-blue-100 transition-all shadow-xl">
                Ambil Kode Referral <ArrowRight size={18}/>
              </Link>
            </div>
          </section>

          {/* SECTION 5: PROMO PREVIEW */}
          <section className="mb-16">
            <h2 className="text-2xl font-black uppercase italic mb-8 border-l-4 border-blue-500 pl-4">Event Minggu Ini</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPromos.map((promo) => (
                <Link key={promo.id} href="/promosi" className="relative h-64 rounded-[40px] overflow-hidden group border border-white/5">
                  <img src={promo.img} alt={promo.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
                    <span className={`w-fit px-3 py-1 rounded-full text-[8px] font-black uppercase mb-2 bg-gradient-to-r ${promo.color} text-white shadow-lg`}>{promo.tag}</span>
                    <h4 className="font-black text-xl uppercase italic leading-none text-white">{promo.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>

{/* SECTION 6: ARTIKEL KOMUNITAS */}
<section className="mb-16 border-t border-white/5 pt-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4 tracking-tighter text-white">
      Terhubung Dengan Kami
    </h2>
    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">
      Komunitas Terbesar di Indonesia
    </p>
  </div>

  <div className="max-w-3xl mx-auto bg-[#111] p-8 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative overflow-hidden">
    {/* Dekorasi Background */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] rounded-full" />
    
    <article className="relative z-10 space-y-6">
      <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium italic">
        "Bergabunglah dengan ribuan pemain aktif di platform <span className="text-white font-bold">COINQQSLOT</span>. Kami bukan sekadar tempat bermain, tapi sebuah ekosistem komunitas di mana setiap member mendapatkan prioritas utama melalui transparansi RTP dan kecepatan transaksi."
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
        <div>
          <h4 className="text-yellow-500 font-black uppercase italic text-sm mb-2">Visi Komunitas</h4>
          <p className="text-[11px] text-gray-500 leading-loose uppercase font-bold">
            Membangun standar baru dalam industri hiburan digital dengan mengutamakan keamanan data dan keadilan sistem (Fair Play) bagi seluruh member setia.
          </p>
        </div>
        <div>
          <h4 className="text-blue-500 font-black uppercase italic text-sm mb-2">Dukungan Prioritas</h4>
          <p className="text-[11px] text-gray-500 leading-loose uppercase font-bold">
            Tim profesional kami siap melayani Anda 24/7. Pastikan Anda selalu menggunakan link resmi untuk menjaga keamanan akun dan kenyamanan bermain Anda.
          </p>
        </div>
      </div>

      <div className="pt-8 text-center">
        <Link href="/about" className="inline-flex items-center gap-2 text-[10px] font-black uppercase italic text-gray-400 hover:text-white transition-all group">
          Pelajari Selengkapnya Tentang Kami <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  </div>
</section>

        </main>
      </div>

      {/* Pop-up Toast Transaksi */}
      <div className={`fixed bottom-24 md:bottom-10 left-4 z-[60] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-[#161616]/95 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[240px]">
          <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-500"><Zap size={20} className="fill-yellow-500" /></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase">{LIVE_TRANSACTIONS[currentTx]?.user}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${LIVE_TRANSACTIONS[currentTx]?.type.toLowerCase() === 'withdraw' ? 'bg-green-500 text-black' : 'bg-blue-500 text-white'}`}>{LIVE_TRANSACTIONS[currentTx]?.type}</span>
            </div>
            <span className="text-sm font-black text-white">{LIVE_TRANSACTIONS[currentTx]?.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}