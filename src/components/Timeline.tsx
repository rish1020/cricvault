"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Trophy } from "@/lib/data";
import FlagDisplay from "@/components/FlagDisplay";
import { teamToSlug } from "@/lib/teamSlug";

type Entry = {
  year: number;
  champion: string;
  runnerUp: string;
  tournament: string;
  shortColor: string;
  gender: "men" | "women";
  final?: string;
};

type Gender = "all" | "men" | "women";
type Layout = "alternate" | "classic";

const ACCENT = "#F5A623";

/* ── Layout toggle icons ──────────────────────────────────────────────────── */
function IconAlt() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="2" width="5" height="4" rx="1" fill="currentColor" opacity=".9"/>
      <rect x="9" y="2" width="5" height="4" rx="1" fill="currentColor" opacity=".4"/>
      <line x1="7.5" y1="0" x2="7.5" y2="15" stroke="currentColor" strokeWidth="1" opacity=".25"/>
      <rect x="1" y="9" width="5" height="4" rx="1" fill="currentColor" opacity=".4"/>
      <rect x="9" y="9" width="5" height="4" rx="1" fill="currentColor" opacity=".9"/>
    </svg>
  );
}
function IconClassic() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <line x1="3" y1="7.5" x2="3" y2="7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="6" y="2"  width="8" height="3.5" rx="1" fill="currentColor" opacity=".9"/>
      <rect x="6" y="8"  width="8" height="3.5" rx="1" fill="currentColor" opacity=".9"/>
      <line x1="3" y1="0" x2="3" y2="15" stroke="currentColor" strokeWidth="1" opacity=".25"/>
      <circle cx="3" cy="3.75" r="1.5" fill="currentColor"/>
      <circle cx="3" cy="9.75" r="1.5" fill="currentColor"/>
    </svg>
  );
}

