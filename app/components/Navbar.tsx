import Link from 'next/link';
import { MENU_ITEMS } from '../data/banners';
export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/5 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-yellow-500 tracking-tighter">
         <img 
            src="/logo.webp" 
            alt="COINQQSLOT Logo" 
            className="h-7 md:h-10 w-auto object-contain transition group-hover:scale-105"
          />
        </Link>

        <div className="flex gap-4">
          <Link href="https://freebit-coin.com/go/cqs/" className="px-5 py-2 text-sm font-bold text-white border border-white/20 rounded-lg hover:bg-white/5 transition">
            MASUK
          </Link>
          <Link href="https://freebit-coin.com/go/cqs/" className="px-5 py-2 text-sm font-bold text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            DAFTAR
          </Link>
        </div>
      </div>
    </header>
  );
}