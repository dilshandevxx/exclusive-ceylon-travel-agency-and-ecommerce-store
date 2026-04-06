import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = DM_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Exclusive Ceylon | Sri Lanka travel & essentials",
  description:
    "Curated Sri Lanka itineraries, custom travel packages, and premium travel gear. Book journeys and shop essentials with Exclusive Ceylon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#f8f8f8] font-sans text-[#0d1117]">
        {children}
      </body>
    </html>
  );
}
