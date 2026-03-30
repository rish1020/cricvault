import { domesticTrophies } from "@/lib/domesticData";
import { DomesticGrid } from "@/components/TrophyGrid";

export const metadata = {
  title: "Women's Domestic Tournaments — CricVault",
  description: "Top women's domestic cricket tournaments including the WBBL and The Hundred Women's.",
};

export default function WomensDomesticPage() {
  const womenTrophies = domesticTrophies.filter((t) => t.gender === "women");
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <DomesticGrid trophies={womenTrophies} />
    </section>
  );
}
