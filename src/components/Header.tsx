"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CursorPicker from "@/components/CursorPicker";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { label: "Home",        href: "/" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Timeline",    href: "/timeline" },
  { label: "Records",     href: "/records" },
  { label: "About",       href: "/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 select-none">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F5A623" fillOpacity="0.12" />
          <rect width="32" height="32" rx="8" stroke="#F5A623" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M11 9h10v7a5 5 0 01-10 0V9z" stroke="#F5A623" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
          <path d="M8 9h3M21 9h3" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M8 9c0 3 2 5 3 5M24 9c0 3-2 5-3 5" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M16 21v3M13 24h6" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-display text-[17px] font-bold tracking-tight leading-none">
        <span style={{ color: "var(--text-primary)" }}>Cric</span>
        <span className="text-amber-400">Vault</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/tournaments") return pathname === "/tournaments" || pathname.startsWith("/trophy/") || pathname.startsWith("/domestic");
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="border-b"
        style={{
          background: "var(--header-bg)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderColor: "var(--border-header)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.label}
                  href={n.href}
                  className="px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-150"
                  style={{
                    color: active ? "var(--text-primary)" : "var(--text-muted)",
                    background: active ? "var(--bg-subtle)" : "transparent",
                  }}
                >
                  {n.label}
                  {active && (
                    <span className="ml-2 inline-block w-1 h-1 rounded-full bg-amber-400 align-middle" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <CursorPicker />
            <button
              className="hidden sm:flex items-center gap-2 h-8 px-3 rounded-lg border text-[12px] transition-all"
              style={{
                background: "var(--bg-input)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span className="hidden lg:block">Search</span>
              <kbd
                className="hidden lg:block ml-1 text-[10px] px-1 py-0.5 rounded"
                style={{ color: "var(--text-muted)", background: "var(--bg-subtle)" }}
              >
                ⌘K
              </kbd>
            </button>
            <button className="h-8 px-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-[12px] font-bold transition-colors">
              Sign up
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg transition-all"
              style={{ color: "var(--text-muted)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {open
                  ? <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  : <path d="M3 5.5h12M3 9h12M3 12.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-b px-5 py-4 flex flex-col gap-0.5"
          style={{
            background: "var(--header-bg-solid)",
            backdropFilter: "blur(20px)",
            borderColor: "var(--border-header)",
          }}
        >
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-lg transition-all flex items-center gap-2"
                style={{
                  color: active ? "var(--text-primary)" : "var(--text-muted)",
                  background: active ? "var(--bg-subtle)" : "transparent",
                }}
              >
                {active && <span className="w-1 h-1 rounded-full bg-amber-400" />}
                {n.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
