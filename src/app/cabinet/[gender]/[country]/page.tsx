import { notFound } from "next/navigation";
import { trophies } from "@/lib/data";
import { teamToSlug, slugToTeam } from "@/lib/teamSlug";
import TrophyShelf from "@/components/TrophyShelf";

type Gender = "all" | "men" | "women";
const VALID_GENDERS: Gender[] = ["all", "men", "women"];

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
  const genderLabel =
    gender === "men" ? "Men's" : gender === "women" ? "Women's" : "All";
  const countryLabel = countryName ?? "All Nations";

  const url = `/cabinet/${gender}/${country}`;
  const description =
    countryName
      ? `ICC trophy cabinet for ${countryName} — every World Cup and major tournament they've won in ${genderLabel.toLowerCase()} cricket.`
      : `ICC trophy medal table — ${genderLabel.toLowerCase()} cricket wins ranked by country across all major tournaments.`;

  return {
    title: `Cabinet · ${genderLabel} · ${countryLabel} — CricVault`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Cabinet · ${genderLabel} · ${countryLabel} — CricVault`,
      description,
      url,
    },
    twitter: { card: "summary_large_image" },
  };
}

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

  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <TrophyShelf
        trophies={trophies}
        gender={gender as Gender}
        country={countryName}
      />
    </main>
  );
}
