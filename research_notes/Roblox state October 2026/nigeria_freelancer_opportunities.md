# Nigeria-based Roblox Freelancer (UI / Shops / Monetization / Luau): Opportunities, Positioning & Risks — Oct 2026

Method note (2026-10-24): about 20 tool calls. WebFetch could not reach most primary domains from this sandbox (create.roblox.com, malwarebytes.com and techeconomy.ng all returned DNS errors), so the findings below come from search-result snippets of those pages. Most fee figures come from blogs written by competing fintechs (Cleva, Raenest), which have a stake in the answer. Labels: **[V]** = official or primary source (seen in a snippet only). **[S]** = secondary source. **[T]** = from my training knowledge (cutoff Jun 2026), not re-verified here. **[I]** = my inference. Prior context is in /home/user/AI-AUTOMATION/research/roblox-market-research.md and account-audit-2026-10-20.md: the profile ranks #28 in Upwork's Nigeria-only "Roblox" search, is absent from the top 300 for "Roblox developer", and none of the 40 recent Roblox jobs was UI-only.

## 1. Getting paid from Nigeria (Upwork, DevEx, Robux, fintechs, CBN/tax)

### Takeaway
Upwork → Nigeria works through Direct-to-Local-Bank (NGN, about $0.99/withdrawal per secondary sources), Payoneer, or a USD virtual account (Cleva, Raenest, Grey) reached via "Direct to U.S. Bank". That last route now carries a **$2.99 Upwork fee** (since Sep 1, 2026) for anyone with a non-US tax address. DevEx is paid through Tipalti, and which methods work depends on the country; I could not confirm which Tipalti methods reach Nigeria. Robux from clients only becomes cash through DevEx (minimum 30,000 earned Robux per prior notes and [T]). Since Jan 1, 2026, the Nigeria Tax Act makes self-declaration of worldwide freelance income mandatory.

