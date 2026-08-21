"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Compass,
  Ticket,
  Layers,
  ShieldCheck,
  Droplets,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { parkZones, type ZoneLocation } from "@/lib/zones-data";

// Dynamically import map component with SSR disabled
const ZoneMap = dynamic(() => import("@/components/map/zone-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[550px] lg:min-h-[650px] bg-white rounded-3xl flex flex-col items-center justify-center space-y-3 text-slate-400 animate-pulse border border-sky-100 shadow-sm">
      <Compass className="h-10 w-10 animate-spin text-sky-600" />
      <span className="text-sm font-semibold text-slate-600">
        Memuat Peta Interaktif Kawasan Owabong...
      </span>
    </div>
  ),
});

export default function PetaPage() {
  const [selectedZone, setSelectedZone] = React.useState<ZoneLocation | null>(
    parkZones[1] // Default to Zona Waterboom
  );

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <Badge
            variant="default"
            className="bg-sky-500/20 text-sky-200 border border-sky-400/30 text-xs font-bold px-4 py-1.5"
          >
            <Droplets className="h-3.5 w-3.5 mr-1 text-cyan-300 inline" />
            Navigasi Kawasan 15 Hektar
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Peta Denah Interaktif Owabong Waterpark
          </h1>
          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Jelajahi denah zonasi kawasan, temukan lokasi wahana air alami,
            sirkuit gokart, pusat kuliner mendoan, dan pos lifeguard dengan mudah.
          </p>
        </div>
      </section>

      {/* Main Map & Zone Selector Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Display (8 cols on large screens) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Kecamatan Bojongsari, Kabupaten Purbalingga, Jawa Tengah
                </span>
              </div>
              <span className="text-xs text-sky-700 font-medium hidden sm:inline">
                Klik pin marker pada peta untuk detail wahana
              </span>
            </div>

            {/* Client-side Leaflet Container */}
            <ZoneMap
              selectedZone={selectedZone}
              onSelectZone={(zone) => setSelectedZone(zone)}
            />

            {/* Quick Tips */}
            <div className="p-4 rounded-2xl bg-white border border-sky-100 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Pos Penyelamat Lifeguard PRSI & Ruang Medis P3K selalu siaga di setiap zona kolam.</span>
              </div>
              <Link
                href="https://maps.google.com/?q=Owabong+Waterpark+Purbalingga"
                target="_blank"
                className="text-sky-600 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Zone Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-sky-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Daftar Zonasi Kawasan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pilih zona untuk memusatkan tampilan peta
                  </p>
                </div>
                <Layers className="h-5 w-5 text-sky-600" />
              </div>

              {/* Zone Button List */}
              <div className="space-y-3">
                {parkZones.map((zone) => {
                  const isSelected = selectedZone?.id === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                        isSelected
                          ? "border-sky-500 bg-sky-50 shadow-sm ring-1 ring-sky-500"
                          : "border-slate-100 bg-slate-50/60 hover:bg-sky-50/50 hover:border-sky-200"
                      }`}
                    >
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0 font-bold text-sm shadow-xs mt-0.5"
                        style={{ backgroundColor: zone.color }}
                      >
                        <Compass className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-bold text-sm text-slate-900 truncate">
                            {zone.name}
                          </h4>
                        </div>
                        <span className="text-[11px] font-semibold text-sky-700 block mt-0.5">
                          {zone.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Zone Detail Card */}
              {selectedZone && (
                <div className="pt-4 border-t border-sky-100 space-y-4">
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src={selectedZone.image}
                      alt={selectedZone.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs font-bold text-cyan-300">
                        Zona Terpilih
                      </span>
                      <h4 className="text-base font-extrabold text-white leading-tight">
                        {selectedZone.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedZone.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Fasilitas di Zona Ini:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedZone.facilities.map((f, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-sky-50 text-sky-800 font-medium px-2.5 py-1 rounded-lg border border-sky-100"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/reservasi" className="block pt-2">
                    <Button variant="accent" className="w-full font-bold justify-center gap-2 rounded-xl shadow-md shadow-orange-500/20">
                      <Ticket className="h-4 w-4" />
                      Pesan Tiket ke Zona Ini
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
