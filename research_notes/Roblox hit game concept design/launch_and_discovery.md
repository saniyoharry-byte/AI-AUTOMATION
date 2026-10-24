# Launch & growth for a solo / 2–3 person Roblox team (2025–2026): discovery, marketing, production feasibility

Method note (2026-10-24): devforum.roblox.com, create.roblox.com, gamesbeat.com, rowatcher.com and odt.co.nz all failed DNS from this sandbox. The Roblox creator-docs GitHub mirror (raw.githubusercontent.com) worked for the Ads Manager doc but returned 404 for discovery paths. Except where a finding says "fetched", it comes from search-engine snippets of the cited page, so exact wording is unverified. This builds on `/home/user/AI-AUTOMATION/research_notes/Roblox state October 2026/platform_policy_tools.md`, which already covers these, and they are not repeated here:
- the 28-day RFY change
- thumbnail personalization
- Kids/Select gate details (250 HEPs, fee, 50k expedited review)
- ad-policy rules for minors
- the Studio AI and MCP feature timeline
- Build and Scene Generator

## 1. Discovery in 2026: how players find new games and what metrics earn algorithmic traffic

### Takeaway
Home "Recommended For You" (RFY) is the main engine. It ranks games by **per-user averages**:
- play-through rate from RFY impressions (officially the most important signal)
- first-play bounce, a negative signal
- play days per user
- since Jun 2026, 28-day retention (D1, D2–7, D8–28) and spend

For under-16 audiences, a new game first has to pass the Kids/Select engagement gate. Raw CCU spikes and clickbait matter less than in 2024–25. The editorial "Standout Games" sort is a nomination-based side door for novel games.

