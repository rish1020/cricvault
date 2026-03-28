import Link from "next/link";
import type { Metadata } from "next";
import { trophies } from "@/lib/data";
import { domesticTrophies } from "@/lib/domesticData";

export const metadata: Metadata = {
  title: "About — CricVault",
  description:
    "CricVault is the definitive record of every ICC and major domestic cricket trophy — every champion, every edition, since 1975.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — CricVault",
    description:
      "CricVault is the definitive record of every ICC and major domestic cricket trophy — every champion, every edition, since 1975.",
    url: "/about",
  },
  twitter: { card: "summary_large_image" },
};

const intlCount  = trophies.reduce((s, t) => s + t.winners.length, 0);
const domCount   = domesticTrophies.reduce((s, t) => s + t.winners.length, 0);
const totalEditions = intlCount + domCount;

export default function AboutPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Hero bar */}
      <section
        className="border-b"
        style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--text-amber)", fontFamily: "var(--font-geist-mono)" }}
          >
            About
          </p>
          <h1
            className="font-display font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "var(--text-primary)" }}
          >
            Every Trophy.{" "}
            <span style={{ color: "var(--text-amber)" }}>Every Champion.</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            CricVault is a fast, ad-free reference for cricket trophy history — built for fans who want facts quickly, without clutter.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">

        {/* What it covers */}
        <section>
          <h2
            className="text-[10px] uppercase tracking-[0.2em] mb-5"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          >
            What&apos;s covered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "International trophies",
                value: String(trophies.length),
                sub: "CWC, T20 WC, Champions Trophy, WTC, Under-19 & women's equivalents",
              },
              {
                label: "Domestic leagues",
                value: String(domesticTrophies.length),
                sub: "IPL, BBL, PSL, The Hundred, CPL, WPL, WBBL and more",
              },
              {
                label: "Tournament editions",
                value: String(totalEditions) + "+",
                sub: "Every final on record, back to the first Cricket World Cup in 1975",
              },
            ].map(({ label, value, sub }) => (
              <div
                key={label}
                className="rounded-2xl px-5 py-5 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <p
                  className="font-display font-bold mb-1"
                  style={{ fontSize: "2rem", lineHeight: 1, color: "var(--text-primary)" }}
                >
                  {value}
                </p>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>
                  {label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2
            className="text-[10px] uppercase tracking-[0.2em] mb-5"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          >
            Features
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "Tournament pages",
                desc: "Full winner history, most-successful nations, runners-up table, and venue for every edition.",
                href: "/tournaments",
                cta: "Browse tournaments →",
              },
              {
                title: "Trophy timeline",
                desc: "A chronological feed of every final. Filter by men's / women's or search by team to trace any nation's journey.",
                href: "/timeline/all/all",
                cta: "Open timeline →",
              },
              {
                title: "Trophy cabinet",
                desc: "Medal-table ranking by country. Click any nation to see every trophy they've won across all formats.",
                href: "/cabinet/all/all",
                cta: "View cabinet →",
              },
              {
                title: "Current champions",
                desc: "The homepage always shows who holds each major ICC trophy right now.",
                href: "/",
                cta: "Go to homepage →",
              },
            ].map(({ title, desc, href, cta }) => (
              <div
                key={title}
                className="rounded-2xl px-5 py-4 border flex items-start gap-4"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {desc}
                  </p>
                </div>
                <Link
                  href={href}
                  className="back-link shrink-0 text-xs font-medium whitespace-nowrap pt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Data & accuracy */}
        <section>
          <h2
            className="text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          >
            Data & accuracy
          </h2>
          <div
            className="rounded-2xl px-5 py-5 border text-sm leading-relaxed space-y-3"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            <p>
              Tournament results are sourced from ICC official records, ESPNcricinfo, and Cricbuzz. Data is updated manually after each major final.
            </p>
            <p>
              Spotted a mistake or a missing result?{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="back-link font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Open an issue on GitHub
              </a>{" "}
              and it'll be fixed promptly.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section>
          <h2
            className="text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
          >
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js 14", "TypeScript", "Tailwind CSS", "Static generation", "No ads", "No tracking"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border font-medium"
                style={{
                  background: "var(--bg-subtle)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
