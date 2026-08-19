"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Droplets,
  Compass,
  ArrowRight,
  Sparkles,
  Ticket,
  MapPin,
  Users,
  ShieldCheck,
  Zap,
  CheckCircle2,
  CalendarDays,
  Tag,
  Star,
  HelpCircle,
  PhoneCall,
  Flame,
  Award,
  ChevronDown,
  Building2,
  Car,
  Utensils,
  Maximize2,
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

const quickStats = [
  {
    icon: Clock,
    title: "Buka Setiap Hari",
    value: "07.00 - 17.00 WIB",
    subtitle: "Termasuk hari libur nasional & akhir pekan",
    badge: "Buka Hari Ini",
    color: "sky",
  },
  {
    icon: Droplets,
    title: "100% Mata Air Alami",
    value: "Gunung Slamet",
    subtitle: "Air segar mengalir tanpa kaporit pekat",
    badge: "Higienis & Alami",
    color: "emerald",
  },
  {
    icon: Compass,
    title: "Keluasan & Atraksi",
    value: "80+ Wahana Seru",
    subtitle: "Taman rekreasi air & darat 15 hektar",
    badge: "Terbesar di Jateng",
    color: "amber",
  },
  {
    icon: Award,
    title: "Rating Wisatawan",
    value: "4.8 / 5.0 (25k+ Review)",
    subtitle: "Pilihan utama keluarga & rombongan",
    badge: "Destinasi Favorit",
    color: "sky",
  },
];

const zoneCategories = [
  {
    id: "air-adrenalin",
    title: "Wahana Air & Adrenalin",
    description:
      "Kolam ombak bertingkat, menara seluncuran waterboom 15m, dan pesta busa salju ceria.",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    tag: "Terpopuler",
    rideCount: "35+ Atraksi",
    link: "/wahana?cat=air",
  },
  {
    id: "relaksasi-sehat",
    title: "Relaksasi & Terapi Alami",
    description:
      "Kanal lazy river 300m yang teduh, kolam terapi ikan Garra Rufa, dan kolam renang Olympic.",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    tag: "Kebugaran",
    rideCount: "20+ Spot",
    link: "/wahana?cat=air",
  },
  {
    id: "darat-outbound",
    title: "Petualangan Darat & Outbound",
    description:
      "Sirkuit gokart aspal 450m, flying fox melintasi danau 180m, arena ATV, dan high ropes course.",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    tag: "Tantangan",
    rideCount: "15+ Wahana",
    link: "/wahana?cat=darat",
  },
  {
    id: "kuliner-fasilitas",
    title: "Kuliner, Gazebo & Resort",
    description:
      "Pusat kuliner Banyumasan 600 kursi, gazebo VIP tepi kolam, mushola besar, dan loker digital.",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    tag: "Kenyamanan",
    rideCount: "Fasilitas Lengkap",
    link: "/wahana?cat=fasilitas",
  },
];

const featuredRides = [
  {
    id: "waterboom-ombak",
    title: "Waterboom & Kolam Ombak",
    category: "Wahana Air",
    badgeVariant: "default" as const,
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Sensasi deburan ombak buatan seperti di pantai sungguhan yang dipadukan dengan perosotan air spiral setinggi 15 meter.",
    intensity: "Tinggi (Adrenalin)",
    age: "Semua Usia",
    stats: "Ombak Tiap 30 Menit",
  },
  {
    id: "lazy-river",
    title: "Kolam Arus (Lazy River)",
    category: "Wahana Air",
    badgeVariant: "default" as const,
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Bersantai menyusuri aliran air jernih alami sepanjang 300 meter yang berkelok mengelilingi taman tropis asri.",
    intensity: "Santai & Rileks",
    age: "Semua Usia",
    stats: "Panjang 300 Meter",
  },
  {
    id: "sirkuit-gokart",
    title: "Sirkuit Gokart & Adventure",
    category: "Wahana Darat",
    badgeVariant: "secondary" as const,
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Pacu kecepatan di lintasan aspal berstandar keselamatan tinggi dengan armada gokart bertenaga 200cc.",
    intensity: "Tinggi (Adrenalin)",
    age: "Remaja & Dewasa",
    stats: "Track Aspal 450m",
  },
];

