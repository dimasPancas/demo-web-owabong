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
  Users,
  ShieldCheck,
  CheckCircle2,
  CalendarDays,
  Tag,
  Star,
  ChevronDown,
  Flame,
  Award,
  Waves,
  Shield,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// 1. Quick Stats
const quickStats = [
  {
    icon: Droplets,
    title: "100% Mata Air Alami",
    value: "Tuk Sendang Gn. Slamet",
    subtitle: "Air mengalir segar tanpa kaporit pekat",
    badge: "Alami & Higienis",
    color: "sky",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "07.00 - 17.00 WIB",
    subtitle: "Buka setiap hari termasuk tanggal merah",
    badge: "Buka Hari Ini",
    color: "emerald",
  },
  {
    icon: Compass,
    title: "Atraksi & Wahana",
    value: "80+ Wahana Air & Darat",
    subtitle: "Kawasan rekreasi terpadu seluas 15 hektar",
    badge: "Terbesar di Jateng",
    color: "cyan",
  },
  {
    icon: Award,
    title: "Kepuasan Wisatawan",
    value: "4.8 / 5.0 (25k+ Review)",
    subtitle: "Pilihan utama wisata keluarga & rombongan",
    badge: "Destinasi Unggulan",
    color: "amber",
  },
];

// 2. Zone Categories
const zoneCategories = [
  {
    id: "air-adrenalin",
    title: "Wahana Air & Adrenalin",
    description:
      "Kolam ombak bertingkat Ombak Sagara, menara seluncuran waterboom 15m, dan pesta busa salju ceria.",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    tag: "Paling Favorit",
    rideCount: "35+ Atraksi",
    link: "/wahana",
  },
  {
    id: "relaksasi-sehat",
    title: "Relaksasi & Terapi Alami",
    description:
      "Kanal kolam arus lazy river 300m, kolam terapi ikan Garra Rufa, kolam air hangat, dan Olympic pool 50m.",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    tag: "Kebugaran & Santai",
    rideCount: "20+ Spot",
    link: "/wahana",
  },
  {
    id: "darat-outbound",
    title: "Petualangan Darat & Outbound",
    description:
      "Sirkuit gokart aspal 450m, flying fox melintasi danau 180m, arena ATV offroad, dan high ropes team building.",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    tag: "Tantangan & Edukasi",
    rideCount: "15+ Wahana",
    link: "/wahana",
  },
  {
    id: "kuliner-fasilitas",
    title: "Kuliner, Gazebo & Resort",
    description:
      "Pusat kuliner mendoan khas Banyumas 600 kursi, gazebo VIP tepi kolam, mushola besar, dan loker digital.",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    tag: "Fasilitas Nyaman",
    rideCount: "Layanan Lengkap",
    link: "/wahana",
  },
];

// 3. Featured Rides
interface RideItem {
  id: string;
  title: string;
  category: string;
  categoryType: "air" | "darat" | "terapi";
  image: string;
  description: string;
  intensity: string;
  depth: string;
  schedule: string;
  highlights: string[];
}

