import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Owabong Waterpark | Kesegaran Alami, Rekreasi Tanpa Batas",
  description:
    "Taman rekreasi air dan petualangan terbesar di Jawa Tengah bersumber langsung dari mata air alami Gunung Slamet. Nikmati 80+ wahana seru untuk keluarga & rombongan.",
  keywords: [
    "Owabong",
    "Waterpark Purbalingga",
    "Wisata Purbalingga",
    "Kolam Renang Alami",
    "Wisata Air Jawa Tengah",
    "Paket Rombongan Owabong",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
