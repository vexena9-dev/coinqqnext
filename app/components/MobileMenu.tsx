'use client';

import Link from 'next/link';
import { X, Megaphone, Users, Link as LinkIcon, BarChart3, Info, Headphones, Zap, Trophy, Gamepad2, Flame, Dices, Ticket, Spade, Coins, Fish, Joystick, Sword } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const generalItems = [
    { name: 'Sports', icon: <Trophy size={20} />, slug: 'sports' },
    { name: 'Esports', icon: <Gamepad2 size={20} />, slug: 'esports' },
    { name: 'Slots', icon: <Flame size={20} />, slug: 'slots' },
    { name: 'Casino', icon: <Dices size={20} />, slug: 'casino' },
    { name: 'Togel', icon: <Ticket size={20} />, slug: 'togel'  },
    { name: 'Poker', icon: <Spade size={20} />, slug: 'poker' },
    { name: 'E-Lottery', icon: <Coins size={20} />, slug: 'e-lottery' },
    { name: 'Fishing', icon: <Fish size={20} />, slug: 'fishing' },
    { name: 'Arcade', icon: <Joystick size={20} />, slug: 'arcade' },
    { name: 'MM Tangkas', icon: <Sword size={20} />, slug: 'mm-tangkas' },
    { name: 'Promosi', icon: <Megaphone size={20} />, slug: 'promosi' },
    { name: 'Referral', icon: <Users size={20} />, slug: 'referral' },
    { name: 'Link Alternatif', icon: <LinkIcon size={16} />, slug: 'link-alternatif' },
    { name: 'RTP Live', icon: <BarChart3 size={20} />, slug: 'rtp-live' },
    { name: 'Tentang Kami', icon: <Info size={20} />, slug: 'about' },
    { name: 'Bantuan', icon: <Headphones size={20} />, slug: 'contact' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#080808]/98 backdrop-blur-xl p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-black italic text-yellow-500">MENU UTAMA</h2>
        <button onClick={onClose} className="p-2 bg-white/5 rounded-full"><X size={24} /></button>
      </div>
      
<nav className="grid grid-cols-1 gap-3 relative z-[110]">
  {generalItems.map((item) => (
    <Link
      key={item.name}
      href={`/${item.slug}`}
      onClick={() => {
        console.log("Navigating to:", item.slug);
        onClose();
      }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-yellow-500/10 transition group text-left pointer-events-auto relative z-[120]"
    >
      <div className="text-yellow-500 relative z-10">{item.icon}</div>
      <span className="font-bold text-gray-300 group-hover:text-white uppercase text-sm relative z-10">
        {item.name}
      </span>
    </Link>
  ))}
</nav>
    </div>
  );
}