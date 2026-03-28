"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trophies } from "@/lib/data";
import { domesticTrophies } from "@/lib/domesticData";

const menIntlCount   = trophies.filter((t) => t.gender === "men").length;
const womenIntlCount = trophies.filter((t) => t.gender === "women").length;
const menDomCount    = domesticTrophies.filter((t) => t.gender === "men").length;
const womenDomCount  = domesticTrophies.filter((t) => t.gender === "women").length;

export default function TournamentNav() {
  const pathname = usePathname();

  const isIntl      = pathname.startsWith("/tournaments/international");
  const isDomestic  = pathname.startsWith("/tournaments/domestic");

  const subTabs = isIntl
    ? [
        { label: "Men's",   href: "/tournaments/international/men",   count: menIntlCount   },
        { label: "Women's", href: "/tournaments/international/women", count: womenIntlCount },
      ]
    : [
        { label: "Men's",   href: "/tournaments/domestic/men",   count: menDomCount   },
        { label: "Women's", href: "/tournaments/domestic/women", count: womenDomCount },
      ];

  return (
    <div className="flex flex-col gap-3">
      {/* ── Row 1: International | Domestic ── */}
      <div
        className="flex items-center gap-1 rounded-xl p-1 w-fit border"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        {[
          { label: "International", prefix: "/tournaments/international", defaultHref: "/tournaments/international/men"  },
          { label: "Domestic",      prefix: "/tournaments/domestic",      defaultHref: "/tournaments/domestic/men"       },
        ].map(({ label, prefix, defaultHref }) => {
          const isActive = pathname.startsWith(prefix);
          return (
            <Link
              key={prefix}
              href={defaultHref}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{
                background: isActive ? "var(--text-primary)" : "transparent",
                color:      isActive ? "var(--background)"   : "var(--text-muted)",
                boxShadow:  isActive ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* ── Row 2: Men's | Women's ── */}
      <div
        className="flex items-center gap-1 rounded-lg p-0.5 w-fit border"
        style={{ background: "var(--bg-input)", borderColor: "var(--border)" }}
      >
        {subTabs.map(({ label, href, count }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className="px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 flex items-center gap-1.5"
              style={{
                background: isActive ? "var(--bg-subtle)" : "transparent",
                color:      isActive ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              {label}
              <span
                className="text-[10px] px-1 py-0.5 rounded-full"
                style={{
                  background: isActive ? "var(--border)" : "var(--bg-card)",
                  color:      isActive ? "var(--text-primary)" : "var(--text-faint)",
                }}
              >
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