const featuredRides: RideItem[] = [
  {
    id: "ombak-sagara",
    title: "Kolam Ombak Sagara & Waterboom",
    category: "Wahana Air Utama",
    categoryType: "air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Rasakan sensasi gulungan ombak pantai buatan dengan ritme bertingkat, dipadukan dengan menara seluncuran spiral bertingkat setinggi 15 meter.",
    intensity: "Tinggi (Adrenalin)",
    depth: "0.5m s.d 1.8m",
    schedule: "Ombak Tiap 30 Menit",
    highlights: [
      "Ombak buatan otomatis bersirkulasi tiap 30 menit",
      "2 spiral slide & 1 torpedo speed slide",
      "Pos lifeguard bersertifikasi PRSI selalu siaga",
    ],
  },
  {
    id: "lazy-river-arus",
    title: "Kolam Arus (Lazy River 300m)",
    category: "Relaksasi Alami",
    categoryType: "terapi",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Bersantai mengapung di atas ban pelampung menyusuri aliran air jernih mata air pegunungan yang berkelok mengelilingi rimbunnya taman tropis asri.",
    intensity: "Santai & Teduh",
    depth: "1.0 Meter",
    schedule: "Sepanjang Hari (07.00 - 17.00 WIB)",
    highlights: [
      "Panjang lintasan arus 300 meter berkanopi teduh",
      "100% air mata air alami tanpa bau kaporit",
      "Cocok untuk relaksasi keluarga dan anak-anak",
    ],
  },
  {
    id: "kolam-olympic",
    title: "Kolam Olympic Standard 50m",
    category: "Olahraga Renang",
    categoryType: "air",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Kolam renang ukuran Olimpiade 8 lintasan berstandar PRSI untuk latihan atlet, berenang jarak jauh, dan kejuaraan renang daerah.",
    intensity: "Sedang (Olahraga)",
    depth: "1.4m s.d 2.2m",
    schedule: "Sepanjang Hari (07.00 - 17.00 WIB)",
    highlights: [
      "8 lintasan resmi dengan tali pembatas standar FINA",
      "Air pegunungan sejuk yang membantu stamina perenang",
      "Dilengkapi tribun penonton dan papan loncat",
    ],
  },
  {
    id: "sirkuit-gokart",
    title: "Sirkuit Gokart Aspal 450m",
    category: "Petualangan Darat",
    categoryType: "darat",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Pacu adrenalin Anda di sirkuit balap aspal berkelok dengan armada gokart bertenaga 200cc, lengkap dengan helm pengaman dan sistem timer digital.",
    intensity: "Tinggi (Adrenalin)",
    depth: "Panjang Track 450m",
    schedule: "08.30 - 16.30 WIB",
    highlights: [
      "Track aspal mulus dengan 8 tikungan tantangan",
      "Pilihan single gokart & double seat untuk tandem",
      "Standar pengaman racing dan pengawas jalur",
    ],
  },
  {
    id: "kolam-busa-salju",
    title: "Kolam Pesta Busa Salju",
    category: "Wahana Ceria Anak",
    categoryType: "air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Keseruan mandi busa lembut seperti salju yang disemprotkan dari meriam raksasa diiringi musik gembira, sangat aman bagi kulit anak-anak.",
    intensity: "Ceria & Menyenangkan",
    depth: "0.6 Meter",
    schedule: "4x Sehari (09.30, 11.30, 13.30, 15.30)",
    highlights: [
      "Busa dermatologis ramah mata dan kulit anak",
      "Didampingi pemandu dan musik keceriaan",
      "Spot foto terfavorit untuk dokumentasi keluarga",
    ],
  },
  {
    id: "kolam-terapi-ikan",
    title: "Kolam Terapi Ikan Garra Rufa",
    category: "Relaksasi & Kesehatan",
    categoryType: "terapi",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Rileksasi alami mencelupkan kaki ke kolam mata air berisi ribuan ikan Garra Rufa yang membantu eksfoliasi kulit mati dan melancarkan peredaran darah.",
    intensity: "Rileks & Sehat",
    depth: "0.4 Meter",
    schedule: "Sepanjang Hari (07.00 - 17.00 WIB)",
    highlights: [
      "Ikan Garra Rufa asli terawat higienis",
      "Tempat duduk gazebo melingkar yang asri",
      "Sensasi geli menyenangkan yang menyehatkan kaki",
    ],
  },
];

