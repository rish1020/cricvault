import { trophies } from "@/lib/data";
import { InternationalGrid } from "@/components/TrophyGrid";

export const metadata = {
  title: "Women's ICC Tournaments — CricVault",
  description: "All ICC women's international cricket tournaments including the Women's Cricket World Cup, Women's T20 World Cup, and Women's U19 World Cup.",
};

export default function WomensTournamentsPage() {
  const womenTrophies = trophies.filter((t) => t.gender === "women");
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <InternationalGrid trophies={womenTrophies} />
    </section>
  );
}
