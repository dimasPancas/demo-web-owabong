export interface ZoneLocation {
  id: string;
  name: string;
  category: "Pintu Masuk" | "Wahana Air" | "Wahana Darat" | "Fasilitas & Kuliner";
  coords: [number, number];
  image: string;
  description: string;
  facilities: string[];
  status: "Buka" | "Ramai Lancar";
  color: string;
}

export const parkZones: ZoneLocation[] = [
  {
    id: "gate-utama",
    name: "Gerbang Utama & Loket Tiket",
    category: "Pintu Masuk",
    coords: [-7.3808, 109.3475],
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Akses pintu masuk utama Owabong Waterpark, loket tiket individu & rombongan, pusat informasi, dan area drop-off bus pariwisata.",
    facilities: ["Loket Tiket", "Pusat Informasi", "ATM Center", "Parkir Bus"],
    status: "Buka",
    color: "#0284c7",
  },
  {
    id: "zona-waterboom",
    name: "Zona Waterboom & Kolam Ombak",
    category: "Wahana Air",
    coords: [-7.3813, 109.349],
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    description:
      "Jantung rekreasi Owabong dengan deburan ombak buatan setiap 30 menit, menara perosotan spiral bertingkat, dan kolam busa salju.",
    facilities: ["Kolam Ombak", "Waterboom Spiral", "Pos Lifeguard", "Sewa Ban"],
    status: "Ramai Lancar",
    color: "#0369a1",
  },
  {
    id: "zona-olympic",
    name: "Zona Kolam Arus & Olympic Pool",
    category: "Wahana Air",
    coords: [-7.3822, 109.3498],
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
    description:
      "Area santai kolam arus lazy river mengelilingi taman tropis dan kolam renang olympic 50 meter berstandar nasional dari mata air murni.",
    facilities: ["Lazy River 300m", "Olympic Pool 50m", "Terapi Ikan Alami"],
    status: "Buka",
    color: "#0284c7",
  },
  {
    id: "zona-gokart",
    name: "Zona Sirkuit Gokart & Outbound",
    category: "Wahana Darat",
    coords: [-7.3802, 109.3508],
    image: "https://images.pexels.com/photos/2034969/pexels-photo-2034969.jpeg",
    description:
      "Arena petualangan darat dengan sirkuit gokart aspal 450 meter, lintasan flying fox 180 meter di atas danau, serta lintasan motor ATV.",
    facilities: ["Sirkuit Gokart", "Flying Fox", "ATV Track", "High Ropes"],
    status: "Buka",
    color: "#059669",
  },
  {
    id: "zona-kuliner",
    name: "Food Court & Gazebo Resto",
    category: "Fasilitas & Kuliner",
    coords: [-7.3817, 109.3482],
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
    description:
      "Pusat kuliner keluarga yang menyajikan aneka sajian khas Banyumas, gazebo istirahat VIP, mushola besar, dan loker penitipan barang.",
    facilities: ["Food Court 600 Kursi", "Gazebo VIP", "Mushola", "Locker Room"],
    status: "Buka",
    color: "#ea580c",
  },
];
