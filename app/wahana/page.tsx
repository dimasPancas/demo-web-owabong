"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  CheckCircle2,
  Shield,
  Compass,
  ArrowRight,
  Ticket,
  Droplets,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Attraction {
  id: string;
  name: string;
  category: "air" | "darat" | "fasilitas";
  categoryLabel: string;
  image: string;
  description: string;
  highlights: string[];
  depthOrLength?: string;
  intensity: "Santai" | "Sedang" | "Tinggi (Adrenalin)";
  suitableAge: string;
  operatingHours: string;
  rules: string;
}

const attractionsData: Attraction[] = [
  // WAHANA AIR
  {
    id: "waterboom-ombak",
    name: "Kolam Ombak Sagara & Waterboom Spiral",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Sensasi berenang dengan gulungan ombak buatan berirama seperti di pantai sungguhan, dipadu seluncuran spiral bertingkat setinggi 15 meter.",
    highlights: [
      "Ombak buatan otomatis setiap 30 menit",
      "2 spiral slide & 1 torpedo slide",
      "Lifeguard bersertifikat PRSI siaga di pos pantau",
    ],
    depthOrLength: "Kedalaman 0.5m - 1.8m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Semua Usia (Anak didampingi orang tua)",
    operatingHours: "08.00 - 16.30 WIB",
    rules: "Wajib mengenakan pakaian renang, pelampung tersedia untuk anak-anak.",
  },
  {
    id: "lazy-river",
    name: "Kolam Arus (Lazy River 300m)",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Menyusuri kanal arus air jernih alami menggunakan ban pelampung sambil menikmati pemandangan rimbun pepohonan tropis di sekeliling taman.",
    highlights: [
      "Panjang lintasan arus 300 meter",
      "Air mata air segar alami tanpa kaporit pekat",
      "Pemandangan asri dan kanopi alami yang teduh",
    ],
    depthOrLength: "Panjang 300m, Kedalaman 1.0m",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Disarankan menggunakan single atau double tube ban untuk kenyamanan.",
  },
  {
    id: "kolam-olympic",
    name: "Kolam Olympic Standar PRSI 50m",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Kolam renang standar kejuaraan nasional dengan 8 lintasan. Cocok bagi pengunjung yang ingin berolahraga renang profesional dengan air alami yang sejuk.",
    highlights: [
      "Standar FINA / PRSI 50 meter",
      "8 lintasan resmi dengan tali pembatas",
      "Papan loncat indah dan tribun penonton luas",
    ],
    depthOrLength: "Panjang 50m, Kedalaman 1.4m - 2.2m",
    intensity: "Sedang",
    suitableAge: "Remaja & Dewasa",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Khusus untuk perenang terampil dan latihan atlet.",
  },
  {
    id: "kolam-busa",
    name: "Kolam Pesta Busa Salju Meriam",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Keseruan mandi busa lembut yang aman bagi mata dan kulit, disemprotkan dari meriam busa raksasa disertai alunan musik ceria.",
    highlights: [
      "Busa ramah anak bersertifikat dermatologis",
      "Sesi pesta busa 4x sehari (09.30, 11.30, 13.30, 15.30)",
      "Spot favorit untuk dokumentasi foto keluarga",
    ],
    depthOrLength: "Kedalaman 0.6m",
    intensity: "Santai",
    suitableAge: "Anak-anak & Keluarga",
    operatingHours: "09.30, 11.30, 13.30, 15.30 WIB",
    rules: "Gunakan kacamata renang jika sensitif terhadap sabun busa.",
  },
  {
    id: "terapi-ikan",
    name: "Kolam Terapi Ikan Alami Garra Rufa",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Rileksasi kaki dengan ribuan ikan Garra Rufa alami yang membantu membersihkan sel kulit mati dan melancarkan sirkulasi darah.",
    highlights: [
      "Ikan Garra Rufa sehat dan terawat higienis",
      "Tempat duduk gazebo melingkar yang asri",
      "Manfaat refleksi alami & peredaran darah",
    ],
    depthOrLength: "Kedalaman 0.4m",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Cuci kaki terlebih dahulu sebelum masuk ke area kolam terapi.",
  },
  {
    id: "kolam-air-hangat",
    name: "Kolam Air Hangat Tirto Asri",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
    description:
      "Kolam rendam air hangat dengan suhu nyaman 38°C yang sangat menenangkan untuk melepas penat dan pegal setelah seharian berenang.",
    highlights: [
      "Suhu air stabil 37°C - 39°C",
      "Pancuran air pijat hydrotherapy",
      "Bermanfaat untuk relaksasi persendian",
    ],
    depthOrLength: "Kedalaman 0.8m",
    intensity: "Santai",
    suitableAge: "Semua Usia (Cocok untuk lansia & dewasa)",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Batas durasi berendam yang disarankan maksimal 20 menit per sesi.",
  },

  // WAHANA DARAT
  {
    id: "gokart-circuit",
    name: "Sirkuit Balap Gokart Aspal 450m",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Sirkuit balap aspal berkelok dengan armada gokart 200cc, dilengkapi sistem racing timer digital dan perlengkapan keamanan helm standar SNI.",
    highlights: [
      "Track aspal 450 meter dengan 8 tikungan",
      "Tersedia pilihan single gokart dan double tandem",
      "Instruktur & marshal siaga di pinggir sirkuit",
    ],
    depthOrLength: "Panjang Track 450m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Usia 12+ (Tinggi min. 140cm)",
    operatingHours: "08.30 - 16.30 WIB",
    rules: "Wajib mengenakan helm dan sabuk pengaman, dilarang menabrakkan gokart.",
  },
  {
    id: "flying-fox",
    name: "Flying Fox Danau Melayang 180m",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    description:
      "Meluncur kencang melintasi atas danau air jernih dengan ketinggian menara 12 meter menggunakan double harness safety equipment.",
    highlights: [
      "Lintasan sepanjang 180 meter di atas air",
      "Peralatan bersertifikasi internasional UIAA",
      "Pemandangan spektakuler kawasan waterpark",
    ],
    depthOrLength: "Bentang Kabel 180m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Anak (didampingi) & Dewasa",
    operatingHours: "08.30 - 16.00 WIB",
    rules: "Berat badan minimal 25kg, maksimal 100kg. Tidak disarankan bagi penderita jantung.",
  },
  {
    id: "arena-atv",
    name: "Jungle ATV Offroad Track",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Menjelajahi jalur tanah berkontur dengan genangan air dan tanjakan menantang menggunakan motor ATV bertenaga 150cc.",
    highlights: [
      "Jalur semi-offroad bervariasi",
      "Armada ATV 150cc transmisi otomatis",
      "Pemandu jalur berpengalaman",
    ],
    depthOrLength: "Lintasan 600m",
    intensity: "Sedang",
    suitableAge: "Usia 10+ (Anak dapat tandem bersama orang tua)",
    operatingHours: "08.30 - 16.30 WIB",
    rules: "Wajib menggunakan helm pengaman dan mengikuti arahan instruktur.",
  },
  {
    id: "outbound-field",
    name: "Arena Outbound & High Ropes Course",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    description:
      "Fasilitas lengkap untuk program team building perusahaan, latihan kepemimpinan sekolah, jembatan tali gantung, dan arena fun games.",
    highlights: [
      "Lapangan rumput luas untuk 500 peserta",
      "10 rintangan tali gantung pohon",
      "Paket lengkap termasuk instruktur",
    ],
    depthOrLength: "Area 1.5 Hektar",
    intensity: "Sedang",
    suitableAge: "Semua Usia (Sekolah & Instansi)",
    operatingHours: "07.30 - 16.30 WIB",
    rules: "Pemesanan disarankan minimal H-3 melalui reservasi rombongan.",
  },

  // FASILITAS UMUM
  {
    id: "foodcourt-mendoan",
    name: "Pusat Kuliner Mendoan & Food Court",
    category: "fasilitas",
    categoryLabel: "Fasilitas Umum",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Food court berkapasitas 600 tempat duduk dengan sajian mendoan hangat khas Banyumas, soto kriyik, es kelapa muda, dan aneka kuliner nusantara.",
    highlights: [
      "Mendoan hangat langsung dari wajan",
      "Area duduk luas berkanopi teduh",
      "Harga terjangkau dan pembayaran QRIS",
    ],
    depthOrLength: "Kapasitas 600 Kursi",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Harap menjaga kebersihan dan membuang sampah pada tempatnya.",
  },
  {
    id: "gazebo-vip",
    name: "Gazebo VIP & Pendopo Rombongan",
    category: "fasilitas",
    categoryLabel: "Fasilitas Umum",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Puluhan pondok gazebo kayu asri di tepi kolam ombak dan lazy river yang dapat disewa untuk tempat istirahat keluarga maupun titik kumpul rombongan.",
    highlights: [
      "Lebih dari 50 unit gazebo beratap sirap",
      "Dilengkapi colokan charger listrik",
      "Pendopo besar untuk rombongan 100+ pax",
    ],
    depthOrLength: "50+ Unit Tersedia",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Dapat disewa langsung di pos informasi atau dibooking via reservasi.",
  },
];

