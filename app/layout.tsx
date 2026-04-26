import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COINQQSLOT | Tempat Hiburan Game Slot Resmi 2026",
  description: "COINQQSLOT adalah platform gaming hiburan resmi 2026 dengan sistem keamanan enkripsi tingkat tinggi dan layanan dukungan 24/7.",
  keywords: "COINQQSLOT, game slot online, hiburan gaming, platform resmi",
  verification: {
    google: "KODE_VERIFIKASI_DARI_GOOGLE_SEARCH_CONSOLE",
  },
  
  alternates: {
    canonical: 'https://coinqqslotvip.com',
    types: {
      'application/amp+html': 'https://piecescafe.com/coinqqnext/',
    },
  },

  robots: "index, follow", 
  
  openGraph: {
    title: "COINQQSLOT | Tempat Hiburan Game Slot Resmi 2026",
    description: "COINQQSLOT adalah platform gaming hiburan resmi 2026 dengan sistem keamanan enkripsi tingkat tinggi.",
    url: "https://coinqqslotvip.com",
    siteName: "COINQQSLOT",
    images: [
      {
        url: "https://coinqqslotvip.com/panvlet.jpg",
        width: 1200,
        height: 630,
        alt: "COINQQSLOT - Official 2026",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}