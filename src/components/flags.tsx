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
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#00008B"/>
      {/* Union Jack — top-left quadrant (0,0)→(30,20) */}
      {/* White saltire */}
      <line x1="0" y1="0"  x2="30" y2="20" stroke="white" strokeWidth="5"/>
      <line x1="30" y1="0" x2="0"  y2="20" stroke="white" strokeWidth="5"/>
      {/* Red saltire (narrower, offset half-side) */}
      <line x1="0"  y1="0"  x2="30" y2="20" stroke="#C8102E" strokeWidth="3"/>
      <line x1="30" y1="0"  x2="0"  y2="20" stroke="#C8102E" strokeWidth="3"/>
      {/* White cross */}
      <rect x="0"  y="7.5"  width="30" height="5"  fill="white"/>
      <rect x="12.5" y="0"  width="5"  height="20" fill="white"/>
      {/* Red cross */}
      <rect x="0"    y="8.5" width="30" height="3"  fill="#C8102E"/>
      <rect x="13.5" y="0"   width="3"  height="20" fill="#C8102E"/>
      {/* Commonwealth Star — bottom-left (7-pointed, simplified as circle+rays) */}
      <circle cx="7.5" cy="30" r="3.5" fill="white"/>
      {/* Southern Cross — 5 stars right side */}
      <circle cx="42" cy="9"  r="2.2" fill="white"/>
      <circle cx="50" cy="16" r="1.6" fill="white"/>
      <circle cx="45" cy="22" r="2.2" fill="white"/>
      <circle cx="38" cy="22" r="1.2" fill="white"/>
      <circle cx="36" cy="14" r="2.2" fill="white"/>
    </Flag>
  );
}

/* ── India ─────────────────────────────────────────────────────────────────
   Saffron / White / Green horizontal tricolour + navy Ashoka Chakra. */
export function India({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#FF9933"/>
      <rect y="13.3" width="60" height="13.4" fill="white"/>
      <rect y="26.7" width="60" height="13.3" fill="#138808"/>
      {/* Ashoka Chakra — navy wheel */}
      <circle cx="30" cy="20" r="5.5" fill="none" stroke="#000080" strokeWidth="1.2"/>
      <circle cx="30" cy="20" r="1"   fill="#000080"/>
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i * 360) / 24;
        const rad = (a * Math.PI) / 180;
        const x1 = 30 + 1.2 * Math.cos(rad);
        const y1 = 20 + 1.2 * Math.sin(rad);
        const x2 = 30 + 5.2 * Math.cos(rad);
        const y2 = 20 + 5.2 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000080" strokeWidth="0.5"/>;
      })}
    </Flag>
  );
}

/* ── England ───────────────────────────────────────────────────────────────
   St George's Cross — white field, bold red cross. */
export function England({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="white"/>
      <rect x="0"  y="14" width="60" height="12" fill="#C8102E"/>
      <rect x="24" y="0"  width="12" height="40" fill="#C8102E"/>
    </Flag>
  );
}

/* ── Pakistan ──────────────────────────────────────────────────────────────
   White hoist stripe, dark-green fly with white crescent + star. */
export function Pakistan({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#01411C"/>
      <rect width="15" height="40" fill="white"/>
      {/* Crescent */}
      <circle cx="35" cy="20" r="8"   fill="white"/>
      <circle cx="38" cy="20" r="6.5" fill="#01411C"/>
      {/* Five-pointed star */}
      <polygon
        points="46,14 47.5,19 52,19 48.5,22 50,27 46,24 42,27 43.5,22 40,19 44.5,19"
        fill="white" transform="scale(0.6) translate(31,14)"
      />
    </Flag>
  );
}

/* ── Sri Lanka ─────────────────────────────────────────────────────────────
   Gold border, saffron + green stripes left, maroon field with golden lion. */
