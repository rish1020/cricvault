import { trophies } from "@/lib/data";
import { domesticTrophies } from "@/lib/domesticData";
import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://cricvault.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                          priority: 1.0,  changeFrequency: "weekly"   },
    { url: `${BASE}/tournaments/international/men`,       priority: 0.9,  changeFrequency: "monthly"  },
    { url: `${BASE}/tournaments/international/women`,     priority: 0.9,  changeFrequency: "monthly"  },
    { url: `${BASE}/tournaments/domestic/men`,            priority: 0.8,  changeFrequency: "monthly"  },
    { url: `${BASE}/tournaments/domestic/women`,          priority: 0.8,  changeFrequency: "monthly"  },
    { url: `${BASE}/timeline/all/all`,                    priority: 0.85, changeFrequency: "monthly"  },
    { url: `${BASE}/timeline/men/all`,                    priority: 0.75, changeFrequency: "monthly"  },
    { url: `${BASE}/timeline/women/all`,                  priority: 0.75, changeFrequency: "monthly"  },
    { url: `${BASE}/cabinet/all/all`,                     priority: 0.8,  changeFrequency: "monthly"  },
    { url: `${BASE}/cabinet/men/all`,                     priority: 0.75, changeFrequency: "monthly"  },
    { url: `${BASE}/cabinet/women/all`,                   priority: 0.75, changeFrequency: "monthly"  },
    { url: `${BASE}/records`,                             priority: 0.7,  changeFrequency: "monthly"  },
    { url: `${BASE}/about`,                               priority: 0.4,  changeFrequency: "yearly"   },
  ];

  const intlPages: MetadataRoute.Sitemap = trophies.map((t) => ({
    url: `${BASE}/tournaments/international/${t.gender}/${t.id}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const domesticPages: MetadataRoute.Sitemap = domesticTrophies.map((t) => ({
    url: `${BASE}/tournaments/domestic/${t.gender}/${t.id}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...intlPages,
    ...domesticPages,
  ];
}
