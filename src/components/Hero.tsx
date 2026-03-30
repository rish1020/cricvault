import Link from "next/link";
import type { Trophy } from "@/lib/data";
import FlagDisplay from "@/components/FlagDisplay";
import HexBackground from "@/components/HexBackground";

function ChampionCard({ trophy, current, accent, format }: {
  trophy: Trophy;
  current: Trophy["winners"][number];
  accent: string;
  format: string;
}) {
  return (
    <Link
      href={`/tournaments/international/${trophy.gender}/${trophy.id}`}
      className="champion-card relative rounded-2xl border overflow-hidden"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-med)",
        "--card-accent": accent,
      } as React.CSSProperties}
    >
      <div className="h-[3px] w-full" style={{ background: accent }} />
      <div className="px-4 py-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[11px] font-semibold leading-snug truncate pr-2"
            style={{ color: "var(--text-secondary)" }}>
            {trophy.shortName}
          </p>
          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0"
            style={{ background: accent + "20", color: accent }}>
            {format}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <FlagDisplay team={current.champion} size={20} />
          <span className="font-bold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>
            {current.champion}
          </span>
        </div>
        <p className="text-[10px] font-mono mt-0.5" style={{ color: "var(--text-dim)" }}>
          since {current.year}
        </p>
      </div>
    </Link>
  );
}

const MEN_FEATURED = [
  { id: "cricket-world-cup",       accent: "#f59e0b", format: "ODI" },
  { id: "t20-world-cup",           accent: "#6366f1", format: "T20I" },
  { id: "champions-trophy",        accent: "#10b981", format: "ODI" },
  { id: "world-test-championship", accent: "#64748b", format: "Test" },
] as const;

const WOMEN_FEATURED = [
  { id: "womens-world-cup",       accent: "#ec4899", format: "ODI" },
  { id: "womens-t20-world-cup",   accent: "#8b5cf6", format: "T20I" },
] as const;

export default function Hero({
  trophies,
  totalEditions,
  menCount,
  womenCount,
}: {
  trophies: Trophy[];
  totalEditions: number;
  menCount: number;
  womenCount: number;
}) {
  void totalEditions; void menCount; void womenCount;

  function buildCards(list: readonly { id: string; accent: string; format: string }[]) {
    return list.map(({ id, accent, format }) => {
      const trophy = trophies.find((t) => t.id === id);
      if (!trophy) return null;
      const current = trophy.winners[0];
      return { trophy, current, accent, format };
    }).filter(Boolean) as { trophy: Trophy; current: Trophy["winners"][number]; accent: string; format: string }[];
  }

  const menCards    = buildCards(MEN_FEATURED);
  const womenCards  = buildCards(WOMEN_FEATURED);

  return (
    <section className="relative overflow-hidden flex-1 flex flex-col" style={{ background: "var(--background)" }}>
      {/* Hex grid background — fills 100% of section height */}
      <HexBackground cols={44} rows={18} opacity={0.9} />

      {/* Ambient glow layers on top of hex grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(245,166,35,0.04) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, var(--header-bg) 100%)" }}
        />
      </div>

      <div className="relative flex-1 flex items-center max-w-6xl mx-auto w-full px-4 sm:px-5 py-6 sm:py-8">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center w-full">

          {/* ── LEFT: Editorial headline ── */}
          <div>
            {/* Eyebrow tag */}
            <div className="flex items-center gap-2 mb-5 overflow-hidden">
              <span
                className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.15em] uppercase truncate"
                style={{ color: "rgba(245,166,35,0.7)", fontFamily: "var(--font-geist-mono)" }}
              >
                ICC · International Cricket · Since 1973
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display leading-[0.88] tracking-tighter"
              style={{ fontSize: "clamp(2.4rem, 10vw, 6.5rem)", fontWeight: 800 }}
            >
              <span className="block" style={{ color: "var(--text-primary)" }}>Every</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #F5A623 0%, #FFD166 60%, #F5A623 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Trophy.
              </span>
              <span className="block" style={{ color: "var(--text-primary)" }}>Every</span>
              <span className="block" style={{ color: "var(--text-muted)" }}>
                Champion.
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-5 leading-relaxed max-w-[400px]"
              style={{ color: "var(--text-secondary)", fontSize: "15px" }}
            >
              The definitive record of ICC tournaments — men&apos;s, women&apos;s,
              international and domestic. Decades of history, one place.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <a
                href="/tournaments/international/men"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black transition-all"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #FFD166)",
                  boxShadow: "0 0 24px rgba(245,166,35,0.25)",
                }}
              >
                Browse Tournaments
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/timeline/all/all"
                className="hero-link inline-flex items-center gap-2 text-sm font-medium"
              >
                View Timeline
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Current Champions ── */}
          <div className="hidden lg:flex flex-col gap-10">

            {/* Men's */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2.5"
                style={{ color: "var(--text-amber)", fontFamily: "var(--font-geist-mono)" }}>
                Men&apos;s
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {menCards.map(({ trophy, current, accent, format }) => (
                  <ChampionCard key={trophy.id} trophy={trophy} current={current} accent={accent} format={format} />
                ))}
              </div>
            </div>

            {/* Women's */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] mb-2.5"
                style={{ color: "rgba(236,72,153,0.85)", fontFamily: "var(--font-geist-mono)" }}>
                Women&apos;s
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {womenCards.map(({ trophy, current, accent, format }) => (
                  <ChampionCard key={trophy.id} trophy={trophy} current={current} accent={accent} format={format} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
