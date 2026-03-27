/**
 * Stylised SVG illustrations of real ICC trophy designs.
 * Each is loosely based on the actual physical trophy.
 */

type Props = { className?: string };

/* ─── Cricket World Cup ─────────────────────────────────────────────────────
   Three silver stumps rising from a base, supporting a golden globe.         */
export function CricketWorldCupTrophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="cwc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#C8860A" />
        </linearGradient>
        <linearGradient id="cwc-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        <radialGradient id="cwc-globe" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE566" />
          <stop offset="100%" stopColor="#C8860A" />
        </radialGradient>
      </defs>
      {/* Base plate */}
      <rect x="15" y="148" width="90" height="8" rx="4" fill="url(#cwc-silver)" />
      <rect x="25" y="141" width="70" height="10" rx="3" fill="url(#cwc-silver)" />
      {/* Three stumps */}
      <rect x="30" y="72" width="10" height="72" rx="5" fill="url(#cwc-silver)" />
      <rect x="55" y="60" width="10" height="84" rx="5" fill="url(#cwc-silver)" />
      <rect x="80" y="72" width="10" height="72" rx="5" fill="url(#cwc-silver)" />
      {/* Bails on stumps */}
      <rect x="27" y="69" width="16" height="4" rx="2" fill="url(#cwc-gold)" />
      <rect x="52" y="57" width="16" height="4" rx="2" fill="url(#cwc-gold)" />
      <rect x="77" y="69" width="16" height="4" rx="2" fill="url(#cwc-gold)" />
      {/* Globe body */}
      <circle cx="60" cy="40" r="32" fill="url(#cwc-globe)" />
      {/* Globe latitude lines */}
      <ellipse cx="60" cy="40" rx="32" ry="10" stroke="#C8860A" strokeWidth="1" fill="none" opacity="0.5" />
      <ellipse cx="60" cy="40" rx="32" ry="20" stroke="#C8860A" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Globe longitude lines */}
      <line x1="60" y1="8" x2="60" y2="72" stroke="#C8860A" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="12" x2="85" y2="68" stroke="#C8860A" strokeWidth="1" opacity="0.3" />
      <line x1="85" y1="12" x2="35" y2="68" stroke="#C8860A" strokeWidth="1" opacity="0.3" />
      {/* Shine */}
      <circle cx="50" cy="28" r="8" fill="white" opacity="0.18" />
      {/* Globe outline */}
      <circle cx="60" cy="40" r="32" stroke="#C8860A" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ─── T20 World Cup ─────────────────────────────────────────────────────────
   Modern dynamic trophy: wide flared top, angular handles, raised globe top. */
export function T20WorldCupTrophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="t20-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C0C8E0" />
          <stop offset="100%" stopColor="#6B7A9F" />
        </linearGradient>
        <linearGradient id="t20-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <radialGradient id="t20-sphere" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="100%" stopColor="#3730A3" />
        </radialGradient>
      </defs>
      {/* Base */}
      <rect x="20" y="148" width="80" height="8" rx="4" fill="url(#t20-body)" />
      <rect x="28" y="140" width="64" height="10" rx="3" fill="url(#t20-body)" />
      {/* Stem */}
      <rect x="52" y="100" width="16" height="42" rx="6" fill="url(#t20-body)" />
      {/* Cup body — wide, flared */}
      <path d="M22 100 Q22 70 38 60 L82 60 Q98 70 98 100 Z" fill="url(#t20-body)" />
      {/* Inner cup shadow */}
      <path d="M35 98 Q35 72 46 64 L74 64 Q85 72 85 98 Z" fill="url(#t20-accent)" opacity="0.3" />
      {/* Handles */}
      <path d="M22 90 Q8 85 10 72 Q12 60 24 62" stroke="url(#t20-body)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M98 90 Q112 85 110 72 Q108 60 96 62" stroke="url(#t20-body)" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Globe on top */}
      <circle cx="60" cy="42" r="26" fill="url(#t20-sphere)" />
      <ellipse cx="60" cy="42" rx="26" ry="8" stroke="#818CF8" strokeWidth="1" fill="none" opacity="0.5" />
      <ellipse cx="60" cy="42" rx="26" ry="16" stroke="#818CF8" strokeWidth="1" fill="none" opacity="0.3" />
      <line x1="60" y1="16" x2="60" y2="68" stroke="#818CF8" strokeWidth="1" opacity="0.4" />
      <circle cx="60" cy="42" r="26" stroke="#4F46E5" strokeWidth="1.5" fill="none" />
      {/* Shine */}
      <circle cx="51" cy="32" r="7" fill="white" opacity="0.15" />
      {/* "T20" text hint — small lightning bolt */}
      <path d="M64 30 L57 44 L63 44 L56 58" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

