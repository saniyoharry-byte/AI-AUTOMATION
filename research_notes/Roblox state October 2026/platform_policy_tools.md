# Roblox platform, safety-policy & developer-tooling changes (Aug 2025 – Oct 2026), as of 2026-10-24

Method note: about.roblox.com, devforum.roblox.com, businesswire.com, wikipedia.org and most press sites could **not** be fetched from this sandbox (DNS failure). The Roblox creator-docs GitHub mirror (raw.githubusercontent.com) **could** be fetched and is used as the primary source for Kids & Select rules. Everything else comes from search-engine snippets of the cited pages, so treat exact wording as unverified. This extends /home/user/AI-AUTOMATION/research/roblox-market-research.md and skips facts already there: the age-check rollout of Dec 2025 and Jan 2026, age bands, maturity-label basics, paid-random-items rules, the 18+ DevEx rate, Creator Rewards and the basics of the MCP server.

## 1. Safety & age: Kids/Select requirements, publishing gate, parental controls, regulatory pressure

### Takeaway
Since May 19, 2026, publishing a game to all ages, including the under-16 "Roblox Kids" (5–8) and "Roblox Select" (9–15) catalogs, requires a verified creator, 2FA, a completed maturity questionnaire, a fee or Plus subscription, and passing an engagement-plus-safety evaluation. Unknown and new games are therefore effectively invisible to under-16s until they earn "highly engaged" plays. Regulators have also kept up pressure: more than 11 US state lawsuits, the Russia block (lifted Jun 2026), Gulf and MENA blocks, an enforceable undertaking in Australia and an ACM probe in the Netherlands.

