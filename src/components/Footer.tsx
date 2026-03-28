export default function Footer() {
  return (
    <footer
      className="sticky bottom-0 z-50 flex items-center justify-between px-6 border-t"
      style={{
        height: 36,
        borderColor: "var(--border-header)",
        background: "var(--header-bg)",
        backdropFilter: "blur(20px) saturate(180%)",
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
        Data accurate as of 2026 · Not affiliated with ICC
      </p>
    </footer>
  );
}