/* ─── Champions Trophy ──────────────────────────────────────────────────────
   Classic chalice with two curved handles and a stepped base.               */
export function ChampionsTrophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="ct-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="ct-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Base — stepped */}
      <rect x="18" y="148" width="84" height="8" rx="4" fill="url(#ct-gold)" />
      <rect x="26" y="140" width="68" height="10" rx="3" fill="url(#ct-body)" />
      <rect x="36" y="132" width="48" height="10" rx="2" fill="url(#ct-body)" />
      {/* Stem */}
      <rect x="53" y="95" width="14" height="38" rx="5" fill="url(#ct-body)" />
      {/* Knop (stem decoration) */}
      <ellipse cx="60" cy="108" rx="10" ry="7" fill="url(#ct-gold)" />
      {/* Cup bowl */}
      <path d="M28 95 Q20 68 30 50 Q40 34 60 30 Q80 34 90 50 Q100 68 92 95 Z" fill="url(#ct-body)" />
      {/* Inner bowl highlight */}
      <path d="M38 93 Q32 70 40 54 Q48 40 60 37 Q72 40 80 54 Q88 70 82 93 Z" fill="url(#ct-body)" opacity="0.5" />
      <ellipse cx="60" cy="95" rx="32" ry="6" fill="url(#ct-gold)" opacity="0.6" />
      {/* Handles */}
      <path d="M28 80 Q14 72 16 58 Q18 46 30 50" stroke="url(#ct-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M92 80 Q106 72 104 58 Q102 46 90 50" stroke="url(#ct-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Shine */}
      <ellipse cx="47" cy="55" rx="8" ry="14" fill="white" opacity="0.12" transform="rotate(-15 47 55)" />
      {/* Rim */}
      <path d="M28 95 Q20 68 30 50 Q40 34 60 30 Q80 34 90 50 Q100 68 92 95" stroke="#065F46" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ─── World Test Championship Mace ─────────────────────────────────────────
   A long scepter: cricket-stump handle, laurel band, gold globe on top.     */
export function WTCMace({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="wtc-silver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4D4D8" />
          <stop offset="50%" stopColor="#F4F4F5" />
          <stop offset="100%" stopColor="#A1A1AA" />
        </linearGradient>
        <linearGradient id="wtc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <radialGradient id="wtc-globe" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>
      </defs>
      {/* Handle / stump-shaped staff */}
      <rect x="54" y="70" width="12" height="82" rx="5" fill="url(#wtc-silver)" />
      {/* Stump notch details */}
      <rect x="52" y="110" width="16" height="4" rx="2" fill="url(#wtc-gold)" opacity="0.8" />
      <rect x="52" y="125" width="16" height="4" rx="2" fill="url(#wtc-gold)" opacity="0.8" />
      <rect x="52" y="140" width="16" height="4" rx="2" fill="url(#wtc-gold)" opacity="0.8" />
      {/* Laurel band around handle top */}
      <rect x="50" y="68" width="20" height="8" rx="4" fill="url(#wtc-gold)" />
      {/* Small decorative ring */}
      <ellipse cx="60" cy="72" rx="14" ry="4" stroke="#92400E" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Neck widening to globe */}
      <path d="M54 68 Q48 55 38 48 Q46 40 60 36 Q74 40 82 48 Q72 55 66 68 Z" fill="url(#wtc-silver)" />
      {/* Globe head */}
      <circle cx="60" cy="28" r="26" fill="url(#wtc-globe)" />
      {/* Cricket ball seam on globe */}
      <path d="M60 4 Q72 16 72 28 Q72 40 60 52" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M60 4 Q48 16 48 28 Q48 40 60 52" stroke="#92400E" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Latitude line */}
      <ellipse cx="60" cy="28" rx="26" ry="8" stroke="#92400E" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Globe outline */}
      <circle cx="60" cy="28" r="26" stroke="#B45309" strokeWidth="1.5" fill="none" />
      {/* Shine */}
      <circle cx="50" cy="18" r="8" fill="white" opacity="0.18" />
    </svg>
  );
}

/* ─── Women's World Cup ─────────────────────────────────────────────────────
   Elegant wide trophy with floral/petal motif on the bowl rim.              */
