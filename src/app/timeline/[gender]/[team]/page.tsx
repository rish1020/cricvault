import { notFound } from "next/navigation";
import { trophies } from "@/lib/data";
import { teamToSlug, slugToTeam } from "@/lib/teamSlug";
import Timeline from "@/components/Timeline";

type Gender = "all" | "men" | "women";
const VALID_GENDERS: Gender[] = ["all", "men", "women"];

/* ── Static params for most common routes ── */
export function generateStaticParams() {
  // Collect all champion names across all trophies
  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );

  const params: { gender: string; team: string }[] = [];

  for (const g of VALID_GENDERS) {
    // /timeline/<gender>/all
    params.push({ gender: g, team: "all" });

    // /timeline/<gender>/<team>
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
      params.push({ gender: g, team: teamToSlug(team) });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gender: string; team: string }>;
}) {
  const { gender, team } = await params;
  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );
  const teamName = slugToTeam(team, allTeams);
  const genderLabel =
    gender === "men" ? "Men's" : gender === "women" ? "Women's" : "All";
  const teamLabel = teamName ?? "All Teams";

  return {
    title: `Timeline · ${genderLabel} · ${teamLabel} — CricVault`,
    description: `ICC cricket winners timeline filtered by ${genderLabel.toLowerCase()} tournaments and ${teamLabel}.`,
  };
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ gender: string; team: string }>;
}) {
  const { gender, team } = await params;

  // Validate gender segment
  if (!VALID_GENDERS.includes(gender as Gender)) notFound();

  // Collect all champion names to resolve the team slug
  const allTeams = Array.from(
    new Set(trophies.flatMap((t) => t.winners.map((w) => w.champion)))
  );

  // "all" is the wildcard; anything else must match a known team slug
  const teamName = team === "all" ? null : slugToTeam(team, allTeams);
  if (team !== "all" && teamName === null) notFound();

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <Timeline
        trophies={trophies}
        gender={gender as Gender}
        team={teamName}
      />
    </main>
  );
}
