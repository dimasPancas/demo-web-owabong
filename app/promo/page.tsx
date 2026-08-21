"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Users,
  ArrowRight,
  Flame,
  Copy,
  Check,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PromoItem {
  id: string;
  title: string;
  code: string;
  badge: string;
  discountTag: string;
  validUntil: string;
  image: string;
  description: string;
  terms: string[];
  isHot?: boolean;
}

const activePromos: PromoItem[] = [
  {
    id: "promo-kemerdekaan",
    title: "Gebyar Promo Kemerdekaan RI Ke-81",
    code: "MERDEKA81",
    badge: "Spesial Agustus",
    discountTag: "Diskon 17% + 8%",
    validUntil: "1 s.d. 31 Agustus 2026",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Rayakan semarak bulan kemerdekaan dengan harga tiket masuk spesial untuk pengunjung yang memakai atribut bernuansa Merah Putih!",
    terms: [
      "Berlaku setiap hari Selasa s.d. Kamis selama bulan Agustus",
      "Tunjukkan pakaian/atribut bernuansa merah putih di loket tiket",
      "Maksimal pembelian 4 tiket per transaksi perorangan",
      "Tidak dapat digabungkan dengan promo rombongan instansi",
    ],
    isHot: true,
  },
  {
    id: "promo-pelajar",
    title: "Flash Sale Pelajar & Mahasiswa Banyumas",
    code: "PELAJARSERU",
    badge: "Edukasi & Remaja",
    discountTag: "Harga Tiket Rp 20.000",
    validUntil: "Setiap Hari Senin & Rabu",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Khusus pelajar dan mahasiswa aktif se-Karesidenan Banyumas. Cukup tunjukkan Kartu Pelajar atau Kartu Tanda Mahasiswa (KTM) yang masih berlaku.",
    terms: [
      "Wajib menunjukkan 1 Kartu Pelajar/KTM untuk 1 tiket masuk",
      "Termasuk akses ke seluruh kolam mata air alami dan kolam ombak",
      "Hanya berlaku untuk pembelian langsung di loket utama",
    ],
    isHot: false,
  },
  {
    id: "promo-keluarga",
    title: "Paket Liburan Keluarga Ceria (4 Orang)",
    code: "FAMILY4SERU",
    badge: "Hemat Berempat",
    discountTag: "Hemat Rp 30.000 + Free Ban",
    validUntil: "Hingga Akhir Tahun 2026",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Liburan hemat bersama ayah, ibu, dan 2 anak dengan tiket terusan lengkap plus voucher sewa pelampung ganda & potongan gazebo.",
    terms: [
      "Berlaku untuk 4 orang (2 dewasa + 2 anak)",
      "Termasuk 1 voucher gratis sewa ban pelampung ganda",
      "Berlaku di hari kerja (Senin - Jumat)",
    ],
    isHot: false,
  },
];

