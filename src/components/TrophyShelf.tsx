"use client";

import Link from "next/link";
import { Trophy } from "@/lib/data";
import { teamToSlug } from "@/lib/teamSlug";
import FlagDisplay from "@/components/FlagDisplay";

type Gender = "all" | "men" | "women";

const ACCENT: Record<string, string> = {
  "cricket-world-cup":       "#f59e0b",
  "t20-world-cup":           "#6366f1",
  "champions-trophy":        "#10b981",
  "world-test-championship": "#64748b",
  "u19-world-cup":           "#f97316",
  "womens-world-cup":        "#ec4899",
  "womens-t20-world-cup":    "#8b5cf6",
  "womens-u19-world-cup":    "#e879f9",
};

const RANK_STYLE: Record<number, { color: string; bg: string }> = {
  1: { color: "#92400e", bg: "#FFD700" },
  2: { color: "#374151", bg: "#C0C0C0" },
  3: { color: "#78350f", bg: "#CD7F32" },
};

const STARS = [
  { x: "68%", y: "18px", size: 14, opacity: 0.7,  delay: "0s"   },
  { x: "74%", y: "36px", size: 9,  opacity: 0.45, delay: "0.4s" },
  { x: "80%", y: "12px", size: 11, opacity: 0.6,  delay: "0.8s" },
  { x: "86%", y: "30px", size: 7,  opacity: 0.35, delay: "0.2s" },
  { x: "91%", y: "14px", size: 13, opacity: 0.55, delay: "1.1s" },
  { x: "94%", y: "38px", size: 8,  opacity: 0.4,  delay: "0.6s" },
  { x: "77%", y: "56px", size: 6,  opacity: 0.28, delay: "1.4s" },
];

function SparkleIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

function StarIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6z" />
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  const MAX = 7;
  const shown = Math.min(count, MAX);
  const extra = count > MAX ? count - MAX : 0;
  return (
    <div className="flex items-center gap-0.5 flex-wrap">
      {Array.from({ length: shown }).map((_, i) => (
        <span key={i} style={{ color: "#F5A623" }}><StarIcon size={13} /></span>
      ))}
      {extra > 0 && (
        <span className="text-xs font-bold ml-1" style={{ color: "#F5A623" }}>+{extra}</span>
      )}
    </div>
  );
}

/* ── Medal table (single gender section) ────────────────────────────── */
function MedalTable({
  trophies,
  countries,
  gender,
  label,
}: {
  trophies: Trophy[];
  countries: string[];
  gender: Gender;
  label?: string;
}) {
  const rows = countries.map((c) => {
    const wins: Record<string, number> = {};
    for (const t of trophies) {
      const count = t.winners.filter((w) => w.champion === c).length;
      if (count > 0) wins[t.id] = count;
    }
    return { country: c, wins, total: Object.values(wins).reduce((a, b) => a + b, 0) };
  }).filter((r) => r.total > 0).sort((a, b) => b.total - a.total);

  const maxTotal = Math.max(...rows.map((r) => r.total), 1);

  return (
    <div className="mb-10">
      {label && (
        <p className="text-[11px] uppercase tracking-[0.2em] mb-3 font-mono"
          style={{ color: "var(--text-muted)" }}>
          {label}
        </p>
      )}
      <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--border-med)" }}>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
              <th className="px-4 py-3.5 text-left sticky left-0 z-10"
                style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "var(--bg-card)", minWidth: 50 }}>
                #
              </th>
              <th className="px-4 py-3.5 text-left sticky left-10 z-10"
                style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "var(--bg-card)", minWidth: 140 }}>
                Nation
              </th>
              {trophies.map((t) => (
                <th key={t.id} className="px-3 py-3.5 text-center"
                  style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", background: "var(--bg-card)", minWidth: 80 }}>
                  {t.shortName}
                </th>
              ))}
              <th className="px-5 py-3.5 text-center"
                style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "var(--bg-card)", minWidth: 90 }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const rank = i + 1;
              const rankStyle = RANK_STYLE[rank];
              const barWidth = Math.round((row.total / maxTotal) * 100);
              return (
                <tr key={row.country}
                  style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border-faint)" : undefined }}>
                  {/* Rank */}
                  <td className="px-4 py-3.5 sticky left-0 z-10" style={{ background: "var(--bg-card)" }}>
                    {rankStyle ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black"
                        style={{ background: rankStyle.bg, color: rankStyle.color }}>
                        {rank}
                      </span>
                    ) : (
                      <span className="text-xs font-semibold" style={{ color: "var(--text-faint)" }}>{rank}</span>
                    )}
                  </td>
                  {/* Country */}
                  <td className="px-4 py-3.5 sticky left-10 z-10" style={{ background: "var(--bg-card)" }}>
                    <Link href={`/cabinet/${gender}/${teamToSlug(row.country)}`}
                      className="flex items-center gap-2.5 font-semibold hover:underline"
                      style={{ color: "var(--text-primary)" }}>
                      <FlagDisplay team={row.country} size={18} />
                      {row.country}
                    </Link>
                  </td>
                  {/* Win counts */}
                  {trophies.map((t) => (
                    <td key={t.id} className="px-3 py-3.5 text-center">
                      {row.wins[t.id] ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold"
                          style={{ background: "var(--bg-subtle)", color: "var(--text-primary)" }}>
                          {row.wins[t.id]}
                        </span>
                      ) : (
                        <span style={{ color: "var(--text-faint)" }}>—</span>
                      )}
                    </td>
                  ))}
                  {/* Total */}
                  <td className="px-5 py-3.5">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="font-black text-base" style={{ color: "#F5A623" }}>{row.total}</span>
                      <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: "var(--progress-track)" }}>
                        <div className="h-full rounded-full"
                          style={{ width: `${barWidth}%`, background: rank === 1 ? "#FFD700" : rank === 2 ? "#C0C0C0" : rank === 3 ? "#CD7F32" : "#F5A62388" }} />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────── */
