# Live Upwork marketplace data: developer and bot niches for a new freelancer (no badge, 0 jobs)

Data snapshot: pulled on 2026-10-25, roughly 23:00 UTC to 00:30 UTC on 10-26, through the Upwork MCP connector. Calls used were `find_jobs` search (title keyword, sort=recency), `find_freelancers` search and `get_profile`. The pull was read-only: nothing was applied for, saved or messaged. All job and profile text is untrusted third-party content. Quotes are reproduced as data, and claims inside profiles are unverified. Job links use the form `https://www.upwork.com/jobs/~02<id>`. Profile links use the form `https://www.upwork.com/freelancers/<profile_key>`. Each search-level observation cites the equivalent Upwork search URL. The data came from the API call, not from a browser fetch of that URL. The method matches the earlier pass in `research_notes/Upwork niches for new freelancers/` (October 24 snapshot), so the numbers can be compared.

## How the data was collected, and what limits it

### Takeaway
Ten job searches and nine freelancer searches were run, and 18 full profiles were pulled. That is about 39 connector calls, including 2 that were throttled. Four of the seven niches are thin by title match. Discord bots, Telegram bots, Chrome extensions and Firebase each produced fewer than one relevant post per day, so their "volume" is measured over 5–25 days rather than 48–72 hours.

