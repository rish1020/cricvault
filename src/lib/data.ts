export type Winner = {
  year: number;
  champion: string;
  runnerUp: string;
  venue: string;
  final?: string;
};

export type Trophy = {
  id: string;
  name: string;
  shortName: string;
  format: string;
  gender: "men" | "women";
  description: string;
  firstEdition: number;
  frequency: string;
  currentChampion: string;
  currentChampionYear: number;
  color: string;
  winners: Winner[];
};

export const trophies: Trophy[] = [
  {
    id: "cricket-world-cup",
    name: "ICC Men's Cricket World Cup",
    shortName: "Cricket World Cup",
    format: "ODI (50 overs)",
    gender: "men",
    description:
      "The flagship event of international cricket, held every four years. The most prestigious one-day tournament in the world, bringing together the best ODI teams.",
    firstEdition: 1975,
    frequency: "Every 4 years",
    currentChampion: "Australia",
    currentChampionYear: 2023,
    color: "from-yellow-500 to-amber-600",
    winners: [
      { year: 2023, champion: "Australia", runnerUp: "India", venue: "Ahmedabad, India", final: "Australia beat India by 6 wickets" },
      { year: 2019, champion: "England", runnerUp: "New Zealand", venue: "Lord's, London", final: "England won on boundary countback (Super Over tied)" },
      { year: 2015, champion: "Australia", runnerUp: "New Zealand", venue: "Melbourne", final: "Australia beat New Zealand by 7 wickets" },
      { year: 2011, champion: "India", runnerUp: "Sri Lanka", venue: "Mumbai", final: "India beat Sri Lanka by 6 wickets" },
      { year: 2007, champion: "Australia", runnerUp: "Sri Lanka", venue: "Bridgetown, Barbados", final: "Australia beat Sri Lanka by 53 runs (D/L)" },
      { year: 2003, champion: "Australia", runnerUp: "India", venue: "Johannesburg", final: "Australia beat India by 125 runs" },
      { year: 1999, champion: "Australia", runnerUp: "Pakistan", venue: "Lord's, London", final: "Australia beat Pakistan by 8 wickets" },
      { year: 1996, champion: "Sri Lanka", runnerUp: "Australia", venue: "Lahore", final: "Sri Lanka beat Australia by 7 wickets" },
      { year: 1992, champion: "Pakistan", runnerUp: "England", venue: "Melbourne", final: "Pakistan beat England by 22 runs" },
      { year: 1987, champion: "Australia", runnerUp: "England", venue: "Calcutta", final: "Australia beat England by 7 runs" },
      { year: 1983, champion: "India", runnerUp: "West Indies", venue: "Lord's, London", final: "India beat West Indies by 43 runs" },
      { year: 1979, champion: "West Indies", runnerUp: "England", venue: "Lord's, London", final: "West Indies beat England by 92 runs" },
      { year: 1975, champion: "West Indies", runnerUp: "Australia", venue: "Lord's, London", final: "West Indies beat Australia by 17 runs" },
    ],
  },
  {
    id: "t20-world-cup",
    name: "ICC Men's T20 World Cup",
    shortName: "T20 World Cup",
    format: "T20I",
    gender: "men",
    description:
      "The shortest and most explosive format of the world championship. Fast-paced, high-scoring cricket that has grown rapidly in popularity since 2007.",
    firstEdition: 2007,
    frequency: "Every 2 years",
    currentChampion: "India",
    currentChampionYear: 2026,
    color: "from-blue-500 to-indigo-600",
    winners: [
      { year: 2026, champion: "India", runnerUp: "New Zealand", venue: "Narendra Modi Stadium, Ahmedabad", final: "India beat New Zealand by 96 runs (Sanju Samson 89, Bumrah 4/15)" },
      { year: 2024, champion: "India", runnerUp: "South Africa", venue: "Barbados", final: "India beat South Africa by 7 runs" },
      { year: 2022, champion: "England", runnerUp: "Pakistan", venue: "Melbourne", final: "England beat Pakistan by 5 wickets" },
      { year: 2021, champion: "Australia", runnerUp: "New Zealand", venue: "Dubai", final: "Australia beat New Zealand by 8 wickets" },
      { year: 2016, champion: "West Indies", runnerUp: "England", venue: "Kolkata", final: "West Indies beat England by 4 wickets" },
      { year: 2014, champion: "Sri Lanka", runnerUp: "India", venue: "Dhaka", final: "Sri Lanka beat India by 6 wickets" },
      { year: 2012, champion: "West Indies", runnerUp: "Sri Lanka", venue: "Colombo", final: "West Indies beat Sri Lanka by 36 runs" },
      { year: 2010, champion: "England", runnerUp: "Australia", venue: "Bridgetown, Barbados", final: "England beat Australia by 7 wickets" },
      { year: 2009, champion: "Pakistan", runnerUp: "Sri Lanka", venue: "Lord's, London", final: "Pakistan beat Sri Lanka by 8 wickets" },
      { year: 2007, champion: "India", runnerUp: "Pakistan", venue: "Johannesburg", final: "India beat Pakistan by 5 runs" },
    ],
  },
  {
    id: "champions-trophy",
    name: "ICC Champions Trophy",
    shortName: "Champions Trophy",
    format: "ODI (50 overs)",
    gender: "men",
    description:
      "Known as the 'mini World Cup', the Champions Trophy features only the top 8 ODI nations. Compact and intensely competitive, it produces some of cricket's greatest moments.",
    firstEdition: 1998,
    frequency: "Every 4 years",
    currentChampion: "India",
    currentChampionYear: 2025,
    color: "from-emerald-500 to-teal-600",
    winners: [
      { year: 2025, champion: "India", runnerUp: "New Zealand", venue: "Dubai", final: "India beat New Zealand by 4 wickets" },
      { year: 2017, champion: "Pakistan", runnerUp: "India", venue: "The Oval, London", final: "Pakistan beat India by 180 runs" },
      { year: 2013, champion: "India", runnerUp: "England", venue: "Edgbaston, Birmingham", final: "India beat England by 5 runs (D/L)" },
      { year: 2009, champion: "Australia", runnerUp: "New Zealand", venue: "Centurion", final: "Australia beat New Zealand by 6 wickets" },
      { year: 2006, champion: "Australia", runnerUp: "West Indies", venue: "Mumbai", final: "Australia beat West Indies by 8 wickets" },
      { year: 2004, champion: "Pakistan", runnerUp: "India", venue: "Birmingham", final: "Pakistan beat India by 3 runs" },
      { year: 2002, champion: "India / Sri Lanka", runnerUp: "—", venue: "Colombo", final: "Tournament shared (final rained off twice)" },
      { year: 2000, champion: "New Zealand", runnerUp: "India", venue: "Nairobi", final: "New Zealand beat India by 4 wickets" },
      { year: 1998, champion: "South Africa", runnerUp: "West Indies", venue: "Dhaka", final: "South Africa beat West Indies by 4 wickets" },
    ],
  },
  {
    id: "world-test-championship",
    name: "ICC World Test Championship",
    shortName: "World Test Championship",
    format: "Test Cricket",
    gender: "men",
    description:
      "The pinnacle of Test cricket, pitting the top-ranked Test nations in a two-year cycle culminating in a prestigious final. Celebrates cricket's purest and most challenging form.",
    firstEdition: 2021,
    frequency: "Every 2 years",
    currentChampion: "South Africa",
    currentChampionYear: 2025,
    color: "from-slate-600 to-gray-700",
    winners: [
      { year: 2025, champion: "South Africa", runnerUp: "Australia", venue: "Lord's, London", final: "South Africa beat Australia by 4 wickets" },
      { year: 2023, champion: "Australia", runnerUp: "India", venue: "The Oval, London", final: "Australia beat India by 209 runs" },
      { year: 2021, champion: "New Zealand", runnerUp: "India", venue: "Southampton", final: "New Zealand beat India by 8 wickets" },
    ],
  },
  {
    id: "womens-world-cup",
    name: "ICC Women's Cricket World Cup",
    shortName: "Women's World Cup",
    format: "ODI (50 overs)",
    gender: "women",
    description:
      "The premier tournament of women's international cricket, showcasing the very best female cricketers from around the world in the 50-over format.",
    firstEdition: 1973,
    frequency: "Every 4 years",
    currentChampion: "India",
    currentChampionYear: 2025,
    color: "from-pink-500 to-rose-600",
    winners: [
      { year: 2025, champion: "India", runnerUp: "South Africa", venue: "Dr. DY Patil Stadium, Navi Mumbai", final: "India won by 52 runs (Deepti Sharma 5/39)" },
      { year: 2022, champion: "Australia", runnerUp: "England", venue: "Christchurch", final: "Australia beat England by 71 runs" },
      { year: 2017, champion: "England", runnerUp: "India", venue: "Lord's, London", final: "England beat India by 9 runs" },
      { year: 2013, champion: "Australia", runnerUp: "West Indies", venue: "Mumbai", final: "Australia beat West Indies by 114 runs" },
      { year: 2009, champion: "England", runnerUp: "New Zealand", venue: "North Sydney", final: "England beat New Zealand by 4 wickets" },
      { year: 2005, champion: "Australia", runnerUp: "India", venue: "Cape Town", final: "Australia beat India by 98 runs" },
      { year: 2000, champion: "New Zealand", runnerUp: "Australia", venue: "Christchurch", final: "New Zealand beat Australia by 4 runs" },
      { year: 1997, champion: "Australia", runnerUp: "New Zealand", venue: "Mumbai", final: "Australia beat New Zealand by 5 wickets" },
    ],
  },
  {
    id: "u19-world-cup",
    name: "ICC Under-19 Men's Cricket World Cup",
    shortName: "U-19 World Cup",
    format: "ODI (50 overs)",
    gender: "men",
    description:
      "The breeding ground for future stars of international cricket. Many of the game's greats — Virat Kohli, MS Dhoni, Pat Cummins — shone here before conquering the world stage.",
    firstEdition: 1988,
    frequency: "Every 2 years (from 1998)",
    currentChampion: "India",
    currentChampionYear: 2026,
    color: "from-orange-500 to-red-500",
    winners: [
      { year: 2026, champion: "India", runnerUp: "England", venue: "Harare Sports Club, Zimbabwe", final: "India won by 100 runs (Vaibhav Suryavanshi 175 off 80 balls)" },
      { year: 2024, champion: "Australia", runnerUp: "India", venue: "Benoni, South Africa", final: "Australia beat India by 79 runs" },
      { year: 2022, champion: "India", runnerUp: "England", venue: "Antigua", final: "India beat England by 4 wickets" },
      { year: 2020, champion: "Bangladesh", runnerUp: "India", venue: "Potchefstroom, South Africa", final: "Bangladesh beat India by 3 wickets" },
      { year: 2018, champion: "India", runnerUp: "Australia", venue: "Mount Maunganui", final: "India beat Australia by 8 wickets" },
      { year: 2016, champion: "West Indies", runnerUp: "India", venue: "Mirpur, Bangladesh", final: "West Indies beat India by 5 wickets" },
      { year: 2014, champion: "South Africa", runnerUp: "Pakistan", venue: "Dubai", final: "South Africa beat Pakistan by 6 wickets" },
      { year: 2012, champion: "India", runnerUp: "Australia", venue: "Townsville, Australia", final: "India beat Australia by 25 runs" },
      { year: 2010, champion: "Australia", runnerUp: "Pakistan", venue: "Lincoln, New Zealand", final: "Australia beat Pakistan by 25 runs" },
      { year: 2008, champion: "India", runnerUp: "South Africa", venue: "Kuala Lumpur", final: "India beat South Africa by 12 runs" },
      { year: 2006, champion: "Pakistan", runnerUp: "India", venue: "Colombo, Sri Lanka", final: "Pakistan beat India by 38 runs" },
      { year: 2004, champion: "Pakistan", runnerUp: "West Indies", venue: "Dhaka, Bangladesh", final: "Pakistan beat West Indies by 54 runs" },
      { year: 2002, champion: "Australia", runnerUp: "South Africa", venue: "Lincoln, New Zealand", final: "Australia beat South Africa by 7 wickets" },
      { year: 2000, champion: "India", runnerUp: "Sri Lanka", venue: "Colombo, Sri Lanka", final: "India beat Sri Lanka by 6 wickets" },
      { year: 1998, champion: "England", runnerUp: "New Zealand", venue: "Johannesburg, South Africa", final: "England beat New Zealand by 7 wickets" },
      { year: 1988, champion: "Australia", runnerUp: "Pakistan", venue: "Adelaide, Australia", final: "Australia beat Pakistan by 5 wickets" },
    ],
  },
  {
    id: "womens-t20-world-cup",
    name: "ICC Women's T20 World Cup",
    shortName: "Women's T20 World Cup",
    format: "T20I",
    gender: "women",
    description:
      "The women's pinnacle of T20 cricket. Fast-paced and fiercely contested, the tournament has grown into one of the most watched women's sporting events in the world.",
    firstEdition: 2009,
    frequency: "Every 2 years",
    currentChampion: "New Zealand",
    currentChampionYear: 2024,
    color: "from-violet-500 to-purple-600",
    winners: [
      { year: 2024, champion: "New Zealand", runnerUp: "South Africa", venue: "Dubai", final: "New Zealand beat South Africa by 32 runs" },
      { year: 2023, champion: "Australia", runnerUp: "South Africa", venue: "Cape Town", final: "Australia beat South Africa by 19 runs" },
      { year: 2020, champion: "Australia", runnerUp: "India", venue: "Melbourne", final: "Australia beat India by 85 runs" },
      { year: 2018, champion: "Australia", runnerUp: "England", venue: "Antigua", final: "Australia beat England by 8 wickets" },
      { year: 2016, champion: "West Indies", runnerUp: "Australia", venue: "Kolkata", final: "West Indies beat Australia by 8 wickets" },
      { year: 2014, champion: "Australia", runnerUp: "England", venue: "Dhaka", final: "Australia beat England by 6 wickets" },
      { year: 2012, champion: "Australia", runnerUp: "England", venue: "Colombo", final: "Australia beat England by 4 runs" },
      { year: 2010, champion: "Australia", runnerUp: "New Zealand", venue: "Bridgetown, Barbados", final: "Australia beat New Zealand by 3 runs" },
      { year: 2009, champion: "England", runnerUp: "New Zealand", venue: "Lord's, London", final: "England beat New Zealand by 6 wickets" },
    ],
  },
  {
    id: "womens-u19-world-cup",
    name: "ICC Women's Under-19 T20 World Cup",
    shortName: "Women's U-19 T20 World Cup",
    format: "T20I",
    gender: "women",
    description:
      "The newest ICC global event, launched in 2023 to develop the next generation of women's cricketers. Already producing some of the sport's most exciting young talent.",
    firstEdition: 2023,
    frequency: "Every 2 years",
    currentChampion: "India",
    currentChampionYear: 2025,
    color: "from-fuchsia-500 to-pink-600",
    winners: [
      { year: 2025, champion: "India", runnerUp: "South Africa", venue: "Bayuemas Oval, Kuala Lumpur", final: "India won by 9 wickets (Gongadi Trisha 44* & 3/15)" },
      { year: 2023, champion: "India", runnerUp: "England", venue: "Potchefstroom, South Africa", final: "India beat England by 7 wickets" },
    ],
  },
];

export function getTrophyById(id: string): Trophy | undefined {
  return trophies.find((t) => t.id === id);
}
