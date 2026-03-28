/**
 * Inline SVG flag components for ICC cricket nations.
 * All flags use viewBox="0 0 60 40" (3:2 ratio).
 * Styled with rounded corners + shadow for a premium look.
 */

import React from "react";

const BASE: React.CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle",
  borderRadius: 3,
  boxShadow: "0 1px 4px rgba(0,0,0,0.30), inset 0 0 0 0.5px rgba(0,0,0,0.10)",
  overflow: "hidden",
  flexShrink: 0,
};

function Flag({ children, w, h }: { children: React.ReactNode; w: number; h: number }) {
  return (
    <svg
      width={w} height={h}
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      style={BASE}
    >
      {children}
    </svg>
  );
}

/* ── Australia ─────────────────────────────────────────────────────────────
   Blue Ensign: dark blue, Union Jack (top-left), Commonwealth Star,
   Southern Cross (5 stars on right). */
export function Australia({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <img src="/australia.png" width={w} height={h} alt="Australia" style={BASE} />
  );
}


/* ── India ─────────────────────────────────────────────────────────────────
   PNG image from /public/india.png */
export function India({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <img src="/india.png" width={w} height={h} alt="India" style={BASE} />
  );
}


/* ── England ─────────────────────────────────────────────────────────────────
   PNG image from /public/england.png */
export function England({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/england.png" width={w} height={h} alt="England" style={BASE} />;
}

/* ── Pakistan ─────────────────────────────────────────────────────────────────
   PNG image from /public/pakistan.png */
export function Pakistan({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/pakistan.png" width={w} height={h} alt="Pakistan" style={BASE} />;
}

/* ── Sri Lanka ─────────────────────────────────────────────────────────────
   PNG image from /public/sri-lanka.png */
export function SriLanka({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <img
      src="/sri-lanka.png"
      width={w}
      height={h}
      alt="Sri Lanka"
      style={BASE}
    />
  );
}

/* ── New Zealand ─────────────────────────────────────────────────────────────
   PNG image from /public/new-zealand.png */
export function NewZealand({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/new-zealand.png" width={w} height={h} alt="New Zealand" style={BASE} />;
}

/* ── South Africa ────────────────────────────────────────────────────────────
   PNG image from /public/south-africa.png */
export function SouthAfrica({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/south-africa.png" width={w} height={h} alt="South Africa" style={BASE} />;
}

/* ── Bangladesh ──────────────────────────────────────────────────────────────
   PNG image from /public/bangladesh.png */
export function Bangladesh({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/bangladesh.png" width={w} height={h} alt="Bangladesh" style={BASE} />;
}

/* ── West Indies ─────────────────────────────────────────────────────────────
   PNG image from /public/west-indies.png */
export function WestIndies({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return <img src="/west-indies.png" width={w} height={h} alt="West Indies" style={BASE} />;
}

/* ── Zimbabwe ──────────────────────────────────────────────────────────────
   7 horizontal stripes (G/Y/R/Blk/R/Y/G), white triangle + Zimbabwe bird. */
export function Zimbabwe({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      {["#006400", "#FFD200", "#C8102E", "#000", "#C8102E", "#FFD200", "#006400"].map((c, i) => (
        <rect key={i} x="0" y={i * (40 / 7)} width="60" height={40 / 7 + 0.5} fill={c} />
      ))}
      {/* White triangle */}
      <polygon points="0,0 0,40 24,20" fill="white" />
      {/* Black triangle inset */}
      <polygon points="0,3 0,37 20,20" fill="black" />
      {/* Zimbabwe bird (simplified) */}
      <circle cx="10" cy="20" r="3.5" fill="#FFD200" />
      <polygon points="10,13 12,18 8,18" fill="#FFD200" />
    </Flag>
  );
}

/* ── Afghanistan ────────────────────────────────────────────────────────────
   Black / Red / Green vertical stripes with emblem. */
export function Afghanistan({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="20" height="40" fill="black" />
      <rect x="20" width="20" height="40" fill="#C8102E" />
      <rect x="40" width="20" height="40" fill="#007A4D" />
      {/* Simplified emblem */}
      <circle cx="30" cy="20" r="5" fill="none" stroke="white" strokeWidth="1.2" />
      <line x1="30" y1="14" x2="30" y2="26" stroke="white" strokeWidth="1" />
    </Flag>
  );
}

/* ── Ireland ────────────────────────────────────────────────────────────────
   Vertical tricolour: Green / White / Orange */
export function Ireland({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="20" height="40" fill="#169B62" />
      <rect x="20" width="20" height="40" fill="white" />
      <rect x="40" width="20" height="40" fill="#FF883E" />
    </Flag>
  );
}

/* ── Netherlands ─────────────────────────────────────────────────────────
   Horizontal: Red / White / Blue */
export function Netherlands({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#21468B" />
      <rect width="60" height="26.7" fill="white" />
      <rect width="60" height="13.3" fill="#AE1C28" />
    </Flag>
  );
}

/* ── Scotland ────────────────────────────────────────────────────────────
   Blue field with white saltire (St Andrew's Cross). */
export function Scotland({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#003F87" />
      <line x1="0" y1="0" x2="60" y2="40" stroke="white" strokeWidth="7" />
      <line x1="60" y1="0" x2="0" y2="40" stroke="white" strokeWidth="7" />
    </Flag>
  );
}

/* ── Generic fallback ─────────────────────────────────────────────────────
   Neutral grey pill with first letter of team name. */
export function GenericFlag({ team, size = 20 }: { team: string; size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={BASE}>
      <rect width="60" height="40" fill="#334155" rx="3" />
      <text x="30" y="27" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white"
        fontFamily="system-ui,sans-serif">
        {team.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

// Flag components are registered in src/lib/flagConfig.ts
