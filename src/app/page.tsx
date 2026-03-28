import { trophies } from "@/lib/data";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://cricvault.app";

export const metadata: Metadata = {
  title: "CricVault — Every Trophy. Every Champion.",
  description:
    "CricVault is the definitive record of every ICC trophy — Cricket World Cup, T20 World Cup, Champions Trophy, World Test Championship and more. Track every champion since 1975.",
  openGraph: {
    title: "CricVault — Every Trophy. Every Champion.",
    description:
      "The definitive record of ICC cricket tournaments — men's, women's, international and domestic. Decades of history in one place.",
    url: BASE,
  },
};

export default function Home() {
  const totalEditions = trophies.reduce((acc, t) => acc + t.winners.length, 0);
  const menCount   = trophies.filter((t) => t.gender === "men").length;
  const womenCount = trophies.filter((t) => t.gender === "women").length;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CricVault",
    url: BASE,
    description: "The definitive record of ICC cricket tournament winners — every trophy, every champion.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/timeline/all/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main
      className="flex flex-col overflow-hidden"
      style={{ height: "calc(100vh - 56px)", background: "var(--background)", color: "var(--foreground)" }}
    >
      <JsonLd data={websiteSchema} />
      <Hero
        trophies={trophies}
        totalEditions={totalEditions}
        menCount={menCount}
        womenCount={womenCount}
      />
    </main>
  );
}
