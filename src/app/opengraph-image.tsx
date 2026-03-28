import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CricVault — Every Trophy. Every Champion.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Amber gradient accent — top right */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(245,166,35,0.15)",
              border: "1px solid rgba(245,166,35,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🏆
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: "-1px" }}>
            <span style={{ color: "#ffffff" }}>Cric</span>
            <span style={{ color: "#F5A623" }}>Vault</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-3px",
            color: "#ffffff",
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Every Trophy.{" "}
          <span style={{ color: "#F5A623" }}>Every Champion.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
            maxWidth: 700,
          }}
        >
          The definitive record of ICC cricket tournaments — men&apos;s, women&apos;s, international and domestic.
        </div>

        {/* Bottom accent bar */}
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
