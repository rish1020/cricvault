export type Winner = {
  year: number;
  champion: string;
  runnerUp: string;
  venue: string;
  final?: string;
};

export type DomesticTrophy = {
  id: string;
  name: string;
  shortName: string;
  format: string;
  league: string;
  description: string;
  firstEdition: number;
  frequency: string;
  currentChampion: string;
  currentChampionYear: number;
  color: string;
  winners: Winner[];
};

// Maps franchise team names to a Tailwind background color class
export function getTeamColor(team: string): string {
  const map: Record<string, string> = {
    // IPL
    "Rajasthan Royals":               "bg-pink-500",
    "Chennai Super Kings":            "bg-yellow-400",
    "Deccan Chargers":                "bg-blue-400",
    "Royal Challengers Bangalore":    "bg-red-500",
    "Kolkata Knight Riders":          "bg-purple-500",
    "Mumbai Indians":                 "bg-blue-600",
    "Kings XI Punjab":                "bg-red-400",
    "Sunrisers Hyderabad":            "bg-orange-500",
    "Rising Pune Supergiant":         "bg-purple-400",
    "Delhi Capitals":                 "bg-blue-500",
    "Gujarat Titans":                 "bg-teal-500",
    // BBL
    "Sydney Sixers":                  "bg-pink-600",
    "Brisbane Heat":                  "bg-red-500",
    "Perth Scorchers":                "bg-orange-500",
    "Melbourne Stars":                "bg-green-500",
    "Melbourne Renegades":            "bg-red-700",
    "Adelaide Strikers":              "bg-blue-500",
    "Hobart Hurricanes":              "bg-purple-500",
    "Sydney Thunder":                 "bg-green-600",
    // PSL
    "Multan Sultans":                 "bg-violet-600",
    "Lahore Qalandars":               "bg-green-500",
    "Peshawar Zalmi":                 "bg-yellow-500",
    "Karachi Kings":                  "bg-blue-500",
    "Quetta Gladiators":              "bg-black",
    "Islamabad United":               "bg-red-600",
    // The Hundred
    "Manchester Originals":           "bg-orange-500",
    "Southern Brave":                 "bg-blue-600",
    "Oval Invincibles":               "bg-yellow-400",
    "Trent Rockets":                  "bg-red-500",
    "Birmingham Phoenix":             "bg-orange-400",
    // CPL
    "Guyana Amazon Warriors":         "bg-green-600",
    "Trinbago Knight Riders":         "bg-red-600",
    "Jamaica Tallawahs":              "bg-yellow-500",
    "Jamaican Tallawahs":             "bg-yellow-500",
    "Barbados Tridents":              "bg-blue-500",
    "Barbados Royals":                "bg-blue-500",
    "St. Kitts & Nevis Patriots":     "bg-green-700",
    "St. Lucia Kings":                "bg-yellow-600",
    "St. Lucia Zouks":                "bg-yellow-600",
    "Trinidad & Tobago Red Steel":    "bg-red-500",
  };
  return map[team] ?? "bg-zinc-500";
}

