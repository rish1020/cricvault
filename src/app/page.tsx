import { trophies } from "@/lib/data";
import Hero from "@/components/Hero";

export default function Home() {
  const totalEditions = trophies.reduce((acc, t) => acc + t.winners.length, 0);
  const menCount   = trophies.filter((t) => t.gender === "men").length;
  const womenCount = trophies.filter((t) => t.gender === "women").length;

  return (
    /* header is h-14 (56px) — remaining viewport fills here, no scroll */
    <main
      className="flex flex-col overflow-hidden"
      style={{ height: "calc(100vh - 56px)", background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Hero fills all remaining space */}
      <Hero
        trophies={trophies}
        totalEditions={totalEditions}
        menCount={menCount}
        womenCount={womenCount}
      />

      {/* Slim footer — single line, no extra height */}
      <footer
        className="shrink-0 flex items-center justify-between px-6 border-t"
        style={{
          height: 36,
          borderColor: "var(--border-faint)",
          background: "var(--background)",
        }}
      >
        <span className="font-display font-bold text-xs">
          <span style={{ color: "var(--text-primary)" }}>Cric</span>
          <span className="text-amber-400">Vault</span>
        </span>
        <p
          className="text-[10px]"
          style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}
        >
          Data accurate as of 2025 · Not affiliated with ICC
        </p>
      </footer>
    </main>
  );
}
