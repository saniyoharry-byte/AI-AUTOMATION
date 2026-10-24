# Roblox Game Monetization & Owner Earnings, End to End (as of 2026-10-24)

Method note: This builds on `/home/user/AI-AUTOMATION/research_notes/Roblox state October 2026/creator_economics.md` and doesn't repeat it. That file covers DevEx totals and concentration, Creator Rewards mechanics, Managed Pricing, Roblox Plus incentives, rewarded video basics, Commerce APIs and the USyd study headline. In this session `rowatcher.com` could not be fetched (DNS failure). Most findings come from search-engine snippets of the cited URLs. The one full-page read was the Roblox creator-docs GitHub source for Kids/Select. Per-game revenue figures come from tracker sites (RoWatcher, Profitable.app, Zing), which model revenue from visits and CCU. They are **third-party estimates** and often disagree with each other by 3–5×. Roblox does not disclose per-game revenue.

## 1. Monetization catalogs of top games: what they sell and at what price

### Takeaway
Top 2025–26 hits share one catalog pattern:
- cheap permanent gamepasses (about 350–2,700 R$) for convenience and multipliers;
- consumable developer products for luck, boosts, skips and currency;
- a season pass (Grow a Garden: 749 R$ premium plus paid level skips);
- limited-time packs;
- in some games, cosmetics and battle passes as the main earner (RIVALS).

Public data on which item sells most does not exist. Only rough per-game revenue estimates are available.