export function WomensWorldCupTrophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="wwc-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
        <linearGradient id="wwc-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Base */}
      <rect x="18" y="148" width="84" height="8" rx="4" fill="url(#wwc-gold)" />
      <rect x="28" y="138" width="64" height="12" rx="3" fill="url(#wwc-body)" />
      {/* Stem */}
      <rect x="54" y="98" width="12" height="42" rx="5" fill="url(#wwc-body)" />
      {/* Stem knop */}
      <ellipse cx="60" cy="112" rx="11" ry="7" fill="url(#wwc-gold)" />
      {/* Wide cup bowl */}
      <path d="M20 98 Q14 72 24 52 Q36 32 60 28 Q84 32 96 52 Q106 72 100 98 Z" fill="url(#wwc-body)" />
      {/* Inner lighter area */}
      <path d="M34 96 Q28 74 36 56 Q46 38 60 35 Q74 38 84 56 Q92 74 86 96 Z" fill="white" opacity="0.08" />
      {/* Petal / floral accents on rim */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg, i) => (
        <ellipse
          key={i}
          cx={60 + 40 * Math.cos((deg * Math.PI) / 180)}
          cy={98 + 6 * Math.sin((deg * Math.PI) / 180)}
          rx="5"
          ry="3"
          fill="url(#wwc-gold)"
          opacity="0.7"
          transform={`rotate(${deg} ${60 + 40 * Math.cos((deg * Math.PI) / 180)} ${98 + 6 * Math.sin((deg * Math.PI) / 180)})`}
        />
      ))}
      {/* Rim */}
      <ellipse cx="60" cy="98" rx="40" ry="6" fill="url(#wwc-gold)" opacity="0.5" />
      {/* Handles */}
      <path d="M20 82 Q6 74 8 60 Q10 48 22 52" stroke="url(#wwc-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M100 82 Q114 74 112 60 Q110 48 98 52" stroke="url(#wwc-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Shine */}
      <ellipse cx="42" cy="58" rx="7" ry="16" fill="white" opacity="0.14" transform="rotate(-15 42 58)" />
    </svg>
  );
}

/* ─── Women's T20 World Cup ─────────────────────────────────────────────────
   Sleek modern cup, violet with star-burst base.                             */
export function WomensT20Trophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="wt20-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
        <linearGradient id="wt20-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Star-burst base */}
      {[0, 30, 60, 90, 120, 150].map((deg, i) => (
        <line
          key={i}
          x1="60" y1="152"
          x2={60 + 36 * Math.cos(((deg - 90) * Math.PI) / 180)}
          y2={152 + 10 * Math.sin(((deg - 90) * Math.PI) / 180)}
          stroke="url(#wt20-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
      ))}
      <ellipse cx="60" cy="152" rx="36" ry="6" fill="url(#wt20-gold)" opacity="0.4" />
      <rect x="30" y="146" width="60" height="8" rx="4" fill="url(#wt20-body)" />
      {/* Stem */}
      <rect x="54" y="102" width="12" height="46" rx="5" fill="url(#wt20-body)" />
      {/* Cup body */}
      <path d="M24 102 Q18 78 28 58 Q38 38 60 34 Q82 38 92 58 Q102 78 96 102 Z" fill="url(#wt20-body)" />
      {/* Inner */}
      <path d="M36 100 Q30 80 38 62 Q46 44 60 41 Q74 44 82 62 Q90 80 84 100 Z" fill="white" opacity="0.08" />
      {/* Rim band */}
      <ellipse cx="60" cy="102" rx="36" ry="5" fill="url(#wt20-gold)" opacity="0.5" />
      {/* Handles */}
      <path d="M24 88 Q10 80 12 66 Q14 54 26 58" stroke="url(#wt20-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M96 88 Q110 80 108 66 Q106 54 94 58" stroke="url(#wt20-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Star on cup face */}
      <path d="M60 52 L63 61 L73 61 L65 67 L68 76 L60 70 L52 76 L55 67 L47 61 L57 61 Z" fill="url(#wt20-gold)" opacity="0.5" />
      {/* Shine */}
      <ellipse cx="44" cy="62" rx="6" ry="14" fill="white" opacity="0.14" transform="rotate(-15 44 62)" />
    </svg>
  );
}

/* ─── U-19 World Cup ────────────────────────────────────────────────────────
   Classic rising-arc trophy with a cricket ball finial on top.              */
