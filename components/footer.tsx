import Link from "next/link";
import {
  Waves,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Trust Badges */}
      <div className="border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">100% Mata Air Alami</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Bersumber langsung dari mata air Gunung Slamet tanpa kaporit pekat.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Standar Keselamatan Tinggi</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Lifeguard bersertifikasi & tim medis siaga sepanjang waktu.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Destinasi Wisata Unggulan</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Taman rekreasi air terlengkap dan terbesar di Jawa Tengah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Waves className="h-6 w-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                OWABONG
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Objek Wisata Air Bojongsari (Owabong) Waterpark & Resort menghadirkan pengalaman
              rekreasi keluarga bertaraf nasional dengan kesegaran alami mata air pegunungan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Jelajahi
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/wahana" className="hover:text-sky-400 transition-colors">
                  Katalog Wahana
                </Link>
              </li>
              <li>
                <Link href="/peta" className="hover:text-sky-400 transition-colors">
                  Peta Kawasan & Zonasi
                </Link>
              </li>
              <li>
                <Link href="/promo" className="hover:text-sky-400 transition-colors">
                  Promo & Harga Tiket
                </Link>
              </li>
              <li>
                <Link href="/reservasi" className="hover:text-sky-400 transition-colors">
                  Reservasi Rombongan
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Zona Favorit
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/wahana" className="hover:text-sky-400 transition-colors">
                  Waterboom & Kolam Ombak
                </Link>
              </li>
              <li>
                <Link href="/wahana" className="hover:text-sky-400 transition-colors">
                  Lazy River & Olympic Pool
                </Link>
              </li>
              <li>
                <Link href="/wahana" className="hover:text-sky-400 transition-colors">
                  Sirkuit Gokart & ATV
                </Link>
              </li>
              <li>
                <Link href="/wahana" className="hover:text-sky-400 transition-colors">
                  Flying Fox & Outbound
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              Kontak & Jam Buka
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Setiap Hari:</strong>
                  <br />
                  07.00 - 17.00 WIB
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Owabong No. 1, Bojongsari, Purbalingga, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>(0281) 6596969 / 0812-2882-9900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <span>info@owabong.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Credit */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Owabong Waterpark & Resort. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Crafted by</span>
            <span className="font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              Dimas Digital Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
