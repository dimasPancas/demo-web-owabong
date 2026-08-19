"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Sparkles,
  Search,
  CheckCircle2,
  Shield,
  Clock,
  Compass,
  ArrowRight,
  Info,
  Ticket,
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
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
    name: "Waterboom & Kolam Ombak",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Sensasi berenang dengan gulungan ombak buatan berirama seperti di pantai sungguhan, dipadu seluncuran spiral bertingkat setinggi 15 meter.",
    highlights: [
      "Ombak buatan otomatis setiap 30 menit",
      "2 spiral slide & 1 torpedo slide",
      "Lifeguard bersertifikat siaga di pos pantau",
    ],
    depthOrLength: "Kedalaman 0.5m - 1.8m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Semua Usia (Anak didampingi orang tua)",
    operatingHours: "08.00 - 16.30 WIB",
    rules: "Wajib mengenakan pakaian renang, pelampung tersedia gratis untuk anak-anak.",
  },
  {
    id: "lazy-river",
    name: "Kolam Arus / Lazy River",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Menyusuri kanal arus air jernih alami menggunakan ban pelampung sambil menikmati pemandangan rimbun pepohonan tropis di sekeliling taman.",
    highlights: [
      "Panjang lintasan arus 300 meter",
      "Air mata air segar alami tanpa kaporit pekat",
      "Pemandangan asri dan kanopi alami",
    ],
    depthOrLength: "Panjang 300m, Kedalaman 1m",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Disarankan menggunakan single atau double tube ban untuk kenyamanan.",
  },
  {
    id: "kolam-olympic",
    name: "Kolam Olympic Terbuka",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Kolam renang standar kejuaraan nasional dengan 8 lintasan. Cocok bagi pengunjung yang ingin berolahraga renang profesional dengan air alami yang sejuk.",
    highlights: [
      "Standar FINA / PRSI 50 meter",
      "8 lintasan resmi dengan tali pembatas",
      "Papan loncat indah dan tribun penonton",
    ],
    depthOrLength: "Panjang 50m, Kedalaman 1.4m - 2.2m",
    intensity: "Sedang",
    suitableAge: "Remaja & Dewasa",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Khusus untuk perenang terampil dan latihan atlet.",
  },
  {
    id: "kolam-busa",
    name: "Kolam Pesta Busa Salju",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Keseruan mandi busa lembut yang aman bagi mata dan kulit, disemprotkan dari meriam busa raksasa disertai musik ceria.",
    highlights: [
      "Busa ramah anak bersertifikat dermatologis",
      "Sesi pesta busa 4x sehari",
      "Cocok untuk dokumentasi foto keluarga",
    ],
    depthOrLength: "Kedalaman 0.6m",
    intensity: "Santai",
    suitableAge: "Anak-anak & Keluarga",
    operatingHours: "09.00, 11.00, 13.30, 15.30 WIB",
    rules: "Gunakan kacamata renang jika sensitif terhadap sabun.",
  },
  {
    id: "terapi-ikan",
    name: "Kolam Terapi Ikan Alami",
    category: "air",
    categoryLabel: "Wahana Air",
    image: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg",
    description:
      "Rileksasi kaki dengan ribuan ikan Garra Rufa alami yang membantu membersihkan sel kulit mati dan melancarkan sirkulasi darah.",
    highlights: [
      "Ikan Garra Rufa sehat dan terawat",
      "Tempat duduk gazebo melingkar yang teduh",
      "Manfaat refleksi alami & peredaran darah",
    ],
    depthOrLength: "Kedalaman 0.4m",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Cuci kaki sebelum masuk ke area kolam terapi.",
  },

  // WAHANA DARAT
  {
    id: "sirkuit-gokart",
    name: "Sirkuit Gokart",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Sensasi balapan berkecepatan tinggi di lintasan aspal berlika-liku dengan armada gokart 200cc lengkap dengan helm dan pengaman racing.",
    highlights: [
      "Lintasan aspal 450 meter dengan 8 tikungan tajam",
      "Gokart single dan double seat untuk berdua",
      "Sistem pencatatan waktu putaran digital",
    ],
    depthOrLength: "Panjang Track 450m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Usia 12 Tahun ke Atas (Tinggi min. 140cm)",
    operatingHours: "08.30 - 16.30 WIB",
    rules: "Wajib memakai sepatu tertutup dan helm yang disediakan.",
  },
  {
    id: "flying-fox",
    name: "Flying Fox & Outbound",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    description:
      "Meluncur dari ketinggian melintasi danau air alami dengan kabel baja berstandar internasional, dilengkapi rintangan jembatan gantung dan spider web.",
    highlights: [
      "Panjang lintasan luncur 180 meter di atas air",
      "Harness dan carabiner petzl berstandar UIAA",
      "Instruktur outbound profesional bersertifikat",
    ],
    depthOrLength: "Panjang 180m, Ketinggian 12m",
    intensity: "Tinggi (Adrenalin)",
    suitableAge: "Anak (didampingi) & Dewasa",
    operatingHours: "08.00 - 16.30 WIB",
    rules: "Maksimal berat badan 100 kg, tidak memiliki riwayat sakit jantung.",
  },
  {
    id: "atv-adventure",
    name: "ATV Offroad Track",
    category: "darat",
    categoryLabel: "Wahana Darat",
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Tantang adrenalin Anda mengendarai motor ATV 4-roda di rute berbatu, lumpur, dan tanjakan seru di area hutan mini Owabong.",
    highlights: [
      "Rute offroad alami 500 meter",
      "Kendaraan ATV 150cc transmisi otomatis",
      "Tersedia pemandu jalur untuk keselamatan",
    ],
    depthOrLength: "Rute 500m",
    intensity: "Sedang",
    suitableAge: "Remaja & Dewasa",
    operatingHours: "08.30 - 16.30 WIB",
    rules: "Gunakan pelindung lutut, siku, dan helm selama berkendara.",
  },

  // FASILITAS UMUM
  {
    id: "foodcourt-resto",
    name: "Food Court & Resto Tradisional",
    category: "fasilitas",
    categoryLabel: "Fasilitas Umum",
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Pusat kuliner lengkap menyajikan aneka sajian khas Banyumasan seperti Mendoan hangat, Soto Kriyik Purbalingga, Es Degan, hingga menu modern ramah kantong.",
    highlights: [
      "Kapasitas 600+ kursi dengan suasana semi outdoor",
      "Harga terstandarisasi dan higienis",
      "Metode pembayaran QRIS, Tunai, & Debit",
    ],
    depthOrLength: "Area 1.200 m²",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.30 WIB",
    rules: "Dilarang membuang sampah sembarangan.",
  },
  {
    id: "gazebo-vip",
    name: "Gazebo Keluarga & Pendopo VIP",
    category: "fasilitas",
    categoryLabel: "Fasilitas Umum",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    description:
      "Pondok istirahat keluarga berbahan kayu alami di tepi kolam ombak untuk bersantai, meletakkan barang bawaan, dan makan bersama.",
    highlights: [
      "50+ unit gazebo tersebar di seluruh area",
      "Dilengkapi stopkontak pengisi daya ponsel",
      "Dapat dipesan khusus untuk rombongan",
    ],
    depthOrLength: "Ukuran 3x3m & 6x6m",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.00 WIB",
    rules: "Jaga kebersihan area gazebo setelah digunakan.",
  },
  {
    id: "locker-ruang-ganti",
    name: "Locker Room & Bilas Modern",
    category: "fasilitas",
    categoryLabel: "Fasilitas Umum",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Fasilitas ruang ganti terpisah untuk pria dan wanita dengan 80+ bilik shower bersih, toilet higienis, dan ratusan loker penitipan barang aman.",
    highlights: [
      "Sistem kunci loker bergelang digital",
      "Air bilas jernih & shower bertekanan baik",
      "Petugas kebersihan siaga setiap saat",
    ],
    depthOrLength: "200+ Unit Loker",
    intensity: "Santai",
    suitableAge: "Semua Usia",
    operatingHours: "07.00 - 17.30 WIB",
    rules: "Kunci loker wajib dikembalikan ke petugas setelah selesai.",
  },
];

