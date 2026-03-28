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
  summary?: string;
  keyFacts?: string[];
  faqs?: { q: string; a: string }[];
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
    summary:
      "The ICC Men's Cricket World Cup is the oldest and most prestigious one-day international tournament in cricket, held every four years since 1975. Thirteen editions have crowned seven different champions, with Australia standing apart as the dominant force — their six titles include an extraordinary run of three consecutive victories from 1999 to 2007. India lifted the trophy on home soil in 2011, ending a 28-year wait, and reached the 2023 final as hosts before Australia clinched it in Ahmedabad. The World Cup remains the pinnacle achievement for any ODI cricketer.",
    keyFacts: [
      "First edition held in England in June 1975 — West Indies beat Australia at Lord's",
      "Australia are the all-time leading winners with 6 titles",
      "West Indies won the first two editions (1975, 1979)",
      "India won on home soil in 2011; Pakistan won in 1992 under Imran Khan",
      "1992 edition introduced coloured clothing and day/night matches",
      "2019 final decided on boundary countback — the rarest finish in tournament history",
    ],
    faqs: [
      {
        q: "Who has won the Cricket World Cup the most times?",
        a: "Australia have won the Cricket World Cup the most times — six titles in 1987, 1999, 2003, 2007, 2015, and 2023.",
      },
      {
        q: "When was the first Cricket World Cup held?",
        a: "The first ICC Cricket World Cup was held in England in June 1975. West Indies won the inaugural edition, defeating Australia by 17 runs in the final at Lord's.",
      },
      {
        q: "Who is the current Cricket World Cup champion?",
        a: "Australia are the current champions, having won the 2023 edition by defeating India by 6 wickets in the final at the Narendra Modi Stadium in Ahmedabad.",
      },
      {
        q: "How often is the Cricket World Cup held?",
        a: "The ICC Men's Cricket World Cup is held every four years.",
      },
      {
        q: "Which country has hosted the Cricket World Cup the most?",
        a: "England has hosted the most Cricket World Cups, staging the tournament in 1975, 1979, 1983, and 1999. The Indian subcontinent (India, Pakistan, Sri Lanka) has hosted several editions jointly.",
      },
    ],
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
    summary:
      "The ICC Men's T20 World Cup is the world championship of Twenty20 international cricket, held every two years since its inaugural edition in South Africa in 2007. India won that first final in a thrilling five-run victory over Pakistan, and the format has grown exponentially ever since — the 2024 edition expanded to 20 teams across the United States and the Caribbean. India reclaimed the title in 2024 after a decade-long wait, then retained it in 2026. West Indies and England have each won the tournament twice, highlighting the format's unpredictability.",
    keyFacts: [
      "First held in South Africa in 2007 — India beat Pakistan by 5 runs in the final",
      "India, West Indies, and England have each won the tournament twice",
      "West Indies famously chased 19 off the last over to beat England in the 2016 final",
      "The 2024 edition was the first co-hosted by the USA",
      "India won back-to-back in 2024 and 2026 — the first team to retain the title",
      "10 editions played; 7 different venues have hosted the final",
    ],
    faqs: [
      {
        q: "Who has won the T20 World Cup the most times?",
        a: "India, West Indies, and England have each won the T20 World Cup twice. India won in 2007 and 2024; West Indies in 2012 and 2016; England in 2010 and 2022. India also won in 2026, making them the current record holders with three titles.",
      },
      {
        q: "When was the first T20 World Cup held?",
        a: "The inaugural ICC T20 World Cup was held in South Africa in September 2007. India beat Pakistan by 5 runs in a nail-biting final in Johannesburg.",
      },
      {
        q: "Who is the current T20 World Cup champion?",
        a: "India are the current T20 World Cup champions, having won the 2026 edition by defeating New Zealand by 96 runs in the final at the Narendra Modi Stadium in Ahmedabad.",
      },
      {
        q: "How often is the T20 World Cup held?",
        a: "The ICC T20 World Cup is held every two years.",
      },
      {
        q: "Has any team won the T20 World Cup back to back?",
        a: "Yes — India won consecutive T20 World Cups in 2024 and 2026, becoming the first team to retain the title.",
      },
    ],
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
    summary:
      "The ICC Champions Trophy is an elite ODI tournament restricted to the top eight ranked nations, earning it the nickname 'mini World Cup'. First held in Bangladesh in 1998, the tournament was originally called the Wills International Cup before rebranding. It was discontinued after 2013 but triumphantly returned in 2025, with India defeating New Zealand in a final played in Dubai. Nine editions have produced six different champions, with India and Australia leading the way with three titles each.",
    keyFacts: [
      "Originally called the Wills International Cup (1998) before rebranding",
      "Only the top 8 ODI nations qualify — no associate teams",
      "India and Pakistan's 2017 final drew over 200 million TV viewers in India alone",
      "Pakistan beat India by 180 runs in the 2017 final — the biggest CT final margin",
      "2002 final was shared between India and Sri Lanka after rain washed out the game twice",
      "Returned after a 12-year hiatus in 2025, hosted in Pakistan and Dubai",
    ],
    faqs: [
      {
        q: "Who has won the Champions Trophy the most times?",
        a: "India and Australia have each won the Champions Trophy three times. India won in 2002 (shared), 2013, and 2025. Australia won in 2006, 2009, and one other edition.",
      },
      {
        q: "What is the ICC Champions Trophy?",
        a: "The ICC Champions Trophy is an ODI tournament featuring the top 8 ranked cricket nations. It is held every four years and is considered the second most prestigious ODI title after the Cricket World Cup.",
      },
      {
        q: "Who is the current Champions Trophy champion?",
        a: "India are the current Champions Trophy champions, having won the 2025 edition by defeating New Zealand by 4 wickets in the final in Dubai.",
      },
      {
        q: "Why was the Champions Trophy discontinued?",
        a: "The ICC discontinued the Champions Trophy after 2013 to streamline its event calendar. It was replaced for a period by the T20 World Cup, but returned in 2025 following strong demand from fans and broadcasters.",
      },
      {
        q: "Where was the 2025 Champions Trophy held?",
        a: "The 2025 Champions Trophy was co-hosted by Pakistan and the UAE. Most group matches were held in Pakistan, while India's matches and the final were played in Dubai due to geopolitical considerations.",
      },
    ],
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
    summary:
      "The ICC World Test Championship (WTC) is a league competition spanning a two-year cycle, culminating in a single grand final between the top two ranked Test nations. Launched in 2019 (with the first final played in 2021), it was created to give context and meaning to every Test series played around the world. New Zealand won the inaugural final against India in Southampton, Australia claimed the 2023 edition at The Oval, and South Africa became champions in 2025. Three editions have produced three different champions, reflecting Test cricket's competitive parity.",
    keyFacts: [
      "First WTC final played in June 2021 in Southampton, England",
      "New Zealand, Australia, and South Africa have each won one edition",
      "India have reached the final three times without winning",
      "Points are awarded based on series results, scaled to percentage of available points",
      "The final is always a five-day Test match played at a neutral venue in England",
      "South Africa's 2025 win was their first major ICC title since the 1998 Champions Trophy",
    ],
    faqs: [
      {
        q: "What is the ICC World Test Championship?",
        a: "The ICC World Test Championship is a league competition played across a two-year cycle. All major Test nations play each other in series worth WTC points, and the top two teams at the end of the cycle meet in a five-day final.",
      },
      {
        q: "Who has won the World Test Championship?",
        a: "Three teams have won the WTC so far: New Zealand (2021), Australia (2023), and South Africa (2025). India have been runners-up in all three finals.",
      },
      {
        q: "Who is the current World Test Championship champion?",
        a: "South Africa are the current World Test Championship champions, having beaten Australia by 4 wickets in the 2025 final at Lord's.",
      },
      {
        q: "How does the World Test Championship work?",
        a: "Teams earn points by winning Test matches in bilateral series throughout the two-year cycle. Points are converted to a percentage of available points (PCT) to account for teams playing different numbers of matches. The top two teams by PCT qualify for the final.",
      },
      {
        q: "Where is the WTC final played?",
        a: "The World Test Championship final is traditionally hosted by England. The first two finals were played at Southampton's Ageas Bowl (2021) and The Oval (2023); the 2025 final was played at Lord's.",
      },
    ],
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
    summary:
      "The ICC Women's Cricket World Cup is the oldest women's sporting World Cup in history, pre-dating the men's equivalent by two years — its inaugural edition was played in England in 1973. Australia have been the defining force of the tournament with seven titles, though England, New Zealand, and India have all lifted the trophy. India ended a long wait for their first Women's World Cup title in 2025, defeating South Africa on home soil in Navi Mumbai.",
    keyFacts: [
      "First held in 1973 in England — predates the men's World Cup by 2 years",
      "Australia are the most successful team with 7 titles",
      "India won their first Women's World Cup title in 2025",
      "England were the dominant force in the early editions, winning in 1973, 1993, 2009, and 2017",
      "The 2022 edition in New Zealand was the first to feature a round-robin format with 8 teams",
      "Deepti Sharma took 5/39 in the 2025 final to seal India's historic win",
    ],
    faqs: [
      {
        q: "Who has won the Women's Cricket World Cup the most times?",
        a: "Australia have won the Women's Cricket World Cup the most times — seven titles in total, including five consecutive editions from 1997 to 2013 (with gaps).",
      },
      {
        q: "When was the first Women's Cricket World Cup?",
        a: "The first Women's Cricket World Cup was held in England in 1973 — two years before the men's equivalent. England won the inaugural edition.",
      },
      {
        q: "Who is the current Women's Cricket World Cup champion?",
        a: "India are the current champions, having won the 2025 ICC Women's Cricket World Cup by defeating South Africa by 52 runs in the final at the Dr. DY Patil Stadium in Navi Mumbai.",
      },
      {
        q: "Has India ever won the Women's Cricket World Cup?",
        a: "Yes — India won the Women's Cricket World Cup for the first time in 2025, defeating South Africa in the final on home soil. They had previously been runners-up in 2005 and 2017.",
      },
      {
        q: "How often is the Women's Cricket World Cup held?",
        a: "The ICC Women's Cricket World Cup is held every four years.",
      },
    ],
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
    summary:
      "The ICC Under-19 Men's Cricket World Cup is the global tournament for cricketers aged 19 and under, held every two years since 1998. It has served as the launch pad for many of the sport's greatest names — Virat Kohli captained India's winning 2008 squad, and Pat Cummins debuted on the international stage at U-19 level. India are the tournament's most successful nation with six titles. The 2026 edition produced one of the most stunning individual performances in World Cup history: Vaibhav Suryavanshi scored 175 off just 80 balls in the final.",
    keyFacts: [
      "India are the most successful team with 6 titles",
      "Virat Kohli captained India to the 2008 U-19 World Cup title",
      "Vaibhav Suryavanshi scored 175 off 80 balls in the 2026 final — a World Cup record",
      "Bangladesh achieved their biggest ICC trophy win at the 2020 U-19 World Cup",
      "Pakistan have won the tournament twice (2004, 2006) and reached multiple finals",
      "First edition held in 1988 in Australia; Australia won that inaugural title",
    ],
    faqs: [
      {
        q: "Who has won the U-19 World Cup the most times?",
        a: "India have won the ICC Under-19 World Cup the most times — six titles (2000, 2008, 2012, 2018, 2022, 2026).",
      },
      {
        q: "Who is the current U-19 World Cup champion?",
        a: "India are the current champions, having won the 2026 edition by defeating England by 100 runs in the final at Harare Sports Club, Zimbabwe. Vaibhav Suryavanshi hit 175 off 80 balls.",
      },
      {
        q: "Did Virat Kohli play in the U-19 World Cup?",
        a: "Yes — Virat Kohli captained India at the 2008 ICC Under-19 World Cup in Malaysia. India won the tournament, and Kohli was named Player of the Tournament.",
      },
      {
        q: "How old do you have to be to play in the U-19 World Cup?",
        a: "Players must be under 19 years of age at the start of the tournament. The ICC Under-19 World Cup is held every two years.",
      },
      {
        q: "When did Bangladesh win the U-19 World Cup?",
        a: "Bangladesh won the ICC Under-19 World Cup in 2020 in South Africa, defeating India by 3 wickets in the final in Potchefstroom. It remains Bangladesh's biggest ICC title at any level.",
      },
    ],
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
    summary:
      "The ICC Women's T20 World Cup is the global championship for women's Twenty20 cricket, held every two years since England won the inaugural edition in 2009. Australia have been the dominant force with six titles, including a remarkable four consecutive championships from 2010 to 2018. The 2020 final in Melbourne drew over 86,000 spectators — a world record for a women's cricket match. New Zealand broke Australia's stranglehold on the trophy in 2024, defeating South Africa in Dubai.",
    keyFacts: [
      "Australia have won 6 of the 9 editions — the most dominant run in any ICC tournament",
      "The 2020 final at the MCG drew 86,174 fans — a world record for women's cricket",
      "England won the inaugural 2009 edition at Lord's",
      "West Indies beat Australia by 8 wickets in the 2016 final in Kolkata",
      "New Zealand won their first Women's T20 World Cup in 2024",
      "South Africa have been runners-up twice (2023, 2024) without winning",
    ],
    faqs: [
      {
        q: "Who has won the Women's T20 World Cup the most times?",
        a: "Australia have won the Women's T20 World Cup the most times — six titles (2010, 2012, 2014, 2018, 2020, 2023).",
      },
      {
        q: "Who is the current Women's T20 World Cup champion?",
        a: "New Zealand are the current champions, having won the 2024 ICC Women's T20 World Cup by defeating South Africa by 32 runs in the final in Dubai.",
      },
      {
        q: "When was the first Women's T20 World Cup?",
        a: "The first ICC Women's T20 World Cup was held in England in 2009. England won the inaugural edition, defeating New Zealand by 6 wickets in the final at Lord's.",
      },
      {
        q: "How many fans attended the 2020 Women's T20 World Cup final?",
        a: "The 2020 ICC Women's T20 World Cup final between Australia and India at the Melbourne Cricket Ground was attended by 86,174 fans — a world record for a women's cricket match.",
      },
      {
        q: "Has India ever won the Women's T20 World Cup?",
        a: "India have not yet won the Women's T20 World Cup. Their best result was reaching the 2020 final, where they lost to Australia by 85 runs at the MCG.",
      },
    ],
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
    summary:
      "The ICC Women's Under-19 T20 World Cup is the newest ICC global event, launched in January 2023 to provide a dedicated pathway for young women cricketers. India have dominated both editions so far, winning the inaugural tournament in South Africa and defending their title in Malaysia in 2025. The tournament has already uncovered exceptional talent, with players like Gongadi Trisha producing outstanding all-round performances on the biggest stage.",
    keyFacts: [
      "Youngest ICC global event — first edition held in January 2023 in South Africa",
      "India won the inaugural 2023 edition, beating England by 7 wickets",
      "India retained the title in 2025, beating South Africa by 9 wickets in Kuala Lumpur",
      "Gongadi Trisha took 3/15 and scored 44* in the 2025 final",
      "The tournament is a T20 format, unlike the senior Women's World Cup which is ODI",
      "Two editions played; India the only champion so far",
    ],
    faqs: [
      {
        q: "When did the Women's U-19 T20 World Cup start?",
        a: "The ICC Women's Under-19 T20 World Cup was first held in January 2023 in South Africa. India won the inaugural edition by defeating England by 7 wickets in the final in Potchefstroom.",
      },
      {
        q: "Who has won the Women's U-19 T20 World Cup?",
        a: "India are the only team to have won the Women's U-19 T20 World Cup, claiming both the 2023 and 2025 editions.",
      },
      {
        q: "Who is the current Women's U-19 T20 World Cup champion?",
        a: "India are the current champions, having won the 2025 edition by defeating South Africa by 9 wickets in the final at the Bayuemas Oval in Kuala Lumpur, Malaysia.",
      },
      {
        q: "Why was the Women's U-19 T20 World Cup created?",
        a: "The ICC created the Women's Under-19 T20 World Cup to provide a dedicated global pathway for young women cricketers and to accelerate the development of the women's game worldwide.",
      },
    ],
    winners: [
      { year: 2025, champion: "India", runnerUp: "South Africa", venue: "Bayuemas Oval, Kuala Lumpur", final: "India won by 9 wickets (Gongadi Trisha 44* & 3/15)" },
      { year: 2023, champion: "India", runnerUp: "England", venue: "Potchefstroom, South Africa", final: "India beat England by 7 wickets" },
    ],
  },
];

export function getTrophyById(id: string): Trophy | undefined {
  return trophies.find((t) => t.id === id);
}
