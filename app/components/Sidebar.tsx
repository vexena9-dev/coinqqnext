'use client';

import { 
  Trophy, 
  Flame, 
  Gamepad2, 
  Coins, 
  Dices, 
  Spade, 
  Ticket, 
  Fish, 
  Joystick, 
  Sword,
  Megaphone,
  Users,
  Headphones,
  Link as LinkIcon,
  BarChart3,
  Info
} from 'lucide-react';

export default function Sidebar() {
  // Daftar menu dengan ikon yang sudah disesuaikan agar tidak error
  const menuItems = [
    { name: 'Sports', icon: <Trophy size={18} />, status: 'NEW' },
    { name: 'Esports', icon: <Gamepad2 size={18} />, status: 'NEW' },
    { name: 'Slots', icon: <Flame size={18} />, status: 'HOT' },
    { name: 'Casino', icon: <Dices size={18} />, status: '' },
    { name: 'Togel', icon: <Ticket size={18} />, status: '' },
    { name: 'Poker', icon: <Spade size={18} />, status: '' },
    { name: 'E-Lottery', icon: <Coins size={18} />, status: '' },
    { name: 'Fishing', icon: <Fish size={18} />, status: '' },
    { name: 'Arcade', icon: <Joystick size={18} />, status: '' },
    { name: 'MM Tangkas', icon: <Sword size={18} />, status: '' },
  ];

  // Daftar General dengan ikon spesifik agar SEO kata-katanya kuat
  const generalItems = [
    { name: 'Promosi', icon: <Megaphone size={16} /> },
    { name: 'Referral', icon: <Users size={16} /> },
    { name: 'Link Alternatif', icon: <LinkIcon size={16} /> },
    { name: 'RTP Live', icon: <BarChart3 size={16} /> },
    { name: 'Tentang Kami', icon: <Info size={16} /> },
    { name: 'Bantuan', icon: <Headphones size={16} /> },
  ];

  return (
    <aside className="hidden md:flex w-52 border-r border-white/5 min-h-[calc(100vh-64px)] p-4 flex-col gap-8 sticky top-16 bg-[#080808]">
      {/* Section Permainan */}
      <nav className="space-y-1">
        <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-[0.2em]">Permainan</p>
        {menuItems.map((item) => (
          <button key={item.name} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group">
            <div className="flex items-center gap-3">
              <div className="text-gray-500 group-hover:text-yellow-500 transition-colors">{item.icon}</div>
              <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
            </div>
            {item.status && (
              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${item.status === 'HOT' ? 'bg-orange-500/20 text-orange-500' : 'bg-red-500/20 text-red-500'}`}>
                {item.status}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Section General - Sekarang dengan Ikon agar lebih profesional */}
      <nav className="space-y-1">
        <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-[0.2em]">General</p>
        {generalItems.map((item) => (
          <button key={item.name} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group">
            <div className="text-gray-600 group-hover:text-yellow-500 transition-colors">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}