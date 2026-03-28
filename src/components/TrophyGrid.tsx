"use client";

import Link from "next/link";
import type { Trophy } from "@/lib/data";
import type { DomesticTrophy } from "@/lib/domesticData";
import TrophyIllustration from "@/components/TrophyIllustration";
import FlagDisplay from "@/components/FlagDisplay";

/* ── International card ─────────────────────────────────────────────────── */
function IntlCard({ trophy }: { trophy: Trophy }) {
  return (
    <Link
      href={`/tournaments/international/${trophy.gender}/${trophy.id}`}
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-med)",
        boxShadow: "0 0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-med)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      <div className={`relative h-36 bg-gradient-to-br ${trophy.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute -right-4 -bottom-4 opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 pointer-events-none">
          <TrophyIllustration id={trophy.id} className="w-32 h-40" />
        </div>
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
          >
            {trophy.format}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}
          >
            {trophy.winners.length} editions
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-display font-bold text-xl leading-tight tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {trophy.shortName}
        </h3>
        <p
          className="mt-2 text-[13px] leading-relaxed line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {trophy.description}
        </p>
        <div
          className="mt-4 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2.5">
            <FlagDisplay team={trophy.currentChampion} size={22} />
            <div>
              <p
                className="text-[10px] uppercase tracking-widest mb-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                Champion
              </p>
              <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                {trophy.currentChampion}
                <span className="ml-1.5 text-xs font-normal" style={{ color: "var(--text-dim)" }}>
                  {trophy.currentChampionYear}
                </span>
              </p>
            </div>
          </div>
          <span
            className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1"
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
  );
}

/* ── Domestic card ──────────────────────────────────────────────────────── */
function DomCard({ trophy }: { trophy: DomesticTrophy }) {
  return (
    <Link
      href={`/tournaments/domestic/${trophy.gender}/${trophy.id}`}
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-med)",
        boxShadow: "0 0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-med)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      <div className={`relative h-36 bg-gradient-to-br ${trophy.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-white/[0.12] group-hover:text-white/[0.18] transition-all duration-500 leading-none text-center"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            {trophy.shortName}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
          >
            {trophy.league}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}
          >
            {trophy.format}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-display font-bold text-xl leading-tight tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {trophy.shortName}
        </h3>
        <p
          className="mt-2 text-[13px] leading-relaxed line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {trophy.description}
        </p>
        <div
          className="mt-4 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-0.5"
              style={{ color: "var(--text-muted)" }}
            >
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
            className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1"
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
  );
}

/* ── Exported grids ─────────────────────────────────────────────────────── */
export function InternationalGrid({ trophies }: { trophies: Trophy[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {trophies.map((t) => <IntlCard key={t.id} trophy={t} />)}
    </div>
  );
}

export function DomesticGrid({ trophies }: { trophies: DomesticTrophy[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {trophies.map((t) => <DomCard key={t.id} trophy={t} />)}
    </div>
  );
}
