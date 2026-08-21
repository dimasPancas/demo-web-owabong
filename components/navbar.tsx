"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Waves,
  Menu,
  X,
  Users,
  Phone,
  Droplets,
  MapPin,
  Clock,
  Ticket,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Wahana", href: "/wahana" },
  { name: "Promo & Tiket", href: "/promo", highlight: "Promo" },
  { name: "Peta Kawasan", href: "/peta" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar - Clean, informative & minimal */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Operational Hours & Natural Water info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-slate-200">
                Buka Hari Ini: <strong className="text-emerald-400 font-semibold">07.00 - 17.00 WIB</strong>
              </span>
            </div>

            <span className="text-slate-700">|</span>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Droplets className="h-3.5 w-3.5 text-sky-400" />
              <span>100% Mata Air Alami Gn. Slamet (21°C)</span>
            </div>
          </div>

          {/* Location & Quick Contact */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>Purbalingga, Jawa Tengah</span>
            </div>

            <span className="hidden lg:inline text-slate-700">|</span>

            <a
              href="https://wa.me/6281228829900"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>CS: 0812-2882-9900</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <Waves className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors leading-none">
                  OWABONG
                </span>
                <span className="text-[10px] font-bold tracking-widest text-sky-600 uppercase mt-0.5">
                  Waterpark
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative flex items-center gap-1.5 ${
                      isActive
                        ? "text-sky-700 bg-sky-50"
                        : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.highlight && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.2 rounded-md">
                        {link.highlight}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/reservasi">
                <Button
                  className="gap-2 font-semibold h-10 px-5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow transition-all"
                >
                  <Users className="h-4 w-4" />
                  <span>Reservasi Rombongan</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Link href="/reservasi">
                <Button size="sm" className="h-9 text-xs px-3 font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white">
                  Reservasi
                </Button>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-3 animate-in fade-in-50 slide-in-from-top-2 duration-150">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-sky-700 bg-sky-50 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.name}</span>
                        {link.highlight && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.2 rounded-md">
                            {link.highlight}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-1">
                <Link
                  href="/reservasi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button className="w-full justify-center gap-2 font-semibold h-11 rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-sm">
                    <Users className="h-4 w-4" />
                    <span>Kalkulator & Reservasi Rombongan</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Quick Info Card */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-2 text-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="font-medium text-slate-700">Jam Operasional:</span>
                  </div>
                  <span className="font-bold text-emerald-600">07.00 - 17.00 WIB</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-sky-600" />
                    <span>Lokasi:</span>
                  </div>
                  <span className="text-slate-700 font-medium">Bojongsari, Purbalingga</span>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-slate-500">Butuh bantuan?</span>
                  <a
                    href="https://wa.me/6281228829900"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3" />
                    <span>WhatsApp CS</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