/* ── Entry card (shared between both layouts) ─────────────────────────────── */
function EntryCard({
  entry,
}: {
  entry: Entry;
  side?: "left" | "right";
}) {
  return (
    <div
      className="group relative rounded-xl border transition-all duration-200 overflow-hidden"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      onMouseEnter={(el) => {
        (el.currentTarget as HTMLElement).style.borderColor = ACCENT + "55";
        (el.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${ACCENT}18, 0 4px 20px ${ACCENT}10`;
      }}
      onMouseLeave={(el) => {
        (el.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (el.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Single gold accent bar */}
      <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${ACCENT}, transparent)` }} />

      <div className="px-4 py-3">
        {/* Tournament + gender */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            {entry.tournament}
          </span>
          <span
            className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded font-semibold"
            style={{
              color:      entry.gender === "women" ? "rgba(217,70,239,0.75)" : `${ACCENT}bb`,
              background: entry.gender === "women" ? "rgba(217,70,239,0.08)" : `${ACCENT}12`,
            }}
          >
            {entry.gender}
          </span>
        </div>

        {/* Champion */}
        <div className="flex items-center gap-2 mb-1.5">
          <FlagDisplay team={entry.champion} size={18} />
          <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            {entry.champion}
          </span>
        </div>

        {/* Runner-up */}
        <p className="text-[11px] mb-1" style={{ color: "var(--text-muted)" }}>
          vs <span style={{ color: "var(--text-secondary)" }}>{entry.runnerUp}</span>
        </p>

        {/* Final result */}
        {entry.final && (
          <p className="text-[11px] leading-snug" style={{ color: "var(--text-dim)" }}>
            {entry.final}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Timeline({
  trophies,
  gender,
  team,
}: {
  trophies: Trophy[];
  gender: Gender;
  team: string | null;
}) {
  const router = useRouter();
  const [layout, setLayout] = useState<Layout>("alternate");

  const all = useMemo<Entry[]>(() => {
    const entries: Entry[] = [];
    for (const t of trophies) {
      for (const w of t.winners) {
        entries.push({
          year:       w.year,
          champion:   w.champion,
          runnerUp:   w.runnerUp,
          tournament: t.shortName,
          shortColor: t.color,
          gender:     t.gender,
          final:      w.final,
        });
      }
    }
    return entries.sort((a, b) => b.year - a.year || a.tournament.localeCompare(b.tournament));
  }, [trophies]);

  const teams = useMemo(() => {
    const src = gender === "all" ? all : all.filter((e) => e.gender === gender);
    return Array.from(new Set(src.map((e) => e.champion))).sort();
  }, [all, gender]);

  const filtered = useMemo(
    () =>
      all.filter(
        (e) =>
          (gender === "all" || e.gender === gender) &&
          (!team || e.champion === team)
      ),
    [all, gender, team]
  );

  const byYear = useMemo(() => {
    const map = new Map<number, Entry[]>();
    for (const e of filtered) {
      if (!map.has(e.year)) map.set(e.year, []);
      map.get(e.year)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [filtered]);

  function navigate(newGender: Gender, newTeam: string | null) {
    const teamSlug = newTeam ? teamToSlug(newTeam) : "all";
    router.push(`/timeline/${newGender}/${teamSlug}`);
  }

  function selectGender(g: Gender) {
    const nextTeams = g === "all" ? all : all.filter((e) => e.gender === g);
    const teamStillValid = team && nextTeams.some((e) => e.champion === team);
    navigate(g, teamStillValid ? team : null);
  }

  const pill =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150";

  return (
    <section id="timeline" className="max-w-6xl mx-auto px-5 py-16">

      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] mb-1.5 font-mono" style={{ color: "var(--text-muted)" }}>
            All-time
          </p>
          <h2 className="font-display font-bold text-2xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            Winners Timeline
          </h2>
          <p className="text-[12px] mt-1" style={{ color: "var(--text-muted)" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {team ? ` for ${team}` : ""}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Layout toggle */}
          <div
            className="flex items-center rounded-lg p-0.5 gap-0.5"
            style={{ background: "var(--bg-input)", border: "1px solid var(--border)" }}
          >
            <button
              onClick={() => setLayout("alternate")}
              title="Alternating layout"
              className="p-1.5 rounded-md transition-all"
              style={{
                background: layout === "alternate" ? "var(--bg-subtle)" : "transparent",
                color: layout === "alternate" ? "var(--text-primary)" : "var(--text-faint)",
              }}
            >
              <IconAlt />
            </button>
            <button
              onClick={() => setLayout("classic")}
              title="Classic layout"
              className="p-1.5 rounded-md transition-all"
              style={{
                background: layout === "classic" ? "var(--bg-subtle)" : "transparent",
                color: layout === "classic" ? "var(--text-primary)" : "var(--text-faint)",
              }}
            >
              <IconClassic />
            </button>
          </div>

          {/* Gender toggle */}
          <div
            className="flex items-center gap-1 rounded-xl p-1 border"
            style={{ background: "var(--bg-input)", borderColor: "var(--border)" }}
          >
            {(["all", "men", "women"] as const).map((g) => (
              <button
                key={g}
                onClick={() => selectGender(g)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: gender === g ? "var(--text-primary)" : "transparent",
                  color:      gender === g ? "var(--background)"   : "var(--text-muted)",
                  boxShadow:  gender === g ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
                }}
              >
                {g === "all" ? "All" : g === "men" ? "Men's" : "Women's"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Team filter pills ── */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => navigate(gender, null)}
          className={`${pill} ${!team ? "bg-amber-400 text-black border-amber-400" : ""}`}
          style={team !== null ? { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" } : undefined}
        >
          All teams
        </button>
        {teams.map((t) => (
          <button
            key={t}
            onClick={() => navigate(gender, team === t ? null : t)}
            className={`${pill} ${team === t ? "bg-amber-400 text-black border-amber-400" : ""}`}
            style={team !== t ? { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" } : undefined}
          >
            <FlagDisplay team={t} size={13} />
            {t}
          </button>
        ))}
      </div>

      {/* ── Empty state ── */}
      {byYear.length === 0 && (
        <div className="text-center py-16 text-sm" style={{ color: "var(--text-faint)" }}>
          No results found.
        </div>
      )}

      {/* ════════════════════════════════════════
          ALTERNATING LAYOUT
          ════════════════════════════════════════ */}
      {byYear.length > 0 && layout === "alternate" && (
        <div className="relative">
          {/* Center spine — desktop only */}
          <div
            className="hidden md:block absolute top-0 bottom-0 w-px"
            style={{ left: "50%", background: "var(--border)" }}
          />
          {/* Left spine — mobile only */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-px"
            style={{ left: 48, background: "var(--border)" }}
          />

          <div className="space-y-8">
            {byYear.map(([year, entries], groupIdx) => {
              const isLeft = groupIdx % 2 === 0;
              const label = entries.length === 1
                ? entries[0].tournament
                : `${entries.length} tournaments`;

              return (
                <div key={year} className="relative">

                  {/* ── DESKTOP: alternating ── */}
                  <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-6 items-start">

                    {/* Left column */}
                    <div className={`flex flex-col gap-2 ${isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                      {isLeft && entries.map((e, i) => (
                        <EntryCard key={i} entry={e} side="left" />
                      ))}
                    </div>

                    {/* Center: year label + dot */}
                    <div className="flex flex-col items-center gap-1 w-24 pt-1 relative z-10">
                      <div
                        className="px-4 py-1.5 rounded-full text-base font-black font-display border"
                        style={{
                          background:  "var(--bg-card)",
                          color:       "var(--text-primary)",
                          borderColor: "#F5A623",
                          boxShadow:   "0 0 12px rgba(245,166,35,0.2)",
                        }}
                      >
                        {year}
                      </div>
                      <span
                        className="w-2 h-2 rounded-full border-2 relative z-10"
                        style={{
                          background:  "var(--background)",
                          borderColor: "#F5A623",
                        }}
                      />
                      <span
                        className="text-[9px] font-mono uppercase tracking-widest text-center leading-tight"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </span>
                    </div>

                    {/* Right column */}
                    <div className={`flex flex-col gap-2 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
                      {!isLeft && entries.map((e, i) => (
                        <EntryCard key={i} entry={e} side="right" />
                      ))}
                    </div>
                  </div>

                  {/* ── MOBILE: classic single column ── */}
                  <div className="md:hidden relative">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-display font-bold text-base w-14 text-right shrink-0" style={{ color: "var(--text-primary)" }}>
                        {year}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full border-2 shrink-0 relative z-10"
                        style={{
                          background:  "var(--background)",
                          borderColor: "#F5A623",
                        }}
                      />
                      <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        {label}
                      </span>
                    </div>
                    <div className="ml-[72px] space-y-2">
                      {entries.map((e, i) => <EntryCard key={i} entry={e} />)}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════
          CLASSIC LAYOUT (original)
          ════════════════════════════════════════ */}
      {byYear.length > 0 && layout === "classic" && (
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: 48, background: "var(--border)" }}
          />
          <div className="space-y-10">
            {byYear.map(([year, entries]) => {
              const label = entries.length === 1
                ? entries[0].tournament
                : `${entries.length} tournaments`;
              return (
                <div key={year} className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-display font-bold text-base w-14 text-right shrink-0" style={{ color: "var(--text-primary)" }}>
                      {year}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full border-2 shrink-0 relative z-10"
                      style={{
                        background:  "var(--background)",
                        borderColor: "#F5A623",
                      }}
                    />
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </span>
                  </div>
                  <div className="ml-[72px] space-y-2">
                    {entries.map((e, i) => <EntryCard key={i} entry={e} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
}
