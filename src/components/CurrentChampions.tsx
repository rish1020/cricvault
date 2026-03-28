"use client";

import Link from "next/link";
import { trophies } from "@/lib/data";
import FlagDisplay from "@/components/FlagDisplay";

const FEATURED = [
  { id: "cricket-world-cup",       accent: "#f59e0b", format: "ODI" },
  { id: "t20-world-cup",           accent: "#6366f1", format: "T20I" },
  { id: "champions-trophy",        accent: "#10b981", format: "ODI" },
  { id: "world-test-championship", accent: "#64748b", format: "Test" },
] as const;

export default function CurrentChampions() {
  const cards = FEATURED.map(({ id, accent, format }) => {
    const trophy = trophies.find((t) => t.id === id);
    if (!trophy) return null;
    const current = trophy.winners[0]; // sorted most-recent first
    return { trophy, current, accent, format };
  }).filter(Boolean) as NonNullable<{
    trophy: (typeof trophies)[number];
    current: (typeof trophies)[number]["winners"][number];
    accent: string;
    format: string;
  }>[];

  return (
    <section
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-5">
        {/* Label */}
        <p
          className="text-[10px] uppercase tracking-[0.22em] mb-4 font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          Men's Current Champions
        </p>

        {/* 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {cards.map(({ trophy, current, accent, format }) => (
            <Link
              key={trophy.id}
              href={`/tournaments/international/men/${trophy.id}`}
              className="group relative rounded-xl border overflow-hidden transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-med)",
              }}
              onMouseEnter={(el) => {
                (el.currentTarget as HTMLElement).style.borderColor = accent + "55";
                (el.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accent}22, 0 4px 16px ${accent}14`;
              }}
              onMouseLeave={(el) => {
                (el.currentTarget as HTMLElement).style.borderColor = "var(--border-med)";
                (el.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Coloured top accent bar */}
              <div className="h-[3px] w-full" style={{ background: accent }} />

              <div className="px-4 py-3">
                {/* Tournament name + format badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <p
                    className="text-[11px] font-semibold leading-snug truncate pr-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {trophy.shortName}
                  </p>
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0"
                    style={{
                      background: accent + "18",
                      color: accent,
                    }}
                  >
                    {format}
                  </span>
                </div>

                {/* Champion flag + name */}
                <div className="flex items-center gap-2 mb-1">
                  <FlagDisplay team={current.champion} size={20} />
                  <span
                    className="font-bold text-sm leading-tight truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {current.champion}
                  </span>
                </div>

                {/* Year */}
                <p
                  className="text-[10px] font-mono mt-0.5"
                  style={{ color: "var(--text-dim)" }}
                >
                  since {current.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
