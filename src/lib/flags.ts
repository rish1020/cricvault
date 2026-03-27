/**
 * Shared flag emoji map for all cricket nations that appear in ICC tournament data.
 * West Indies uses a custom SVG flag component — see WestIndiesFlag in flags.tsx.
 */
export const FLAGS: Record<string, string> = {
  // Full ICC member nations
  Australia: "🇦🇺",
  India: "🇮🇳",
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Pakistan: "🇵🇰",
  "Sri Lanka": "🇱🇰",
  "New Zealand": "🇳🇿",
  "South Africa": "🇿🇦",
  "West Indies": "🏝️", // fallback emoji; use <WestIndiesFlag> component for full render
  Bangladesh: "🇧🇩",
  Zimbabwe: "🇿🇼",
  Afghanistan: "🇦🇫",
  Ireland: "🇮🇪",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Netherlands: "🇳🇱",
  Kenya: "🇰🇪",
  Namibia: "🇳🇦",
  "Papua New Guinea": "🇵🇬",
  Nepal: "🇳🇵",
  Oman: "🇴🇲",
  UAE: "🇦🇪",
  "United Arab Emirates": "🇦🇪",
  USA: "🇺🇸",
  "United States": "🇺🇸",
  Canada: "🇨🇦",

  // Special / shared entries
  "India / Sri Lanka": "🇮🇳🇱🇰",
};

/**
 * Returns the flag emoji for a given team name.
 * Falls back to 🏏 if the team isn't in the map.
 */
export function getFlag(team: string): string {
  return FLAGS[team] ?? "🏏";
}
