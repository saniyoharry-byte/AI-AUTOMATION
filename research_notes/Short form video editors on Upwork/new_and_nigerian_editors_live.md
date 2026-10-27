# New and Nigerian/African Short-Form Video Editors on Upwork: Live Data, 27 October 2026

**Method and data caveats (read first)**
- All data comes from live Upwork MCP calls made on 2026-10-27 (`find_freelancers` search and get_profile, org 2019193251887559564). No profile or number here was invented.
- **Queries run** (Nigeria filter unless noted, `limit` 12–25):
  - Q1 "short form video editor" (25)
  - Q2 "TikTok editor" (25)
  - Q3 "short form video editor", **global, Rising Talent filter** (25)
  - Q4 "video editor", Nigeria + Rising Talent (25)
  - Q5 "Reels editor" (15)
  - Q6 "short form video editor", **Africa region + Rising Talent** (20)
  - Q7 "YouTube Shorts editor" (15)
  - Q8 "UGC video editor" (12)
  - Q9 "CapCut video editor" (15)
  - Kenya and Ghana: "short form video editor" (10 each)
- **Rank** means the position in the API result list. That list is the API's ordering. It may not match what a logged-in client sees in the web UI.
- **Profile fields.** Full profiles (get_profile) were pulled for 22 freelancers: 19 Nigeria, 1 Kenya, 1 Tunisia, 1 Pakistan. The API returns title, overview, rate, skills, earnings bucket, job counts, feedback count, portfolio titles, consultation offer, video-intro URL and per-contract history (dates, $ earned, review comments).
- **Fields the API did not return:**
  - "Member since"
  - Catalog/Project Catalog listings and prices
  - JSS on the profile endpoint. JSS comes from search cards only.
- **Account-creation dates are inferred.** I estimated them by decoding each person_id as a Twitter-style snowflake ID (epoch 2010-11-04). Two things support this:
  - The decoded dates line up with each profile's education/employment record IDs and with the first contract dates.
  - The decoded month for Kehinde A. (Feb 2024) predates her first contract (Oct 2026), so nothing contradicts it.
  - Treat these dates as approximate (INFERENCE).
- **Badges.** "Top Rated / TR+" is as returned. "Rising Talent (RT)" means the profile came back under the `rising_talent:true` filter. "No badge shown" means the search card carried no badge field.
- **Search cards miscount jobs.** Their `completed_jobs` is unreliable. Example: Paula E.'s card says 1, her profile aggregates say 13. Job counts below come from profile aggregates (fixed + hourly).
- **Profile-key URLs** follow https://www.upwork.com/freelancers/~KEY

---

## Q1. The profiles: who broke in recently or is Nigerian/African, and what they show

### Takeaway
- **All 22 profiles pulled have recent jobs (2025–Oct 2026).**
- Nigerians dominate the Nigeria-filtered results, and most of them reached Top Rated quickly on many small contracts at $5–$25/hr.
- Newer accounts (created 2025–2026) are mostly Rising Talent or show no badge. Several landed first jobs within weeks of joining.

### Cited Findings

#### Nigeria: full profiles

