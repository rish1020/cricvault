import type { Trophy } from "@/lib/data";
import FlagDisplay from "@/components/FlagDisplay";
import HexBackground from "@/components/HexBackground";

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 relative overflow-hidden ${className}`}
      style={{ background: "var(--bg-card)", borderColor: "var(--border-med)" }}
    >
      {children}
    </div>
  );
}

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
  // Find most recently won trophy
  const latestTrophy = [...trophies].sort(
    (a, b) => b.currentChampionYear - a.currentChampionYear
  )[0];

  // Find longest reigning champion (most titles in one tournament)
  const dominantStat = trophies.reduce(
    (best, t) => {
      const counts: Record<string, number> = {};
      t.winners.forEach((w) => {
        counts[w.champion] = (counts[w.champion] || 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      return top && top[1] > best.count
        ? { team: top[0], count: top[1], tournament: t.shortName }
        : best;
    },
    { team: "", count: 0, tournament: "" }
  );

  return (
    <section className="relative overflow-hidden flex-1 flex flex-col" style={{ background: "var(--background)" }}>
      {/* Hex grid background — fills 100% of section height */}
      <HexBackground cols={32} rows={16} opacity={0.9} />

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
        {/* Vignette so content remains readable */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, var(--header-bg) 100%)" }}
        />
      </div>

      <div className="relative flex-1 flex items-center max-w-6xl mx-auto w-full px-5 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-center w-full">

          {/* ── LEFT: Editorial headline ── */}
          <div>
            {/* Eyebrow tag */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ color: "rgba(245,166,35,0.7)", fontFamily: "var(--font-geist-mono)" }}
              >
                ICC · International Cricket · Since 1973
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display leading-[0.88] tracking-tighter"
              style={{ fontSize: "clamp(3.8rem, 8vw, 6.5rem)", fontWeight: 800 }}
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
              <span className="block" style={{ color: "var(--text-faint)" }}>
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
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <a
                href="#tournaments"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black transition-all"
                style={{
                  background: "linear-gradient(135deg, #F5A623, #FFD166)",
                  boxShadow: "0 0 24px rgba(245,166,35,0.25)",
                }}
              >
                Browse Tournaments
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#records"
                className="hero-link inline-flex items-center gap-2 text-sm font-medium"
              >
                View Records
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Quick stats row */}
            {/* <div
              className="mt-12 pt-8 flex items-center gap-8 flex-wrap"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { value: menCount, label: "Men's" },
                { value: womenCount, label: "Women's" },
                { value: totalEditions, label: "Editions played" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="font-display font-bold"
                    style={{ fontSize: "1.75rem", lineHeight: 1 }}
                  >
                    {value}
                  </p>
                  <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── RIGHT: Bento stats panel ── */}
          <div className="hidden lg:grid grid-cols-2 gap-2 auto-rows-auto">

            {/* Featured: latest champion – full width */}
            <BentoCard className="col-span-2">
              <div
                className="absolute inset-0 rounded-2xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,166,35,0.15) 0%, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: "rgba(245,166,35,0.7)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    Latest Champion
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full border"
                    style={{
                      color: "rgba(245,166,35,0.6)",
                      borderColor: "rgba(245,166,35,0.2)",
                      background: "rgba(245,166,35,0.06)",
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-400 inline-block" />
                    {latestTrophy.currentChampionYear}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p
                      className="font-display font-bold leading-none flex items-center gap-2"
                      style={{ fontSize: "2rem", color: "var(--text-primary)" }}
                    >
                      <FlagDisplay team={latestTrophy.currentChampion} size={26} />
                      {latestTrophy.currentChampion}
                    </p>
                    <p className="mt-1.5 text-sm" style={{ color: "var(--text-dim)" }}>
                      {latestTrophy.shortName}
                    </p>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Stat: total editions */}
            <BentoCard>
              <p
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
              >
                Editions
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: "2.6rem", lineHeight: 1, color: "var(--text-primary)" }}
              >
                {totalEditions}
              </p>
              <p className="text-[11px] mt-2" style={{ color: "var(--text-faint)" }}>
                Total played
              </p>
            </BentoCard>

            {/* Stat: most titles */}
            <BentoCard>
              <p
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
              >
                Most titles
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: "2.6rem", lineHeight: 1, color: "#F5A623" }}
              >
                {dominantStat.count}×
              </p>
              <p className="text-[11px] mt-2 leading-snug inline-flex flex-col gap-0.5" style={{ color: "var(--text-faint)" }}>
                <span className="inline-flex items-center gap-1">
                  <FlagDisplay team={dominantStat.team} size={13} />
                  {dominantStat.team}
                </span>
                <span>{dominantStat.tournament}</span>
              </p>
            </BentoCard>

            {/* Tournaments count */}
            <BentoCard>
              <p
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
              >
                Tournaments
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: "2.6rem", lineHeight: 1, color: "var(--text-primary)" }}
              >
                {menCount + womenCount}
              </p>
              <p className="text-[11px] mt-2" style={{ color: "var(--text-faint)" }}>
                ICC events tracked
              </p>
            </BentoCard>

            {/* Year since */}
            <BentoCard>
              <p
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
              >
                Est.
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: "2.6rem", lineHeight: 1, color: "var(--text-primary)" }}
              >
                1973
              </p>
              <p className="text-[11px] mt-2" style={{ color: "var(--text-faint)" }}>
                First World Cup
              </p>
            </BentoCard>

          </div>
        </div>
      </div>

    </section>
  );
}
