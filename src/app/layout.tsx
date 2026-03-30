import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://cricvault.app";

export const metadata: Metadata = {
  title: {
    default: "CricVault — Every Trophy. Every Champion.",
    template: "%s — CricVault",
  },
  description:
    "The definitive record of every ICC trophy — Cricket World Cup, T20 World Cup, Champions Trophy, World Test Championship and more. Track every champion since 1975.",
  metadataBase: new URL(BASE),
  openGraph: {
    siteName: "CricVault",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CricVault — Every Trophy. Every Champion.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cricvault",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var t = localStorage.getItem('cricvault-theme') || 'dark';
            document.documentElement.setAttribute('data-theme', t);
          })();
        ` }} />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
