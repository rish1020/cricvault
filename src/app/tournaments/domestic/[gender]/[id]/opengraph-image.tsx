import { ImageResponse } from "next/og";
import { domesticTrophies } from "@/lib/domesticData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CricVault Tournament";

export default function OgImage({
  params,
}: {
  params: { gender: string; id: string };
}) {
  const trophy = domesticTrophies.find((t) => t.id === params.id);
  const name = trophy?.name ?? "Domestic Tournament";
  const champion = trophy?.currentChampion ?? "";
  const year = trophy?.currentChampionYear ?? "";
  const league = trophy?.league ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1c1c1c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px 96px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Logo + category */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
          <span style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
            🏆 CricVault
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 18 }}>·</span>
          <span style={{ fontSize: 18, color: "rgba(255,255,255,0.4)" }}>
            Domestic · {league}
          </span>
        </div>

        {/* Tournament name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          {name}
        </div>

        {/* Current champion */}
        {champion && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.3)",
              borderRadius: 12,
              padding: "12px 24px",
            }}
          >
            <span style={{ color: "#F5A623", fontSize: 18, fontWeight: 700 }}>
              Current Champion
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 16 }}>·</span>
            <span style={{ color: "#ffffff", fontSize: 20, fontWeight: 700 }}>
              {champion}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>
              {year}
            </span>
          </div>
        )}

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #F5A623, #FFD166, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
