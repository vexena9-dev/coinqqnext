import { PROMOS } from '../data/content';

export default function PromosiPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-black uppercase italic text-yellow-500 mb-8 tracking-tighter">
          Promo & Event COINQQSLOT
        </h1>

        <div className="grid gap-6">
          {PROMOS.map((promo) => (
            <div 
              key={promo.id} 
              className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group transition-all hover:border-yellow-500/30"
            >
              <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black text-white mb-2 uppercase italic">
                  {promo.title}
                </h2>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                  {promo.description}
                </p>
                <button className="bg-yellow-500 text-black font-black px-8 py-3 rounded-xl hover:bg-yellow-400 transition-all uppercase text-sm italic shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  Klaim Bonus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}