export default function WahanaPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("semua");
  const [selectedAttraction, setSelectedAttraction] =
    React.useState<Attraction | null>(null);

  const filteredAttractions = React.useMemo(() => {
    return attractionsData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.intensity.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeTab === "semua" ? true : item.category === activeTab;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <Badge
            variant="default"
            className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-4 py-1.5"
          >
            <Droplets className="h-3.5 w-3.5 mr-1 text-cyan-300 inline" />
            100% Mata Air Alami Gn. Slamet
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Katalog 80+ Wahana & Atraksi Owabong
          </h1>
          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Temukan atraksi air alami segar, petualangan darat memacu adrenalin,
            serta fasilitas pendukung lengkap untuk kenyamanan liburan Anda sekeluarga.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Tabs Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full lg:w-auto"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto h-auto p-1.5 bg-white border border-sky-100 rounded-2xl gap-1 shadow-sm">
              <TabsTrigger
                value="semua"
                className="rounded-xl py-2.5 text-xs sm:text-sm font-bold data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Semua ({attractionsData.length})
              </TabsTrigger>
              <TabsTrigger
                value="air"
                className="rounded-xl py-2.5 text-xs sm:text-sm font-bold data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Wahana Air ({attractionsData.filter((i) => i.category === "air").length})
              </TabsTrigger>
              <TabsTrigger
                value="darat"
                className="rounded-xl py-2.5 text-xs sm:text-sm font-bold data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Wahana Darat ({attractionsData.filter((i) => i.category === "darat").length})
              </TabsTrigger>
              <TabsTrigger
                value="fasilitas"
                className="rounded-xl py-2.5 text-xs sm:text-sm font-bold data-[state=active]:bg-sky-600 data-[state=active]:text-white"
              >
                Fasilitas ({attractionsData.filter((i) => i.category === "fasilitas").length})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Live Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <Input
              type="text"
              placeholder="Cari nama atau jenis wahana..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-2xl border-sky-200 bg-white shadow-xs focus-visible:ring-sky-500 h-11 text-sm font-medium"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sky-200">
          <p className="text-sm text-slate-600 font-medium">
            Menampilkan <strong className="text-slate-900">{filteredAttractions.length}</strong> atraksi wisata
          </p>
          <div className="flex items-center gap-2 text-xs text-sky-700 font-medium">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Klik kartu untuk spesifikasi detail & aturan keselamatan</span>
          </div>
        </div>

        {/* Attractions Grid */}
        {filteredAttractions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-sky-100 p-8 space-y-4 shadow-sm">
            <Compass className="h-12 w-12 text-sky-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">Wahana Tidak Ditemukan</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Tidak ada atraksi yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;. Coba kata kunci lain atau pilih kategori Semua.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("semua");
              }}
              className="rounded-xl font-bold border-sky-300 text-sky-700"
            >
              Reset Pencarian
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAttractions.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedAttraction(item)}
                >
                  <Card className="h-full flex flex-col overflow-hidden border border-sky-100 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge
                          variant={
                            item.category === "air"
                              ? "default"
                              : item.category === "darat"
                              ? "secondary"
                              : "outline"
                          }
                          className="font-bold shadow-md bg-white/95 backdrop-blur-xs text-sky-900 border-0"
                        >
                          {item.categoryLabel}
                        </Badge>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-xs text-cyan-200 font-bold bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          {item.depthOrLength}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-2 flex-1 space-y-4">
                      <CardDescription className="text-sm text-slate-600 line-clamp-2">
                        {item.description}
                      </CardDescription>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                        {item.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between">
                      <div className="text-xs text-slate-500 font-medium">
                        Intensitas: <span className="font-bold text-slate-800">{item.intensity}</span>
                      </div>
                      <span className="text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Detail <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>Paket Terusan Rombongan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ingin Akses Semua Wahana Bersama Rombongan?</h3>
            <p className="text-sm text-sky-100">
              Dapatkan tiket terusan hemat dengan potongan diskon s.d 15% untuk sekolah, instansi, dan keluarga besar.
            </p>
          </div>
          <Link href="/reservasi">
            <Button variant="accent" size="lg" className="font-extrabold rounded-2xl gap-2 whitespace-nowrap shadow-xl shadow-orange-500/30">
              <Ticket className="h-4 w-4" />
              Hitung di Kalkulator Rombongan
            </Button>
          </Link>
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <Dialog
        open={!!selectedAttraction}
        onOpenChange={(open) => {
          if (!open) setSelectedAttraction(null);
        }}
      >
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-6 rounded-3xl bg-white border border-sky-100 shadow-2xl">
          {selectedAttraction && (
            <div className="space-y-5">
              <div className="relative h-56 -mx-6 -mt-6 overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedAttraction.image}
                  alt={selectedAttraction.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <Badge variant="accent" className="font-bold mb-2">
                    {selectedAttraction.categoryLabel}
                  </Badge>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedAttraction.name}
                  </h3>
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="sr-only">{selectedAttraction.name}</DialogTitle>
                <DialogDescription className="text-sm text-slate-600 leading-relaxed pt-2">
                  {selectedAttraction.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-1 text-sm text-slate-700">
                <div className="bg-sky-50/70 p-4 rounded-2xl space-y-2 border border-sky-100">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-sky-800">
                    Fasilitas & Keunggulan Wahana
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedAttraction.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
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
                      {selectedAttraction.intensity}
                    </strong>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <span className="text-slate-500 block">Jam Operasional</span>
                    <strong className="text-sky-700 font-bold text-sm">
                      {selectedAttraction.operatingHours}
                    </strong>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                  <Shield className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Tata Tertib & Keselamatan:</strong>
                    <span>{selectedAttraction.rules}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedAttraction(null)}
                  className="rounded-xl font-bold"
                >
                  Tutup
                </Button>
                <Link href="/reservasi">
                  <Button size="sm" variant="accent" className="font-bold rounded-xl">
                    Pesan Tiket Terusan
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