export function SriLanka({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      {/* Gold outer border */}
      <rect width="60" height="40" fill="#F5AB00"/>
      {/* Orange stripe */}
      <rect x="4" y="4" width="8"  height="32" fill="#FF7300"/>
      {/* Green stripe */}
      <rect x="12" y="4" width="8" height="32" fill="#00534E"/>
      {/* Maroon main field */}
      <rect x="20" y="4" width="36" height="32" fill="#8D153A"/>
      {/* Simplified lion outline */}
      <ellipse cx="38" cy="22" rx="7" ry="6" fill="#F5AB00" opacity="0.9"/>
      <circle  cx="38" cy="15" r="4" fill="#F5AB00" opacity="0.9"/>
      {/* Bo leaves — four corner decorations */}
      <circle cx="23" cy="8"  r="2" fill="#F5AB00"/>
      <circle cx="53" cy="8"  r="2" fill="#F5AB00"/>
      <circle cx="23" cy="32" r="2" fill="#F5AB00"/>
      <circle cx="53" cy="32" r="2" fill="#F5AB00"/>
    </Flag>
  );
}

/* ── New Zealand ───────────────────────────────────────────────────────────
   Blue Ensign with Union Jack top-left, 4 red Southern Cross stars. */
export function NewZealand({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#00247D"/>
      {/* Union Jack — top-left (0,0)→(30,20) */}
      <line x1="0" y1="0"  x2="30" y2="20" stroke="white"   strokeWidth="5"/>
      <line x1="30" y1="0" x2="0"  y2="20" stroke="white"   strokeWidth="5"/>
      <line x1="0"  y1="0" x2="30" y2="20" stroke="#C8102E" strokeWidth="3"/>
      <line x1="30" y1="0" x2="0"  y2="20" stroke="#C8102E" strokeWidth="3"/>
      <rect x="0"    y="7.5"  width="30" height="5"  fill="white"/>
      <rect x="12.5" y="0"    width="5"  height="20" fill="white"/>
      <rect x="0"    y="8.5"  width="30" height="3"  fill="#C8102E"/>
      <rect x="13.5" y="0"    width="3"  height="20" fill="#C8102E"/>
      {/* Southern Cross — 4 red stars with white border */}
      {[[42,8],[52,14],[46,22],[38,20]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="3.2" fill="white"/>
          <circle cx={cx} cy={cy} r="2.2" fill="#C8102E"/>
        </g>
      ))}
    </Flag>
  );
}

/* ── South Africa ──────────────────────────────────────────────────────────
   Y-pall flag: red upper-right, blue lower-right, green central pall,
   thin white separators, gold/yellow & black hoist triangle. */
export function SouthAfrica({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      {/* Red upper-right quadrilateral */}
      <polygon points="0,0 60,0 60,13 0,20"   fill="#E03C31"/>
      {/* Blue lower-right quadrilateral */}
      <polygon points="0,40 60,40 60,27 0,20"  fill="#002395"/>
      {/* Green central Y-pall from left vertex to right edge (y 13→27) */}
      <polygon points="0,20 60,13 60,27"        fill="#007A4D"/>
      {/* White thin border — red / green */}
      <polygon points="0,20 60,11.5 60,13"      fill="white"/>
      {/* White thin border — green / blue */}
      <polygon points="0,20 60,27 60,28.5"      fill="white"/>
      {/* Gold / yellow triangle — wider than black */}
      <polygon points="0,0 0,40 22,20"          fill="#FFB81C"/>
      {/* Black triangle — hoist side */}
      <polygon points="0,0 0,40 14,20"          fill="#000000"/>
    </Flag>
  );
}

/* ── Bangladesh ────────────────────────────────────────────────────────────
   Green field, red disc slightly left of centre. */
export function Bangladesh({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#006A4E"/>
      <circle cx="27" cy="20" r="10" fill="#F42A41"/>
    </Flag>
  );
}

/* ── West Indies ───────────────────────────────────────────────────────────
   Maroon field, proportionate gold shield with stumps & crown. */
export function WestIndies({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#6B0C2E"/>
      {/* Gold shield — centred, shield-shaped (pointed bottom) */}
      <path d="M30 7 L41 12 L41 23 Q41 33 30 36 Q19 33 19 23 L19 12 Z"
            fill="#FFD700" stroke="#C8A000" strokeWidth="0.8"/>
      {/* Crown above shield */}
      <path d="M23 10 L25 7 L30 9.5 L35 7 L37 10 Z" fill="#FFD700" stroke="#C8A000" strokeWidth="0.4"/>
      <rect x="23" y="9.5" width="14" height="2" rx="0.5" fill="#FFD700"/>
      {/* Three stumps (maroon on gold, equally spaced) */}
      <rect x="24.5" y="17" width="2.5" height="13" rx="0.8" fill="#6B0C2E"/>
      <rect x="28.75" y="15.5" width="2.5" height="14.5" rx="0.8" fill="#6B0C2E"/>
      <rect x="33" y="17" width="2.5" height="13" rx="0.8" fill="#6B0C2E"/>
      {/* Bails */}
      <rect x="23.5" y="16" width="5"   height="1.5" rx="0.5" fill="#6B0C2E"/>
      <rect x="27.5" y="14.5" width="5" height="1.5" rx="0.5" fill="#6B0C2E"/>
      <rect x="32"   y="16" width="5"   height="1.5" rx="0.5" fill="#6B0C2E"/>
    </Flag>
  );
}