// 4. Daily Live Attraction Schedule
const dailySchedule = [
  {
    time: "08.30 - 16.30 WIB",
    event: "Semburan Kolam Ombak Sagara",
    frequency: "Setiap 30 Menit Sekali",
    location: "Zona Waterboom Utama",
    tag: "Wajib Coba",
  },
  {
    time: "09.30, 11.30, 13.30, 15.30 WIB",
    event: "Pesta Busa Salju Meriam Raksasa",
    frequency: "4 Sesi Setiap Hari",
    location: "Kolam Busa Keluarga",
    tag: "Favorit Anak",
  },
  {
    time: "08.00 - 16.30 WIB",
    event: "Sirkuit Gokart, ATV & Flying Fox Danau",
    frequency: "Beroperasi Sepanjang Hari",
    location: "Zona Adventure Darat",
    tag: "Adrenalin",
  },
  {
    time: "10.00 - 14.30 WIB (Weekend)",
    event: "Live Music Panggung Hiburan & Fun Games",
    frequency: "Sabtu, Minggu & Hari Libur",
    location: "Panggung Utama Food Court",
    tag: "Hiburan",
  },
];

// 5. Visitor Reviews
const visitorReviews = [
  {
    name: "Drs. H. Mulyono, M.Pd.",
    role: "Kepala Sekolah SMPN 2 Purwokerto",
    rating: 5,
    comment:
      "Sudah 4 tahun berturut-turut kami memilih Owabong untuk agenda renang massal dan rekreasi tahunan 300 siswa. Airnya benar-benar alami dari mata air, tidak pedih di mata, stafnya sangat ramah, dan koordinasi rombongan via WhatsApp sangat cepat!",
    tag: "Rombongan Sekolah 300 Pax",
  },
  {
    name: "dr. Amelia Kartika",
    role: "Wisatawan Keluarga dari Semarang",
    rating: 5,
    comment:
      "Tempat wisata air paling segar di Jawa Tengah! Anak-anak sangat gembira mandi busa dan perosotan, sementara kakek-nenek bisa santai terapi ikan dan sewa gazebo teduh. Kebersihannya sangat terjaga.",
    tag: "Liburan Keluarga",
  },
  {
    name: "Rian Prasetya",
    role: "Ketua Panitia Gathering BUMN",
    rating: 5,
    comment:
      "Paket Corporate Owabong sangat lengkap: tiket terusan, instruktur outbound yang seru, plus hidangan makan siang bento mendoan hangat khas Purbalingga yang nikmat. Sangat memuaskan!",
    tag: "Corporate Gathering 150 Pax",
  },
];

