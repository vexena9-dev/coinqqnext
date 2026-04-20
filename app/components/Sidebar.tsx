'use client';

import { 
  Trophy, Flame, Gamepad2, Coins, Dices, Spade, 
  Ticket, Fish, Joystick, Sword, Megaphone, Users, 
  Headphones, Link as LinkIcon, BarChart3, Info 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Sports', slug: 'sports', icon: <Trophy size={18} />, status: 'NEW' },
    { name: 'Esports', slug: 'esports', icon: <Gamepad2 size={18} />, status: 'NEW' },
    { name: 'Slots', slug: 'slots', icon: <Flame size={18} />, status: 'HOT' },
    { name: 'Casino', slug: 'casino', icon: <Dices size={18} />, status: '' },
    { name: 'Togel', slug: 'togel', icon: <Ticket size={18} />, status: '' },
    { name: 'Poker', slug: 'poker', icon: <Spade size={18} />, status: '' },
    { name: 'E-Lottery', slug: 'e-lottery', icon: <Coins size={18} />, status: '' },
    { name: 'Fishing', slug: 'fishing', icon: <Fish size={18} />, status: '' },
    { name: 'Arcade', slug: 'arcade', icon: <Joystick size={18} />, status: '' },
    { name: 'MM Tangkas', slug: 'mm-tangkas', icon: <Sword size={18} />, status: '' },
  ];

  const generalItems = [
    { name: 'Promosi', slug: 'promosi', icon: <Megaphone size={16} /> },
    { name: 'Referral', slug: 'referral', icon: <Users size={16} /> },
    { name: 'Link Alternatif', slug: 'link-alternatif', icon: <LinkIcon size={16} /> },
    { name: 'RTP Live', slug: 'rtp-live', icon: <BarChart3 size={16} /> },
    { name: 'Tentang Kami', slug: 'about', icon: <Info size={16} /> },
    { name: 'Bantuan', slug: 'contact', icon: <Headphones size={16} /> },
  ];

  return (
    <aside className="hidden md:flex w-52 border-r border-white/5 min-h-[calc(100vh-64px)] p-4 flex-col gap-8 sticky top-16 bg-[#080808]">
      {/* Section Permainan */}
      <nav className="space-y-1">
        <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-[0.2em]">Permainan</p>
        {menuItems.map((item) => (
          <Link 
            key={item.slug} 
            href={`/${item.slug}`} 
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
              pathname === `/${item.slug}` ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`${pathname === `/${item.slug}` ? 'text-yellow-500' : 'text-gray-500'} group-hover:text-yellow-500 transition-colors`}>
                {item.icon}
              </div>
              <span className={`text-sm font-semibold transition-colors ${
                pathname === `/${item.slug}` ? 'text-white' : 'text-gray-400 group-hover:text-white'
              }`}>
                {item.name}
              </span>
            </div>
            {item.status && (
              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${
                item.status === 'HOT' ? 'bg-orange-500/20 text-orange-500' : 'bg-red-500/20 text-red-500'
              }`}>
                {item.status}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Section General */}
      <nav className="space-y-1">
        <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-[0.2em]">General</p>
        {generalItems.map((item) => (
          <Link 
            key={item.slug} 
            href={`/${item.slug}`} 
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
              pathname === `/${item.slug}` ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <div className={`${pathname === `/${item.slug}` ? 'text-yellow-500' : 'text-gray-600'} group-hover:text-yellow-500 transition-colors`}>
              {item.icon}
            </div>
            <span className={`text-sm font-medium transition-colors ${
              pathname === `/${item.slug}` ? 'text-white' : 'text-gray-500 group-hover:text-white'
            }`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}