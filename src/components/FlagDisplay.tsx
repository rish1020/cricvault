import { FLAG_COMPONENTS, GenericFlag } from "@/components/flags";

export default function FlagDisplay({
  team,
  size = 18,
}: {
  team: string;
  size?: number;
}) {
  // Handle shared title
  if (team === "India / Sri Lanka") {
    const FlagA = FLAG_COMPONENTS["India"];
    const FlagB = FLAG_COMPONENTS["Sri Lanka"];
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
        <FlagA size={size} />
        <FlagB size={size} />
      </span>
    );
  }

  const FlagComp = FLAG_COMPONENTS[team];
  if (FlagComp) return <FlagComp size={size} />;

  return <GenericFlag team={team} size={size} />;
}
