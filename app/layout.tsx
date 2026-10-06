import type { Metadata } from "next";
import "./globals.css";
import { MERCHANT_ORIGIN, SITE } from "@/lib/affiliate";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Rechargeable Stick-On Wall Sconces for Renters | PrimeGearLab",
  description: "Independent guide to Poplight: rechargeable, no-drill wall sconces that stick on in seconds. Compare colors and see how install works.",
  alternates: { canonical: "/" },
  openGraph: { title: "No-Drill Rechargeable Wall Sconces | PrimeGearLab", description: "Independent guide to renter-friendly Poplight wall lights.", url: SITE, siteName: "PrimeGearLab", type: "website",
    images: [{ url: "https://thepoplight.com/cdn/shop/files/Sage_Green_Hero_Lights_On_Desktop.jpg?v=1789791505&width=1200" }] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><link rel="preconnect" href={MERCHANT_ORIGIN} /><link rel="dns-prefetch" href={MERCHANT_ORIGIN} /></head>
      <body>{children}</body>
    </html>
  );
}
