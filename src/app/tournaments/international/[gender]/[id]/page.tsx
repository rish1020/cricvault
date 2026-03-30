import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrophyById, trophies } from "@/lib/data";
import TrophyIllustration from "@/components/TrophyIllustration";
import FlagDisplay from "@/components/FlagDisplay";
import JsonLd from "@/components/JsonLd";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://cricvault.app";

export function generateStaticParams() {
  return trophies.map((t) => ({ gender: t.gender, id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ gender: string; id: string }> }) {
  const { id } = await params;
  const trophy = getTrophyById(id);
  if (!trophy) return {};
  const yearRange = `${trophy.firstEdition}–${trophy.currentChampionYear}`;
  const title = `${trophy.shortName} Winners List (${yearRange}) — CricVault`;
  const desc = trophy.summary
    ? trophy.summary.slice(0, 160)
    : `${trophy.description} Current champion: ${trophy.currentChampion} (${trophy.currentChampionYear}).`;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url: `${BASE}/tournaments/international/${trophy.gender}/${id}`,
      images: [{ url: `${BASE}/tournaments/international/${trophy.gender}/${id}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" as const },
    alternates: { canonical: `${BASE}/tournaments/international/${trophy.gender}/${id}` },
  };
}

export default async function TrophyPage({ params }: { params: Promise<{ gender: string; id: string }> }) {
  const { id } = await params;
  const trophy = getTrophyById(id);
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
  const backHref = `/tournaments/international/${trophy.gender}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: genderLabel, item: `${BASE}${backHref}` },
      { "@type": "ListItem", position: 3, name: trophy.name, item: `${BASE}/tournaments/international/${trophy.gender}/${trophy.id}` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Compact page header ── */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${trophy.color} pointer-events-none`} style={{ opacity: 0.06 }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          {/* Back link */}
          <div className="mb-4">
            <Link
              href={backHref}
              className="back-link inline-flex items-center gap-1.5 transition-colors text-[13px] font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Tournaments
            </Link>
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
                  {trophy.gender === "women" ? "Women's" : "Men's"}
                </span>
              </div>

              <h1 className="font-display font-bold tracking-tight leading-tight" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "var(--text-primary)" }}>
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
                { label: "Champion", value: trophy.currentChampion, flag: true, year: trophy.currentChampionYear },
              ].map(({ label, value, flag, year }) => (
                <div
                  key={label}
                  className="rounded-xl px-3.5 py-2.5 border text-center"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border-med)", minWidth: 80 }}
                >
                  <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}>
                    {label}
                  </p>
                  {flag ? (
                    <div className="flex items-center justify-center gap-1 flex-wrap">
                      <FlagDisplay team={value} size={13} />
                      <span className="text-xs font-semibold leading-none" style={{ color: "var(--text-primary)" }}>{value}</span>
                      <span className="text-[10px]" style={{ color: "var(--text-dim)" }}>{year}</span>
                    </div>
                  ) : (
                    <p className="text-sm font-bold leading-none" style={{ color: "var(--text-primary)" }}>{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: 3-col on lg — Most Successful | History | Runners Up ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-6 items-start">

        {/* ── LEFT: Most Successful ── */}
        <div className="order-2 lg:order-1">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
            Most Successful
          </p>
          <div className="space-y-2">
            {champions.map(([name, years], rank) => (
              <div key={name} className="rounded-xl px-4 py-3.5 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] w-4 tabular-nums shrink-0"
                    style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}>
                    {rank + 1}
                  </span>
                  <FlagDisplay team={name} size={17} />
                  <span className="font-semibold text-sm flex-1 truncate" style={{ color: "var(--text-primary)" }}>{name}</span>
                  <span className="font-display font-bold text-base leading-none" style={{ color: "var(--text-primary)" }}>{years.length}</span>
                </div>
                <div className="ml-6 h-1 rounded-full overflow-hidden mb-2"
                  style={{ background: "var(--progress-track)" }}>
                  <div className={`h-full rounded-full bg-gradient-to-r ${trophy.color}`}
                    style={{ width: `${(years.length / maxWins) * 100}%` }} />
                </div>
                <div className="ml-6 flex flex-wrap gap-1">
                  {years.sort((a, b) => b - a).map((y) => (
                    <span key={y} className="text-[10px] px-1.5 py-0.5 rounded tabular-nums"
                      style={{ background: "var(--bg-subtle)", color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}>
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
          <p className="text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
            Tournament History
          </p>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border-med)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  {[
                    { label: "Year",       cls: "" },
                    { label: "Champion",   cls: "" },
                    { label: "Runner-up",  cls: "hidden sm:table-cell" },
                    { label: "Venue",      cls: "hidden md:table-cell" },
                  ].map(({ label, cls }) => (
                    <th key={label} className={`text-left px-5 py-3 text-[10px] uppercase tracking-widest font-medium ${cls}`}
                      style={{ color: "var(--text-muted)" }}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {trophy.winners.map((w) => {
                  return (
                    <tr key={w.year} className="hover-row transition-colors"
                      style={{ borderBottom: "1px solid var(--border-faint)" }}
                    >
                      <td className="px-5 py-3 text-xs tabular-nums"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                        {w.year}
                      </td>
                      <td className="px-5 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>
                        <span className="inline-flex items-center gap-2 flex-wrap">
                          <FlagDisplay team={w.champion} size={15} />
                          {w.champion}
                        </span>
                      </td>
                      <td className="px-5 py-3 hidden sm:table-cell" style={{ color: "var(--text-secondary)" }}>
                        <span className="inline-flex items-center gap-2">
                          <FlagDisplay team={w.runnerUp} size={15} />
                          {w.runnerUp}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-xs hidden md:table-cell" style={{ color: "var(--text-dim)" }}>
                        {w.venue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── RIGHT: Runners Up ── */}
        <div className="order-3">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
            Runners Up
          </p>
          <div className="space-y-2">
            {runnersUp.map(([name, years], rank) => (
              <div key={name} className="rounded-xl px-4 py-3.5 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] w-4 tabular-nums shrink-0"
                    style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}>
                    {rank + 1}
                  </span>
                  <FlagDisplay team={name} size={17} />
                  <span className="font-semibold text-sm flex-1 truncate" style={{ color: "var(--text-primary)" }}>{name}</span>
                  <span className="font-display font-bold text-base leading-none"
                    style={{ color: "var(--text-secondary)" }}>{years.length}</span>
                </div>
                <div className="ml-6 h-1 rounded-full overflow-hidden mb-2"
                  style={{ background: "var(--progress-track)" }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${(years.length / maxFinals) * 100}%`, background: "var(--text-faint)" }} />
                </div>
                <div className="ml-6 flex flex-wrap gap-1">
                  {years.sort((a, b) => b - a).map((y) => (
                    <span key={y} className="text-[10px] px-1.5 py-0.5 rounded tabular-nums"
                      style={{ background: "var(--bg-subtle)", color: "var(--text-dim)", fontFamily: "var(--font-geist-mono)" }}>
                      {y}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>{/* end 3-col grid */}

        {/* ── Summary + Key Facts ── */}
        {(trophy.summary || (trophy.keyFacts && trophy.keyFacts.length > 0)) && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-start">
            {/* Summary */}
            {trophy.summary && (
              <div
                className="rounded-2xl px-6 py-6 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
                >
                  About this tournament
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {trophy.summary}
                </p>
              </div>
            )}

            {/* Key Facts */}
            {trophy.keyFacts && trophy.keyFacts.length > 0 && (
              <div
                className="rounded-2xl px-6 py-6 border"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-3"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
                >
                  Key facts
                </p>
                <ul className="space-y-2">
                  {trophy.keyFacts.map((fact, i) => (
                    <li key={i} className="flex gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--text-amber)" }} />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ── FAQ ── */}
        {trophy.faqs && trophy.faqs.length > 0 && (
          <div className="mt-8">
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
            >
              Frequently asked questions
            </p>
            <div className="space-y-3">
              {trophy.faqs.map(({ q, a }, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-6 py-5 border"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                    {q}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </main>
  );
}