export function U19Trophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="u19-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="u19-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="u19-ball" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </radialGradient>
      </defs>
      {/* Base */}
      <rect x="20" y="148" width="80" height="8" rx="4" fill="url(#u19-gold)" />
      <rect x="30" y="138" width="60" height="12" rx="3" fill="url(#u19-body)" />
      {/* Stem */}
      <rect x="55" y="100" width="10" height="40" rx="4" fill="url(#u19-body)" />
      {/* Cup */}
      <path d="M26 100 Q20 76 30 56 Q40 36 60 32 Q80 36 90 56 Q100 76 94 100 Z" fill="url(#u19-body)" />
      <path d="M38 98 Q32 78 40 60 Q48 42 60 39 Q72 42 80 60 Q88 78 82 98 Z" fill="white" opacity="0.07" />
      {/* Rim */}
      <ellipse cx="60" cy="100" rx="34" ry="5" fill="url(#u19-gold)" opacity="0.5" />
      {/* Handles — upward arching */}
      <path d="M26 86 Q10 76 12 62 Q14 50 28 56" stroke="url(#u19-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M94 86 Q110 76 108 62 Q106 50 92 56" stroke="url(#u19-body)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Cricket ball finial on top */}
      <circle cx="60" cy="22" r="16" fill="url(#u19-ball)" />
      <path d="M60 6 Q68 14 68 22 Q68 30 60 38" stroke="#7F1D1D" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M60 6 Q52 14 52 22 Q52 30 60 38" stroke="#7F1D1D" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="60" cy="22" r="16" stroke="#7F1D1D" strokeWidth="1.5" fill="none" />
      <circle cx="53" cy="15" r="5" fill="white" opacity="0.2" />
      {/* "19" text on ball */}
      <text x="60" y="27" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" opacity="0.6" fontFamily="sans-serif">19</text>
    </svg>
  );
}

/* ─── Women's U-19 T20 World Cup ────────────────────────────────────────────
   Slender elegant cup with ribbon/laurel detail, fuchsia palette.           */
export function WomensU19Trophy({ className }: Props) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className}>
      <defs>
        <linearGradient id="wu19-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0ABFC" />
          <stop offset="50%" stopColor="#D946EF" />
          <stop offset="100%" stopColor="#701A75" />
        </linearGradient>
        <linearGradient id="wu19-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Base */}
      <rect x="20" y="148" width="80" height="8" rx="4" fill="url(#wu19-gold)" />
      <rect x="30" y="138" width="60" height="12" rx="3" fill="url(#wu19-body)" />
      {/* Slender stem */}
      <rect x="56" y="100" width="8" height="40" rx="4" fill="url(#wu19-body)" />
      {/* Stem ribbon knop */}
      <ellipse cx="60" cy="116" rx="12" ry="5" fill="url(#wu19-gold)" opacity="0.7" />
      {/* Slender elegant cup */}
      <path d="M30 100 Q24 78 32 58 Q42 38 60 34 Q78 38 88 58 Q96 78 90 100 Z" fill="url(#wu19-body)" />
      <path d="M40 98 Q36 80 42 62 Q50 44 60 41 Q70 44 78 62 Q84 80 80 98 Z" fill="white" opacity="0.07" />
      {/* Rim band */}
      <ellipse cx="60" cy="100" rx="30" ry="5" fill="url(#wu19-gold)" opacity="0.5" />
      {/* Handles */}
      <path d="M30 84 Q16 76 18 64 Q20 54 30 58" stroke="url(#wu19-body)" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M90 84 Q104 76 102 64 Q100 54 90 58" stroke="url(#wu19-body)" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Flower / bloom finial on top */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx={60 + 12 * Math.cos((deg * Math.PI) / 180)}
          cy={28 + 12 * Math.sin((deg * Math.PI) / 180)}
          rx="6"
          ry="4"
          fill="url(#wu19-gold)"
          opacity="0.7"
          transform={`rotate(${deg} ${60 + 12 * Math.cos((deg * Math.PI) / 180)} ${28 + 12 * Math.sin((deg * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="60" cy="28" r="7" fill="url(#wu19-gold)" />
      <circle cx="60" cy="28" r="3" fill="white" opacity="0.5" />
    </svg>
  );
}

/* ─── Router ────────────────────────────────────────────────────────────────
   Pick the right illustration by trophy ID.                                 */
export default function TrophyIllustration({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "cricket-world-cup":
      return <CricketWorldCupTrophy className={className} />;
    case "t20-world-cup":
      return <T20WorldCupTrophy className={className} />;
    case "champions-trophy":
      return <ChampionsTrophy className={className} />;
    case "world-test-championship":
      return <WTCMace className={className} />;
    case "womens-world-cup":
      return <WomensWorldCupTrophy className={className} />;
    case "womens-t20-world-cup":
      return <WomensT20Trophy className={className} />;
    case "u19-world-cup":
      return <U19Trophy className={className} />;
    case "womens-u19-world-cup":
      return <WomensU19Trophy className={className} />;
    default:
      return <CricketWorldCupTrophy className={className} />;
  }
}
