import { domesticTrophies } from "@/lib/domesticData";
import { DomesticGrid } from "@/components/TrophyGrid";

export const metadata = {
  title: "Domestic Tournaments — CricVault",
  description: "Top domestic cricket tournaments including the IPL, BBL, PSL, CPL and more.",
};

export default function DomesticTournamentsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <DomesticGrid trophies={domesticTrophies} />
    </section>
  );
}
