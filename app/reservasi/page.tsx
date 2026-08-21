"use client";

import * as React from "react";
import {
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface PackageOption {
  id: string;
  name: string;
  pricePerPerson: number;
  description: string;
  includes: string[];
}

const packageOptions: PackageOption[] = [
  {
    id: "pelajar",
    name: "Paket Pelajar (TK, SD, SMP, SMA)",
    pricePerPerson: 25000,
    description: "Khusus kunjungan edukasi sekolah dan renang massal pelajar.",
    includes: [
      "Tiket Masuk Semua Kolam Alami",
      "Pemandu Edukasi Mata Air Tuk Sendang",
      "Bebas Akses Kolam Ombak & Busa Salju",
      "Sertifikat Kunjungan Resmi Sekolah",
    ],
  },
  {
    id: "corporate",
    name: "Paket Corporate & Gathering Perusahaan",
    pricePerPerson: 45000,
    description: "Solusi lengkap gathering instansi, outbound, dan team building.",
    includes: [
      "Tiket Terusan Seluruh Wahana Air",
      "Area Pendopo Khusus / Lapangan Outbound",
      "Fasilitas Sound System Standard",
      "Diskon Khusus Wahana Gokart & ATV",
    ],
  },
  {
    id: "keluarga",
    name: "Paket Komunitas & Keluarga Besar",
    pricePerPerson: 35000,
    description: "Paket santai untuk rombongan arisan, reuni, atau keluarga besar.",
    includes: [
      "Tiket Masuk Terusan Kolam Air",
      "Free 1 Gazebo Bersama",
      "Bebas Wahana Kolam Terapi Ikan",
      "Area Parkir Khusus Bus / Mobil Rombongan",
    ],
  },
];

interface AddOn {
  id: string;
  name: string;
  price: number;
  type: "perPerson" | "flat";
  description: string;
}

const availableAddons: AddOn[] = [
  {
    id: "lunch-box",
    name: "Paket Makan Siang Bento & Mendoan Hangat",
    price: 25000,
    type: "perPerson",
    description: "Nasi box ayam goreng rempah + mendoan khas Banyumas + sambal kecap + buah + air mineral.",
  },
  {
    id: "outbound-instructor",
    name: "Instruktur Outbound & Fun Team Building",
    price: 250000,
    type: "flat",
    description: "Pemandu fun games profesional bersertifikat untuk memeriahkan acara rombongan.",
  },
  {
    id: "vip-gazebo",
    name: "Sewa Gazebo VIP Eksklusif Tepi Kolam",
    price: 150000,
    type: "flat",
    description: "Gazebo luas tepat di tepi kolam ombak dengan stopkontak charger handphone.",
  },
  {
    id: "towel-locker",
    name: "Paket Handuk Bersih & Loker Barang",
    price: 10000,
    type: "perPerson",
    description: "Fasilitas handuk steril wangi dan loker penyimpanan digital aman per orang.",
  },
];

export default function ReservasiPage() {
  // Form State
  const [coordinatorName, setCoordinatorName] = React.useState("");
  const [whatsappNumber, setWhatsappNumber] = React.useState("");
  const [institutionName, setInstitutionName] = React.useState("");
  const [visitDate, setVisitDate] = React.useState("");
  const [peopleCount, setPeopleCount] = React.useState<number>(30);
  const [selectedPackageId, setSelectedPackageId] = React.useState<string>("pelajar");
  const [selectedAddons, setSelectedAddons] = React.useState<string[]>([]);
  const [notes, setNotes] = React.useState("");

  // Get selected package data
  const activePackage =
    packageOptions.find((p) => p.id === selectedPackageId) || packageOptions[0];

  // Toggle addon
  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculations
  const count = Math.max(1, peopleCount || 1);
  const basePackageTotal = activePackage.pricePerPerson * count;

  let addonsTotal = 0;
  selectedAddons.forEach((id) => {
    const addon = availableAddons.find((a) => a.id === id);
    if (addon) {
      if (addon.type === "perPerson") {
        addonsTotal += addon.price * count;
      } else {
        addonsTotal += addon.price;
      }
    }
  });

  // Dynamic Discount Rate based on participants count
  let discountPercentage = 0;
  if (count >= 100) {
    discountPercentage = 0.15; // 15% discount for 100+ pax
  } else if (count >= 50) {
    discountPercentage = 0.1; // 10% discount for 50-99 pax
  } else if (count >= 20) {
    discountPercentage = 0.05; // 5% discount for 20-49 pax
  }

  const discountAmount = Math.round(basePackageTotal * discountPercentage);
  const grandTotal = basePackageTotal + addonsTotal - discountAmount;

  // Format IDR Currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // WhatsApp Message Generator
  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!coordinatorName || !whatsappNumber) {
      alert("Mohon lengkapi Nama Koordinator dan Nomor WhatsApp terlebih dahulu.");
      return;
    }

    const selectedAddonsText =
      selectedAddons.length > 0
        ? selectedAddons
            .map((id) => {
              const a = availableAddons.find((item) => item.id === id);
              return a ? `• ${a.name}` : "";
            })
            .join("\n")
        : "Tidak ada tambahan";

    const discountText =
      discountPercentage > 0
        ? ` (Diskon ${(discountPercentage * 100).toFixed(0)}% Rombongan)`
        : "";

    const message = `Halo Admin Reservasi *Owabong Waterpark*,
Saya ingin mengajukan reservasi rombongan dengan rincian berikut:

📌 *INFORMASI PEMESAN:*
- Nama Koordinator: *${coordinatorName}*
- Instansi/Sekolah/Komunitas: *${institutionName || "-"}*
- No. WhatsApp: *${whatsappNumber}*
- Rencana Tanggal Kunjungan: *${visitDate || "Belum Ditentukan"}*

🎟️ *PAKET WISATA:*
- Pilihan Paket: *${activePackage.name}*
- Jumlah Peserta: *${count} Orang*
- Harga Paket / Pax: *${formatRupiah(activePackage.pricePerPerson)}*

✨ *ADD-ON & FASILITAS TAMBAHAN:*
${selectedAddonsText}

💰 *ESTIMASI BIAYA:*
- Subtotal Tiket: ${formatRupiah(basePackageTotal)}
- Total Add-on: ${formatRupiah(addonsTotal)}
- Potongan Diskon${discountText}: -${formatRupiah(discountAmount)}
--------------------------------------
*TOTAL ESTIMASI: ${formatRupiah(grandTotal)}*

📝 *Catatan Khusus:*
${notes || "Tidak ada catatan khusus."}

Mohon konfirmasi ketersediaan jadwal dan petunjuk prosedur pembayaran uang muka (DP). Terima kasih!`;

    // WhatsApp API URL (Admin Owabong Purbalingga)
    const waUrl = `https://wa.me/6281228829900?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <Badge
            variant="default"
            className="bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs font-bold px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1 text-amber-300 inline" />
            Kalkulator Reservasi Instan
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Kalkulator Paket Rombongan & WhatsApp Booking
          </h1>
          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Hitung estimasi biaya tiket rombongan secara akurat dengan diskon khusus,
            lalu kirimkan rincian pesanan langsung ke customer service resmi via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSendToWhatsApp}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Contact Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
                  <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Data Koordinator Rombongan
                    </h3>
                    <p className="text-xs text-slate-500">
                      Informasi penanggung jawab untuk konfirmasi tiket dan koordinasi bus
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Nama Lengkap Koordinator <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Contoh: Ibu Rina Setyawati"
                      value={coordinatorName}
                      onChange={(e) => setCoordinatorName(e.target.value)}
                      className="rounded-xl border-sky-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="rounded-xl border-sky-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Nama Sekolah / Instansi / Komunitas
                    </label>
                    <Input
                      type="text"
                      placeholder="Contoh: SMP Negeri 1 Purbalingga"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      className="rounded-xl border-sky-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Rencana Tanggal Kunjungan
                    </label>
                    <Input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="rounded-xl border-sky-200"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Package & Participant Count */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
                  <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Pilihan Paket & Jumlah Peserta
                    </h3>
                    <p className="text-xs text-slate-500">
                      Minimal 20 orang untuk mendapatkan potongan diskon rombongan otomatis
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Jumlah Peserta (Orang) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="number"
                        min="1"
                        required
                        value={peopleCount}
                        onChange={(e) =>
                          setPeopleCount(parseInt(e.target.value) || 0)
                        }
                        className="font-extrabold text-lg rounded-xl border-sky-200 h-12"
                      />
                      <div className="flex gap-1.5">
                        {[20, 50, 100, 200].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setPeopleCount(preset)}
                            className="px-3 py-2 text-xs font-bold rounded-xl bg-sky-50 hover:bg-sky-600 hover:text-white text-sky-700 transition-colors border border-sky-200"
                          >
                            {preset} pax
                          </button>
                        ))}
                      </div>
                    </div>
                    {peopleCount < 20 ? (
                      <p className="text-xs text-amber-600 font-medium">
                        Tips: Tambah hingga 20 orang untuk mendapatkan diskon rombongan otomatis 5%!
                      </p>
                    ) : (
                      <p className="text-xs text-emerald-600 font-bold">
                        🎉 Selamat! Rombongan Anda mendapatkan diskon {(discountPercentage * 100).toFixed(0)}%.
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Pilih Kategori Paket Wisata <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                    >
                      {packageOptions.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — {formatRupiah(pkg.pricePerPerson)} / pax
                        </option>
                      ))}
                    </Select>
                  </div>

                  {/* Active Package Features */}
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-900">
                        Keuntungan {activePackage.name}:
                      </span>
                      <span className="text-xs font-extrabold text-sky-700">
                        {formatRupiah(activePackage.pricePerPerson)} / orang
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {activePackage.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3: Add-on Facilities */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
                  <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Fasilitas Tambahan & Layanan (Opsional)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Pilih fasilitas pendukung kuliner dan kegiatan outbound untuk kenyamanan rombongan
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {availableAddons.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                          isChecked
                            ? "border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-500"
                            : "border-slate-200 bg-white hover:bg-sky-50/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="mt-1 h-4 w-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span className="font-bold text-sm text-slate-900">
                              {addon.name}
                            </span>
                            <span className="font-bold text-xs text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md w-fit">
                              {formatRupiah(addon.price)}{" "}
                              {addon.type === "perPerson" ? "/ orang" : "/ rombongan"}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            {addon.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>

                {/* Step 4: Special Notes */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-700">
                    Catatan Khusus / Permintaan Tertentu (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Rombongan membawa 2 bus pariwisata besar, butuh bantuan area parkir dan sesi foto bersama..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-2.5 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Live Calculator Receipt Card (5 cols) */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              <Card className="rounded-3xl border border-sky-100 bg-white shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-sky-600 to-cyan-600 p-6 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      Rincian Estimasi Biaya
                    </span>
                    <Badge variant="accent" className="font-bold shadow-xs">
                      Live Calculator
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight">
                    {formatRupiah(grandTotal)}
                  </h3>
                  <p className="text-xs text-sky-100">
                    Untuk {count} orang ({activePackage.name})
                  </p>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Calculation Breakdown Table */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>
                        Tiket ({count} org × {formatRupiah(activePackage.pricePerPerson)})
                      </span>
                      <strong className="text-slate-900">
                        {formatRupiah(basePackageTotal)}
                      </strong>
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                        <span className="text-slate-400 font-bold uppercase tracking-wider block">
                          Fasilitas Tambahan:
                        </span>
                        {selectedAddons.map((id) => {
                          const addon = availableAddons.find((a) => a.id === id);
                          if (!addon) return null;
                          const cost =
                            addon.type === "perPerson"
                              ? addon.price * count
                              : addon.price;
                          return (
                            <div
                              key={id}
                              className="flex items-center justify-between text-slate-600"
                            >
                              <span className="truncate pr-2">• {addon.name}</span>
                              <span className="font-semibold text-slate-900 shrink-0">
                                {formatRupiah(cost)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Discount Line */}
                    {discountPercentage > 0 && (
                      <div className="flex items-center justify-between text-emerald-600 pt-2 border-t border-slate-100 font-semibold text-xs sm:text-sm">
                        <span>
                          Diskon Rombongan ({(discountPercentage * 100).toFixed(0)}%)
                        </span>
                        <span>-{formatRupiah(discountAmount)}</span>
                      </div>
                    )}

                    {/* Grand Total Row */}
                    <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Total Estimasi
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Sudah termasuk asuransi & akses wahana
                        </span>
                      </div>
                      <strong className="text-2xl font-black text-sky-700">
                        {formatRupiah(grandTotal)}
                      </strong>
                    </div>
                  </div>

                  {/* WhatsApp Submission Button */}
                  <div className="space-y-3 pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      className="w-full h-14 rounded-2xl font-extrabold text-base gap-3 shadow-lg shadow-orange-500/25 group"
                    >
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Kirim Reservasi ke WhatsApp
                    </Button>
                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Format rincian pesanan akan otomatis terisi dan terhubung langsung ke WhatsApp Customer Service Owabong Purbalingga.
                    </p>
                  </div>
                </CardContent>

                {/* Trust Footer */}
                <div className="bg-sky-50/50 p-4 border-t border-sky-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Konfirmasi ketersediaan jadwal dalam 15 menit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Pembayaran DP aman via rekening resmi BUMD</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