### Cited Findings
**Grow a Garden**
- Reported $12M in May 2025 from virtual items such as seeds, upgrades and rare animals. The developer (Jandel) declines to share figures. Roblox called it the top experience by spending in a single month, with a marked effect on Q2 2025 results — [Calcalist](https://www.calcalistech.com/ctechnews/article/dj4lxef8r); [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden).
- Tracker estimate of lifetime revenue: about $285.6M (modeled, not actual) — [Profitable.app](https://profitable.app/roblox/games/grow-a-garden).
- Season 1 Pass (Sep 27 – Nov 1, 2025):
  - Premium track: 749 R$.
  - Level skip: 49 R$ per level, or 1,699 R$ for the whole ladder.
  - Silver Fertilizer: 300 pass points or 129 R$.
  - Source: [Sportskeeda](https://www.sportskeeda.com/roblox-news/grow-garden-season-1-pass-all-tier-rewards-premium-price).
- Limited-time "Forever Pack" (Mega Summer update): priced 37 → 435 R$ in escalating steps. Players complained it was a "scam" (one spent 800+ R$ for little return) — [Gamewave.fr](https://gamewave.fr/roblox/grow-a-garden-roblox-dans-la-tourmente-a-cause-d-un-objet-payant/). Grow a Garden is criticized for excessive monetization — [Wikipedia](https://en.wikipedia.org/wiki/Grow_a_Garden).

**Steal a Brainrot (DoBig Studios)**
- Estimates vary widely:
  - RoWatcher: about $1.43M per month (82% "confidence").
  - Profitable.app: about $6.9M per 30 days (Jul 30, 2026 snapshot).
  - Grey Journal (Oct 2026): $1.4–4.4M per month now, versus about $11M per month at the Aug 2025 peak (Creator Exchange estimate).
  - Sources: [RoWatcher](https://rowatcher.com/games/7709344486/steal-a-brainrot); [Profitable.app](https://profitable.app/roblox/games/steal-a-brainrot); [Grey Journal](https://greyjournal.net/?p=109733).
- Revenue drivers per RoWatcher: in-game cosmetics, "troll gear" and rebirth mechanics — [RoWatcher](https://rowatcher.com/games/7709344486).

**Blox Fruits**
- Gamepass prices from community value sites (not official; verify in game):
  - Fruit Notifier: 2,700 R$
  - Dark Blade: 1,200 R$
  - 2x Mastery: 450 R$
  - 2x Money: 450 R$
  - +1 Fruit Storage: 400 R$
  - Fast Boats and 2x Boss Drops: about 350 R$
  - Sources: [bloxfruitsvalues.com](https://bloxfruitsvalues.com/values/gamepasses); [tradebloxfruit.com](https://tradebloxfruit.com/values/gamepasses); [bloxvalues.net](https://bloxvalues.net/gamepass/).
- Estimated $8–14M per month — [RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform).

**RIVALS**
- Monetizes "almost entirely through weapon skins and battle passes". Estimated $8–15M+ per month (RoWatcher). Profitable.app models it far lower (lifetime about $150M) — [RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform); [Profitable.app](https://profitable.app/roblox).

**Dress to Impress**
- Items can be bought with in-game currency or Robux — [Wikipedia](https://en.wikipedia.org/wiki/Dress_to_Impress_(video_game)).
- Estimates: $2–5M per month (RoWatcher), $544K per month (Zing, low confidence), about $89M lifetime (Profitable) — [RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform); [Zing](https://zing.co.uk/industry-resources/roblox/revenue/); [Profitable.app](https://profitable.app/roblox/developers).

**99 Nights in the Forest**
- Estimates: about $1.43M per month (Zing, low confidence), about $240M lifetime (Profitable.app) — [Zing](https://zing.co.uk/industry-resources/roblox/revenue/); [Profitable.app revenue calculator](https://profitable.app/tools/roblox-revenue-calculator).
- 14.2M players — [games.gg](https://games.gg/news/99-nights-forest-14-million-roblox/).

**Adopt Me! / Brookhaven**
- Estimates: Adopt Me! $5–10M per month; Brookhaven $6–12M per month (RoWatcher) — [RoWatcher](https://rowatcher.com/news/the-10-highest-earning-roblox-games-in-2026-and-what-they-mean-for-the-platform).

**Official ranking**
- Roblox publishes a "Top Earning" chart that ranks games without dollar figures — [Roblox charts](https://www.roblox.com/charts/top-earning).

### Inferences
- **Price ladder used by the hits:**
  - Impulse developer products: 25–129 R$ (skips, single boosts, fertilizer).
  - Core gamepasses: 350–499 R$ (2x money, mastery, storage, speed).
  - Premium season pass: about 749 R$.
  - Prestige passes: 1,200–2,700 R$ (exclusive weapon, notifier, full-ladder skip).
  - A new game can copy this ladder.
- **Two business models dominate:**
  - Growth/collect/steal sims (Grow a Garden, Brainrot, Pet Sim): luck and speed consumables, limited packs, and stock or restock urgency.
  - Competitive or social games (RIVALS, DTI): cosmetics and battle passes.
  - The second fits the ethics and compliance trend better.
- Paid luck boosts and restock skips are the likely top sellers in growth sims. This is inferred from catalog structure and criticism; no source gives a sales breakdown.

### Gaps
- No verified item-level sales mix for any top game, and no "best-selling item" data. Developers don't publish it.
- Current catalogs and prices for Pet Simulator 99 (Exclusive eggs/Huges), Adopt Me (pet eggs, potions), DTI (VIP/Pass), 99 Nights (diamonds/classes), RIVALS (battle pass price) and Steal An Egg were not found in this session's searches.
- Private-server prices for top games were not found.

## 2. Revenue benchmarks (per DAU, conversion, ARPPU, hit vs. mid-size)

### Takeaway
On Roblox:
- About 1–1.5% of daily users pay on a given day.
- Platform-wide bookings are about $0.14 per DAU per day.
- After the 30% fee and DevEx, a well-monetized game nets the owner only about $0.015–0.025 per DAU per day (single-author estimate).

Small games earn very little (60–78 CCU ≈ 25K R$ per year ≈ $95). Hits earn $1–15M per month in estimates.

### Cited Findings
- Roblox's analytics define:
  - **Conversion rate**: % of DAU who are paying users.
  - **ARPPU**: average revenue per paying user.
  - **ARPDAU**: revenue spread across all daily users.
  - Roblox says low conversion "is often indicative of purchase item value's not being correctly optimized."
  - Source: [Roblox monetization analytics docs](https://create.roblox.com/docs/en-us/production/analytics/monetization).
- Newzoo (via secondary summary): DAU-to-purchase conversion about 1.25%; daily bookings per user about $0.14 — [GameDev Reports summary of Newzoo "Roblox as a Platform in 2025"](https://gamedevreports.substack.com/p/newzoo-roblox-as-a-platform-in-2025).
- GameAnalytics 2023: over half of paying players spend under $1 per year, and top spenders averaged $15.23 (older data) — [GameAnalytics 2023 Roblox report](https://investgame.net/news/pdf/2023-roblox-report-behind-the-data-with-gameanalytics/).
- A well-monetized RP game with a cosmetic economy and seasonal passes might reach $0.015–0.025 ARPDAU *after* the fee and DevEx chain (single-author estimate; page not fetchable) — [RoWatcher "DevEx Math in 2026"](https://rowatcher.com/news/devex-math-in-2026-what-you-actually-take-home-per-1-000-players).
- Tracker assumptions:
  - Profitable.app: 2% engagement rate, 150 R$ average session spend, 70% developer share, $0.0038 per R$ — [Profitable.app](https://profitable.app/roblox/games/steal-a-brainrot).
  - Zing: CCU × 9 to approximate DAU, with a $0.05 per-user daily baseline; "low confidence" — [Zing](https://zing.co.uk/industry-resources/roblox/revenue/).
- Mid and small games (DevForum anecdotes):
  - A game averaging 60–78 CCU over a year earns about 25K R$ per year — [DevForum](https://devforum.roblox.com/t/my-game-with-a-60-78-ccu-yearly-average-generates-25k-robux-a-year/3560194).
  - Another game spiked at launch, then lost players and revenue by March 2025 — [DevForum](https://devforum.roblox.com/t/game-revenue-player-count-dropped-%E2%80%93-need-advice/3554339).
- Distribution: median DevEx participant about $1,500 per year; top 1,000 average about $1.4M (see prior notes) — [TweakTown](https://www.tweaktown.com/news/113585/robloxs-top-10-creators-averaged-dollars65-7-million-each-while-the-median-made-dollars1500-and-roblox-everywhere-is-the-fix/index.html).

### Inferences
- **Worked example (owner net, USD), using the $0.015–0.025 per DAU per day estimate:**
  - 1,000 DAU ≈ $450–750 per month.
  - 10,000 DAU ≈ $4.5–7.5K per month.
  - 100,000 DAU ≈ $45–75K per month.
  - Hits with millions of DAU and aggressive monetization reach $1M+ per month.
- The DevForum figure (60–78 CCU → 25K R$ ≈ $95 per year at $0.0038) shows that weak monetization can come in 10–50× below that estimate. Monetization design matters as much as traffic.
- **Implied ARPPU:** at about 1.25% conversion and $0.14 bookings per DAU, the platform-level daily ARPPU is about $11 in consumer spend. This is skewed by whales and should not be read as a per-game target.
- **Owner share of a consumer dollar:** about 0.7 × DevEx rate ÷ Robux purchase price, ≈ 26.6% at standard DevEx and ≈ 37.8% for 18+ U.S. spend (figures from the prior notes).

### Gaps
- No official Roblox per-genre benchmarks for conversion, ARPPU or Robux per visit were found.
- No 2025–26 creator postmortem with exact monthly Robux for a mid-size game was found (searched DevForum).
- The original Newzoo report was not verified; only a secondary summary was seen.

## 3. All income streams in 2026 and Robux → real money

### Takeaway
The owner has three groups of income:
- **Platform payouts:** Creator Rewards; Roblox Plus sign-up and private-server bonuses.
- **In-game sales:** gamepasses, developer products and paid private servers (about 70% creator share), plus experience subscriptions (fiat).
- **Other:** rewarded video ad EPM; UGC avatar items; Commerce/AMP physical merch; brand integrations (new CPM fee from 2027).

Robux become cash through DevEx:
- $0.0038 per R$, or $0.0054 for spend from age-verified U.S. adults;
- minimum 30K earned R$;
- 18+ ID verification and good standing required.

Roblox Wallet with daily fiat payouts starts for eligible U.S. adult creators in late 2026.

### Cited Findings
- **Covered in the prior notes, not repeated here:** DevEx rates, Creator Rewards (5 R$ per Active Spender, 35% Audience Expansion share), Roblox Plus incentives (up to 750 R$ per sign-up; up to 100 R$ per subscriber for private servers), Managed Pricing (regional prices 30–100% of default), rewarded video, Commerce APIs/AMP, and Roblox Wallet — [prior notes sources, e.g. DevForum Creator Rewards](https://devforum.roblox.com/t/introducing-creator-rewards-earn-more-by-growing-the-community/3777628); [Roblox Plus docs](https://create.roblox.com/docs/production/monetization/roblox-plus); [18+ DevEx docs](https://create.roblox.com/docs/production/monetization/18-plus-devex-rate).
- **Rewarded video economics (third-party, Feb 2026):**
  - Rewarded video CPM: $5–15.
  - Estimated revenue per 1K DAU per month: $3–15 for rewarded video; $1–5 for immersive ads.
  - Not official — [rolearn.dev](https://rolearn.dev/insights/rewarded-video-ads-new-revenue-stream).
- **Brand integrations (new, from 2027):** creators who build brand deals into their games pay Roblox a CPM fee per 1,000 visits, by player location:
  - U.S.: $1.50
  - UK, CA, AU, NZ, Nordics: $0.75
  - Western Europe, Japan, South Korea: $0.20
  - Rest of world: $0.05
  - After 28 days, a flat $0.10 applies.
  - Creators can lock a maximum fee in advance, based on the previous 56 days of data.
  - Sources: [GamesBeat](https://gamesbeat.com/roblox-sets-cpm-based-fees-for-creator-brand-deals-starting-in-2027/); [PocketGamer.biz](https://www.pocketgamer.biz/roblox-reveals-creator-fee-structure-for-brand-integrations-from-2027/); [WN Hub](https://wnhub.io/news/community-management/item-51175).
- **Brand activations:** cost per play session in branded experiences ranges from about $1 to a fraction of a cent. There were 240 brand activations in 2023, double the prior year (industry podcast summary) — [Naavik podcast via Player.fm](https://sv.player.fm/series/naavik-gaming-podcast/how-to-bring-brands-to-roblox).
- **Marketplace fee:** developers keep net revenue after Roblox's 30% marketplace fee on in-experience sales — [Profitable.app](https://profitable.app/roblox); [Roblox monetization docs](https://create.roblox.com/docs/production/monetization).

### Inferences
- **End-to-end chain:**
  1. The player buys Robux (fiat; the platform takes the app-store and Roblox cut).
  2. The player spends Robux in game; the creator receives about 70% as "earned Robux".
  3. Payouts are added on top, with 60-day holds: Creator Rewards, Plus bonuses, ad earnings.
  4. Earned Robux reach 30K or more, and the creator cashes out through DevEx ($0.0038 or $0.0054 per R$). U.S. adults can use Roblox Wallet once it launches.
  5. Taxes: DevEx counts as self-employment or business income. This step is not researched here.
- **Expected revenue mix for a new game** (no source gives a mix): gamepasses and dev products are about 80–90%. Creator Rewards, Plus bonuses and rewarded video add single-digit to low-teens %. Rewarded video at $3–15 per 1K DAU per month is minor next to purchases (about $450–750 per 1K DAU per month in the worked example).
- Brand deals only make sense at scale. Once the 2027 fee applies, a U.S.-heavy game pays $1.50 for every 1,000 visits during a branded campaign, so the deal must clear that cost.

### Gaps
- UGC avatar-item fees for 2026 and the paid-access price range were not re-verified.
- DevEx tax, KYC and payout-provider details were not researched.
- Official rewarded-video EPM was not found.
- Experience subscription price bands and creator share were not re-verified for 2026.

## 4. Rules and ethics: paid random items, minors, Kids/Select, predatory-monetization criticism

### Takeaway
Paid random items (including anything bought with Robux-bought currency) must:
- show numeric odds before purchase;
- give every outcome some value;
- be gated with PolicyService. They are restricted in the UK and Brazil for minors and others.

Reaching under-16s needs Kids/Select eligibility:
- age-checked creator;
- 2-Step Verification;
- maturity rating of Moderate (9+) or lower;
- a refundable fee or 2 months of Plus/Premium;
- 250 highly-engaged plays from age-checked users in 60 days.

The March 2026 USyd study is the main reference for deceptive tactics to avoid.

### Cited Findings
- **Paid random items:**
  - Definition: purchases made with Robux, or with in-game currency bought with Robux, that give random outcomes at developer-set odds. Odds must be "accurately and numerically disclosed… before the moment of purchase" — [Roblox Community Standards](https://about.roblox.com/community-standards).
  - Every outcome must provide some benefit, and features must be blocked via PolicyService `ArePaidRandomItemsRestricted` — [Roblox monetization docs](https://create.roblox.com/docs/production/monetization); [DevForum clarification thread](https://devforum.roblox.com/t/clarifying-requirements-for-paid-random-items/4654622?page=4).
  - A third-party summary says the clarified rules took effect May 26, 2026 and require per-outcome odds that sum to 100% — [ZehnStudio](https://zehn-studio26.com/news/paid-random-items-odds-disclosure/) (verify against official docs).
- **Regional restrictions:**
  - UK under-18 restriction — [DevForum](https://devforum.roblox.com/t/update-on-paid-random-items-restriction-for-uk-users-under-18/3072183).
  - Brazil: blocked for under-18s from March 17, 2026, and for adults who are not age-verified from March 31, 2026 — [Bloxy News on X](https://x.com/Bloxy_News/status/2034153291899408514).
  - Unverified claim that loot-box games get a minimum 16 rating — [DevForum](https://devforum.roblox.com/t/what-is-considered-paid-random-items/4413243).
- **Ads and minors:**
  - Rewarded video ads are shown only to users 13+. Violations of the advertising standards can revoke payouts (prior notes) — [DevForum](https://devforum.roblox.com/t/more-creators-can-now-use-rewarded-video-ads/3838678).
- **Kids/Select:**
  - Age bands: Kids 5–8 (Minimal/Mild content); Select 9–15 (up to Moderate 9+); full Roblox for age-checked 16+.
  - Creator requirements: good standing; age verification (facial estimation under 18, government ID 18+); 2-Step Verification; questionnaire rating of Moderate (9+) or lower; a one-time refundable fee *or* 2 consecutive months of Plus/Premium.
  - Evaluation: the game releases first to age-checked 16+ users and must reach 250 unique plays from highly engaged, age-checked players in 60 days. "Highly engaged" combines tenure, playtime and spend anywhere on Roblox.
  - Expedited review: 50,000 R$, refundable, auto-refunded after 90 days.
  - Sources: [Roblox creator-docs (GitHub source of Kids and Select page; fetched)](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md); [Creator Hub](https://create.roblox.com/docs/production/publishing/kids-and-select).
  - Threshold cut from 500 to 250. Maintenance bar cut from 100 to 25 on July 16. Group-owned games may still show 500 — [DevForum](https://devforum.roblox.com/t/highly-engaged-player-threshold-drops-to-250/4820164).
- **Ads Manager and Kids/Select:** Roblox suggests a separate Engagement campaign budget to reach the threshold. Engagement campaigns cost more per play and don't auto-pause at the threshold — [Ads Manager docs](https://create.roblox.com/docs/production/promotion/sponsoring-experiences).
- **USyd study (Mar 25, 2026):**
  - Title: "Misleading and Deceptive Monetisation in Roblox" (Marcus Carter, Sanika Vekhande, Alisa-Jean Fifita).
  - Method: gameplay analysis of the 15 top-earning games, Oct 2025 – Feb 2026.
  - Findings: 14 deceptive practices; deceptive monetisation found in 14 of 15 games. Tactics include:
    - false reference pricing ("daily discounts" that are always on);
    - prices obscured by nested currencies;
    - random rewards that are hard to evaluate;
    - near-miss visuals;
    - false-urgency countdown timers;
    - VPN-accessible loot boxes banned for Australian children.
  - Sources: [USyd repository](https://ses.library.usyd.edu.au/handle/2123/35033); [ACS Information Age](https://ia.acs.org.au/article/2026/roblox-sucking-up-money-from-young-players--study.html); [USyd news May 2026](https://www.sydney.edu.au/news-opinion/news/2026/05/17/inside-the-pay-to-play-world-of-roblox-targeting-children-.html).
  - Earlier 2025 USyd interview study (22 children aged 7–14): kids and parents call the mechanics "scams," "cash grabs," "child gambling" — [USyd 2025](https://sydney.edu.au/news-opinion/news/2025/03/24/literally-just-child-gambling-study-urges-swift-regulation-of-roblox.html).
- **Roblox's design guidance:** appointment mechanics and removable timers are unpopular with Roblox users (prior notes) — [Roblox monetization docs](https://create.roblox.com/docs/en-us/production/monetization).

### Inferences
- **Ethical checklist for a new game** (derived from the USyd tactics and the PRI rules):
  - Show prices in Robux, not only in nested currencies.
  - No permanent "sale" banners or fake countdown timers.
  - No near-miss animations.
  - Put any randomness behind earned currency, or disclose odds and gate with PolicyService.
  - Prefer deterministic purchases: passes, cosmetics, a transparent battle pass.
  - Give players spend recaps or caps where possible.
- A Kids/Select-eligible game reaches the widest audience but draws the most scrutiny. Designing without paid RNG avoids region gating and makes launch markets simpler.
- The Grow a Garden "Forever Pack" backlash shows that escalating-price limited packs bring reputational risk even when they are legal.

### Gaps
- No official Roblox list of monetization restrictions specific to Kids/Select (for example, purchase-prompt limits for under-9s) was found. The fetched docs page doesn't cover it.
- No Roblox response to the 2026 USyd study was found.
- The exact one-time Kids/Select publishing fee amount (as opposed to the 50K expedited review) did not appear in the fetched page summary.

## 5. Costs: advertising, influencers, launch budgets

### Takeaway
Ads Manager uses auto-bid cost-per-play. Roblox doesn't publish a CPP or CPM, and Engagement (highly-engaged) campaigns cost more per play. Influencer shoutouts on marketplaces start at about $1.50–20 for small channels. Hard budget benchmarks for small developers are mostly anecdotal, for example "2.5K R$ per weekend" sponsors.

### Cited Findings
- **Ads Manager:**
  - Auto-bidding: Roblox "automatically calculates the bid that will get you the most plays at the lowest cost."
  - Most campaigns need several days to show results. If there's no progress after 3–5 days, fix onboarding first.
  - Engagement campaigns have a higher CPP.
  - Source: [Ads Manager docs](https://create.roblox.com/docs/production/promotion/sponsoring-experiences).
- **Sponsored Items metrics:** CPC = Robux spent ÷ clicks; CPP = Robux spent ÷ purchases. No price list is given — [Sponsored items docs](https://create.roblox.com/docs/en-us/marketplace/sponsor-items).
- **Homepage ads:** a CPM homepage ad unit was announced at CES 2026, in closed beta — [Outlook Respawn](https://respawn.outlookindia.com/amp/story/gaming/gaming-news/roblox-unveils-homepage-ad-format-and-expands-buying-at-ces-2026).
- **Small-developer anecdotes (older DevForum):** "sponsor on weekends 2.5k robux for 2 days"; others advise small daily spend over a week and note that obbys get lower returns — [DevForum](https://devforum.roblox.com/t/best-way-for-sponsoring-a-game/588830); [DevForum](https://devforum.roblox.com/t/advertising-or-sponsor/1830862).
- **Influencer marketplace (CollabPals listing snapshot):**
  - Nano channels: $1.50 per shoutout.
  - Micro (about 900–1.4K subscribers): $4.
  - Rising (3–9K): $10.
  - Established (12K+): $20.
  - Bundled campaigns from $49.
  - Source: [CollabPals](https://www.collabpals.com/hire/gaming/roblox-content).

### Inferences
- **Lean launch budget for a small team** (no source gives one):
  - Ads Manager: a few hundred dollars in Robux, in short tests (3–5 days), only after onboarding retention is acceptable.
  - Micro-influencers: about $50–300 total.
  - Kids/Select: a refundable fee or 2 months of Plus.
  - Big-YouTuber deals (1M+ subscribers) and agency campaigns (Gamefam, Super League) cost far more. No public 2025–26 rates were found.
- With owner net of about $0.015–0.025 per DAU per day, paid installs only pay back if retained players produce more lifetime value than the CPP. Retention (D1/D7) matters more than ad spend.

### Gaps
- No reliable 2025–26 CPP or CPM numbers for Roblox Ads Manager were found (official or third-party).
- No published rates for large Roblox YouTubers (KreekCraft-, Flamingo-tier), and no Gamefam or Super League rate cards.
- No survey of typical small-developer launch budgets was found.
- Naavik or Deconstructor of Fun deep-dives on 2025–26 Roblox monetization did not surface.