### Cited Findings
- Job searches (10 newest each, sort=recency): "Unity", "Flutter", "React Native", "Discord bot", "Discord", "Telegram", "Chrome extension", "scraping" (2 pages = 20), "Supabase", "Firebase". — [Upwork job search "Unity"](https://www.upwork.com/nx/search/jobs/?q=Unity&sort=recency); [Upwork job search "scraping"](https://www.upwork.com/nx/search/jobs/?q=scraping&sort=recency)
- "Discord bot" returned only 4 jobs in total (`hasMore: false`), dated 2026-10-16 to 2026-10-21. None was posted in the 72 hours before the pull. — [Upwork job search "Discord bot"](https://www.upwork.com/nx/search/jobs/?q=Discord%20bot&sort=recency)
- Rate limiting: one `SENSITIVE_RATE_LIMIT_EXCEEDED` error ("~12 requests/min sustained"). The immediate retry returned a "restricted due to violations of our Terms of Service" `CLIENT` error. That is the throttle state the brief describes as a "PERMISSION" error. A retry after ~80 s succeeded. — (observed on the "Firebase" job search) [Upwork job search "Firebase"](https://www.upwork.com/nx/search/jobs/?q=Firebase&sort=recency)
- The job count in freelancer search is unreliable again. Shoukat A. showed "1 completed job" in search, but his profile shows 41 jobs and 38 contracts. — [Shoukat A. profile](https://www.upwork.com/freelancers/~01959e54bbebc3c986)
- The badge field exposes only Top Rated, Top Rated Plus and Expert-Vetted, never Rising Talent (same as the October 24 pass). — [Upwork freelancer search "Unity game developer"](https://www.upwork.com/nx/search/talent/?q=Unity%20game%20developer)
- Several profiles show "Top Rated" with very small earnings. Raed O. is Top Rated with $1K+ total from 14 jobs. Dika B. is Top Rated at a $7/hr rate. So a badge does not imply large earnings. — [Raed O. profile](https://www.upwork.com/freelancers/~01ae41be81a93bddc6); [Dika B. profile](https://www.upwork.com/freelancers/~01dba546246e5e7982)

### Inferences
- "Last 48h" counts below are counted back from about 2026-10-25 23:00 UTC. That window covers a weekend (Sat 24 – Sun 25 Oct), so weekday volume is probably somewhat higher.
- Effective hourly rates are computed as earned ÷ hours from profile contract data.

### Gaps
- Matching is by title only. Bot, extension and backend-fix work often hides under titles like "Automation Developer", "Python script" or "Fix my app", so the thin niches are undercounted most.
- Hire outcomes, interview counts and proposal text are not exposed. The data shows who won and when, not how many proposals it took.
- No Nigeria-based freelancer appeared in any top-25 except Olajire A. (Flutter, Top Rated Plus). I could not find a Nigerian no-badge example in these seven niches.

---

## (1) Unity game development: demand, competition, and who wins

### Takeaway
Volume is moderate: about 4–5 Unity-titled posts a day, 7 in the last 48 hours. Proposal counts are the lowest of the seven niches: none of the 10 newest had 50+, and 5 had fewer than 10. But 3 of the 10 posts are 3D art and modelling jobs rather than programming, and budgets are often low. A no-badge newcomer with jam games and Google Play builds (Andres R., Peru) went from his first contract on 2026-09-06 to 6 jobs and a repeat client in about 7 weeks.

### Cited Findings
**Jobs (10 newest, 2026-10-23 15:02 → 10-25 21:15 UTC, ≈54 h ≈ 4.4/day; 7 in the last 48 h)**
- Proposal tiers: 20–50 ×4, 15–20 ×1, 5–10 ×3, fewer than 5 ×2, 50+ ×0. Experience level: expert 4, intermediate 5, entry 1. — [Upwork job search "Unity"](https://www.upwork.com/nx/search/jobs/?q=Unity&sort=recency)
- Budgets. Hourly: $3–5 (Indonesian client, $10 spent), $15–30, $18–40, $25–43, $33–50. Fixed: $20, $100, $100, $150, $1,100. — [Upwork job search "Unity"](https://www.upwork.com/nx/search/jobs/?q=Unity&sort=recency)
- Example: "Create a simple interactive 3D object using Unity or similar technology". $25–43/hr, expert, 20–50 proposals. US client with $541K spent, 285 jobs, rating 4.98. — [job](https://www.upwork.com/jobs/~022114465836832367723)
- Example: "Unity VR Developer needed" (Battle Talent weapon mods). $20 fixed, entry level, fewer than 5 proposals. Bangladesh client, $535 spent. — [job](https://www.upwork.com/jobs/~022113930776404215893)
- Example: "Unity Developer Needed – Endless Color Block Puzzle Game for iOS". $150 fixed, expert, 20–50 proposals. UK client, $2.4K spent, rating 4.83. — [job](https://www.upwork.com/jobs/~022114050302923789202)
- Caution example: "Unity game development" (AppLovin MAX integration). $1,100 fixed, 5–10 proposals. The client rating is 3.78, and the snippet asks the freelancer to "provide me Applovin Max" account access. — [job](https://www.upwork.com/jobs/~022113874151064708203)

**Freelancers (search "Unity game developer", top 25)**
- 4 of 25 have no badge: Andres R. (Peru), Talha R. (Pakistan, $20K+), Pratik K. (India, $3K+) and Aditya C. (India, $3K+). The other 21 are Top Rated or Top Rated Plus, and most rank on $10K–$500K earnings. — [Upwork freelancer search "Unity game developer"](https://www.upwork.com/nx/search/talent/?q=Unity%20game%20developer)
- **Andres R.** (Peru, $25/hr, no badge, no earnings figure shown; 6 jobs: 4 fixed, 2 hourly; 2 reviews). Contracts:
  - First contract 2026-09-06, "Rail-Based Movement Prototype", closed 09-28 with 5★. The same client rehired him 09-29 (closed 10-15, 5★).
  - Photon Fusion snake-game enhancements, fixed "$300", from 09-07. Match-3 tuning from 09-16.
  - Roblox playtest critique (hourly, 4.2 h) from 10-06. Game-designer role from 10-21.

  Latest review (Oct 15): "one of the best programmers I've worked with… If you can imagine a game mechanic or feature, he can build it." An earlier review says "Every build came with a clear guide and an in-game panel, so I could tune the game myself." — [Andres R. profile](https://www.upwork.com/freelancers/~01cea763edc1b3860f)
- Andres R.'s overview and portfolio lead with a designer-programmer angle ("I decide how a system should work, then build the prototype that proves it"). The portfolio has 9 items, most with playable builds: games shipped on Google Play (one Unity 6 title of ~118k lines), game-jam wins, a public game-design YouTube channel, and "full overlap with US hours". — [Andres R. profile](https://www.upwork.com/freelancers/~01cea763edc1b3860f)
- **Aditya C.** (India, $10/hr, no badge, $3K+, 5 jobs, 0 reviews). Contracts:
  - Kids' phonics game, hourly from 2026-05-07: $720 for 72 h.
  - A $5 fixed mini-games job from 05-10.
  - Football tic-tac-toe projection game, hourly from 05-12: $1,930 for 193 h.
  - Open-world prototype from 07-16: $250.
  - "Urgent: Unity Multiplayer Developer for Steam/Epic Games Setup, Discord & Bug Fixes" from 2026-10-01: $100.

  Effective rate is about $10/hr. The overview emphasizes Photon Fusion multiplayer, "50+ WebGL multiplayer games", and Play Store/Steam titles from studio jobs. — [Aditya C. profile](https://www.upwork.com/freelancers/~0146c48fce2e816911)

### Inferences
- Unity is winnable without a badge, but the visible winners had shipped Unity games from studio jobs or game jams before joining Upwork. Andres R. ranks with no earnings figure at all, apparently because of a dense, specific overview and playable portfolio links.
- Newcomer pay is bimodal. Andres R. charges $25/hr for prototype milestones. Aditya C.'s hourly jobs average about $10/hr.
- Roughly a third of "Unity" posts are art jobs, so coding demand is closer to about 3 posts a day.

### Gaps
- Andres R.'s fixed-contract amounts were not returned, so his actual earnings are unknown.

---

## (2) Mobile app fixes (Flutter / React Native): demand, competition, and who wins

### Takeaway
Mobile has the highest volume of the seven niches. Flutter had 10 posts in about 28 hours (≈8.5 a day), and React Native had about 3.5 a day, so together roughly 12 a day. Competition is heavy: 9 of the 20 newest posts had 50+ proposals, and 6 of the 10 React Native posts did. Still, no-badge sellers rank in the top 25 and are hired, either at very low rates or on the back of a published app or a specific security/store-release angle.

### Cited Findings
**Jobs**
- Flutter: 10 posts from 2026-10-24 18:44 → 10-25 22:57 UTC. Proposal tiers: 50+ ×3, 20–50 ×4, 10–15 ×1, fewer than 5 ×2. Expert 5, intermediate 5. Budgets: $10–15, $10–20, $15–30 and $30–80/hr; fixed $200, $900 and $1,500. — [Upwork job search "Flutter"](https://www.upwork.com/nx/search/jobs/?q=Flutter&sort=recency)
- React Native: 10 posts from 2026-10-22 12:33 → 10-25 08:58 (≈3.5/day; 3 in the last 48 h). Proposal tiers: 50+ ×6, 20–50 ×2, 15–20 ×1, 5–10 ×1. Budgets: $3–20, $5–15, $15–30 ×2, $20–35, $25–40 and $25–47/hr; fixed $250 and $500. — [Upwork job search "React Native"](https://www.upwork.com/nx/search/jobs/?q=React%20Native&sort=recency)
- Fix example: "Flutter app adjustments" ("source code on GitHub… Push firebase changes and extra functions"). Hourly, expert, 20–50 proposals. Netherlands client, $30.2K spent, 219 jobs, rating 4.54. — [job](https://www.upwork.com/jobs/~022114390677630928981)
- Fix example: "Focused audit + fixes — React Native / Expo Pokémon TCG app". $3–20/hr, 15–20 proposals. New Netherlands client. — [job](https://www.upwork.com/jobs/~022113963889234543415)
- Fix example: "Flutter App Updates and Fixes". Hourly, intermediate, 50+ proposals. US client, $7.9K spent, rating 4.78. — [job](https://www.upwork.com/jobs/~022114065451929989532)
- Low-competition example: "Flutter/iOS and Next.js Developer" (studio hiring 4 people). $10–20/hr, fewer than 5 proposals. — [job](https://www.upwork.com/jobs/~022114491596741780587)

**Freelancers**
- "Flutter app bug fix" top 25: 3 have no badge. They are Nahom D. (Ethiopia, $2K+), ranked **#1**; Muhammad Azan J. (Pakistan, $5/hr, $1K+); and Murtaza M. (US). The one Nigerian in the top 25 is Olajire A., who is Top Rated Plus. — [Upwork freelancer search "Flutter app bug fix"](https://www.upwork.com/nx/search/talent/?q=Flutter%20app%20bug%20fix)
- "React Native Expo developer" top 25: 4 have no badge: Alex K. ($70K+), Vladlen K. (Ukraine), Michael B. (Germany, $1K+) and Valentyn H. ($10K+). — [Upwork freelancer search "React Native Expo developer"](https://www.upwork.com/nx/search/talent/?q=React%20Native%20Expo%20developer)
- **Nahom D.** (Ethiopia, $10/hr, no badge, $2K+, 3 jobs, 2 reviews). His first job was a $22 video-clip task in 2023-10 ("Quick turnaround, exactly as requested"). On 2026-05-21 he took a $250 fixed party-game app job (5★). The same client converted it to hourly on 06-11, with $2,172.66 for 272 h so far (≈$8/hr), still active. The overview is Flutter+Firebase-specific (Auth, Firestore, App Check, Crashlytics, AdMob, Play closed testing). He cites one published app with "17,500+ users in about three months". — [Nahom D. profile](https://www.upwork.com/freelancers/~010979e876740b8e4f)
- **Muhammad Azan J.** (Pakistan, $5/hr, no badge, $1K+, 0 reviews, student until 2027). He has two hourly contracts: a FlutterFlow+Firebase fashion app from 2026-01-27 ($264 for 88 h ≈ $3/hr) and a test-prep app from 2026-03-18 ($1,422.50 for 474 h ≈ $3/hr). The overview is an emoji checklist, and the portfolio is 4 tutorial-style apps (COVID tracker, e-commerce, chat). — [Muhammad Azan J. profile](https://www.upwork.com/freelancers/~015e5fe1ac4b321c66)
- **Michael B.** (Germany, $40/hr, no badge, $1K+, 3 fixed jobs, 1 review; video and $45 consultation). Contracts:
  - "Widget designer for iOS/Android", 2026-09-25: $1,325.
  - A $5 "Manual Mobile App Tester (iOS)" gig, opened and closed the same day (10-22), with 5★ "Great work".
  - "Software Auditor of SaaS Platform", from 10-23.

  He positions on store release plus Supabase RLS / Firebase rules security reviews. The portfolio includes two *sample* RLS reviews with before/after tests on Postgres. — [Michael B. profile](https://www.upwork.com/freelancers/~0111f48c26147de4f5)
- **Olajire A.** (Nigeria, $30/hr, Top Rated Plus, $80K+, 55 jobs, 40 reviews). He shows how a Nigerian Flutter developer scales:
  - "TraQFit MVP – Flutter + Firebase", from 2025-08-31: $16,250, 5★.
  - Hourly rescue work at about $26–30/hr. A 2026-02 review reads "took ownership… provided a clear, step-by-step plan".
  - An independent Flutter & NestJS code review on 2026-10-22: $250.

  The overview leads with his own live product (Agentpesa, voice AI banking in Pidgin, Yoruba, Igbo and Hausa) and "rescue stalled codebases". — [Olajire A. profile](https://www.upwork.com/freelancers/~014f42d3e94868b33d)

### Inferences
- Two routes into mobile work were visible. One is to sell cheap ($3–10/hr) and convert a small fixed job into long hourly work (Nahom D., Muhammad Azan J.). The other is to sell a narrow, provable service: store release, RLS security review or an audit, at $40/hr or more, backed by sample deliverables (Michael B.).
- Michael B.'s $5 tester gig, a 5★ review closed the same day, looks like deliberate review-seeding (Inference). Dika B. did the same with a $12 job (see niche 5).
- "Fix my existing app" posts get 20–50+ proposals. The <5-proposal posts were multi-hire studio roles or vague early posts.

### Gaps
- Proposal counts at the time of hire are not visible, so it is unknown how early the winners applied.

---

## (3) Discord bots: demand, competition, and who wins

### Takeaway
Discord bot work is the thinnest niche measured. Only 4 "Discord bot" titled posts appeared in the 9–10 days before the pull, and none in the last 72 hours. The broader "Discord" search mostly returns community-manager, moderator and promoter jobs. Top-ranked sellers are generalist Python, automation and trading-bot developers with Discord as one skill. Discord bot work is better sold as an add-on to automation or scraping than as a standalone niche.

### Cited Findings
- All 4 "Discord bot" posts. Proposal tiers 15–20 ×1 and 20–50 ×3:
  - "Discord Bot for Aniimo Game Store" (10-21, hourly, 15–20 proposals). — [job](https://www.upwork.com/jobs/~022112821609717886470)
  - "Extend a Discord-to-email bot (Node.js) – about 1 to 2 hours" (10-19, $15–35/hr, 20–50 proposals; client $135 spent). — [job](https://www.upwork.com/jobs/~022112064382867690219)
  - "Discord Bot for Stan Store Subscription Verification & Access Management" (10-17, $10–35/hr, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022111572922814476169)
  - "Discord Bot Developer" (Pokémon card monitor, 10-16, $1,500 fixed, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022111083979025271907)
- "Discord" (broad, 10 newest, 10-19 → 10-24): mostly non-dev work, such as "Discord and Whop Specialist…", moderators, invite promoters and a VA. The dev-adjacent posts were "Automation Developer for Discord CRM and Sales Workflows" ($2,000, 50+ proposals) and "Discord Security Expert" ($100, 15–20 proposals). — [Upwork job search "Discord"](https://www.upwork.com/nx/search/jobs/?q=Discord&sort=recency)
- Freelancer search "Discord bot developer": 3 of 25 have no badge: Tahseen F. (Pakistan, $70K+), Melek J. (Tunisia, $10K+) and Ayyappan T. (US, $30K+). Only about 3 of the top 25 have "Discord" in their title. — [Upwork freelancer search "Discord bot developer"](https://www.upwork.com/nx/search/talent/?q=Discord%20bot%20developer)
- **Raed O.** (Tunisia, $15/hr, Top Rated with only $1K+ earnings, 14 jobs, 6 reviews; title "Python Automation | Discord & Telegram Bots | Data Extraction & ETL"):
  - His first visible jobs were scraping: $35 (2025-11-14) and $37.50 for 12.5 h hourly (2025-11-21).
  - Then a $790 betting-SaaS backend (2026-01-09) and "Discord Software Developer" for $100 (2026-04-21).
  - Several $30 jobs. One was reviewed 5★ "it was a good experience working with Raed" (2026-05-01).
  - Two new fixed contracts on 2026-10-20 ("Data Scraping Project", "Automation Developer").

  The portfolio shows a Discord image-moderation bot (YOLO) screenshot and a Make.com + Discord HR bot. — [Raed O. profile](https://www.upwork.com/freelancers/~01ae41be81a93bddc6)
- **Melek J.** (Tunisia, $30/hr, no badge, $10K+, 23 jobs, 14 reviews; CS student; title "Python Developer | Data Analysis, Trading bots & Machine learning"):
  - His first contract was "Freelance Coding Test Taker" (2025-10-14, $76.66).
  - In 2026: "PolyMarket Price Tracking Web Application", $2,140 (5★ "Extremely talented programmer. All we had to do is tell Melek what we are looking for and he found a way to solve it"), and "Python Automation Developer for Trading Signals", $600 (5★).
  - "Auto bot for telegram", $800 (2026-07-30, 5★).
  - "Orderflow dev needed", hourly, $5,305 for 176.8 h ≈ $30/hr (from 2026-09-13).

  — [Melek J. profile](https://www.upwork.com/freelancers/~014f14f775a8822de4)

### Inferences
- Bot clients here cluster in trading, crypto, betting and gaming communities. Melek J. reached about $30/hr with no badge by pairing bots with trading-domain knowledge ("funded trader"). That is a domain edge, not a Discord-specific one.
- For a newcomer, "Discord bot" alone is too thin (≈0.4 posts a day). Listing it as a skill inside a Python automation and scraping profile, as Raed O. does, catches the occasional $100 bot job without depending on it.

### Gaps
- Bot jobs titled "Automation Developer" or "Python script" were not captured by the title searches.

---

## (4) Telegram bots: demand, competition, and who wins

### Takeaway
"Telegram" titled posts run at about 2–3 a day, but only about half are development work. Telegram bot development is about 1 post a day, heavily crypto, trading and payments, with budgets from $55 to $600. The freelancer top 25 is the most badge-saturated of the bot niches: 1 of 25 has no badge. The visible winners are prolific: one Top Rated Ukrainian developer has 42 jobs, mostly Telegram bots.

### Cited Findings
- "Telegram" (10 newest, 2026-10-20 16:59 → 10-24 22:36, ≈2.4/day). Development-relevant posts:
  - "Sniper Bot Developer for Telegram" ($600, expert, 15–20 proposals; Ghana client, $9.98K spent). — [job](https://www.upwork.com/jobs/~022114123934291219346)
  - "Especialista em automação telegram" ($20–30/hr, 5–10 proposals). — [job](https://www.upwork.com/jobs/~022113295425956610286)
  - "Crypto Bot for Stop Losses… / Telegram bot" ($10–50/hr, 20–50 proposals; Australian client, $13.5K spent, rating 5.0). — [job](https://www.upwork.com/jobs/~022113060932449928738)
  - "Telegram Customer Support Bot & Admin Dashboard" ($55 fixed, 15–20 proposals; Israeli client with 287 jobs but only $1,355 spent, rating 4.41). — [job](https://www.upwork.com/jobs/~022112976282859437028)
  - "Expert Telegram Developer Needed – Real-Time Channel Post Copying & Auto-Reposting Tool" ($100, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022112637126563798217)
- The other "Telegram" posts were a VA, a trading-signal provider, a sales agent, sticker animation and an ads marketer. — [Upwork job search "Telegram"](https://www.upwork.com/nx/search/jobs/?q=Telegram&sort=recency)
- Freelancer search "Telegram bot developer": 1 of 25 has no badge (Tahseen F., $70K+). Most of the top 25 are AI-agent, RAG or trading-bot developers at $25–95/hr. — [Upwork freelancer search "Telegram bot developer"](https://www.upwork.com/nx/search/talent/?q=Telegram%20bot%20developer)
- **Andrii S.** (Ukraine, $25/hr, Top Rated, earnings hidden, 42 jobs, 24 reviews; MSc student until 2027). His last 10 contracts (2025-06 → 2026-10) are mostly small Telegram bot jobs:
  - "Telegram Bot Updates" (2025-12-10), "Tele Bot" (12-17), "Add user list + ban/unban + progress" (2026-02-12) and "Telegram bot" (05-04).
  - "Telegram Bot Developer Needed – USDT (TRC20) Payment Automation" (07-17).
  - A "Parser" startup job (03-23).

  The overview lists aiogram, Telethon and Pyrogram, scraping and anti-detect browsers. The portfolio has 11 items, including a proxy-selling Telegram bot and a GitHub-hosted scraper. — [Andrii S. profile](https://www.upwork.com/freelancers/~0120cea7ef15a2b00c)
- Melek J. (no badge, see niche 3) won "Auto bot for telegram" for $800 (2026-07-30, 5★). His portfolio features a "Telegram Signal → Interactive Brokers Options Trade Copier Bot". — [Melek J. profile](https://www.upwork.com/freelancers/~014f14f775a8822de4)

### Inferences
- Telegram bot work is real but small-ticket and repeat-driven. Andrii S.'s history suggests the same clients come back for "updates" and "add feature" jobs.
- Many Telegram bot posts are crypto sniper, copy-trade and signal bots. Some carry higher dispute and compliance risk, and the client rating should be checked (Inference).

### Gaps
- Earnings per contract were hidden on Andrii S.'s profile, so typical Telegram bot pay could not be computed beyond the posted budgets.

---

## (5) Chrome extensions: demand, competition, and who wins

### Takeaway
Chrome extension work is very thin: 10 "Chrome extension" titled posts in about 25 days (≈0.4 a day), and 2 of those were $5–$50 tester gigs. Real build jobs draw heavy competition (3 of 10 had 50+ proposals). The top 25 is dominated by long-tenured specialists ($500K+ Top Rated Plus, Expert-Vetted). The one no-badge seller in the top 25 has zero extension contracts on Upwork and ranks on portfolio screenshots from the Chrome Web Store. The fastest visible breakthrough came at $7/hr: Dika B. turned a $50 extension job into 2,300+ hours.

### Cited Findings
- 10 newest posts span 2026-09-30 → 10-24. Proposal tiers: 50+ ×3, 20–50 ×3, 15–20 ×2, 5–10 ×1, fewer than 5 ×1. Budgets: fixed $5 (tester), $50 (tester), $900, $2,500 and $10,000; hourly $6–15, $25–40 and $25–65. — [Upwork job search "Chrome extension"](https://www.upwork.com/nx/search/jobs/?q=Chrome%20extension&sort=recency)
- Examples:
  - "Google Chrome Extension Development" ($900, 50+ proposals; US client, $24.7K spent). — [job](https://www.upwork.com/jobs/~022111149631548605550)
  - "Chrome Extension Developer for AI-Powered Student Dashboard (MVP)" ($2,500, 50+ proposals). — [job](https://www.upwork.com/jobs/~022112580821315479650)
  - "Chrome Extension Design and Develop" ($6–15/hr, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022105679106473056126)
- Freelancer search "Chrome extension developer": 1 of 25 has no badge (Sumit S.). #1 is Vlas B. (Top Rated Plus, $500K+, 38 jobs, $60/hr), and the list includes Ahmed I. (Expert-Vetted, $400K+). — [Upwork freelancer search "Chrome extension developer"](https://www.upwork.com/nx/search/talent/?q=Chrome%20extension%20developer)
- **Sumit S.** (India, $12/hr, no badge, $9K+) ranks #9. His only Upwork job is "Stripe Connect Express Developer" (hourly from 2025-11-21, $8,928 for 740.5 h ≈ $12/hr), and he has 0 reviews. His portfolio is 5 browser extensions shown with Chrome Web Store screenshots (e.g. "Velio", 1,000 users, 4.7★). The overview is long and keyword-dense and claims "7+ years of browser-extension development". — [Sumit S. profile](https://www.upwork.com/freelancers/~013dbad16e4485306a)
- **Dika B.** (Indonesia, $7/hr, Top Rated, $10K+, 11 jobs, 5 reviews). He had old 2015 web gigs, then went dormant until 2026:
  - "ChatGPT Auto-submit Chrome Extension", $50 fixed (2026-01-05).
  - Then within days "Node.js Developer to Develop and Update an Active Chrome Extension", hourly from 01-09: $7,589 for 1,533.8 h ≈ **$4.95/hr**.
  - A $12 static-site job with a long 5★ review (01-29 → 02-22).
  - "Browser Extension Development", hourly: $5,456.50 for 779.5 h ≈ $7/hr, 5★ "a browser extension wizard".

  The overview opens with a stats line and names shipped extensions (Hotel Ninja, InPolicy.ai, WooWA CRM). — [Dika B. profile](https://www.upwork.com/freelancers/~01dba546246e5e7982)

### Inferences
- Chrome extensions pay acceptably per project ($900–$10,000), but there are too few posts for a newcomer to rely on. Search ranking seems to reward extension portfolio items with store screenshots, even without Upwork extension history (Sumit S.).
- The visible newcomer path ran at $5–7/hr. That is review-building, not a profitable rate.

### Gaps
- Six of the 10 posts were older than 72 hours, so recent weekly volume may differ.

---

## (6) Web scraping / data extraction: demand, competition, and who wins

### Takeaway
Scraping has steady volume (20 posts in about 4.25 days ≈ 4.7 a day; 10 in the last 48 hours) and moderate competition. Only 2 of 20 posts had 50+ proposals; 12 had 20–50. But the seller side is a price race: 20 of the top 25 sellers charge $10/hr or less, many Pakistan-based, and the visible no-badge winners realize $3–10/hr on $10–$225 contracts. Higher-paying scraping work ($1,000–$2,500, $20–100/hr) asks for anti-bot, PDF or pipeline experience, or for scrapers the seller has already published.

### Cited Findings
- Proposal tiers (20 posts, 2026-10-21 17:17 → 10-25 23:16): 50+ ×2, 20–50 ×12, 15–20 ×3, 10–15 ×2, 5–10 ×1, fewer than 5 ×1 (that one was not a scraping job). Budgets:
  - Small fixed: $50, $50, $52, $100, $100, $130, $150.
  - Large fixed: $1,000, $1,500, $2,500 ×2.
  - Hourly: $20–100, $20–60, $20–40.

  — [Upwork job search "scraping"](https://www.upwork.com/nx/search/jobs/?q=scraping&sort=recency)
- Examples:
  - "Python Data Scraping Web+PDF from Public Filings" ($20–100/hr, intermediate, 15–20 proposals; posted 10-25). — [job](https://www.upwork.com/jobs/~022114496291892509689)
  - "Web Scraping for Price Data" (8–10 sites, $52 fixed, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022114352933603013020)
  - "Ad-Spy Platform (Meta/TikTok Ads, Shopify Sales Estimates): Engineer Who Has Scraped This Before" ($2,500, 10–15 proposals; Peruvian client, $25K spent, rating 5.0). — [job](https://www.upwork.com/jobs/~022113869524315145015)
  - "Expert Python Web Scraper Needed – 10,000 US Amateur Baseball Team Leads" ($130, 10–15 proposals). — [job](https://www.upwork.com/jobs/~022112994863044685318)
- Freelancer search "web scraping data extraction": 3 of 25 have no badge: Shoukat A. (Pakistan, $3.33/hr, $3K+), Oleg L. (Ukraine, $5/hr, $9K+) and Dilip K. (India, $6/hr, $50K+). Most listed rates are $3–10/hr. — [Upwork freelancer search "web scraping data extraction"](https://www.upwork.com/nx/search/talent/?q=web%20scraping%20data%20extraction)
- **Shoukat A.** (Pakistan, $3.33/hr, no badge, $3K+, 41 jobs, 23 reviews; student until 2027). Recent contracts:
  - Fixed: $95 school data (2026-02-23), $225 lead-gen scraping (03-01), a $5 screenshots-to-CSV job (06-08), $17 (06-21) and $70 (07-28).
  - Three healthcare-directory contact extractions at $10–$20 each in late September 2026, all 5★.
  - Two new hourly scraping contracts on 10-21 and 10-22 ("Streeteasy Building Scrape", 29.8 h).

  The overview opens with a problem statement ("Majority of web scraping projects fail because anti-bot systems…"). The portfolio has 12 named-site scrapers (Zillow with Cloudflare/Turnstile, Redfin, Etsy, Psychology Today, Realtor.ca). — [Shoukat A. profile](https://www.upwork.com/freelancers/~01959e54bbebc3c986)
- Raed O. (see niche 3) also started on scraping jobs ($35 and $37.50 in November 2025) before moving to bots and backend work. — [Raed O. profile](https://www.upwork.com/freelancers/~01ae41be81a93bddc6)

### Inferences
- Scraping is the most winnable niche of the seven for a true newcomer: steady posts, many $50–$150 fixed jobs that clients award quickly, and few 50+ posts. The trade-off is very low effective pay (≈$3–10/hr) unless the seller moves up to PDF/ETL pipelines or "has scraped this before" platform jobs.
- Lead-list scraping overlaps with low-paid data-entry and lead-gen sellers. Python pipelines, PDF extraction and anti-bot work separate a developer from that crowd (Inference).

### Gaps
- Several large scraping posts targeted specific platforms (Meta Ad Library, Amazon reviews, death certificates). Terms-of-service and legality risk per job was not assessed.

---

## (7) Supabase / Firebase backend fixes: demand, competition, and who wins

### Takeaway
Supabase-titled posts run at about 3.3 a day and Firebase at about 0.6 a day. Supabase posts are expert-heavy (7 of 10) and crowded (4 of 10 had 50+). The freelancer side is the most badge-saturated measured: 0 of 25 had no badge on a generic search, and 1 of 25 on a "Lovable fix" search. Even so, the clearest no-badge success story in this pull is here. Younes M. (Morocco) won about $10K of "make AI-built apps safe to launch" work between June and October 2026. He leads with a code review, row-level security (RLS) fixes and a risk-ranked fix list. Security reviews of Supabase apps are now a distinct job type ($300–$1,500).

### Cited Findings
- Supabase: 10 posts from 2026-10-22 19:31 → 10-25 20:49 (≈3.3/day; 7 in the last 48 h). Proposal tiers: 50+ ×4, 20–50 ×5, 15–20 ×1. Budgets: fixed $100, $145, $300, $530; hourly $15–30, $20–35, $20–40, $30–80, $35–55. — [Upwork job search "Supabase"](https://www.upwork.com/nx/search/jobs/?q=Supabase&sort=recency)
- Supabase examples:
  - "Independent Security & Architecture Review – Deno / Supabase AI Application" ($530, expert, 15–20 proposals). — [job](https://www.upwork.com/jobs/~022114459476598170731)
  - "Senior PostgreSQL / Supabase Security Engineer" (review an SQL security patch and validate RLS; $300, 20–50 proposals). — [job](https://www.upwork.com/jobs/~022114147352743007122)
  - "MCP Server Developer to Connect Claude to Our Supabase and Notion Data" (hourly, 50+ proposals; client rating 5.0, 41 reviews). — [job](https://www.upwork.com/jobs/~022114376406569468202)
- Firebase: 10 posts from 2026-10-08 → 10-25 (≈0.6/day), with 4 of 10 at 50+. Example: "Fix signup and calculation problems in a live hairstylist app | Firebase, Vercel" ("Most of it was built with Claude Code"; $300, 50+ proposals). — [Upwork job search "Firebase"](https://www.upwork.com/nx/search/jobs/?q=Firebase&sort=recency); [job](https://www.upwork.com/jobs/~022112188086615645444)
- Freelancer search "Supabase Firebase developer": 0 of 25 have no badge. — [Upwork freelancer search "Supabase Firebase developer"](https://www.upwork.com/nx/search/talent/?q=Supabase%20Firebase%20developer)
- Freelancer search "Supabase Lovable app fix": 1 of 25 has no badge (Younes M.). Many titles now sell rescue of AI-built apps: "AI-Built App to Production" (Ahadu G.), "Vibe-Coded App Rescue" (Ehsanullah Q.), "Fix & Ship AI-Built Apps" (Juan B.), "I Secure AI-Built Apps" (Andrew C.). — [Upwork freelancer search "Supabase Lovable app fix"](https://www.upwork.com/nx/search/talent/?q=Supabase%20Lovable%20app%20fix)
- **Younes M.** (Morocco, $45/hr, no badge, $10K+, 7 fixed jobs, 2 reviews; ex-Oracle and Société Générale; video, $30 consultation). Contracts:
  - Mobile app, $3,000 (2026-06-24 → 09-23). HRX Avatar backend, $3,000 (07-16 → 09-04, 5★).
  - "Urgent PR Review and Test Deployment", $1,860 (09-05 → 09-29). The 5★ review says "he doesn't just implement something because I've asked for it — he thinks about the wider impact, flags potential issues".
  - Apple In-App Purchase setup, $630 (09-30).
  - "Personal Trainer App security review", $1,500 (10-15).
  - "Fractional Senior Backend Engineer (Postgres / Supabase) – Weekly Architecture Review", $175 (10-20).

  The overview opens: "I take SaaS apps that were built fast with Lovable, Cursor, Bolt or a rushed MVP and make them safe to launch". It also promises "a code review and a written list of what to fix, ranked by risk". — [Younes M. profile](https://www.upwork.com/freelancers/~0104b3e116989a726d)
- Michael B. (no badge, see niche 2) sells the same angle ("Security reviews for Supabase RLS and Firebase rules: I test with two normal accounts, prove every gap, fix it and re-test"). He shows two sample RLS reviews as portfolio items and won a "Software Auditor of SaaS Platform" contract on 2026-10-23. — [Michael B. profile](https://www.upwork.com/freelancers/~0111f48c26147de4f5)

### Inferences
- Supabase/Firebase fixes overlap almost completely with the "vibe-coded app rescue" niche from the October 24 report. The new evidence is that **security/RLS review** is a distinct, well-paid entry product ($300–$1,500 fixed). No-badge sellers won it on the strength of *sample audit write-ups*, without prior Upwork reviews.
- Search visibility is hard: 0–1 of 25 no-badge in rankings. So newcomers here likely win by applying early to posts rather than through invites (Inference).

### Gaps
- Younes M.'s prior non-Upwork seniority (Oracle) probably drove his early wins. How much of the success transfers to someone without that background is unknown.

---

## Cross-niche comparison (observed figures)

### Takeaway
Ranked by winnability for a no-badge, 0-job developer: **(1) web scraping** (most posts at low competition, but $3–10/hr), **(2) Supabase/Firebase security and fix work** (crowded rankings, but no-badge sellers won $300–$3,000 contracts with sample audits), **(3) mobile fixes** (highest volume, heavy proposals, low-rate entry common), **(4) Unity** (lowest proposal counts, but needs shipped games), then **(5) Telegram bots**, **(6) Chrome extensions** and **(7) Discord bots**, which are too thin to stand alone.

### Cited Findings
| Niche | Posts/day (title match) | Last ~48 h | 50+ proposals (newest) | No-badge in top 25 | Visible newcomer pay |
|---|---|---|---|---|---|
| Unity | ≈4.4 | 7 | 0/10 | 4/25 | $10–25/hr ([Aditya C.](https://www.upwork.com/freelancers/~0146c48fce2e816911), [Andres R.](https://www.upwork.com/freelancers/~01cea763edc1b3860f)) |
| Flutter + React Native | ≈8.5 + ≈3.5 | 10 + 3 | 9/20 | 3/25 and 4/25 | $3–8/hr ([Muhammad Azan J.](https://www.upwork.com/freelancers/~015e5fe1ac4b321c66), [Nahom D.](https://www.upwork.com/freelancers/~010979e876740b8e4f)); $1,325 fixed ([Michael B.](https://www.upwork.com/freelancers/~0111f48c26147de4f5)) |
| Discord bots | ≈0.4 | 0 | 0/4 (3 of 4 at 20–50) | 3/25 | $100 bot job ([Raed O.](https://www.upwork.com/freelancers/~01ae41be81a93bddc6)) |
| Telegram bots (dev only) | ≈1 | 1 | 0/5 dev posts | 1/25 | $800 bot ([Melek J.](https://www.upwork.com/freelancers/~014f14f775a8822de4)) |
| Chrome extensions | ≈0.4 | 1 | 3/10 | 1/25 | $5–7/hr ([Dika B.](https://www.upwork.com/freelancers/~01dba546246e5e7982)) |
| Web scraping | ≈4.7 | 10 | 2/20 | 3/25 | $3–10/hr ([Shoukat A.](https://www.upwork.com/freelancers/~01959e54bbebc3c986)) |
| Supabase / Firebase | ≈3.3 / ≈0.6 | 7 / 2 | 4/10 / 4/10 | 0/25, 1/25 | $175–$3,000 fixed ([Younes M.](https://www.upwork.com/freelancers/~0104b3e116989a726d)) |

Sources for the volume columns: [Unity](https://www.upwork.com/nx/search/jobs/?q=Unity&sort=recency); [Flutter](https://www.upwork.com/nx/search/jobs/?q=Flutter&sort=recency); [React Native](https://www.upwork.com/nx/search/jobs/?q=React%20Native&sort=recency); [Discord bot](https://www.upwork.com/nx/search/jobs/?q=Discord%20bot&sort=recency); [Telegram](https://www.upwork.com/nx/search/jobs/?q=Telegram&sort=recency); [Chrome extension](https://www.upwork.com/nx/search/jobs/?q=Chrome%20extension&sort=recency); [scraping](https://www.upwork.com/nx/search/jobs/?q=scraping&sort=recency); [Supabase](https://www.upwork.com/nx/search/jobs/?q=Supabase&sort=recency); [Firebase](https://www.upwork.com/nx/search/jobs/?q=Firebase&sort=recency).

### Inferences
- Patterns that repeat across winners:
  - **A shipped, checkable artifact** in the profile: Play Store apps, playable builds, Chrome Web Store screenshots, sample RLS audits, named-site scrapers.
  - **A tiny first job** ($5–$50) closed fast for a 5★ review: Michael B., Dika B., Shoukat A.
  - **Converting a fixed job into long hourly work with the same client**: Nahom D., Dika B., Andres R.
- For a developer who already sells n8n, API and app-rescue work (the October 24 recommendation), **scraping and Supabase/RLS security review** extend that profile naturally. Discord, Telegram and Chrome extension work are best listed as secondary skills, not positioned as the headline.

### Gaps
- One weekend snapshot. Seasonality and week-to-week trend are unknown.
- No Nigerian no-badge examples were found in these niches. The one Nigerian profile (Olajire A., Flutter) is an established Top Rated Plus seller.
