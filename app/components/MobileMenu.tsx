'use client';

import React from 'react';
import Link from 'next/link';
import { X, Megaphone, Users, Link as LinkIcon, BarChart3, Info, Headphones, Zap, Trophy, Gamepad2, Flame, Dices, Ticket, Spade, Coins, Fish, Joystick, Sword } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const generalItems = [
    { name: 'Slots', icon: <Flame size={22} />, slug: 'slots', color: 'text-orange-500' },
    { name: 'Casino', icon: <Dices size={22} />, slug: 'casino', color: 'text-blue-500' },
    { name: 'Sports', icon: <Trophy size={22} />, slug: 'sports', color: 'text-green-500' },
    { name: 'Togel', icon: <Ticket size={22} />, slug: 'togel', color: 'text-yellow-500' },
    { name: 'Poker', icon: <Spade size={22} />, slug: 'poker', color: 'text-red-500' },
    { name: 'Arcade', icon: <Joystick size={22} />, slug: 'arcade', color: 'text-purple-500' },
    { name: 'Fishing', icon: <Fish size={22} />, slug: 'fishing', color: 'text-cyan-500' },
    { name: 'RTP Live', icon: <BarChart3 size={22} />, slug: 'rtp-live', color: 'text-orange-400' },
    { name: 'Promosi', icon: <Megaphone size={22} />, slug: 'promosi', color: 'text-pink-500' },
    { name: 'Referral', icon: <Users size={22} />, slug: 'referral', color: 'text-blue-400' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#080808]/95 backdrop-blur-2xl p-6 animate-in fade-in zoom-in duration-300">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-black italic text-white leading-none">COINQQ<span className="text-yellow-500">SLOT</span></h2>
          <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">Navigation Menu</p>
        </div>
        <button onClick={onClose} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-red-500 transition-colors">
          <X size={20} />
        </button>
      </div>
      
      <div className="space-y-8">
        {/* SWIPER MENU SECTION */}
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 ml-2">Kategori Game</h3>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={12}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full !px-2"
          >
            {generalItems.map((item) => (
              <SwiperSlide key={item.name}>
                <Link
                  href={`/${item.slug}`}
                  onClick={onClose}
                  className="flex flex-col items-center gap-3 p-4 rounded-[24px] bg-[#111] border border-white/5 hover:border-yellow-500/50 transition-all group"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="font-black text-[9px] text-gray-400 group-hover:text-white uppercase italic text-center leading-none">
                    {item.name}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* QUICK LINKS SECTION (Grid) */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/link-alternatif" onClick={onClose} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <LinkIcon size={18} className="text-yellow-500" />
            <span className="text-[10px] font-black uppercase italic">Anti Blokir</span>
          </Link>
          <Link href="/contact" onClick={onClose} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <Headphones size={18} className="text-yellow-500" />
            <span className="text-[10px] font-black uppercase italic">Bantuan</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-8 text-center">
        <p className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter">
          Official Partner of COINQQSLOT Group &copy; 2026
        </p>
      </div>
    </div>
  );
}