### Cited Findings
**Kids & Select / publishing gate (official docs)**
- Roblox Kids (ages 5–8) allows only Minimal or Mild content. Roblox Select (9–15) allows Minimal, Mild or Moderate (9+). Restricted content is 18+ only, and parents cannot unlock it through "Approved Experience". — [Roblox creator-docs: Kids and Select (GitHub mirror)](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md)
- Creator requirements for Kids/Select:
  - account in good standing
  - facial age estimation if under 18, or government ID if 18+
  - 2FA turned on
  - a Maturity & Compliance Questionnaire result of Minimal, Mild or Moderate (9+)
  - either a one-time refundable per-game fee **or** an active Roblox Plus or Premium subscription at least 2 months old
  — [creator-docs](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md); also [create.roblox.com/docs Kids and Select](https://create.roblox.com/docs/production/publishing/kids-and-select)
- Evaluation is a trial phase, then engagement analysis, then a safety review. The game needs "250 unique plays from highly engaged players in the last 60 days", evaluated hourly. A "highly engaged player" is defined by account tenure, playtime in the game, and a minimum purchase *anywhere* on Roblox in the last 60 days. Free-to-play games can qualify. — [creator-docs](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md)
  - **Conflict on the threshold:** the earlier DevForum AMA cites a 500 highly-engaged-play threshold for appeals, and a third-party guide says eligibility is at risk below 100 HEPs. DevForum commenters say the threshold was lowered from 500 to 250. The current docs say 250. — [DevForum AMA](https://devforum.roblox.com/t/ama-publishing-requirements-roblox-kids-select/4580953), [BloxBot guide](https://bloxbot.ai/guide/roblox-new-publishing-requirements-2026), [DevForum thread](https://devforum.roblox.com/t/new-publishing-requirements-evaluation-process-for-games/4573166?page=218)
- The publishing fee is refunded automatically 90 days after the game becomes eligible, or 90 days after payment if it never qualifies. It is not refunded if the game is permanently removed for severe Community Standards violations. If the subscription lapses, the game stays published, but the fee or subscription is needed again to update it for all ages. — [creator-docs](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md)
- **Expedited review:** a one-time, refundable **50,000 Robux** per game. It speeds up review but does not waive the standards. — [creator-docs](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md). DevForum commenters mention "100,000", which is unconfirmed and probably outdated. — [DevForum](https://devforum.roblox.com/t/new-publishing-requirements-evaluation-process-for-games/4573166?page=218)
- The new publishing requirements began rolling out **May 19, 2026**. The publishing fee is **1,000 Robux per game** (refundable), as an alternative to Plus/Premium. Publishing for personal use stays open to everyone. — [DevForum Weekly Recap May 11–15, 2026](https://devforum.roblox.com/t/weekly-recap-may-11-to-may-15-2026/4638298)
- Creators track HEP count, evaluation status and eligibility in Creator Hub's **Audience Reach** tab. — [create.roblox.com Kids and Select](https://create.roblox.com/docs/production/publishing/kids-and-select) (search snippet)
- A global-launch DevForum post announced upcoming updates to eligibility, **Ads Manager**, and **expedited review**. The body could not be fetched. — [DevForum: Kids and Select Global Launch](https://devforum.roblox.com/t/roblox-kids-and-select-global-launch-upcoming-updates-to-eligibility-ads-manager-and-expedited-review/4685717)
- A search summary reports a **June 30** change raising the age requirement for social links to 16+ (from 13+). This could not be verified from a primary page.

**Parental controls / accounts**
- Roblox announced the age-based accounts in April 2026. Parents can manage direct chat and block individual games up to age **15** (previously 13). Existing controls include spending limits, screen time and chat. — [NBC News](https://www.nbcnews.com/tech/tech-news/roblox-age-based-accounts-children-teens-rcna331582)
- Transfers between users need parental approval for under-18s. Transfers between users 16+ reportedly stopped needing approval from June 2026. Daily and monthly transfer-limit parental controls are planned for Fall 2026. Single secondary source. — [rouniverse.com](https://rouniverse.com/articles/the-game-updates/)

**US legal/regulatory**
- Louisiana AG sued in Aug 2025. — [TechCrunch, 2025-08-15](https://techcrunch.com/2025/08/15/louisiana-attorney-general-sues-roblox)
- Nebraska AG Hilgers sued on Mar 4, 2026, over child exploitation and deceptive safety practices. — [Nebraska AG](https://ago.nebraska.gov/nebraska-attorney-general-hilgers-files-lawsuit-against-roblox-enabling-child-exploitation-and), [NBC News](https://www.nbcnews.com/tech/tech-news/roblox-lawsuit-nebraska-attorney-general-what-to-know-rcna261733)
- Oklahoma AG Drummond sued in May 2026 (search summary: May 14). — [Oklahoma AG](https://oklahoma.gov/oag/news/newsroom/2026/may/drummond-files-lawsuit-against-roblox-for-endangering-children-and-deceiving-parents.html)
- Secondary trackers (unverified) report:
  - Texas suit in Nov 2025
  - LA County suit in Feb 2026, with motions to dismiss reportedly denied Sep 2026
  - Georgia investigation from Aug 10, 2026
  - at least 11 states with active suits and about $54M in settlements across 5 states
  — [tech-insider.org](https://tech-insider.org/roblox-lawsuit-2026/), [consumernotice.org](https://www.consumernotice.org/legal/roblox-lawsuit/)

**International**
- **Russia:** blocked Roblox in Dec 2025, citing "extremist" content and "LGBT propaganda". A Moscow court fined Roblox 8M rubles in Apr 2026. The Digital Ministry and Roskomnadzor moved to lift the block on **Jun 9, 2026**, and access was restored around Jun 10 after Roblox introduced age-group access restrictions for games. — [Meduza 2026-06-09](https://meduza.io/en/news/2026/06/09/russia-s-digital-ministry-seeks-to-lift-roblox-ban-saying-the-platform-has-agreed-to-meet-government-requirements), [Meduza 2026-06-10](https://meduza.io/en/news/2026/06/10/russia-ends-roblox-block), [PocketGamer.biz](https://www.pocketgamer.biz/russia-lifts-ban-on-roblox/), [Novaya Gazeta Europe](https://novayagazeta.eu/amp/en/articles/2026/06/11/kremlin-hails-robloxs-decision-to-comply-with-russian-law-after-ban-on-gaming-platform-lifted-en-news)
- **Australia:** in Aug 2026 eSafety secured a court-enforceable undertaking (reported Aug 19, 2026). Roblox has 3 months to stop unknown adults contacting children without parental consent and to make kids' accounts private by default. It must also commission an independent audit, including of its age estimation. Roblox is **outside** Australia's under-16 social-media ban as a gaming service. — [The Star 2026-08-19](https://www.thestar.com.my/tech/tech-news/2026/08/19/australia-secures-court-enforceable-child-safety-undertaking-from-roblox), [Cybernews](https://cybernews.com/privacy/roblox-child-safety-australia-esafety/)
- **Netherlands:** ACM opened a formal investigation in Feb 2026 into violent or sexually suggestive games that minors are exposed to (single source). — [Cybernews](https://cybernews.com/privacy/roblox-child-safety-australia-esafety/)
- **Norway:** an under-16 social-media ban bill, due by end-2026, would target Roblox. — [PocketGamer.biz](https://pocketgamer.biz/norway-social-media-ban-to-target-roblox-snapchat-and-tiktok)
- **Other countries (tracker/aggregator data, unverified):**
  - Qatar blocked Aug 13, 2025
  - Kuwait blocked Aug 2025, restored late 2025 with in-game chat disabled (Jordan also restored on that condition)
  - Iraq blocked Oct 2025, allowed in summer 2026, re-blocked Oct 3, 2026
  - Indonesia removed under-16 accounts from Mar 2026 rather than block the platform
  - Oman (Jun 2025), Palestine (Nov 2025), Egypt (Feb 2026), Algeria and Türkiye (since Aug 2024) also listed
  — [rblxdb](https://rblxdb.com/guides/is-roblox-getting-banned), [Brilliant Maps](https://brilliantmaps.com/roblox-ban/), [Wikipedia: Censorship of Roblox](https://en.wikipedia.org/wiki/Censorship_of_Roblox)

### Inferences
- The Kids/Select gate is the biggest structural change for freelancers' clients. A new game has no under-16 reach until it earns at least 250 plays in 60 days from "highly engaged" players. In practice, launches are now seeded with 16+ and paying audiences, through ads, social and existing communities, before kids can find the game. Clients need a launch and user-acquisition plan, not just a build.
- Maturity rating is now a business decision. Rating "Moderate" excludes Kids (5–8). Rating "Restricted" excludes everyone under 18 but unlocks the 18+ DevEx rate. Developers should design content to a target rating from day one.
- Developers can sell "compliance setup" as a deliverable: account verification/2FA checklist, questionnaire, Plus/fee, Audience Reach monitoring, and expedited review (50k Robux) for time-sensitive launches.
- Country blocks and Russia-style age-gating shrink or partition audiences in MENA, Russia and Indonesia. Region-specific monetization and chat-dependent mechanics (e.g., where chat is off, as reported in Kuwait/Jordan) carry risk.

### Gaps
- I couldn't confirm whether any game *types* are excluded from Kids/Select by default (social hangouts, free-form drawing, sensitive topics, mentioned in the prior notes). The docs mirror fetched here doesn't list excluded genres.
- The social-links 16+ change and the full text of the global-launch DevForum post are unverified because DevForum could not be fetched.
- I found no primary regulator sources for the MENA blocks. The aggregator dates conflict.
- I found no evidence that lawsuits directly change discovery ranking. The link runs through age gating and maturity, which is my inference.

## 2. Monetization rules (paid random items, luck, ads, minors, refunds, cross-game sales)

### Takeaway
I found no 2026 change to the paid-random-items/odds policy beyond what the prior notes cover. The main 2026 monetization-rule changes were three. First, an advertising-policy overhaul (Mar 2026; Advertising Integrations Policy effective May 4, 2026), with no personalized ads to under-18s and no rewarded ads or certain brand categories for under-13s. Second, the 18+ DevEx rate. Third, a reported end to cross-game sales of passes and dev products (May 29, 2026; single source).

### Cited Findings
- Roblox overhauled its ad policies on Mar 20, 2026 to boost brand-sponsorship revenue. — [Bloomberg 2026-03-20](https://www.bloomberg.com/news/articles/2026-03-20/roblox-overhauls-ad-policies-in-bid-to-boost-sponsorship-revenue), [TipRanks/The Fly](https://www.tipranks.com/news/the-fly/roblox-updates-ad-policies-adds-restrictions-to-advertising-standards-thefly-news), [DevForum: New Advertising Policies & Standards](https://devforum.roblox.com/t/new-advertising-policies-standards/4527365)
- From **May 4, 2026**, the "Independent Advertising" policy is renamed the **Advertising Integrations Policy**, covering developers integrating non-Roblox-operated ads. Its rules:
  - ads may not be personalized for users under 18
  - no rewarded ad formats for under-13s, including avatar items or dev products granted as rewards
  - food, cosmetics, pharmaceutical and financial-services brands cannot be served to under-13s
  - integrations must not falsely represent content (e.g., "free Robux")
  — [Roblox Advertising Standards (help)](https://en.help.roblox.com/hc/en-us/articles/13722260778260-Advertising-Standards), [DevForum](https://devforum.roblox.com/t/new-advertising-policies-standards/4527365) (search snippets)
- Ads Manager refunds apply only to fraudulent traffic, analyzed 14 days after a campaign ends. Managed-campaign advertisers get no refund except as the terms specify. — [create.roblox.com Ads Manager](https://create.roblox.com/docs/production/promotion/ads-manager), [Roblox Advertising Terms (Managed)](https://en.help.roblox.com/hc/en-us/articles/33703196637204-Roblox-Advertising-Terms-Managed-Campaigns)
- Cross-game sales of developer products and passes were reportedly discontinued effective **May 29, 2026** (single secondary source). — [rouniverse.com](https://rouniverse.com/articles/the-game-updates/)
- A class action alleged Roblox deleted children's purchased content without refunds. TINA.org opposed the settlement, which reportedly received final approval. Date and terms are unconfirmed. — [Truth in Advertising](https://truthinadvertising.org/brands/roblox/)
- Standalone apps (see Q4): the first selected creators get the same revenue share as in the Roblox app, including the US 18+ DevEx rate. Storefront fees and payment rails are undisclosed. — [Game Developer](https://www.gamedeveloper.com/business/roblox-will-allow-devs-to-release-games-as-standalone-apps-on-other-stores), [Notebookcheck](https://www.notebookcheck.net/Roblox-is-finally-letting-developers-escape-the-platform-with-Roblox-Everywhere.1402031.0.html)
- Payouts are skewed: a TechSpot report says the top creators make about $65M a year while most took home about $1,500. — [TechSpot](https://www.techspot.com/news/113855-roblox-top-creators-making-65-million-year-while.html)

### Inferences
- Games aimed at under-13s should not rely on rewarded-video or brand ad-integration revenue. Ad monetization belongs in 13+ or 16+ games, and the build must be able to check age (a client requirement for a policy-compliant ad SDK or integration).
- Combining the 18+ DevEx rate, the Restricted rating and the no-personalized-ads-for-minors rule pushes monetization design toward adult audiences. Clients with kid-focused games face lower earnings per user plus the Kids/Select gate.
- Any game with gacha, eggs, crates or luck boosts still needs odds-disclosure UI (prior notes). I found no 2026 relaxation.

### Gaps
- I found no 2025–2026 change to the paid-random-items policy or to luck-boost/currency rules. I couldn't confirm whether one exists, since DevForum and the docs site were not fetchable.
- I found no 2026 change to the Robux purchase refund policy for players or minors.
- The cross-game sales discontinuation and Fall 2026 transfer limits come from a single secondary site and are unverified.

## 3. Discovery / algorithm changes (2025–2026)

### Takeaway
On **June 15, 2026**, Roblox moved "Recommended For You" from a 7-day to a **28-day retention** view. It split the old play-through signal into play-through, session quality and spend, and began publishing the full signal list and relative weights to creators. The change favors games with long-term retention over viral spikes and contributed to the Q2–Q3 2026 bookings slowdown.

### Cited Findings
- Roblox newsroom (Jun 2026), "Optimizing Discovery":
  - the RFY window expanded from 7 to 28 days to directly measure long-term retention
  - the full list of signals and their relative importance is now shared with creators
  - play-through rate is split into separate play-through, session quality and spend measures
  — [Roblox Newsroom, Jun 2026](https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox) (search snippet; page not fetchable)
- Secondary coverage says the model uses D1, D2–7 and D8–28 retention plus play-through, session quality and spend, and is framed as an anti-clickbait move. — [allthings.how](https://allthings.how/robloxs-new-recommended-for-you-algorithm-rewards-games-that-keep-you-hooked/), [endsights](https://endsights.com/roblox-optimizing-discovery-how-great-games-reach-millions-of-players-on-roblox)
- Analysts say many developers reported declining earnings after the change and that it could weigh on bookings. — [Samir Soriano Substack](https://samirdivesdeep.substack.com/p/roblox-ripping-off-the-band-aid), [Yahoo Finance](https://finance.yahoo.com/technology/articles/roblox-lays-groundwork-next-growth-195200256.html). A claim that the change cost $9B in one day comes only from a blog. — [lensblox](https://lensblox.com/blog/roblox-algorithm-change-2026-explained/)
- GameAnalytics' 2026 benchmark puts median D1 retention at about 10.3% even for large games. — [GameAnalytics 2026 Roblox report](https://www.gameanalytics.com/reports/2026-roblox-report)
- **Thumbnail personalization:** runs when at least 2 Home-page thumbnails are active. Each thumbnail is shown to random user groups, and the one with the best *qualified play-through rate* gets more impressions per group. Roblox reports an average +8.5% lift, and up to +50% for some games. Creator Hub shows impressions, qualified plays, average playtime and the winning segment. — [create.roblox.com Thumbnails](https://create.roblox.com/docs/production/publishing/thumbnails)
- Kids/Select eligibility (Q1) is itself discovery-gating for under-16s. — [creator-docs](https://github.com/Roblox/creator-docs/blob/main/content/en-us/production/publishing/kids-and-select.md)

### Inferences
- What clients should value now is D7 and D28 retention, session quality and spender conversion, not CCU spikes or clickbait thumbnails. Developers who can instrument analytics, run retention live-ops and A/B test thumbnails have a selling point.
- Clickbait thumbnails now hurt twice: a low *qualified* play-through rate loses both the thumbnail test and the RFY ranking.

### Gaps
- I couldn't get the actual published signal weights, because the newsroom and DevForum pages were not fetchable.
- I found no dated 2025–2026 announcement about Sorts or charts changes beyond RFY.

## 4. RDC 2026 (Sep 10–12, 2026, San Jose) announcements

### Takeaway
RDC 2026 centered on two things. "Roblox Everywhere" covers standalone app publishing on mobile, PC and console, plus Chrome browser play by end-2026. AI creation covers Build expansion, Scene Generator, playtesting agents and AI NPCs. Commercial terms for standalone apps (storefronts, fees, eligibility) were not disclosed.

### Cited Findings
- The official press release is dated Sep 11, 2026: "Roblox Unveils New Ways to Play, Build, and Grow at RDC". — [BusinessWire](https://www.businesswire.com/news/home/20260911312666/en/Roblox-Unveils-New-Ways-to-Play-Build-and-Grow-at-the-Roblox-Developers-Conference-RDC) (not fetchable)
- **Standalone apps ("Roblox Everywhere"):**
  - games publish as standalone apps on mobile, PC and console, with Roblox still providing engine, servers and backend
  - it starts with a select set of developers and storefronts; Roblox "hopes" to support every storefront (Steam, Epic and GOG were asked about)
  - no launch date, storefront list, eligibility criteria or external-store revenue split was announced
  - the first creators get in-app-equivalent revenue share, including the 18+ DevEx rate
  — [Game Developer](https://www.gamedeveloper.com/business/roblox-will-allow-devs-to-release-games-as-standalone-apps-on-other-stores), [Notebookcheck](https://www.notebookcheck.net/Roblox-is-finally-letting-developers-escape-the-platform-with-Roblox-Everywhere.1402031.0.html), [Windows Forum](https://windowsforum.com/news/roblox-everywhere-plans-standalone-apps-keeps-platform-control.444935/), [Northeast Times 2026-09-15](https://northeasttimes.com/2026/09/15/roblox-plans-to-let-developers-sell-games-outside-its-platform/)
- **Browser play:** Chrome support by end of 2026. — [allthings.how](https://allthings.how/roblox-rdc-every-major-announcement-for-players-and-creators/), [Middle East Gamer](https://www.middleeastgamer.com/roblox-unveils-new-ways-to-play-build-and-grow-at-rdc-2026/)
- **Build (text-to-game):**
  - tested in New Zealand from Jul 2026, now expanding to Serbia and Singapore
  - adds desktop access, a new asset library and finer iteration controls
  - all RDC attendees got access
  - Roblox says about 9,000 games have been published with Build, and 71% of their creators had never used Studio
  — [allthings.how](https://allthings.how/roblox-rdc-every-major-announcement-for-players-and-creators/), [latestintech](https://latestintech.com/roblox-ai-game-creation-rdc-2026/), [Bloxy News on X](https://x.com/Bloxy_News/status/2098468230520295593)
- **Scene Generator** (later in 2026): turns a text prompt plus a reference image into a scene layout, in both Build and Studio, refinable in Studio. — [allthings.how](https://allthings.how/roblox-rdc-every-major-announcement-for-players-and-creators/), [adgully](https://www.adgully.com/post/20490/roblox-unveils-standalone-publishing-and-ai-suite-at-rdc-2026)
- **Agents and NPCs:** a playtesting agent finds bugs before human testers, and AI-driven NPCs include NPCs that can playtest. — [webpronews](https://www.webpronews.com/roblox-bets-on-ai-tools-and-standalone-apps-to-expand-beyond-its-platform/), [allthings.how](https://allthings.how/roblox-rdc-every-major-announcement-for-players-and-creators/)
- The prior notes also record Roblox Wallet/Card announced at RDC. — [GamesBeat](https://gamesbeat.com/roblox-hits-20-and-opens-rdc-2026-to-invite-the-world-to-play-and-make-games-dave-baszucki-keynote/)
- **Cube:** 4D creation went into public beta in Feb 2026, allowing Cube 3D to be embedded in games (players generate objects from text in-game). — [Wikipedia: Cube 3D](https://en.wikipedia.org/wiki/Cube_3D), [alternativeto](https://alternativeto.net/software/roblox/news)
- **Luau New Type Solver:** General Release was announced on DevForum. The Studio beta toggle was removed in the first release of 2026, on **Jan 7, 2026**. The new solver brings better inference, fewer false positives, type functions and read-only tables. Some complaints remain, e.g., verbose hover types. — [DevForum: General Release](https://devforum.roblox.com/t/general-release-luau%E2%80%99s-new-type-solver/4084991), [Last Level Studios](https://lastlevel.co.uk/blog/new-luau-type-solver-studio-ui-and-more-news)
- **Open Cloud / analytics:** Roblox open-sourced a batch-processor CLI for large-scale data transformations via Open Cloud. Creator Hub added an HttpService observability dashboard showing request counts and error codes. Dates are unclear. — [Last Level Studios](https://lastlevel.co.uk/blog/new-luau-type-solver-studio-ui-and-more-news)

### Inferences
- Standalone publishing is a future opportunity: porting, store listing, platform certification and storefront compliance work. It is not actionable for most developers yet, since only selected creators are in.
- Browser play by end-2026 means clients will want web-friendly performance budgets and UI.
- Type-solver general release means strict-typed Luau is now the norm, which is a skills signal for client-facing profiles.

### Gaps
- I couldn't find any RDC 2026-specific announcement for Luau, Open Cloud APIs or analytics. The official recap was not fetchable, and search found none.
- No details were found on Roblox Wallet/Card terms.
- The "Cube 4D" date comes from Wikipedia via a search snippet.

## 5. What the AI tools can do now; how studios use them; developer sentiment

### Takeaway
Studio Assistant plus the **built-in Studio MCP server** now run a full agent loop: plan, write code, run Luau, start and stop playtests, simulate input, take screenshots and spawn a playtest subagent. External LLMs are supported, both through MCP clients like Claude Code and Cursor and through Assistant's bring-your-own-key option. Developer sentiment is mixed. The loudest anger targets AI-enabled clones and false AI moderation rather than the tools themselves.

### Cited Findings
- **Early 2026 (around Feb):**
  - "Studio MCP Server Updates and External LLM Support for Assistant" added new MCP tools so agents can "iteratively plan, write, test, and modify code and data", with full Assistant support in early March
  - the MCP server is **built into Studio** with no setup, and Assistant can start and stop playtests and simulate player input for an autonomous reproduce, fix and validate loop
  — [DevForum 4415631](https://devforum.roblox.com/t/studio-mcp-server-updates-and-external-llm-support-for-assistant/4415631), [DevForum 4474643](https://devforum.roblox.com/t/assistant-updates-studio-built-in-mcp-server-and-playtest-automation/4474643)
- **Mar 2026:** Assistant gained mesh generation, new MCP tools and a screenshot tool that captures the play-mode viewport. — [DevForum 4527258](https://devforum.roblox.com/t/assistant-updates-mesh-generation-new-mcp-server-tools-screenshot-tool-and-more/4527258), [Creator Monthly Mar 2026](https://devforum.roblox.com/t/creator-monthly-march-2026/4554927)
- **Apr 2026 (beta):** a Playtest Agent subagent spawns a test character and runs gameplay scenarios in its own context. It must be prompted explicitly. — [DevForum 4566767](https://devforum.roblox.com/t/studio-beta-studio-assistant-mcp-playtest-agent/4566767)
- **Jul 2026:** "Creator-Authored Skills" for Assistant. Place-scoped skills will be exposed via MCP later; timing is tentative. — [DevForum 4728447](https://devforum.roblox.com/t/assistant-updates-introducing-creator-authored-skills/4728447)
- **Aug 19, 2026:** "Multi-Agent Improvements and Connected AI Clients". Each MCP tool call names its target Studio (`studio_id`), and `set_active_studio` was removed. Clients such as Claude Code pick up the change after a restart. Play mode still takes over the Studio window, so edit-model tools can fail during playtests (BloxBot, Sep 2026). — [DevForum 4820583](https://devforum.roblox.com/t/studio-mcp-multi-agent-improvements-and-connected-ai-clients/4820583), [BloxBot](https://bloxbot.ai/guide/roblox-studio-mcp-multi-agent-update-2026)
- **Studio use:** a DevForum resource claims "We Built a Full Game With 2 People Using AI in Studio". Build reports about 9,000 games, 71% from first-time creators (Q4). — [DevForum 4308613](https://devforum.roblox.com/t/we-built-a-full-game-with-2-people-using-ai-in-studio-heres-the-tool/4308613), [allthings.how](https://allthings.how/roblox-rdc-every-major-announcement-for-players-and-creators/)
- **Sentiment:**
  - The *Animal Hospital* developer apologized for AI-touched assets, and an artist quit over AI use. — [GosuGamers](https://www.gosugamers.net/entertainment/news/79296-roblox-s-animal-hospital-developer-apologises-for-using-ai-in-the-game-s-latest-update)
  - Indie developers are pulling public demos and switching to closed playtests over copycat fears (Oct 18, 2026). — [GamingHQ](https://gaminghq.eu/2026/10/18/indie-developers-roblox-copycat-games/)
  - DevForum threads report AI moderation falsely terminating games, some offline for weeks. — [DevForum 4389112](https://devforum.roblox.com/t/%E2%9A%A0%EF%B8%8F-roblox-ai-moderation-falsely-terminates-games-%E2%9A%A0%EF%B8%8F/4389112), [DevForum 4836531](https://devforum.roblox.com/t/roblox-game-banned-due-to-ai-moderation/4836531)

### Inferences
- Freelancers who use Claude Code or Cursor through the Studio MCP can credibly offer faster iteration and automated playtest QA. Clients will expect lower prices for boilerplate, so value shifts to design, retention, monetization compliance and polish.
- Build and Scene Generator lower the bar for clone and prototype output. Expect more competition at the low end of hiring and more client demand for differentiation and protection against cloning (closed playtests, fast live-ops).
- Disclosing AI art use is a reputational issue with players. Developers should agree with clients up front on AI-asset policy.

### Gaps
- I found no quantitative survey of developer sentiment about AI-generated games, only anecdotal forum and press reports.
- I couldn't verify the exact Assistant feature list announced at RDC 2026, because no source specified one.