// 6. FAQs
const faqs = [
  {
    q: "Mengapa air di Owabong tidak berbau kaporit pekat seperti kolam renang biasa?",
    a: "Owabong menggunakan 100% sumber mata air alami dari lereng Gunung Slamet (Tuk Sendang & Cikawalon) dengan sistem sirkulasi air mengalir terus-menerus (flow-through system). Air selalu berganti baru, bersih, dingin menyegarkan, dan aman di mata maupun kulit anak-anak.",
  },
  {
    q: "Berapa tarif tiket masuk reguler harian?",
    a: "Tarif tiket masuk reguler adalah Rp 25.000 untuk hari kerja (Senin - Jumat) dan Rp 35.000 untuk akhir pekan (Sabtu - Minggu) serta Hari Libur Nasional. Anak-anak dengan tinggi badan di bawah 80 cm GRATIS masuk.",
  },
  {
    q: "Apakah ada diskon khusus untuk rombongan sekolah, instansi, atau komunitas?",
    a: "Ya! Rombongan minimal 20 orang berhak mendapatkan diskon tiket masuk mulai dari 5% hingga 15%, opsi paket makan siang bento mendoan, dan instruktur outbound melalui Kalkulator Reservasi Rombongan di web ini.",
  },
  {
    q: "Apakah pengunjung boleh membawa bekal makanan sendiri?",
    a: "Pengunjung diperbolehkan membawa makanan ringan dan bekal keluarga. Di dalam area juga tersedia Food Court dengan aneka kuliner lezat khas Banyumas (Mendoan hangat, Soto Kriyik) dengan harga terjangkau dan tempat duduk luas.",
  },
  {
    q: "Bagaimana ketersediaan fasilitas sewa gazebo, pelampung, dan loker?",
    a: "Tersedia lebih dari 50 unit gazebo keluarga di tepi kolam yang dapat disewa, persewaan ban pelampung single/double tube, serta loker penitipan barang yang aman.",
  },
  {
    q: "Apakah area parkir dapat menampung bus pariwisata besar?",
    a: "Kawasan parkir Owabong seluas 2 hektar mampu menampung hingga 80 bus pariwisata ukuran besar dan ratusan kendaraan roda empat secara bersamaan, berjarak hanya 10 menit dari alun-alun Purbalingga.",
  },
];

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);
  const [selectedRide, setSelectedRide] = React.useState<RideItem | null>(null);
  const [activeRideFilter, setActiveRideFilter] = React.useState<string>("semua");

  // Hero Quick Estimator State
  const [heroPax, setHeroPax] = React.useState<number>(4);
  const [heroDayType, setHeroDayType] = React.useState<"weekday" | "weekend">("weekday");

  const heroTicketPrice = heroDayType === "weekday" ? 25000 : 35000;
  const heroTotal = heroPax * heroTicketPrice;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const filteredRides = React.useMemo(() => {
    if (activeRideFilter === "semua") return featuredRides;
    return featuredRides.filter((r) => r.categoryType === activeRideFilter);
  }, [activeRideFilter]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f9ff]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg"
            alt="Owabong Waterpark Purbalingga"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 via-sky-800/70 to-sky-950/90 backdrop-blur-[1.5px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold backdrop-blur-md shadow-lg shadow-sky-950/20"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="flex items-center gap-1.5 text-cyan-200">
                  <Droplets className="h-4 w-4 text-cyan-300" />
                  Mata Air Alami Gn. Slamet (21°C)
                </span>
                <span className="hidden sm:inline-block bg-amber-400 text-slate-900 font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full">
                  Air Mengalir Segar
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
              >
                Kesegaran Murni{" "}
                <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
                  Mata Air Alami
                </span>{" "}
                & 80+ Wahana Seru di Purbalingga
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-sky-100/90 leading-relaxed font-normal max-w-2xl"
              >
                Nikmati air jernih pegunungan tanpa kaporit pekat yang mengalir terus dari Tuk Sendang,
                dipadu dengan sensasi deburan Kolam Ombak Sagara, seluncuran Waterboom 15m,
                kolam arus santai, hingga sirkuit gokart untuk liburan keluarga terbaik.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <Link href="/wahana">
                  <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-400 text-white font-extrabold px-7 h-13 rounded-2xl shadow-lg shadow-sky-500/40 gap-2.5 text-sm sm:text-base group transition-transform active:scale-95"
                  >
                    <Waves className="h-5 w-5" />
                    Jelajahi 80+ Wahana
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/promo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/20 font-bold px-6 h-13 rounded-2xl gap-2 text-sm sm:text-base backdrop-blur-sm bg-white/10"
                  >
                    <Tag className="h-4 w-4 text-amber-300" />
                    Promo & Harga Tiket
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-5 pt-3 text-xs sm:text-sm text-sky-100 font-semibold border-t border-white/15"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>100% Air Mengalir Alami</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Parkir Bus 80+ Armada</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Diskon Rombongan s.d 15%</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/60 text-slate-900 space-y-5">
                <div className="flex items-center justify-between border-b border-sky-100 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase font-extrabold tracking-wider text-sky-600">
                      Cek & Hitung Tiket Instan
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Estimasi Tiket Kunjungan
                    </h3>
                  </div>
                  <Badge variant="default" className="bg-sky-100 text-sky-800 font-extrabold">
                    Resmi 2026
                  </Badge>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    Pilih Hari Kunjungan:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setHeroDayType("weekday")}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        heroDayType === "weekday"
                          ? "border-sky-500 bg-sky-50/80 shadow-xs ring-1 ring-sky-500 font-bold"
                          : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-xs block text-slate-500 font-normal">Senin - Jumat</span>
                      <strong className="text-sm text-sky-700">Weekday Rp 25.000</strong>
                    </button>

                    <button
                      type="button"
                      onClick={() => setHeroDayType("weekend")}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        heroDayType === "weekend"
                          ? "border-amber-500 bg-amber-50/80 shadow-xs ring-1 ring-amber-500 font-bold"
                          : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                      }`}
                    >
                      <span className="text-xs block text-slate-500 font-normal">Sabtu, Minggu, Libur</span>
                      <strong className="text-sm text-amber-700">Weekend Rp 35.000</strong>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700">
                      Jumlah Pengunjung:
                    </label>
                    <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                      {heroPax} Orang
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setHeroPax(Math.max(1, heroPax - 1))}
                      className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-black text-slate-700 flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={heroPax}
                      onChange={(e) => setHeroPax(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 h-10 rounded-xl border border-slate-200 text-center font-extrabold text-slate-900 bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setHeroPax(heroPax + 1)}
                      className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-black text-slate-700 flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-1.5 pt-1">
                    {[2, 4, 10, 20, 50].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setHeroPax(preset)}
                        className={`flex-1 py-1 rounded-lg text-[11px] font-bold border transition-colors ${
                          heroPax === preset
                            ? "bg-sky-600 text-white border-sky-600"
                            : "bg-slate-50 hover:bg-sky-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        {preset} org
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Estimasi Biaya Masuk:</span>
                    <span>{heroPax} pax × {formatRupiah(heroTicketPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Total Tiket:</span>
                    <strong className="text-xl font-black text-sky-700">
                      {formatRupiah(heroTotal)}
                    </strong>
                  </div>
                  {heroPax >= 20 && (
                    <p className="text-[11px] text-emerald-600 font-bold pt-1">
                      🎉 Berhak atas Diskon Rombongan! Cek di Kalkulator Rombongan.
                    </p>
                  )}
                </div>

                <div className="space-y-2 pt-1">
                  {heroPax >= 20 ? (
                    <Link href="/reservasi" className="block w-full">
                      <Button
                        variant="accent"
                        className="w-full h-12 rounded-2xl font-extrabold gap-2 text-sm shadow-md shadow-orange-500/25"
                      >
                        <Users className="h-4 w-4" />
                        Buka Kalkulator Rombongan (Ada Diskon)
                      </Button>
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/6281228829900?text=${encodeURIComponent(
                        `Halo Admin Owabong, saya ingin reservasi/tanya tiket untuk ${heroPax} orang pada hari ${heroDayType === "weekday" ? "Weekday" : "Weekend"} (Estimasi total: ${formatRupiah(heroTotal)}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="accent"
                        className="w-full h-12 rounded-2xl font-extrabold gap-2 text-sm shadow-md shadow-orange-500/25"
                      >
                        <PhoneCall className="h-4 w-4" />
                        Pesan Langsung via WhatsApp
                      </Button>
                    </a>
                  )}
                  <p className="text-[10px] text-slate-500 text-center">
                    * Anak dengan tinggi &lt; 80 cm gratis. Tiket sudah termasuk asuransi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUICK STATS & METRICS BAR */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl shadow-sky-950/5 border border-sky-100 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sky-100">
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
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
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
      {/* 3. EXPERIENCE ZONES CATEGORIES */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Kawasan Terpadu 15 Hektar
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Eksplorasi 4 Zona Wisata Terlengkap
            </h2>
            <p className="text-base text-slate-600">
              Dari cipratan air adrenalin menantang, terapi kebugaran mata air alami,
              hingga sirkuit balap gokart, temukan zona kegembiraan Anda sekeluarga.
            </p>
          </div>

          <Link href="/peta">
            <Button variant="outline" className="gap-2 font-bold whitespace-nowrap rounded-2xl h-11 border-sky-300 text-sky-700 hover:bg-sky-50">
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
                <Card className="h-full overflow-hidden border border-sky-100 rounded-3xl bg-white hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col">
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
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-sky-900 shadow-xs">
                        {zone.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs text-cyan-300 font-bold block">
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
                      Lihat Semua Wahana <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED RIDES WITH INTERACTIVE FILTER */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Atraksi Unggulan
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Wahana Paling Diminati Pengunjung
            </h2>
            <p className="text-base text-slate-600">
              Pilih dan klik wahana di bawah untuk melihat spesifikasi kedalaman, aturan keselamatan, dan jam beroperasi.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "semua", label: "Semua Wahana" },
              { id: "air", label: "Wahana Air & Ombak" },
              { id: "terapi", label: "Relaksasi & Terapi" },
              { id: "darat", label: "Petualangan Darat" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveRideFilter(f.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  activeRideFilter === f.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                    : "bg-white text-slate-600 hover:bg-sky-50 border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRides.map((ride, idx) => (
            <motion.div
              key={ride.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelectedRide(ride)}
            >
              <Card className="overflow-hidden border border-sky-100 rounded-3xl hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col h-full bg-white">
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ride.image}
                    alt={ride.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/95 text-sky-900 shadow-md">
                      {ride.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-cyan-200 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                      {ride.schedule}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {ride.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-2 flex-1 space-y-4">
                  <CardDescription className="text-sm text-slate-600 line-clamp-2">
                    {ride.description}
                  </CardDescription>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Intensitas: <strong className="text-slate-800">{ride.intensity}</strong></span>
                    <span>Kedalaman: <strong className="text-sky-700">{ride.depth}</strong></span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-sky-600 hover:text-sky-700 hover:bg-sky-50 font-bold rounded-xl"
                  >
                    <span>Detail & Aturan Wahana</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. NATURAL SPRING HERITAGE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="default"
                className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-4 py-1.5"
              >
                Keaslian Alam Purbalingga
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Murni dari Lereng Gunung Slamet, Segar Mengalir Tiap Detik
              </h2>
              <p className="text-sky-100 text-base sm:text-lg leading-relaxed">
                Berbeda dari kebanyakan waterpark buatan yang mengandalkan zat kimia kaporit pekat,
                kolam Owabong disuplai langsung oleh mata air alami Tuk Sendang & Cikawalon dengan sistem
                air mengalir terus-menerus (flow-through) tanpa henti.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Tanpa Bau Kaporit & Aman di Mata</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Mata anak tidak perih dan kulit tetap lembap alami saat berenang berjam-jam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="h-11 w-11 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Suhu Sejuk Alami 21°C - 22°C</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Memberikan sensasi segar luar biasa dan merelaksasi otot tubuh setelah lelah beraktivitas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="h-11 w-11 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Debit Melimpah 250 Liter/Detik</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Menjamin sirkulasi air selalu jernih dan higienis sepanjang tahun tanpa pernah surut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-sky-500/30">
                <Image
                  src="https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg"
                  alt="Mata Air Alami Tuk Sendang Owabong"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Sumber Tuk Sendang Bojongsari</span>
                    <Badge variant="secondary" className="font-bold">Mata Air Alami</Badge>
                  </div>
                  <p className="mt-1 text-slate-400">
                    Menyuplai seluruh 80+ wahana air Owabong 24 jam non-stop dengan kesegaran murni pegunungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DAILY LIVE ATTRACTION SCHEDULE */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
            Jadwal Harian
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Jadwal Pertunjukan & Sesi Wahana
          </h2>
          <p className="text-base text-slate-600">
            Jangan lewatkan waktu semburan ombak pantai dan mandi busa salju saat berkunjung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {dailySchedule.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {item.location}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">
                    {item.event}
                  </h3>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full shrink-0">
                  {item.tag}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-bold text-sky-800">
                  <Clock className="h-4 w-4 text-sky-600" />
                  <span>{item.time}</span>
                </div>
                <span className="font-semibold text-slate-500">{item.frequency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROMO 17-AN & TIKET SPOTLIGHT BANNER */}
      {/* ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-extrabold backdrop-blur-xs border border-white/20">
              <Flame className="h-4 w-4 text-amber-300" />
              <span>Semarak Promo Kemerdekaan RI Ke-81</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Gebyar Promo Merdeka: Diskon s.d 31 Agustus!
            </h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              Dapatkan tiket masuk terusan weekday hanya <strong>Rp 25.000</strong> / orang,
              potongan khusus berpakaian Merah Putih, serta paket hemat rombongan sekolah.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold pt-1">
              <span className="bg-white/20 px-3 py-1.5 rounded-xl">Weekday: Rp 25.000</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-xl">Weekend: Rp 35.000</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-xl">Anak &lt; 80cm: GRATIS</span>
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
      {/* 8. VISITOR REVIEWS */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
            Ulasan Pengunjung
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Ribuan Pengunjung Owabong?
          </h2>
          <p className="text-base text-slate-600">
            Dengarkan pengalaman langsung dari keluarga, rombongan sekolah, dan perusahaan yang telah menikmati kesegaran Owabong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visitorReviews.map((rev, idx) => (
            <Card
              key={idx}
              className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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
                  &ldquo;{rev.comment}&rdquo;
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
      {/* 9. FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Badge variant="default" className="text-sky-800 bg-sky-100 font-bold px-3.5 py-1 text-xs">
              Pusat Bantuan & FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Semua hal yang perlu Anda ketahui sebelum berkunjung ke Owabong Waterpark.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#f0f9ff]/70 border border-sky-100 overflow-hidden shadow-xs transition-all duration-200"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-white">
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
      {/* 10. FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Paket Rombongan Sekolah & Perusahaan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Rencanakan Liburan Rombongan Anda Sekarang!
            </h2>
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed">
              Dapatkan diskon rombongan s.d 15%, pendopo berkumpul gratis, instruktur outbound,
              dan kemudahan proses booking resmi melalui WhatsApp CS kami.
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
                Hitung di Kalkulator Rombongan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL DIALOG: WAHANA DETAIL */}
      {/* ========================================================================= */}
      <Dialog
        open={!!selectedRide}
        onOpenChange={(open) => {
          if (!open) setSelectedRide(null);
        }}
      >
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-6 rounded-3xl bg-white border border-sky-100 shadow-2xl">
          {selectedRide && (
            <div className="space-y-5">
              <div className="relative h-56 -mx-6 -mt-6 overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedRide.image}
                  alt={selectedRide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <Badge variant="accent" className="font-bold mb-2">
                    {selectedRide.category}
                  </Badge>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedRide.title}
                  </h3>
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="sr-only">{selectedRide.title}</DialogTitle>
                <DialogDescription className="text-sm text-slate-600 leading-relaxed pt-2">
                  {selectedRide.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-1 text-sm text-slate-700">
                <div className="bg-sky-50/70 p-4 rounded-2xl space-y-2 border border-sky-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-sky-800">
                    Keunggulan & Fasilitas Wahana
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedRide.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <span className="text-slate-500 block">Tingkat Keseruan</span>
                    <strong className="text-slate-900 font-bold text-sm">
                      {selectedRide.intensity}
                    </strong>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <span className="text-slate-500 block">Jadwal Operasional</span>
                    <strong className="text-sky-700 font-bold text-sm">
                      {selectedRide.schedule}
                    </strong>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                  <Shield className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Seluruh pengunjung wajib menaati arahan petugas lifeguard di area wahana ini.</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedRide(null)}
                  className="rounded-xl font-bold"
                >
                  Tutup
                </Button>
                <Link href="/reservasi">
                  <Button size="sm" variant="accent" className="font-bold rounded-xl">
                    Pesan Tiket Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