const visitorReviews = [
  {
    name: "Hendra Wijaya, S.Pd.",
    role: "Wakil Kepala Sekolah SMPN 1 Banyumas",
    rating: 5,
    comment:
      "Tiap tahun kami membawa rombongan 4 bus ke Owabong. Airnya benar-benar alami dan sejuk, fasilitas untuk rombongan pelajar sangat tertib dan koordinasi via WhatsApp sangat responsif!",
    tag: "Kunjungan Rombongan 240 Siswa",
  },
  {
    name: "dr. Ratna Kusuma",
    role: "Wisatawan Keluarga dari Yogyakarta",
    rating: 5,
    comment:
      "Anak-anak sangat puas di kolam busa dan waterboom, sementara orang tua bisa terapi ikan dan sewa gazebo teduh. Suasananya asri dan tidak perih di mata karena bukan kaporit pekat.",
    tag: "Liburan Keluarga",
  },
  {
    name: "Bambang Triyono",
    role: "Ketua Panitia Gathering BUMN Semarang",
    rating: 5,
    comment:
      "Paket corporate dengan instruktur outbound-nya top markotop. Tempat luas, makanan bento mendoan khas Purbalingganya enak, dan gokartnya memacu adrenalin rekan-rekan kantor.",
    tag: "Corporate Gathering 120 Pax",
  },
];

