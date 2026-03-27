"use client";

import { useState, useEffect, useRef } from "react";

type CursorMode = "default" | "ball" | "bat";

const OPTIONS: { id: CursorMode; label: string; emoji: string }[] = [
  { id: "default", label: "Default", emoji: "🖱️" },
  { id: "ball",    label: "Ball",    emoji: "🔴" },
  { id: "bat",     label: "Bat",     emoji: "🏏" },
];

export default function CursorPicker() {
  const [mode, setMode]     = useState<CursorMode>("ball");
  const [open, setOpen]     = useState(false);
  const ref                 = useRef<HTMLDivElement>(null);

  /* Load saved preference, default to ball */
  useEffect(() => {
    const saved = (localStorage.getItem("cricvault-cursor") as CursorMode | null) ?? "ball";
    apply(saved);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function apply(m: CursorMode) {
    setMode(m);
    setOpen(false);
    localStorage.setItem("cricvault-cursor", m);
    if (m === "default") {
      document.body.removeAttribute("data-cursor");
    } else {
      document.body.setAttribute("data-cursor", m);
    }
  }

  const current = OPTIONS.find((o) => o.id === mode)!;

  return (
    <div ref={ref} className="relative">
      {/* Trigger pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden sm:flex items-center gap-1.5 h-8 px-3 rounded-lg border text-[12px] transition-all"
        style={{
          background: open ? "var(--bg-subtle)" : "var(--bg-input)",
          borderColor: open ? "var(--border-strong)" : "var(--border)",
          color: "var(--text-body)",
        }}
        title="Change cursor"
      >
        <span>{current.emoji}</span>
        <span className="hidden lg:block">{current.label}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-10 w-36 rounded-xl border overflow-hidden z-50"
          style={{ background: "var(--header-bg-solid)", borderColor: "var(--border-med)", backdropFilter: "blur(20px)" }}
        >
          <p className="text-[9px] uppercase tracking-widest px-3 pt-2.5 pb-1.5"
            style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}>
            Cursor style
          </p>
          {OPTIONS.map((opt) => {
            const active = mode === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => apply(opt.id)}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors"
                style={{
                  background: active ? "var(--bg-subtle)" : "transparent",
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "var(--bg-input)"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <span className="text-base leading-none">{opt.emoji}</span>
                <span className="font-medium">{opt.label}</span>
                {active && (
                  <svg className="ml-auto" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            );
          })}
          <div className="h-2" />
        </div>
      )}
    </div>
  );
}
