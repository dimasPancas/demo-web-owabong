"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Waves, Menu, X, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Katalog Wahana", href: "/wahana" },
  { name: "Peta Kawasan", href: "/peta" },
  { name: "Promo & Tiket", href: "/promo" },
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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
          >
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
              <Waves className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  OWABONG
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-md">
                  Park
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Waterpark & Resort Purbalingga
              </p>
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
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? "text-sky-600 bg-sky-50 font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {link.href === "/promo" && (
                    <span className="ml-1.5 text-[10px] bg-amber-500 text-white font-extrabold px-1.5 py-0.2 rounded-full">
                      Hot
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Reservasi Rombongan */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/reservasi">
              <Button
                variant="accent"
                className="gap-2 shadow-orange-500/20 font-bold px-6"
              >
                <Users className="h-4 w-4" />
                Reservasi Rombongan
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/reservasi">
              <Button size="sm" variant="accent" className="text-xs px-3 h-9 font-bold">
                Rombongan
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 space-y-1.5 animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "text-sky-600 bg-sky-50 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.href === "/promo" && (
                    <span className="text-[11px] bg-amber-500 text-white font-extrabold px-2 py-0.5 rounded-full">
                      Promo 17an
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-2 pb-1">
              <Link
                href="/reservasi"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button variant="accent" className="w-full justify-center gap-2 font-bold py-3">
                  <Users className="h-4 w-4" />
                  Kalkulator Rombongan
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
