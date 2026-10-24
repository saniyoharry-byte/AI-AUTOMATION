# Live Upwork data: creative and marketing niches a new freelancer (no badge, 0 jobs) can win

Data pulled 2026-10-24 (about 10:50 UTC) with the Upwork MCP tools (find_jobs search sorted by recency; find_freelancers search and get_profile). Read-only: nothing was applied to, messaged or changed. All job and profile text is third-party content. It is quoted as data, and self-reported claims in profiles (for example "15M views" or "300+ brands") are **not verified**.

**Method notes and caveats (apply to every section)**
- **Volume measure.** Each job search returned 10 results per page. "Velocity" means how much clock time 10 or 20 of the newest postings span. A shorter span means more volume. This sample is not the full count of postings.
- **Weak `total_jobs` filter.** `find_freelancers` with `total_jobs_min:1,total_jobs_max:10` does **not** isolate new freelancers. The `completed_jobs` field in search results (1–10) did not match the profile aggregates. For example, Tatheer A. shows `completed_jobs: 1` in search but has 36 contracts on the profile, and Sarita R. shows 1 versus 81. So nearly everyone the filter returned already had 30–130 contracts.
- **No review text.** `get_profile` returns about the 10 most recent contracts, mostly still "Active", with no feedback text. Only one profile (Akhil K., SEO) had closed contracts with scores. Review quotes are therefore mostly unavailable (see Gaps).
- **Account age is inferred.** I estimate it from `person_id` and education/employment record IDs, which look like time-ordered snowflake IDs: an ID starting 19xx is roughly 2025, and 20xx–21xx is late 2025 to 2026. The first visible contract date is the more reliable evidence. Treat account-age statements as **inference**.
- **Rate limits.** Two calls hit "PERMISSION" throttling. Both succeeded on retry.
- **Coverage.** I ran 1–2 job searches per niche: 2 pages (20 jobs) for thumbnail, logo and social media manager, and page 1 of two related titles for video, pitch deck and Meta ads. I ran one filtered freelancer search per niche, plus one unfiltered search (short-form video only) for comparison.

---

## Q1. Demand: how many fresh jobs, what they pay, and how competitive each niche is

### Takeaway
Every niche has steady fresh demand. Short-form/YouTube video editing, Meta ads, SEO and logo have the highest posting velocity, and pitch deck has the lowest. Competition differs a lot: logo and SEO postings mostly show "20 to 50" proposals, while thumbnail and short-form video jobs from small or new clients often show "Fewer than 5" to "10 to 15". Budgets at the entry end are very low ($3–15/hr; $5–$50 fixed per piece).

### Cited Findings

**Video tools:** `find_jobs` search, title "video editor" and "short form video", sort recency, run 2026-10-24.