const faqs = [
  {
    q: "Apakah sumber air kolam di Owabong menggunakan kaporit pekat?",
    a: "Tidak. 100% air kolam di Owabong bersumber langsung dari mata air alami Gunung Slamet (Tuk Sendang & Cikawalon) dengan sistem air mengalir (flow-through) terus menerus sehingga selalu bersih, jernih, alami, dan tidak menyengat di mata maupun kulit.",
  },
  {
    q: "Berapa harga tiket masuk reguler harian?",
    a: "Tarif tiket masuk reguler adalah Rp 25.000 untuk hari kerja (Senin - Jumat) dan Rp 35.000 untuk akhir pekan (Sabtu - Minggu) serta Hari Libur Nasional. Anak dengan tinggi di bawah 80 cm gratis.",
  },
  {
    q: "Bagaimana cara mendapatkan diskon khusus rombongan?",
    a: "Untuk rombongan minimal 20 orang (sekolah, instansi, komunitas), Anda berhak mendapatkan diskon langsung 5% hingga 15% serta opsi paket makan dan outbound melalui Kalkulator Reservasi Rombongan di website ini.",
  },
  {
    q: "Apakah boleh membawa makanan dan menyewa gazebo?",
    a: "Pengunjung diperbolehkan membawa makanan ringan keluarga. Tersedia lebih dari 50 unit gazebo keluarga dan pendopo VIP di sekeliling area kolam yang dapat disewa harian.",
  },
  {
    q: "Bagaimana akses transportasi dan tempat parkir bus pariwisata?",
    a: "Owabong memiliki area parkir seluas 2 hektar yang dapat menampung hingga 80 bus pariwisata besar dan ratusan mobil pribadi, hanya 10 menit dari pusat kota Purbalingga atau 35 menit dari Purwokerto.",
  },
];

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
            alt="Owabong Waterpark Hero"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-sky-950/65 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl space-y-8">
            {/* Top Pill with 17-an Promo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Taman Rekreasi Air Terbesar & Alami di Jawa Tengah</span>
              <span className="hidden sm:inline-block bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full">
                Promo 17-an
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Owabong Waterpark:{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent">
                Kesegaran Alami,
              </span>{" "}
              Rekreasi Tanpa Batas
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl"
            >
              Rasakan sejuknya kemurnian mata air lereng Gunung Slamet berpadu
              dengan 80+ wahana air seru, kolam ombak raksasa, sirkuit gokart aspal,
              dan paket rekreasi terpadu untuk seluruh keluarga.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/wahana">
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 h-14 rounded-2xl shadow-lg shadow-sky-500/30 gap-3 text-base group"
                >
                  Jelajahi Wahana
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/promo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-bold px-7 h-14 rounded-2xl gap-2 text-base backdrop-blur-xs"
                >
                  <Tag className="h-5 w-5 text-amber-400" />
                  Info Harga & Promo
                </Button>
              </Link>

              <Link href="/reservasi">
                <Button
                  size="lg"
                  variant="accent"
                  className="font-bold px-7 h-14 rounded-2xl shadow-lg shadow-orange-500/25 gap-2 text-base"
                >
                  <Users className="h-5 w-5" />
                  Kalkulator Rombongan
                </Button>
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-300 font-medium border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100% Mata Air Alami</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Parkir 80+ Bus Luas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Diskon Khusus Rombongan 20+ Pax</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUICK STATS & LIVE INFO BAR (4 COLUMNS) */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {quickStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between pt-4 sm:pt-0 ${
                    idx !== 0 ? "sm:pl-6" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      {item.title}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                      {item.value}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE ZONES CATEGORIES (ZONASI KAWASAN) */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Kawasan Wisata 15 Hektar
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Jelajahi Beragam Zona Pengalaman
            </h2>
            <p className="text-base text-slate-600">
              Dari sensasi cipratan air adrenalin, terapi relaksasi mata air, hingga
              lintasan sirkuit gokart, temukan zona petualangan favorit Anda.
            </p>
          </div>

          <Link href="/peta">
            <Button variant="outline" className="gap-2 font-bold whitespace-nowrap">
              <Compass className="h-4 w-4 text-sky-600" />
              Buka Peta Interaktif
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zoneCategories.map((zone, idx) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link href={zone.link} className="block group h-full">
                <Card className="h-full overflow-hidden border border-slate-200/90 rounded-3xl bg-white hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={zone.image}
                      alt={zone.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/95 text-slate-900 shadow-xs">
                        {zone.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs text-sky-300 font-bold block">
                        {zone.rideCount}
                      </span>
                      <h4 className="font-extrabold text-base text-white leading-tight">
                        {zone.title}
                      </h4>
                    </div>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {zone.description}
                    </p>
                    <span className="text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Eksplorasi Zona <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROMO 17-AN & TIKET SPOTLIGHT BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-extrabold backdrop-blur-xs border border-white/20">
              <Flame className="h-4 w-4 text-amber-300" />
              <span>Semarak Bulan Kemerdekaan RI 2026</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Gebyar Promo Merdeka: Diskon Spesial s.d. 31 Agustus!
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              Dapatkan potongan tiket masuk khusus bernuansa Merah Putih, diskon pelajar/KTM,
              serta tarif tiket terusan weekday hanya <strong>Rp 25.000</strong> / orang.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-1">
              <span className="bg-white/20 px-3 py-1 rounded-lg">Weekday: Rp 25.000</span>
              <span className="bg-white/20 px-3 py-1 rounded-lg">Weekend: Rp 35.000</span>
              <span className="bg-white/20 px-3 py-1 rounded-lg">Anak &lt; 80cm: Gratis</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <Link href="/promo">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-amber-50 font-extrabold text-base px-8 h-14 rounded-2xl shadow-xl gap-2"
              >
                <Tag className="h-5 w-5 text-orange-600" />
                Lihat Rincian Promo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED RIDES SECTION (3 TOP RIDES) */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Wahana Paling Diminati
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Atraksi Unggulan Pilihan Pengunjung
            </h2>
            <p className="text-base text-slate-600">
              Uji adrenalin Anda di seluncuran raksasa atau nikmati santainya mengapung
              di sungai buatan sepanjang ratusan meter dengan panorama alam pegunungan.
            </p>
          </div>

          <Link href="/wahana">
            <Button variant="outline" className="gap-2 font-bold whitespace-nowrap">
              Lihat Semua 80+ Wahana
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRides.map((ride, idx) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="overflow-hidden border border-slate-200/90 rounded-3xl hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col h-full bg-white">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ride.image}
                    alt={ride.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={ride.badgeVariant} className="font-bold shadow-md">
                      {ride.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-sky-200 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {ride.stats}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {ride.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-2 flex-1 space-y-4">
                  <CardDescription className="text-sm text-slate-600 line-clamp-3">
                    {ride.description}
                  </CardDescription>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Intensitas: <strong className="text-slate-800">{ride.intensity}</strong></span>
                    <span>Usia: <strong className="text-slate-800">{ride.age}</strong></span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Link href="/wahana" className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn text-sky-600 hover:text-sky-700 hover:bg-sky-50 font-bold rounded-xl"
                    >
                      <span>Lihat Detail Wahana</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. NATURE & MOUNTAIN SPRING HERITAGE (KEUNGGULAN MATA AIR) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge
                variant="default"
                className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-4 py-1.5"
              >
                Keaslian Alam Purbalingga
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Mata Air Murni Lereng Gunung Slamet yang Menyegarkan Jiwa
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Berbeda dari kebanyakan waterpark modern yang mengandalkan bahan kimia kaporit
                berlebih, Owabong dialiri langsung oleh sumber mata air pegunungan alami Tuk Sendang & Cikawalon
                dengan sistem sirkulasi alami terus-menerus (*flow-through*).
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Tanpa Bau Kaporit Menyengat</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Aman dan ramah bagi mata anak-anak serta menjaga kelembapan kulit alami Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Suhu Air Alami Sejuk 22°C</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Memberikan sensasi segar dan efek relaksasi otot setelah lelah beraktivitas seharian.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Debit Air Melimpah Sepanjang Tahun</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Tidak pernah surut meski di musim kemarau berkat konservasi hutan lindung Purbalingga.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="relative">
              <div className="relative h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src="https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg"
                  alt="Mata Air Alami Owabong"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Tuk Sendang Purbalingga</span>
                    <Badge variant="secondary" className="font-bold">Mata Air Alami</Badge>
                  </div>
                  <p className="mt-1 text-slate-400">
                    Debit rata-rata 250 liter/detik menyuplai seluruh zona kolam Owabong 24 jam non-stop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. VISITOR TESTIMONIALS & SOCIAL PROOF */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
            Ulasan Pengunjung
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Mereka yang Telah Berkunjung?
          </h2>
          <p className="text-base text-slate-600">
            Dengarkan pengalaman nyata dari ribuan keluarga, sekolah, dan perusahaan
            yang mempercayakan agenda liburan mereka di Owabong Waterpark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visitorReviews.map((rev, idx) => (
            <Card
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {rev.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{rev.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ ACCORDION SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-100/70 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Pusat Informasi
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Temukan jawaban cepat seputar tiket masuk, aturan wahana, dan fasilitas Owabong.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-sky-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CALL-TO-ACTION BANNER (GROUP BOOKING & CONTACT) */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-700 p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Paket Wisata & Outbound 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Rencanakan Liburan Rombongan Sekolah atau Perusahaan Anda!
            </h2>
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
              Dapatkan harga promo tiket rombongan, gratis instruktur outbound,
              dan kemudahan reservasi langsung melalui WhatsApp kalkulator resmi kami.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <Link href="/reservasi">
              <Button
                size="lg"
                variant="accent"
                className="font-extrabold text-base px-8 h-14 rounded-2xl shadow-xl shadow-orange-500/30 gap-2"
              >
                <Users className="h-5 w-5" />
                Hitung Estimasi Biaya
              </Button>
            </Link>
            <Link href="/peta">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold px-6 h-14 rounded-2xl"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Lihat Denah Lokasi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