export default function PromoPage() {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const handleClaimPromo = (promo: PromoItem) => {
    const message = `Halo Admin Owabong Waterpark, saya ingin menanyakan dan klaim promo: *${promo.title}* (Kode Promo: *${promo.code}*). Mohon petunjuk pemesanannya.`;
    window.open(
      `https://wa.me/6281228829900?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <Badge
            variant="default"
            className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-4 py-1.5"
          >
            <Flame className="h-3.5 w-3.5 mr-1 text-orange-400 inline" />
            Promo & Tarif Resmi 2026
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Penawaran Spesial & Harga Tiket Owabong
          </h1>
          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Dapatkan informasi tarif tiket masuk reguler dan manfaatkan kode kupon diskon
            eksklusif untuk liburan keluarga yang hemat dan menyenangkan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* 2. REGULAR TICKET PRICING TABLE */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3 py-1 text-xs">
              Tarif Masuk Reguler
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Tiket Harian
            </h2>
            <p className="text-sm text-slate-600">
              Harga tiket masuk perorangan tanpa batasan minimal pengunjung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Weekday Card */}
            <Card className="rounded-3xl border-2 border-sky-200 hover:border-sky-400 shadow-md bg-white overflow-hidden transition-all duration-300">
              <div className="bg-sky-50 p-6 border-b border-sky-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    Hari Kerja (Weekday)
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    Senin — Jumat
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-sky-700">
                    Rp 25.000
                  </span>
                  <span className="text-xs text-slate-500 block font-medium">/ orang</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sudah Termasuk:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Akses seluruh kolam mata air alami pegunungan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Wahana Kolam Ombak Sagara & Waterboom Spiral 15m</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Kolam Arus (Lazy River 300m) & Terapi Ikan Garra Rufa</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Asuransi keselamatan pengunjung PT Jasa Raharja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weekend Card */}
            <Card className="rounded-3xl border-2 border-amber-300 hover:border-amber-400 shadow-md bg-white overflow-hidden transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Paling Favorit
              </div>
              <div className="bg-amber-50 p-6 border-b border-amber-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Akhir Pekan & Hari Libur
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    Sabtu, Minggu & Libur Nasional
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-amber-600">
                    Rp 35.000
                  </span>
                  <span className="text-xs text-slate-500 block font-medium">/ orang</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sudah Termasuk:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Akses seluruh wahana air alami dan waterboom spiral</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Atraksi Pesta Busa Salju Meriam Raksasa 4x sehari</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Live music dan panggung hiburan keluarga</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Asuransi keselamatan pengunjung PT Jasa Raharja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xs text-slate-500">
            * Anak-anak dengan tinggi badan di bawah 80 cm <strong>GRATIS</strong> tiket masuk.
          </p>
        </section>

        {/* 3. ACTIVE PROMOS LIST */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sky-200 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span className="text-xs uppercase font-bold tracking-wider text-sky-700">
                  Program Diskon Berlangsung
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Promo Kupon & Flash Sale Spesial
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              *Salin kode promo dan tunjukkan kepada petugas loket atau CS WhatsApp
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activePromos.map((promo, idx) => {
              const isCopied = copiedCode === promo.code;
              return (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge
                          variant={promo.isHot ? "accent" : "default"}
                          className="font-bold shadow-md"
                        >
                          {promo.badge}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="inline-block bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-sm">
                          {promo.discountTag}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                        <Calendar className="h-3.5 w-3.5 text-sky-600" />
                        <span>{promo.validUntil}</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {promo.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-2 flex-1 space-y-4">
                      <CardDescription className="text-xs sm:text-sm text-slate-600">
                        {promo.description}
                      </CardDescription>

                      {/* Coupon Code Pill */}
                      <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Kode Promo:</span>
                          <code className="text-xs sm:text-sm font-extrabold text-sky-800 tracking-wider">
                            {promo.code}
                          </code>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleCopyCode(promo.code)}
                          className={`h-8 px-3 rounded-xl font-bold text-xs gap-1.5 transition-all ${
                            isCopied
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-white text-sky-700 border-sky-200 hover:bg-sky-100"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              Tersalin!
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              Salin Kode
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                        <strong className="text-[11px] uppercase tracking-wider text-slate-500 block">
                          Syarat & Ketentuan:
                        </strong>
                        <ul className="space-y-1">
                          {promo.terms.map((t, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-sky-600 font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button
                        onClick={() => handleClaimPromo(promo)}
                        variant="accent"
                        className="w-full font-bold justify-center gap-2 rounded-xl h-11 shadow-sm"
                      >
                        <PhoneCall className="h-4 w-4" />
                        Klaim via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. GROUP PROMO BANNER TEASER */}
        <section className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <Users className="h-3.5 w-3.5" />
              <span>Khusus Rombongan 20+ Orang</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Butuh Diskon Hingga 15% untuk Sekolah & Perusahaan?
            </h3>
            <p className="text-sky-100 text-sm sm:text-base">
              Gunakan kalkulator reservasi rombongan interaktif kami untuk menghitung
              estimasi tiket terusan, paket makan bento mendoan, dan instruktur outbound.
            </p>
          </div>

          <Link href="/reservasi" className="shrink-0">
            <Button
              size="lg"
              variant="accent"
              className="font-extrabold text-base px-8 h-14 rounded-2xl shadow-xl shadow-orange-500/30 gap-2"
            >
              Buka Kalkulator Rombongan <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
