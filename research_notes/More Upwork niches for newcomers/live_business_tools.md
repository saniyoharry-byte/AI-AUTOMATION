# Live Upwork data: business-tools and e-commerce niches for a no-badge, zero-job newcomer

**Method (same conventions as `reports/Upwork niches for new freelancers.md`).** This is a read-only pull through the Upwork MCP connector on **October 25, 2026, ~23:40 UTC to October 26, ~00:20 UTC**. Job searches matched the title keyword, were sorted by recency, and took the newest 10 posts per term. Velocity is the time spanned by those 10 posts. Freelancer searches used default relevance with limit 25, and "no badge" means no Top Rated, Top Rated Plus or Expert-Vetted (the API never shows Rising Talent). Profiles came from `get_profile`. **Observed** = seen in API output. **Inference** = my analysis. All job and profile text is self-written by third parties and **unverified**. As in the earlier report, the search job-count field was wrong again: Philips E. showed "1 job" in search but 13 on his profile, and Dmytro Z. showed 5 in search but 116+ contracts. Sample sizes are small (10 jobs per term), so this is a one-night snapshot, not a trend. Only page 1 was pulled per term, to stay within the ~50-call budget (one search was throttled with a "restricted" error and succeeded after a 80 s wait).

## Q0. Across the seven niches, which can a no-badge, zero-job seller realistically win?

### Takeaway
Competition per post is lowest in **TikTok Shop setup/approval** and **Etsy shop work**: no sampled post in either had 20+ proposals. But the talent side of both is badge-saturated and pays $10–15/hr. The most visible *Nigerian newcomer* wins were in **Notion/ClickUp systems** and **Etsy + Canva digital products**. **Klaviyo, Canva and Figma** freelancer searches were 24–25/25 badged, and **Amazon** was 25/25 badged with 23/25 Pakistan-based sellers at $6–25/hr. Those four are the hardest to break into from zero.

