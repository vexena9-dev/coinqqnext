export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-yellow-500 font-bold mb-4 uppercase">Tentang Kami</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              COINQQSLOT adalah platform gaming hiburan resmi 2026 dengan sistem keamanan enkripsi tingkat tinggi dan layanan dukungan 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold mb-4 uppercase">Bantuan</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Hubungi Kami</a></li>
              <li><a href="/terms" className="hover:text-yellow-500">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold mb-4 uppercase">Metode Pembayaran</h3>
            <div className="flex flex-wrap gap-2">
              {/* Kamu bisa menambah icon bank/e-wallet di sini nanti */}
              <span className="bg-white/5 px-3 py-1 rounded text-[10px] text-gray-300">BANK</span>
              <span className="bg-white/5 px-3 py-1 rounded text-[10px] text-gray-300">E-WALLET</span>
              <span className="bg-white/5 px-3 py-1 rounded text-[10px] text-gray-300">QRIS</span>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-white/5">
          <p className="text-gray-500 text-[10px]">
            &copy; 2026 COINQQSLOT. Created for Finena. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}