"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
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

export default function Timeline({
  trophies,
  gender,
  team,
}: {
  trophies: Trophy[];
  gender: Gender;
  team: string | null; // null means "all teams"
}) {
  const router = useRouter();

  /* ── Flatten all winners ── */
  const all = useMemo<Entry[]>(() => {
    const entries: Entry[] = [];
    for (const t of trophies) {
      for (const w of t.winners) {
        entries.push({
          year:        w.year,
          champion:    w.champion,
          runnerUp:    w.runnerUp,
          tournament:  t.shortName,
          shortColor:  t.color,
          gender:      t.gender,
          final:       w.final,
        });
      }
    }
    return entries.sort((a, b) => b.year - a.year || a.tournament.localeCompare(b.tournament));
  }, [trophies]);

  /* ── Unique champions for the current gender filter ── */
  const teams = useMemo(() => {
    const src = gender === "all" ? all : all.filter((e) => e.gender === gender);
    return Array.from(new Set(src.map((e) => e.champion))).sort();
  }, [all, gender]);

  /* ── Apply both filters ── */
  const filtered = useMemo(
    () =>
      all.filter(
        (e) =>
          (gender === "all" || e.gender === gender) &&
          (!team || e.champion === team)
      ),
    [all, gender, team]
  );

  /* ── Group by year ── */
  const byYear = useMemo(() => {
    const map = new Map<number, Entry[]>();
    for (const e of filtered) {
      if (!map.has(e.year)) map.set(e.year, []);
      map.get(e.year)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [filtered]);

  /* ── Navigation helpers ── */
  function navigate(newGender: Gender, newTeam: string | null) {
    const teamSlug = newTeam ? teamToSlug(newTeam) : "all";
    router.push(`/timeline/${newGender}/${teamSlug}`);
  }

  function selectGender(g: Gender) {
    // When switching gender, reset team if it doesn't exist in new gender
    const nextTeams = g === "all"
      ? all
      : all.filter((e) => e.gender === g);
    const teamStillValid = team && nextTeams.some((e) => e.champion === team);
    navigate(g, teamStillValid ? team : null);
  }

  function selectTeam(t: string | null) {
    navigate(gender, t);
  }

  const pill =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150";

  return (
    <section id="timeline" className="max-w-6xl mx-auto px-5 py-16">
      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.2em] mb-1.5 font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            All-time
          </p>
          <h2
            className="font-display font-bold text-2xl tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Winners Timeline
          </h2>
          <p className="text-[12px] mt-1" style={{ color: "var(--text-muted)" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            {team ? ` for ${team}` : ""}
          </p>
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

      {/* ── Team filter pills ── */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => selectTeam(null)}
          className={`${pill} ${!team ? "bg-amber-400 text-black border-amber-400" : ""}`}
          style={
            team !== null
              ? { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" }
              : undefined
          }
        >
          All teams
        </button>
        {teams.map((t) => (
          <button
            key={t}
            onClick={() => selectTeam(team === t ? null : t)}
            className={`${pill} ${team === t ? "bg-amber-400 text-black border-amber-400" : ""}`}
            style={
              team !== t
                ? { background: "transparent", color: "var(--text-muted)", borderColor: "var(--border-med)" }
                : undefined
            }
          >
            <FlagDisplay team={t} size={13} />
            {t}
          </button>
        ))}
      </div>

      {/* ── Timeline body ── */}
      {byYear.length === 0 ? (
        <div className="text-center py-16 text-sm" style={{ color: "var(--text-faint)" }}>
          No results found.
        </div>
      ) : (
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: 48, background: "var(--border)" }}
          />

          <div className="space-y-10">
            {byYear.map(([year, entries]) => (
              <div key={year} className="relative">
                {/* Year label + dot */}
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className="font-display font-bold text-sm w-12 text-right shrink-0"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {year}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full border-2 shrink-0 relative z-10"
                    style={{
                      background:   "var(--background)",
                      borderColor:  entries.length > 1 ? "#F5A623" : "var(--text-faint)",
                    }}
                  />
                  {entries.length > 1 && (
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: "rgba(245,166,35,0.5)" }}
                    >
                      {entries.length} tournaments
                    </span>
                  )}
                </div>

                {/* Entry cards */}
                <div className="ml-[72px] space-y-2">
                  {entries.map((e, i) => (
                    <div
                      key={i}
                      className="group relative rounded-xl border transition-all duration-200"
                      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                      onMouseEnter={(el) => { (el.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)"; }}
                      onMouseLeave={(el) => { (el.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                    >
                      {/* Left accent bar */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl bg-gradient-to-b ${e.shortColor}`}
                      />

                      <div className="pl-4 pr-4 py-3 flex items-center gap-3 flex-wrap">
                        {/* Champion */}
                        <div className="flex items-center gap-2 min-w-[140px]">
                          <FlagDisplay team={e.champion} size={18} />
                          <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                            {e.champion}
                          </span>
                        </div>

                        <span style={{ color: "var(--text-ghost)" }}>·</span>

                        {/* Tournament */}
                        <span
                          className="text-sm px-2 py-0.5 rounded-md"
                          style={{ color: "var(--text-secondary)", background: "var(--bg-subtle)" }}
                        >
                          {e.tournament}
                        </span>

                        {/* Gender badge */}
                        <span
                          className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded font-semibold"
                          style={{
                            color:       e.gender === "women" ? "rgba(217,70,239,0.7)" : "rgba(245,166,35,0.6)",
                            background:  e.gender === "women" ? "rgba(217,70,239,0.08)" : "rgba(245,166,35,0.08)",
                          }}
                        >
                          {e.gender}
                        </span>
                      </div>

                      {e.final && (
                        <p className="px-4 pb-3 text-[11px] leading-snug" style={{ color: "var(--text-dim)" }}>
                          {e.final}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
