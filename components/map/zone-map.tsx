"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { parkZones, type ZoneLocation } from "@/lib/zones-data";

// Helper component to center map on selected item
function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  React.useEffect(() => {
    if (center && map) {
      map.flyTo(center, 17, { duration: 1.2 });
    }
  }, [center, map]);
  return null;
}

// Custom modern SVG Pin Icons for Leaflet
function createCustomPin(color: string) {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 38px;
        height: 38px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 14px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          ★
        </div>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -36],
  });
}

interface ZoneMapProps {
  selectedZone: ZoneLocation | null;
  onSelectZone: (zone: ZoneLocation) => void;
}

export default function ZoneMap({ selectedZone, onSelectZone }: ZoneMapProps) {
  const centerCoords: [number, number] = selectedZone
    ? selectedZone.coords
    : [-7.3813, 109.349];

  return (
    <div className="w-full h-full min-h-[550px] lg:min-h-[650px] rounded-3xl overflow-hidden shadow-xl border border-sky-100 relative">
      <MapContainer
        center={centerCoords}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
        style={{ minHeight: "550px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController center={centerCoords} />

        {parkZones.map((zone) => {
          const customIcon = createCustomPin(zone.color);
          return (
            <Marker
              key={zone.id}
              position={zone.coords}
              icon={customIcon}
              eventHandlers={{
                click: () => onSelectZone(zone),
              }}
            >
              <Popup className="owabong-popup">
                <div className="p-1 space-y-2 max-w-[240px]">
                  <div className="relative h-28 w-full rounded-xl overflow-hidden">
                    <Image
                      src={zone.image}
                      alt={zone.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/90 text-slate-800 shadow-xs">
                        {zone.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
                    {zone.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {zone.description}
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      ● Status: {zone.status}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
