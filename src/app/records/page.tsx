import TrophyHolders from "@/components/TrophyHolders";

export const metadata = {
  title: "Trophy Holders — CricVault",
  description:
    "See who holds each ICC trophy right now — current champions for the Cricket World Cup, T20 World Cup, Champions Trophy, World Test Championship and all women's tournaments.",
  alternates: { canonical: "/records" },
  openGraph: {
    title: "Trophy Holders — CricVault",
    description:
      "See who holds each ICC trophy right now — current champions for the Cricket World Cup, T20 World Cup, Champions Trophy, World Test Championship and all women's tournaments.",
    url: "/records",
  },
  twitter: { card: "summary_large_image" },
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