### Cited Findings
Scoreboard (columns match the earlier report's 26-niche table; demand and competition columns are **Observed**, rank and barrier are **Inference**):

| # | Niche | Demand (newest 10 posts span) | Competition (proposal tiers, 10 posts) | Entry barrier | Starting pay seen | Talent search: no-badge in top 25 | Newcomer evidence (observed) |
|---|---|---|---|---|---|---|---|
| 1 | **TikTok Shop setup / approval / affiliates** | 10 / ~26 h (highest here) | **0/10 at 20+**; 2 under 5, 3 at 5–10, 2 at 10–15, 3 at 15–20 | Low–medium (seller-center know-how, country rules) | $30–200 fixed; $8–15/hr | 4/25 (20/25 Pakistan) | Javeria M. (PK): 7 TikTok Shop contracts May 3–Oct 7, 2026, all $10–150 |
| 2 | **Etsy shop SEO / setup / listings** | 10 / ~55 h | **0/10 at 20+**; 2 under 5, 2 at 5–10, 5 at 10–15 | Low (eRank-type SEO + mockups) | $10–200 fixed; $5–15/hr; one $22–40/hr | 2/25 (3 Nigerians, all Top Rated) | Precious O. (Lagos): $5 job May 14 → $800 and $350 fixed → ~$15/hr hourly; new contract Oct 19 |
| 3 | **Notion / Airtable / ClickUp systems** | Notion 10 / ~9.3 days; Airtable 10 / ~5.6 days; ClickUp 10 / ~11 days (≈12 combined per 72 h) | Mostly 20–50; 8/30 at 50+; 3/30 at 10–15 | Medium (systems design; automation for Airtable) | $10–35/hr; $10–300 fixed; expert $30–120/hr | 3/25 (**9/25 Nigeria**) | Philips E. (Lagos): first contract Aug 4 ($15) → $650 build Aug 21 → repeat contract Oct 7; Miriam A. (Abuja): ~$15/hr ClickUp admin |
| 4 | **HubSpot / CRM setup** | 10 / ~66 h | 1 under 5, 1 at 5–10, 1 at 10–15, 1 at 15–20, 5 at 20–50, 1 at 50+ | Medium (CRM logic, live-portal care) | $150–200 fixed; $10–30/hr | 3/25 (4 Nigerians, all Top Rated) | Lee M. (US): 11 contracts Aug 12–Oct 15, 2026, 9 five-star reviews, but heavy padding (see Q4) |
| 5 | **Amazon listing / Seller Central** | broad "Amazon" 10 / ~4.6 h (noisy); "Amazon listing" 10 / ~56 h | listing: 2 under 5, 1 at 5–10, 2 at 10–15, 1 at 15–20, 2 at 20–50, 2 at 50+ | Medium (flat files, error codes, account health) | $10–150 fixed; $5–7/hr VA; $20–50/hr compliance | **0/25** (23/25 Pakistan) | Manazir H. (PK): first contract ~Jul 27, 2026, 15 contracts and Top Rated by Oct, at $6.99/hr |
| 6 | **Klaviyo / email automation** | 10 / ~76 h | **0/10 at 50+**; 1 under 5, 3 at 10–15, 1 at 15–20, 5 at 20–50 | Medium–high (results screenshots, design) | $10–20 fixed; $8–35/hr | **1/25** | NHI N. (Vietnam): entered via $11,310 hourly agency-style contract at ~$15/hr |
| 7 | **Canva design / social graphics** | 10 / ~29 h | 0 under 5; 2 at 5–10, 2 at 10–15, 2 at 15–20, 4 at 20–50 | Low skill bar, high taste bar | $5–250 fixed; $10–27/hr | **0/25** | None found in search; Precious O. sells Canva work bundled with Etsy |
| 8 | **Figma UI/UX** | 10 / ~52 h (3–4 are dev/Canva noise) | 0 under 5; 2 at 5–10, 1 at 15–20, 5 at 20–50, 2 at 50+ | High (case studies, product thinking) | $5–12/hr to $25–50/hr; $2,000 fixed | **0/25** | Dmytro Z. (2025 account) shows 116+ contracts and agency affiliation, so not a solo-newcomer path |

- Job sources per niche are cited in Q1–Q7. Profiles: [Javeria M.](https://www.upwork.com/freelancers/~013eab388b0b7e347b), [Precious O.](https://www.upwork.com/freelancers/~0198b12b87a6b4db0b), [Philips E.](https://www.upwork.com/freelancers/~01d579a362a4a0ada2), [Miriam A.](https://www.upwork.com/freelancers/~01dfdfabc538e2c275), [Lee M.](https://www.upwork.com/freelancers/~010bfc3a20ce634793), [Manazir H.](https://www.upwork.com/freelancers/~01fdd6d8588cc68493), [NHI N.](https://www.upwork.com/freelancers/~01a2c3220c5b809044), [Dmytro Z.](https://www.upwork.com/freelancers/~016cf0e4c29dd10a2b)
- For comparison with the earlier report: n8n posts had 10/20 at 50+ and none under 10; AI UGC had 2/20 at 50+. TikTok Shop and Etsy here look softer per post than n8n, similar to AI UGC.

### Inferences
- Two different "easy" signals point in opposite directions. **Post-side** softness (few proposals) favors TikTok Shop, Etsy and Klaviyo. **Talent-side** openness (no-badge sellers ranking, newcomers winning) favors Notion/ClickUp and Etsy. Etsy is the only niche strong on both. Notion/ClickUp is the strongest for a Nigerian newcomer specifically, given 9/25 Nigerians in the top 25 and two documented 2026 Nigerian ladders.
- Badges come fast in these niches: Manazir in ~3 months, Precious within months, Eniola A. (Nigeria) shows Top Rated with 1 visible job and $2K+ in search ([profile](https://www.upwork.com/freelancers/~0183618d99bc13783a)). So "0/25 no badge" partly reflects how quickly early winners get badged, not only how hard entry is.
- Pay ceilings differ sharply. Etsy, TikTok Shop and Amazon newcomers sit at about **$7–15/hr**. Notion/ClickUp/HubSpot reach $15/hr on long hourly contracts and $650–800 builds. Figma and Klaviyo veterans reach $30–90/hr, but those niches are the hardest to enter.

### Gaps
- Only 10 posts per term and one page each, so velocities are rough. No second page was pulled, to save calls.
- Proposal counts per job are tier buckets, and hire outcomes are not visible. Win rate per proposal is unknown.
- Lee M., Manazir H. and Dmytro Z. hide per-contract earnings. Effective rates for them are not computable.

## Q1. Notion / Airtable / ClickUp setup: demand, competition and who wins

### Takeaway
Volume is low (~12 combined posts per 72 h), and most posts draw 20–50 proposals. But the talent side is unusually open to Nigerian newcomers (9/25 in search). A Lagos CS graduate with no badge went from a $15 first job (Aug 4, 2026) to a $650 build and a repeat client within ~2 months.

### Cited Findings
- **Notion:** 10 posts Oct 16–25. In the last 72 h: an MCP server connecting Claude to Supabase + Notion (50+, client $636 spent) ([job](https://www.upwork.com/jobs/~022114376406569468202)), "Notion Database Expert Needed" ($12–35/hr, 20–50) ([job](https://www.upwork.com/jobs/~022114113070060433820)), and "AI Consultant: Migrate OneNote to Notion, Set Up Claude Integration" ($60–120/hr, expert, 50+, client $332,963 spent, rating 4.42) ([job](https://www.upwork.com/jobs/~022113617302701358073)). Entry-level example: "Notion Template Customization for Management" ($10–20/hr, 20–50) ([job](https://www.upwork.com/jobs/~022111001541916845340)). Tiers: 7/10 at 20–50, 2/10 at 50+, 1/10 at 10–15.
- **Airtable:** 10 posts Oct 18–24, mostly $12–60/hr, with 4/10 at 50+ and 5/10 at 20–50. "Fix our Airtable to Make to Shopify connection" ($20–40/hr, 50+, client $17,093 spent) ([job](https://www.upwork.com/jobs/~022113645442513386489)). "Airtable Automation Expert: Archive Workflow + Document Generation" ($15–35/hr) ([job](https://www.upwork.com/jobs/~022113401269893872633)). A $30 "Organize Simple Airtable Database" from a client with 636 posts and $6.1K spent ([job](https://www.upwork.com/jobs/~022111905734186776907)).
- **ClickUp:** 10 posts Oct 14–25. "ClickUp Setup + Team Workshop" ($10/hr, 10–15) ([job](https://www.upwork.com/jobs/~022114316151291118391)). A $10 "ClickUp Specialist… Workspace Setup" from a Nigerian client with 48 posts and $317 spent ([job](https://www.upwork.com/jobs/~022114330153001943863)). A UK e-commerce brand with $67.6K spent (50+) ([job](https://www.upwork.com/jobs/~022113295950514423330)). A $150 "ClickUp AI Super Agent Creation" ([job](https://www.upwork.com/jobs/~022110432629960163737)).
- **Search "Notion Airtable ClickUp setup":** 3/25 no badge (Philips E., Adil Nasir A., Miriam A.). **9/25 are in Nigeria**, at $10–40/hr.
- **Philips E.** (Lagos, $10/hr, no badge, BSc CS Lagos State Univ. 2024): profile shows 13 jobs (11 fixed, 2 hourly), $1K+. His ladder: "Notion Expert Needed for Business Workspace" **$15** (Aug 4–6, 2026; "Top-tier work!… Will definitely be working with him again"), then a $30 template (Aug 9–12), "Knowledge Base & SOP Migration" $231.67 over 35.7 h (Aug 23–Sep 29), and **"Jarvis Notion System Build Phase 1" $650** (from Aug 21). After that came "AI + Notion setup" $78.17 hourly (to Oct 6, review "Nice") and a $25 consultation (ended Oct 17). His newest contract, **"Jarvis Core system, installable app, GA4\Stripe"**, started **Oct 7, 2026** and appears to be a follow-on from the Jarvis client. His overview opens "Your business doesn't need another Notion workspace. It needs a system that actually runs your business". It shows 22 Notion "Business OS" portfolio screenshots, a YouTube intro video and a $25 consultation offer. His title is "Notion Consultant | Notion Workspace | Notion Expert | Notion AI". He also lists 13 employment entries with generic agency names (LaunchPad Creative, Nova Digital Agency…) ([profile](https://www.upwork.com/freelancers/~01d579a362a4a0ada2)).
- **Miriam A.** (Abuja, $20/hr, no badge, $4K+, 2 jobs): "ClickUp Admin Support" **$1,620 / 105.3 h** (Mar 2–Aug 11, 2026; "detail-oriented, solution-focused… would gladly hire her again"), then "ClickUp Specialist & Project Manager" **$2,170.72 / 140.5 h**, active since Jun 25. Both work out to **≈$15/hr effective**. Her overview cites "ClickUp Power User and ClickUp Expert certifications" (a certificate is shown in her portfolio) and the outcome claim "Reduced missed tasks by over 85%". Her portfolio includes n8n/ElevenLabs/Airtable agents and a GoHighLevel→ClickUp Make automation. A Pipedrive→ClickUp testimonial quoted in her overview does not appear in her visible Upwork work history ([profile](https://www.upwork.com/freelancers/~01dfdfabc538e2c275)).

### Inferences
- Why Philips likely ranks #4 and gets hired: the title repeats the tool name 4×, there are 22 screenshot-heavy portfolio items mirroring common requests (CRM, client portal, KPI dashboard), a $25 consultation, recent activity, and a $10/hr list rate. The $15 → $650 → follow-on pattern matches the earlier report's "tiny first job → repeat client" ladder.
- Notion/ClickUp is "ops VA plus" work. Pay converges near **$15/hr** on hourly (Miriam), above the $3–7/hr admin band in the earlier report. Airtable posts lean technical (Make, scripts, APIs) and overlap with the n8n niche. For an automation-positioned profile, Airtable/ClickUp fixes are a natural adjacent door.
- The generic employment list (Philips) and the off-platform testimonial (Miriam) are padding patterns the earlier report flagged as trust risks.

### Gaps
- Philips's per-contract amounts for the newest Jarvis contract are hidden. Whether the Jarvis client is the same is inferred from the titles.
- No Airtable-specific newcomer profile was pulled.

## Q2. HubSpot / CRM setup

### Takeaway
There is moderate volume (10 posts per ~66 h) with mixed competition: 3/10 under 15 proposals and 1/10 at 50+. The talent search is 22/25 badged. One no-badge 2026 account won 11 HubSpot contracts in ~9 weeks, but the profile is heavily padded, so it is a cautionary data point, not a model.

### Cited Findings
- Posts: "HubSpot and Stripe Integration Specialist" **$150** fixed (Australian client, $19,994 spent, 20–50) ([job](https://www.upwork.com/jobs/~022113750975315727250)). A French "Configuration HubSpot + intégration Framer + Pixel Meta et Conversions API (urgent)" **$150**, entry level, **5–10** proposals ([job](https://www.upwork.com/jobs/~022113675489906762859)). "HubSpot CRM Implementation & Zoho Migration Specialist" $25–55/hr, 50+ ([job](https://www.upwork.com/jobs/~022113724671602558214)). "HubSpot + Cold Email Deliverability + Technical SEO Setup for B2B SaaS" **$1,200** ([job](https://www.upwork.com/jobs/~022113584708051942393)). A **$200** "HubSpot/Salesforce Administrator Needed to Create AI Training Data" (15–20) ([job](https://www.upwork.com/jobs/~022114085778338849899)). A GTM/RevOps mentor role (Clay, Make, n8n, HubSpot) with **fewer than 5** proposals ([job](https://www.upwork.com/jobs/~022114494312997978935)). A placeholder-style **$5** "HubSpot CRM Specialist" from a Kenyan client ([job](https://www.upwork.com/jobs/~022113579289731304560)).
- Search "HubSpot CRM setup": 3/25 no badge (Eduardo L., Lee M., Hanna Sophia F.). Four Nigerians (Adeola A., Gbolahan O., Grace F., Seleem O.) are all Top Rated. Seleem O. shows Top Rated with 4 jobs on a recent account ([profile](https://www.upwork.com/freelancers/~0162ced1f8930d021f)).
- **Lee M.** (listed US/CA, $15/hr, no badge; account id suggests ~mid-2026): 11 contracts, 8 fixed and 3 hourly. The first visible is **Aug 12, 2026**: "HubSpot CRM and Marketing Automation Specialist Need to Solve Issue Fast", whose review says "quickly identified the issue in our existing workflow, made the necessary corrections, and tested everything". Then came CRM setup (Aug 14–16), an audit (Aug 16–18), an implementation (Aug 20–31), an email audit (Sep 28–30) and "HubSpot CRM Configuration Support" (Oct 2–5; "took a careful approach to making changes in our live account"). The newest is "Clean Up Contact Lists On HubSpot" (Oct 9–15), plus an active "Hubspot Onboarding Help" hourly contract from **Oct 5**. Nine visible 5★ reviews are long and similarly phrased. Earnings are hidden. The profile lists **~70 employment entries** with industry-only company names ("SaaS Company", "Insurance", "Legal Services"…) and 46 portfolio items. Most of those are dashboard images that look generated, with mock dates in 2025 ([profile](https://www.upwork.com/freelancers/~010bfc3a20ce634793)).

### Inferences
- The work that wins is **"fix/clean/audit my existing HubSpot"**: workflow repair, list cleanup, audits. That is the same fix-not-build pattern as n8n in the earlier report. Small $150–200 setup posts with 5–20 proposals exist.
- Lee M.'s run of very fast, uniformly glowing reviews, combined with fabricated-looking employment and AI mock dashboards, matches the review-farm and padding warning signs in the earlier report. Treat the profile as evidence that the *search* rewards keyword density, not as a pattern to copy.

### Gaps
- No Nigerian HubSpot newcomer profile was pulled (all four in search were already badged). Seleem O.'s ladder dates are unknown.

## Q3. Klaviyo / email marketing automation

### Takeaway
Posts are relatively soft (no post at 50+, 4/10 at 10–15 or fewer). But the talent search is the most badge-saturated of all (24/25), dominated by "$XM revenue generated" titles. The only no-badge profile entered with agency experience and a large hourly contract, not from zero.

### Cited Findings
- Posts: an Australian client with **$108,681 spent** and 456 posts posted two jobs within minutes: "Ecommerce Ops + Automation Agency – Shopify Multi-Store, Marketplaces, n8n, Zoho, Klaviyo" ($12–27/hr, **fewer than 5**) ([job](https://www.upwork.com/jobs/~022114502705967839352)) and "Ecommerce Automation N8N Shopify Zoho Klaviyo Claude" (10–15) ([job](https://www.upwork.com/jobs/~022114501439032178808)). Others: "Klaviyo Email Marketing Specialist" ($12–35/hr, 10–15, client $27.6K spent) ([job](https://www.upwork.com/jobs/~022113843352541498480)); "Klaviyo Hands-On Tactical Production Specialist (Non-US)" (expert, 10–15, client $156K spent) ([job](https://www.upwork.com/jobs/~022113479727264539755)); a **$20** "Klaviyo Email Campaign Setup for Fashion DTC Brand" (20–50) ([job](https://www.upwork.com/jobs/~022113839087916176274)); "AI Automation Expert for Klaviyo Email Campaigns – Auto-Generate Banners" (Make, 20–50) ([job](https://www.upwork.com/jobs/~022113387550517732459)); a full-time $30K/yr pet-DTC role open to LatAm and South Africa ([job](https://www.upwork.com/jobs/~022113780284051137643)).
- Search "Klaviyo email flows Shopify": **1/25 no badge**. Titles lean on revenue claims ("30M+ in Client Revenue", "20M+ Revenue Generated", "60M+ Revenue Generated for Peptide Brands").
- **NHI N.** (Vietnam, $20/hr, no badge, $10K+, 4 jobs): her first contract was "Email Marketing Account Manager (Klaviyo Pro)", **$11,310 for 744.7 h** (Nov 19, 2025–Jul 29, 2026, ≈$15.2/hr; "Sharp, reliable, and quick to pick things up… Highly recommend"). It was followed by "Klaviyo email for AVVA", $2,275 for 147 h (from May 4, 2026, ≈$15.5/hr), a $30 "One Campaign Test", and a new "Senior Email Marketer (Ecommerce)" from **Oct 22, 2026** ($8 so far). Her overview leads with "Part of a team creating $40M+ in email revenue" and "Certified Klaviyo Expert", and states "While I'm new to Upwork, I bring agency-level expertise". Her portfolio has 3 email-design mockups ([profile](https://www.upwork.com/freelancers/~01a2c3220c5b809044)).

### Inferences
- Klaviyo clients buy **proof of revenue** (screenshots, brand names). A zero-history seller without agency background has nothing to show. That explains 24/25 badged despite soft posts. The visible entry route is an "account manager / production" hourly role at ~$15/hr.
- Klaviyo posts increasingly bundle **n8n/Make/AI automation** (3 of 10). For an automation-skilled newcomer, "Klaviyo + automation" is a better wedge than pure email design.

### Gaps
- No newcomer Klaviyo win from zero was found. Whether $10–20 "campaign setup" posts go to newcomers is not visible.

## Q4. Amazon listing & account management

### Takeaway
Volume is very high on the broad term ("Amazon" gave 10 posts in ~4.6 h, many off-niche), and listing posts include some low-proposal tasks. But budgets are tiny ($10–150), and the talent side is a Pakistan-dominated, fully badged price war at $6–12/hr.

### Cited Findings
- "Amazon listing" posts: "Amazon Listing Content Creator", 10 listings for **$40**, **fewer than 5** ([job](https://www.upwork.com/jobs/~022113880695835480978)); "Amazon KDP Book Listing Optimization" **$10**, fewer than 5 ([job](https://www.upwork.com/jobs/~022114389521649267100)); "Amazon FBA Listing Optimization Specialist" **$150**, 5–10 ([job](https://www.upwork.com/jobs/~022113794339298182406)); "Amazon Product Compliance & Listing Help" $20–50/hr, 50+, UK client $46.9K spent ([job](https://www.upwork.com/jobs/~022113611494868669330)); "Amazon SEO & Listing Optimisation Specialist" from a UK stationery brand with $175K spent (50+) ([job](https://www.upwork.com/jobs/~022113546831649717241)). One "client" post reads like a freelancer's service listing ("I will provide a professional Amazon Seller Central account audit… $50"), from a client with 190 posts ([job](https://www.upwork.com/jobs/~022114090887858778524)). Broad-term noise includes restock/checkout bots and an FBA wholesale VA at **$5–7/hr** ([job](https://www.upwork.com/jobs/~022114464379404696569)).
- Search "Amazon listing optimization Seller Central": **0/25 no badge**; **23/25 Pakistan**; 15/25 list ≤$11.99/hr.
- **Manazir Hussain H.** (Pakistan, $6.99/hr, Top Rated; BS 2026; account id ≈ mid-2026): first visible contract "Amazon VA" from **Jul 27, 2026**, then "AMAZON Listing expert" hourly (292 h), "amazon fba page", "Fixing Review linkage", "Amazon Seller Central Specialist… List & Optimize 2 Products" (Aug 18), "Amazon ASIN variation – add 1" (Sep 29), "UK Trade Mark Infringement Complaint" (Oct 16) and "Ecommerce Catalogue & Product Data Specialist" (from **Oct 23, 2026**). That is 15–16 contracts and **Top Rated within ~3 months**. His overview lists specific Amazon error codes ("5665, 5885, 5886, 8541, 5995 & 5461"), flat-file and variation fixes, and an "Upwork Top Rated" banner. Earnings are hidden ([profile](https://www.upwork.com/freelancers/~01fdd6d8588cc68493)).

### Inferences
- The winning angle is **technical catalog troubleshooting** (error codes, variations, flat files, account-health cases), not generic "listing optimization". It is fast to get hired at, but anchored at ~$7/hr by the supply pool.
- The niche is not a fit for someone seeking >$15/hr early, unless paired with a scarce skill (UK/EU compliance, IP complaints).

### Gaps
- Manazir's earnings and reviews were not visible in the returned history. Effective rate is unknown beyond the $6.99 list rate.

## Q5. Etsy / TikTok Shop management

### Takeaway
These were the softest post-side niches in this pull: **0 of 20 sampled posts had 20+ proposals**, and TikTok Shop posted 10 jobs in ~26 h. Newcomer contracts start very small ($5–50), and effective pay sits around $15/hr even after months. The standout Nigerian path was Etsy SEO bundled with Canva digital-product design.

### Cited Findings
- **Etsy posts (10 per ~55 h):** "Etsy store building" for a crochet-pattern shop (5–10) ([job](https://www.upwork.com/jobs/~022114493748092123256)); "Etsy Shop Optimization Specialist" for a shop with "38k sales" hit by algorithm changes ($10–15/hr, 10–15) ([job](https://www.upwork.com/jobs/~022114485859101227128)); "Etsy Ads Specialist Needed" **$10**, fewer than 5 ([job](https://www.upwork.com/jobs/~022114379863514825002)); "Etsy Storefront Creation for Kiosk Business" **$200** (10–15) ([job](https://www.upwork.com/jobs/~022114052917906796956)); "Christian Kids' Coloring Book Illustrator with Proven Etsy Sales" **$22–40/hr**, fewer than 5 ([job](https://www.upwork.com/jobs/~022113749501227586450)); "Etsy SEO Expert Needed to Grow My Shop" on an under-$100/month budget (15–20) ([job](https://www.upwork.com/jobs/~022113703835709572358)).
- **TikTok Shop posts (10 per ~26 h):** "Open & set up a TikTok shop with winning products" **$200**, fewer than 5 ([job](https://www.upwork.com/jobs/~022114441185192072082)); "Help me get approved on tiktok shop" **$50**, 5–10, UK client with **$151,966 spent** ([job](https://www.upwork.com/jobs/~022114439809582155861)); "Complete TikTok Shop Setup + Full Shopify Catalog Sync + UGC Launch Preparation" **$200**, 5–10, client $14.9K spent ([job](https://www.upwork.com/jobs/~022114277971875379320)); "Set up TIKTOK SHOP for a UK business" (entry, 5–10) ([job](https://www.upwork.com/jobs/~022114063799879252088)); "TikTok Slideshow Creator for Shop Products" **$650** (15–20) ([job](https://www.upwork.com/jobs/~022114245001438444537)); "TikTok Shop Manager" ($10–15/hr, entry, client **$202,905 spent**) ([job](https://www.upwork.com/jobs/~022114049289348596010)). One AI-video post came from a client rated **2.17** by freelancers ([job](https://www.upwork.com/jobs/~022114440109026851833)).
- Search "TikTok Shop setup manager": 4/25 no badge, 20/25 Pakistan. Titles cluster on "GMV Max Ads" and "Affiliate". Search "Etsy SEO shop management": 2/25 no badge; 3 Nigerians, all Top Rated; rates mostly $5–15/hr.
- **Javeria M.** (Pakistan, $10/hr, no badge, $300+): on Upwork since 2022 with two Amazon gigs ($10, $20). She pivoted to TikTok Shop with "TikTok Shop Affiliate Manager" **$50** (May 3–15, 2026; "delivered a well-organized list of 20 relevant creators"), then $15 (Jun 6–20), $15 (Jun 26–Jul 4), $10 (Jul 20–28) and $15 (Aug 11–23). Next came $20 creator outreach (Sep 9–22; "delivered a strong, well-organized list of creators"), an active **$150** "Sell Through 1,500 Units of Home Décor Inventory" (from Sep 9) and a $10 job (Oct 7). Her overview ends in ~20 hashtags. Her location is Pakistan but her timezone is set to US Pacific ([profile](https://www.upwork.com/freelancers/~013eab388b0b7e347b)).
- **Precious O.** (Lagos, $15/hr, Top Rated, $4K+; BSc Chemical Eng. 2024; account ≈ late 2025): 36–38 contracts. Visible ladder: a $300 video edit (from Dec 22, 2025); an Etsy POD VA hourly role, $99 for 16.5 h (from Feb 11, 2026; ≈$6/hr); a **$5** crochet-PDF job (May 14–15); $57.75 Etsy store manager (May 17–Aug 1); $302.50 for 20.2 h (from May 21, ≈$15/hr); **$800** "Apparel Branding Specialist" (from Jun 1); **$350** "Etsy Shop Rebrand + Cross-Shop Strategy — Phase 1" (from Aug 5); a $20 consultation (Sep 4–7; "determined to deliver a quality product"); **$707.50 for 47.2 h** "Etsy Shop setup, digital product design" (from Sep 7, ≈$15/hr); and a Shopify full-store build from **Oct 19, 2026**. Her overview opens "Open Etsy. Search for your best-selling product. Can you find your own listing?", adds "SEO + GEO" (AI-search optimization) positioning, a 3-step plan and the tools eRank/Alura/Marmalead. She has 37 portfolio items (Canva planners, POD mockups, wedding templates, one shop with "19 orders, $2,536 revenue"). Her employment list includes job-post titles and a large company name ("JM Family Enterprises") as employers ([profile](https://www.upwork.com/freelancers/~0198b12b87a6b4db0b)).

### Inferences
- TikTok Shop posts are soft because they are new and often **account-approval or setup problems** with clear deliverables ($50–200). Sellers compete on price. Javeria's eight 2026 contracts total under ~$300, so this is a review-builder, not an income niche, unless one moves to affiliate-management retainers.
- Etsy rewards **bundling**: SEO + Canva listing images + digital-product design. Precious's $5 → $800 path and the move into Shopify builds show the upsell route. For a Nigerian newcomer this is the most replicable creative path found here, at ~$15/hr.
- Both niches carry the earlier report's padding risks: hashtag stuffing (Javeria) and employment lists built from job titles (Precious).

### Gaps
- Precious's first contracts before Dec 2025 were not visible (10 of 36 shown). Exact start date and first-review timing are unknown.
- No TikTok Shop newcomer earning above ~$15/hr was found.

## Q6. Canva design / social graphics

### Takeaway
Canva posts are frequent (10 per ~29 h), but budgets are tiny ($5–250) and 4/10 drew 20–50 proposals. The talent search was **0/25 no badge**. Canva works as a *bundled* skill (Etsy digital products, workbooks), not a standalone niche for a newcomer.

### Cited Findings
- Posts: "Canva Workbook Editor & Formatter — Fillable PDF Creation" **$250** (10–15, Canadian client $5.2K spent) ([job](https://www.upwork.com/jobs/~022114414308985644139)); "Professional Canva Designer for eBooks, Workbooks & Digital Products" **$15** (5–10) ([job](https://www.upwork.com/jobs/~022114491655858319772)); "Canva Expert for Instagram Content", 30 days of posts for **$100** (15–20) ([job](https://www.upwork.com/jobs/~022114411329519798357)); a 2-page flyer in Canva from a Figma draft, **$15** (5–10) ([job](https://www.upwork.com/jobs/~022114117785133412764)); "Canva Designer for Commercial Real Estate Offering Memorandums" **$75** (20–50) ([job](https://www.upwork.com/jobs/~022114127284700594474)); "One Canva Instagram Carousel for Wellness Coach" **$5** (15–20) ([job](https://www.upwork.com/jobs/~022114408610633372562)).
- Search "Canva social media graphics designer": **0/25 no badge**. The newest-looking badged account is Mahin A. (Canada, Top Rated, $6K+) ([profile](https://www.upwork.com/freelancers/~01e657d6ddac85cedb)). Rates run $5–69/hr, mostly $10–20.

### Inferences
- The better-paid Canva posts are **document/workbook formatting** (fillable PDFs, course workbooks, offering memorandums), not social posts. A newcomer should target those as add-ons to an Etsy/digital-product or VA profile.
- At $5–15 per social graphic, effective pay is below the $3–7/hr admin band unless the work is templated.

### Gaps
- No Canva-only newcomer profile was pulled (none unbadged in the top 25). Who wins the $5–15 posts is unknown.

## Q7. Figma UI/UX design

### Takeaway
There is steady demand (10 posts per ~52 h, though 3–4 are developer or Canva noise), with 7/10 posts at 20+ proposals and a **0/25** no-badge talent search dominated by Ukrainian, Pakistani and agency-linked designers. This is the least newcomer-friendly niche of the seven.

### Cited Findings
- Posts: "Senior Web Designer for a Dark, Editorial Homepage and Site Theme (Figma)", $25–50/hr, "NO AGENCIES", 20–50, client $42.7K spent ([job](https://www.upwork.com/jobs/~022114397757460891733)); "Senior iOS UI/UX Designer (Figma)" **$2,000**, 50+ ([job](https://www.upwork.com/jobs/~022114130074692895018)); "Figma Designer – Architecture Proposals & Marketing Materials" (20–50, client $97.9K spent) ([job](https://www.upwork.com/jobs/~022114074054185371733)); "Fintech Website Designer (Figma)" $15–30/hr (20–50) ([job](https://www.upwork.com/jobs/~022113987074395186283)); "Figma Designer for Webdesign" (German, $15–40/hr, **5–10**) ([job](https://www.upwork.com/jobs/~022113606922787881783)); "Figma Designer for AI-Infused Insurance UI" $5–12/hr (20–50) ([job](https://www.upwork.com/jobs/~022113650192901493650)).
- Search "Figma UI UX designer": **0/25 no badge**. Two titles add "Claude Design" as a keyword (Nasir A., Khalil A.).
- **Dmytro Z.** (Romania, $40/hr, Top Rated Plus; account ≈ 2025): search showed "5 jobs", but his profile shows **116 contracts / 74 reviews**. Recent work: $3,600 fixed (from Jul 31, 2026), $2,580 for 76 h hourly (≈$34/hr, from Aug 10), a **$1,080 "Phase 1 — UX Audit (3 days)"** (Oct 9), $1,000 (Oct 13), $375 (Oct 14), and several **"30 minute consultation"** contracts on Sep 28 and Oct 22–23. His consultation starts at $5. His overview opens with metrics ("onboarding 24.6% → 43.9%") and named clients, plus "Send me one screen… Within 24 hours you get a written read". It also shows **267 portfolio items** with keyword-stuffed descriptions and ~45 employment entries, many tied to "Hue&Machine Design Agency" ([profile](https://www.upwork.com/freelancers/~016cf0e4c29dd10a2b)).

### Inferences
- Figma buyers screen on case studies with metrics. Top sellers combine those with mass keyword stuffing and cheap consultations ($5) as lead magnets. A solo newcomer competes against agency-scale profiles.
- The only openings seen were language-gated (a German brief with 5–10 proposals) and "senior" posts mis-budgeted at $5–12/hr. Neither is a reliable entry path.

### Gaps
- No true solo newcomer in Figma was located. Pulling page 2 of search or "Figma Make"/"Claude Design" terms might surface one.
- Dmytro's named-client claims (Transcarent, Clair) are unverified.