/* ── Zimbabwe ──────────────────────────────────────────────────────────────
   7 horizontal stripes (G/Y/R/Blk/R/Y/G), white triangle + Zimbabwe bird. */
export function Zimbabwe({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      {["#006400","#FFD200","#C8102E","#000","#C8102E","#FFD200","#006400"].map((c,i) => (
        <rect key={i} x="0" y={i * (40/7)} width="60" height={40/7 + 0.5} fill={c}/>
      ))}
      {/* White triangle */}
      <polygon points="0,0 0,40 24,20" fill="white"/>
      {/* Black triangle inset */}
      <polygon points="0,3 0,37 20,20" fill="black"/>
      {/* Zimbabwe bird (simplified) */}
      <circle cx="10" cy="20" r="3.5" fill="#FFD200"/>
      <polygon points="10,13 12,18 8,18" fill="#FFD200"/>
    </Flag>
  );
}

/* ── Afghanistan ────────────────────────────────────────────────────────────
   Black / Red / Green vertical stripes with emblem. */
export function Afghanistan({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="20" height="40" fill="black"/>
      <rect x="20" width="20" height="40" fill="#C8102E"/>
      <rect x="40" width="20" height="40" fill="#007A4D"/>
      {/* Simplified emblem */}
      <circle cx="30" cy="20" r="5" fill="none" stroke="white" strokeWidth="1.2"/>
      <line x1="30" y1="14" x2="30" y2="26" stroke="white" strokeWidth="1"/>
    </Flag>
  );
}

/* ── Ireland ────────────────────────────────────────────────────────────────
   Vertical tricolour: Green / White / Orange */
export function Ireland({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="20" height="40" fill="#169B62"/>
      <rect x="20" width="20" height="40" fill="white"/>
      <rect x="40" width="20" height="40" fill="#FF883E"/>
    </Flag>
  );
}

/* ── Netherlands ─────────────────────────────────────────────────────────
   Horizontal: Red / White / Blue */
export function Netherlands({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#21468B"/>
      <rect width="60" height="26.7" fill="white"/>
      <rect width="60" height="13.3" fill="#AE1C28"/>
    </Flag>
  );
}

/* ── Scotland ────────────────────────────────────────────────────────────
   Blue field with white saltire (St Andrew's Cross). */
export function Scotland({ size = 20 }: { size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <Flag w={w} h={h}>
      <rect width="60" height="40" fill="#003F87"/>
      <line x1="0" y1="0"  x2="60" y2="40" stroke="white" strokeWidth="7"/>
      <line x1="60" y1="0" x2="0"  y2="40" stroke="white" strokeWidth="7"/>
    </Flag>
  );
}

/* ── Generic fallback ─────────────────────────────────────────────────────
   Neutral grey pill with first letter of team name. */
export function GenericFlag({ team, size = 20 }: { team: string; size?: number }) {
  const w = Math.round(size * 1.5), h = size;
  return (
    <svg width={w} height={h} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={BASE}>
      <rect width="60" height="40" fill="#334155" rx="3"/>
      <text x="30" y="27" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white"
            fontFamily="system-ui,sans-serif">
        {team.slice(0,2).toUpperCase()}
      </text>
    </svg>
  );
}

/* ── Registry ────────────────────────────────────────────────────────────── */
type FC = ({ size }: { size?: number }) => React.ReactElement;

export const FLAG_COMPONENTS: Record<string, FC> = {
  Australia,
  India,
  England,
  Pakistan,
  "Sri Lanka":   SriLanka,
  "New Zealand": NewZealand,
  "South Africa":SouthAfrica,
  "West Indies": WestIndies,
  Bangladesh,
  Zimbabwe,
  Afghanistan,
  Ireland,
  Netherlands,
  Scotland,
};
