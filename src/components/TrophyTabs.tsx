"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Trophy } from "@/lib/data";
import type { DomesticTrophy } from "@/lib/domesticData";
import TrophyIllustration from "@/components/TrophyIllustration";
import FlagDisplay from "@/components/FlagDisplay";

type Category = "international" | "domestic";
type Gender   = "men" | "women";

const SESSION_KEY = "cricvault-tournaments-tab";

function saveSession(category: Category, gender: Gender) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ category, gender })); } catch {}
}
function loadSession(): { category: Category; gender: Gender } {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { category: "international", gender: "men" };
}

export default function TrophyTabs({
  trophies,
  domesticTrophies,
}: {
  trophies: Trophy[];
  domesticTrophies: DomesticTrophy[];
}) {
  const [category, setCategory] = useState<Category>("international");
  const [gender,   setGender]   = useState<Gender>("men");

  /* Restore last selection from sessionStorage on mount */
  useEffect(() => {
    const saved = loadSession();
    setCategory(saved.category);
    setGender(saved.gender);
  }, []);

  function selectCategory(c: Category) {
    setCategory(c);
    saveSession(c, gender);
  }
  function selectGender(g: Gender) {
    setGender(g);
    saveSession(category, g);
  }

  const filtered = trophies.filter((t) => t.gender === gender);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      {/* ── Top-level tabs: International | Domestic ── */}
      <div
        className="flex items-center gap-1 rounded-xl p-1 w-fit mb-6 border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        {(["international", "domestic"] as Category[]).map((cat) => {
          const isActive = category === cat;
          const count = cat === "domestic" ? domesticTrophies.length : trophies.length;
          return (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center gap-2"
              style={{
                background: isActive ? "var(--text-primary)" : "transparent",
                color: isActive ? "var(--background)" : "var(--text-muted)",
                boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
              }}
            >
              {cat === "international" ? "International" : "Domestic"}
              <span
                className="text-xs font-normal px-1.5 py-0.5 rounded-full"
                style={{
                  background: isActive ? "var(--bg-subtle)" : "var(--bg-card)",
                  color: isActive ? "var(--background)" : "var(--text-faint)",
                  opacity: isActive ? 0.6 : 1,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Sub-tabs: Men's | Women's (only for International) ── */}
      {category === "international" && (
        <div
          className="flex items-center gap-1 rounded-lg p-0.5 w-fit mb-8 border"
          style={{ background: "var(--bg-input)", borderColor: "var(--border)" }}
        >
          {(["men", "women"] as Gender[]).map((g) => {
            const isActive = gender === g;
            const count = trophies.filter((t) => t.gender === g).length;
            return (
              <button
                key={g}
                onClick={() => selectGender(g)}
                className="px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 flex items-center gap-1.5"
                style={{
                  background: isActive ? "var(--bg-subtle)" : "transparent",
                  color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                }}
              >
                {g === "men" ? "Men's" : "Women's"}
                <span
                  className="text-[10px] px-1 py-0.5 rounded-full"
                  style={{
                    background: isActive ? "var(--border)" : "var(--bg-card)",
                    color: isActive ? "var(--text-primary)" : "var(--text-faint)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── Card grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {category === "international" ? filtered.map((trophy) => (
          <Link
            key={trophy.id}
            href={`/trophy/${trophy.id}`}
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}>
                  {trophy.format}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}>
                  {trophy.winners.length} editions
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-display font-bold text-xl leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
                {trophy.shortName}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                {trophy.description}
              </p>
              <div className="mt-4 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center gap-2.5">
                  <FlagDisplay team={trophy.currentChampion} size={22} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>Champion</p>
                    <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                      {trophy.currentChampion}
                      <span className="ml-1.5 text-xs font-normal" style={{ color: "var(--text-dim)" }}>{trophy.currentChampionYear}</span>
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1"
                  style={{ color: "var(--text-secondary)" }}>
                  History
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )) : domesticTrophies.map((trophy) => (
          <Link
            key={trophy.id}
            href={`/domestic/${trophy.id}`}
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
                <span className="font-display font-black text-white/[0.12] group-hover:text-white/[0.18] transition-all duration-500 leading-none text-center"
                  style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                  {trophy.shortName}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}>
                  {trophy.league}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.5)" }}>
                  {trophy.format}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-display font-bold text-xl leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
                {trophy.shortName}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                {trophy.description}
              </p>
              <div className="mt-4 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>Champion</p>
                  <p className="text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                    {trophy.currentChampion}
                    <span className="ml-1.5 text-xs font-normal" style={{ color: "var(--text-dim)" }}>{trophy.currentChampionYear}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1"
                  style={{ color: "var(--text-secondary)" }}>
                  History
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
