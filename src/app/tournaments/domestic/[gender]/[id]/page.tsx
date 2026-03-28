import Link from "next/link";
import { notFound } from "next/navigation";
import { getDomesticTrophyById, domesticTrophies, getTeamColor } from "@/lib/domesticData";

export function generateStaticParams() {
  return domesticTrophies.map((t) => ({ gender: t.gender, id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ gender: string; id: string }> }) {
  const { id } = await params;
  const trophy = getDomesticTrophyById(id);
  if (!trophy) return {};
  return { title: `${trophy.shortName} — CricVault`, description: trophy.description };
}

export default async function DomesticDetailPage({ params }: { params: Promise<{ gender: string; id: string }> }) {
  const { id } = await params;
  const trophy = getDomesticTrophyById(id);
  if (!trophy) notFound();

  // Champions: name → years[]
  const championYears = new Map<string, number[]>();
  for (const w of trophy.winners) {
    if (!championYears.has(w.champion)) championYears.set(w.champion, []);
    championYears.get(w.champion)!.push(w.year);
  }
  const champions = [...championYears.entries()].sort((a, b) => b[1].length - a[1].length);

  // Runners-up: name → years[]
  const runnerYears = new Map<string, number[]>();
  for (const w of trophy.winners) {
    if (!runnerYears.has(w.runnerUp)) runnerYears.set(w.runnerUp, []);
    runnerYears.get(w.runnerUp)!.push(w.year);
  }
  const runnersUp = [...runnerYears.entries()].sort((a, b) => b[1].length - a[1].length);

  const maxWins   = champions[0]?.[1].length ?? 1;
  const maxFinals = runnersUp[0]?.[1].length ?? 1;

  const genderLabel = trophy.gender === "women" ? "Women's Tournaments" : "Men's Tournaments";
  const backHref = `/tournaments/domestic/${trophy.gender}`;

  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* ── Compact page header ── */}
      <section
        className="relative overflow-hidden border-b sticky top-14 z-40"
        style={{
          borderColor: "var(--border)",
          background: "var(--header-bg-solid)",
          backdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${trophy.color} pointer-events-none`} style={{ opacity: 0.06 }} />

        <div className="relative max-w-7xl mx-auto px-6 py-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-4 text-[11px]" style={{ color: "var(--text-muted)" }}>
            <Link href={backHref} className="hover:text-white transition-colors flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {genderLabel}
            </Link>
            <span>/</span>
            <span style={{ color: "var(--text-body)" }}>{trophy.shortName}</span>
          </div>

          {/* Header row */}
          <div className="flex items-center gap-5">
            {/* Title + meta */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded"
                  style={{ background: "var(--border)", color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}
                >
                  {trophy.format}
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded"
                  style={{ background: "var(--border)", color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}
                >
                  {trophy.league}
                </span>
              </div>

              <h1
                className="font-display font-bold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--text-primary)" }}
              >
                {trophy.name}
              </h1>

              <p className="mt-1 text-[13px] line-clamp-1" style={{ color: "var(--text-secondary)" }}>
                {trophy.description}
              </p>
            </div>

            {/* Stat pills — right side */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {[
                { label: "Since",    value: String(trophy.firstEdition) },
                { label: "Editions", value: String(trophy.winners.length) },
                { label: "Format",   value: trophy.format },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl px-3.5 py-2.5 border text-center"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border-med)", minWidth: 80 }}
                >
                  <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-bold leading-none" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              ))}

              {/* Champion pill — no flag for franchise teams */}
              <div
                className="rounded-xl px-3.5 py-2.5 border text-center"
                style={{ background: "var(--bg-card)", borderColor: "var(--border-med)", minWidth: 80 }}
              >
                <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}>
                  Champion
                </p>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${getTeamColor(trophy.currentChampion)}`} />
                  <span className="text-xs font-semibold leading-none" style={{ color: "var(--text-primary)" }}>{trophy.currentChampion}</span>
                  <span className="text-[10px]" style={{ color: "var(--text-dim)" }}>{trophy.currentChampionYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: 3-col on lg — Most Successful | History | Runners Up ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-6 items-start">

          {/* ── LEFT: Most Successful ── */}
          <div className="order-2 lg:order-1">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            >
              Most Successful
            </p>
            <div className="space-y-2">
              {champions.map(([name, years], rank) => (
                <div
                  key={name}
                  className="rounded-xl px-4 py-3.5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="text-[11px] w-4 tabular-nums shrink-0"
                      style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}
                    >
                      {rank + 1}
                    </span>
                    {/* Colored dot instead of flag */}
                    <span className={`w-3 h-3 rounded-full shrink-0 ${getTeamColor(name)}`} />
                    <span className="font-semibold text-sm flex-1 truncate" style={{ color: "var(--text-primary)" }}>{name}</span>
                    <span className="font-display font-bold text-base leading-none" style={{ color: "var(--text-primary)" }}>{years.length}</span>
                  </div>
                  <div
                    className="ml-6 h-1 rounded-full overflow-hidden mb-2"
                    style={{ background: "var(--progress-track)" }}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${trophy.color}`}
                      style={{ width: `${(years.length / maxWins) * 100}%` }}
                    />
                  </div>
                  <div className="ml-6 flex flex-wrap gap-1">
                    {years.sort((a, b) => b - a).map((y) => (
                      <span
                        key={y}
                        className="text-[10px] px-1.5 py-0.5 rounded tabular-nums"
                        style={{ background: "var(--bg-subtle)", color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CENTRE: Tournament History ── */}
          <div className="order-1 lg:order-2">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            >
              Tournament History
            </p>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border-med)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
                    {[
                      { label: "Year",      cls: "" },
                      { label: "Champion",  cls: "" },
                      { label: "Runner-up", cls: "hidden sm:table-cell" },
                      { label: "Venue",     cls: "hidden md:table-cell" },
                    ].map(({ label, cls }) => (
                      <th
                        key={label}
                        className={`text-left px-5 py-3 text-[10px] uppercase tracking-widest font-medium ${cls}`}
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {trophy.winners.map((w) => (
                    <tr
                      key={w.year}
                      className="hover-row transition-colors"
                      style={{ borderBottom: "1px solid var(--border-faint)" }}
                    >
                      <td
                        className="px-5 py-3 text-xs tabular-nums"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}
                      >
                        {w.year}
                      </td>
                      <td className="px-5 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>
                        <span className="inline-flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${getTeamColor(w.champion)}`} />
                          {w.champion}
                        </span>
                      </td>
                      <td
                        className="px-5 py-3 hidden sm:table-cell"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${getTeamColor(w.runnerUp)}`} />
                          {w.runnerUp}
                        </span>
                      </td>
                      <td
                        className="px-5 py-3 text-xs hidden md:table-cell"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {w.venue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── RIGHT: Runners Up ── */}
          <div className="order-3">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            >
              Runners Up
            </p>
            <div className="space-y-2">
              {runnersUp.map(([name, years], rank) => (
                <div
                  key={name}
                  className="rounded-xl px-4 py-3.5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="text-[11px] w-4 tabular-nums shrink-0"
                      style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}
                    >
                      {rank + 1}
                    </span>
                    <span className={`w-3 h-3 rounded-full shrink-0 ${getTeamColor(name)}`} />
                    <span className="font-semibold text-sm flex-1 truncate" style={{ color: "var(--text-primary)" }}>{name}</span>
                    <span
                      className="font-display font-bold text-base leading-none"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {years.length}
                    </span>
                  </div>
                  <div
                    className="ml-6 h-1 rounded-full overflow-hidden mb-2"
                    style={{ background: "var(--progress-track)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(years.length / maxFinals) * 100}%`, background: "var(--text-faint)" }}
                    />
                  </div>
                  <div className="ml-6 flex flex-wrap gap-1">
                    {years.sort((a, b) => b - a).map((y) => (
                      <span
                        key={y}
                        className="text-[10px] px-1.5 py-0.5 rounded tabular-nums"
                        style={{ background: "var(--bg-subtle)", color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>{/* end 3-col grid */}
      </div>

      <footer className="border-t py-5 px-6 mt-6" style={{ borderColor: "var(--border-faint)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <span className="font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>Cric</span>
            <span className="font-display font-bold text-sm text-amber-400">Vault</span>
          </div>
          <p className="text-[11px]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}>
            Data accurate as of 2025 · Not affiliated with BCCI
          </p>
        </div>
      </footer>
    </main>
  );
}
