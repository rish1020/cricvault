import { notFound } from "next/navigation";
import { trophies } from "@/lib/data";
import { teamToSlug, slugToTeam } from "@/lib/teamSlug";
import TrophyShelf from "@/components/TrophyShelf";

type Gender = "all" | "men" | "women";
const VALID_GENDERS: Gender[] = ["all", "men", "women"];

/* ── helpers ───────────────────────────────────────────────────────── */
function getCountryStats(countryName: string, gender: Gender) {
  const relevant = gender === "all" ? trophies : trophies.filter((t) => t.gender === gender);
  const wins = relevant.map((t) => ({
    trophy: t.shortName,
    id: t.id,
    years: t.winners.filter((w) => w.champion === countryName).map((w) => w.year),
  })).filter((t) => t.years.length > 0);
  const total = wins.reduce((s, t) => s + t.years.length, 0);
  return { wins, total };
}

function getAllNationsRanking(gender: Gender) {
  const relevant = gender === "all" ? trophies : trophies.filter((t) => t.gender === gender);
  const allTeams = Array.from(new Set(relevant.flatMap((t) => t.winners.map((w) => w.champion))));
  return allTeams
    .map((team) => ({
      team,
      total: relevant.reduce((s, t) => s + t.winners.filter((w) => w.champion === team).length, 0),
    }))
    .filter((r) => r.total > 0)
    .sort((a, b) => b.total - a.total);
}

/* ── static params ──────────────────────────────────────────────────── */
export function generateStaticParams() {
  const genders: Gender[] = ["all", "men", "women"];
  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );

  const params: { gender: string; country: string }[] = [];

  for (const g of genders) {
    params.push({ gender: g, country: "all" });

    const relevantTeams =
      g === "all"
        ? allTeams
        : Array.from(
            new Set(
              trophies
                .filter((t) => t.gender === g)
                .flatMap((t) => t.winners.map((w) => w.champion))
            )
          );

    for (const team of relevantTeams) {
      params.push({ gender: g, country: teamToSlug(team) });
    }
  }

  return params;
}

/* ── metadata ───────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ gender: string; country: string }>;
}) {
  const { gender, country } = await params;
  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );
  const countryName = slugToTeam(country, allTeams);
  const gLabel = gender === "men" ? "Men's" : gender === "women" ? "Women's" : "";

  let title: string;
  let description: string;

  if (countryName) {
    const { wins, total } = getCountryStats(countryName, gender as Gender);
    const trophyList = wins.map((w) => w.trophy).join(", ");
    title = `${countryName} ICC Titles (${total}) — ${gLabel} Trophy Cabinet — CricVault`;
    description = `${countryName} have won ${total} ICC ${gLabel.toLowerCase()} cricket title${total !== 1 ? "s" : ""}, including the ${trophyList}. See the full breakdown by tournament and year.`;
  } else {
    const ranking = getAllNationsRanking(gender as Gender);
    const top3 = ranking.slice(0, 3).map((r) => `${r.team} (${r.total})`).join(", ");
    title = `Which Country Has Won Most ICC Titles? — ${gLabel || "All"} Cricket Trophy Table — CricVault`;
    description = `All-time ICC ${gLabel.toLowerCase()} cricket trophy rankings by country. ${top3} lead the table. Full breakdown across every major ICC tournament.`;
  }

  const url = `/cabinet/${gender}/${country}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" },
  };
}

/* ── page ───────────────────────────────────────────────────────────── */
export default async function CabinetRoute({
  params,
}: {
  params: Promise<{ gender: string; country: string }>;
}) {
  const { gender, country } = await params;

  if (!VALID_GENDERS.includes(gender as Gender)) notFound();

  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );

  const countryName = country === "all" ? null : slugToTeam(country, allTeams);
  if (country !== "all" && countryName === null) notFound();

  const g = gender as Gender;
  const gLabel = g === "men" ? "Men's" : g === "women" ? "Women's" : "";

  /* ── server-rendered SEO intro text ── */
  let seoHeading: string;
  let seoBody: string;

  if (countryName) {
    const { wins, total } = getCountryStats(countryName, g);
    const trophyLines = wins
      .map((w) => `${w.years.length} ${w.trophy} (${w.years.sort((a, b) => b - a).join(", ")})`)
      .join("; ");
    seoHeading = `${countryName} ${gLabel} ICC Titles`;
    seoBody = `${countryName} have won ${total} ICC ${gLabel.toLowerCase()} cricket title${total !== 1 ? "s" : ""} in total: ${trophyLines}.`;
  } else {
    const ranking = getAllNationsRanking(g);
    const leader = ranking[0];
    const top5 = ranking.slice(0, 5).map((r, i) => `${i + 1}. ${r.team} — ${r.total} title${r.total !== 1 ? "s" : ""}`).join("; ");
    seoHeading = `Which Country Has Won the Most ICC ${gLabel} Cricket Titles?`;
    seoBody = `${leader.team} lead the all-time ICC ${gLabel.toLowerCase()} cricket trophy table with ${leader.total} titles. Top 5: ${top5}.`;
  }

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Server-rendered SEO text — visible to Google and real users */}
      <div className="sr-seo max-w-6xl mx-auto px-5 pt-6 pb-0">
        <h2
          className="text-xs font-semibold mb-1"
          style={{ color: "var(--text-muted)", letterSpacing: "0.01em" }}
        >
          {seoHeading}
        </h2>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-faint)" }}
        >
          {seoBody}
        </p>
      </div>

      <TrophyShelf
        trophies={trophies}
        gender={g}
        country={countryName}
      />
    </main>
  );
}
