"use client";
import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const MoonIcon = () => (
  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("cricvault-theme") as Theme) ?? "dark";
    apply(saved);
  }, []);

  function apply(t: Theme) {
    setTheme(t);
    localStorage.setItem("cricvault-theme", t);
    document.documentElement.setAttribute("data-theme", t);
    document.body.removeAttribute("data-theme");
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => apply(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      className="hidden sm:flex items-center relative"
      style={{
        width: 118,
        height: 32,
        borderRadius: 999,
        padding: 3,
        background: "var(--bg-input)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {/* Sliding thumb */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 3,
          left: isDark ? 3 : "calc(50% + 1px)",
          width: "calc(50% - 4px)",
          height: "calc(100% - 6px)",
          borderRadius: 999,
          background: "linear-gradient(135deg, #F5A623 0%, #FFD166 100%)",
          boxShadow: "0 0 12px rgba(245,166,35,0.35)",
          transition: "left 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Dark label */}
      <span
        className="flex items-center justify-center gap-1 flex-1 relative z-10 text-[11px] font-semibold select-none"
        style={{
          color: isDark ? "#000" : "var(--text-muted)",
          transition: "color 0.2s",
        }}
      >
        <MoonIcon />
        Dark
      </span>

      {/* Light label */}
      <span
        className="flex items-center justify-center gap-1 flex-1 relative z-10 text-[11px] font-semibold select-none"
        style={{
          color: !isDark ? "#000" : "var(--text-muted)",
          transition: "color 0.2s",
        }}
      >
        <SunIcon />
        Light
      </span>
    </button>
  );
}
