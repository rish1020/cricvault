import Link from "next/link";
import { domesticTrophies } from "@/lib/domesticData";

export const metadata = { title: "Domestic Tournaments — CricVault" };

export default function DomesticPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-0">
        <p
          className="text-[10px] uppercase tracking-[0.22em] mb-2"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
        >
          Franchise · Domestic
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="font-display font-bold text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            Domestic Leagues
          </h1>
          <span
            className="px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              background: "rgba(245,166,35,0.08)",
              borderColor: "rgba(245,166,35,0.2)",
              color: "rgba(245,166,35,0.8)",
            }}
          >
            Franchise Cricket
          </span>
        </div>
        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
          The world&apos;s top domestic T20 leagues · Select any for full history
        </p>
      </div>

      {/* League cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domesticTrophies.map((trophy) => (
            <Link
              key={trophy.id}
              href={`/domestic/${trophy.id}`}
              className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-med)",
              }}
            >
              {/* Gradient header area */}
              <div className={`relative h-36 bg-gradient-to-br ${trophy.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />

                {/* League initial — large, faded */}
                <div
                  className="absolute -right-2 -bottom-3 font-display font-black text-white/10 group-hover:text-white/[0.15] transition-all duration-500 pointer-events-none select-none"
                  style={{ fontSize: "7rem", lineHeight: 1 }}
                >
                  {trophy.shortName}
                </div>

                {/* Format badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
                  >
                    {trophy.format}
                  </span>
                </div>

                {/* Editions pill */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {trophy.winners.length} editions
                  </span>
                </div>

                {/* League badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {trophy.league}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display font-bold text-xl leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {trophy.shortName}
                </h3>
                <p className="mt-0.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  {trophy.name}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                  {trophy.description}
                </p>

                {/* Champion row */}
                <div
                  className="mt-4 pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                      Champion
                    </p>
                    <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                      {trophy.currentChampion}
                      <span className="ml-1.5 text-xs font-normal" style={{ color: "var(--text-dim)" }}>
                        {trophy.currentChampionYear}
                      </span>
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    History
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
