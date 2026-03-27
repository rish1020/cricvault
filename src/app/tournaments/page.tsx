import { trophies } from "@/lib/data";
import { domesticTrophies } from "@/lib/domesticData";
import TrophyTabs from "@/components/TrophyTabs";

export const metadata = { title: "Tournaments — CricVault" };

export default function TournamentsPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-0">
        <p
          className="text-[10px] uppercase tracking-[0.22em] mb-2"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
        >
          ICC · International
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="font-display font-bold text-3xl tracking-tight" style={{ color: "var(--text-primary)" }}>
            Tournaments
          </h1>
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-semibold border"
              style={{
                background: "rgba(245,166,35,0.08)",
                borderColor: "rgba(245,166,35,0.2)",
                color: "rgba(245,166,35,0.8)",
              }}
            >
              International
            </span>
          </div>
        </div>
        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
          Browse ICC and domestic tournaments · Select any for full history
        </p>
      </div>

      <TrophyTabs trophies={trophies} domesticTrophies={domesticTrophies} />

      <footer
        className="border-t py-8 px-5 mt-4"
        style={{ borderColor: "var(--border-faint)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>Cric</span>
            <span className="font-display font-bold text-sm text-amber-400">Vault</span>
          </div>
          <p className="text-[11px]" style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}>
            Data accurate as of 2025 · Not affiliated with ICC
          </p>
        </div>
      </footer>
    </main>
  );
}
