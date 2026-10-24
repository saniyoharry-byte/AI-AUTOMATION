# Retention & "Classic" Staying Power on Roblox — Design Framework Research

Method note: Researched 2026-10-24. Direct fetches of create.roblox.com, about.roblox.com, gamedeveloper.com and rolearn.dev failed (DNS errors from the sandbox), so findings from those domains come from **search-result snippets**, not full-page reads. Several search results were SEO/spam pages; those are excluded or flagged. Inferences are separated from cited facts.

## 1. What Roblox's own guidance and data say about retention (FTUE, benchmarks, session length, 28-day discovery change, segments, motivations)

### Takeaway
Since mid-2026 Roblox's Recommended For You (RFY) algorithm explicitly optimizes for **28-day retention**, with play-through rate as the top signal and first-play bounce (sessions <60s and 61–180s) as a negative signal. That makes the first 1–3 minutes and the D8–D28 return window the key design targets. Roblox does not publish universal D1/D7 targets. Instead it gives percentile benchmarks against similar games inside Creator Analytics.

### Cited Findings
- **28-day change:** Roblox's June 2026 newsroom post (dated June 15) says RFY was expanded from a 7-day view to a **28-day view that directly measures long-term retention**, and that Roblox shared the full signal list and relative importance with creators. New signals include **play-through rate** and **first-play bounce rate**, alongside spend amount and frequency. — [Roblox Newsroom (snippet)](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox); [API Evangelist summary](https://blogs.apievangelist.com/blogs/roblox-2026-06-15-optimizing-discovery-how-great-games-reach/)
- Timing conflict: one outlet says the RFY shift was implemented in **April 2026**, while Roblox's post is dated June 15, 2026. — [godisageek](https://godisageek.com/2026/08/roblox-9-billion-algorithm-change/) vs [Roblox Newsroom](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox)
- **Discovery docs:** play-through rate (how often players who see the game in a sort go on to play it) is the most important signal. First-play bounce rate is negative and bucketed into sessions **under 60 seconds** and **61–180 seconds**. Impressions typically fall when play-through rate, play days per user or playtime per user drop, or when bounce rises. Creators can compare play days and playtime across **D1, D2–D7 and D8–D28** windows. The docs advise benchmarking against games your users also play. — [Creator Hub: Discovery (snippet)](https://create.roblox.com/docs/production/promotion/discovery)
- **Business effect:** Roblox's Q2 2026 shareholder letter says the change "intentionally provides more impressions for highly retentive games at the expense of near term monetization". Bookings grew only 8% to $1.56B. The fall in spending per hour was larger than expected among younger players in the US and Canada, attributed to engagement shifting toward newer and evergreen games with lower hourly monetization. Q3 bookings were guided down 14–18% YoY. — [Nasdaq](https://www.nasdaq.com/articles/roblox-guided-bookings-down-much-18-and-withdrew-its-full-year-outlook-algorithm-change); [PocketGamer.biz](https://www.pocketgamer.biz/roblox-revenue-rises-36-yy-but-young-north-americans-see-falling-per-hour-monetisation/); [SEC 8-K Q2 2026](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm)
- **Benchmarks:** Roblox's analytics docs call **D1 retention and average session time** the key early metrics and treat D7/D30 as long-term signals. Creators are told to get D1 and session time to or above benchmarks for similar experiences before scaling paid acquisition. Benchmark scorecards need **100+ DAU** and show **50th–90th percentile** ranges. The overall benchmarking pool is the **top 1,000 experiences by 30-day playtime** (Top 200/500/1000 tiers). The docs say benchmarks are **not** a direct discovery signal. — [Creator Hub Analytics (snippet)](https://create.roblox.com/docs/production/analytics); [Retention docs (snippet)](https://create.roblox.com/docs/en-us/production/analytics/retention.md)
- Third-party, unverified claim: retention varies by genre. "40% D1 is exceptional for a roleplay game and mediocre for a well-optimized obby." — [RoWatcher](https://rowatcher.com/news/the-roblox-analytics-stack-how-studios-win-with-data-in-2026) (low reliability, no methodology)
- **Session length / platform engagement:** Q2 2026 had **123M DAU** (+10% YoY) and ~**29B engagement hours** (+5% YoY), down from a 40B peak in Q3 2025. Derived: about 236 hours per DAU per quarter, or roughly 2.6 hours/day. This is my calculation, not a company figure. — [Shacknews](https://www.shacknews.com/article/150208/roblox-daus-grew-10-percent-yoy); [SEC 10-Q](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051082/rblx-20260630.htm)
- **Motivations:** A Game Developer article quotes Roblox devs saying socialization is what makes the platform work. In Driving Empire, 66% of returning players complete a core action daily (Dungeon Quest: 55%). 34% of Driving Empire and 45% of Dungeon Quest players log in **without actually playing**, i.e. to hang out. — [Game Developer (snippet)](https://www.gamedeveloper.com/design/roblox-devs-say-socialization-is-what-makes-the-creator-led-sandbox-tick)
- A player-motivation dataset reported by PocketGamer.biz puts Roblox players **75% above genre average on social competition** and **56% above on social cooperation** (dataset not named in the snippet). — [PocketGamer.biz](https://www.pocketgamer.biz/data-and-research/73754/player-motivations-roblox-fortnite-candy-crush-saga/)
- Roblox's own 2020 teen survey (n=2,926, ages 13–18): 79% play favorite games, 64% try new games, 62% have conversations. It is old and company-run. — [GamesBeat](https://gamesbeat.com/roblox-how-teens-are-using-games-to-cope-with-the-pandemic/)

### Inferences
- **FTUE target (inferred from the bounce buckets):** a new player must reach a rewarding core action within roughly 60 seconds and feel a first "hook" (first rare drop, first upgrade, first friend interaction) before about 3 minutes. Long cutscenes, unskippable tutorials, loading walls and text-heavy UIs directly hurt a ranked signal.
- Play-through rate depends on the thumbnail, icon and title as well as gameplay. Concept clarity ("you can tell what you do from the thumbnail") is a retention-ranking input, not just marketing.
- **"Tourists vs locals":** I found no Roblox source using this framing. The closest official equivalent is Roblox's D1 vs D2–D7 vs D8–D28 split. Design implication: serve "tourists" (D1 clarity, instant fun) and "locals" (D8–28 goals such as long collections, trading, social status, events) with separate layers.
- The 28-day window rewards **evergreen** designs with long-term goals over short burst monetization. Expect fewer ranking wins for aggressively monetized "slop".

### Gaps
- Actual numeric D1/D7/D30 for top Roblox games is not public. It is only in Creator Hub benchmark scorecards (100+ DAU required) or third-party trackers.
- I found no official Roblox "first-time user experience" design guide, and no "tourists vs locals" segmentation source.
- The exact signal weights from the June 2026 post could not be fetched (DNS failure). The full post should be read for the ranked signal list.
- The official mobile share of DAU was not found (see section 5).

## 2. Core loop and progression patterns that work on Roblox

### Takeaway
The 2025–26 mega-hits (Grow a Garden, Steal a Brainrot) and long-running simulators share a pattern. They have a dead-simple idle/incremental loop, layered with collection (rarity plus random mutations/traits), prestige/rebirth multipliers, timed restocks/events and trading. The loop is easy to read in seconds and scales without limit.

### Cited Findings
- **Grow a Garden:** an idle/incremental loop (plant → harvest → sell → expand), described as "simple, satisfying, and infinitely scalable". Layered on top are rare seed varieties with **randomized traits (mutations)**, seasonal events, player trading, and **prestige resets for permanent multipliers**. The analysis argues the polished loop and dedicated players existed **before** content creators amplified it. — [RoLearn (snippet)](https://rolearn.dev/insights/grow-a-garden-ccu-record-analysis)
- Roblox said Grow a Garden's success was "fuelled by exceptional user retention and vibrant social interactions". A Chinese analysis credits easy farming plus light management, a relaxed art style and a highly social structure. — [YCWB](https://news.ycwb.com/ikinvkmtjj/content_53462706.htm); [Breaking News English](https://breakingnewsenglish.com/2506/250623-grow-a-garden.html)
- Grow a Garden CCU peak: 21.3M on June 21, 2025, per one source, vs 21.9M in July 2025 per RoLearn. Wikipedia cites ≥22.3M during the Aug 23, 2025 admin war. — [Breaking News English](https://breakingnewsenglish.com/2506/250623-grow-a-garden.html); [RoLearn](https://rolearn.dev/insights/grow-a-garden-ccu-record-analysis); [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden)
- **Steal a Brainrot loop:** "buy → generate income → steal or be stolen from", plus rebirth and base locking as return drivers. This is a commentary piece, not authoritative. — [Medium essay](https://medium.com/@emtertoszef/steal-a-brainrot-phenomenon-6af7b49081e0)
- **Rebirth tuning (third-party guide):** each rebirth should take about **30–60 minutes of focused play**. Show the gain clearly before the reset (permanent 2x multiplier, a new area, exclusive pets). Tune thresholds from completion data. — [creation.dev simulator guide](https://www.creation.dev/learn/how-to-make-simulator-roblox)
- **Collection/rarity:** display odds, make legendary pets visually spectacular so others notice and want them, and use pet fusion as an item sink for duplicates. Milestone-gated areas (e.g. a new area at the first 1,000 currency). — [creation.dev pet sim guide](https://www.creation.dev/learn/how-to-make-pet-simulator-roblox); [creation.dev simulator guide](https://www.creation.dev/blog/roblox-simulator-game-guide)
- Uplift Games (Adopt Me!): "We want to keep every mechanic understandable, while giving the right level of depth to systems like building and trading that older audiences enjoy." The team uses Roblox Analytics plus Experiments (A/B tests) to tune features for very different play styles. Adopt Me! recently revamped trading with pet matching. — [Roblox Newsroom Aug 2026](https://about.roblox.com/newsroom/2026/08/optimize-testing-live-updates-roblox-analytics-experimentation-platform)

### Inferences
- **Recommended layering (synthesis):**
  1. A core action that is satisfying in under 10 seconds.
  2. Visible numeric growth (incremental).
  3. **Offline/idle progress** (crops grow or brainrots earn while away), which gives a reason to come back that fits the 28-day signal.
  4. Collection with rarity tiers plus random mutations, which creates chase and trade value.
  5. Rebirth/prestige every 30–60 minutes early, getting longer later.
  6. Timed restock shops and weather/events, which create "check back" appointments.
  7. Daily rewards, streaks and quests.
  8. Leaderboards and status display.
- Daily rewards and streaks directly target "play days per user", a named discovery signal. Notification-backed streaks are higher-leverage than pure in-session content.
- Understandable-but-deep (the Uplift quote) is the design north star for multi-age audiences.

### Gaps
- No primary dev postmortem (Jandel/Grow a Garden, Steal a Brainrot devs, BIG Games) with retention numbers was found.
- No sourced data on daily-reward or streak lift on Roblox specifically.
- Naavik/Deconstructor of Fun pieces on these games were not surfaced by search.

## 3. Social design

### Takeaway
Roblox is social-first. Players log in to hang out, and Roblox players over-index heavily on social competition and cooperation. Roblox provides first-party invite prompts, a Friend Referral reward system (April 2025) and opt-in experience notifications. Trading, stealing, showing off rare items and co-op/compete loops are what the hits build around.

### Cited Findings
- 34–45% of returning players in two studied games log in without playing a core action, attributed to hanging out and chatting. — [Game Developer (snippet)](https://www.gamedeveloper.com/design/roblox-devs-say-socialization-is-what-makes-the-creator-led-sandbox-tick)
- Roblox players rank +75% above genre average on social competition and +56% on social cooperation. — [PocketGamer.biz](https://www.pocketgamer.biz/data-and-research/73754/player-motivations-roblox-fortnite-candy-crush-saga/)
- **Friend Invite Reward System:** referral links come from invite prompts or the in-experience invite menu. Developers read the referrer ID from join data in PlayerAdded and reward both inviter and invitee. The Friend Referral Program launched in **April 2025**. — [Creator Hub referral docs (snippet)](https://create.roblox.com/docs/production/promotion/referral-system); [corp.roblox.com](https://corp.roblox.com/)
- **Player invite prompts** had been adopted by 7,000+ experiences (per a DevForum announcement, possibly dated). — [DevForum](https://devforum.roblox.com/t/player-invite-prompts/2170724?page=6)
- **Experience notifications:** opt-in, for **13+ users only**. They need 100+ visits and a game not under moderation. They must be tied to relevant in-game activity and prompt an action (no generic ads), and a game can't require notifications to progress. — [Creator Hub notifications (snippet)](https://create.roblox.com/docs/production/promotion/experience-notifications)
- Grow a Garden features **player trading**. Steal a Brainrot's core is player-vs-player stealing, which creates social conflict and stories. — [RoLearn](https://rolearn.dev/insights/grow-a-garden-ccu-record-analysis); [Medium](https://medium.com/@emtertoszef/steal-a-brainrot-phenomenon-6af7b49081e0)
- Adopt Me!'s revamped trading platform matches players to trade pets. — [Roblox Newsroom Aug 2026](https://about.roblox.com/newsroom/2026/08/optimize-testing-live-updates-roblox-analytics-experimentation-platform)

### Inferences
- Design for **visible status**: rare items and pets shown in the world (follow pets, plots/bases others can walk into, overhead titles). This drives "show off" and envy, which drives play-through and referrals.
- Light PvP interaction (stealing or raiding with protection/lock timers) creates strong return pressure ("protect my base"). Kids-tier audiences need gentler versions.
- Hook referral rewards into the core collection (e.g. an exclusive pet for inviter and invitee) and auto-surface invite prompts at moments of excitement (rare drop, event start).
- Notifications only reach 13+, so under-13 return loops must rely on in-game appointment mechanics (timers, daily rewards) and friend pull.

### Gaps
- No data on referral program lift or invite-prompt conversion.
- Spectating features and party APIs (e.g. any 2025–26 party system) were not researched due to the call budget.

## 4. LiveOps cadence of top games

### Takeaway
Top hits ran **weekly** content updates in 2025, with Saturday update drops and developer-triggered "Admin Abuse" events (the dev joins and spawns rare weather/items), plus cross-game stunts like the Grow a Garden × Steal a Brainrot "admin war". Weekly cadence proved hard to sustain even for the biggest hit. Grow a Garden's dev publicly pivoted to depth over quantity after "repetitive update" complaints.

### Cited Findings
- Grow a Garden received new content **every week**. In Aug 2025 creator Jandel announced a change to the weekly cycle and a focus on **depth of content over quantity**, and apologised for "repetitive" updates. — [NME](https://www.nme.com/news/gaming-news/roblox-grow-a-garden-major-changes-coming-update-cooking-3884432); [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden)
- Admin Abuse events are **manually triggered** by the developer. One for the Nov 15, 2025 update was scheduled an hour before the update dropped, though other guides call the timing unpredictable. — [Deltias Gaming](https://deltiasgaming.com/?p=311834); [Digital Citizen](https://www.digitalcitizen.life/grow-a-garden-admin-abuse-schedule/)
- A staged "admin war" between Grow a Garden and Steal a Brainrot on **Aug 23, 2025** set CCU records for both (GaG at least 22.3M CCU). — [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden)
- A fan tracker estimates Steal a Brainrot updates roughly **every 42 days** (≈6 weeks) as of late 2026, with the next projected for Nov 21, 2026 at 2 PM ET. It is unofficial. — [allthings.how](https://allthings.how/?p=163054)
- Roblox (Aug 2026) shipped real-time performance alerts and automated early warnings for experiments that hurt key metrics. Uplift uses Experiments to test live updates. — [Roblox Newsroom Aug 2026](https://about.roblox.com/newsroom/2026/08/optimize-testing-live-updates-roblox-analytics-experimentation-platform)
- PSU reports a "cheap trick" devs use to keep dead games alive (snippet only; content not verified). — [PSU](https://www.psu.com/news/the-cheap-trick-roblox-devs-use-to-keep-dead-games-alive/)

### Inferences
- **A sustainable cadence for a small team:** a fixed weekly "event day" (e.g. Saturday) driven by **systemic content** (new weather/mutation, limited restock, admin event) that is cheap to make, plus a larger content update every 3–6 weeks. This mirrors GaG's pivot and SaB's ~6-week rhythm.
- Countdown timers to the next update or event (in-world and on the thumbnail/title) create appointment play. This is a common pattern, but I found no citable data on its lift.
- Build content pipelines that are **data-driven** (new item = config row plus model), so weekly drops don't need code changes.
- Use Experiments to A/B test big changes before full rollout. The new early-warning alerts reduce the risk of retention regressions.

### Gaps
- No primary sources on the update cadence of Adopt Me!, Pet Simulator, Blox Fruits or Gamefam titles.
- No data on limited-time item or crossover lift, and no interviews with small teams on how they staff weekly ops.

## 5. Audience: age bands, mobile, simplicity

### Takeaway
Since April 2026 Roblox gates access by account tier: **Kids (5–8)** sees only Minimal/Mild games that passed a 3-step selection, **Select (9–15)** sees up to Moderate, and age-verified 18+ is needed for Restricted. Age-checked data shows a younger base than self-reports (36% under 13). Roughly 80% of users reach Roblox via phones or tablets, so the design must be mobile-first, readable and simple.

### Cited Findings
- **Roblox Kids (5–8):** limited to **Minimal/Mild** games that passed a three-step selection process, with communication off by default. **Select (9–15):** up to Moderate. Users move Kids → Select at age 9 and Select → standard at 16. Unverified accounts are limited to Minimal/Mild with no communication. Creators reaching Kids/Select need **ID verification, 2-step verification and an active Roblox Plus subscription**. — [Roblox Newsroom Apr 2026](https://about.roblox.com/newsroom/2026/04/introducing-roblox-kids-and-select-accounts); [BusinessWire](https://www.businesswire.com/news/home/20260413497398/en/Roblox-Introduces-New-Age-Based-Accounts-and-Expanded-Parental-Controls-for-Users-Under-16); [Content maturity docs](https://create.roblox.com/docs/en-us/production/promotion/content-maturity)
- **Age-checked users, 7 days to Mar 31, 2026:** 36% under 13, 38% aged 13–17, 26% over 18. Roblox notes age-checked data reveals a younger base than self-reported data. — [Q1 2026 Shareholder Letter](https://s27.q4cdn.com/984876518/files/doc_financials/2026/q1/Q1-2026-Earnings-Shareholder-Letter.pdf)
- **Self-reported (secondary, unverified):** 101.3M DAU over 13 vs 49.8M aged 13 and under in Q3 2025. — [DemandSage](https://www.demandsage.com/?p=851)
- Newzoo (2025): **~80% of users access Roblox via phones/tablets**, but only 24% of players aged 10–65 are mobile-only. 13+ user growth was 54% in Q2 2025 vs 22% for under-13. — [Newzoo via GameDevReports](https://gamedevreports.substack.com/p/newzoo-roblox-as-a-platform-in-2025)
- The Q2 2026 per-hour monetization drop was concentrated in younger US/Canada cohorts. — [PocketGamer.biz](https://www.pocketgamer.biz/roblox-revenue-rises-36-yy-but-young-north-americans-see-falling-per-hour-monetisation/)

### Inferences
- **Content rating is a distribution decision.** Staying at Minimal/Mild keeps the full funnel, including Kids and unverified accounts. A Moderate rating drops Kids (5–8) and unverified users.
- **Kids 5–8:** icon-driven UI, minimal reading, no reliance on chat (it's off by default), gentle non-punitive loss, bright collectibles.
- **Select 9–15:** trading, collection status, light competition, memes/brainrot culture.
- **13+/18+:** deeper systems (building, trading economies, optimization). Notifications are only available to 13+.
- **Mobile-first:** large tap targets, a one-thumb core action, short sessions that still progress, low-end device performance, and UI that doesn't cover the screen.

### Gaps
- Official current mobile share of DAU/hours was not found. The ~80% figure is Newzoo's estimate.
- No Roblox research on genre preferences per age band was found.

## 6. "High quality / classic" vs low-effort "slop"

### Takeaway
"Slop" is publicly associated with fast clones, free/low-quality assets and aggressive monetization or pay-to-win. Roblox's move to 28-day retention ranking explicitly favors retentive and evergreen games. Inference: polish, clarity and fairness now map more directly to discovery than before.

### Cited Findings
- Clones of hit games (Lethal Company, Exit 8, Buckshot Roulette) proliferate because a game that takes months on PC can be recreated "in a few days" on Roblox, with AI speeding it up. — [Plagiarism Today, Sep 2026](https://www.plagiarismtoday.com/2026/09/17/the-attack-of-the-roblox-clones/)
- Peak developer Aggro Crab called the Roblox clone "Cliff" a "microtransaction-riddled Roblox slop ripoff". — [Yahoo/IGN](https://tech.yahoo.com/gaming/articles/peak-dev-says-rather-players-182911672.html)
- Roblox says the 28-day change favors highly retentive games over near-term monetization, and engagement shifted to newer and **evergreen** games. — [Nasdaq](https://www.nasdaq.com/articles/roblox-guided-bookings-down-much-18-and-withdrew-its-full-year-outlook-algorithm-change); [PocketGamer.biz](https://www.pocketgamer.biz/roblox-revenue-rises-36-yy-but-young-north-americans-see-falling-per-hour-monetisation/)
- Grow a Garden's success was attributed partly to a **relaxed art style** and a polished core loop before going viral. — [YCWB](https://news.ycwb.com/ikinvkmtjj/content_53462706.htm); [RoLearn](https://rolearn.dev/insights/grow-a-garden-ccu-record-analysis)
- Shovelware descriptions (weaker, SEO-ish source): hastily assembled, free/low-quality assets, intrusive monetization and pay-to-win, lacking polish. — [iota.msp.org](https://iota.msp.org/drowning-in-obbies-the-rise-of-shovelware-spy-games-on-roblox)

### Inferences
- **A "classic" checklist (synthesis, not sourced as a whole):**
  - one cohesive art direction (stylized, readable silhouettes, consistent palette);
  - juice on every core action: pop/scale tweens, particles, sound and number pop-ups, satisfying rare-drop reveals with screen effects and server-wide announcements;
  - clear UI with icons, few buttons and mobile-sized targets;
  - original sound/music cues for key moments;
  - a fair-feeling economy (displayed odds, no hard paywalls on core fun);
  - stable performance on low-end phones;
  - an identity hook (a theme or meme players can name and share).
- A hit is "amplified, not created" by YouTubers/TikTok (the RoLearn argument). The loop must already retain before marketing.

### Gaps
- There is no Roblox-official definition or quality rubric and no data tying polish metrics to retention. The DevForum and RDC 2024–26 talks on game feel were not retrieved.