**1. Isaac T.** — Lagos (state "LA"). [Profile](https://www.upwork.com/freelancers/~0188591cbb01c79e7a)
- **Title:** "YouTube Sports Video Editor | NBA, NFL, Shorts & Reels"
- **Rate and stats:** $10/hr; $1K+ earned; 40 jobs (38 fixed); 25 feedback; JSS 95 (search card); no badge shown.
- **Account:** est. created ~Sep 2025 (INFERENCE).
- **Contracts:** 33 total. All recent ones are tiny fixed jobs: $10, $20, $30, $50, $65, $70, $80, all Sep–Oct 2026.
- **Reviews:** "Isaac just completed his 2nd video for me… responsive and works diligently… met my deadlines"; "Amazing work!"
- **Overview opens:** "I edit sports videos that keep the story moving and the audience interested. From NBA player stories and NFL documentaries to game breakdowns, highlights, and YouTube Shorts…" The overview also claims "30+ completed Upwork projects".
- **Portfolio:** 22 items, all sports, e.g. "High-Impact NBA Highlight Edit for YouTube Sports Channel", "Patrick Mahomes | NFL YouTube Video Editing".
- **Video intro:** yes (YouTube).
- **Rank:** #1 in Q1, Q2, Q5, Q7 and Q9.

**2. Paula E.** — Federal Capital Territory (Abuja). [Profile](https://www.upwork.com/freelancers/~01ddfa32109e3c2789)
- **Title:** "Short-Form Video Editor | Reels, TikTok & Youtube Shorts, Talking-Head"
- **Rate and stats:** $15/hr; **Top Rated Plus**; $10K+; 13 jobs; 6 feedback.
- **Account:** est. ~Nov 2023.
- **Contracts:**
  - Biggest is a $10,135 fixed contract, "Short Form Video Editor for Boutique Hotel & Restaurant" (started Oct 2025, ongoing).
  - Small hourly jobs: $53.33 (Dec 2025), $40 (Apr 2026), $60 (Jul 2026).
- **Overview opens:** "Need a video editor to get on board immediately? I'm right here / Every day, thousands of videos are posted… but only a few actually hold attention." It names a client result ("Kachins, a fashion brand… gain thousands of followers").
- **Skills:** Content Creation, Instagram Reels, Video Editing, Social Media Content Creation, Content Development, TikTok, YouTube Shorts, Color Grading, Video Color Correction.
- **Portfolio:** 15 items, e.g. "Short-Form Video Editing | Talking Head Video for Dominique", "Short-Form Video Editing | Med Spa".
- **Rank:** Q1 #3, Q2 #12.

**3. Kazeem M.** — Lagos. [Profile](https://www.upwork.com/freelancers/~01a64ee7f64757a556)
- **Title:** "Video Editor | Short-Form, UGC & Meta/TikTok Video Ads"
- **Rate and stats:** $15/hr; no badge shown; $4K+; 27 jobs; 16 feedback; JSS 100 (card).
- **Account:** est. ~Dec 2022.
- **Contracts:** several $10 fixed jobs (May 2026) carry glowing reviews; also a "Sample Project" hourly contract worth $790 and "Reels as Ads" worth $1,230.
- **Review:** "He nailed the 'modern' editing style… He's become my go-to editor for all my TikTok and Shorts content."
- **Consultation:** "Marketing Consultation" from $10.
- **Portfolio:** 31 case-study style items, e.g. "Video Editor – 30 Ads for Meta & TikTok (Health & Fitness App)".
- **Video intro:** yes.
- **Rank:** Q1 #7, Q2 #4, Q8 #4.

**4. Oluwatoba A.** — Lagos. [Profile](https://www.upwork.com/freelancers/~01e3968da192142afa)
- **Title:** "Short-Form Video Editor | TikTok, Reels, YouTube Shorts & Ad Creatives"
- **Rate and stats:** $20/hr; Top Rated; $5K+; 24 jobs; 9 feedback.
- **Account:** est. ~Aug 2023.
- **Contracts:** hourly $1,083 and $1,020 ("Social Media Video Editor & Graphic Designer", Feb 2026); $1,855 fixed "YouTube Podcast Editor"; small $15–$67 fixed jobs.
- **Overview opens:** "I help creators, brands, and businesses turn raw footage into high-impact videos that hold attention…" It openly says "I primarily work with CapCut PC Pro".
- **Portfolio:** only 4 items.
- **Rank:** Q1 #13.

**5. Chinenyenwa E.** — Lagos. [Profile](https://www.upwork.com/freelancers/~0125c8b28b9f0edd19)
- **Title:** "Short-Form Video Editor & Content Repurposing Expert | TikTok, IG Reel"
- **Rate and stats:** **$5/hr**; Top Rated; $4K+; 14 jobs; 7 feedback.
- **Contracts:** biggest is hourly $2,352.50 over **784 hrs** ("Video Editor", Sep 2025–May 2026). That works out to about $3/hr effective.
- **Review:** "very clear communicator, works swiftly, and understands direction very well."
- **Portfolio:** includes off-niche items such as "Data entry for research" and "research for house listing".
- **Rank:** Q1 #14, Q2 #18.

**6. Jules** (surname not shown) — profile state oddly reads "CORSICA". [Profile](https://www.upwork.com/freelancers/~0166f124d0b7da15a2)
- **Title:** "Short-Form Video Editor | Reels, TikTok & AI-Assisted Ads"
- **Rate and stats:** $15/hr; Top Rated; $6K+; 27 jobs; 9 feedback.
- **Background:** a Django developer who pivoted. Backend contracts are still visible in his history.
- **Contracts:** "Sneaker Video Editor" hourly $983; "Instagram Reels Video Editor" $295.
- **Overview opens:** "🎬 Short-form edits built to hold attention past the first 3 seconds…"
  - "Proof, not promises" section: "30-40 videos a month for a fitness brand"; "Grew an Instagram creator's videos from averaging under 100 views to consistently 1,000+".
  - Offers a free sample: "Send one raw clip… we can start with a small trial batch."
- **Portfolio:** includes "Law Firm UGC Short-Form Video — Editing Breakdown", which shows the editing timeline.
- **Consultation:** "Development & IT" from $30.
- **Rank:** Q1 #15.

**7. Emmanuel O.** — Lagos. [Profile](https://www.upwork.com/freelancers/~019ec03943c3fca68c)
- **Title:** "Short-Form Video Editor | Personal Brands & E-commerce"
- **Rate and stats:** $25/hr; **Top Rated Plus**; $10K+; 14 jobs; 4 feedback.
- **Account:** est. ~Nov 2023.
- **Contracts:**
  - Earliest visible contract: $865, "Podcast Video Editor – YouTube Content Repurposing Specialist", Dec 2024–Jun 2025 (4.85★, long review).
  - A $265 "A Trial video" contract.
  - Then hourly $8,429.94 on "Short-Form TikTok Video Editor Needed (100 Videos/Month)" and $2,279 on "TikTok Shop Videos".
- **Overview opens with a pasted client quote**, then: "I helped grow a podcast channel from under 700 subscribers to over 45,000… One reel I edited hit 500K views in its first month."
- **Portfolio:** candid labels such as "This was one of the trial reels i edited that got me a full time role".
- **Rank:** Q1 #16.

**8. Hassan H.** — Kwara. [Profile](https://www.upwork.com/freelancers/~01b4b4ca061e6e0dba)
- **Title:** "YouTube & Short-Form Video Editor | Faceless Content Specialist"
- **Rate and stats:** $15/hr; Top Rated; $8K+; 11 jobs; 5 feedback.
- **Account:** est. ~May 2024.
- **Contract ladder:**
  - First contract: $15 "Instagram/TikTok Content creator" (Jul–Aug 2024).
  - Then $240 hourly (30 hrs at $8/hr), $140, $12, $55, $360.
  - Then a **$6,050** "Video editing" fixed contract (Jun 2025, ongoing) and $885 for news-explainer videos.
- **Overview opens:** "If you're here, it's because you're looking to give your videos a quality boost…" Claims "100+ videos… 3M+ views".
- **Portfolio:** 6 thin items, e.g. "ADS Video": "I edited this ads video for my client and they love it!"
- **Rank:** Q1 #6, Q2 #16, Q5 #14, Q7 #13, Q9 #4.

**9. Chris C.** — Lagos. [Profile](https://www.upwork.com/freelancers/~01a8ddc5785d734d2f)
- **Title:** "Video Editor | Reels, Shorts, TikToks, Courses | Edits That Hook"
- **Rate and stats:** $28/hr; no badge in the search card; $20K+; 72 jobs; 33 feedback; JSS 100.
- **Account:** est. ~Nov 2023. Veteran comparator.
- **Contracts:** hourly $3,215 "Short-Form Video Editor for Podcast Content"; $1,171 "Ads for Molly Baz".
- **Overview opens:** "Tired of video editors who don't get it? I understand!"
  - Includes a "FREEBIES" lead magnet: "200+ FREE proven viral storytelling templates… Hit 'Invite,' and I'll shoot it over".
  - Ends with an explicit keyword block ("P.S. I've included a keyword section below…").
- **Rank:** Q2 #5, Q5 #4.

**10. Ejiofor J.** — Ogun State. [Profile](https://www.upwork.com/freelancers/~0139b5152f85e4be35)
- **Title:** "AI UGC Ad | AI Video Ad | TikTok, Meta & Product Video"
- **Rate and stats:** $17/hr; **Top Rated within ~5 months**; $3K+; 23 jobs; 13 feedback.
- **Account:** est. ~May 2026.
- **Contracts:** hourly $1,995 "AI Content Creators" (133 hrs, Jul 2026); $350 "Video Commercial Creator for TV Remote"; many $4–$15 jobs.
- **Profile quirks:** 311 portfolio items; the overview repeats the same keyword paragraph 3×.
- **Rank:** Q1 #10, Q2 #11, Q8 #2, Q9 #6.

**11. Denis N.** — Ondo. [Profile](https://www.upwork.com/freelancers/~01f0f347d4cbb32569)
- **Title:** "Video Editor | YouTube, Reels, Shorts & Video Ads"
- **Rate and stats:** $10/hr; **Top Rated within ~1 year**; $1K+; 28 jobs; 18 feedback.
- **Account:** est. ~Sep 2025.
- **Niche:** book authors (trailers, launch reels). Also does book-cover design, which appears in the portfolio.
- **Contracts:** repeat author client at $40 and $60.
- **Review:** "Denis has now worked with us on several projects… dependable, creative".
- **Consultation:** from $50.
- **Video intro:** yes.
- **Rank:** Q2 #24, Q5 #11.

**12. Daniel A.** — Lagos. [Profile](https://www.upwork.com/freelancers/~01b2f40efc543ae46e)
- **Title:** "Social Media short form Video Editor |Youtube clipper & Podcast Videos"
- **Rate and stats:** $10/hr; no badge; $700+; 35 jobs; 15 feedback.
- **Account:** est. ~Oct 2024.
- **Profile quirks:** 120 portfolio items; roughly 100 invented-sounding employers (e.g. "ClipMaster Studio", "PodCut Pro", "HookFirst Agency"); about 10 "education" entries from generic institutes.
- **Overview:** a keyword dump of 70+ "✔️" lines.
- **Rank:** Q1 #18.

**13. Elizabeth P.** — Lagos. [Profile](https://www.upwork.com/freelancers/~0184d560f87841b932)
- **Title:** "Short Form Video Editor | Reels, Youtube Shorts, TikTok Video Editing"
- **Rate and stats:** $10/hr; no badge; $1K+; 21 jobs; 12 feedback; **JSS 77** (card).
- **Account:** est. ~Apr 2026.
- **Profile quirks:** 77 near-identical portfolio items; about 90 employment entries using job-post titles at real brands (McKinsey, Vice Media, Kellogg, Calm); the overview ends in hashtag lists.
- **Rank:** Q1 #24.

**14. Nawwal I.** — Kwara. [Profile](https://www.upwork.com/freelancers/~01570c8b3355d205e1)
- **Title:** "Instagram Reels Editor for Wellness Brands | UGC & Short-Form Video"
- **Rate and stats:** $10/hr; no badge shown; $3K+; 18 jobs; 2 feedback.
- **Account:** est. ~Apr 2025.
- **Contracts:**
  - Five $5 fixed contracts closed within days (Jan–Mar 2026).
  - One $5 contract (Sep 2026) carries a long, keyword-matching 5★ review.
  - Real earnings come from hourly work: $1,921.67 "AI-Driven UGC Content…" and $858 "AI Broll Generator for Handbag Brand".
- **Overview:** the only profile seen that **lists package prices** — "Starter: 8 Reels a month, $240 / Growth: 16 Reels a month, $440 / Scale: 24 Reels a month, $600". Also adds a Q4 hook: "As Q4 ramps up, you need Black Friday, Christmas…".
- **Rank:** Q1 #23.

**15. Kehinde A.** — Osun ("OS"). [Profile](https://www.upwork.com/freelancers/~01e0018f88194b4f97)
- **Title:** "Short-Form Video Editor & Clipper | TikTok, Reels & YouTube Shorts"
- **Rate and stats:** $5/hr; **Rising Talent**; $20+; 4 jobs; 2 feedback.
- **Contracts:** first short-form jobs Oct 2026 — **$10 + $10 + $5**. Before that her profile was a Klaviyo email-marketing profile (her earlier portfolio is email work).
- **Reviews:** "Kehinde found great hooks herself and the captions + cuts are super clean"; "did a great job finding the right moment from my long-form video".
- **Overview:** story-led, opens "You're streaming for hours, but barely anyone is watching." Niche: streamer/livestream clipping.
- **Consultation:** from $25.
- **Video intro:** yes.
- **Rank:** Q4 #6, Q6 #12.

**16. Farida U.** — Lagos. [Profile](https://www.upwork.com/freelancers/~0101d9820ed5d55f90)
- **Title:** "Short form Video Editor for social media"
- **Rate and stats:** $10/hr; Rising Talent; $300+; 2 jobs; 0 feedback.
- **Account:** est. **~Sep 2026**.
- **Contracts:** within ~5 weeks — $133 ("Need a Shorts editor for lifestyle content", Oct 6) and $260 ("Video Editor for Social Media Reels", Oct 12).
- **Overview claims:** "edited 100+… videos… up to 400K+ views… 25 short videos within two days".
- **Portfolio:** includes "TEST VIDEO FOR CLIENT": "The client sent in raw footages to text my editing skills… and he hired me immediately!"
- **Rank:** Q4 #12, **Q6 #2**.

**17. Olamide A.** — Osun. [Profile](https://www.upwork.com/freelancers/~011a9d4457e19e93e3)
- **Title:** "Short-Form Video Editor for TikTok, Instagram Reels & YouTube Shorts"
- **Rate and stats:** $10/hr; Rising Talent; $200+; 3 jobs; 1 feedback.
- **Account:** est. ~Aug 2026.
- **Contracts:** first review is on a $10 job (Oct 2026); hourly $249 (Sep 2026).
- **Profile quirks:** education "Master of Divinity" at "Google Cloud Skills Boost"; about 100 employment rows listing real corporations (Nike, Hilton, Wells Fargo) next to job-post titles.
- **Rank:** Q4 #10, Q6 #11.

**18. Chioma U.** — Niger ("NI"). [Profile](https://www.upwork.com/freelancers/~012ba44ebed2200d02)
- **Title:** "Short Form Video Editor | YouTube Short, Instagram Reels, TikTok Video"
- **Rate and stats:** $5/hr; Rising Talent; $300+; 1 job (hourly, 30 hrs = $300, "Personal branding – Creative Producer", started Oct 20 2026); 0 feedback.
- **Account:** est. **~Oct 2026**, i.e. hired within days of joining.
- **Overview:** quotes a 5★ "review" that does not exist on-platform (0 feedback). Asks clients to start messages with "🚀 [VIDEO GODDESS]".
- **Profile quirks:** 53 portfolio items naming brands (YoungLA, Medicube); about 75 employment rows.
- **Rank:** Q6 #20.

**19. Roland U.** — Edo. [Profile](https://www.upwork.com/freelancers/~01ed9161e51549429a)
- **Title:** "AI Video Creator | AI UGC & Avatar Video Ads | Veo Higgsfield HeyGen"
- **Rate and stats:** $12.50/hr; Rising Talent; $600+; 11 jobs; 6 feedback.
- **Account:** est. ~Nov 2025.
- **Contracts:** $15 AI short-form (Mar 2026, long 5★ review); $250 off-niche "Notion Template"; $20 (4★); $150; $75; repeat client at $38.50 and $35.
- **Review:** "A very, very skilled freelancer for cinematic videos".
- **Rank:** **Q4 #1**, Q6 #6.

#### Africa outside Nigeria: full profiles

**20. Victor K.** — Nairobi, Kenya. [Profile](https://www.upwork.com/freelancers/~01c65d90d1725138bf)
- **Title:** "Short-Form Video Editor for TikTok, Reels & YouTube Shorts"
- **Rate and stats:** $20/hr; no badge shown; $3K+; 5 jobs; 1 feedback; JSS 100.
- **Account:** est. ~Aug 2024.
- **Contracts:** $2,660 "Video Editor Needed for History/Documentary YouTube Channel" and $500 "Faceless YouTube Video Editor ($20 per Video)", both Feb 2026.
- **Portfolio:** claims "Result: 590K views on YouTube" on a faceless Short.

**21. Oubaid B.** — Jundubah, Tunisia. [Profile](https://www.upwork.com/freelancers/~01e1cbd2f30c680fa5)
- **Title:** "Short-Form Video Editor | Meta Ads, Dental Clinics & Podcast Reels"
- **Rate and stats:** $10/hr; Rising Talent; $400+; 6 jobs; 4 feedback.
- **Account:** est. ~Jun 2026.
- **Contract ladder:** "Video editing Test" $15 (Jul 29 2026) → "2 Talking head videos with B-roll" $30 → "5 Videos" $75 → $120 → $160 (repeat client).
- **Niche:** dental clinics. About 10 of his 19 portfolio pieces are dental.
- **Video intro:** yes.
- **Rank:** Q6 #18.

#### Comparator outside Africa: full profile

**22. Dua D.** — Sindh, Pakistan. [Profile](https://www.upwork.com/freelancers/~0130d0b5925f90fb17)
- **Title:** "Short-Form Video Editor for TikTok, Instagram Reels & YouTube Shorts"
- **Rate and stats:** $20/hr; Rising Talent; $2K+; 21 jobs; 9 feedback.
- **Account:** est. ~Aug 2026.
- **Contracts:** 20 within ~2 months, mostly $10–$30 fixed, including a $20 "Test video to see skill set", plus hourly $243 and $157.
- **Portfolio:** "Before/After" thumbnails.
- **Rank:** **Q3 (global RT) #1**.

#### Kenya and Ghana: search cards only

- **Ken K.**, Kenya: "Short-Form Video Editor | Graphic Designer | Logo Designer". $18/hr, Top Rated, $20K+.
- **Brian K.** (Kenya, $10), **Fidel O.** (Kenya, $15), **Christopher A.** (Ghana, $5), **Raindolf O.** (Ghana, $5): short-form titles but no earnings.
- **Ebenezer A.**, Ghana: "Short-Form Video Editor | YouTube Shorts, Reels & TikTok". $8/hr, $200+.
- **James N.**, Ghana: $19/hr, JSS 74, $4K+.
- Sources: [Kenya query cards](https://www.upwork.com/freelancers/~019d189e17439571ac); [Ghana card](https://www.upwork.com/freelancers/~01a24c8f1890496742).

### Inferences
- **Fast breakouts are real.** Six accounts created in Aug–Oct 2026 already had paid contracts by Oct 27: Farida, Olamide, Chioma, Dua, Oubaid and Ejiofor (Ejiofor's account is ~May 2026). For Farida and Chioma, the first contract came within roughly 1–5 weeks of joining (INFERENCE from decoded IDs).
- **Nigerian supply is deep.** It is also skewing toward "AI UGC / AI Video Creator" positioning: about 13 of 25 Q4 Rising-Talent titles lead with "AI Video Creator" or "AI UGC".

### Gaps
- The API did not return "member since", Project Catalog listings/prices, or full review text for every contract (only the 10 most recent are shown).
- Favour I. ($8K+, "Talking Head Reels, TikTok & Podcast Clips") has an "upwork_users_only" profile and was not fetched.

---

## Q2. How the newest successful editors landed their first jobs

### Takeaway
The dominant pattern is a **ladder of tiny fixed-price jobs ($5–$30), often labeled "test", inside one clear niche.** Those jobs produce fast 5★ reviews and repeat hires. Larger hourly retainers ($250–$8,000+) came later, sometimes from a client who started with a paid trial.

### Cited Findings
- **Oubaid B.** (Tunisia, RT, ~Jun 2026): $15 "Video editing Test" → $30 → $75 → $120 → $160 within ~11 weeks, every one 5★. Reviews: "Quick turnaround and revision", "Will for sure work more with him". [Profile](https://www.upwork.com/freelancers/~01e1cbd2f30c680fa5)
- **Dua D.** (Pakistan, RT, ~Aug 2026): 20 contracts in ~2 months at $10–$30 fixed, including "Test video to see skill set" ($20). Larger hourly contracts ($243, $157) came alongside. [Profile](https://www.upwork.com/freelancers/~0130d0b5925f90fb17)
- **Isaac T.** (Nigeria, no badge, ~Sep 2025): 40 jobs, nearly all fixed $10–$80, in one niche (NBA/NFL sports YouTube). Clients re-hire. Review: "Isaac just completed his 2nd video for me". [Profile](https://www.upwork.com/freelancers/~0188591cbb01c79e7a)
- **Hassan H.** (Nigeria, ~May 2024): first job $15 (Jul 2024) → $240 hourly at about $8/hr → $140 → $360 → a $6,050 fixed contract about 11 months after joining. [Profile](https://www.upwork.com/freelancers/~01b4b4ca061e6e0dba)
- **Emmanuel O.** (Nigeria, TR+): a $265 "A Trial video" contract, and a portfolio piece labeled "one of the trial reels i edited that got me a full time role". The biggest contract is hourly $8,429.94 on a "100 Videos/Month" TikTok role. [Profile](https://www.upwork.com/freelancers/~019ec03943c3fca68c)
- **Kehinde A.** (Nigeria, RT): first short-form jobs were $10 "Short Form Video Clipper Needed – $10 Per Long Video" and $10 "Short-Form Video Editor Needed for 1 YouTube Clip". Both closed within 1–2 days with detailed 5★ reviews. [Profile](https://www.upwork.com/freelancers/~01e0018f88194b4f97)
- **Farida U.** (Nigeria, RT, ~Sep 2026): portfolio "TEST VIDEO FOR CLIENT… he hired me immediately". Two contracts ($133, $260) within ~5 weeks. [Profile](https://www.upwork.com/freelancers/~0101d9820ed5d55f90)
- **Roland U.** (Nigeria, RT): first video job $15 (Mar 2026) earned a long 5★ review. A repeat "Murder Mystery Games" client then paid $38.50 and $35. [Profile](https://www.upwork.com/freelancers/~01ed9161e51549429a)
- **Kazeem M.:** $10 jobs in May 2026 earned rich reviews ("He's become my go-to editor…"). His biggest recent income is an hourly "Sample Project" contract ($790). [Profile](https://www.upwork.com/freelancers/~01a64ee7f64757a556)
- **Niche anchoring:**
  - Denis N. (book-author promos; repeat client at $40/$60; Top Rated within ~1 year). [Profile](https://www.upwork.com/freelancers/~01f0f347d4cbb32569)
  - Oubaid (dental clinics).
  - Isaac (NBA/NFL).
  - Nawwal (wellness brands).
  - Victor K. (faceless history YouTube; $2,660 contract). [Profile](https://www.upwork.com/freelancers/~01c65d90d1725138bf)
- **Free or low-cost sample offers in the overview:**
  - Jules: "Send one raw clip or a reference video you like… we can start with a small trial batch." [Profile](https://www.upwork.com/freelancers/~0166f124d0b7da15a2)
  - Chris C.: a free "200+ viral storytelling templates" lead magnet. [Profile](https://www.upwork.com/freelancers/~01a8ddc5785d734d2f)
- **Package pricing as a substitute for catalog listings:** Nawwal I. lists "8 Reels a month, $240 / 16 Reels $440 / 24 Reels $600" in her overview. [Profile](https://www.upwork.com/freelancers/~01570c8b3355d205e1)
- **Reviews praise** responsiveness, speed, following direction, hooks, captions and "clean cuts" far more than artistic flair. Examples above: Kehinde, Chinenyenwa, Oubaid, Isaac.

### Inferences
- **For Harry ($18/hr, no reviews):** the observed path is to bid on $10–$30 fixed "test"/"1 clip" jobs in one narrow niche, deliver within 24–48h, and convert those clients into repeat or hourly work. His $18 profile rate matters less than his willingness to take small fixed tests at first. Most newcomers list $5–$15/hr.
- **Clients reviewing these freelancers frequently post explicit paid-test jobs** ("Video editing Test", "Test video to see skill set", "A Trial video", "Sample Project"). Applying to test-labeled posts looks like a reliable entry route.

### Gaps
- Proposal text, Connects spend and invite-vs-proposal origin are not visible, so I cannot confirm whether first jobs came from proposals, invites or Boosted profiles.
- Catalog sales could not be checked; the API returned no catalog data.

---

## Q3. Rates Nigerian editors charge vs. what they earn

### Takeaway
- Nigerian short-form editors in these results list **$5–$28/hr, with a strong cluster at $10–$15**.
- Profile rate is weakly linked to earnings. The top earners ($10K–$50K+) mostly list $15–$25, and large totals come from one or two long hourly or fixed retainers. Effective hourly pay on big retainers can sit far below the profile rate.

### Cited Findings

**Rate and earnings (profile data)**

| Freelancer | Rate | Earnings | Jobs | Badge |
|---|---|---|---|---|
| Chinenyenwa E. | $5 | $4K+ | 14 | TR |
| Kehinde A. | $5 | $20+ | 4 | RT |
| Chioma U. | $5 | $300+ | 1 | RT |
| Emmanuel E. | $5 | $20K+ | — | TR (search card) |
| Isaac T. | $10 | $1K+ | 40 | none |
| Denis N. | $10 | $1K+ | 28 | TR |
| Daniel A. | $10 | $700+ | 35 | none |
| Elizabeth P. | $10 | $1K+ | 21 | none |
| Nawwal I. | $10 | $3K+ | 18 | none |
| Farida U. | $10 | $300+ | 2 | RT |
| Olamide A. | $10 | $200+ | 3 | RT |
| Roland U. | $12.50 | $600+ | 11 | RT |
| Paula E. | $15 | $10K+ | 13 | TR+ |
| Kazeem M. | $15 | $4K+ | 27 | none |
| Jules | $15 | $6K+ | 27 | TR |
| Hassan H. | $15 | $8K+ | 11 | TR |
| Ejiofor J. | $17 | $3K+ | 23 | TR |
| Oluwatoba A. | $20 | $5K+ | 24 | TR |
| Emmanuel O. | $25 | $10K+ | 14 | TR+ |
| Chris C. | $28 | $20K+ | 72 | — |

Sources: profile links in Q1.

**Search-card-only rates (Q1/Q2):**
- Anu F.: $15, TR+, $50K+
- Ayomide O.: $20, TR+, $50K+
- Edmond O.: $25, TR+, $100K+
- Ebenezer M.: $25, TR+, $50K+
- Peter A.: $15, TR, $60K+

**Effective rates on big contracts:**
- Chinenyenwa: $2,352.50 for 784.17 hrs ≈ $3.00/hr. [Profile](https://www.upwork.com/freelancers/~0125c8b28b9f0edd19)
- Hassan: $240 for 30 hrs = $8/hr. [Profile](https://www.upwork.com/freelancers/~01b4b4ca061e6e0dba)
- Emmanuel O.: $8,429.94 for 358.8 hrs ≈ $23.5/hr. [Profile](https://www.upwork.com/freelancers/~019ec03943c3fca68c)
- Ejiofor: $1,995 for 133 hrs = $15/hr. [Profile](https://www.upwork.com/freelancers/~0139b5152f85e4be35)

**Concentration in a single contract:**
- Paula E.: $10,135 of her $10K+ came from one fixed contract. [Profile](https://www.upwork.com/freelancers/~01ddfa32109e3c2789)
- Hassan: $6,050 of $8K+ came from one contract.

**Other markets:**
- Kenya: Victor K. $20/hr; Ken K. $18/hr, TR, $20K+.
- Ghana: listed rates range from $5 to $59.73. Most Ghana profiles found had little or no earnings.

### Inferences
- **Harry's $18/hr sits above the Nigerian newcomer median (~$10) but within the range of successful Nigerian Top Rated editors ($15–$25).** Keeping $18 as the profile rate while taking small fixed-price tests mirrors Kazeem ($15 rate, $10 tests) and Ejiofor ($17 rate, $5–$15 jobs).
- **Very low listed rates ($5) did not yield higher earnings** in this sample. The $5 accounts range from $20+ to $4K+.

### Gaps
- Earnings come only as buckets ("$4K+"). Exact lifetime totals and hours are not available beyond the 10 most recent contracts.

---

## Q4. Title, overview and skills patterns: newcomers vs. veterans

### Takeaway
- **Newcomers converge on one title template:** "Short-Form Video Editor | TikTok, Instagram Reels & YouTube Shorts".
- **The fastest risers attach a niche or buyer to the title.**
- **Veterans and high earners** use audience or outcome titles ("Performance Video Editor | Paid Ads…", "Ad Creative Editor for Agencies…") and proof-first overviews built around named results.

### Cited Findings

**Generic platform-list titles (newer or low-earning):**
- Olamide A.: "Short-Form Video Editor for TikTok, Instagram Reels & YouTube Shorts"
- Chioma U.: "Short Form Video Editor | YouTube Short, Instagram Reels, TikTok Video"
- Elizabeth P.: "Short Form Video Editor | Reels, Youtube Shorts, TikTok Video Editing"
- Farida U.: "Short form Video Editor for social media"
- Dua D.: same template, but $2K+
- In Kenya and Ghana: Victor K., Brian K., Fidel O., Ebenezer A. and Christopher A. use near-identical titles.

**Niche titles among fast risers:**
- "YouTube Sports Video Editor | NBA, NFL, Shorts & Reels" (Isaac)
- "Short-Form Video Editor | Meta Ads, Dental Clinics & Podcast Reels" (Oubaid)
- "Instagram Reels Editor for Wellness Brands | UGC & Short-Form Video" (Nawwal)
- "Short-Form Video Editor | Personal Brands & E-commerce" (Emmanuel O., TR+)

**Veteran / high-earner titles (search cards):**
- Ayomide O. ($50K+): "Performance Video Editor | Paid Ads, Short-Form & YouTube Content"
- Ebenezer M. ($50K+): "Ad Creative Editor for Agencies | High-Volume Meta & TikTok Ads"
- Edmond O. ($100K+): "Direct Response, UGC, AI, VSL Ads Creative Director & Video Editor"
- Anu F. ($50K+): "Video Editor & AI Filmmaker | YouTube, Podcasts & AI Video"

**Overview structure in the stronger profiles:**
1. A pain or story hook in the first line.
   - Kehinde: "You're streaming for hours, but barely anyone is watching."
   - Paula: "Need a video editor to get on board immediately? I'm right here."
   - Jules: "Short-form edits built to hold attention past the first 3 seconds."
2. Quantified proof (Emmanuel O.: 700 → 45,000 subscribers, a 500K-view reel; Jules: 30–40 videos/month, <100 → 1,000+ views).
3. A services bullet list.
4. A tools line (CapCut, Premiere, DaVinci, Descript; AI tools such as Higgsfield, ElevenLabs, Veo, Kling).
5. A low-risk call to action (trial clip, free templates, "send one raw clip").

**Pasted client reviews in the overview:** Emmanuel O. and Kazeem M. both quote real 5★ reviews that also appear in their work history.

**Skills, near-universal among newcomers:** Video Editing, Instagram Reels, TikTok Video, YouTube Shorts, Short Video, CapCut, Social Media Video, Adobe Premiere Pro. Many newer Nigerian accounts add AI Video Generation, UGC, ai video ads, Seedance and higgsfield (Ejiofor, Roland, Olamide; 13 of 25 Q4 titles).

**Video intros** were present for Isaac, Kazeem, Jules, Kehinde, Denis, Hassan, Ejiofor, Roland, Oubaid and Dua. They were absent or empty for Chris C., Paula, Farida, Chioma and Elizabeth.

### Inferences
- The generic short-form title is crowded. In the global Rising Talent search (Q3), 7 of the top 25 titles are variants of "Short-Form Video Editor… TikTok/Reels/Shorts", and none of the 25 is Nigerian.
- Adding a niche, buyer type or ad-performance angle appears to be the main differentiator among fast risers (INFERENCE from rank and contract evidence, not proven causation).

### Gaps
- I could not measure title effect on click-through or invites. Search ranks also reflect JSS, earnings and other hidden signals.

---

## Q5. Where Nigerian editors rank per query, and what the top Nigerians share

### Takeaway
- **Within Nigeria-filtered searches,** a small set recurs at the top across queries: Isaac T., Emmanuel E., Anu F., Paula E., Hassan H., Kazeem M., Ayomide O. and Alonge T.
- **In the global Rising Talent search, no Nigerian appeared in the top 25.** In the Africa Rising Talent search, Nigerians held 8 of 20 slots (Farida #2).

### Cited Findings

**Q1 "short form video editor" (Nigeria), ranks 1–16:**
1. Isaac T.
2. Favour I.
3. Paula E.
4. Anu F.
5. Emmanuel E.
6. Hassan H.
7. Kazeem M.
8. Ayomide O.
9. Alonge T.
10. Ejiofor J.
11. God'swill A.
12. Joy J.
13. Oluwatoba A.
14. Chinenyenwa E.
15. Jules
16. Emmanuel O.

Further down: Daniel A. #18, Nawwal I. #23, Elizabeth P. #24. [Isaac](https://www.upwork.com/freelancers/~0188591cbb01c79e7a)

**Q2 "TikTok editor" (Nigeria), ranks 1–5:** Isaac T., Emmanuel E., Anu F., Kazeem M., Chris C. Also: Paula E. #12, Hassan H. #16, Chinenyenwa E. #18, Denis N. #24.

**Q5 "Reels editor" (Nigeria), ranks 1–5:** Isaac T., Emmanuel E., Anu F., Chris C., Favour I. Also: Denis N. #11, Paula E. #12, Hassan H. #14.

**Q7 "YouTube Shorts editor" (Nigeria), ranks 1–4:** Isaac T., Anu F., Emmanuel E., Ayomide O. Also: Kolade S. #10, Paula E. #11.

**Q8 "UGC video editor" (Nigeria), ranks 1–4:** God'swill A., Ejiofor J., Emmanuel E., Kazeem M. The list is dominated by "AI UGC" titles.

**Q9 "CapCut video editor" (Nigeria), ranks 1–4:** Isaac T., Emmanuel E., God'swill A., Hassan H.

**Q4 Rising Talent "video editor" (Nigeria), ranks 1–3:** Roland U., Olasina D., Michael A. Also: Kehinde A. #6, Olamide A. #10, Farida U. #12.

**Q6 Africa + Rising Talent, ranks 1–3:** Sameh M. (Egypt), Farida U. (Nigeria), Zee E. (Egypt). Nigerians also hold #6, #7, #11, #12, #14, #15 and #20. Others in the list: Ethiopia, Morocco, South Africa, Tunisia (Oubaid #18).

**Q3 global Rising Talent:** Pakistan, Vietnam and Bangladesh dominate. Egypt's Sameh M. at #15 is the only African; there are no Nigerians.

### Inferences
**What the recurring top Nigerians have in common:**
- Short-form/Reels/Shorts/TikTok keywords appear in both title and skills.
- JSS 93–100.
- Many jobs; Isaac has 40, mostly tiny.
- Usually a Top Rated/TR+ badge. Isaac is the exception: he ranks #1 with no badge, which suggests volume of recent jobs and keyword match outweigh the badge (INFERENCE).
- A clear niche: Isaac is sports-only.

The Nigerian-filtered pool for short-form is large (hasMore was true on every query). Harry's competition is mainly other Nigerians with 10–40 small jobs.

### Gaps
- Rankings are a single snapshot from the API and may differ from the logged-in client UI, personalized results, or Boosted placements. No result in these queries was flagged `boosted`.

---

## Q6. Red flags and weak profiles, and how they perform

### Takeaway
Several new Nigerian profiles show heavy profile-padding:
- Dozens or hundreds of fabricated-looking employment rows, sometimes naming Fortune-500 brands or reusing Upwork job-post titles.
- Keyword-dump overviews.
- 50–311 near-duplicate portfolio items.
- Testimonials with no matching feedback.

Some padded profiles still win small jobs. The cleaner, niche, proof-based profiles hold the larger contracts.

### Cited Findings
- **Padded employment with job-post titles or big-brand names:**
  - Olamide A.: rows such as "Halliburton / Short-Form Podcast Video Editor | Manual Editing Only" and Nike, Hilton, Wells Fargo; education "Master of Divinity" at "Google Cloud Skills Boost". Result: $200+, 3 jobs. [Profile](https://www.upwork.com/freelancers/~011a9d4457e19e93e3)
  - Kehinde A.: rows such as "Halliburton", "Giant Eagle", "GameStop" next to titles like "Clip Finder NEEDED for Popular Compilation YouTube Channel!". [Profile](https://www.upwork.com/freelancers/~01e0018f88194b4f97)
  - Elizabeth P.: rows naming McKinsey, Vice Media, Kellogg and Calm. Result: $1K+ but **JSS 77**. [Profile](https://www.upwork.com/freelancers/~0184d560f87841b932)
  - Chioma U.: about 75 rows. [Profile](https://www.upwork.com/freelancers/~012ba44ebed2200d02)
  - Roland U.: about 80 rows. [Profile](https://www.upwork.com/freelancers/~01ed9161e51549429a)
  - Daniel A.: about 100 invented agency names. [Profile](https://www.upwork.com/freelancers/~01b2f40efc543ae46e)
  - Kazeem M.: about 100 rows. [Profile](https://www.upwork.com/freelancers/~01a64ee7f64757a556)
  - Ejiofor J.: about 100 rows using his own profile titles as company names. [Profile](https://www.upwork.com/freelancers/~0139b5152f85e4be35)
- **Keyword stuffing:**
  - Ejiofor repeats a 60-term keyword paragraph three times. He is nonetheless Top Rated with $3K+.
  - Daniel A. has 70+ check-mark lines plus a pipe-separated keyword list. Result: $700+ after 35 jobs (≈$20/job).
  - Elizabeth and Farida end their overviews in hashtag lists.
  - Chris C. (a veteran) labels his keyword block openly as "metadata".
- **Unverifiable testimonial:** Chioma's overview quotes a detailed 5★ review while her profile shows 0 feedback and 1 contract. [Profile](https://www.upwork.com/freelancers/~012ba44ebed2200d02)
- **Suspicious micro-contracts:** Nawwal I. has five $5 fixed contracts closed within 1–3 days, several with no feedback. A $5 contract carries a long review that echoes her overview's wording ("clear communicator… detail-oriented… solution oriented… accountable"). [Profile](https://www.upwork.com/freelancers/~01570c8b3355d205e1)
- **Off-niche or thin portfolios:**
  - Chinenyenwa's portfolio includes "Data entry for research".
  - Kehinde's early portfolio is Klaviyo email design.
  - Hassan's 6 items carry one-line descriptions ("they love it!"). He still earned $8K+, mostly from one client.
- **Low-JSS outcome:** Elizabeth P. (21 jobs in ~6 months) has JSS 77 on her search card, and Favour I. has JSS 83. Both use generic titles.
- **Ghana/Kenya generic titles without earnings:** Raindolf O. ($5), Christopher A. ($5), Brian K. ($10) and Fidel O. ($15) all carry standard short-form titles and show no earnings on their cards.

### Inferences
- **Padding does not prevent small wins.** Several padded profiles have 1–23 contracts. But the padded group skews to low lifetime earnings ($20–$3K) and in one case a low JSS. The clean, niche, proof-led profiles hold the big retainers: Paula $10K+, Emmanuel O. $10K+, Hassan $8K+, Victor $3K+ from 5 jobs.
- **Account risk (INFERENCE, not verified with Upwork policy in this research):**
  - Listing employers the freelancer did not work for, or fabricated reviews, risks an account flag.
  - Paying for $5 self-arranged contracts would breach Upwork's feedback-manipulation rules.
  - **Harry should avoid all of these.**

### Gaps
- I could not verify whether any listed employment or $5 contract is fabricated. These are patterns only.
- Upwork Terms of Service text was not retrieved in this research.
