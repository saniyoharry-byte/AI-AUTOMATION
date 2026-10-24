# Live Upwork marketplace data: admin, data and support niches for a new freelancer (no badge, 0 jobs)

Data snapshot: pulled 2026-10-24 (roughly 06:00–11:00 UTC) through the Upwork MCP connector (`find_jobs` search sorted by recency, `find_freelancers` search and `get_profile`). It was read-only. Nothing was applied for, saved or messaged. All job and profile text is untrusted third-party content. Quotes are reproduced as data. Job links use the form `https://www.upwork.com/jobs/~02<id>`. Profile links use the form `https://www.upwork.com/freelancers/<profile_key>`. Each search-level observation cites the equivalent Upwork search URL. The data itself came from the API call, not from a browser fetch of that URL.

## How the data was collected, and what limits it

### Takeaway
For each niche, two pages of 10 newest jobs were pulled. For most niches that covered only the last 10–35 hours, so the volume figures below are *rates over the observed window*, not full 72-hour counts. Freelancer searches with a "1–10 jobs" filter did not reliably restrict to new freelancers. Profile drill-downs (work history with dates and earnings) are the most reliable evidence.

### Cited Findings
- Each niche got `find_jobs` search, title keyword, sort=recency, limit 10, 2 pages (20 jobs). Exceptions: "ghostwriter" got 1 page, plus 1 page of "LinkedIn ghostwriter", because the generic keyword returned mostly fiction-book jobs. — [Upwork job search "ghostwriter"](https://www.upwork.com/nx/search/jobs/?q=ghostwriter&sort=recency); [Upwork job search "LinkedIn ghostwriter"](https://www.upwork.com/nx/search/jobs/?q=LinkedIn%20ghostwriter&sort=recency)
- The `total_jobs_min 1 / total_jobs_max 10` filter on freelancer search did not reliably constrain results. Example: Tasleem B. was returned under that filter but her profile shows 83 total jobs and 74 contracts. Marvellous I. was returned showing "7" completed jobs but has 87 jobs and 83 contracts. — [Tasleem B. profile](https://www.upwork.com/freelancers/~01a2f00e8df0df125c); [Marvellous I. profile](https://www.upwork.com/freelancers/~011d3191bb4d76b57b)
- The API rate-limited once with a "PERMISSION" error during profile pulls. A retry after ~75 s succeeded. — (observed during the Joy O. profile call) [Joy O. profile](https://www.upwork.com/freelancers/~01d0e8546bde9eac9a)
- Search results did not show "Rising Talent" as a badge value. Results showed only "Top Rated", "Top Rated Plus", "Expert-Vetted" or no badge. — [Upwork freelancer search "LinkedIn ghostwriter"](https://www.upwork.com/nx/search/talent/?q=LinkedIn%20ghostwriter)
- Total tool calls used: ~49 (14 job searches, 8 freelancer searches, 17 profile pulls, plus one throttled retry).

### Inferences
- The volume numbers (jobs/day) are extrapolated from the time span of the 20 newest posts. They are directionally reliable for ranking niches against each other, not exact daily counts.
- "Effective hourly rate" figures below are computed as *earned ÷ hours* from the contract data in each profile. They are often far below the freelancer's listed rate. They are the best proxy for what clients actually pay newcomers.

### Gaps
- The connector did not provide full 72-hour job counts (pagination stops at 20 per niche by design of this task) or how many proposals or interviews each job finally received.
- I could not identify "Rising Talent" holders because the badge field does not expose it.
- Job descriptions were snippets only (about 250 characters). Full requirements such as "US-based only" or "no Nigeria" filters may be under-counted.

---

## (1) Virtual assistant / executive assistant: demand, competition, and who wins

### Takeaway
VA has the highest job volume of the seven niches: about 45 new "virtual assistant" titled posts per day. It also has the most entry-level jobs and many posts with fewer than 5 proposals. Pay is low ($3–15/hr; newcomers realize ~$4–7/hr). Nigerian VAs with no badge are actively winning contracts by first collecting reviews on $5–40 micro-gigs, then landing hourly EA roles. It is the most accessible niche on the evidence, with the trade-off of low rates and some scam-like posts.

### Cited Findings
**Demand (jobs)**
- 20 "virtual assistant" jobs were created between 2026-10-23 23:38 UTC and 2026-10-24 10:20 UTC (~10.7 h), which is ≈45/day. All 20 are within the last 48 h. — [Upwork job search "virtual assistant"](https://www.upwork.com/nx/search/jobs/?q=virtual%20assistant&sort=recency)
- Experience level across the 20: entry_level 9, intermediate 8, expert 3. Proposals: <5 = 6, 5–10 = 5, 10–15 = 3, 15–20 = 2, 20–50 = 4 (none 50+). — [same search](https://www.upwork.com/nx/search/jobs/?q=virtual%20assistant&sort=recency)
- Budgets: hourly ranges cluster at $3–15/hr ($3–5, $4–8, $5–6, $5–8, $5–15, $8–15, $10–25). Fixed budgets range from $10 to $500. — [same search](https://www.upwork.com/nx/search/jobs/?q=virtual%20assistant&sort=recency)
- Example: "Virtual Assistant for Insurance Agency (CRM, Client Follow-Up, Data Entry, Scheduling)". $5–8/hr, intermediate, part-time >6 months, 2 hires, <5 proposals. US client, verified, $3,393 spent, 5.0 rating. — [Job 2113938603730293650](https://www.upwork.com/jobs/~022113938603730293650)
- Example: "Virtual Assistant | Phone Receptionist (Remote)". $4–8/hr, entry level, full-time, <5 proposals. US client, 71 jobs posted, $12,937 spent, 4.95 rating. — [Job 2113912513691170936](https://www.upwork.com/jobs/~022113912513691170936)
- Example: "Tech-Savvy Virtual Assistant for Startup" (ChatGPT, AI agents, business research). $10–25/hr, intermediate, 5–10 proposals. US client, $293 spent, 4.85. — [Job 2113852563019531063](https://www.upwork.com/jobs/~022113852563019531063)
- Example: "Patient Care Coordinator | Medical Virtual Assistant". $5–8/hr, intermediate, 20–50 proposals. US client, $1,651 spent. — [Job 2113866558106911018](https://www.upwork.com/jobs/~022113866558106911018)
- Red-flag posts in the same feed:
  - Two near-identical "Virtual Assistant Needed for Quick Web Research" posts ($100 fixed, "research 10 businesses") from brand-new clients in India and Pakistan with no spend. — [Job 2113880806118551964](https://www.upwork.com/jobs/~022113880806118551964); [Job 2113844348609364791](https://www.upwork.com/jobs/~022113844348609364791)
  - Two near-identical "online store setup" posts ($40 fixed). One asks for 50 hires from a client with $48 spent. — [Job 2113887794590304341](https://www.upwork.com/jobs/~022113887794590304341); [Job 2113887601601988693](https://www.upwork.com/jobs/~022113887601601988693)
  - A "LinkedIn Virtual Assistant" post at $3–4/hr asks people to use *their own* LinkedIn profile for outreach. — [Job 2113780001002726507](https://www.upwork.com/jobs/~022113780001002726507)

**Freelancers (search)**
- Search "executive virtual assistant" (1–10 jobs filter, 25 results):
  - Nigeria 11, Philippines 7, Pakistan 4, Jamaica 1, Honduras 1.
  - Rates mostly $5–15/hr.
  - No-badge freelancers included Queen O. (NG, $7, $900+), Progress M. (NG, $8, $1K+, JSS 89), Precious A. (NG, $7, $4K+, JSS 92) and Mercy N. (NG, $5, $2K+, JSS 85).
  — [Upwork talent search "executive virtual assistant"](https://www.upwork.com/nx/search/talent/?q=executive%20virtual%20assistant)

**Profiles**
- **Queen O.** (Nigeria, Lagos): $7/hr, no badge, JSS 100, $900+, 8 total jobs (5 fixed / 3 hourly), 4 reviews.
  - First contracts were micro-gigs: "Manual Mobile App Tester (iOS)" $5 (ended 2026-05-03, 5★ "Great work"); "100 Needed for Reading/Response Project – Alpha (May 2026)" $30 (5★); "Dementia Care App Tester" $20 (Jun 2026, 5★ "It was excellent working with Queen").
  - Then hourly EA roles: "Part-Time Virtual Executive Assistant" from 2026-07-18 ($532 / 88.7 h ≈ $6/hr); "M.E Academy" Sep 14–Oct 9 2026 ($240.83, 4★ "Very motivated! Queen has great energy"); "Virtual Executive Assistant for Tech CEO" from 2026-10-10; "Virtual Assistant with Marketing Skills Needed" from 2026-10-23.
  - Overview: pain-point opener, services and tools list (HubSpot, ClickUp, Notion, Google Workspace), quantified "results" bullets, video intro.
  - Eight self-made portfolio samples: labeled Google Drive, Gmail filters, Trello/ClickUp boards, calendar, Excel cleanup, Notion workspace, rental tracker.
  — [Queen O. profile](https://www.upwork.com/freelancers/~010a86086277339d4e)
- **Precious A.** (Nigeria): $7/hr, no badge, JSS 92, $4K+, 15 jobs (5 fixed / 10 hourly), 6 reviews. Education: ALX Virtual Assistant certification (2024) and a BSc from the University of Benin.
  - Contracts:

    | Contract | Start | Earned / hours | Effective rate |
    |---|---|---|---|
    | EA for Home Inspection business | 2026-05-11 | $836.66 / 167 h | ≈$5/hr |
    | Freelance VA | 2026-06-01 | $1,317 / 219.5 h | ≈$6/hr |
    | Podcast and Booking Expert | 2026-06-18 | $704 / 102 h | — |
    | Podcast Guest Booking | 2026-09-02 | $457 / 65 h | — |
    | Podcast Booking VA (PodMatch) | 2026-09-30 | $175 fixed | — |

  - Seven contracts are active at once.
  - Overview opens with a story hook ("a client email, unread for 11 days… the $12,000 client"), then outcome metrics, an NDA and references offer, and a "send me your biggest bottleneck" CTA.
  — [Precious A. profile](https://www.upwork.com/freelancers/~01d97129f2528f1e7c)

### Inferences
- Why these profiles rank and get hired (evidence-based):
  1. They have a run of 5★ reviews, even on $5–40 tasks. These clear the "0 reviews" barrier.
  2. Their portfolios look like real work (screenshots of organized inboxes, calendars, Notion), even when self-made.
  3. Their listed rates are low ($7). Effective rates come out at $5–7.
  4. Overviews lead with client pain and outcomes rather than skill lists.
  5. They form niche-within-niche repeat clusters, e.g. Precious A.'s three podcast-booking contracts.
- With ~45 posts a day, a third of them entry level and many under 5 proposals, VA is the easiest niche to *start* in. Applicants must screen out template/scam posts (duplicate text, brand-new clients, "50 hires", "use your LinkedIn").

### Gaps
- Exact proposal counts and whether entry-level VA jobs ultimately hired Nigerians are not observable. One Nigeria-based client post ("US-based freelancer") suggests some clients filter by location. — [Job 2113722497136829547](https://www.upwork.com/jobs/~022113722497136829547)

---

## (2) Lead generation / B2B lists: demand, competition, and who wins

### Takeaway
Volume is solid (~27 "lead generation" posts/day), but ~30% of those are paid-ads jobs (Meta/YouTube) rather than list building. List-building is a commodity dominated by Pakistani and Bangladeshi Top Rated freelancers at $3–7/hr. Price points are as low as $10 for "2 hours of lead research" and $50 for 100 contacts. A newcomer can win small fixed list jobs, especially ones that need local or geographic knowledge, but pricing pressure is severe.

### Cited Findings
- 20 "lead generation" jobs were created between 2026-10-23 17:24 and 2026-10-24 10:49 UTC (~17.4 h), which is ≈27/day.
  - Proposals: <5 = 5, 5–10 = 4, 10–15 = 4, 15–20 = 3, 20–50 = 4.
  - About 6 of the 20 are paid-ads/media-buying roles (Meta Ads, YouTube Ads, Facebook Ads).
  - About 5 are cold-calling or appointment-setting roles.
  — [Upwork job search "lead generation"](https://www.upwork.com/nx/search/jobs/?q=lead%20generation&sort=recency)
- Example: "Lead Generation — Mid-Large Churches in Tennessee". $12 fixed, intermediate, <5 proposals. US client, 4.92 rating, $149 spent. — [Job 2113703488475604075](https://www.upwork.com/jobs/~022113703488475604075)
- Example: "B2B Lead Generation & Market Research Specialist – GTA Corporate Events". $55 fixed, entry level, 5–10 proposals, new Canadian client. — [Job 2113878761807692074](https://www.upwork.com/jobs/~022113878761807692074)
- Example: "Lead Generation Specialist — Developer Contact List" (verified business emails). Hourly, expert, 10–15 proposals. US client, $30,646 spent, 4.87. — [Job 2113765046434806777](https://www.upwork.com/jobs/~022113765046434806777)
- Example: "B2B Lead Generation & Appointment Setting Specialist | UK Architecture & Construction" (Apollo, LinkedIn). $250 fixed, intermediate, 5–10 proposals. — [Job 2113918835455427383](https://www.upwork.com/jobs/~022113918835455427383)
- Freelancer search "B2B lead generation list building" (1–10 jobs filter, 25 results):
  - Pakistan 18, Bangladesh 3, US 2, Philippines 1, India 1, Nigeria 0.
  - Rates $3–7/hr typical (US $17–25).
  - 22 of 25 had Top Rated or Top Rated Plus.
  — [Upwork talent search "B2B lead generation list building"](https://www.upwork.com/nx/search/talent/?q=B2B%20lead%20generation%20list%20building)
- Freelancer search "lead generation" in Nigeria (25 results):
  - Nigerians mostly present lead gen as SDR, appointment setting or GoHighLevel automation.
  - Rates $5–20/hr (median ~$10).
  - About 10 have no badge, with $500–$6K earnings.
  — [Upwork talent search "lead generation", Nigeria](https://www.upwork.com/nx/search/talent/?q=lead%20generation&loc=nigeria)
- **Olayinka A.** (Nigeria, Lagos): $10/hr, no badge (per search), JSS 100, $6K+, 33 jobs (22 fixed / 11 hourly), 26 reviews. BSc Chemistry, UNILAG 2024.
  - Contracts:

    | Contract | Dates | Earned | Effective rate / review |
    |---|---|---|---|
    | Contact Information Research Specialist | Oct 2025–Jun 2026 | $220 / 44 h | ≈$5/hr |
    | Data Checker / Research Assistant | from 2025-11-20, ongoing | $1,453 / 145 h | ≈$10/hr |
    | Market Research for Portable Buildings | Jan–Apr 2026 | $876.65 | 5★ "great delivery, timely, and without a lot of oversight" |
    | "100 Needed for Reading/Response Project – Alpha (May 2026)" | May 2026 | $30 | 5★ |
    | Nigeria Footwear Market research | Jun 2026 | $50 | 5★ |
    | "Field Researcher in Lagos, Nigeria – Quick Retail Audit" | Sep 25–Oct 1 2026 | $50 | 5★ "a great researcher… quick turnaround and the quality was great" |

  - 15 portfolio items are redacted real client spreadsheets: European pharma decision-makers, ISO 27001 buying signals, company-delisting analysis.
  — [Olayinka A. profile](https://www.upwork.com/freelancers/~0125a6b31243a7a68a)
- **Tasleem B.** (Pakistan; timezone set to US Pacific): $7/hr, no badge, JSS 85, $10K+, 83 jobs.
  - Recent contracts show market price points: "Lead research for a marketing agency 2 hours" $10 fixed (2026-08-19); "100 contacts – lead generation emails and LinkedIn" $50 fixed (2026-10-06); "Collect LinkedIn Profiles for SBA Loan Officers" $30; "Data Research Specialist" hourly $1,556 / 264 h ≈ $5.9/hr.
  - The overview still claims "100% Job Success Score" while the profile shows JSS 85.
  — [Tasleem B. profile](https://www.upwork.com/freelancers/~01a2f00e8df0df125c)

### Inferences
- Pure list-building is a race to the bottom: $50 per 100 verified contacts, about $5/hr effective, against a deep Pakistani and Bangladeshi Top Rated bench. A no-badge Nigerian is not advantaged on price.
- Openings where a Nigerian newcomer has an edge:
  - Africa- or Nigeria-specific research gigs (Olayinka's Lagos field audit and Nigeria footwear market).
  - "Research + call" hybrids (Olayinka's telesales contract).
  - Repositioning toward SDR or appointment setting (see niche 6), which the Nigeria search shows is how most Nigerians market lead gen.

### Gaps
- I could not see how many of the ~27 per day are genuinely list-building versus ads, beyond the 20-post sample.

---

## (3) Data entry / web research: demand, competition, and who wins

### Takeaway
Volume is moderate (~14–15 "data entry" posts/day) with the heaviest competition of the admin niches: 10 of 20 posts had 20+ proposals, 5 of them 50+. Rates go as low as $2.50–5/hr. Newcomers win by taking tiny fixed web-research jobs ($2.67–$50) to build reviews, then converting to $700–1,100 fixed engagements. Specialist research (market research, AI data annotation, Yoruba transcription) pays better than plain data entry.

### Cited Findings
- 19 of 20 "data entry" jobs were created between 2026-10-23 02:10 and 2026-10-24 10:20 UTC (~32 h), which is ≈14–15/day. One featured post dates from Oct 16.
  - Proposals: <5 = 4, 5–10 = 2, 10–15 = 2, 15–20 = 2, 20–50 = 5, 50+ = 5.
  — [Upwork job search "data entry"](https://www.upwork.com/nx/search/jobs/?q=data%20entry&sort=recency)
- Example: "Virtual Assistant – Simple Data Entry / Copy-and-Paste (No Experience Required)". Hourly, entry level, 50+ proposals. US client, $35,407 spent, 4.97. — [Job 2113613613912977820](https://www.upwork.com/jobs/~022113613613912977820)
- Example: "Data Entry Support: Product Spreadsheet" (auto-parts catalog). Hourly, expert, 50+ proposals. Australian client, $150,232 spent, 4.95. — [Job 2113463547698286203](https://www.upwork.com/jobs/~022113463547698286203)
- Example: "Research & Data Entry – (India) Business Account with Comviva". $25 fixed, <5 proposals, from a US client with 2,356 jobs posted, $1.52M spent, 4.99 across 3,522 reviews. The client posts country-specific "collect FX rates/fees" tasks; a sibling Flywire India post also exists. — [Job 2113643502911095607](https://www.upwork.com/jobs/~022113643502911095607)
- Example of a very low rate: "Data entry dropshipping" lists $3–4/hr, but the snippet states "$2.5 per hour", 7 days × 8 h. 15–20 proposals. — [Job 2113876707752825746](https://www.upwork.com/jobs/~022113876707752825746)
- Freelancer search "data entry web research", Nigeria + 1–10 jobs filter (25 results). Almost all are Top Rated. Higher earners repositioned data entry as specialist research or data work:
  - Nkechi N. "Research & Insights Analyst" $25, $40K+
  - Adepeju A. "Market & Customer Research" $15, $30K+
  - Precious E. "AI Data Annotator" $10, $20K+
  - Dan A. investigative researcher/fact-checker $10, $20K+
  - Abdulazeez A. Yoruba–English transcription $6, $5K+
  - Abraham F. Python web scraping $5, $8K+
  — [Upwork talent search "data entry web research", Nigeria](https://www.upwork.com/nx/search/talent/?q=data%20entry%20web%20research&loc=nigeria)
- **Mirah M.** (Nigeria, Lagos): $10/hr, Top Rated, JSS 100, $3K+, 19 jobs (17 fixed / 2 hourly), 14 reviews.
  - Contracts:

    | Contract | Dates | Earned | Review |
    |---|---|---|---|
    | Lead Research VA for UK Local Businesses | Dec 2025–Feb 2026 | $144 | 5★ |
    | "Simple Website Checks (UK businesses)" | Feb 2026 | $2.67 for 0.33 h | 5★ |
    | App-store monitoring assistant | Jan–May 2026 | $1,102 fixed | 5★, long review: "Out of all of the upworkers that I have ever had… Miarah has been the absolute best" |
    | Excel CCTV product sheets | from 2026-02-13 | $954.60 | — |
    | 500 fitness trainers in Saudi Arabia | May 2026 | $50 | 5★ |
    | Web Research & Lead List | May 2026 | $10 | 5★ |
    | Web Research & Data Collection | Jul 2026 | $10 | 5★ |
    | Web Research & Data Collection Specialist | from 2026-09-27 | — | — |

  - Overview leads with a case study: "1,000+ decision-maker contacts… under 2% email bounce rate… 15+ hours saved per week".
  — [Mirah M. profile](https://www.upwork.com/freelancers/~01f4d7e1cf914f1dc2)
- See also Olayinka A. (niche 2), who blends web research and data collection. — [Olayinka A. profile](https://www.upwork.com/freelancers/~0125a6b31243a7a68a)

### Inferences
- Generic "copy-paste data entry" is over-subscribed (50+ proposals is common). A no-badge newcomer is unlikely to win those.
- Better entry points:
  1. Small fixed web-research or list tasks at $10–50, where a fast deliverable earns a 5★ review.
  2. Country-specific data-collection tasks (the Comviva/Flywire client posts per-country tasks; a Nigeria-located freelancer can target Nigeria/Africa variants).
  3. Specialist relabels: research analyst, AI data annotation, local-language transcription.

### Gaps
- It is not observable whether the big "country FX-rate" client posts Nigeria-specific tasks regularly. Only India tasks appeared in this sample.

---

## (4) Bookkeeping (QuickBooks/Xero): demand, competition, and who wins

### Takeaway
There are about 13 genuine bookkeeping posts/day (≈27/day "bookkeeper"-matched, about half general accounting or tax). None of the 20 was entry level, and most require experience, often country-specific (Australia/Xero, Canada/HST, CRA). Nigerian pure bookkeepers in the sample, including chartered accountants, mostly have $30–$200 lifetime earnings. The one clear success got there via offline bookkeeping experience, a QBO ProAdvisor certificate and a paid skills test, at ~$6–9/hr effective. It is the hardest of these niches for a 0-review freelancer.

### Cited Findings
- 20 "bookkeeper" jobs were created between 2026-10-23 15:21 and 2026-10-24 09:03 UTC (~17.7 h).
  - About 10 are bookkeeping proper; the rest are tax, CPA or accounting.
  - Experience: entry_level 0, intermediate 16, expert 4.
  - Proposals: <5 = 4, 5–10 = 2, 10–15 = 2, 15–20 = 4, 20–50 = 5, 50+ = 3.
  — [Upwork job search "bookkeeper"](https://www.upwork.com/nx/search/jobs/?q=bookkeeper&sort=recency)
- Example: "Xero Bookkeeper – Australian Business Experience Required". $4–6/hr, intermediate, 15–20 proposals. AU client, $1,153 spent, 4.99. — [Job 2113789995751738480](https://www.upwork.com/jobs/~022113789995751738480)
- Example: "Bookkeeper for QuickBooks Online" (weekly invoice entry). $5–13/hr, intermediate, 50+ proposals, verified US client. — [Job 2113736922467926839](https://www.upwork.com/jobs/~022113736922467926839)
- Example: "Virtual Bookkeeper — Financial Operations & Controls" (nonprofit). $18–25/hr, full-time, 5–10 proposals. US client, $59,679 spent, 4.94. — [Job 2113776517779817271](https://www.upwork.com/jobs/~022113776517779817271)
- Example: "Church Bookkeeper & Accountant – Non-Profit Experience" (QuickBooks, CRA charity). Hourly, intermediate, <5 proposals. Canadian client, $17,965 spent, 5.0. — [Job 2113919221486605202](https://www.upwork.com/jobs/~022113919221486605202)
- Freelancer search "bookkeeping QuickBooks Xero", Nigeria + 1–10 jobs filter (25 results):
  - Several pure bookkeepers have minimal earnings: Ekom-Obong M. $30+, Emmanuela A. $70+, Yusuf O. $80+, Opeyemi K. $100+ (Chartered Accountant), Esther A. $200+ (Chartered Accountant).
  - Successful Nigerians: Joy O. ($9, Top Rated, $10K+); Owolabi O. ($20, Top Rated Plus, $50K+); Tabitha O. ($30, accounting automation with n8n and the QBO API); Precious Olamide M. ($20, US LLC/EIN/ITIN tax).
  — [Upwork talent search "bookkeeping QuickBooks Xero", Nigeria](https://www.upwork.com/nx/search/talent/?q=bookkeeping%20QuickBooks%20Xero&loc=nigeria)
- **Joy O.** (Nigeria, Lagos): $9/hr, Top Rated, JSS 100, $10K+, 18 jobs, 6 reviews. Prior employment: bookkeeper and inter-company reconciliation at Africa Reinsurance Corporation. Portfolio shows a QBO ProAdvisor certificate (dated 24 Feb 2025, valid through 1 Oct 2026).
  - Work history:
    - Small research gigs 2022–2023: $126, $10, $35, $20.
    - "Paid Bookkeeping Skills Assessment" $10 (Feb 20–21 2026, 5★).
    - Then, starting the next days:

      | Contract | Start / dates | Earned / hours | Effective rate |
      |---|---|---|---|
      | Financial & Property Management VA for Real Estate | 2026-02-21 to Oct 14 | $4,174 / 657 h | ≈$6.35/hr |
      | Bookkeeper Assistant | 2026-02-23 | $2,830 / 403 h | ≈$7/hr |
      | QuickBooks Online Assistance for CPA Firm | 2026-04-01 | $1,200 / 169 h | — |
      | Settlement Specialist for a trucking LLC | 2026-07-01 | $1,779 / 206 h | ≈$8.6/hr |

  — [Joy O. profile](https://www.upwork.com/freelancers/~01d0e8546bde9eac9a)
- **Esther A.** (Nigeria, Osun): $5/hr, no badge, JSS 100, $200+, 9 jobs, 3 reviews. Title "Chartered Accountant | QuickBooks | Bookkeeping & Financial Analysis".
  - Five $10 fixed contracts, Jul–Aug 2026, with polished 5★ comments such as "She found exactly where my cash was leaking…" and "Year-end statements came back clean". Then $120 fixed and $45 hourly ($5/hr).
  - The profile lists ~90 employment records naming large US companies (Palantir, Motorola Mobility, Verizon, Gusto, etc.) and 181 portfolio items.
  — [Esther A. profile](https://www.upwork.com/freelancers/~01f0c30f48334d0dca)

### Inferences
- Bookkeeping clients want proof of trustworthiness with financial access: certifications, prior employer bookkeeping, country-specific experience. A 0-review generalist faces "experience required" filters on nearly every post.
- Joy O.'s path is the realistic template: offline bookkeeping job → ProAdvisor certification → paid skills test → subcontract roles for CPA firms and real-estate operators at ~$6–9/hr.
- Esther A.'s implausibly long employer list and the run of $10 "review" jobs are credibility risks. This is my inference from the profile pattern, not a verified finding. Profile padding is unlikely to substitute for verified experience.
- Lower-barrier adjacent route: bundle "light bookkeeping" inside a VA offer (many earning Nigerian VAs list it, e.g. Lovelyn O., EVA + bookkeeping, $15, Top Rated, $10K+, in the same search).

### Gaps
- No Nigeria-specific bookkeeping demand signal (e.g. clients seeking IFRS or Nigerian tax) appeared in the 20 jobs.

---

## (5) Customer support / chat support: demand, competition, and who wins

### Takeaway
There are about 13–14 "customer support" posts/day. They are dominated by Shopify/e-commerce stores hiring long-term, full-time, mostly intermediate, at $3–8/hr. Competition is heavy: 11 of 20 posts had 20+ proposals. The global freelancer pool is led by Philippine and Pakistani Top Rated agents. Even so, Nigerians appear well represented among high earners, often in SaaS/customer-success framing at $10–25/hr. No-badge Nigerians are landing long CS contracts, but at ~$3–4/hr effective. Phone roles carry connectivity risk.

### Cited Findings
- 20 "customer support" jobs were created between 2026-10-22 21:02 and 2026-10-24 08:30 UTC (~35.5 h), which is ≈13–14/day. About 12 of 20 are Shopify/e-commerce.
  - Experience: entry 3, intermediate 14, expert 3.
  - Proposals: <5 = 2, 5–10 = 2, 10–15 = 1, 15–20 = 4, 20–50 = 9, 50+ = 2.
  — [Upwork job search "customer support"](https://www.upwork.com/nx/search/jobs/?q=customer%20support&sort=recency)
- Example: "Customer Support E-commerce (Shopify + Gorgias), Aussie Dog Brand". $5–7/hr, full-time, 15–20 proposals. AU client, $20,301 spent, 4.99. — [Job 2113776176920727163](https://www.upwork.com/jobs/~022113776176920727163)
- Example: "Senior Customer Support Specialist" (Miracle Maid). $6–7/hr, expert, full-time, 3 hires, 20–50 proposals, featured. AU client, $27,710 spent, 5.0. — [Job 2113793555838996091](https://www.upwork.com/jobs/~022113793555838996091)
- Example: "E-commerce Virtual Assistant: Back Office Operations & Customer Support (Shopify)". $4–7/hr, 20–50 proposals. US client, $17,481 spent, 4.9. — [Job 2113645311992164764](https://www.upwork.com/jobs/~022113645311992164764)
- Example of a higher-paying, language-gated role: "AI-first Customer Support & Success Manager (English + Spanish/Portuguese), B2B SaaS". $12–20/hr, <5 proposals. Israeli client, $140,685 spent. — [Job 2113910970175169643](https://www.upwork.com/jobs/~022113910970175169643)
- Some posts were restricted to US-based applicants: "Customer support and Calling Service USA only", and a Nigeria-located client seeking a "US-based" VA. — [Job 2113687623771786352](https://www.upwork.com/jobs/~022113687623771786352); [Job 2113722497136829547](https://www.upwork.com/jobs/~022113722497136829547)
- Freelancer search "customer support chat support Shopify" (1–10 jobs filter, 25 results):
  - Philippines 14, Pakistan 7, Egypt, Indonesia, Bangladesh and US 1 each, Nigeria 0.
  - 23 of 25 Top Rated or Top Rated Plus.
  - Rates PK $3–5, PH $5–15.
  — [Upwork talent search "customer support chat support Shopify"](https://www.upwork.com/nx/search/talent/?q=customer%20support%20chat%20support%20Shopify)
- Freelancer search "customer support email chat support", Nigeria (25 results). Many high earners:
  - Blessing U. $15, Top Rated Plus, $100K+
  - Chidinma N. $15, Top Rated Plus, $90K+ ("Customer Support & Customer Success Manager")
  - Abigail I. $25, Top Rated, $60K+ (SaaS/FinTech live chat)
  - Joy A. $15, Top Rated Plus, $40K+
  - No-badge entries at $5–10 with $200–$6K.
  — [Upwork talent search "customer support email chat support", Nigeria](https://www.upwork.com/nx/search/talent/?q=customer%20support%20email%20chat%20support&loc=nigeria)
- **Cecilia N.** (Nigeria, Abuja): $6/hr, no badge, JSS 100, $5K+, 10 jobs, 5 reviews. Offline customer-service experience at MTN and Shopify brands.
  - Contracts:

    | Contract | Dates | Earned / hours | Effective rate / review |
    |---|---|---|---|
    | Meditation experiment participant | 2025 | $10 | 5★ |
    | Support Manager for Wellbeing App | Oct 2025–Jan 2026 | $428.50 / 106 h | ≈$4/hr |
    | "Answering phones" | Jan–Mar 2026 | $71 | 4★ "Great person just bad connection" |
    | "Customer Support Specialist Using Intercom" (8-hour sale cover) | Mar 2026 | $41.83 | 5★ "took her half an hour to go through the help doc… got all 5 stars on customer feedback" |
    | CS for ecom brand | Mar–Jul 2026 | $2,247 / 562 h | ≈$4/hr |
    | FAQ & help-desk creation | Jun 2026 | $32 | 5★ "I had to rehire Cecilia" |
    | CS for ecom brand | from 2026-08-19 | $1,250 / 312.5 h | ≈$4/hr |

  - Overview lists helpdesk tools (Gorgias, Zendesk, Reamaze, Intercom), refunds and chargebacks via Shopify/PayPal/Stripe, and SLA, plus a video.
  — [Cecilia N. profile](https://www.upwork.com/freelancers/~011acddd6248b1954d)
- **Sandra E.** (Nigeria, Lagos): $7.8/hr, no badge, JSS 100, $1K+, 2 jobs.
  - Her *first* contract, "Virtual Assistant for Customer Support" (hourly, from 2026-01-11, ongoing), has paid $912 / 295 h ≈ $3.09/hr.
  - Her second was "100 Needed for Reading/Response Project – Branch (Aug 2026)" $30 (5★).
  - Overview is positioned on outcomes ("Win Chargeback Disputes & Keep Recurring Revenue", "100+ tickets daily… 95%+ CSAT"), with real redacted Gorgias/Shopify screenshots.
  — [Sandra E. profile](https://www.upwork.com/freelancers/~0141852c90bb2ded13)

### Inferences
- CS is winnable for a Nigerian newcomer with offline CS experience and helpdesk-tool screenshots. Both no-badge Nigerians above got long contracts. The cost is accepting ~$3–4/hr effective at first.
- Chat/email-only roles avoid the "bad connection" risk seen in phone work.
- The higher-paying Nigerian CS earners frame themselves around SaaS/customer success, onboarding and tech support rather than generic Shopify tickets. That is a plausible upgrade path once reviews exist.

### Gaps
- It is not visible how many CS posts silently exclude non-US/PH applicants beyond the two explicit "US only" posts.

---

## (6) Appointment setting / cold calling: demand, competition, and who wins

### Takeaway
This niche shows the **best demand-to-competition ratio** in the sample:
- ≈28 "appointment setter" posts/day.
- 13 of 20 had fewer than 5 proposals, and none had 20+.
- Many clients are new or commission-based.

Nigerians win here quickly. A no-badge Nigerian landed four appointment-setting contracts within about 2 months, and a Nigerian DM setter runs seven concurrent contracts at ~$10/hr effective. Main risks: performance-only pay, JSS volatility, and voice/connection quality for phone roles. Text-based "DM setting" for coaches avoids the latter.

### Cited Findings
- 20 "appointment setter" jobs were created between 2026-10-23 17:25 and 2026-10-24 10:34 UTC (~17.1 h), which is ≈28/day.
  - Proposals: <5 = 13, 5–10 = 5, 10–15 = 2, none above 15.
  - Experience: intermediate 15, expert 5, entry 0.
  — [Upwork job search "appointment setter"](https://www.upwork.com/nx/search/jobs/?q=appointment%20setter&sort=recency)
- Example: "Cold Caller / Appointment Setter for US Local Businesses ($5–$7/hr + bonuses)". The client provides an 8,000+ business call list, the script and the calendar. Intermediate, <5 proposals. — [Job 2113823994691882096](https://www.upwork.com/jobs/~022113823994691882096)
- Example: "B2B Appointment Setter for G11 Security — Apollo Cold Calling". $10–20/hr, intermediate, <5 proposals. US client, $3,900 spent, 5.0. — [Job 2113939126780953399](https://www.upwork.com/jobs/~022113939126780953399)
- Example: "B2B Appointment Setter for Marketing Agency | Ongoing, Performance-Based". $3,500 fixed, 3 hires, expert, <5 proposals. US client, 54 reviews, 4.93. — [Job 2113942061766148919](https://www.upwork.com/jobs/~022113942061766148919)
- Example: "B2B Appointment Setter for Home Building Industry". $20–40/hr, expert, 5–10 proposals. US client, $17,533 spent, 4.99. — [Job 2113730262190236779](https://www.upwork.com/jobs/~022113730262190236779)
- Example: "Instagram/Facebook DM Appointment Setter" (health coaching). $10–12/hr, full-time, 10–15 proposals. — [Job 2113725156451177362](https://www.upwork.com/jobs/~022113725156451177362)
- Commission-only or performance pay is common, e.g. "French-Speaking Appointment Setter — B2B Cold Calling (100% Performance Pay)". — [Job 2113795558322308358](https://www.upwork.com/jobs/~022113795558322308358)
- Freelancer search "appointment setter cold calling" (1–10 jobs filter, 25 results):
  - Pakistan 10, Philippines 8, US 3, Nigeria 1, others 4.
  - Rates $5–8/hr typical.
  - Several no-badge or sub-90 JSS freelancers still have $20K–60K earnings (e.g. Mohid Ali B., PK, no badge, $20K+; Deena N., PK, JSS 85, $30K+; Dhonabel Grace A., PH, JSS 86, $60K+).
  - Real-estate cold calling is a dominant sub-niche.
  — [Upwork talent search "appointment setter cold calling"](https://www.upwork.com/nx/search/talent/?q=appointment%20setter%20cold%20calling)
- **Charity F.** (Nigeria, Akwa-Ibom): $10/hr, no badge, JSS 100, $1K+, 5 jobs, 2 reviews, availability full-time. BSc Human Anatomy (Uyo, 2024). Prior inside-sales and appointment-setter roles at a real estate firm and others.
  - All contracts fall within Aug 29–Oct 20 2026:

    | Contract | Start / dates | Earned / hours | Effective rate / review |
    |---|---|---|---|
    | Multichannel Appointment Setter for B2B Agency (USA timezone) | 2026-08-29 | $980.83 / 196 h | ≈$5/hr |
    | Appointment Setter | Sep 1–30 | $200 / 40 h | 5★ "Nice person" |
    | "100 Needed for Reading/Response Project – Omega (Sept 2026)" | Sep | $30 | 5★ "attentive to the task and consistently kind and respectful" |
    | Appointment Setter & Lead Qualifier – Credit, Homebuyer & Business Funding | 2026-10-16 | — | — |
    | B2B Appointment Setter – Photography SaaS | 2026-10-20 | — | — |

  - Portfolio is demo-heavy, in Problem/Solution/Impact format: a JustCall dashboard ("364 outbound calls in one week"), an Apollo 3-step email sequence, a full cold-call script, a Pipedrive pipeline, and a mock law-firm gatekeeper call.
  — [Charity F. profile](https://www.upwork.com/freelancers/~01908f6216a5028bf2)
- **Precious Onyinyechi N.** (Nigeria, Imo): $12/hr, Top Rated, JSS 100, $20K+, 43 jobs (40 hourly), 27 reviews.
  - Contracts:

    | Contract | Start / dates | Earned / hours | Effective rate / review |
    |---|---|---|---|
    | "Instagram DM Setter for Online Fitness Coaching Brand" | 2026-02-28 | $7,870 / 799 h | ≈$9.85/hr |
    | "Experienced Call Setter… Relationship Coaching Program" | 2026-05-27 | $2,680 / 268 h | ≈$10/hr |
    | "DM Manychat appointment setter" | 2026-08-10 | $1,200 / 206 h | — |
    | IG/FB Lead Gen VA for Leadership Coaching | 2026-08-31 | $525 / 30 h | — |
    | "Social Media Appointment Setter" | 2026-10-04 | — | — |
    | "Appointment setter" | Sep 14–Oct 21 2026 | $600 | 5★ "She did an amazing job. My account was disabled and we had to part ways by default" |

  - Seven contracts are active concurrently.
  - Overview opens with a number ("20 to 60 booked discovery calls per month"), then a niche list (coaches, SaaS, med spas, dental), quantified client stories, and tools (ManyChat, GoHighLevel, Instantly, Calendly).
  — [Precious Onyinyechi N. profile](https://www.upwork.com/freelancers/~0109c92f16d5c9caf5)

### Inferences
- Low proposal counts mean a newcomer's proposal is far more likely to be read. That probably reflects that many freelancers avoid commission-heavy or phone-heavy work.
- Why Nigerians rank and get hired here:
  - Proof-of-skill assets in the portfolio (call scripts, call-volume dashboards, recorded mock calls).
  - Positioning on booked-meeting outcomes.
  - Willingness to work US hours.
  - DM-based setting, which removes accent and connectivity objections.
- Effective pay for newcomers is about $5/hr, rising to ~$10/hr once reviews accumulate. That beats VA, CS and data-entry newcomer economics in the sample.

### Gaps
- It is not observable how many of these jobs are commission-only in practice, or what share of hires go to Nigeria-based freelancers.

---

## (7) Copywriting / ghostwriting (LinkedIn): demand, competition, and who wins

### Takeaway
LinkedIn ghostwriting has **very low job volume**: about 0.6 posts/day (10 posts over 16 days), versus about 5/day for generic "ghostwriter", which is mostly romance and fiction books. Rates on LinkedIn posts are attractive ($15–45/hr; $400/founder/month), but 6 of 10 had 20–50 proposals and none were entry level. A Nigerian newcomer does get LinkedIn work, but the evidence shows ~$5–6/hr effective. The highest-earning "LinkedIn ghostwriter" Nigerian in the sample actually earned from romance-ebook ghostwriting.

### Cited Findings
- "ghostwriter": 10 jobs created between 2026-10-22 08:28 and 2026-10-24 10:55 UTC (~50 h), which is ≈5/day. 9 of 10 are book or fiction work.
  - UK romance publishers pay **$600 per ~60,000-word novel**. One is explicitly entry level, with 5–10 proposals (UK client, $184,643 spent, 4.96).
  — [Job 2113755707937653559](https://www.upwork.com/jobs/~022113755707937653559); [Upwork job search "ghostwriter"](https://www.upwork.com/nx/search/jobs/?q=ghostwriter&sort=recency)
- "LinkedIn ghostwriter": 10 jobs created between 2026-10-07 and 2026-10-23 (~16 days), which is ≈0.6/day.
  - Proposals: 5–10 = 1, 10–15 = 3, 20–50 = 6.
  - Experience: intermediate 8, expert 2.
  — [Upwork job search "LinkedIn ghostwriter"](https://www.upwork.com/nx/search/jobs/?q=LinkedIn%20ghostwriter&sort=recency)
- Example: "LinkedIn ghostwriter for 3 B2B founders ($400/founder/mo, 3 posts/week)". $1,200 fixed, 20–50 proposals. US client with $50 spent. — [Job 2113036028188132813](https://www.upwork.com/jobs/~022113036028188132813)
- Example: "LinkedIn Ghostwriter (Pay Per Post): Founder Brand in B2B Finance". $15–35/hr, 10–15 proposals. Dutch client, $32,740 spent, 4.8. — [Job 2112127478034029649](https://www.upwork.com/jobs/~022112127478034029649)
- Example: "Ghostwriters for LinkedIn Posts" (8x Business). $400 fixed, 10–15 proposals. US client, $38,021 spent, 4.97. — [Job 2112050239935026268](https://www.upwork.com/jobs/~022112050239935026268)
- Lowball example: "LinkedIn Ghostwriter & Growth Specialist – B2B Supply Chain / Inventory Management (SaaS)". $3–5/hr, full-time. — [Job 2113725280024673273](https://www.upwork.com/jobs/~022113725280024673273)
- Freelancer search "LinkedIn ghostwriter" (1–10 jobs filter, 25 results):
  - Pakistan 13, Nigeria 3, US 4, Europe and others 5.
  - Median rate ~$22/hr (range $4–$99.95).
  - Nigerians: Marvellous I. ($40, Top Rated Plus, $90K+), Chinonso O. ($25, Top Rated Plus, $60K+), Bukky Benedict Akande M. ($4, Top Rated, $1K+).
  — [Upwork talent search "LinkedIn ghostwriter"](https://www.upwork.com/nx/search/talent/?q=LinkedIn%20ghostwriter)
- **Marvellous I.** (Nigeria, Oyo): $40/hr, Top Rated Plus, $90K+, 87 fixed jobs, 39 reviews.
  - The profile is now titled "LinkedIn Ghostwriter and Content Strategist for B2B Founders", with a process-led overview (buyer research, Voice Profile, 12 posts per month).
  - Its LinkedIn proof is thin: one profile-rewrite case reports "4 likes and 1 repost with only 7 connections".
  - All 10 visible contracts are romance novels:
    - "15,000 words. Western historical romance – MOB" (since 2021-07-24, $22,380)
    - Several dark-mafia and contemporary romance contracts at $705–$2,820
    - Two trial-size jobs at $25 and $30 (Jan–Mar 2026, 5★)
    - "80,000 word Dark Mafia Romance" $955 (5★ "professional, communicative, and delivered results in a timely manner")
  — [Marvellous I. profile](https://www.upwork.com/freelancers/~011d3191bb4d76b57b)
- **Bukky Benedict Akande M.** (Nigeria, FCT): $4/hr, Top Rated, $1K+, 6 jobs, 2 reviews.
  - Contracts: "LinkedIn Profile Writer & Optimizer for Administrative Solutions Founder" (Nov 2025–Jan 2026, $403 / 67 h ≈ $6/hr, 5★ with a long review: "exceptional partner… polished, strategic… every week"); "LinkedIn Ghostwriter (B2B Recruiting & AI | DE required)" $400 fixed (May–Aug 2026); "LinkedIn for Agency Founder" (Aug–Oct 2026, $522.51 / 104.5 h ≈ $5/hr, 5★).
  - Overview claims her own LinkedIn grew to 7,700+ followers and offers a free profile audit.
  - Portfolio shows metrics screenshots such as "27,517 impressions from 11 comments on prospect posts".
  — [Bukky Benedict Akande M. profile](https://www.upwork.com/freelancers/~017899b2b900c393cf)

### Inferences
- LinkedIn ghostwriting is a *low-volume, high-competition, high-trust* niche. Clients want visible results, usually the writer's own LinkedIn audience. A 0-review newcomer would likely need to price very low (as Bukky does at $4/hr) or bring an existing LinkedIn following.
- The large and steady entry point for ghostwriting is romance-ebook ghostwriting:
  - Publishers with $100K–185K spend post repeatedly.
  - At least one post is labeled entry level.
  - Trial jobs pay $25–30 (seen in Marvellous I.'s history).
  - But $600 per 60,000 words ≈ $0.01/word, which is very low pay per hour of writing.
- The Marvellous I. case shows earnings badges can come from a *different* sub-niche than the current title claims. Judge a "successful LinkedIn ghostwriter" by visible LinkedIn contracts, not total earnings.

### Gaps
- No LinkedIn-specific job in the sample was labeled entry level. The proposal-to-hire rate for newcomers is not observable.
- I did not pull a Chinonso O. profile (call budget), so I can't confirm whether that $60K+ came from LinkedIn work.

---

## Cross-niche comparison: which niches can a no-badge, 0-job freelancer realistically win?

### Takeaway
Ranked on demand, competition, entry-level share and observed newcomer wins:
1. **Appointment setting** (and DM setting): highest win-ability. ~28 posts/day, 65% under 5 proposals, Nigerian newcomers winning within weeks.
2. **Virtual assistant**: highest volume (~45/day), 45% entry level, many <5 proposals. Wins via micro-gig review ladder.
3. **Customer support** (chat/email): steady (~13/day) and long-term, but crowded. Winnable with offline CS experience at ~$3–4/hr starting.
4. **Data entry / web research**: winnable only via tiny fixed research gigs. Generic data entry is over-subscribed.
5. **Lead gen list building**: commodity-priced against a deep Pakistani Top Rated bench. Better reframed as SDR or appointment setting.
6. **Bookkeeping**: experience and certification gated. No entry-level jobs.
7. **LinkedIn ghostwriting**: very low volume, crowded proposals. Romance ghostwriting is the volume alternative.

### Cited Findings

| Niche (search title) | Observed rate | Entry-level share | Proposals <5 | 20+ proposals | Typical $ |
|---|---|---|---|---|---|
| Virtual assistant | ≈45/day | 9/20 | 6/20 | 4/20 | $3–15/hr |
| Lead generation | ≈27/day | low (1 of 20 explicitly entry) | 5/20 | 4/20 | $5–10/hr; $12–$250 fixed |
| Data entry | ≈14–15/day | ~8/20 | 4/20 | 10/20 | $2.5–10/hr; $5–$100 fixed |
| Bookkeeper | ≈27/day matched, ~13 genuine | 0/20 | 4/20 | 8/20 | $4–25/hr |
| Customer support | ≈13–14/day | 3/20 | 2/20 | 11/20 | $3–8/hr |
| Appointment setter | ≈28/day | 0/20 (but 13/20 <5 proposals) | 13/20 | 0/20 | $5–15/hr; $20–40 expert |
| LinkedIn ghostwriter | ≈0.6/day | 0/10 | 0/10 | 6/10 | $15–45/hr |

— [VA search](https://www.upwork.com/nx/search/jobs/?q=virtual%20assistant&sort=recency); [Lead gen search](https://www.upwork.com/nx/search/jobs/?q=lead%20generation&sort=recency); [Data entry search](https://www.upwork.com/nx/search/jobs/?q=data%20entry&sort=recency); [Bookkeeper search](https://www.upwork.com/nx/search/jobs/?q=bookkeeper&sort=recency); [CS search](https://www.upwork.com/nx/search/jobs/?q=customer%20support&sort=recency); [Appointment setter search](https://www.upwork.com/nx/search/jobs/?q=appointment%20setter&sort=recency); [LinkedIn ghostwriter search](https://www.upwork.com/nx/search/jobs/?q=LinkedIn%20ghostwriter&sort=recency)

Effective newcomer pay from profiles:

| Niche | Freelancer | Effective rate |
|---|---|---|
| VA | Queen O. | ≈$6/hr |
| VA | Precious A. | ≈$5–7/hr |
| Lead gen / research | Olayinka A. | $5–10/hr |
| Lead gen / research | Tasleem B. | ≈$5.9/hr |
| Bookkeeping | Joy O. | $6–9/hr |
| Bookkeeping | Esther A. | $5/hr |
| CS | Cecilia N. | ≈$4/hr |
| CS | Sandra E. | ≈$3/hr |
| Appointment setting | Charity F. | ≈$5/hr |
| Appointment setting | Precious Onyinyechi N. | ≈$10/hr |
| LinkedIn ghostwriting | Bukky | ≈$5–6/hr |

— [Queen O.](https://www.upwork.com/freelancers/~010a86086277339d4e); [Precious A.](https://www.upwork.com/freelancers/~01d97129f2528f1e7c); [Olayinka A.](https://www.upwork.com/freelancers/~0125a6b31243a7a68a); [Tasleem B.](https://www.upwork.com/freelancers/~01a2f00e8df0df125c); [Joy O.](https://www.upwork.com/freelancers/~01d0e8546bde9eac9a); [Esther A.](https://www.upwork.com/freelancers/~01f0c30f48334d0dca); [Cecilia N.](https://www.upwork.com/freelancers/~011acddd6248b1954d); [Sandra E.](https://www.upwork.com/freelancers/~0141852c90bb2ded13); [Charity F.](https://www.upwork.com/freelancers/~01908f6216a5028bf2); [Precious Onyinyechi N.](https://www.upwork.com/freelancers/~0109c92f16d5c9caf5); [Bukky](https://www.upwork.com/freelancers/~017899b2b900c393cf)

### Inferences
- Effective pay converges at **~$4–7/hr for newcomers in every admin/support niche**. Upside comes from reviews and specialization, not from the starting niche.
- Appointment setting stands out because competition is unusually thin relative to volume, and because a Nigerian newcomer reached ~4 concurrent contracts in two months.
- Nigerians already dominate the *Nigeria-filtered* VA results. In the *global* (non-country) VA search, 11 of 25 were Nigerian, so the VA niche is crowded with Nigerian peers. Lead gen and CS global searches surfaced zero Nigerians, so Nigerian supply is thinner there but faces Pakistani and Philippine price competition.

### Gaps
- Hire outcomes per job (who was hired, at what rate) are not visible through the connector.

---

## Repeatable tactics observed among newer freelancers who are winning

### Takeaway
Across niches, the newer winners share four observable tactics:
1. They collect first 5★ reviews from micro-gigs ($2.67–$50) or mass-hire research and testing gigs.
2. They fill portfolios with realistic work artifacts (screenshots, scripts, dashboards, spreadsheets), even self-made ones.
3. They write outcome-first overviews with numbers, plus an intro video.
4. They accept low effective hourly rates on the first long contract, then stack concurrent contracts.

### Cited Findings
- The mass-hire gig "100 Needed for Reading/Response Project" (Alpha May 2026, Branch Aug 2026, Omega Sept 2026; $30 fixed) appears in four separate profiles as an early 5★ review: Queen O., Olayinka A., Sandra E., Charity F. — [Queen O.](https://www.upwork.com/freelancers/~010a86086277339d4e); [Olayinka A.](https://www.upwork.com/freelancers/~0125a6b31243a7a68a); [Sandra E.](https://www.upwork.com/freelancers/~0141852c90bb2ded13); [Charity F.](https://www.upwork.com/freelancers/~01908f6216a5028bf2)
- Other micro-gig review sources:
  - App or meditation "tester/participant" gigs at $5–20 (Queen O. and Cecilia N.).
  - A "Paid Bookkeeping Skills Assessment" at $10 (Joy O.).
  - $10 web-research jobs and a $2.67 website-check job (Mirah M.).
  — [Queen O.](https://www.upwork.com/freelancers/~010a86086277339d4e); [Cecilia N.](https://www.upwork.com/freelancers/~011acddd6248b1954d); [Joy O.](https://www.upwork.com/freelancers/~01d0e8546bde9eac9a); [Mirah M.](https://www.upwork.com/freelancers/~01f4d7e1cf914f1dc2)
- Short "trial" or "cover" contracts that convert:
  - Cecilia N.'s 8-hour sale cover (5★) and "I had to rehire Cecilia".
  - Precious A.'s repeated podcast-booking clients.
  - A "30-Day Trial Period" EA contract ($1,210) in Cecilia N.'s history.
  — [Cecilia N.](https://www.upwork.com/freelancers/~011acddd6248b1954d); [Precious A.](https://www.upwork.com/freelancers/~01d97129f2528f1e7c)
- Outcome-first overviews with numbers:
  - Precious A.: "90% reduction in missed emails"
  - Mirah M.: "1,000+ decision-maker contacts… under 2% bounce"
  - Sandra E.: "100+ tickets daily… 95%+ CSAT"
  - Precious Onyinyechi N.: "20 to 60 booked discovery calls per month"
  — [Precious A.](https://www.upwork.com/freelancers/~01d97129f2528f1e7c); [Mirah M.](https://www.upwork.com/freelancers/~01f4d7e1cf914f1dc2); [Sandra E.](https://www.upwork.com/freelancers/~0141852c90bb2ded13); [Precious Onyinyechi N.](https://www.upwork.com/freelancers/~0109c92f16d5c9caf5)
- Intro videos appear on most winning newcomer profiles pulled: Queen O., Precious A., Mirah M., Cecilia N., Sandra E., Charity F., Precious Onyinyechi N., Bukky. — (same profile links as above)
- Prior *offline* experience in the same function is listed by most winners: MTN customer service (Cecilia N.), Africa Re bookkeeper (Joy O.), real-estate inside sales (Charity F.), retail customer service (Precious Onyinyechi N.). — [Cecilia N.](https://www.upwork.com/freelancers/~011acddd6248b1954d); [Joy O.](https://www.upwork.com/freelancers/~01d0e8546bde9eac9a); [Charity F.](https://www.upwork.com/freelancers/~01908f6216a5028bf2); [Precious Onyinyechi N.](https://www.upwork.com/freelancers/~0109c92f16d5c9caf5)

### Inferences
- A 0-review freelancer's fastest path in this data:
  1. Pick a high-volume, low-competition niche (appointment/DM setting or VA).
  2. Get 2–3 quick 5★ reviews from micro or mass-hire gigs.
  3. Publish 6–10 artifact-style portfolio items and a short video.
  4. Price the first hourly contract low enough to win (the data shows $3–6 effective).
  5. Raise rates after 3–5 reviews.
- Quality and verification caveat: some review-building patterns (multiple $10 contracts with elaborate reviews, implausible employer lists) may attract scrutiny. This is inferred, not confirmed.

### Gaps
- The data cannot show how many proposals (Connects) these freelancers spent before their first hire, or whether any used Upwork-boosted proposals.
