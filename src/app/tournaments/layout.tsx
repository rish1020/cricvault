import TournamentNav from "@/components/TournamentNav";

export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ── Page header ── */}
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-0">
        <p
          className="text-[10px] uppercase tracking-[0.22em] mb-2"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}
        >
          ICC · CricVault
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
          <h1
            className="font-display font-bold text-3xl tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Tournaments
          </h1>
        </div>
        <p className="mt-1 mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
          Browse ICC and domestic tournaments · Select any for full history
        </p>

        {/* ── Navigation tabs ── */}
        <TournamentNav />
      </div>

      {/* ── Page-specific content ── */}
      {children}

      {/* ── Footer ── */}
      <footer
        className="border-t py-8 px-5 mt-4"
        style={{ borderColor: "var(--border-faint)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span
              className="font-display font-bold text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              Cric
            </span>
            <span className="font-display font-bold text-sm text-amber-400">Vault</span>
          </div>
          <p
            className="text-[11px]"
            style={{ color: "var(--text-faint)", fontFamily: "var(--font-geist-mono)" }}
          >
            Data accurate as of 2025 · Not affiliated with ICC
          </p>
        </div>
      </footer>
    </main>
  );
}