export default function WahanaPage() {
  const [activeTab, setActiveTab] = React.useState("semua");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedAttraction, setSelectedAttraction] =
    React.useState<Attraction | null>(null);

  const filteredAttractions = React.useMemo(() => {
    return attractionsData.filter((item) => {
      const matchTab = activeTab === "semua" || item.category === activeTab;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <Badge
            variant="default"
            className="bg-sky-500/20 text-sky-200 border border-sky-400/30 text-xs font-bold px-4 py-1.5"
          >
            Katalog Resmi Rekreasi
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Eksplorasi Wahana & Fasilitas Owabong
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto">
            Temukan lebih dari 80 atraksi air alami, petualangan darat memacu adrenalin,
            serta fasilitas pendukung lengkap untuk kenyamanan liburan Anda.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Tabs Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          {/* shadcn Tabs for Categories */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full lg:w-auto"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto h-auto p-1.5 bg-slate-200/70 rounded-2xl gap-1">
              <TabsTrigger value="semua" className="rounded-xl py-2.5 text-xs sm:text-sm">
                Semua ({attractionsData.length})
              </TabsTrigger>
              <TabsTrigger value="air" className="rounded-xl py-2.5 text-xs sm:text-sm">
                Wahana Air ({attractionsData.filter((i) => i.category === "air").length})
              </TabsTrigger>
              <TabsTrigger value="darat" className="rounded-xl py-2.5 text-xs sm:text-sm">
                Wahana Darat ({attractionsData.filter((i) => i.category === "darat").length})
              </TabsTrigger>
              <TabsTrigger value="fasilitas" className="rounded-xl py-2.5 text-xs sm:text-sm">
                Fasilitas Umum ({attractionsData.filter((i) => i.category === "fasilitas").length})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Live Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <Input
              type="text"
              placeholder="Cari nama wahana..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-2xl border-slate-200 bg-white shadow-xs focus-visible:ring-sky-500"
            />
          </div>
        </div>

        {/* Results Counter & Active Category Info */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <p className="text-sm text-slate-600 font-medium">
            Menampilkan <strong className="text-slate-900">{filteredAttractions.length}</strong> atraksi
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Klik kartu untuk melihat detail & tata tertib</span>
          </div>
        </div>

        {/* Attractions Grid */}
        {filteredAttractions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <Compass className="h-12 w-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">Wahana Tidak Ditemukan</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Tidak ada atraksi yang cocok dengan pencarian "{searchQuery}". Coba kata kunci lain atau pilih kategori lain.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("semua");
              }}
            >
              Reset Filter
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
                  <Card className="h-full flex flex-col overflow-hidden border border-slate-200/90 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group">
                    {/* Image Container with Hover Scale */}
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge
                          variant={
                            item.category === "air"
                              ? "default"
                              : item.category === "darat"
                              ? "secondary"
                              : "outline"
                          }
                          className="font-bold shadow-md bg-white/95 backdrop-blur-xs text-slate-900 border-0"
                        >
                          {item.categoryLabel}
                        </Badge>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-xs text-sky-200 font-medium">{item.depthOrLength}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {item.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-2 flex-1 space-y-4">
                      <CardDescription className="text-sm text-slate-600 line-clamp-2">
                        {item.description}
                      </CardDescription>

                      {/* Mini Feature List */}
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
                        Intensitas: <span className="font-bold text-slate-700">{item.intensity}</span>
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
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-bold">Ingin Mengunjungi Semua Wahana Bersama Rombongan?</h3>
            <p className="text-sm text-slate-400">
              Dapatkan tiket terusan hemat dengan harga spesial untuk sekolah, kampus, komunitas, dan instansi Anda.
            </p>
          </div>
          <Link href="/reservasi">
            <Button variant="accent" size="lg" className="font-bold rounded-2xl gap-2 whitespace-nowrap">
              <Ticket className="h-4 w-4" />
              Hitung Paket Rombongan
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
        {selectedAttraction && (
          <div className="space-y-4">
            <div className="relative h-56 -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
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

            <div className="space-y-3 py-2 text-sm text-slate-700">
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Fasilitas & Keunggulan
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
                <div className="bg-sky-50/60 p-3 rounded-xl border border-sky-100">
                  <span className="text-slate-500 block">Tingkat Keseruan</span>
                  <strong className="text-sky-900 font-bold text-sm">
                    {selectedAttraction.intensity}
                  </strong>
                </div>
                <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                  <span className="text-slate-500 block">Jam Buka Wahana</span>
                  <strong className="text-emerald-900 font-bold text-sm">
                    {selectedAttraction.operatingHours}
                  </strong>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
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
              >
                Tutup
              </Button>
              <Link href="/reservasi">
                <Button size="sm" variant="accent" className="font-bold">
                  Pesan Tiket Terusan
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
