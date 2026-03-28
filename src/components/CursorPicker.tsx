"use client";

import { useState, useEffect, useRef } from "react";

type CursorMode = "default" | "ball" | "bat";

/** Standard arrow cursor outline — used as the "Default" preview */
function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d="M3 1L3 14L6.5 10.5L8.8 16.2L11 15.3L8.7 9.5L14 9.5Z"
        fill="currentColor"
        opacity="0.75"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OPTIONS: { id: CursorMode; label: string; img?: string }[] = [
  { id: "default", label: "Default" },
  { id: "ball",    label: "Ball",    img: "/cursor-ball.png" },
  { id: "bat",     label: "Bat",     img: "/cursor-bat.png"  },
];

export default function CursorPicker() {
  const [mode, setMode] = useState<CursorMode>("ball");
  const [open, setOpen] = useState(false);
  const ref            = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem("cricvault-cursor") as CursorMode | null) ?? "ball";
    apply(saved);
  }, []);

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
      {/* ── Trigger ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden sm:flex items-center gap-1.5 h-8 px-3 rounded-lg border text-[12px] transition-all"
        style={{
          background: open ? "var(--bg-subtle)" : "var(--bg-input)",
          borderColor: open ? "var(--border-strong)" : "var(--border)",
          color: "var(--text-body)",
        }}
        aria-label="Change cursor style"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {/* Current cursor preview */}
        {current.img ? (
          <img src={current.img} width={16} height={16} alt={current.label} style={{ imageRendering: "pixelated" }} />
        ) : (
          <ArrowIcon size={14} />
        )}
        <span className="hidden lg:block">Cursor</span>
        <svg
          aria-hidden="true"
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ── Dropdown ── */}
      {open && (
        <div
          role="listbox"
          aria-label="Cursor style"
          className="absolute right-0 top-10 rounded-xl border overflow-hidden z-50"
          style={{
            width: 148,
            background: "var(--header-bg-solid)",
            borderColor: "var(--border-med)",
            backdropFilter: "blur(20px)",
          }}
        >
          <p
            className="text-[9px] uppercase tracking-widest px-3 pt-2.5 pb-1.5"
            style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}
          >
            Cursor style
          </p>

          {OPTIONS.map((opt) => {
            const active = mode === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => apply(opt.id)}
                role="option"
                aria-selected={active}
                aria-label={opt.label}
                className="w-full flex items-center gap-2.5 py-2 text-sm transition-colors"
                style={{
                  paddingLeft: 10,
                  paddingRight: 12,
                  background: active ? "rgba(245,166,35,0.07)" : "transparent",
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                  borderLeft: active ? "2.5px solid #F5A623" : "2.5px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "var(--bg-input)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {/* Cursor image preview */}
                <span className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
                  {opt.img ? (
                    <img src={opt.img} width={20} height={20} alt={opt.label} style={{ imageRendering: "pixelated", opacity: active ? 1 : 0.55 }} />
                  ) : (
                    <ArrowIcon size={17} />
                  )}
                </span>
                <span className="font-medium text-[13px]">{opt.label}</span>
              </button>
            );
          })}
          <div className="h-2" />
        </div>
      )}
    </div>
  );
}
