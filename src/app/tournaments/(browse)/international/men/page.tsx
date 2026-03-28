import { trophies } from "@/lib/data";
import { InternationalGrid } from "@/components/TrophyGrid";

export const metadata = {
  title: "Men's ICC Tournaments — CricVault",
  description: "All ICC men's international cricket tournaments including the Cricket World Cup, T20 World Cup, Champions Trophy, and World Test Championship.",
};

export default function MensTournamentsPage() {
  const menTrophies = trophies.filter((t) => t.gender === "men");
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <InternationalGrid trophies={menTrophies} />
    </section>
  );
}
