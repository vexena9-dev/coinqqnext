'use client';
import { X, Megaphone, Users, Link as LinkIcon, BarChart3, Info, Headphones, Zap, Trophy } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const generalItems = [
    { name: 'MM Tangkas', icon: <Zap size={20} /> },
    { name: 'Togel', icon: <Trophy size={20} /> },
    { name: 'Promosi', icon: <Megaphone size={20} /> },
    { name: 'Referral', icon: <Users size={20} /> },
    { name: 'Link Alternatif', icon: <LinkIcon size={20} /> },
    { name: 'RTP Live', icon: <BarChart3 size={20} /> },
    { name: 'Tentang Kami', icon: <Info size={20} /> },
    { name: 'Bantuan', icon: <Headphones size={20} /> },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#080808]/98 backdrop-blur-xl p-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-black italic text-yellow-500">MENU UTAMA</h2>
        <button onClick={onClose} className="p-2 bg-white/5 rounded-full"><X size={24} /></button>
      </div>
      
      <nav className="grid grid-cols-1 gap-3">
        {generalItems.map((item) => (
          <button key={item.name} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-yellow-500/10 transition group text-left">
            <div className="text-yellow-500">{item.icon}</div>
            <span className="font-bold text-gray-300 group-hover:text-white uppercase text-sm">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}