import { trophies } from "@/lib/data";
import Timeline from "@/components/Timeline";

export const metadata = { title: "Timeline — CricVault" };

export default function TimelinePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Timeline trophies={trophies} />
    </main>
  );
}
