"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trophies } from "@/lib/data";
import { domesticTrophies } from "@/lib/domesticData";

const menCount    = trophies.filter((t) => t.gender === "men").length;
const womenCount  = trophies.filter((t) => t.gender === "women").length;
const domCount    = domesticTrophies.length;

const TABS = [
  { label: "Men's",    href: "/tournaments/international/men",    count: menCount   },
  { label: "Women's",  href: "/tournaments/international/women",  count: womenCount },
  { label: "Domestic", href: "/tournaments/domestic",             count: domCount   },
];

export default function TournamentNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* International pill group */}
      <div
        className="flex items-center gap-1 rounded-xl p-1 border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        {TABS.slice(0, 2).map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center gap-1.5"
              style={{
                background:  isActive ? "var(--text-primary)" : "transparent",
                color:       isActive ? "var(--background)"   : "var(--text-muted)",
                boxShadow:   isActive ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
              }}
            >
              {tab.label}
              <span
                className="text-[11px] font-normal px-1.5 py-0.5 rounded-full"
                style={{
                  background: isActive ? "rgba(255,255,255,0.18)" : "var(--bg-card)",
                  color:      isActive ? "var(--background)"       : "var(--text-faint)",
                }}
              >
                {tab.count}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <span style={{ color: "var(--border-strong)", fontSize: 18, userSelect: "none" }}>|</span>

      {/* Domestic tab */}
      {(() => {
        const tab     = TABS[2];
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            href={tab.href}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150"
            style={{
              background:  isActive ? "var(--text-primary)" : "var(--bg-card)",
              borderColor: isActive ? "transparent"         : "var(--border)",
              color:       isActive ? "var(--background)"   : "var(--text-muted)",
              boxShadow:   isActive ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
            }}
          >
            {tab.label}
            <span
              className="text-[11px] font-normal px-1.5 py-0.5 rounded-full"
              style={{
                background: isActive ? "rgba(255,255,255,0.18)" : "var(--bg-card)",
                color:      isActive ? "var(--background)"       : "var(--text-faint)",
              }}
            >
              {tab.count}
            </span>
          </Link>
        );
      })()}
    </div>
  );
}