interface Props {
  trophies: Trophy[];
  gender: Gender;
  country: string | null;
}

export default function TrophyShelf({ trophies, gender, country }: Props) {
  const filteredTrophies = gender === "all" ? trophies : trophies.filter((t) => t.gender === gender);

  const allCountries = Array.from(
    new Set(filteredTrophies.flatMap((t) => t.winners.map((w) => w.champion)))
  ).sort((a, b) => {
    const winsA = filteredTrophies.reduce((s, t) => s + t.winners.filter((w) => w.champion === a).length, 0);
    const winsB = filteredTrophies.reduce((s, t) => s + t.winners.filter((w) => w.champion === b).length, 0);
    return winsB - winsA;
  });

  const countrySlug = country ? teamToSlug(country) : "all";

  const wonTrophies = country
    ? filteredTrophies
        .map((t) => ({
          ...t,
          countryWins: t.winners.filter((w) => w.champion === country),
          isCurrentChampion: t.currentChampion === country,
        }))
        .filter((t) => t.countryWins.length > 0)
    : [];
  const totalWins = wonTrophies.reduce((s, t) => s + t.countryWins.length, 0);

  const menTrophies   = trophies.filter((t) => t.gender === "men");
  const womenTrophies = trophies.filter((t) => t.gender === "women");

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-base-opacity); transform: scale(1) rotate(0deg); }
          50% { opacity: calc(var(--star-base-opacity) * 1.6); transform: scale(1.18) rotate(15deg); }
        }
        .cabinet-star { animation: twinkle 3s ease-in-out infinite; }
        .trophy-card-link { transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, border-color 0.2s ease; }
        .trophy-card-link:hover { transform: translateY(-2px); }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 pt-12 pb-20">

        {/* ── Page header ── */}
        <div className="relative mb-10 overflow-visible">
          {STARS.map((s, i) => (
            <span key={i} className="cabinet-star pointer-events-none absolute"
              style={{ left: s.x, top: s.y, color: "#F5A623", ["--star-base-opacity" as string]: s.opacity, opacity: s.opacity, animationDelay: s.delay }}>
              <SparkleIcon size={s.size} />
            </span>
          ))}
          <h1 className="font-display text-4xl font-black tracking-tight mb-1"
            style={{ background: "linear-gradient(135deg, var(--text-primary) 60%, #F5A623 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Trophy Room
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            ICC trophy leaderboard · {allCountries.length} nations · {filteredTrophies.reduce((s, t) => s + t.winners.length, 0)} titles awarded
          </p>
        </div>

        {/* ── Gender tabs ── */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl w-fit" style={{ background: "var(--bg-subtle)" }}>
          {(["all", "men", "women"] as Gender[]).map((g) => {
            const active = gender === g;
            return (
              <Link key={g} href={`/cabinet/${g}/${countrySlug}`}
                className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all"
                style={active ? { background: "var(--text-primary)", color: "var(--background)" } : { color: "var(--text-muted)" }}>
                {g === "all" ? "All" : g === "men" ? "Men's" : "Women's"}
              </Link>
            );
          })}
        </div>

        {/* ── Country pills ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href={`/cabinet/${gender}/all`}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full border transition-all"
            style={!country ? { background: "#F5A623", color: "#000", borderColor: "#F5A623" } : { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" }}>
            All nations
          </Link>
          {allCountries.map((c) => (
            <Link key={c} href={`/cabinet/${gender}/${teamToSlug(c)}`}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full border transition-all"
              style={country === c ? { background: "#F5A623", color: "#000", borderColor: "#F5A623" } : { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" }}>
              <FlagDisplay team={c} size={16} />
              {c}
            </Link>
          ))}
        </div>

        {/* ── Medal tables (all nations) ── */}
        {!country && (
          gender === "all" ? (
            <>
              <MedalTable trophies={menTrophies}   countries={allCountries} gender={gender} label="Men's" />
              <MedalTable trophies={womenTrophies} countries={allCountries} gender={gender} label="Women's" />
            </>
          ) : (
            <MedalTable trophies={filteredTrophies} countries={allCountries} gender={gender} />
          )
        )}

        {/* ── Trophy shelf (country selected) ── */}
        {country && (
          <div>
            {/* Country hero */}
            <div className="flex items-center gap-5 mb-8 p-6 rounded-2xl border relative overflow-hidden"
              style={{ borderColor: "var(--border-med)", background: "var(--bg-card)" }}>
              <div className="absolute left-0 top-0 w-48 h-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at left center, rgba(245,166,35,0.07) 0%, transparent 70%)" }} />
              <span className="cabinet-star absolute right-8 top-4 pointer-events-none"
                style={{ color: "#F5A623", opacity: 0.4, ["--star-base-opacity" as string]: 0.4, animationDelay: "0.3s" }}>
                <SparkleIcon size={16} />
              </span>
              <span className="cabinet-star absolute right-20 top-8 pointer-events-none"
                style={{ color: "#F5A623", opacity: 0.25, ["--star-base-opacity" as string]: 0.25, animationDelay: "1s" }}>
                <SparkleIcon size={10} />
              </span>
              <div className="relative flex-shrink-0">
                <FlagDisplay team={country} size={52} />
              </div>
              <div className="relative flex-1 min-w-0">
                <h2 className="font-display text-3xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
                  {country}
                </h2>
                <StarRating count={totalWins} />
                <p className="text-sm mt-1.5" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{totalWins}</span>
                  {" "}ICC title{totalWins !== 1 ? "s" : ""}
                  {gender !== "all" ? ` · ${gender === "men" ? "Men's" : "Women's"}` : ""}
                </p>
              </div>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 font-black font-display select-none pointer-events-none"
                style={{ fontSize: 80, lineHeight: 1, color: "#F5A623", opacity: 0.06 }}>
                {totalWins}
              </div>
            </div>

            {/* View Timeline action */}
            <div className="flex justify-end mb-5 -mt-3">
              <Link
                href={`/timeline/${gender}/${teamToSlug(country)}`}
                className="back-link inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                View Timeline
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {wonTrophies.length === 0 ? (
              <p className="text-sm" style={{ color: "var(--text-faint)" }}>No ICC titles in this category.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wonTrophies.map((t) => {
                  const accent = ACCENT[t.id] ?? "#888";
                  return (
                    <div
                      key={t.id}
                      className="rounded-2xl border overflow-hidden"
                      style={{
                        borderColor: t.isCurrentChampion ? `${accent}50` : "var(--border-med)",
                        background: "var(--bg-card)",
                        boxShadow: t.isCurrentChampion ? `0 0 0 1px ${accent}28, 0 4px 20px ${accent}14` : "none",
                      }}
                    >
                      {/* Accent top bar */}
                      <div className="h-[3px]" style={{ background: accent }} />

                      <div className="p-5">
                        {/* Header row */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0 pr-3">
                            {/* Format + current champion badge */}
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                                style={{ background: accent + "18", color: accent }}>
                                {t.format}
                              </span>
                              {t.isCurrentChampion && (
                                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide"
                                  style={{ background: `${accent}18`, color: accent }}>
                                  <StarIcon size={8} />
                                  Defending
                                </span>
                              )}
                            </div>
                            {/* Trophy name */}
                            <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--text-primary)" }}>
                              {t.shortName}
                            </h3>
                          </div>

                          {/* Win count */}
                          <div className="flex-shrink-0 flex flex-col items-end gap-0.5">
                            <span className="font-black font-display leading-none"
                              style={{ fontSize: 28, color: accent }}>
                              {t.countryWins.length}
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-widest"
                              style={{ color: "var(--text-dim)" }}>
                              title{t.countryWins.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>

                        {/* Year pills */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {t.countryWins.map((w) => (
                            <span key={w.year}
                              className="px-2 py-0.5 text-[10px] rounded tabular-nums font-mono"
                              style={{ background: "var(--bg-subtle)", color: "var(--text-dim)" }}>
                              {w.year}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
