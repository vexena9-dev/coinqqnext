'use client'; // Pastikan ada ini di baris paling atas

import { useState, useEffect } from 'react';
import { GAMES as INITIAL_GAMES } from '../data/banners';
import { BarChart3 } from 'lucide-react';

export default function RTPLivePage() {
  // Simpan data game ke dalam state agar bisa diupdate
  const [liveGames, setLiveGames] = useState(INITIAL_GAMES);

  useEffect(() => {
    // Buat interval untuk merubah angka secara acak setiap 3-5 detik
    const interval = setInterval(() => {
      setLiveGames((prevGames) =>
        prevGames.map((game) => {
          // Logika: Tambah atau kurang angka RTP sebesar 0.1 - 0.5% secara acak
          const change = (Math.random() * 4 - 2); // Hasilnya antara -0.2 sampai +0.2
          let newRtp = parseFloat((game.rtp + change).toFixed(1));

          // Batasi agar RTP tidak lebih dari 99% atau kurang dari 65%
          if (newRtp > 99) newRtp = 99;
          if (newRtp < 45) newRtp = 45;

          return { ...game, rtp: newRtp };
        })
      );
    }, 4000); // Update setiap 4 detik

    return () => clearInterval(interval); // Bersihkan memory saat halaman ditutup
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white p-4 md:p-10">
      {/* ... bagian header tetap sama ... */}

{/* Grid yang lebih rapat: 3 kolom di mobile, 6 kolom di desktop */}
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
  {liveGames.map((game) => (
    <div key={game.id} className="bg-[#121212] rounded-xl overflow-hidden border border-white/5 group shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        
        {/* Badge yang lebih kecil */}
        <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase italic ${
          game.rtp >= 96 ? 'bg-red-600' : 'bg-blue-600'
        }`}>
          {game.rtp >= 96 ? 'HOT' : 'STABLE'}
        </div>
      </div>

      <div className="p-2 bg-[#161616]">
        {/* Nama Game lebih kecil agar tidak makan tempat */}
        <h4 className="text-[9px] font-bold truncate mb-2 uppercase tracking-tighter text-gray-200">
          {game.name}
        </h4>
        
        {/* Progress Bar yang lebih tipis */}
        <div className="relative w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/5">
          <div 
            className={`h-full rounded-full transition-all duration-[2000ms] ease-in-out relative ${
              game.rtp >= 90 ? 'bg-green-500' :
                game.rtp >= 70 ? 'bg-yellow-500' :
                'bg-red-500'
            }`}
            style={{ width: `${game.rtp}%` }}
          >
            {/* Animasi Barbershop tetap ada tapi lebih halus */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.4)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0.4)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-barber"></div>
            </div>
          </div>

          {/* Angka Persen di tengah bar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[7px] font-black text-white drop-shadow-md">
              {game.rtp}%
            </span>
          </div>
        </div>

        {/* Tombol Main lebih ringkas */}
        <button className="w-full mt-2 bg-yellow-500 text-black py-1 rounded-md text-[8px] font-black uppercase hover:bg-yellow-400 transition-all">
          MAIN
        </button>
      </div>
    </div>
  ))}
</div>

      <style jsx global>{`
        @keyframes barber-scroll {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
        .animate-barber {
          animation: barber-scroll 1s linear infinite;
        }
      `}</style>
    </div>
  );
}