### Cited Findings
- **Play-through rate is the most important signal:** "the rate at which users play your game after seeing it in the Recommended for You sort". — [create.roblox.com/docs/discovery](https://create.roblox.com/docs/discovery) (snippet)
- **First-play bounce rate is a negative signal.** "high bounce rates suggest players aren't finding enough to stay engaged early in their session." **Play days per user**, the average number of unique days users engage, is also a signal. — [create.roblox.com/docs/discovery](https://create.roblox.com/docs/discovery) (snippet)
- Signals are calculated **as averages per user, not totals**. Creators check RFY performance under Creator Analytics > Acquisition > Home Recommendations. — [Discovery FAQ](https://create.roblox.com/docs/discovery-faq) (snippet)
- In Jun 2026 RFY moved from a 7-day to a 28-day view. Play-through, session quality and retention are now measured separately. — [DevForum: RFY Algorithm Improvements That Better Value Long-Term Retention](https://devforum.roblox.com/t/recommended-for-you-algorithm-improvements-that-better-value-long-term-retention/4684575), [Roblox Newsroom Jun 2026](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox) (snippets; see prior notes)
- **Standout Games** is a curated Home sort for *novel* games, picked by Roblox's curation team through an ongoing nomination survey. Roblox defines novelty as unique, in-depth mechanics, a distinctive visual style, or an underrepresented genre. It recommends a gameplay video, localization and best-practice thumbnails, and lists the sort as open. — [create.roblox.com Standout Games](https://create.roblox.com/docs/creator-programs/standout-games) (snippet)
- **Search and ads penalize sameness:** Roblox docs say games that aren't unique may get no ad spend or conversions, and similar games may rank lower in search. — [creator-docs Ads Manager (fetched via GitHub mirror)](https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/promotion/ads-manager.md)
- **Kids/Select:** a DevForum post says Roblox plans to relax the "Highly Engaged Player" definition, which it estimates would raise new games entering Kids/Select by about 33% per day. Eligibility is based on how users aged 16+ engage, plus user reports. — [DevForum: Kids and Select Global Launch](https://devforum.roblox.com/t/roblox-kids-and-select-global-launch-upcoming-updates-to-eligibility-ads-manager-and-expedited-review/4685717) (snippet)
- **Benchmark:** median D1 retention is about 10.3% even among large games. — [GameAnalytics 2026 Roblox report](https://www.gameanalytics.com/reports/2026-roblox-report) (via prior notes)
- **Server fill (practitioner opinion):** a developer blog says new games get a short discovery window, and half-empty servers look dead and suppress promotion. It recommends smaller max server sizes at launch. This is a first-person account, not data. — [rowatcher: Why Your Roblox Game Dies at 50 Players](https://rowatcher.com/news/why-your-roblox-game-dies-at-50-players-not-5-000) (snippet)

### Inferences
- **Launch metric targets for a small team:**
  1. a high RFY play-through rate, meaning the thumbnail matches the game
  2. a low first-session bounce, with a clear hook within about 60 seconds
  3. a reason to return across several days (play-days/user, D7/D28)
  4. a non-zero spender rate, which feeds the spend signal and HEP qualification
- Because the signals are per-user averages, a small but well-targeted audience can outrank a large untargeted one. Buying broad, low-intent traffic can drag averages down.
- The "Up-and-Coming" style of lift now probably runs through RFY test impressions plus Standout nomination, not a fixed public sort (see Gaps).

### Gaps
- I couldn't confirm a current "Up-and-Coming" sort or any public chart-eligibility thresholds. Search found nothing under that name for 2026.
- I couldn't get the published signal weights or numeric thresholds, because the docs and DevForum pages could not be fetched.

## 2. Marketing that works: ads, short-form video, YouTubers, Discord/groups, events, update spikes

### Takeaway
The only paid channel inside Roblox is **Ads Manager sponsored ads**:
- auto-bid, billed per play (CPP), with Plays, Earnings and Engagement goals
- placed on Home and in search
- the Engagement goal specifically buys Kids/Select HEP plays

Third-party estimates put cost at about 4–12 Robux per visit (unverified). Outside Roblox, organic short-form video and creators drive breakouts. In-game timed live events and weekly updates produce the biggest spikes. The 2025 mega-hits used weekend "Admin Abuse" events and a hyped cross-game rivalry that set a 47M platform CCU record.

### Cited Findings
**Roblox Ads Manager (official, fetched)** — [creator-docs Ads Manager](https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/promotion/ads-manager.md)
- **Goals:**
  - **Plays:** broad reach and testing.
  - **Earnings** (limited availability): targets likely spenders and reports ROAS.
  - **Engagement:** targets age-checked, highly engaged players whose sessions count toward the Kids/Select threshold. Docs say to expect a higher cost per play, and campaigns don't auto-pause when the threshold is reached.
- **Bidding and budget:**
  - Auto-bidding only: you set a budget (daily or lifetime) and a duration.
  - "Engaging games may get better performance through ads system discounts."
  - Minimum purchase is 1 ad credit.
- **Audiences:** All, New (never played or 180+ days away), Recent (needs 10k+ recent players), Lapsed (needs 20k+). Optional targeting by location, age, gender, genre and device.
- **Creatives and placement:** up to 10 16:9 thumbnails per campaign, rotated evenly. An AI generator creates 3 variants from text. Ads show on Home and in search results.
- **Account and payment rules:**
  - Ads Manager is open to 13+ with a verified email.
  - Card payment requires 18+.
  - Robux can be converted to ad credit from 13+, irreversibly, and Robux earned at the 18+ DevEx rate is converted first.
  - Group-owned games are supported.
- **Measurement and refunds:**
  - Plays and earnings are attributed for up to 30 days, with up to 48h delay.
  - The first 24h is a "Learning" phase.
  - Invalid-traffic refunds are issued 16 days after a campaign ends.
- **Ad cost (unverified):** a third-party post says DevForum developers estimate about **4–12 Robux per visit**, with obby and tycoon at the high end. It frames ads as a break-even calculation that small developers often skip. — [rowatcher: Roblox Ads in 2026: The Break-Even Math](https://rowatcher.com/news/roblox-ads-in-2026-the-break-even-math-small-devs-ignore) (snippet; DevForum source not verified)
- **Older sponsored-items docs** define cost per click, cost per purchase and conversion rate. — [create.roblox.com sponsor items](https://create.roblox.com/docs/marketplace/sponsor-items) (snippet)
- **Short-form video and creators:**
  - A vendor guide says the fastest-growing Roblox channels in 2026 are built on YouTube Shorts, at about 3–5 clips per week. — [Eklipse: Roblox YouTube Shorts strategy](https://blog.eklipse.gg/beginner-guide-2/roblox-youtube-shorts-strategy.html)
  - RoLearn (Mar 2026) claims 35–45% of new-player sessions for games above 10k CCU trace back to a content-creator interaction, citing "internal Roblox data". This is unverified and comes from a commercially interested source. — [RoLearn: Roblox content creator landscape 2026](https://rolearn.dev/trend-reports/roblox-content-creator-landscape-2026)
  - Influencer marketplaces and agencies exist (e.g., BLOXG, Checksmark). — [gamespace: Top 5 Roblox Marketing Agencies](https://gamespace.com/all-articles/news/top-5-roblox-marketing-agencies/)
  - Roblox Moments is an on-platform short-form clip feed, which also serves as ad inventory. — [eMarketer](https://www.emarketer.com/content/roblox-moments-turns-players-creators-generating-new-ad-inventory)
- **Live events and update spikes:**
  - Grow a Garden and Steal a Brainrot both ran recurring weekend **"Admin Abuse"** events: log in during a window to receive limited drops. These events are FOMO-driven and had pushed each game to about 15M CCU.
  - On Aug 23, 2025 the two developers (Jandel and SpyderSammy) hyped a head-to-head "admin war". Both games passed 20M CCU and Roblox hit about 47.4M platform CCU, a record. — [Tubefilter](https://www.tubefilter.com/2025/08/25/roblox-grow-garden-steal-brainrot-admin-war-record/amp/), [Notebookcheck](https://www.notebookcheck.net/Roblox-achieves-record-breaking-47-4-million-concurrent-players-in-August-despite-recent-legal-controversies.1096346.0.html)
  - Grow a Garden's update spikes (Blood Moon about 5M in May 2025, Summer Update 21.3M in June 2025) often **fell back within an hour** of release. — [allthings.how: Grow a Garden player count](https://allthings.how/grow-a-garden-player-count-server-limit-and-record-highs/)
  - Steal a Brainrot's "Extinct Event" on Sep 13, 2025 reached 24M CCU, and its peak hit 25.4M in Oct 2025. — [Tubefilter](https://www.tubefilter.com/?p=188004), [Wikipedia: Steal a Brainrot](https://en.wikipedia.org/wiki/Steal_a_Brainrot) (snippets)
- **Grow a Garden's take-off:** after Splitting Point joined, the team started **weekly live updates**, and the game went from about 500 to about 100k CCU within roughly two weeks. — [GamesBeat Jandel interview](https://gamesbeat.com/janzen-madsen-interview/), [Wikipedia: Grow a Garden](https://en.wikipedia.org/wiki/Grow_a_Garden) (snippets)
- **Groups:** Steal a Brainrot's owning group "BRAZILIAN SPYDER" reportedly has about 22–29M members, giving it a large owned audience for update notifications. — [eldorado.gg](https://www.eldorado.gg/blog/steal-a-brainrot-en/sammy-steal-a-brainrot-guide/) (fan/guide site; low reliability)

### Inferences
- **Ads as a budget item:**
  - At 4–12 R$/visit, 10,000 test plays cost about 40k–120k R$. That is roughly $140–$420 at the 0.0035 DevEx rate, or about $400–$1,200 at Robux purchase prices (my arithmetic, unverified).
  - The Plays goal suits early thumbnail and hook testing. The Engagement goal is the paid route into Kids/Select.
  - Paid scale only makes sense once D1, D7 and payer rate are known.
- Weekly updates on a fixed day/time, plus timed "join now" events, are the most repeatable lever a tiny team controls. Spikes are short-lived, so their value lies in feeding play-days and retention, not peak CCU alone.
- Rivalry and crossover events between games can create news cycles (the Aug 2025 admin war). This requires an existing relationship with another developer.
- A solo team's highest-ROI off-platform activity is probably cheap clip production (Shorts/TikTok), plus seeding small and mid-size Roblox YouTubers. Big creators find games once they are already trending.

### Gaps
- I found no verified primary account of exactly *how* Grow a Garden or Steal a Brainrot first went viral on TikTok or YouTube, beyond the update and event cadence. No first-party CPP or ROAS case studies were found for 2026.
- No data was found on Discord-community size versus retention, or on badge strategies.

## 3. Case studies: solo and tiny teams that broke out (2024–2026)

### Takeaway
The 2025 mega-hits began as **tiny, fast prototypes** and were **scaled by established studios through equity partnerships**. Grow a Garden was a 16-year-old's 3–4 day build, which Jandel's Splitting Point took a share of at about 1k CCU, with DoBig taking a minority stake. Steal a Brainrot was led by SpyderSammy and linked to Do Big Studios. 99 Nights in the Forest came from a 3-founder core team with prior hits.

### Cited Findings
- **Grow a Garden:**
  - Created by **BMWLux, aged 16**, in "three or four days" (Jandel to RNZ). Released **Mar 26, 2025**.
  - **Splitting Point Studios** (Janzen "Jandel" Madsen, NZ, aged 28) "picked up the game when it had only a few thousand users". BMWLux kept about 50%, and **DoBig Studios** holds a minority share.
  - Peak **22.3M CCU** (Aug 23, 2025), with about 60M DAU cited.
  — [GamesBeat](https://gamesbeat.com/janzen-madsen-interview/), [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden), [ODT/RNZ](https://www.odt.co.nz/entertainment/gaming/millions-going-mad-nz-made-garden-game-rnz), [AP via ClickOnDetroit](https://www.clickondetroit.com/business/2025/07/30/millions-are-flocking-to-grow-virtual-gardens-in-viral-roblox-game-created-by-teenager/) (snippets). Search summaries gave conflicting dates for when the stake was taken (an "April 2026" date is impossible).
- **Steal a Brainrot:**
  - Lead developer **SpyderSammy**, released **May 16, 2025**, built on the "Italian brainrot" meme trend.
  - Ownership attribution conflicts: Wikipedia lists DoBig Studios, while fan sites credit the BRAZILIAN SPYDER group.
  - It is the first Roblox game over 25M CCU (25.4M).
  — [Wikipedia](https://en.wikipedia.org/wiki/Steal_a_Brainrot), [eldorado.gg](https://www.eldorado.gg/blog/steal-a-brainrot-en/sammy-steal-a-brainrot-guide/) (team headcount not found)
- **Do Big Studios:** founded 2020 by John Cannata. Its model combines full acquisition, investment in promising titles, and support for indie developers. Its portfolio is reported to include Steal a Brainrot, Grow a Garden (minority) and Blade Ball. — [IBTimes profile](https://www.ibtimes.com/do-big-studios-creative-force-redefining-roblox-gaming-3777585), [Crunchbase](https://www.crunchbase.com/organization/do-big-studios) (snippets; profile reads promotional)
- **99 Nights in the Forest** (Grandma's Favourite Games, NZ, founded 2020):
  - The core is **three creators**: Cracky4/Alec Kieft (design and art direction), ForyxeV/Hufton (programming) and Viridial/Angland (building and modelling), plus one more artist and an animator.
  - The team previously made Break In 1/2, Mall Tycoon and Wacky Wizards.
  - 20th Century Studios has film rights, with Josh Cooley reportedly writing.
  — [DevForum Creator Spotlight](https://devforum.roblox.com/t/creator-spotlight-the-story-behind-99-nights-in-the-forest/4036940), [Pryor Cashman](https://www.pryorcashman.com/news/pryor-cashman-client-grandmas-favourite-games-99-nights-in-the-forest-headed-to-the-big-screen), [TheWrap](https://www.thewrap.com/creative-content/movies/20th-century-studios-roblox-game-99-nights-in-the-forest/), [Dread Central](https://www.dreadcentral.com/news/589236/josh-cooley-to-pen-adaptation-of-survival-horror-game-99-nights-in-the-forest-for-20th-century-studios/) (snippets)
- **Doors** (LSPLASH): a small group (Lightning_Splash plus co-developer RediblesQW, among others). Development started around late 2020/Mar 2021, with a sneak peek on Jul 15, 2021, and release on **Aug 10, 2022**, so more than a year of development. — [Know Your Meme](https://knowyourmeme.com/memes/subcultures/roblox-doors), [Wikipedia: Doors](https://en.wikipedia.org/wiki/Doors_(game)) (snippets; pre-2024)
- **Publishers:** Gamefam (Series A $25M, 2022) provides "tools, resources and processes" to creators and acquires games, e.g., the games tied to Moose Toys/Goo Jit Zu. — [Gamefam](https://gamefam.com/news/gamefam-closes-25m-series-a-raise-fueling-studios-rapid-growth), [wnhub](https://wnhub.io/news/stores-and-publishing/item-18424)
- **Post-viral decay:** an unsourced blog claim says about 80% of games that peaked in the 2024 top 50 were not in the top 200 by early 2026. — [rowatcher: One Year on the Charts](https://rowatcher.com/news/one-year-on-the-charts-what-really-happens-after-a-roblox-game-goes-viral) (unverified)
- **MrBeast's Beast Games experience:** its decline is blamed on reliance on free UGC limiteds with no lasting goal, and development reportedly stopped within 3 months. — [roonby](https://roonby.com/2025/07/11/why-mrbeasts-roblox-game-failed/) (blog)

### Inferences
- A realistic small-team path has two stages:
  1. Ship a simple, meme-legible core loop fast (days to weeks).
  2. If early CCU or retention shows traction, either run weekly live-ops yourself or bring in a live-ops partner. Partners such as Splitting Point, DoBig and Gamefam take equity in exchange for content throughput, ads money and cross-promotion.
- Doors and 99 Nights show the other path: a polished, longer build (a year or more) by a team with prior hits. A first-time solo developer should treat this as the less likely route.
- The deal pattern seen is roughly 50/50 equity (GaG). Exact terms are not public.

### Gaps
- No primary interviews were fetched; GamesBeat and DevForum were unreachable. BMWLux's and Sammy's own dev-time and team details are unverified.
- No information was found on Splash (the studio) deals with small developers in 2025–26.

## 4. Production feasibility: MVP scope, AI tools, assets, hiring, testing, cloning

### Takeaway
A playable MVP of a simple loop is feasible in **days to a few weeks**: Grow a Garden took about 3–4 days. The 2026 Studio Assistant/MCP agent loop and Build further cut boilerplate time (prior notes). Freelance help costs roughly **$15–$60/hr** for single-role Talent Hub contractors (vendor estimate). **Cloning is near-certain** for any hit. Successful teams respond with copyright registration and lawsuits, plus out-shipping clones on updates. Indie developers increasingly use closed rather than public playtests.

### Cited Findings
- **Build time:** Grow a Garden's original version took "three or four days". — [ODT/RNZ](https://www.odt.co.nz/entertainment/gaming/millions-going-mad-nz-made-garden-game-rnz), [GamesBeat](https://gamesbeat.com/janzen-madsen-interview/) (snippets)
- **AI tooling (prior notes):** Assistant plus the built-in MCP server can write code, run playtests, simulate input and take screenshots. A DevForum post claims "We Built a Full Game With 2 People Using AI in Studio". Build reports about 9k games published. — [DevForum 4474643](https://devforum.roblox.com/t/assistant-updates-studio-built-in-mcp-server-and-playtest-automation/4474643), [DevForum 4308613](https://devforum.roblox.com/t/we-built-a-full-game-with-2-people-using-ai-in-studio-heres-the-tool/4308613)
- **Hiring costs (vendor blog, rough):**
  - Talent Hub single-role freelancer about $15–$60/hr
  - mid-level Luau $15–$40/hr, senior systems $50–$120+/hr
  - a full game from scratch $20k–$150k+
  - one builder's 2024 Robux pricing: 50–200 R$ for small parts, 1k–10k R$ for larger models
  — [Game-Ace hiring guide](https://game-ace.com/blog/how-to-hire-the-best-roblox-game-developer/), [Knight Productions commissions](https://knightproductionspayment.carrd.co/) (snippets)
- **Cloning:**
  - Bloomberg reports Steal a Brainrot "battles its many imitators". Spyder Games and Speedy Simulator Gaming have filed **at least four lawsuits** against alleged imposters since Nov 2025, and the game was registered with the US Copyright Office (Aug 2025). — [Bloomberg 2026-03-24](https://www.bloomberg.com/news/articles/2026-03-24/roblox-s-hit-game-steal-a-brainrot-battles-its-many-imitators), [OpenCritic](https://opencritic.com/news/22635/robloxs-steal-a-brainrot-devs-sue-fortnites-stealing-brainrots-dev-over-allegedly-stolen-content) (snippets)
  - One suit targets a Fortnite Creative map for copying UI, art, level design and animations. Meanwhile, an *officially licensed* Fortnite version ("Steal The Brainrot") exists. — [Aftermath](https://aftermath.site/brainrot-roblox-court/)
  - Indie developers are pulling public demos in favor of closed playtests over copycat fears (Oct 2026). — [GamingHQ](https://gaminghq.eu/2026/10/18/indie-developers-roblox-copycat-games/) (via prior notes)
- **Uniqueness:** Roblox's ads system may give non-unique games no ad delivery and rank similar games lower in search. — [creator-docs Ads Manager (fetched)](https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/promotion/ads-manager.md)

### Inferences
- **Suggested MVP for 1–3 people:**
  - one core loop, one map, 3–5 progression tiers
  - save data, a basic shop with 1–3 game passes and dev products, and an event hook
  - built in about 2–6 weeks with AI-assisted scripting and Creator Store or commissioned hero assets
  - then a cadence of one update per week
- **Testing:** run closed playtests through a private or friends group, Discord, and the Studio playtest agent before a public launch. Then use small Plays-goal ad buys to measure play-through, bounce and D1 before scaling.
- **Clone defense is mostly speed:** keep updating weekly, build a group and community, register copyright if the game succeeds, and use Roblox's IP/DMCA process. Distinctive IP such as characters and art is easier to defend than mechanics.

### Gaps
- No 2025–26 source was found on Creator Store asset licensing terms. I couldn't fetch the docs, so the licensing risk of free models (backdoors, ownership) is unverified.
- No verified Talent Hub rate data was found, only a vendor blog.

## 5. Common reasons new Roblox games fail

### Takeaway
The recurring failure modes are:
- no early hook, which means high first-play bounce and low play-through, the top RFY signals
- no reason to return, which means low play-days and D7/D28
- launching into empty servers
- shipping and then stopping updates
- being an undifferentiated clone, which ads and search now penalize
- (since 2026) being invisible to under-16s until the Kids/Select gate is passed

### Cited Findings
- **Signals:** RFY weights play-through highest and penalizes first-play bounce. Play days per user is a signal. — [create.roblox.com/docs/discovery](https://create.roblox.com/docs/discovery) (snippet)
- **Empty servers:** half-empty servers kill social proof and suppress promotion; the blog recommends small server sizes at launch (practitioner opinion). — [rowatcher](https://rowatcher.com/news/why-your-roblox-game-dies-at-50-players-not-5-000)
- **No lasting goal:** the Beast Games example combined freebie-driven acquisition, no lasting goal, and development stopping within 3 months. — [roonby](https://roonby.com/2025/07/11/why-mrbeasts-roblox-game-failed/)
- **Sameness:** non-unique games get little ad delivery and lower search rank. — [creator-docs Ads Manager](https://raw.githubusercontent.com/Roblox/creator-docs/main/content/en-us/production/promotion/ads-manager.md)
- **Short spikes:** update spikes fade within an hour if the content doesn't hold players. — [allthings.how](https://allthings.how/grow-a-garden-player-count-server-limit-and-record-highs/)
- **Rushed launches:** a generic article lists rushed, buggy launches driven by monetization pressure. — [dptribune: 5 mistakes creators make](https://business.dptribune.com/dptribune/news/read/41154510/5_mistakes_creators_make_building_new_games_on_roblox) (low specificity)
- **Low benchmark:** median D1 is about 10%. — [GameAnalytics 2026](https://www.gameanalytics.com/reports/2026-roblox-report)
- **Kids/Select gate:** new games have no under-16 reach until 250 highly-engaged plays in 60 days (prior notes). — [creator-docs Kids & Select](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md)

### Inferences
- **Rough go/no-go gates** for a small team: D1 below about 10% or a high first-play bounce after the first few thousand test plays means iterating on the hook before buying more traffic or adding content.
- The 2026 algorithm makes "make a trend clone fast" weaker than in 2025. A trend-adjacent but *distinct* hook, plus a retention system and a weekly update cadence, is the realistic recipe.

### Gaps
- No quantitative r/robloxgamedev or DevForum postmortem dataset was found. The search results were dominated by spam or SEO pages.