### Cited Findings
**Upwork withdrawals**
- [S] Direct to Local Bank (NGN): Upwork charges a flat $0.99 per withdrawal; one source gives a $5 minimum and up to 4 business days. Raenest warns that Upwork's payment partner sets the exchange rate and the markup is never shown. — [Raenest](https://www.raenest.com/blog/how-to-withdraw-money-from-upwork-in-nigeria); [techeconomy.ng, Aug 2026](https://techeconomy.ng/best-platform-to-withdraw-from-upwork-in-nigeria-2026)
- [S] Payoneer: one guide puts the Upwork-side fee at about $2 per withdrawal. Payoneer can take up to about 3% when converting to local currency, and has a $30 annual card fee. I found no reliable figure for Payoneer's fee into a naira bank. — [Raenest](https://www.raenest.com/blog/how-to-withdraw-money-from-upwork-in-nigeria); [Cleva Payoneer comparison](https://getcleva.com/blog/cleva-vs-grey-vs-raenest-payoneer-deposit-fees-compared)
- [S] **Starting Sep 1, 2026, Upwork charges $2.99 on every "Direct to U.S. Bank" withdrawal by freelancers whose tax address is outside the US.** The fee is triggered by the profile's tax address, not by the receiving account, so it hits Cleva, Grey and Raenest USD accounts. — [Cleva blog](https://www.getcleva.com/blog/upworks-new-2-99-withdrawal-fee-dont-let-it-cost-you-twice) (a competitor's blog, not confirmed on support.upwork.com)
- [S] Grey: a 0.8% ACH deposit fee (minimum $2), about 1% conversion and 0.5% withdrawal on Upwork funds, plus ₦35 per naira withdrawal. The ₦35 figure is the most consistent fee across sources. — [techeconomy.ng](https://techeconomy.ng/best-platform-to-withdraw-from-upwork-in-nigeria-2026); [Cleva comparison](https://getcleva.com/blog/cleva-vs-grey-vs-raenest-which-usd-account-is-best-for-nigerian-freelancers-in-2026)
- [S] Raenest (Geegpay rebranded as Raenest): fees conflict. Cleva says Raenest charges zero conversion/withdrawal fees in one post and 0.5% conversion in another. Raenest's own guide lists $2 or $4 on Upwork withdrawals. — [Cleva](https://getcleva.com/blog/cleva-vs-grey-vs-raenest-which-usd-account-is-best-for-nigerian-freelancers-in-2026); [Raenest](https://www.raenest.com/blog/how-to-withdraw-money-from-upwork-in-nigeria); [nairaCompare 2026 guide](https://nairacompare.ng/blogs/the-complete-personal-finance-guide-for-nigerian-freelancers-remote-workers-2026-edition)
- [S] Cleva says it charges nothing on Upwork deposits, USD→NGN conversion or naira withdrawals, apart from ₦50 stamp duty on transfers of ₦10,000 or more. This is self-reported. — [Cleva](https://www.getcleva.com/blog/7-best-fintech-platforms-in-nigeria-in-2026)
- [S] Grey users complain about verification delays and withdrawal issues. — [nairaCompare](https://nairacompare.ng/blogs/the-complete-personal-finance-guide-for-nigerian-freelancers-remote-workers-2026-edition)

**DevEx**
- [V] The DevEx Portal is run by Tipalti. Payout methods (PayPal, ACH, eCheck, wire) "depend on where you live", per Tipalti's country coverage list. Tipalti deducts a transaction fee, and conversion to local currency adds a 1.9–3% FX fee. — [Roblox DevEx Portal docs](https://create.roblox.com/docs/production/monetization/devex-portal)
- [V] After the first approved request you get a Tipalti invite and must choose a payment method and tax form **within one week**, or Roblox declines the request and refunds the Robux. If you use a bank account, the name on it must match the name in the portal. — [DevEx Portal docs](https://create.roblox.com/docs/production/monetization/devex-portal)
- [S] Non-US residents file a W-8BEN in Tipalti and need a government ID. — [rolearn.dev guide](https://rolearn.dev/guidance/roblox-devex-requirements-2026)
- [V/S] Rates: the standard rate is $0.0038/Robux for Robux earned on or after Sep 5, 2025. The U.S. 18+ rate is $0.0054, but it applies only to spend from age-verified US adults in eligible games. — [Roblox 18+ rate doc](https://create.roblox.com/docs/production/monetization/18-plus-devex-rate); [Monaco CPA](https://www.monacocpa.cpa/post/roblox-developer-taxes-devex-guide)
- **Conflict on the minimum:** the prior notes and [T] say 30,000 earned Robux, age 13+, verified email, ID verification, good standing and no Premium requirement (Roblox lowered the minimum from 100K to 30K in 2023). Some third-party 2026 guides still say 100,000. — [rolearn.dev](https://rolearn.dev/guidance/roblox-devex-guide-requirements-rates) (likely outdated). I could not reach the official eligibility page.
- No source confirms whether Nigeria is supported by Tipalti or which methods reach it (see Gaps).

**Robux from clients / commissions**
- [S] DevForum UI commissions are still often priced in Robux or Group Funds, sometimes with PayPal USD as an option. Designers convert using the DevEx rate. — [Showy19 DevForum](https://devforum.roblox.com/t/showy19-ui-designer-builder-3d-artist/4462562); [FoxxIVE portfolio](https://foxxive-portfolio.carrd.co)
- [S] Malicious actors move stolen games into locked groups, which can make earnings ineligible for DevEx. One victim reports about 2M Robux (about $8,500) blocked. — [DevForum](https://devforum.roblox.com/t/my-games-were-stolen-and-now-8500-usd-is-not-eligible-for-devex/4773705)

**Nigerian rules: CBN / tax**
- [S] The Nigeria Tax Act took effect Jan 1, 2026. Residents are taxed on worldwide income and must self-assess. Foreign clients don't withhold tax, so the freelancer must declare. The first ₦800,000 is exempt. Rent relief is 20% (capped at ₦500k). Penalties: ₦50k for failing to register, then ₦25k per month; ₦100k for late filing, then ₦50k per month. Returns are due by Mar 31. — [TechCabal, Sep 2025](https://techcabal.com/2025/09/29/remote-workers-nigeria-income-tax-2026/); [Techpoint](https://techpoint.africa/insight/freelancers-and-remote-workers-nigerias-tax-laws/); [Cleva](https://www.getcleva.com/blog/nigeria-tax-reform-2026-everything-freelancers-and-remote-workers-need-to-know)
- [S] Taiwo Oyedele (tax reform committee chair) says Nigeria has data-sharing agreements with 100+ countries to enforce tax on remote workers. — [Nairametrics](https://nairametrics.com/?p=527082)
- [S] The latest CBN guidance found is older: domiciliary accounts funded by electronic wire transfer can be used without restriction for eligible transactions, and banks may not accept FX cash deposits. I found no 2025–26 CBN circular aimed at freelancers or at platforms like Grey and Raenest. — [TheCable](https://www.thecable.ng/?p=501772); [nairaCompare](https://nairacompare.ng/blogs/how-to-receive-usd-gbp-or-eur-in-nigeria-without-a-domiciliary-account)

### Inferences
- [I] At small invoice sizes the fixed fees bite: $2.99 on a $50 withdrawal is 6%. Batch withdrawals (for example $300+), or use Direct-to-Local-Bank ($0.99) and compare its hidden FX spread against Cleva or Grey once real money arrives.
- [I] Prefer USD contracts (Upwork, PayPal or fintech USD accounts) over Robux. Robux carry DevEx risk (30K minimum, Tipalti onboarding, FX fees, uncertain Nigeria coverage) and value only $0.0038 each, i.e. 10,000 R$ ≈ $38.
- [I] Keep records of every payment from the first job. Under NTA 2026, Upwork income should be declared, and income under ₦800k per year is exempt.

### Gaps
- Upwork's official withdrawal-methods page for Nigeria and the $2.99 fee could not be fetched; confirm both in Upwork Settings → Get Paid.
- Tipalti coverage for Nigeria (PayPal receive-only limits, wire/USD support) is unconfirmed. Check it in the DevEx portal or Tipalti's country list.
- The official DevEx minimum (30K vs 100K) was not reached on create.roblox.com directly.
- I found no 2025–26 CBN circular specific to freelancer inflows.

## 2. Nigerian/African Roblox developer community & competition

### Takeaway
A small but growing ecosystem exists: a "Build Africa on Roblox" training cohort (Gamr Lab, UNILAG, UK-Nigeria Tech Hub, with Roblox thanked) and pan-African game jams. I found no press-documented Nigerian Roblox hit. Roblox's own programs (Incubator, Jumpstart) aren't Africa-targeted, but Jumpstart has rolling applications. Upwork competition among Nigerian Roblox profiles is real but small (Nigeria-only search: the freelancer ranks #28).

### Cited Findings
- [S] "Build Africa on Roblox" cohort: a Demo Day at Gamr Lab with learners from Nigeria, Kenya, Ethiopia and Ghana (40% female). Partners include the University of Lagos, the French Embassy in Nigeria and the UK-Nigeria Tech Hub; Roblox's team is thanked. A second cohort ("Summer Edition") was announced. These are LinkedIn posts only; I found no evidence of LSETF involvement. — [LinkedIn post (Emeka Nwakile)](https://ng.linkedin.com/in/emeka-nwakile-13b43236); [LinkedIn (Feyisayo A.)](https://ng.linkedin.com/in/feyisayo-a-84a3b06a)
- [S] Pan-African game jams: Gamathon Pan-African Game Jam (Sep 14–28, 2025, itch.io + Discord), Pan-African Game Jam 2026 (submissions Apr 23–May 12, 2026), and Gamathon Nigeria 2025 in Lagos (Sep 29–Oct 4, 2025, $2,000 pitch prize). Africacomicade awarded $42,000 to game developers. These are not Roblox-specific. — [itch.io Gamathon-25](https://itch.io/jam/gamathon-25); [itch.io panafrican2026](https://itch.io/jam/panafrican2026); [Games Industry Africa](https://gamesindustryafrica.com/2025/09/26/gamathon-nigeria-2025-returns-to-lagos/); [BusinessDay](https://businessday.ng/bd-weekender/sports-bd-weekender/article/africacomicade-awards-42000-to-top-game-developers-boosts-african-collaboration/)
- [S] A Change.org petition asks Roblox for Lagos servers, citing high latency from West Africa. — [Change.org](https://www.change.org/p/bring-roblox-servers-to-lagos-nigeria-6d8ceb38-22ce-4638-b109-8ac1105cb265)
- [V] Roblox Incubator (6 months, first cohort of 26 studios; "more global cohorts" promised, but currently listed closed) and Jumpstart (invests in creators building games that bring 18+ players; rolling applications, listed open), announced Mar 2026. Inspire 2026 cafés were held in LA, Houston, NY, Seoul and São Paulo, none in Africa. — [Roblox newsroom Mar 2026](https://about.roblox.com/en-au/newsroom/2026/03/roblox-announces-incubator-jumpstart-creator-programs); [GamesBeat](https://gamesbeat.com/roblox-plans-to-expand-its-incubator-and-jumpstart-programs/); [Jumpstart docs](https://create.roblox.com/docs/creator-programs/jumpstart.md)
- [S] A Nigerian retailer (Carry1st) markets Robux and DevEx as a "viable income stream for Nigerian creators" but names no Nigerian developers. — [Carry1st blog](https://carry1st.com/blog/what-is-robux-in-roblox-a-guide-for-nigerians)
- [V] (prior audit) Top Nigerian Upwork Roblox profiles (Francis, Odukoya, Oma, Abdulrazaq) mostly offer consultations. Inioluwa A. ranks #1 for "Luau" with no earnings, which shows that a focused title helps. — /home/user/AI-AUTOMATION/research/account-audit-2026-10-20.md

### Inferences
- [I] The Build Africa on Roblox / Gamr Lab network is the most promising local community to join, both for referrals and to recruit collaborators (builders, modelers) for package deals.
- [I] West Africa latency hurts playtesting of client games from Lagos. Test on mobile data, and report it honestly to clients as a limitation.

### Gaps
- I found no TechCabal or Techpoint coverage of a named Nigerian Roblox success story, and no Nigeria-specific Roblox Discord.
- I could not verify the Build Africa on Roblox cohort dates or its Roblox sponsorship from an official source.

## 3. Most in-demand / least-crowded services for a UI/monetization specialist (2026)

### Takeaway
Clients don't post UI-only jobs much on Upwork (0 of 40 recent jobs); UI comes bundled into development jobs. The least crowded, evidence-backed niches come from 2025–26 policy changes: paid-random-item odds disclosure, Kids/Select eligibility, monetization that qualifies for the 18+ DevEx rate, and DataStore/shop reliability. Mobile UI is in demand but crowded. I found no direct evidence on demand for "AI-built game cleanup" beyond clients writing "No AI-generated" in job posts.

### Cited Findings
- [V] Paid random items must show the odds of every outcome, as percentages that sum to exactly 100%, before purchase. This includes luck boosts, pity systems and indirect cases, and a bare "(i)" icon doesn't count as disclosure. — [Roblox docs](https://create.roblox.com/docs/production/monetization/paid-random-items) (via prior notes)
- [S] Roblox Kids (5–8) and Select (9–15) accounts launched in June 2026. To get a game into those catalogs, the creator needs ID verification, 2-step verification and Roblox Plus. — [Nasdaq press release](https://www.nasdaq.com/press-release/roblox-introduces-new-age-based-accounts-and-expanded-parental-controls-users-under) (via prior notes)
- [V] The U.S. 18+ rate of $0.0054 applies only to game passes, subscriptions, select items and private servers bought by age-verified US adults. Clients therefore have a reason to restructure shops around those products. — [Roblox doc](https://create.roblox.com/docs/production/monetization/18-plus-devex-rate)
- [V] Q2 2026: Roblox said engagement shifted to games that make less per hour, and that discovery now rewards retention, with Q3 bookings guided −14–18% YoY. — [SEC 8-K ex99.1](https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051059/ex991-robloxq22026earnin.htm) (via prior notes)
- [V] (prior audit) Of 40 Roblox jobs posted Oct 5–20, 2026: 38% development/scripting, none UI-only; DataStore saving was the most requested system, then rebirth and game-pass shop. 30% had fewer than 5 proposals, and some said "No AI-generated". — /home/user/AI-AUTOMATION/research/account-audit-2026-10-20.md
- [S] Roblox's Talent Hub is described as the most direct route for hiring a single role. — [Game-Ace guide](https://game-ace.com/blog/how-to-hire-the-best-roblox-game-developer/)

### Inferences
- [I] Ranked by demand × low competition:
  1. "Shop + game-pass system, built end-to-end": UI plus MarketplaceService receipt handling plus DataStore. This matches the most-requested systems.
  2. "Odds-disclosure compliance retrofit" for gacha/egg/crate games: a fixed-price, small, verifiable job.
  3. Monetization audit or teardown: shop UX, price ladder, 18+-rate-eligible products, starter packs.
  4. Mobile UI fix: scaling, safe areas, touch targets. In demand but crowded.
  5. Kids/Select eligibility prep checklist. The market is new and its size is unknown.
- [I] Lead with "Roblox Developer" plus the systems, not "UI designer". Sell UI as the differentiator inside full-system jobs.
- [I] Fixing AI-generated code may be a hidden opportunity, since clients who say "No AI-generated" may have been burned by it. Position it as "human-built, tested" rather than "AI-assisted".

### Gaps
- I found no hard numbers on how many clients ask for odds-compliance or Kids/Select prep. The demand is inferred from policy.
- Talent Hub and DevForum hiring posts for 2026 could not be sampled.

## 4. How niche freelancers present proof & price packages

### Takeaway
DevForum and Carrd portfolios with screenshots, GIFs and video, per-screen or per-package pricing, 50% upfront, and Robux or USD are the norm. Recent UI package prices are roughly 15K–45K+ R$ (about $57–$171 at DevEx rates) or about $75–$150+ USD. For a full UI kit plus scripting, $18/hr on Upwork is roughly in line with or above DevForum rates.

### Cited Findings
- [S] Showy19 (recent DevForum post): a full game UI package (10+ screens) costs 25,000–45,000+ R$. Studio import adds 40%, and a 3–5-day rush adds another 40%. Quotes are per screen, with 50% upfront. — [DevForum](https://devforum.roblox.com/t/showy19-ui-designer-builder-3d-artist/4462562)
- [S] AstralDefined: from 15,000 R$ or $75, with Studio import and scaling included. — [Carrd](https://astraldefined.carrd.co/)
- [S] Older listings for comparison: Quaint charged a minimum of $150 or 50K R$ for a full UI (Jan 2022); EpicJeremiah68 charged 1K R$ per frame with 50% upfront; Reuben started at 1,000 R$ or $12. — [Quaint](https://devforum.roblox.com/t/reopening-sale-quaint-ui-designer-for-hire/620618); [EpicJeremiah68](https://devforum.roblox.com/t/open-epicjeremiah68-ui-designer/1376662); [Reuben](https://devforum.roblox.com/t/open-user-interface-designer/975871)
- [S] FoxxIVE uses a Carrd portfolio, converts Robux at the DevEx rate and refuses free commissions. — [FoxxIVE](https://foxxive-portfolio.carrd.co)
- [S] DevForum portfolio threads (for example 2Bvild) show the usual format: an image gallery, a list of past games with visit counts, and contact/payment terms. — [DevForum 2Bvild](https://devforum.roblox.com/t/portfolio-2bvild-builder-modeler-an-ui-artist/608580)

### Inferences
- [I] The proof set to build: 3–4 Upwork portfolio items, each with a before/after shop screenshot, a 30–60s video of the purchase flow working on phone and PC (including the receipt processed and the data saved), and a short write-up of the problem, the build and the result. Add a public place link or an uncopylocked demo place, plus a DevForum portfolio thread or Carrd page that mirrors it.
- [I] Suggested fixed-price ladder to post as Upwork Project Catalog items. These are inferences calibrated to the DevForum ranges above:
  - Shop/HUD teardown: free or about $15.
  - Odds-disclosure retrofit: $40–80.
  - Shop UI + game-pass purchase system with DataStore: $120–250.
  - Full monetization UI kit (shop, daily rewards, battle pass): $250–500.
  - Add-ons: mobile-scaling pass and rush delivery (+30–40%).

### Gaps
- I couldn't fetch current Upwork Project Catalog listings for Roblox UI, so the USD package benchmarks are not verified.

## 5. Risks: scams and Upwork account risks

### Takeaway
The biggest 2026 threat is **malware delivered through fake job offers** that leads to hijacked accounts and stolen games. Other common risks are informal rev-share deals, unpaid commissions, and "transfer first, pay later" game deals. On Upwork, Nigerian accounts face ID re-verification holds (NIN slips are reportedly rejected), suspensions triggered by off-platform contact or payment, and Connects costs ($0.15 each).

### Cited Findings
- [S] Malwarebytes (Jun 2026) reports attackers taking over developer accounts and whole games, often after a fake job offer persuades a developer to run malware. — [Malwarebytes](https://www.malwarebytes.com/blog/scams/2026/06/roblox-developers-are-losing-entire-games-to-malware-attacks) (snippet only; the page could not be fetched)
- [S] A fake domain impersonating a Roblox developer forum, robloxforum[.]dev, has been flagged as malicious. — [PhishDestroy](https://phishdestroy.io/domain/robloxforum.dev)
- [S] Stolen games were moved into a locked group, leaving about 2M Robux (about $8,500) ineligible for DevEx. — [DevForum](https://devforum.roblox.com/t/my-games-were-stolen-and-now-8500-usd-is-not-eligible-for-devex/4773705)
- [S] In a game-transfer scam, buyers offered 4,500 R$, received the group transfer, then never paid. The advice is to never transfer before payment, to use a middleman and to keep chat logs. — [DevForum](https://devforum.roblox.com/t/i-was-scammed-by-two-fake-developers-after-a-game-transfer-%E2%80%93-a-warning-to-others/3859583)
- [S] Rev-share abuse: one developer on an informal 20% share with no agreement was gaslighted and not paid. Aftermath's coverage of the Forsaken sale notes that "shares" are often informal and not legally binding, and that the owner sold the game and left rev-share obligations unresolved. — [DevForum](https://devforum.roblox.com/t/way-to-report-someone-who-employed-you-and-who-started-gaslightingscammingabusing-you/3881117); [Aftermath](https://aftermath.site/roblox-forsaken-lawsuit-dead-by-daylight-clone/)
- [S] Unpaid commissions are common, and the standard community advice is payment (or 50%) upfront. — [DevForum composer thread](https://devforum.roblox.com/t/commissions-open-34-slots-nafernightmare-starter-composer-soundtrack-maker/1218881); [Showy19](https://devforum.roblox.com/t/showy19-ui-designer-builder-3d-artist/4462562)
- [S] Upwork ID: Nigerian users report verifications rejected for photocopied NIN slips. One LinkedIn author says NIN-verified accounts were suspended and recommends an international passport with the name exactly matching the profile. A Change.org petition alleges mass blocks after passport re-verification. — [Upwork Community](https://community.upwork.com/t5/Support-Forum/Identity-ID-Verification/m-p/1296878/highlight/true); [LinkedIn](https://de.linkedin.com/in/zsolt-farnas); [Change.org](https://www.change.org/p/upwork-claimed-government-issued-id-fake-and-permanently-blocked-freelancers-accounts) (anecdotal)
- [S] Suspension triggers include sharing contact details before a contract and taking payment off-platform; notices often cite only "irregular activity". — [goLance](https://golance.com/blogs/upwork-account-suspended-what-to-do-next)
- [S] Connects cost $0.15 each; Basic accounts get 10 free per month, and proposals cost about 2–16 Connects. Freelancer Plus is $19.99/month, with sources disagreeing on whether it includes 60, 80 or 100 Connects. — [goLance fees 2026](https://golance.com/blogs/upwork-fees-explained-2026); [Upwork resources](https://www.upwork.com/resources/is-upwork-free)

### Inferences
- [I] Rules for this freelancer:
  1. Work only through Team Create or a client-owned place. Never run client-sent .exe, .rbxm plugins, "test builds" or "game launchers" from Discord.
  2. Use a separate Roblox account for client work, with 2-step verification turned on.
  3. Keep everything on Upwork (fixed-price milestones, funded escrow) until the account has a track record. No Discord or PayPal moves, no unpaid "test tasks" beyond about 30 minutes, and no rev-share-only offers.
  4. Deliver watermarked previews or locked builds until the milestone is released.
- [I] The ID on Upwork must exactly match the Payoneer/bank/Tipalti name, which in turn must match the DevEx bank name, to avoid holds on both platforms.

### Gaps
- I couldn't read the full Malwarebytes article for the attack mechanics.
- I found no official Upwork statement on Nigerian ID policy or suspension rates.
