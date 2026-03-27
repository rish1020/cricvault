import TrophyHolders from "@/components/TrophyHolders";

export const metadata = {
  title: "Trophy Holders — CricVault",
  description: "Current ICC champions across all international tournaments — men's and women's.",
};

export default function RecordsPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <TrophyHolders />
    </main>
  );
}
