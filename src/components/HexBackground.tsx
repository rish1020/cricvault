/**
 * Honeycomb SVG background.
 * Pure CSS hover — no JS state, no re-renders.
 * Each hex pops up (translateY + scale + glow) on hover.
 */

const R = 32; // circumradius px
const H = Math.sqrt(3) * R; // row height ≈ 55.4
const COL_STEP = R * 1.5; // horizontal step = 48

/** Pointy-top hex: vertices at 30°, 90°, 150°, 210°, 270°, 330° */
function pts(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

export default function HexBackground({
  cols = 30,
  rows = 14,
  opacity = 1,
}: {
  cols?: number;
  rows?: number;
  opacity?: number;
}) {
  const svgW = cols * COL_STEP + R * 2;
  const svgH = rows * H + H;

  const hexes: { id: string; cx: number; cy: number }[] = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      hexes.push({
        id: `${c}-${r}`,
        cx: c * COL_STEP + R,
        cy: r * H + (c % 2 === 1 ? H / 2 : 0) + H / 2,
      });
    }
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${svgW.toFixed(0)} ${svgH.toFixed(0)}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ opacity }}
    >
      <style>{`
        .hx {
          fill: var(--hex-fill);
          stroke: var(--hex-stroke);
          stroke-width: 1;
          transition: fill 0.22s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1), filter 0.28s ease;
          transform-box: fill-box;
          transform-origin: center;
          pointer-events: all;
        }
        .hx:hover {
          fill: rgba(245,166,35,0.22);
          transform: scale(1.18) translateY(-6px);
          filter: drop-shadow(0 8px 20px rgba(245,166,35,0.45));
          cursor: default !important;
        }
      `}</style>
      {hexes.map(({ id, cx, cy }) => (
        <polygon key={id} className="hx" points={pts(cx, cy, R - 1.5)} />
      ))}
    </svg>
  );
}
