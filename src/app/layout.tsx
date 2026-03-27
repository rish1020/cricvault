import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "CricVault — Every Trophy. Every Champion.",
  description:
    "The definitive record of ICC cricket tournaments — men's, women's, international and domestic. Decades of history in one place.",
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
      </body>
    </html>
  );
}