**(1) Short-form video editing (Reels/TikTok/Shorts)**
- **Velocity.** "video editor": the 10 newest jobs were created between 09:16 and 10:45 UTC on Oct 24, so about 10 jobs in about 1.5 h, the highest velocity seen. "short form video": 10 jobs between Oct 23 19:30 and Oct 24 08:59 (about 13.5 h). Extrapolated, that is easily 50+ jobs in 48–72 h for the term alone (inference from the rate).
- **Budgets.** Fixed $5–$600; hourly $3–7, $5–15, $8–12, $10–20, $10–27, $15–30 and $20–50/hr. Per-piece pricing is common: one client pays "$6 a video for the basic under 2 minute videos. $15 a video for the more ad[vanced]".
- **Experience level.** Mostly intermediate, with a few entry_level and expert.
- **Proposals.** "Fewer than 5" on 4 of 20, "5 to 10" on 4, "10 to 15" on 6, "20 to 50" on 4, "50+" on 1 (the medical talking-head job).
- **Client quality.** Ranges from strong (Saudi client with $32.7K spent, 994 jobs, 4.99 rating; US client with $100K spent; The Skorys with $76.7K spent) to weak (a DEU client at $3–7/hr with a 2.7 rating).
- **Example jobs.**
  - "Short form video editor" (CapCut, $6–15 per video, entry, 20–50 proposals; client $8.4K spent, 4.98 rating): https://www.upwork.com/jobs/~022113714811191594096
  - "Short-Form Video Editor – Scoreboard Animations & Captions" ($10 fixed, 5–10 proposals; client $20 spent): https://www.upwork.com/jobs/~022113918203332053077
  - "Short-Form Video Creator & Editor for Tech Product Reels (8–10 videos/day)" ($8–12/hr, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113729361420684923
  - "Video Editor for UCG Ads (RUNWAY, HEYGEN)" ($5 fixed, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113924612522166357
- **AI-UGC demand.** Several postings are for AI-UGC video, for example "AI UGC Video Creator & Editor | Hyperrealistic AI Characters" (20–50 proposals; client $100K spent): https://www.upwork.com/jobs/~022113869992707912092

**(2) YouTube thumbnail design**
- **Velocity.** 20 jobs between Oct 22 14:03 and Oct 24 10:30 (about 44 h), so about 20–25 jobs in 48 h for "thumbnail". A few were not YouTube (a casino game thumbnail and two video-editing bundles).
- **Budgets.** Fixed $5, $5, $10, $20, $40, $50, $50, $100, $500 (ongoing A/B pairs) and $5,000 (1,000 thumbnails, which is $5 each). Hourly $5–10, $10–27, $10–70, $15–35 and $20–45/hr.
- **Experience level.** Many postings say "expert" but pay $5–10.
- **Proposals.** "Fewer than 5" on 5 of 20, "5–10" on 2, "10–15" on 7, "15–20" on 5, "20–50" on 2.
- **Clients.** Many are new or low-spend: total_posted_jobs 1–4 and no spend history. Several "YouTube Automation company" postings use identical template text from German and Swiss clients.
- **Example jobs.**
  - "Full-Time YouTube Thumbnail Designer (Faceless Channels)" ($20, hires 3, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113941312787345820
  - "YouTube Thumbnail Designer for Travel Channel (Ongoing, A/B Pairs Weekly) - NO AGENCIES" ($500; client NZ, 5.0 rating): https://www.upwork.com/jobs/~022113742751116034871
  - "Thumbnail creator" (Indian storytelling, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113507118707639095
  - "Experienced YouTube Thumbnail Designer For A Psychology Channel (1000 Thumbnails For $5000)" (entry level, 20–50 proposals): https://www.upwork.com/jobs/~022113682023105072240

**(3) Logo / brand design**
- **Velocity.** 20 jobs between Oct 23 20:49 and Oct 24 10:49 (about 14 h), so roughly 70–100 jobs in 48–72 h (inference).
- **Budgets.** Fixed $10, $25, $50, $70, $75, $100, $200 and $400. Hourly from $10–30 up to $25–125/hr.
- **Proposals.** The most crowded niche: 14 of 20 jobs show "20 to 50" and 1 shows "50+". Only one job had "Fewer than 5" (a $70 yard-sign and logo refresh).
- **Clients.** Many are first-time (total_posted_jobs 1, no spend).
- **Small-task demand.** There is steady demand for vector rebuilds, cleanup and AI-logo fixes:
  - "Logo Revision and Vector Files" ($25, "I need help revising a logo I created using AI"): https://www.upwork.com/jobs/~022113830369038332316
  - "Rebuild a logo as clean vector art in Illustrator (no auto-trace)" ($200; client $25.9K spent): https://www.upwork.com/jobs/~022113802502093814777
  - "Logo Cleanup & Vectorization Specialist" ($75, entry level, 20–50 proposals): https://www.upwork.com/jobs/~022113922050510438698
  - "Yard Sign Update + Light Logo Refresh, then a New Christmas Design" ($70, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113896594014354425

**(4) Pitch deck / presentation design**
- **Velocity.** "pitch deck": 10 jobs between Oct 21 14:30 and Oct 24 09:31 (about 67 h), so about 7–10 jobs per 48–72 h, the lowest volume of the seven.
- **Noisy broader search.** "presentation" returned mostly on-camera presenter and UGC talent jobs (7 of 10), so that term is unusable for this niche.
- **Budgets.** Fixed $55, $115, $250 and $250. Hourly $20–49/hr. Several had no budget listed.
- **Proposals.** Mostly "20 to 50" (5 of 10) or "50+" (2). The two newest Egypt postings had "Fewer than 5" and "10–15".
- **Clients.** Many are unverified or first-time (EGY, Spain, Thailand). One strong client: US, $53.7K spent, 5.0 rating ($115 sales deck).
- **Example jobs.**
  - "Pitch deck presentation design": https://www.upwork.com/jobs/~022113926326289433399
  - "Investment Pitch Deck" ($250, Canva, 12 pages): https://www.upwork.com/jobs/~022113155680579245750
  - "Fundraising Pitch Deck Design" ($250, 50+ proposals): https://www.upwork.com/jobs/~022113326329474843447

**(5) Meta/Facebook ads management**
- **Velocity.** "Facebook ads": 9 relevant jobs between Oct 23 11:25 and Oct 24 04:15 (about 17 h), plus one older featured post from Oct 19. "Meta ads": 10 jobs between 05:43 and 10:50 UTC on Oct 24 (about 5 h). "Meta" is now the dominant term, and combined there are likely 40+ jobs per 48 h (inference).
- **Budgets.** Hourly $5–10, $5–15, $6–8, $8–25, $10–30, $12–13, $15–30, $18–50 and $20–50/hr. Fixed $25, $40, $300, $500, $1,000 and $2,500 (an engineering job).
- **Proposals.** Mostly "10–15" to "20–50".
- **Fix/setup tasks.** Several are short, specific setup or repair jobs:
  - "Meta Pixel & Conversions API Setup for Shopify (New Ad Account)" (client UAE, $55.6K spent): https://www.upwork.com/jobs/~022113942580081480594
  - "Facebook Meta Ads Setup & Shopify Pixel Integration" ($12–13/hr): https://www.upwork.com/jobs/~022113682133952496439
  - "30-min consult: Meta ad policy for a spiritual-themed digital art brand" ($40, page suspended after ad rejections): https://www.upwork.com/jobs/~022113895746260482168
  - "Meta Ads Specialist for Restaurants" ($20–50/hr, 20–50 proposals): https://www.upwork.com/jobs/~022113918056422179639

**(6) Social media management**
- **Velocity.** 20 jobs between Oct 23 17:38 and Oct 24 09:44 (about 16 h), so roughly 60+ per 48 h (inference).
- **Budgets.** Hourly $3–10, $4–7, $5–10, $8–25 (×2), $13–45, $25–40 and $28–35/hr. Fixed $100, $150, $300, $1,500 and $7,000 (luxury safari, expert).
- **Proposals.** Lower than logo or SEO: "Fewer than 5" on 6 of 20, "5–10" on 1, "10–15" on 8, "20–50" on 4.
- **Bundled roles.** Many roles bundle content creation and video editing (posting plus Reels).
- **Example jobs.**
  - "Social Media Manager for Rental Homes" ($8–25/hr, 10–15 proposals): https://www.upwork.com/jobs/~022113888744038123605
  - "Social Media Manager for Instagram" (Spanish-language, $150 fixed, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113887141197432917
  - "Social Media Manager for Kids' Game" (Fewer than 5 proposals): https://www.upwork.com/jobs/~022113694062221364336
  - "Organic Social Media Manager — daily Instagram, Facebook & TikTok (monthly fixed price)" ($5–10/hr, entry, 20–50 proposals): https://www.upwork.com/jobs/~022113727446654028912

**(7) SEO**
- **Velocity.** 10 jobs between 06:06 and 10:19 UTC on Oct 24 (about 4 h), roughly 100+ per 48 h (inference). One was an appointment-setter job, not SEO.
- **Budgets.** Hourly $3–5, $8–25 (×2), $10–20 and $13–45/hr; fixed $500.
- **Proposals.** Mostly "20 to 50" (5 of 10). Small-business jobs showed "Fewer than 5" to "10–15".
- **Example jobs.**
  - "Need good seo for my shop and google says my location is closed online when it's not" (a Google Business Profile fix, 10–15 proposals): https://www.upwork.com/jobs/~022113907480035873682
  - "Website SEO Optimization – Targeting Asian Markets" ($3–5/hr, Fewer than 5 proposals): https://www.upwork.com/jobs/~022113907690401190802
  - "Technical SEO & Traffic Recovery Expert Needed" (20–50 proposals; client $3.85K spent): https://www.upwork.com/jobs/~022113876082784969835

### Inferences
- **Openings for a 0-review freelancer** are where proposals are low and clients are small or new: $5–20 fixed short-form edits, $5–50 thumbnails, logo vector cleanup, social media management for small local businesses, and Meta pixel or account fixes. Logo design from scratch, pitch decks and general SEO show 20–50+ proposals per post, so a profile with no reviews competes against established TR/TR+ sellers.
- **Fixed-price postings at $5–25** are the realistic way in for the first 5–10 reviews in video, thumbnails and design.

### Gaps
- I did not run page 2 for "video editor", "pitch deck", "Facebook ads" or "SEO". For those, velocity is extrapolated from one page.
- `find_jobs` gives `proposals_tier` but not interviews, hires or whether a job was filled, so I could not measure how often clients hire low-review freelancers.

---

## Q2. Who is winning: profiles of freelancers who rank and get hired (focus on newer and badge-less profiles)

### Takeaway
The data does not show any freelancer winning from a true zero. Every profiled "newer" winner got traction through **very cheap, high-volume micro-contracts** ($2.50–$50 each, often 30–120 contracts in months), a niche-exact title, and a large portfolio. Many earned Top Rated within about 6–9 months at $5/hr. Badge-less profiles do rank in search (Tatheer A., Sarita R., Murtaza A., Dua D., Miracle A., Sadia A., Akhil K.), and all have high contract counts. The clearest true-newcomer case is Dua D. (short-form video): about 20 contracts and $2K+ in about 7 weeks from a new account with no badge. In logo, thumbnail, pitch deck, SEO and Meta ads, the filtered search results were almost entirely Top Rated or Top Rated Plus.

### Cited Findings (observed profile data; profile URL = source)

**Search composition (badge counts in the top 25 for each filtered search):**
- Short-form video: 4 of 25 without a badge (Tatheer A., Sarita R., Vu D., Murtaza A.). The unfiltered search had 3 of 25 without a badge, including the brand-new Dua D. (Pakistan, $20/hr, $2K+, no completed_jobs count): https://www.upwork.com/freelancers/~0130d0b5925f90fb17
- Thumbnail: 0 of 25 without a badge. Logo: 0 of 25. Pitch deck: 0 of 25.
- Meta ads: 1 of 25 (Farhan A., $80K+, JSS 92, likely an older profile that lost its badge).
- Social media manager: about 5 of 25 (Sadia A., Megha K., Akanksha G., Miracle A., Md Rashed R.).
- SEO: 2 of 25 (Akhil Kumar K., Navin S.), plus Helvijs S. ($200K+, no badge).
- Rates in SEO and social media cluster at $4–8/hr (India, Pakistan, Bangladesh).

**Notable price signal:** several Top Rated Plus freelancers list only 1–2 "completed_jobs" in search but show $40K–$100K+ earnings (for example Muhammad Faizan Q. and Serhii K.). Search also surfaces earnings and badge strongly, not just job count.

#### (1) Short-form video
- **Tatheer A.** (Pakistan). No badge, JSS 88. Profile: https://www.upwork.com/freelancers/~01b6f6b334ae3c0ca6
  - Title: "Short Form Video Editor | YouTube Shorts, Reels & TikTok Editor". Rate: $5/hr.
  - $2K+ earned. 36 contracts on the profile (aggregate 53 jobs, 16 feedback).
  - Recent contracts started Oct 22, 21, 18, 15, 10, 8 and 5 and Sep 9, 6 and 1 of 2026, earning $6.50, $8, $10, $15, $23.33 and $24 each, including "Paid trial video for Demolition content" and "Reels editor hiring Urgent".
  - The overview is a keyword list of every short-form synonym ("YouTube Shorts editor, Reel editor, TikTok video editor…"). There are 12 portfolio videos (explainer, VSL, AI cinematic, listicle).
  - *Why they win (inference):* a $5 rate, acceptance of paid trials, keyword-dense title and overview, and multiple portfolio pieces → many tiny wins.
- **Sarita R.** (India). No badge, JSS 83. Profile: https://www.upwork.com/freelancers/~01637e8821147a146b
  - Title: "Short-Form Video Editor | UGC Ads, Reels & TikTok". Rate: $12/hr.
  - $20K+ earned. 81 contracts (aggregate 116 jobs, 29 feedback). Recent contracts Oct 15 and 8, Sep 17 (×2), 16 and 14 (×2), 10, Aug 31 and Aug 24, 2026, with $15–$90 earned on each.
  - 43 portfolio items with metric claims such as "15M+ views in 10 days" and "5K followers in 30 days" (unverified). Also has an intro video, a $15 consultation and an AI-tools list (Runway, Kling, Veo, Sora, HeyGen).
  - *Why:* volume plus results-framed portfolio titles plus AI-UGC positioning. The low JSS (83) shows that the badge is not what gets her hired.
- **Murtaza A.** (Pakistan). No badge, no JSS shown in the profile. Profile: https://www.upwork.com/freelancers/~01af012eb5b763f61f
  - Title: "AI UGC Video Ads | Short-Form Video Editor for DTC & E-commerce". Rate: $33.33/hr.
  - 66 contracts, 42 feedback.
  - Recent contracts: Oct 23, Oct 21, Oct 16, Oct 13 ($100), Oct 2 ($61), Sep 29 ($50), Sep 26 ($100 VSL), Sep 24 ($25), Sep 22 ($50) and Sep 7 ("Direct Response Video Editor (Meta Ads) | AI UGC", $1,000).
  - The overview leads with named DTC brands and "50M+ views… 1,000+ ad variations" (unverified), plus an AI tool stack and a "send me your product link" call to action.
  - *Why:* a niche of performance or AI-UGC ads plus brand social proof supports a higher rate.
- **Dua D.** (Pakistan). **No badge.** This is the newest account seen: person_id 2085…, with education and employment records also 2085… (about Aug 2026, inference). The first visible contract is Sep 6, 2026. Profile: https://www.upwork.com/freelancers/~0130d0b5925f90fb17
  - Title: "Short-Form Video Editor for TikTok, Instagram Reels & YouTube Shorts". Listed rate $20/hr.
  - $2K+ earned. 20 contracts in about 7 weeks (21 aggregate, 9 feedback).
  - Contracts: Sep 6 ($20, 1 h), Sep 11 (hourly, $156.66 for 6.8 h), Sep 18 ($20 fixed "Instagram and TikTok reels"; also hourly $220 for 11 h), Sep 20 ($30), Sep 22 ("Test video to see skill set" $20; "Short-Form Video Editor… (Ongoing)" $10), Sep 23 ($10 "video editing of shorts"), Sep 24 ($150 hourly for 3 h "birthday video editing") and Oct 20, 2026 ($30).
  - Only 9 portfolio items, mostly **before/after side-by-side Reels thumbnails** (talking-head and podcast clips with captions and AI B-roll). Intro video, $30 consultation, "24–48 hr delivery", "unlimited revisions". The overview ends with a keyword block and hashtags.
  - *Why (inference):* this profile best matches the "new freelancer" case. With no badge and a new account, the freelancer reached about 20 contracts by accepting $10–$30 fixed jobs and paid test edits, while hourly clients pay roughly $20–50/hr effective. The before/after portfolio format makes skill visible at a glance.

#### (2) YouTube thumbnails
- **Fathima R.** (India). Top Rated (earned on a new account; person_id 1943…, inferred to be about mid-2025). Profile: https://www.upwork.com/freelancers/~01687aaae73cceb21a
  - Title: "Youtube Channel Manager | Youtube Automation Expert | CTR Hacker". Rate: $5/hr.
  - 115 contracts (128 aggregate, 55 feedback). Earnings are not displayed.
  - Thumbnail contracts of $15 (May 17) and $40 (May 23, 2026) grew into hourly YouTube management: $2,799 over 495.5 h since May 13; $921.65 over 193 h; $660 over 140.5 h. Latest contracts Oct 19 and Oct 15, 2026.
  - Only 3 portfolio items (thumbnails).
  - *Why:* thumbnails as a cheap entry product, then upselling to channel management at $5/hr.
- **Sohail S.** (Pakistan). Top Rated, JSS 100. Profile: https://www.upwork.com/freelancers/~01cd30cb0d304b33a4
  - Title: "YouTube Thumbnail Designer & Artist | Faceless Channel | Photoshop". Rate: $30/hr, but only $3K+ earned across 45 contracts.
  - Contracts: $1,344 "YouTube Thumbnails for Faceless Channel" (Jun 2025, ongoing), $180 (Jun 2025), $40 for "6 Custom YouTube Thumbnails" (Jul 28, 2026), and many $10–$50 menu, Canva and vector jobs. Latest Oct 19, 2026.
  - 10 niche-specific portfolio sets (faceless golf, sports, true crime, ADHD, travel).
  - *Why:* niche thumbnail sets for faceless channels, plus willingness to take $10 adjacent design tasks to keep volume and JSS.

#### (3) Logo / brand
- **Rotna R.** (Bangladesh). Top Rated Plus, JSS 98. New account: person_id 2012…, record IDs from about Jan 2026 (inference). Profile: https://www.upwork.com/freelancers/~01886e83d60ffccbeb
  - Title: "Expert Logo & Brand Identity Designer | Modern & Strategic Branding". Rate: $25/hr.
  - $30K+ earned. 120 contracts (125 aggregate, 74 feedback).
  - Recent contracts: "Paid Logo Design Test" $100 (Sep 25), $350 "Logo Design and Brand Kit", $750 "SaaS Brand Identity", $325 hourly logo, $250 and $150 logos, and a $30 flyer (Oct 14, 2026).
  - Overview claims 6+ years, 300+ brands, "no AI-generated logos", and pricing "Logo design projects typically start from $500". There are 10 polished case-study brand boards (fitness, healthcare, gaming, furniture).
  - *Why:* agency-grade brand-board mockups plus a stated price floor and an anti-AI claim. Took paid tests.
- **Yuliia B.** (UK, Kent; Ukrainian education). Top Rated, JSS 100. Account inferred to be about mid-2025 (person_id 1926…). Profile: https://www.upwork.com/freelancers/~017bf9807c03c71a44
  - Title: "Logo & Brand Identity Designer". Rate: $20/hr.
  - $4K+ earned. 29 contracts (14 feedback).
  - Recent contracts: Oct 17 "You will get a luxury minimalist logo design for your brand" (Project Catalog-style title), Oct 16, Oct 8, Aug 24 ($200), Aug 3 ($200), Aug 1 ($300), Jul 18 ($200), Jul 7 ($200) and May 18 ($80).
  - The portfolio is 7 concept brand identities with packaging and storefront mockups (candles, bakery, olive oil, hotel). Offer: "3 unique logo concepts… Up to 3 rounds of revisions… AI, EPS, SVG, PDF, PNG & JPG".
  - *Why:* a steady $200 logo price point plus a Project Catalog listing plus lifestyle-mockup case studies. Reached Top Rated with only about $4K.

#### (4) Pitch deck
- **Muhammad Agung Setiawan M.** (Indonesia). Top Rated, JSS 100. Account about late 2025 (person_id 2008…); first visible contract Mar 12, 2026. Profile: https://www.upwork.com/freelancers/~01843cd922abf7997f
  - Title: "Powerpoint design | Pitch deck design | Powerpoint Presentation Slides". Rate: $5/hr.
  - $1K+ earned. 34 contracts (36 aggregate, 17 feedback).
  - Contracts: $50 (Mar 12), $2.50 for 0.5 h (Mar 13), $25, $40, $10, $10, $35, $25 and $26 (Mar 31–Apr 9), then Oct 21, 2026 "Experience in Sustainability to Create Lectures".
  - Background as a government and consulting urban-planning consultant. 8 portfolio decks (real estate pitch, company profiles), each written as Challenge → Solution.
  - *Why:* very low price and quick wins on $10–$50 PowerPoint reformatting tasks, plus a consulting-style framing. Top Rated with only about $1K earned shows the badge is achievable through many small 5-star jobs.

#### (5) Meta/Facebook ads
- **Ayoub K.** (Germany, Berlin). Top Rated, no JSS shown in the profile (search shows 100). Account about Jun–Jul 2026 (person_id 2057…); first visible contract Jul 14, 2026. Profile: https://www.upwork.com/freelancers/~01a2d47e5a3b33c4ea
  - Title: "Meta Media Buyer | Meta Ads, Pixel & CAPI | Meta Support Experience". Rate: $60/hr.
  - 34 contracts in about 3.5 months (37 aggregate, 11 feedback).
  - Contract titles: "Meta Business Center Expert Needed" (Jul 14), "Meta ads manager help error" (Jul 15), "Fix meta ads not spending money" (Jul 21), "Ads account issue" (Jul 25), "Consultation Call for meta ads troubleshooting" (Aug 1), "Instagram Account Audit & Organic Reach Recovery" (Aug 17), "Monthly Meta Management" (Sep 27), "ad account auditing and escalating" (Oct 6), "Settings and meta ads" (Oct 16).
  - Employment is listed as "Meta Support Pro / Subject Matter Expert" at Concentrix. Only 1 portfolio item. $30 consultation offered.
  - *Why:* a specific problem-solver positioning (account restrictions, pixel, "ads not spending") plus insider credibility. Fixed troubleshooting gigs lead to monthly management. This is the clearest new-account success seen, and it relied on credentials rather than a low price.

#### (6) Social media management
- **Miracle A.** (Nigeria, Lagos). No badge, JSS 90. Account about Apr–May 2026 (person_id 2046…, inference). Profile: https://www.upwork.com/freelancers/~011303166fb0557a4e
  - Title: "Social Media Manager Content Creator I Instagram Reels,Facebook,Tiktok". Rate: $12.27/hr. Earnings hidden.
  - 34 contracts (37 aggregate, 15 feedback).
  - Contracts: Jun 23, Jun 25 ("Virtual Assistant and Social Media Marketing Support", 138 h), Jun 29 (63.7 h), Jul 2 ("Social Media Audit"), Jul 7, Jul 17 (25.5 h), Jul 27, Aug 24 (29.8 h), Sep 7 and Oct 20, 2026.
  - A story-driven overview ("I started my first business selling jewelry…") with heavy keyword repetition. About 45 education entries that are mostly free courses and YouTube "certificates". 32 portfolio items with keyword-stuffed descriptions. $20 consultation and an intro video.
  - *Why (inference):* keyword density across title, overview and portfolio seems to drive search ranking. A low entry rate plus audits and VA-style hourly roles bring in volume.
- **Sadia A.** (Pakistan). No badge, JSS 86. Account about May 2026 (person_id 2050…). Profile: https://www.upwork.com/freelancers/~016de43f359b902419
  - Title: "Social Media Content Creator/Graphic Designer, Reels & AI Video Editor". Rate: $5/hr.
  - 32 contracts (38 aggregate, 13 feedback). Most are recent hourly: Sep 21 (×3, including "Trial Run: Content Creation + Video Editing"), Sep 23, Oct 3 (×2), Oct 5, 6, 12 and 16, 2026.
  - 121 portfolio items with near-identical keyword-stuffed descriptions and generic mockups, plus hashtag spam in the overview and unverified "100M+" claims. $50 consultation.
  - *Why (inference):* a $5 rate, a social media plus graphics plus Reels bundle, and maximum keyword surface area. Quality signals are weak, which may explain the JSS of 86.

#### (7) SEO
- **Akhil Kumar K.** (India). No badge, JSS 100. Older account (2022; first contract shown Aug 2024). Profile: https://www.upwork.com/freelancers/~01b412989b05001632
  - Title: "Google Business Profile - Local SEO & AI AEO/GEO Search Specialist". Rate: $5/hr.
  - $8K+ earned. 12 contracts, 5 feedback.
  - Biggest contract: "SEO Content… Production Specialist (AI-Assisted)", 591.8 h for $3,084 since Feb 12, 2026 (about $5.2/hr effective).
  - Others: $995 over 199 h, $1,176 over 147 h (5★, ended May 2026), $350, $325 (4★), $152 and $15 (Oct 2, 2026, "Local SEO Ninja Needed (SEO, GEO, GBP, Map Pack etc)").
  - Review quote: "Great Job!" (5★, "Social Media Management for aspiring influencer", Nov 2025).
  - The portfolio is Google Search Console and GBP screenshots with specific numbers (for example "Mobile performance improved from 45 to 94", "#1 for 'air duct cleaning companies near me'").
  - *Why:* a narrow GBP/local niche, screenshot proof, and AEO/GEO keywords. Low hourly rates with long contracts mean very low effective pay.

### Inferences
- **Common winning pattern** (applies across niches; inferred from 11 profiles):
  1. A niche-exact title that repeats the client's search words.
  2. A large portfolio (10–120 items), ideally with metric claims or case-study framing.
  3. An entry rate of $5–12/hr, or $10–$50 fixed jobs.
  4. Acceptance of paid trials and tests ("Paid trial video", "Paid Logo Design Test", "Trial Run").
  5. Rapid accumulation of 30+ small contracts, which feeds Top Rated (Agung reached TR with about $1K, Yuliia with about $4K).
- **Exceptions to the low-price route:**
  - **Credentials:** Ayoub K. ($60/hr, ex-Meta support) won by positioning as the person who fixes specific problems.
  - **Credibility:** Murtaza A. ($33/hr, named DTC brands) won through brand social proof.
  - **Polish:** Rotna R. used agency-polished brand boards and a $500 price floor. Her account is new but her background is not.
- **Most winnable niches for a true newcomer, ranked by evidence:**
  1. Short-form video editing: highest volume, many low-proposal $5–$25 jobs, and several badge-less freelancers ranking.
  2. Social media management: low proposal counts, small clients, and badge-less newcomers getting hourly roles.
  3. Thumbnails: low proposal counts, $5–$50 jobs, and an upsell path to channel management. Search is all-TR, though.
  4. Meta ads fixes and pixel setup: fixed troubleshooting gigs, but these require real platform knowledge.
  5. Logo, pitch deck and SEO: high proposal counts and TR-dominated search. Enter through micro-tasks (vector cleanup, PPT reformatting, GBP fixes) rather than full projects.
- **Low effective pay:** effective hourly pay at entry is very low (Akhil about $5.2/hr; Fathima and Sarita roughly $5–12/hr). The path to Top Rated is volume first, then raising rates.

### Gaps
- **No review text.** `get_profile` returns only the latest ~10 contracts (mostly "Active", without feedback). A short review quote was available for only one freelancer (Akhil: "Great Job!"). I could not verify review quality for the others.
- **Missing earnings.** Earnings are hidden or missing for Murtaza A., Fathima R., Ayoub K., Miracle A. and Sadia A.
- **Account creation dates** are not exposed. Account age is inferred from ID ordering and first visible contract dates.
- **No true zero-history freelancers.** The newest winner found (Dua D.) already had 20 contracts. I could not find anyone who was winning with fewer than about 10 contracts. The `total_jobs` filter did not work as intended (see the method notes), so the data says nothing about the very first 1–5 wins.
- **Search ranking is unknown.** Ranking factors are not exposed. The "why they rank" statements are inferences from profile features.
