"use client";

import Link from "next/link";
import { useState } from "react";
import { trophies } from "@/lib/data";
import FlagDisplay from "@/components/FlagDisplay";

const MEN_IDS = [
  "cricket-world-cup",
  "t20-world-cup",
  "champions-trophy",
  "world-test-championship",
  "u19-world-cup",
];
const WOMEN_IDS = [
  "womens-world-cup",
  "womens-t20-world-cup",
  "womens-u19-world-cup",
];

// First colour class from each trophy's gradient — used for the header accent
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

const PREVIEW_ROWS = 5;

function HoldersTable({ ids, label }: { ids: string[]; label: string }) {
  const [expanded, setExpanded] = useState(false);

  const cols = ids
    .map((id) => trophies.find((t) => t.id === id))
    .filter(Boolean) as typeof trophies;

  const maxEditions = Math.max(...cols.map((t) => t.winners.length));
  const visibleRows  = expanded ? maxEditions : Math.min(PREVIEW_ROWS, maxEditions);

  const gridCols = `repeat(${cols.length}, 1fr)`;

  return (
    <div className="mb-10">
      {/* Section label */}
      <p
        className="text-[10px] uppercase tracking-[0.22em] mb-3"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
      >
        {label}
      </p>

      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "var(--border-med)" }}
      >
        {/* ── Column headers ── */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: gridCols,
            background: "var(--bg-card)",
          }}
        >
          {cols.map((trophy, i) => (
            <div
              key={trophy.id}
              className="relative flex flex-col justify-end px-4 pt-4 pb-3"
              style={{
                borderRight: i < cols.length - 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              {/* Coloured top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-sm"
                style={{ background: ACCENT[trophy.id] ?? "#f59e0b" }}
              />
              <p
                className="text-[11px] font-semibold leading-snug mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                {trophy.shortName}
              </p>
              <p
                className="text-[9px] mt-0.5 font-mono uppercase tracking-wider"
                style={{ color: "var(--text-faint)" }}
              >
                {trophy.format === "ODI (50 overs)" ? "ODI 50"
                  : trophy.format === "T20I" ? "T20I"
                  : "Test"}
              </p>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── Edition rows ── */}
        {Array.from({ length: visibleRows }, (_, rowIdx) => {
          const isCurrent = rowIdx === 0;
          return (
            <div
              key={rowIdx}
              className="grid"
              style={{
                gridTemplateColumns: gridCols,
                borderBottom: rowIdx < visibleRows - 1
                  ? "1px solid var(--border-faint)"
                  : undefined,
                background: isCurrent ? "var(--bg-subtle)" : undefined,
              }}
            >
              {cols.map((trophy, colIdx) => {
                const w = trophy.winners[rowIdx];
                return (
                  <Link
                    key={trophy.id}
                    href={`/tournaments/international/${trophy.gender}/${trophy.id}`}
                    className="hover-row group flex items-center gap-2.5 px-4 py-3 transition-colors"
                    style={{
                      borderRight: colIdx < cols.length - 1
                        ? "1px solid var(--border-faint)"
                        : undefined,
                    }}
                  >
                    {w ? (
                      <>
                        <FlagDisplay team={w.champion} size={18} />
                        <div className="min-w-0">
                          <p
                            className="text-xs font-semibold leading-none truncate"
                            style={{
                              color: isCurrent
                                ? "var(--text-primary)"
                                : "var(--text-secondary)",
                            }}
                          >
                            {w.champion}
                          </p>
                          <p
                            className="text-[10px] mt-1 font-mono"
                            style={{ color: "var(--text-faint)" }}
                          >
                            {w.year}
                          </p>
                        </div>
                      </>
                    ) : (
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-faint)" }}
                      >
                        —
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          );
        })}

        {/* ── Show more / less ── */}
        {maxEditions > PREVIEW_ROWS && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-2.5 text-[11px] font-semibold transition-colors border-t hover-row flex items-center justify-center gap-1.5"
            style={{
              borderColor: "var(--border-faint)",
              color: "var(--text-muted)",
            }}
          >
            {expanded ? (
              <>Show less <span style={{ fontSize: 10 }}>↑</span></>
            ) : (
              <>{maxEditions - PREVIEW_ROWS} more editions <span style={{ fontSize: 10 }}>↓</span></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function TrophyHolders() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <p
          className="text-[10px] uppercase tracking-[0.22em] mb-2"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
        >
          ICC · International
        </p>
        <h1
          className="font-display font-bold tracking-tight leading-none mb-2"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "var(--text-primary)" }}
        >
          Trophy Holders
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
          All-time winners across ICC international tournaments.
        </p>
      </div>

      <HoldersTable ids={MEN_IDS} label="Men's" />
      <HoldersTable ids={WOMEN_IDS} label="Women's" />
    </section>
  );
}
