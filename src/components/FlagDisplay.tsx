import { FLAG_MAP, GenericFlag } from "@/lib/flagConfig";

export default function FlagDisplay({
  team,
  size = 18,
}: {
  team: string;
  size?: number;
}) {
  // Handle shared title
  if (team === "India / Sri Lanka") {
    const FlagA = FLAG_MAP["India"];
    const FlagB = FLAG_MAP["Sri Lanka"];
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
        <FlagA size={size} />
        <FlagB size={size} />
      </span>
    );
  }

  const FlagComp = FLAG_MAP[team];
  if (FlagComp) return <FlagComp size={size} />;

  return <GenericFlag team={team} size={size} />;
}
