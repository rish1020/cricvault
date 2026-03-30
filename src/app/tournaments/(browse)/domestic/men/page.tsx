import { domesticTrophies } from "@/lib/domesticData";
import { DomesticGrid } from "@/components/TrophyGrid";

export const metadata = {
  title: "Men's Domestic Tournaments — CricVault",
  description: "Top men's domestic cricket tournaments including the IPL, BBL, PSL, The Hundred, and CPL.",
};

export default function MensDomesticPage() {
  const menTrophies = domesticTrophies.filter((t) => t.gender === "men");
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <DomesticGrid trophies={menTrophies} />
    </section>
  );
}