export const domesticTrophies: DomesticTrophy[] = [
  {
    id: "ipl",
    name: "Indian Premier League",
    shortName: "IPL",
    format: "T20",
    league: "India",
    description:
      "The world's most watched T20 cricket league. Eight franchises battle across two months in a high-octane spectacle combining world-class cricket with entertainment.",
    firstEdition: 2008,
    frequency: "Annual",
    currentChampion: "Kolkata Knight Riders",
    currentChampionYear: 2024,
    color: "from-blue-500 to-purple-600",
    winners: [
      { year: 2024, champion: "Kolkata Knight Riders",    runnerUp: "Sunrisers Hyderabad",          venue: "MA Chidambaram Stadium, Chennai" },
      { year: 2023, champion: "Chennai Super Kings",      runnerUp: "Gujarat Titans",               venue: "Narendra Modi Stadium, Ahmedabad" },
      { year: 2022, champion: "Gujarat Titans",           runnerUp: "Rajasthan Royals",             venue: "Narendra Modi Stadium, Ahmedabad" },
      { year: 2021, champion: "Chennai Super Kings",      runnerUp: "Kolkata Knight Riders",        venue: "Dubai International Stadium" },
      { year: 2020, champion: "Mumbai Indians",           runnerUp: "Delhi Capitals",               venue: "Dubai International Stadium" },
      { year: 2019, champion: "Mumbai Indians",           runnerUp: "Chennai Super Kings",          venue: "Rajiv Gandhi Intl. Stadium, Hyderabad" },
      { year: 2018, champion: "Chennai Super Kings",      runnerUp: "Sunrisers Hyderabad",          venue: "Wankhede Stadium, Mumbai" },
      { year: 2017, champion: "Mumbai Indians",           runnerUp: "Rising Pune Supergiant",       venue: "Rajiv Gandhi Intl. Stadium, Hyderabad" },
      { year: 2016, champion: "Sunrisers Hyderabad",      runnerUp: "Royal Challengers Bangalore",  venue: "M. Chinnaswamy Stadium, Bangalore" },
      { year: 2015, champion: "Mumbai Indians",           runnerUp: "Chennai Super Kings",          venue: "Eden Gardens, Kolkata" },
      { year: 2014, champion: "Kolkata Knight Riders",    runnerUp: "Kings XI Punjab",              venue: "MA Chidambaram Stadium, Chennai" },
      { year: 2013, champion: "Mumbai Indians",           runnerUp: "Chennai Super Kings",          venue: "Eden Gardens, Kolkata" },
      { year: 2012, champion: "Kolkata Knight Riders",    runnerUp: "Chennai Super Kings",          venue: "MA Chidambaram Stadium, Chennai" },
      { year: 2011, champion: "Chennai Super Kings",      runnerUp: "Royal Challengers Bangalore",  venue: "MA Chidambaram Stadium, Chennai" },
      { year: 2010, champion: "Chennai Super Kings",      runnerUp: "Mumbai Indians",               venue: "DY Patil Stadium, Mumbai" },
      { year: 2009, champion: "Deccan Chargers",          runnerUp: "Royal Challengers Bangalore",  venue: "Wanderers, Johannesburg" },
      { year: 2008, champion: "Rajasthan Royals",         runnerUp: "Chennai Super Kings",          venue: "DY Patil Stadium, Mumbai" },
    ],
  },
  {
    id: "bbl",
    name: "Big Bash League",
    shortName: "BBL",
    format: "T20",
    league: "Australia",
    description: "Australia's premier domestic T20 competition featuring eight city-based franchises. Known for its family-friendly atmosphere and high-scoring entertainment.",
    firstEdition: 2012,
    frequency: "Annual",
    currentChampion: "Sydney Sixers",
    currentChampionYear: 2024,
    color: "from-cyan-500 to-blue-600",
    winners: [
      { year: 2024, champion: "Sydney Sixers",          runnerUp: "Brisbane Heat",         venue: "SCG, Sydney",                    final: "Sydney Sixers beat Brisbane Heat by 4 wickets" },
      { year: 2023, champion: "Brisbane Heat",          runnerUp: "Melbourne Stars",        venue: "The Gabba, Brisbane",            final: "Brisbane Heat beat Melbourne Stars by 10 wickets" },
      { year: 2022, champion: "Perth Scorchers",        runnerUp: "Sydney Sixers",          venue: "Optus Stadium, Perth",           final: "Perth Scorchers beat Sydney Sixers by 79 runs" },
      { year: 2021, champion: "Sydney Sixers",          runnerUp: "Perth Scorchers",        venue: "SCG, Sydney",                    final: "Sydney Sixers beat Perth Scorchers by 27 runs" },
      { year: 2020, champion: "Sydney Sixers",          runnerUp: "Melbourne Stars",        venue: "SCG, Sydney",                    final: "Sydney Sixers beat Melbourne Stars by 19 runs" },
      { year: 2019, champion: "Melbourne Renegades",    runnerUp: "Melbourne Stars",        venue: "MCG, Melbourne",                 final: "Melbourne Renegades beat Melbourne Stars by 13 runs" },
      { year: 2018, champion: "Adelaide Strikers",      runnerUp: "Hobart Hurricanes",      venue: "Adelaide Oval",                  final: "Adelaide Strikers beat Hobart Hurricanes by 25 runs" },
      { year: 2017, champion: "Perth Scorchers",        runnerUp: "Sydney Sixers",          venue: "Optus Stadium, Perth",           final: "Perth Scorchers beat Sydney Sixers by 9 wickets" },
      { year: 2016, champion: "Sydney Thunder",         runnerUp: "Melbourne Stars",        venue: "ANZ Stadium, Sydney",            final: "Sydney Thunder beat Melbourne Stars by 3 wickets" },
      { year: 2015, champion: "Perth Scorchers",        runnerUp: "Sydney Sixers",          venue: "WACA, Perth",                    final: "Perth Scorchers beat Sydney Sixers by 4 wickets" },
      { year: 2014, champion: "Perth Scorchers",        runnerUp: "Hobart Hurricanes",      venue: "WACA, Perth",                    final: "Perth Scorchers beat Hobart Hurricanes by 39 runs" },
      { year: 2013, champion: "Brisbane Heat",          runnerUp: "Sydney Sixers",          venue: "The Gabba, Brisbane",            final: "Brisbane Heat beat Sydney Sixers by 34 runs" },
      { year: 2012, champion: "Sydney Sixers",          runnerUp: "Perth Scorchers",        venue: "WACA, Perth",                    final: "Sydney Sixers beat Perth Scorchers by 7 wickets" },
    ],
  },
  {
    id: "psl",
    name: "Pakistan Super League",
    shortName: "PSL",
    format: "T20",
    league: "Pakistan",
    description: "Pakistan's elite T20 franchise league, launched in 2016. A platform for Pakistan's cricketing talent to shine alongside international stars in high-pressure contests.",
    firstEdition: 2016,
    frequency: "Annual",
    currentChampion: "Multan Sultans",
    currentChampionYear: 2024,
    color: "from-green-500 to-emerald-700",
    winners: [
      { year: 2024, champion: "Multan Sultans",         runnerUp: "Lahore Qalandars",       venue: "National Stadium, Karachi",      final: "Multan Sultans beat Lahore Qalandars by 8 wickets" },
      { year: 2023, champion: "Lahore Qalandars",       runnerUp: "Multan Sultans",         venue: "National Stadium, Karachi",      final: "Lahore Qalandars beat Multan Sultans by 4 wickets" },
      { year: 2022, champion: "Lahore Qalandars",       runnerUp: "Multan Sultans",         venue: "Gaddafi Stadium, Lahore",        final: "Lahore Qalandars beat Multan Sultans by 42 runs" },
      { year: 2021, champion: "Multan Sultans",         runnerUp: "Peshawar Zalmi",         venue: "National Stadium, Karachi",      final: "Multan Sultans beat Peshawar Zalmi by 47 runs" },
      { year: 2020, champion: "Karachi Kings",          runnerUp: "Lahore Qalandars",       venue: "National Stadium, Karachi",      final: "Karachi Kings beat Lahore Qalandars by 7 wickets" },
      { year: 2019, champion: "Quetta Gladiators",      runnerUp: "Peshawar Zalmi",         venue: "National Stadium, Karachi",      final: "Quetta Gladiators beat Peshawar Zalmi by 8 wickets" },
      { year: 2018, champion: "Islamabad United",       runnerUp: "Peshawar Zalmi",         venue: "National Stadium, Karachi",      final: "Islamabad United beat Peshawar Zalmi by 3 wickets" },
      { year: 2017, champion: "Peshawar Zalmi",         runnerUp: "Quetta Gladiators",      venue: "Gaddafi Stadium, Lahore",        final: "Peshawar Zalmi beat Quetta Gladiators by 58 runs" },
      { year: 2016, champion: "Islamabad United",       runnerUp: "Quetta Gladiators",      venue: "Gadaffi Stadium, Lahore",        final: "Islamabad United beat Quetta Gladiators by 6 wickets" },
    ],
  },
  {
    id: "the-hundred",
    name: "The Hundred (Men's)",
    shortName: "The Hundred",
    format: "100-ball",
    league: "England",
    description: "England's bold 100-ball format competition launched in 2021, designed to attract new audiences with a faster, city-franchise based game featuring the world's best players.",
    firstEdition: 2021,
    frequency: "Annual",
    currentChampion: "Manchester Originals",
    currentChampionYear: 2024,
    color: "from-red-500 to-rose-700",
    winners: [
      { year: 2024, champion: "Manchester Originals",   runnerUp: "Southern Brave",         venue: "Lord's, London",                 final: "Manchester Originals beat Southern Brave by 9 wickets" },
      { year: 2023, champion: "Oval Invincibles",       runnerUp: "Manchester Originals",   venue: "Lord's, London",                 final: "Oval Invincibles beat Manchester Originals by 26 runs" },
      { year: 2022, champion: "Trent Rockets",          runnerUp: "Manchester Originals",   venue: "Lord's, London",                 final: "Trent Rockets beat Manchester Originals by 22 runs" },
      { year: 2021, champion: "Southern Brave",         runnerUp: "Birmingham Phoenix",     venue: "Lord's, London",                 final: "Southern Brave beat Birmingham Phoenix by 48 runs" },
    ],
  },
  {
    id: "cpl",
    name: "Caribbean Premier League",
    shortName: "CPL",
    format: "T20",
    league: "Caribbean",
    description: "The biggest party in sport. The Caribbean Premier League combines world-class T20 cricket with the vibrant culture of the Caribbean, featuring six franchise teams.",
    firstEdition: 2013,
    frequency: "Annual",
    currentChampion: "Guyana Amazon Warriors",
    currentChampionYear: 2024,
    color: "from-orange-400 to-yellow-500",
    winners: [
      { year: 2024, champion: "Guyana Amazon Warriors",     runnerUp: "Trinbago Knight Riders",    venue: "National Cricket Centre, Guyana",              final: "Guyana Amazon Warriors beat Trinbago Knight Riders by 8 wickets" },
      { year: 2023, champion: "Guyana Amazon Warriors",     runnerUp: "Trinbago Knight Riders",    venue: "National Cricket Centre, Guyana",              final: "Guyana Amazon Warriors beat Trinbago Knight Riders by 5 wickets" },
      { year: 2022, champion: "Jamaica Tallawahs",          runnerUp: "Barbados Royals",           venue: "Providence Stadium, Guyana",                   final: "Jamaica Tallawahs beat Barbados Royals by 9 wickets" },
      { year: 2021, champion: "St. Kitts & Nevis Patriots", runnerUp: "St. Lucia Kings",          venue: "Warner Park, St. Kitts",                       final: "St. Kitts & Nevis Patriots beat St. Lucia Kings by 8 wickets" },
      { year: 2020, champion: "Trinbago Knight Riders",     runnerUp: "St. Lucia Zouks",          venue: "Brian Lara Cricket Academy, Trinidad",         final: "Trinbago Knight Riders beat St. Lucia Zouks by 8 wickets" },
      { year: 2019, champion: "Barbados Tridents",          runnerUp: "Guyana Amazon Warriors",    venue: "Kensington Oval, Barbados",                    final: "Barbados Tridents beat Guyana Amazon Warriors by 4 wickets" },
      { year: 2018, champion: "Trinbago Knight Riders",     runnerUp: "Guyana Amazon Warriors",    venue: "Queen's Park Oval, Trinidad",                  final: "Trinbago Knight Riders beat Guyana Amazon Warriors by 8 wickets" },
      { year: 2017, champion: "Trinbago Knight Riders",     runnerUp: "St. Kitts & Nevis Patriots", venue: "Queen's Park Oval, Trinidad",                final: "Trinbago Knight Riders beat St. Kitts & Nevis Patriots by 3 wickets" },
      { year: 2016, champion: "Jamaica Tallawahs",          runnerUp: "Guyana Amazon Warriors",    venue: "Sabina Park, Jamaica",                         final: "Jamaica Tallawahs beat Guyana Amazon Warriors by 9 wickets" },
      { year: 2015, champion: "Trinbago Knight Riders",     runnerUp: "Barbados Tridents",         venue: "Queen's Park Oval, Trinidad",                  final: "Trinbago Knight Riders beat Barbados Tridents by 20 runs" },
      { year: 2014, champion: "Barbados Tridents",          runnerUp: "Trinidad & Tobago Red Steel", venue: "Kensington Oval, Barbados",                 final: "Barbados Tridents beat Trinidad & Tobago Red Steel by 3 wickets" },
      { year: 2013, champion: "Jamaican Tallawahs",         runnerUp: "Guyana Amazon Warriors",    venue: "Sabina Park, Jamaica",                         final: "Jamaican Tallawahs beat Guyana Amazon Warriors by 5 wickets" },
    ],
  },
];

export function getDomesticTrophyById(id: string): DomesticTrophy | undefined {
  return domesticTrophies.find((t) => t.id === id);
}
