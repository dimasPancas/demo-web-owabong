"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Waves, Menu, X, Users, ChevronRight } from "lucide-react";
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5"
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
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md">
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
              <Button className="gap-2 font-semibold h-10 px-5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow transition-all">
                <Users className="h-4 w-4" />
                <span>Reservasi Rombongan</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/reservasi">
              <Button
                size="sm"
                className="h-9 text-xs px-3 font-semibold rounded-lg bg-sky-600 hover:bg-sky-700 text-white"
              >
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
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md">
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
                  <span>Reservasi Rombongan</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
