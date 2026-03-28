/**
 * Convert a team display name to a URL-safe slug.
 * "West Indies" → "west-indies", "India / Sri Lanka" → "india-sri-lanka"
 */
export function teamToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")   // "India / Sri Lanka" → "india-sri-lanka"
    .replace(/\s+/g, "-")         // spaces → hyphens
    .replace(/[^a-z0-9-]/g, "")  // strip non-alphanumeric (except hyphens)
    .replace(/-+/g, "-")          // collapse multiple hyphens
    .replace(/^-|-$/g, "");       // trim leading/trailing hyphens
}

/**
 * Reverse-lookup: find the original team name from a slug.
 * Returns null for the special "all" slug.
 */
export function slugToTeam(slug: string, teams: string[]): string | null {
  if (slug === "all") return null;
  return teams.find((t) => teamToSlug(t) === slug) ?? null;
}
