# Top short-form video editors on Upwork: live profile dataset and positioning analysis (October 2026)

**Data provenance (applies to every finding below).** All data was pulled live on **2026-10-27** through the Upwork MCP connector (`find_freelancers` `search` and `get_profile`, org_uid 2019193251887559564, read-only). Search results are what a client account on that org sees, without location or personalisation filters. Each profile is cited by its public URL, `https://www.upwork.com/freelancers/~<key>`. Search results are cited as "[Search: <query>]". Exact text is quoted verbatim. Anything inferred is marked **(inferred)**.

**Fields the API did NOT return (so they are absent for every profile):**
- Upwork "member since" date
- Total hours billed
- JSS on the profile record (JSS comes only from search rows)
- Language list
- Certifications section
- Project Catalog listings and prices
- Most review texts. `work_history` returns only the 10 most recent contracts, and most of those are still active, so no review is attached yet.

Where a value comes from a different source (for example a freelancer's own overview), the finding says so. Every one of the 200 rows from the 8 main search queries had `boosted:false`, so no paid ad placements distort the rankings below.

[S-SF]: Search "short form video editor" (limit 25)
[S-TT]: Search "TikTok video editor"
[S-RE]: Search "Reels editor"
[S-YS]: Search "YouTube Shorts editor"
[S-UGC]: Search "UGC video editor"
[S-CC]: Search "CapCut editor"
[S-VCC]: Search "video editor for content creators"
[S-POD]: Search "podcast clips editor"
[S-NG]: Search "short form video editor", country=Nigeria (limit 15)

---

## Q1. Dataset: 25 established short-form editor profiles (who they are, their stats and their profile elements)

### Takeaway
The 25 profiles pulled are overwhelmingly Top Rated Plus (21 of 25). Most earned $50K–$1M+ across 82–1,499 total jobs, yet their hourly rates are low (median $19.99/hr, range $5–$34). They come mostly from Pakistan (13), Vietnam (2), Bangladesh (2), the Philippines (2), Nigeria (3), Ukraine, Canada and the US. Almost all are active right now: most show 3–10 new contracts started in October 2026, and those contracts are typically small per-video fixed-price jobs ($15–$540).

### Cited Findings

**Summary table.** "Jobs" = profile `totalJobs` (fixed + hourly). "Fb" = number of feedback entries. "Contracts" = the work-history total. JSS comes from search rows. "Vid" = video intro. "Cons" = paid consultation offered (with its starting price).

| # | Name | Country | Title (exact) | Rate | Earned | Badge | JSS | Jobs (F/H) | Fb | Vid | Cons | Portfolio items | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Reid N. | USA (CA) | Short Form Video Editor \| Ads That Actually Convert | $30 | $100K+ | TR+ | 100 | 351 (221/130) | 137 | Y | N | 1 | [~0153fee2c2e51fddb1](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1) |
| 2 | Khoa Nguyen B. | Vietnam | Video Editor ( YouTube, Instagram Reels, Short-Form ) | $16 | $100K+ | TR+ | 99 | 479 (363/116) | 151 | Y | N | 17 | [~017142a33a9cd51e6b](https://www.upwork.com/freelancers/~017142a33a9cd51e6b) |
| 3 | Serhii K. | Ukraine | Short-Form Video Editor \| Ads, Meta Reels, UGC | $28 | $100K+ | TR+ | 100 | 166 (67/99) | 96 | Y | Y $100 | 41 | [~01d85999f0a93aadf9](https://www.upwork.com/freelancers/~01d85999f0a93aadf9) |
| 4 | Syed Muhammad A. | Pakistan | Short-Form Video Editor \| UGC Ads \| VSL \| Reels & TikTok \| Get Sales | $19.99 | not returned (overview: "$60K+") | TR+ | 98 | 318 (238/80) | 135 | Y | N | 16 | [~0172a72d3c9bbeca91](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91) |
| 5 | Rahool T. | Pakistan | Top 1 Percent Professional Video Editor | $10 | $200K+ | TR+ | 100 | 1,218 (773/445) | 753 | Y | Y $10 | 40 | [~0188d110886cca6ed1](https://www.upwork.com/freelancers/~0188d110886cca6ed1) |
| 6 | Yevhen B. | Canada | Video Editor \| YouTube, TikTok, IG Reels & AI Video | $34 | $1M+ | TR+ | 100 | 1,499 (1393/106) | 1,065 | Y | Y $30 | 452 | [~01a65fce2994811b62](https://www.upwork.com/freelancers/~01a65fce2994811b62) |
| 7 | Shams Y. | Pakistan | Short-Form Video Editor \| High-Retention Reels, TikTok & Shorts | $15 | $40K+ | TR+ | 100 | 98 (69/29) | 44 | Y | N | 9 | [~017efce70163499b54](https://www.upwork.com/freelancers/~017efce70163499b54) |
| 8 | Khizar S. | Pakistan | AI Video Editor \| UGC & AI Avatar Ads for Meta, TikTok,Intagram & DTC | $19.99 | $100K+ | TR+ | 100 | 462 (388/74) | 149 | Y | Y $10 | 34 | [~013a1069f3537cc8e5](https://www.upwork.com/freelancers/~013a1069f3537cc8e5) |
| 9 | Tarun G. | India | Top Rated Video Editor \| Instagram/TikTok Reels and YouTube Videos | $20 | $80K+ | TR+ | 93 | 291 (163/128) | 154 | N | N | 2 | [~01e797aa302e0e51dc](https://www.upwork.com/freelancers/~01e797aa302e0e51dc) |
| 10 | Val M. | Philippines | Senior AI Video Editor \| UGC & DTC Ads That Convert (TikTok & Meta Ad) | $29.99 | $100K+ | TR+ | 100 | 98 (58/40) | 24 | N | N | 22 | [~0167007f1fbab4e0c8](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8) |
| 11 | Hafsa H. | Pakistan | YouTube Video Editor \| Reels, Shorts & Motion Graphics | $5 | $70K+ | TR+ | 90 | 508 (364/144) | 236 | N | N | 61 | [~01839f946ded0eeacf](https://www.upwork.com/freelancers/~01839f946ded0eeacf) |
| 12 | Faraz M. | Pakistan | Shorts & Reels \| Video Editor \| YouTube Videos \| VSL \| AI Videos | $20 | $100K+ | TR+ | 99 | 566 (413/153) | 260 | N | Y $50 | 4 | [~01520d25d1f66f5703](https://www.upwork.com/freelancers/~01520d25d1f66f5703) |
| 13 | Hammad H. | Pakistan | Real Estate & Contractors Video Editor \| Reels, VSLs & Podcast | $15 | $100K+ | TR+ | 96 | 361 (229/132) | 171 | Y | Y $50 | 27 | [~01e69c3cf80eef0e45](https://www.upwork.com/freelancers/~01e69c3cf80eef0e45) |
| 14 | Ammad R. | Pakistan | AI Video Ads & UGC Editor \| Scroll-Stopping Ads for DTC Brands | $19 | $100K+ | none returned | 100 | 249 (216/33) | 119 | Y | Y $75 | 16 | [~01af61047f5376d415](https://www.upwork.com/freelancers/~01af61047f5376d415) |
| 15 | Hani A. | Pakistan | Short Form Video Editor \| Ads That Convert, AI UGC Reels, Shorts & VSL | $25 | $100K+ | TR | 96 | 446 (238/208) | 144 | Y | Y $30 | 21 | [~0103fb9cd267199589](https://www.upwork.com/freelancers/~0103fb9cd267199589) |
| 16 | Shamima K. | Bangladesh | Video Editor \| YouTube Video Editor \| Reels, Shorts, TikTok & Ads | $15 | $100K+ | TR+ | 95 | 572 (443/129) | 233 | N | Y $150 | 12 | [~01ae341509f3a4484f](https://www.upwork.com/freelancers/~01ae341509f3a4484f) |
| 17 | Fahad T. | Pakistan | Podcast Video Editor \| YouTube Podcast Specialist | $27 | $200K+ | TR+ | 100 | 253 (101/152) | 87 | Y | N | 6 | [~01d11ab1b86ae99b3d](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d) |
| 18 | Christopher G. | Philippines | EXPERIENCED Video Editor \| Shorts \| UGC,Meta Ads and Podcast Videos | $30 | not returned | TR+ | 100 | 322 (165/157) | 140 | N | N | 5 | [~017a268103c52cb2db](https://www.upwork.com/freelancers/~017a268103c52cb2db) |
| 19 | Vo N. | Vietnam | Video Editor \| YouTube, Tiktok, IG, LinkedIn \| Long & Short Form | $30 | $60K+ | TR+ | 99 | 140 (98/42) | 49 | Y | Y $100 | 18 | [~0164bae49ec98f51a9](https://www.upwork.com/freelancers/~0164bae49ec98f51a9) |
| 20 | Abdullah D. | Pakistan | Talking-Head Video Editor \| YouTube, VSL & Reels \| Motion Graphics | $30 | $50K+ | TR | 100 | 360 (243/117) | 141 | Y | N | 6 | [~0169d35b8373416546](https://www.upwork.com/freelancers/~0169d35b8373416546) |
| 21 | Raheel A. | Pakistan | Short-Form Video Editor \| DTC Ads, UGC & Meta Performance Marketing | $10 | $40K+ | TR+ | 100 | 143 (108/35) | 68 | Y | N | 13 | [~01438e050770e2debd](https://www.upwork.com/freelancers/~01438e050770e2debd) |
| 22 | MD A. | Bangladesh | Podcast Video Editor \| Talking Head, YouTube, Shorts & Social Clips | $15 | $100K+ | TR | 93 | 146 (123/23) | 71 | Y | N | 19 | [~01f46fff441d8a4b88](https://www.upwork.com/freelancers/~01f46fff441d8a4b88) |
| 23 | Anu F. | **Nigeria** (Ogun) | Video Editor & AI Filmmaker \| YouTube, Podcasts & AI Video | $15 | $50K+ | TR+ | 100 | 196 (154/42) | 57 | Y | Y $100 | 12 | [~01442ee478a70618cf](https://www.upwork.com/freelancers/~01442ee478a70618cf) |
| 24 | Ayomide O. | **Nigeria** (Lagos) | Performance Video Editor \| Paid Ads, Short-Form & YouTube Content | $20 | $50K+ | TR+ | 100 | 82 (67/15) | 28 | N | N | 8 | [~019ddcf392d482f556](https://www.upwork.com/freelancers/~019ddcf392d482f556) |
| 25 | Paula E. | **Nigeria** (Abuja) | Short-Form Video Editor \| Reels, TikTok & Youtube Shorts, Talking-Head | $15 | $10K+ | TR+ | 100 | 13 (10/3) | 6 | N | N | 15 | [~01ddfa32109e3c2789](https://www.upwork.com/freelancers/~01ddfa32109e3c2789) |

Profiles that returned a `PERMISSION` error and could not be read (retried; it was a per-profile error, not throttling, because the next call succeeded):
- Yurii Z. (Ukraine, $30, TR+, JSS 99; title "Short Form Video Editor || Meta Ads Video Editor || UGC & AI Video Ads")
- Ali R. (Pakistan, $17.99, TR+; title "Short-Form Video Editor | Podcast Clips & Social Content")
- Tooba D. (Pakistan, $20, TR+, $50K+; title "YouTube & Short-Form Video Editor | Reels, Shorts & TikToks Expert")

Their search-card data appears in [S-SF].

**Per-profile records.** Each record gives the overview opening (exact), its structure, skills (exact, in profile order), portfolio, recent jobs, employment style and education.

**1. Reid N.** — US, $30/hr, TR+, $100K+, 351 jobs, 137 feedback, 311 contracts, capacity "fullTime", video intro yes.
- **Overview opening (exact):** "🚨 If your ad doesn’t grab attention in the first 3 seconds, you’ve already lost the sale. 𝐓𝐡𝐚𝐭’𝐬 𝐰𝐡𝐞𝐫𝐞 𝐈 𝐜𝐨𝐦𝐞 𝐢𝐧. I’m 𝐑𝐞𝐢𝐝, a top-tier Short-Form Video Editor and Content Strategist, specializing in VSL (Video Sales Letter) Editing, Short Reels, Short Video Editing, Adobe Premiere Pro, and Content Strategy with 𝟲+ 𝘆𝗲𝗮𝗿𝘀 of experience helping content creators, personal coaches, and dropshipping brands scale…"
- **Structure:** pain hook → who he is → platforms/clients → "I don't just edit videos…" → emoji skill bullets → industries → tools → CTA "drop me a message" → a very long "Other Skills:" keyword-stuffing block.
- **Skills:** Video Editing; Video Editing & Production; Short Video; Short Video Ad; Video Advertising; Social Media Advertising; Motion Graphics; Video Production; Adobe Premiere Pro; Adobe After Effects; Social Media Content Creation; Video Post-Editing; Content Writing; Podcast Content; Videography.
- **Portfolio:** 1 item, "My Portfolio" (multimedia). Thumbnail is a 3-panel collage of vertical frames with bold kinetic captions ("My 3-Step Social Video Strategy").
- **Employment:** IPG (Marketing); Atlas Grilling (Marketing Director).
- **Education:** BBA Marketing, Sierra Nevada College, 2021–25.
- **Recent jobs (10, all started Oct 21–27 2026, 8 fixed / 2 hourly):** "Short Form Video Editor for Therapist's Instagram Reels and TikTok"; "Short-Form Video Editor for Paid Social Ads (3 Reels)"; "Edit Video for IG Reels / TikTok"; "Short Form Video Edit"; "Paid test for an ongoing per-asset editing role"; "Social Media Marketing"; "Short-Form Video Creator / Editor for Facebook Ads"; "Short form social videos and content"; "Video editing Tyler p ad" ($100); "Fuego Paid Social Video Editing — 5 Performance Ads".
- **Source:** [Reid N.](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1)
- *(inferred)* The person ID (1924…) suggests an account created around 2025. Even so, 351 jobs and #1 rank on [S-SF].

**2. Khoa Nguyen B.** — Vietnam, $16/hr, TR+, $100K+, 479 jobs, 151 feedback, 402 contracts, video intro yes.
- **Overview opening (exact):** "Are you seeking a 𝐕𝐢𝐝𝐞𝐨 𝐄𝐝𝐢𝐭𝐨𝐫 to create stunning, engaging, professional videos for 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 platforms like 𝐘𝐨𝐮𝐓𝐮𝐛𝐞, 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐑𝐞𝐞𝐥𝐬, 𝐚𝐧𝐝 𝐓𝐢𝐤𝐓𝐨𝐤? Do you want to create 𝐒𝐡𝐨𝐫𝐭-𝐅𝐨𝐫𝐦 𝐕𝐢𝐝𝐞𝐨𝐬 that captivate your audience…"
- **Structure:** question hook → "Perfect! You've made it to the right candidate!" → results → tools → service bullets → CTA.
- **Result claims:** "built a channel from scratch to over 700,000 followers" on TikTok; editing for YouTube channels "boasting millions of subscribers".
- **Skills:** Video Editing; Video Production; Video Post-Editing; Adobe Premiere Pro; Audio Editing; Adobe After Effects; Motion Graphics; Videography; Color Grading; Explainer Video; AI-Generated Video; YouTube; Instagram Reels; Social Media Video; Short Video.
- **Portfolio (17):** includes "Cash Cow Youtube Videos-( Faceless video)", "Vlog Videos" (Hillier Smith style; "Canadian YouTube channel with 200,000+ subscribers"), "Instagram Reels" ("These two videos reached 2 million views and 9.3 million views"), "Short-Form Videos( Instagram, Tiktok, Youtube Shorts)", "UGC Videos", "Real Estate Videos".
- **Employment:** "Frelancer Video Editor"; Sconnect (Video Editor, YouTube Manager).
- **Education:** BEng Civil Engineering, VNU-HCM.
- **Recent jobs (Oct 17–27, all fixed):** "Short Form Video Editor - Instagram Reels"; "reel estate reel"; "1 Real estate reel and 1 reel to adjust"; "Edit real estate informational video"; "Meta (Facebook & Instagram) Video Ad Editing"; "Performance Video Editor for Meta/TikTok Ads"; "Small videos editing without sound" ($80).
- **Source:** [Khoa](https://www.upwork.com/freelancers/~017142a33a9cd51e6b)

**3. Serhii K.** — Ukraine, $28/hr, TR+, $100K+, 166 jobs, 96 feedback, video intro yes. Paid consultation "Video & Audio Consultation" from $100 ("AI Video Generation & Editing").
- **Overview opening (exact):** "Short-Form Video Editor specializing in high-converting TikTok Ads, Meta Reels, and YouTube Shorts. High-retention UGC & performance creatives engineered to stop the scroll, boost CTR, and scale sales for e-commerce DTC brands & agencies."
- **Structure:** short and plain-text: focus list ("Strong hooks in the first 1–3 seconds / Fast cuts and pattern interrupts / Subtitles and captions for retention / UGC-style editing for ads") → Platforms → Content types → Tools (Premiere, AE, CapCut) → Who I work with → Results ("Improved retention up to 70%", "Higher CTR on ad creatives") → Why clients choose me → CTA. Ends "Updated October 27, 2026".
- **Skills:** Video Editing; Short Video; YouTube Shorts; Instagram Reels; TikTok Video; Short Video Ad; Video Ad; UGC; Adobe Premiere Pro; Adobe After Effects; CapCut; Motion Graphics; Video Post-Editing; Color Grading; Promotional Video; Product Video; Social Media Video; Video Editing & Production; Facebook Advertising; Video Commercial.
- **Portfolio (41):** older 2022–23 items carry generic titles ("Tik Tok", "Intro.", "Video editing in the style of Alex Hormozi"). Newer items use SEO titles, e.g. "Short-Form Video Ad | TikTok, Reels & YouTube Shorts | Premiere Pro", "UGC Video Ad | TikTok & Reels Editing | Adobe Premiere Pro", "Paid Social Video Editor — UGC Ad for UK Snack Brand (TikTok & Meta)". Their descriptions use ✔️ "3-second hook… sound-off… A/B variations… Result:".
- **Employment:** "(Upwork/Fiverr/LinkedIn)" Video Editor; Ukraine TV Video Editor.
- **Recent jobs:**
  - "UGC Video Editor – Short-Form Ads for Disc Golf Ecommerce Brand (Meta, TikTok, Reels)" — $120
  - "Performance Video Ad Editor for Telehealth Brand (Existing Footage, Paid Test)" — $40
  - "Video Editor for Meta Ads" — $20
  - "UGC / Meta Ads Video Editor (Performance Creative for Paid Social)" — hourly, 4.5h, $121.50
  - "UGC Video Editor for Ecom Conversion Ads - Immediate Project + Ongoing Work" — hourly, 4h, $112
  - "test for video editing" — $80
- **Source:** [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9)

**4. Syed Muhammad A. ("Affan")** — Pakistan, $19.99/hr, TR+, 318 jobs, 135 feedback, video intro yes. Earnings were not returned by the API; the overview claims "$60K+".
- **Overview opening (exact):** "Why is your short-form content getting views but not converting? What if the fix is in the first 3 seconds? I'm 𝐀𝐟𝐟𝐚𝐧, a 𝐓𝐨𝐩 𝐑𝐚𝐭𝐞𝐝 𝐏𝐥𝐮𝐬 Short-Form Video Editor in Upwork's 𝐓𝐨𝐩 𝟑%, with $𝟔𝟎𝐊+ 𝐄𝐚𝐫𝐧𝐞𝐝. 𝟐𝟗𝟎+ 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬, and 𝟐,𝟎𝟎𝟎+ 𝐇𝐨𝐮𝐫𝐬 of retention-focused editing across UGC Ads, Instagram Reels, TikTok, and YouTube Shorts.📩 Not sure what's holding your content back? Send me your latest short-form video and I'll send you a free, honest audit within 24 hours."
- **Structure:** emoji stat block → About Me ("started… on Upwork in 2023", "10M+ YouTube views", brands "Bellroy, Captions App, Efani, and HEYS Luggage") → industries with emojis → tools, including AI (Opus Clip, HeyGen, Kling, Higgsfield) → Why Work with Me → P.S. CTA ("Click 𝐈𝐧𝐯𝐢𝐭𝐞 to Job") → a block literally titled "𝐊𝐞𝐲𝐰𝐨𝐫𝐝𝐬 𝐟𝐨𝐫 𝐔𝐌𝐀 𝐚𝐧𝐝 𝐂𝐥𝐢𝐞𝐧𝐭 𝐌𝐚𝐭𝐜𝐡𝐢𝐧𝐠:" listing ~60 keyword phrases, including "Podcast Clips Editor" and "Long-Form to Short-Form Editor".
- **Skills (20):** Short Video; Video Editing; YouTube Shorts; Video Design; Short Video Ad; Creative Direction; 2D Animation; Video Intro & Outro; Video Animation; Video Editing & Production; YouTube Video; Video Post-Editing; Instagram; Motion Graphics; Video Production; Podcast Editing; Social Media Video; TikTok Video; Instagram Reels; Content Editing.
- **Portfolio (16):** mixes non-video items (3D render, websites, UI/UX) with "style" pieces: "Magnatesmedia Style Edits", "Sunny V2 Style Edits", "Ali Abdaal Style Videos - Talking Head Videos", "Iman Gadzhi Style Video Editing", "YouTube Video Editing | Tim Burmaster | 200K+ Subscribers".
- **Employment:** 6 agency roles, e.g. "OAM Digital — Short-Form Video Editor Specialist", "SWISH Marketing Agency — Video Editing Manager".
- **Education:** MBA, Univ. of Sindh.
- **Recent jobs:** "Instagram Video Editor Needed for Instagram Account 600K+ followers"; "Video Editor – Full Time Work from Home (Fixed Price per Video, Paid Trial)"; "Trial reel"; "VSL Video Editing - Prometheus".
- **Source:** [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91)

**5. Rahool T.** — Pakistan, $10/hr, TR+, $200K+, 1,218 jobs, 753 feedback, 1,081 contracts, video intro yes. Consultation from $10 (AI Video, Podcast Editing, Short Video Ads, Subtitles & Captions, Video Editing).
- **Title:** generalist, "Top 1 Percent Professional Video Editor".
- **Overview opening (exact):** "🏆 Top 1% on Upwork\n⭐️ Top-Rated Plus Video Editor\n✅ 20+ years of experience\n✅ 1000+ jobs completed \n\nI am a Pro Video Editor with 13 years of work history and 1000+ satisfied clients on Upwork. Certified in Adobe Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, Capcut Pro…"
- **Pitch:** "top-quality work… at a lower price than others, with an unlimited number of revisions". This is a price/volume positioning.
- **Skills:** DaVinci Resolve; Video Production; Adobe After Effects; Adobe Premiere Pro; TikTok; Video Editing; Final Cut Pro; Instagram Story; Color Grading; Podcast; Canva; Apple Motion; CapCut; YouTube Ads; Descript.
- **Portfolio (40):** from 2012 onward (Vimeo links), plus newer "TikTok Video", "Reels", "TikTok / Reels", "VSL Video", "Meta Ads / Social media Ads / UGC Ads", "AI-generated Ad video - UGC video".
- **Employment:** Graphics Chain CEO; Hum TV camera man.
- **Recent jobs:** "Video Editor for POV Videos"; "30 minute consultation"; "30 second video" ($15); "🎬 Video Editor for YouTube" (hourly, 56.5h, $565 = $10/h); "Video Editor for Meta Ad" ($95).
- **Source:** [Rahool](https://www.upwork.com/freelancers/~0188d110886cca6ed1)

**6. Yevhen B.** — Canada, $34/hr, TR+, **$1M+**, 1,499 jobs, 1,065 feedback, video intro yes. Consultation from $30.
- **Overview opening (exact):** "Hi!👋Do you want your videos to do more than just look good? Do you want them to keep viewers watching, strengthen your brand, and help your content perform?\n\nI turn raw footage into polished, engaging video content for brands, content creators, and bloggers."
- **Claims:** "over 14 years on Upwork, a 100% Job Success Score, and more than 10,000 videos completed".
- **Employment:** used as a case list. It has 33 entries: his own studios (VORTEX.video CEO, Doodle Video Production CEO) plus ~25 "NDA" entries titled as projects, e.g. "Short Form Video Editor for Educational Instagram Content", "Short form Video Editor for Real Estate (TikTok, Reels, Shorts)", "Podcast & Talking Head Video Editor".
- **Portfolio:** 452 items, the first 50 all "<Brand> Explainer Video" (roots in animated explainers).
- **Skills (20):** Video Editing; Adobe Premiere Pro; Adobe After Effects; Video Post-Editing; Video Editing & Production; Video Color Correction; Color Grading; Video Production; Video Animation; Graphic Design; Motion Graphics; Video Intro & Outro; 2D Animation; Audio Editing; Video Advertising; Content Editing; Podcast Editing; YouTube Video; Social Media Video; TikTok Video.
- **Recent jobs:** "Short Form Social Media Editor" ($5); "BERcast Season 3 Episode 1 editing" ($187); "30 minute consultation" ×2.
- **Source:** [Yevhen](https://www.upwork.com/freelancers/~01a65fce2994811b62)

**7. Shams Y.** — Pakistan, $15/hr, TR+, $40K+, 98 jobs, 44 feedback, video intro yes.
- **Overview opening (exact):** "🏆 Top Rated Plus - Top 3% Talent on Upwork\n⏱️ 2200+ hours worked on Upwork\n🚀 15M+ Views Generated for Top Creators & Brands\n🏆 3+ Years in Retention & Performance Editing\n\nI’ve worked with brands including 𝐃𝐫. 𝐒𝐪𝐮𝐚𝐭𝐜𝐡, 𝐎𝐫𝐛𝐢𝐨 𝐖𝐨𝐫𝐥𝐝, 𝐚𝐧𝐝 𝐒𝐭𝐫𝐲𝐝𝐚 𝐌𝐨𝐯𝐞𝐦𝐞𝐧𝐭…"
- **Structure:** 3 service pillars (Short-Form; Podcast & long-form repurposing into clips; UGC & paid ads) → "⚙️ How It Works" (send raw footage + "1-2 reference videos"; "First draft usually within 48 hours"; "2 rounds of revisions included") → "What's included in every edit" → 3 quoted client testimonials → CTA "Click the "Invite to Job" button" → EXPERTISE keyword line → "Last Updated: Sep 27, 2026".
- **Skills (20):** Video Editing; Video Post-Editing; Video Production; YouTube Video; YouTube Shorts; TikTok Ad; TikTok Video; Short Video Ad; Instagram Reels; Social Media Content Creation; Social Media Management; Social Media Marketing; Motion Graphics; Video Editing & Production; Adobe Premiere Pro; Adobe After Effects; Video Intro & Outro; Testimonial Video; Video Marketing; AVS Video Editor.
- **Portfolio (9):** branded black title-card thumbnails ("STORYTELLING Narration Style videos", "BARBERING Videos", "Click to view"). Items include "Short-Form Video Editing for Barber Content (IG Reels & TikTok)", "Podcast-to-Short repurposing (TikTok & IG Reels)" and "Hear It From My Clients" (a testimonial compilation).
- **Recent jobs:** "Short video edit" ($40); "Short-Form Video Editor" ($25); "Instagram reels" ($48); "Video Editing w/ Overlays" ($20); "TEST VIDEO" ($208); "Video editing and clipping" (hourly, 27.5h, $412.50 = $15/h).
- **Source:** [Shams](https://www.upwork.com/freelancers/~017efce70163499b54)

**8. Khizar S.** — Pakistan, $19.99/hr, TR+, $100K+, 462 jobs, 149 feedback, video intro yes. Consultation from $10.
- **Overview opening (exact):** "Get the First 15 Seconds of Your Video Edited Free.\nSee my editing before you hire. No risk.\n\ni make AI video ads that actually sell. not the pretty stuff that just sits there and looks nice. i mean ads that stop the scroll in the first 3 seconds and get people to buy."
- **Voice:** all-lowercase and conversational.
- **AI tool list:** Higgsfield, Kling, Google Veo, Runway, HeyGen, ElevenLabs, Nano Banana, Seedance, Pika, Sora, Midjourney, Synthesia.
- **Close:** "200+ clients"; CTA "send me your product and the angle you wanna test. first reply's on me"; then a huge "Also Specialize In" keyword list.
- **Skills (20):** Video Editing; Video Production; Adobe Premiere Pro; Video Editing & Production; Video Post-Editing; Adobe After Effects; Motion Graphics; Explainer Video; Short Video Ad; AI-Generated Video; CapCut; Graphic Design; AI Video Generation; Video Commercial; Video Ad; AI Image Generation; Adobe Illustrator; AI Content Creation; AI Content Editing; Artificial Intelligence.
- **Portfolio (34):** newest items are AI ads ("Pixar Style AI Dog POV Ad for Health & Wellness Brands", "AI Animated Product Ad | Mascot style for Supplement Brands"). Also "High-Retention Reels For Instagram & TikTok": "You get one main cut plus three quick test versions… Turnaround 24 to 48 hours."
- **Employment:** Black Bird Production.
- **Recent jobs:** "AI Video Creator Needed (Higgsfield / HeyGen) for 30-Second Meta Ad Copy"; "60s AI Animated Story Ad (9:16, Meta) – Trial" ($110); "Performance Video Editor — Fashion E-commerce (UGC & Ads)" (hourly, 15h, $300 = $20/h); "DTC Editing Work" ($60).
- **Source:** [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5)

**9. Tarun G.** — India, $20/hr, TR+, $80K+, JSS 93, 291 jobs, 154 feedback. No video intro. Visibility "upwork_users_only".
- **Overview opening (exact):** "Note: My Actual JSS is 98%, Upwork team is working to fix this issue. Please check my reviews and past jobs.\n\nHi, I’m Tarun Garg – Professional Video Editor\n\nAbout me:\n✅ 11+ years of video editing experience\n✅ Top rated Plus freelancer on upwork\n✅ Worked with 450+ clients globally"
- **Offers:** "📌 Bonus 1: I'll do one low cost sample video… 📌 Bonus 2: I'll give the best discounts on bulk work order".
- **Skills:** CapCut is listed **first**: CapCut; Video Editing; Adobe Premiere Pro; Wondershare Filmora; Instagram Reels; YouTube Shorts; TikTok Video; Video Design; Video Editing & Production; Video Intro & Outro; YouTube Channel Intro; AI Video Generation; Canva; Motion Graphics; Adobe After Effects; Descript; Podcast Editing; Video Post-Editing; Social Media Content Creation; Social Media Video.
- **Portfolio:** only 2 items with stock-like thumbnails ("Best VIDEO EDITING Services").
- **Recent jobs:** "Raw footage to Instagram reels"; "Short-Form Video Editor for Finance/Real Estate Talking-Head Clips (Shorts, Reels, TikTok)" (hourly, $48.33 for 4.8h); "Video Editor - Short form Meta Ads" ($90); "Video Editor - Clipping, Stitching, Generating" (hourly, 21.3h, $426.67).
- **Source:** [Tarun](https://www.upwork.com/freelancers/~01e797aa302e0e51dc)

**10. Val M.** — Philippines, $29.99/hr, TR+, $100K+, 98 jobs, only 24 feedback. No video intro.
- **Overview opening (exact):** "I help DTC brands turn ideas, product images, or raw footage into 𝐡𝐢𝐠𝐡-𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐧𝐠 𝐯𝐢𝐝𝐞𝐨 𝐚𝐝𝐬 that actually stop the scroll and drive sales."
- **Length and content:** ~170 words. "✔ Strong hooks in the first 1–3 seconds… ✔ Multiple variations for testing"; "AI UGC ads (no creator needed)".
- **Portfolio (22):** "Category | Benefit" titles, e.g. "Before vs After | Ad Performance Optimization", "TikTok Ad | Scroll-Stopping Hook That Boosts Retention", "AI UGC Video Ad for Roofing Company", "Pixar-Style AI Video Ad for Women's Wellness Supplement Brand", "AI Founder UGC Ad | DTC Performance Creative". Thumbnails are talking-head frames with burned-in captions ("turned my boring clips into ads").
- **Skills (20):** Video Editing; Video Advertising; TikTok Ad; Facebook Advertising; Social Media Video; UGC; Content Creation; Instagram Reels; Ad Creative; Social Media Content; Conversion Rate Optimization; TikTok Video; YouTube Shorts; CapCut; Short Video Ad; Short Video; AI Video Generation; Social Media Advertising; Creative Strategy; Motion Graphics.
- **Employment:** Viral Vid Solution, "Tiktok and Instagram Video Editor".
- **Recent jobs:** "UGC Video Editor for Meta Ads" ($1,050); "AI UGC style videos" ($560); "AI-Generated Promotional Video Production" (hourly, 17h, $509.83 = $30/h); "Paid Test | DealFuel Ads" ($200); "Full-Time AI Video Editor – Cartoon, Pixar-Style, UGC & VSL Ads (10-15/week)" ($30).
- **Source:** [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8)

**11. Hafsa H.** — Pakistan, **$5/hr**, TR+, $70K+, JSS 90, 508 jobs, 236 feedback. No video intro. Ranks **#1 on both [S-RE] and [S-YS]**.
- **Overview opening (exact):** "I help YouTube creators, brands and businesses turn raw footage into high-retention videos that drive engagement and growth. With 5+ years of experience and 310+ completed projects, I specialize in storytelling, pacing and visual flow tailored for social media and digital audiences."
- **Structure:** Core Services (incl. "3D Animation (Zack D Films Style)", AI video with Grok/Flow/Seedance) → Why Clients Choose Me ("4.9/5.0 rating", "$60K+ earned") → My Workflow → Tools → CTA.
- **Skills (15):** Video Editing; Promotional Video; Travel Video; YouTube Video; YouTube Shorts; Adobe Premiere Pro; Adobe Illustrator; Adobe Photoshop; Testimonial Video; Instagram Reels; YouTube Ads; Script; Intro & Outro Animation Design; Motion Graphics; YouTube Marketing.
- **Portfolio (61):** faceless/documentary, stickman, AI Pixar-style, "Podcast Social Media Clips with High-Retention Editing" ("fast-paced cuts every 2–3 seconds").
- **Recent jobs:** "Looking For Experienced YouTube Video Editor. Food/Supplements Niche Channel 100 Videos For $3,000"; "CapCut Video Editor – Corporate Communications"; "Experienced YouTube script writer and Editor…" (hourly, 17h, $85 = $5/h).
- **Source:** [Hafsa](https://www.upwork.com/freelancers/~01839f946ded0eeacf)

**12. Faraz M.** — Pakistan, $20/hr, TR+, $100K+, 566 jobs, 260 feedback. No video intro. Consultation from $50.
- **Title:** platform-first, "Shorts & Reels | Video Editor | YouTube Videos | VSL | AI Videos".
- **Overview opening (exact):** "📈 Proven Results:\n\n🚀 Helped a faceless YouTube channel scale from 0 to 30,000 subscribers in just 6 months, generating millions of views through optimized editing, thumbnail strategy, and storytelling.\n\n👩‍💻 Collaborated with a YouTuber with over 1.3M subscribers… 💼 Produced Meta video ads that helped a B2B business acquire 100+ customers"
- **Skills (15, platform skills first):** Instagram Reels; TikTok Video; YouTube Video; YouTube Shorts; YouTube Automation; Video Editing; UGC; Social Media Video; Video Sales Letter; Adobe Premiere Pro; TikTok; Podcast; Instagram; YouTube; Product Ad Campaign.
- **Portfolio:** only 4 items (May 2024), written as "Client Objective / Project Overview" case studies. Thumbnail: vertical talking head with big caption "YOU ARE NOT".
- **Recent jobs:** "Fencing videos" (hourly, 58.5h, $1,250.01); "Short-Form Vertical Video Editor" ($25); "Edit 5 Instagram Reels"; "Motion graphics- short reel" ($30). Also the same "Short-Form Video Editor for Finance/Real Estate Talking-Head Clips" job as Tarun ($20), meaning that client hired several editors.
- **Source:** [Faraz](https://www.upwork.com/freelancers/~01520d25d1f66f5703)

**13. Hammad H.** — Pakistan, $15/hr, TR+, $100K+, 361 jobs, 171 feedback, video intro yes. Consultation from $50.
- **Title (industry niche):** "Real Estate & Contractors Video Editor | Reels, VSLs & Podcast".
- **Overview opening (exact):** "I help real estate professionals, contractors, and home service businesses turn raw footage into polished Real Estate Videos, Reels, Podcasts, VSLs, Talking Head Videos, and YouTube content that builds trust, keeps viewers engaged, and helps businesses grow.\n\nWhat My Clients Say\n⭐⭐⭐⭐⭐\n\"Hammad is the best video editor I ever worked with…\""
- **Body:** an "Industries I Serve" emoji list (Realtors, General Contractors, HVAC & Plumbing, Electrical, Remodeling, Landscaping, Painting & Flooring, Cleaning, Pressure Washing, Coaches). Claims "110M+ Combined Content Views", "500+ Videos Edited".
- **Skills (16):** Video Editing; Instagram Reels; YouTube Shorts; Social Media Video; Animation; Motion Graphics; Video Post-Editing; TikTok Video; Podcast Editing; Adobe Premiere Pro; Adobe After Effects; Subtitles; Color Grading; Video Sales Letter; Video Editing & Production; Video Color Correction.
- **Portfolio (27):** started as a social media manager (Meta lead-gen results such as "125 Leads Generated / £4.27 Cost Per Lead"), later "Real Estate Video Editing", "Podcast Shorts", "VSL Video Sales Letter Editing".
- **Recent jobs:** "25 x Meta Ads and Founder Videos"; "Short-Form Video Editor for Kitchen Cabinetry & Home Remodeling Brand" ($150); "Video Editor Needed — FPV / Drone Homes Tour Reels & Social Ads" ($200); "Paid test: luxury long-table dinner recap reel (15-30s, 9:16)".
- **Source:** [Hammad](https://www.upwork.com/freelancers/~01e69c3cf80eef0e45)

**14. Ammad R.** — Pakistan, $19/hr, no badge returned, $100K+, JSS 100, 249 jobs, video intro yes. Consultation from $75.
- **Overview opening (exact):** "Your video looks great. So why isn't anyone buying?\n\nI edit VSLs, Meta and TikTok ads, and AI UGC ads for DTC brands, B2B companies, and coaches who need their videos to sell, not just look nice."
- **Sections:** WHAT I BUILD / THE PROOF / HOW I WORK / GET STARTED.
- **Named proof:** "Bliss Collagen, Femmelife, and Metrm"; "Omar Raja (12M+ YouTube subscribers) and Answered That For You (4M+)".
- **Offer:** "I'll edit your first 10 seconds as a free 'hook edit.'"
- **Skills (20):** Video Editing; AI Content Editing; AI Content Creation; AI Video Generation; UGC; Video Sales Letter; Instagram Reels; Video Post-Editing; Video Ad; Social Media Content Creation; Content Strategy; TikTok Ad; Social Media Video; Content Editing; Video Editing & Production; Podcast Editing; higgsfield; Clipper; YouTube Ads; Social Media Management.
- **Portfolio (16):** designed graphic cards ("PERSONAL BRANDING / YOUR FACE. YOUR VOICE. SHARPENED / PERFECT FOR COACHES & CREATORS"). One title still contains unfilled template brackets: "B2B Video for [SaaS / Consultant] | Case Study & LinkedIn Content".
- **Recent jobs:** "VSL Editor – Experienced (Video Sales Letter & Breakout Videos)" ($650); "AI Cartoon Video Ad" ($415); "DTC Video Ad Editor Meta | $1K-$2K Monthly Retainer + Performance Bonuses | Experts Only" ($24 so far); "Trial video - 1" ($15).
- **Source:** [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415)

**15. Hani A.** — Pakistan, $25/hr, Top Rated, $100K+, 446 jobs. Video intro yes (a YouTube **Shorts** vertical link). "Marketing Consultation" from $30.
- **Overview opening (exact):** "Tired of wasting time and money on content that doesn’t convert?\n\nClick on the first portfolio project in the portfolio section to see my detailed website with high quality premium work for clients.\n\nI’m a Top Rated (Top 5%) Upwork Video Editor, Content Strategist, and Growth-Focused Creative Partner…"
- **Real Results claims:** "Helped a client break 100K+ views after months of struggling at 1-2K views"; "Scaled an Instagram page from 5 to 429 followers in just 9 posts".
- **Credibility line:** "Top 5% on Upwork | $100K+ Earned | 365 Jobs | 5,000+ Hours | 98% Job Success Score".
- **Named clients:** Cryptonary, Christian Guzman Fitness, Chelsea Miller Knives.
- **Capacity and offer:** "High-volume editing capacity (20-40 videos weekly)"; "Get the First 25 Seconds of Your Video Edited Free."
- **Skills (20):** Video Editing; Video Editing & Production; Video Commercial; Video Advertising; Adobe Premiere Pro; Adobe After Effects; Short Video; Short Video Ad; Motion Graphics; Video Production; YouTube Video; Instagram Reels; TikTok Video; YouTube Shorts; Animation; Social Media Advertising; Video Post-Editing; Content Editing; Content Writing; Social Media Content Creation.
- **Portfolio (21):** a "style menu" (e.g. "Closer to Alex Hormozi style", "Faceless video with AI voiceover and premium stock footage!", "Hype edit/ Aesthetic instagram reels").
- **Recent jobs:** "Testing IG Video Edits" (hourly, 42h, $1,050 = $25/h); "Finish a 60s Instagram Reel in Premiere Pro (80% done) + view bonuses"; "Video Editor for Performance Ads - Multi-Brand, Long-Term" ($70).
- **Source:** [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589)

**16. Shamima K.** — Bangladesh, $15/hr, TR+, $100K+, 572 jobs, 233 feedback. No video intro. Consultation from $150.
- **Overview opening (exact):** "Not sure if I’m the right fit? Send me a raw clip, and I’ll turn it into a 30 second, high retention video edit.\n\nI help content creators, personal brands, businesses, and marketing agencies turn raw footage into professional videos that capture attention, increase watch time, and keep viewers engaged."
- **Claims:** "In 2025 alone, my edits generated over 50 million views".
- **Portfolio (12):** keyword-stacked titles ("Event Video Editor | YouTube Video Editor | Video Editor") with hashtags in descriptions (#ReelsEditor #TikTokEditor). Thumbnails are uniform branded neon-pink title cards.
- **Skills (20):** Video Editing; AVS Video Editor; Adobe Premiere Pro; Adobe After Effects; Motion Graphics; Video Color Correction; Video Editing Software; Video Editing & Production; Video Animation; Short Video Ad; TikTok Video; YouTube Shorts; Video Post-Editing; Social Media Video; DaVinci Resolve; Video Design; Instagram Reels; Showreel; Video Intro & Outro; Film Editing.
- **Recent jobs — long-running hourly retainers:**
  - "Athletic Video Editor Needed for Professional Highlight Videos": 166.5h, $2,497.50
  - "YouTube video editing": 163.5h, $1,669.17
  - "Long & Short Form Video Editor, Sound Designer": 70.2h, $842
- **Source:** [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f)

**17. Fahad T.** — Pakistan, $27/hr, TR+, **$200K+**, 253 jobs (152 hourly), video intro yes.
- **Overview opening (exact):** "Get a FREE 20 second podcast teaser to experience my editing quality before committing.\n\nI'll help you 3X your podcast's reach and viewership in 90 days.\n\nI specialize in podcast video editing, helping podcasters turn raw footage into professional episodes that keep viewers engaged."
- **Close:** "Top Rated Plus… Top 3%… $200K+… 10,000+ Editing Hours" → "White Label Video Editing for Marketing Agencies" → EXPERTISE keyword line.
- **Skills (20, podcast skills first):** Podcast Editing; Podcast Content; Social Media Video; Instagram Reels; Podcast Episode; Podcast; Video Editing; Video Post-Editing; YouTube Shorts; TikTok Video; YouTube Video; Adobe Premiere Pro; Adobe After Effects; Podcast Production; Podcast Analysis; YouTube; Motion Graphics; Color Grading; Content Editing; Podcast Marketing.
- **Portfolio (6):** uniform green glowing title cards ("UGC Ads", "Ecommerce Ads"), "Client Testimonials | Video Editing & Content Repurposing".
- **Recent jobs:** "Podcast Video Edito" ($2,400); "Short form video editor" ($540); "Video Editing for Thought Leadership Content" ($420); "Podcast short clip editing" ($165); "Short Form Video Editor" (hourly, 4h, $160).
- **Source:** [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d)

**18. Christopher G.** — Philippines, $30/hr, TR+, earnings not returned, 322 jobs, 140 feedback. No video intro.
- **Background:** former Department of Education teacher (employment).
- **Overview opening (exact):** "Need an 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙀𝘿 𝙑𝙄𝘿𝙀𝙊 𝙀𝘿𝙄𝙏𝙊𝙍 in the long run?\n\n💻 Strong, modern editing skills.\n🎯Clear and easy communication.\n🤝Reliable and consistent.\n📣Understands content and marketing.\n\nHere's what clients book me for 👇👇👇"
- **Style:** playful 🔥 service blocks ("Pretty edits are nice, but results are nicer. 😉"); no numeric results.
- **Skills (20):** Video Editing; Instagram Reels; Podcast; YouTube Shorts; Video Design; CapCut; Presentation Design; Ecommerce; Short Video Ad; Video Ad Campaign; Video Ad; Video Post-Editing; TikTok; Video Marketing; Graphic Design; Business Presentation; Adobe Premiere Pro; Camtasia; Canva; Video Strategy.
- **Portfolio:** only 5 items, with designed YouTube-thumbnail-style covers including an explicit **BEFORE / AFTER** split ("TALKING HEAD VIDEO EDITING… ATTENTION GRABBING CAPTIONS") and "AI UGC VIDEO ADS — REAL-LOOKING. HIGH CONVERTING. MADE WITH AI."
- **Recent jobs:** "Short-Form Editor Needed for Content Agency"; "Native Tagalog Subtitle Editor — 3 Short-Form Ads"; "Short form video editor for glass and glazing videos".
- **Source:** [Christopher](https://www.upwork.com/freelancers/~017a268103c52cb2db)

**19. Vo N.** — Vietnam, $30/hr, TR+, $60K+, 140 jobs, video intro yes. Consultation from $100.
- **Overview opening (exact):** "4 Years of Experience in Video Editing, both Long and Short Form.\nQUALITY, RELIABILITY, and getting things done ON TIME. Simply THE BEST!" Short and generic.
- **Skills (only 10):** Video Editing; Video Editing & Production; YouTube Video; YouTube Shorts; TikTok Video; Video Design; Video Production; Video Post-Editing; Subtitle Edit; Video Transcription.
- **Portfolio (18):** literal SEO titles ("Youtube Shorts/Tiktok Video Editing", "Creating Shorts/Reels/Teasers From Podcast"). Thumbnails look like YouTube thumbnails ("DAY 1 ZERO / DAY 100 HERO").
- **Recent jobs:** "Video Editor Needed (Short & Long Form) in the Real Estate Niche" (hourly, 79.2h, $1,187.50 = $15/h); "2 reels" ($50).
- **Ranking:** still ranks #3 [S-TT], #2 [S-YS], #14 [S-SF] despite a thin profile.
- **Source:** [Vo](https://www.upwork.com/freelancers/~0164bae49ec98f51a9)

**20. Abdullah D.** — Pakistan, $30/hr, Top Rated, $50K+, 360 jobs, video intro yes.
- **Title (format niche):** "Talking-Head Video Editor | YouTube, VSL & Reels | Motion Graphics".
- **Overview opening (exact):** "Top Rated video editor with 100% Job Success, 300+ completed Upwork jobs and $50K+ earned. I edit talking-head content for coaches, founders and personal brands who need their videos to hold attention and look premium."
- **Style:** clean, no emoji. WHAT I EDIT / HOW I WORK ("You send footage and a reference video"; "revision rounds defined up front") / TOOLS ("Premiere Pro Expert certification") / PROOF ("Shark Tank-featured brand").
- **Close:** "Best fit: ongoing work or projects where quality matters more than the lowest price… a fixed price per video."
- **Skills (20):** Video Editing; Video Post-Editing; Adobe Premiere Pro; Adobe After Effects; Motion Graphics; YouTube Video; YouTube Shorts; Instagram Reels; TikTok Video; Video Sales Letter; Documentary; Color Grading; Audio Editing; Subtitles; Video Editing & Production; Story Editing; UGC; Video Intro & Outro; Podcast Editing; Video Commercial.
- **Portfolio (6):** named-client case items ("VSL Edit — Talking Head with Motion Graphics" for "Oskar"; "Personal Brand YouTube Edit — Iman Gadzhi Style Talking Head" for Maciej Rudy).
- **Recent jobs:** "Short-Form Video Editor (TikTok Shop Affiliate Content)" ($30); "VSL Video of Raw Footage" ($100); "Vidoe editing fir Instagram" ($20).
- **Source:** [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546)

**21. Raheel A.** — Pakistan, $10/hr, TR+, $40K+, 143 jobs, video intro yes.
- **Overview opening (exact):** "I'm a video editor with 5 years of experience across short-form and long-form content. I've worked with 50+ brands creating everything from high-converting social ads to polished YouTube videos, interview edits, and brand documentaries."
- **Notable lines:** "Build authentic captions that sound human (never AI-generated)"; "Reliable 1-3 day turnaround"; "Based in Pakistan (flexible timezone)".
- **Only review text visible in the whole dataset:** contract "Video Ads Translation", hourly, **1,566.3 hours, $23,704.78**, 2024-09-11 → 2026-10-10, 5★, "Good work and respect the deadlines".
- **Skills (14):** Adobe Photoshop; Adobe Premiere Pro; Adobe After Effects; Video Editing; Graphic Design; Social Media Imagery; Thumbnail; Web Design; Short Video Ad; YouTube; Image Editing; TikTok; Photo Editing; Videography.
- **Portfolio (13):** includes "Facebook/Meta & Tiktok Ad UGC Edit", "Short-Form Video Ads for Leya AI | Online Tutoring Brand", "Engaging Podcast Clips with Trending Reels Style".
- **Source:** [Raheel](https://www.upwork.com/freelancers/~01438e050770e2debd)

**22. MD A.** — Bangladesh, $15/hr, Top Rated, $100K+, 146 jobs, video intro yes.
- **Overview opening (exact):** "🎙️ Podcast Video Editing That Keeps Viewers Watching\n\nI help podcasters and creators turn raw recordings into clean, engaging video podcasts and high-retention short clips for YouTube and social media."
- **Positioning:** "I focus only on podcast video editing and content repurposing".
- **Portfolio (19) with view-count titles:**
  - "23M Views Viral TikTok Clip | Podcast Short-Form Editing" (thumbnail is a TikTok screenshot showing 3.6M likes, 289.7K saves)
  - "2M+ Views Podcast Clip | 1+ Year Editing Partnership" (Relatables Podcast)
  - "1M+ Views Short-Form Clip: Mads World Podcast" ("6 high-performing short clips" in a "5-hour turnaround")
  - "Spotify-Sponsored Collaboration Between Two Podcasts Across Continents"
- **Skills (11):** YouTube Video; Podcast Editing; YouTube Automation; Video Editing; Podcast; Adobe Premiere Pro; Audio Editing; Podcast Production; Adobe After Effects; Video Editing & Production; YouTube Shorts.
- **Recent jobs:** "Trial Episode Edit" ($400); "Podcast Editor for Weekly Episodes" ($385); "Short Sample Edit" ($25); "Initial Youtube short" ($25).
- **Source:** [MD A.](https://www.upwork.com/freelancers/~01f46fff441d8a4b88)

**23. Anu F. (Anuoluwapo)** — Nigeria (Ogun State), $15/hr, TR+, $50K+, 196 jobs, video intro yes. Consultation from $100.
- **Overview opening (exact):** "Looking for an experienced video editor who can turn raw footage into engaging, high-quality videos that keep viewers watching?\n\nI’m Anuoluwapo, a professional video editor with 10+ years of experience in video editing and post-production."
- **Claims:** "100M+ views generated", "170+ completed Upwork projects".
- **Education:** University of Lagos (Environmental Eng.); Xteam Studios Academy; Delyork Creative Academy (VFX).
- **Employment:** Story Teller Media NG; Wedding Channel Africa; Detrix Studios.
- **Skills (20):** Video Editing; Video Post-Editing; Video Production; Adobe Premiere Pro; Adobe After Effects; Motion Graphics; Color Grading; Social Media Video; YouTube Video; Instagram Reels; Short Video; TikTok Video; Videography; Podcast Editing; Video Ad; Video SEO; Video Editing & Production; Video Editing Software; Video Animation; Video Intro & Outro.
- **Portfolio (12):** benefit-phrased titles ("Creative TikTok & YouTube Shorts Editor to Boost Views Fast", "Professional Real Estate Video Editor | Fast Turnaround").
- **Recent jobs:** "Video Editor – City Videos (100+ videos)"; "Short-Form Video Editor Needed for Instagram & TikTok" ($130); "Video editing for long form video and three shorts" ($100).
- **Source:** [Anu F.](https://www.upwork.com/freelancers/~01442ee478a70618cf)

**24. Ayomide O.** — Nigeria (Lagos; timezone set to London), $20/hr, TR+, $50K+, 82 jobs, 28 feedback. No video intro.
- **Overview opening (exact):** "I'll be honest… most videos don't have a views problem or a conversion problem; they have an attention problem.\n\nI've edited 1,000+ videos, from Facebook and TikTok ads that have generated $300k+ in revenue, to YouTube content and organic short-form that builds real audiences."
- **Achievement arrows:** "→ Helped a $37 billion company cut their CPA from $13 to $6"; "→ A creator with 1.2M followers hit 22.7M views on a single video".
- **Testimonials:** two named client testimonials (Eric Dahl: "336 leads and 29 new clients").
- **Skills (15):** Adobe Premiere Pro; Motion Graphics; YouTube Channel Intro; Social Media Content; YouTube Shorts; Adobe After Effects; Short Video Ad; TikTok; Instagram; Video Editing; Video Production; TikTok Marketing; Video Post-Editing; Video Editing & Production; Motion Design.
- **Portfolio (8):** results-in-title ("Youtube growth 700 - 4k+ subscribers", "Short-Form Content – 1K to 20K+ Views"); an "AFTER WORKING WITH US" thumbnail with YouTube view counts circled.
- **Recent jobs (largest per-job prices in the dataset):**
  - "Short-Form Video Editor - Reels/TikTok/Shorts for Established Health Creator (800K+)" — **$6,233**
  - "Video Editor for Long-Form Interviews + Documentary-Style B-Roll" — 66.7h, $1,333.33
  - "VSL 2" — $525
  - "Short-Form Video Editor for Land Listings: Paid Tryout (Reels/Shorts, Vertical)" — $475
  - "Short Reels Video Editor Needed" — $425
  - "Podcast Clip Creation" — $365
- **Source:** [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556)

**25. Paula E.** — Nigeria (Abuja; timezone set to London), $15/hr, TR+, $10K+, only 13 jobs, 6 feedback. No video intro.
- **Overview opening (exact):** "Need a video editor to get on board immediately? I'm right here\n\nEvery day, thousands of videos are posted… but only a few actually hold attention.\nI promise to help you create clean, high-performing short-form videos that people actually watch."
- **Proof:** one named brand ("Kachins, a fashion brand… Abuja and Dubai").
- **Skills (9):** Content Creation; Instagram Reels; Video Editing; Social Media Content Creation; Content Development; TikTok; YouTube Shorts; Color Grading; Video Color Correction.
- **Portfolio (15):** consistent "Short-Form Video Editing | <client/niche>" naming (Med Spa, Cooking Vlog for Tish, Talking Head Video for Dominique).
- **Visible work history (a newcomer's path):**
  - 2025-03: "Newsletter and advertising design" — $35
  - 2025-08: "Social Media Management" — $250
  - **2025-10: "Short Form Video Editor for Boutique Hotel & Restaurant" — $10,135 (one fixed contract)**
  - 2025-12 to 2026-08: several small "Video Editor for Social Media" jobs ($40–$200, several 5★ scores without comment text)
  - 2026-08: "Video Editor for Social Media" — $900
- **Source:** [Paula](https://www.upwork.com/freelancers/~01ddfa32109e3c2789)

**Nigeria-specific search** [S-NG], 15 results, all unboosted:
- **TR+:** Anu F. ($15, $50K+), Ayomide O. ($20, $50K+), Paula E. ($15, $10K+).
- **Top Rated:** Emmanuel E. ($5, $20K+), Hassan H. ($15, $8K+, "Faceless Content Specialist"), Alonge T. ($15, $3K+, sports), Ejiofor J. ($17, $3K+, "AI UGC Ad"), Oluwatoba A. ($20, $5K+), Joy J. ($15, $2K+), Chinenyenwa Faustina E. ($5, $4K+), Jules ($15, $6K+).
- **No badge:** Favour I. ($12, $8K+, JSS 83), Isaac T. ($10, $1K+, sports niche), Kazeem M. ($15, $4K+), God'swill A. ($8, $1K+).
- **Pattern:** Nigerian short-form rates cluster at **$10–$20/hr**.
- Isaac T. (Nigeria, 2 jobs, $1K+, title "YouTube Sports Video Editor | NBA, NFL, Shorts & Reels") also appeared at **#23 on the global [S-RE]** query.

### Inferences
- **(inferred)** Upwork's search `completed_jobs` field is NOT the same as profile `totalJobs`. Examples: Reid shows 18 in search but 351 on his profile; Rahool 140 vs 1,218; Yevhen 253 vs 1,499. The search figure may be a recent-window count; its definition was not documented in the tool output.
- **(inferred)** The typical "established" short-form editor in this niche is South-Asian or South-East-Asian, charges $10–$30/hr, and earns through high volume of small fixed-price per-video contracts. Several hold one or two large hourly or fixed retainers that make up a big share of lifetime earnings (Raheel $23.7K on one contract; Paula $10.1K; Ayomide $6.2K).
- **(inferred)** "Paid test / trial" contracts are a normal entry point to retainers. Ten-plus titles include "Paid test", "Trial reel", "TEST VIDEO", "Trial video - 1" ($15), "Paid Tryout" ($475), "Trial Episode Edit" ($400). A newcomer should expect and price for trials.
- **(inferred)** The three Nigerian TR+ profiles show the country is not a ranking barrier. Two of them set their timezone to London/UTC+1 labels, which is optional.

### Gaps
- Member-since dates, total hours, languages and certifications were not returned by the API for any profile. Account age can only be estimated from person-ID magnitude (inferred, imprecise).
- Last review date and review text: only 1 review comment (Raheel) and a few scores (Paula) were visible. The API shows only the 10 most recent contracts, mostly in progress.
- Project Catalog offerings and prices are not exposed by `get_profile`, so fixed package prices could not be verified.
- 3 strong profiles (Yurii Z., Ali R., Tooba D.) returned PERMISSION errors.
- Earnings for Syed Muhammad A. and Christopher G. were not returned (likely hidden by the freelancer — inferred).

---

## Q2. Title formulas: keywords used

### Takeaway
Winning titles follow a "**Role | Platforms/Formats | Outcome or niche**" pipe formula of 39–70 characters, and most run close to the ~70-character limit. Nearly all include the literal phrase "Video Editor". The most common add-ons are Reels and YouTube (13/25 each), short-form (10/25), ads/Meta/DTC/performance (11/25), TikTok (9/25), Shorts and UGC (8/25 each) and AI (7/25). **No title in the 25 used "CapCut", "Premiere", "After Effects", "viral" or "captions"**; tools live in skills and overview, not the title.

### Cited Findings
- Keyword counts across the 25 titles in the Q1 table (computed from exact title strings):
  - "Video Editor": 24/25
  - "Reels": 13/25
  - "YouTube": 13/25
  - Ads/Meta/DTC/performance: 11/25
  - "Short-form"/"short form": 10/25
  - "TikTok": 9/25
  - "Shorts": 8/25
  - "UGC": 8/25
  - "AI": 7/25
  - "VSL": 5/25
  - "Podcast": 5/25
  - Self-applied seniority ("Top Rated", "Top 1 Percent", "EXPERIENCED", "Senior", "Expert"): 5/25
  - "Convert"/"Sales": 4/25
  - "Talking-Head": 3/25
  - "Retention": 1/25
  - "CapCut" / "Premiere" / "After Effects" / "viral" / "captions": 0/25
  — [Q1 table sources above]
- Title lengths ranged 39–70 characters; 14 of 25 were 64–70 characters, i.e. using almost the full title field — [Q1 sources]
- **Formula A — "Short-Form Video Editor | <format/outcome>"** (strongest on the [S-SF] query):
  - "Short Form Video Editor | Ads That Actually Convert" — Reid, #1 [S-SF]
  - "Short-Form Video Editor | Ads, Meta Reels, UGC" — Serhii, #6 [S-SF]
  - "Short-Form Video Editor | UGC Ads | VSL | Reels & TikTok | Get Sales" — Syed, #5 [S-SF]
  - "Short-Form Video Editor | High-Retention Reels, TikTok & Shorts" — Shams, #4 [S-TT]
  - — [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1); [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54)
- **Formula B — "<Platform-anchored> Video Editor | Reels, Shorts…"**:
  - "YouTube Video Editor | Reels, Shorts & Motion Graphics" — Hafsa, #1 on both [S-RE] and [S-YS]
  - "Video Editor | YouTube, Tiktok, IG, LinkedIn | Long & Short Form" — Vo N., #2 [S-YS], #3 [S-TT]
  - — [Hafsa](https://www.upwork.com/freelancers/~01839f946ded0eeacf); [Vo](https://www.upwork.com/freelancers/~0164bae49ec98f51a9)
- **Formula C — Niche/format specialist:**
  - "Real Estate & Contractors Video Editor | Reels, VSLs & Podcast" — Hammad
  - "Podcast Video Editor | YouTube Podcast Specialist" — Fahad, $200K+
  - "Talking-Head Video Editor | YouTube, VSL & Reels | Motion Graphics" — Abdullah
  - "AI Video Ads & UGC Editor | Scroll-Stopping Ads for DTC Brands" — Ammad
  - — [Hammad](https://www.upwork.com/freelancers/~01e69c3cf80eef0e45); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415)
- **Formula D — Generalist/authority:** "Top 1 Percent Professional Video Editor" (Rahool, 1,218 jobs, #1 [S-CC], #11 [S-TT]). It works for him because of his volume; it contains no platform keyword — [Rahool](https://www.upwork.com/freelancers/~0188d110886cca6ed1)
- Outcome words that appear in titles: "Ads That Actually Convert" (Reid), "Get Sales" (Syed), "Ads That Convert" (Hani, Val), "Scroll-Stopping Ads" (Ammad), "High-Retention" (Shams) — [Q1 sources]
- Search-result titles from non-profiled editors show the same patterns:
  - "Short Form Video Editor | YouTube Shorts, Reels & TikTok Editor" (Tatheer A., #8 [S-SF] despite $2K+ and 1 job)
  - "Short Form Video Editor for Personal Brands, Coaches & Founders" (Bui N.)
  - "VSL Expert | Short-Form Video Editor | High-Retention Reels & Ads" (Abdul M.)
  - "YouTube Video Editor | Long-Form & Shorts | 100M+ Views | Top Rated" (Md Jesan A.)
  - "YouTube Automation | Video Editing | Shorts | 45M+ Views Generated" (Muhammad W.)
  - "Podcast Video Editor & Manager | Strategy & Distribution | 425M+ Views" (Sonal A.)
  - — [S-SF], [S-YS], [S-POD]

### Inferences
- **(inferred)** Upwork search appears to keyword-match titles strongly. Low-earning profiles whose titles repeat the exact query phrase ranked well, e.g. Tatheer A. (#8 [S-SF], #12 [S-TT], #14 [S-RE], #14 [S-YS]) with "Short Form Video Editor | YouTube Shorts, Reels & TikTok Editor" and just 1 job. Raheel A. ranked #17 on [S-SF] with only one short-form skill tag. Matching the literal query phrase in the title is therefore high-leverage for a new profile.
- **(inferred)** Putting a view-count claim in the title ("100M+ Views", "45M+ Views", "425M+ Views") is used by mid-tier profiles. It is not used by the top earners, who put proof in the overview instead.

### Gaps
- The Upwork ranking algorithm is not documented in the tool output. All ranking-cause statements are inferences from observed positions.

---

## Q3. Overview hooks and structure

### Takeaway
Top profiles open with one of four hooks in the first ~300 characters:
- **Pain question** ("Why is your short-form content getting views but not converting?", "Your video looks great. So why isn't anyone buying?")
- **Free-sample offer** ("Get the First 15 Seconds of Your Video Edited Free", "Get a FREE 20 second podcast teaser", "Send me a raw clip, and I'll turn it into a 30 second… edit")
- **Stat stack** ("🏆 Top Rated Plus… ⏱️ 2200+ hours… 🚀 15M+ Views")
- **Results bullets** ("📈 Proven Results: 🚀 0 to 30,000 subscribers in 6 months")

The body then follows: services/formats → named clients or view/ROAS numbers → process (send footage + reference video, 24–48h first draft, defined revisions) → tools → CTA ("Invite to Job"). It often ends with a keyword-stuffing block aimed at Upwork matching.

### Cited Findings
- **Pain/question hooks:**
  - Syed: "Why is your short-form content getting views but not converting? What if the fix is in the first 3 seconds?"
  - Ammad: "Your video looks great. So why isn't anyone buying?"
  - Hani: "Tired of wasting time and money on content that doesn’t convert?"
  - Reid: "🚨 If your ad doesn’t grab attention in the first 3 seconds, you’ve already lost the sale."
  - Ayomide: "I'll be honest… most videos don't have a views problem or a conversion problem; they have an attention problem."
  - — [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589); [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1); [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556)
- **Free-sample / risk-reversal offers placed first or prominently** (7 of 25):
  - Khizar: "Get the First 15 Seconds of Your Video Edited Free."
  - Fahad: "Get a FREE 20 second podcast teaser"
  - Hani: "Get the First 25 Seconds of Your Video Edited Free."
  - Ammad: "I'll edit your first 10 seconds as a free 'hook edit.'"
  - Shamima: "Send me a raw clip, and I’ll turn it into a 30 second, high retention video edit."
  - Syed: "free, honest audit within 24 hours"
  - Tarun: "one low cost sample video"
  - — [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f); [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Tarun](https://www.upwork.com/freelancers/~01e797aa302e0e51dc)
- **Results-led claims (views/followers/money):**
  - TikTok channel "to over 700,000 followers" (Khoa)
  - "0 to 30,000 subscribers in just 6 months" (Faraz)
  - "15M+ Views" (Shams)
  - "110M+ Combined Content Views" (Hammad)
  - "100M+ views generated" (Anu F.)
  - "In 2025 alone… over 50 million views" (Shamima)
  - "$300k+ in revenue… CPA from $13 to $6… 22.7M views" (Ayomide)
  - "Improved retention up to 70%" (Serhii)
  - "Scaled an Instagram page from 5 to 429 followers in just 9 posts" (Hani)
  - — [Khoa](https://www.upwork.com/freelancers/~017142a33a9cd51e6b); [Faraz](https://www.upwork.com/freelancers/~01520d25d1f66f5703); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Hammad](https://www.upwork.com/freelancers/~01e69c3cf80eef0e45); [Anu F.](https://www.upwork.com/freelancers/~01442ee478a70618cf); [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f); [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556); [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589)
- **Named clients/brands:**
  - Syed: "Bellroy, Captions App, Efani, and HEYS Luggage"
  - Shams: "Dr. Squatch, Orbio World, and Stryda Movement"
  - Ammad: "Bliss Collagen, Femmelife, and Metrm… Omar Raja (12M+ YouTube subscribers)"
  - Hani: "Cryptonary… Christian Guzman Fitness, Chelsea Miller Knives"
  - Paula: "Kachins"
  - MD A. (portfolio): "Relatables Podcast"
  - — [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589); [Paula](https://www.upwork.com/freelancers/~01ddfa32109e3c2789); [MD A.](https://www.upwork.com/freelancers/~01f46fff441d8a4b88)
- **Process / turnaround language:**
  - Shams: "You send raw footage and 1-2 reference videos… First draft usually within 48 hours… 2 rounds of revisions included"
  - Abdullah: "You send footage and a reference video… revision rounds defined up front… a fixed price per video"
  - Raheel: "Reliable 1-3 day turnaround"
  - Khizar (portfolio): "one main cut plus three quick test versions… Turnaround 24 to 48 hours"
  - Hani: "20-40 videos weekly"
  - — [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546); [Raheel](https://www.upwork.com/freelancers/~01438e050770e2debd); [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589)
- **Retention vocabulary in short-form overviews:** "first 3 seconds" / "1–3 seconds" / "hook", "pattern interrupts", "captions for sound-off", "pacing", "B-roll", "multiple variations for testing" — [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54)
- **Keyword blocks aimed at Upwork matching:**
  - Syed's section header literally reads "Keywords for UMA and Client Matching:" (Uma is Upwork's AI)
  - Reid: "Other Skills:" list
  - Khizar: "Also Specialize In" list of ~80 terms
  - Shams and Fahad: "EXPERTISE:" lines
  - Shamima: "My Core Skills" paragraph
  - Paula: final pipe-separated keyword line
  - — [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1); [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f); [Paula](https://www.upwork.com/freelancers/~01ddfa32109e3c2789)
- **CTAs:** "Click the 'Invite to Job' button" (Shams), "Click 𝐈𝐧𝐯𝐢𝐭𝐞 to Job" (Syed), "Send an invite" (Ayomide), "send me your product and the angle you wanna test" (Khizar), "Send me a link to a video you like and a sample of your raw footage" (Abdullah) — [sources as above]
- **Formatting:** Unicode bold/italic headings (𝐁𝐨𝐥𝐝, 𝙄𝙩𝙖𝙡𝙞𝙘) and emoji bullets are common (Reid, Khoa, Syed, Shams, Christopher). Abdullah, Raheel, Serhii and Ammad use plain text with ALL-CAPS section headers instead. Both styles appear among $50K–$200K+ earners — [Q1 sources]
- **Freshness stamps:** Serhii "Updated October 27, 2026"; Shams "Last Updated: Sep 27, 2026" — [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54)

### Inferences
- **(inferred)** The first ~200 characters (what shows in search cards and proposals) are spent on a client-pain hook or a free-sample offer, not on "Hi, I'm X". Only Yevhen (whose earnings come from 14 years of history) and Tarun open with a greeting or a note.
- **(inferred)** For someone with zero reviews, the reusable elements are: the free-sample/risk-reversal offer, the clear process (reference video → 48h draft → 2 revisions), retention vocabulary, and a keyword block. Numeric results claims require real data and should not be fabricated.

### Gaps
- No data on whether keyword-stuffed blocks help or hurt conversion; only that many high earners use them.

---

## Q4. Niche positioning: generalist vs specific

### Takeaway
The dataset splits into three groups:
- **Volume generalists** with huge histories and cheap rates (Rahool $10, Hafsa $5, Yevhen $34 with $1M+).
- **Short-form generalists** across Reels/TikTok/Shorts (Shams, Tarun, Vo, Shamima, Paula).
- **Specialists**, a growing group, who charge the dataset's higher rates ($19–$30) and win larger contracts:
  - Paid-social/DTC/UGC ads (Reid, Serhii, Val, Ammad, Khizar, Raheel, Ayomide)
  - Podcast clips (Fahad $200K+, MD A.)
  - Talking-head/personal brand (Abdullah)
  - Industry niche: real estate & contractors (Hammad)

"AI UGC / AI avatar ads" is the fastest-emerging sub-niche in October 2026.

### Cited Findings
- **DTC / paid-ads / UGC positioning** is the most common specialisation:
  - Reid: "Ads That Actually Convert"; recent jobs "Fuego Paid Social Video Editing — 5 Performance Ads"
  - Serhii: "TikTok Ads, Meta Reels… e-commerce DTC brands & agencies"
  - Val: "UGC & DTC Ads That Convert"; recent contracts $1,050 and $560
  - Ammad: "Scroll-Stopping Ads for DTC Brands"
  - Raheel: "DTC Ads, UGC & Meta Performance Marketing"
  - Ayomide: "Performance Video Editor | Paid Ads"
  - — [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1); [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Raheel](https://www.upwork.com/freelancers/~01438e050770e2debd); [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556)
- **AI-video sub-niche:**
  - Khizar: "AI Video Editor | UGC & AI Avatar Ads"; recent "AI Video Creator Needed (Higgsfield / HeyGen) for 30-Second Meta Ad"
  - Val: recent "Seedance Paid Media Ads", "Full-Time AI Video Editor – Cartoon, Pixar-Style, UGC & VSL Ads (10-15/week)"
  - Ammad: "AI Cartoon Video Ad" $415
  - Several portfolios show "Pixar-style AI" ads for supplement/wellness brands (Khizar, Val, Hafsa)
  - — [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5); [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Hafsa](https://www.upwork.com/freelancers/~01839f946ded0eeacf)
- **Podcast clips niche:**
  - Fahad ($27, $200K+): "I'll help you 3X your podcast's reach and viewership in 90 days"
  - MD A. ($100K+): "I focus only on podcast video editing and content repurposing"
  - Both mostly appear on [S-POD]; that query's results are dominated by audio-podcast producers, e.g. Nicolae Bogdan B. $400K+, Jon K. $300K+, Cameron S. $77.99/hr
  - Podcast-to-clips also appears as a secondary service in short-form profiles (Shams, Hafsa, Vo)
  - — [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [MD A.](https://www.upwork.com/freelancers/~01f46fff441d8a4b88); [S-POD]
- **Talking-head / coaches / personal brand:**
  - Abdullah: "talking-head content for coaches, founders and personal brands"
  - Bui N. (search only): "Short Form Video Editor for Personal Brands, Coaches & Founders" [S-SF]
  - — [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546)
- **Industry niche:** Hammad lists Realtors, General Contractors, HVAC & Plumbing, Electrical, Remodeling, Landscaping, Painting & Flooring, Cleaning, Pressure Washing. His recent jobs match (kitchen cabinetry brand, FPV drone home tours). Khoa (not niche-titled) also shows several real-estate reels among recent jobs — [Hammad](https://www.upwork.com/freelancers/~01e69c3cf80eef0e45); [Khoa](https://www.upwork.com/freelancers/~017142a33a9cd51e6b)
- **Faceless / YouTube automation** appears as a separate cluster on [S-YS] and [S-SF]:
  - Muhammad R. "Faceless YouTube Automation Specialist | Documentary Video Editor" (#7 [S-SF], #1 [S-VCC])
  - Aqib J. "Fully set up youtube automation cash cow channel…" ($100K+)
  - Faraz's "0 to 30,000 subscribers" claim is for a faceless channel
  - — [S-SF]; [S-VCC]; [S-YS]; [Faraz](https://www.upwork.com/freelancers/~01520d25d1f66f5703)
- **Sports niche** among Nigerian editors: Isaac T. "YouTube Sports Video Editor | NBA, NFL, Shorts & Reels"; Alonge T. "YouTube Video Editor for Sports | NFL, NBA, MMA, Soccer | Short-form" — [S-NG]
- **Generalist volume players:**
  - Rahool: everything from wedding to UGC; "lower price than others, with an unlimited number of revisions"; $10/h; 1,218 jobs
  - Hafsa: $5/h; 508 jobs
  - Yevhen: 1,499 jobs
  - — [Rahool](https://www.upwork.com/freelancers/~0188d110886cca6ed1); [Hafsa](https://www.upwork.com/freelancers/~01839f946ded0eeacf); [Yevhen](https://www.upwork.com/freelancers/~01a65fce2994811b62)

### Inferences
- **(inferred)** The highest observed per-contract values for short-form work went to results-led "performance" editors: Ayomide $6,233 (creator retainer); Val $1,050 (UGC Meta ads); Ammad $650 (VSL); Fahad $2,400 (podcast). Low-rate generalists earn through volume.
- **(inferred)** For a newcomer, a narrow positioning creates a coherent title, portfolio and proposal story despite having no reviews. Examples: "Short-form editor for coaches/talking-head", "podcast clips", "UGC/Meta ads for DTC", or an industry such as real estate.

### Gaps
- No direct data on which niche has the most open jobs right now; `find_jobs` was not run within this research scope.

---

## Q5. Pricing patterns: hourly vs per-video fixed prices, packages

### Takeaway
Listed hourly rates are low and tightly clustered: **median $19.99/hr, mean $20.56, range $5–$34** across 25 established profiles. Nigerian TR+ editors list $15–$20. But **~72% of these editors' jobs are fixed-price** (6,705 fixed vs 2,632 hourly jobs summed across the 25 profiles). Recent short-form fixed contracts are typically **$15–$100 per video or small batch**, with larger bundles or retainers at $200–$6,233. Hourly contracts actually bill close to the listed rate (e.g. $27/h, $20/h, $15/h, $10/h, $5/h). Fixed per-video pricing and paid trials are the norm. "Package" prices could not be verified (Project Catalog not exposed).

### Cited Findings
- **Listed hourly rates (n=25):**
  - $5: Hafsa
  - $10: Rahool, Raheel
  - $15: Shams, Hammad, Shamima, MD A., Anu F., Paula E.
  - $16: Khoa
  - $19 / $19.99: Ammad, Syed, Khizar
  - $20: Tarun, Faraz, Ayomide
  - $25: Hani
  - $27: Fahad
  - $28: Serhii
  - $29.99–$30: Val, Reid, Christopher, Vo, Abdullah
  - $34: Yevhen
  - Median $19.99 — [Q1 table]
- **Fixed vs hourly job mix** (sum of profile totalFixedJobs vs totalHourlyJobs over the 25): fixed jobs dominate for almost every profile (e.g. Yevhen 1,393 F / 106 H; Khizar 388 F / 74 H; Ammad 216 F / 33 H). The exceptions are Serhii (67/99), Fahad (101/152) and Christopher (165/157) — [Q1 table]
- **Observed recent fixed short-form contract amounts:**
  - $5 "Short Form Social Media Editor" (Yevhen)
  - $15 "30 second video" (Rahool)
  - $20 "Video Editor for Meta Ads" (Serhii)
  - $20 "Short-Form Video Editor for Finance/Real Estate Talking-Head Clips" (Faraz)
  - $25 "Short-Form Video Editor" (Shams)
  - $25 "Short-Form Vertical Video Editor" (Faraz)
  - $30 "Short-Form Video Editor (TikTok Shop Affiliate Content)" (Abdullah)
  - $40 "Short video edit" (Shams)
  - $48 "Instagram reels" (Shams)
  - $50 "2 reels" (Vo)
  - $50 "X2 Video Reel Edits" (Hammad)
  - $60 "DTC Editing Work" (Khizar)
  - $70 "meta ads short form video editing" (Hani)
  - $80 "Small videos editing without sound" (Khoa)
  - $90 "Video Editor - Short form Meta Ads" (Tarun)
  - $120 "UGC Video Editor – Short-Form Ads for Disc Golf Ecommerce Brand" (Serhii)
  - $130 "Short-Form Video Editor Needed for Instagram & TikTok" (Anu F.)
  - $150 "Short-Form Video Editor for Kitchen Cabinetry & Home Remodeling Brand" (Hammad)
  - $425 "Short Reels Video Editor Needed" (Ayomide)
  - $540 "Short form video editor" (Fahad)
  - $1,050 "UGC Video Editor for Meta Ads" (Val)
  - $6,233 "Short-Form Video Editor - Reels/TikTok/Shorts for Established Health Creator (800K+)" (Ayomide)
  - $10,135 "Short Form Video Editor for Boutique Hotel & Restaurant" (Paula)
  - — [Q1 per-profile sources]
- **Per-video price evidence in client job titles:** "Food/Supplements Niche Channel 100 Videos For $3,000" (= $30/video, Hafsa); "Video Editor – Full Time Work from Home (Fixed Price per Video, Paid Trial)" (Syed); "Paid test for an ongoing per-asset editing role" (Reid) — [Hafsa](https://www.upwork.com/freelancers/~01839f946ded0eeacf); [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1)
- **Effective hourly from hourly contracts (earned ÷ hours):**
  - Fahad: $27 and $40
  - Serhii: $27 and $28
  - Val: $30
  - Hani: $25
  - Faraz: ≈$21
  - Tarun: $20 (and $10)
  - Ayomide: $20
  - Khizar: $20
  - Shamima: $15, $12, ≈$10
  - Vo: $15 / $20
  - Raheel: ≈$15 (on a 1,566-hour contract)
  - Rahool: $10
  - Hafsa: $5
  - — [Q1 per-profile sources]
- **Paid trials/tests are common:** "Trial video - 1" $15 (Ammad); "Trial video" 1h $10 (Raheel); "TEST VIDEO" $208 (Shams); "Paid Test | DealFuel Ads" $200 (Val); "60s AI Animated Story Ad… – Trial" $110 (Khizar); "Trial Episode Edit" $400 (MD A.); "Short-Form Video Editor for Land Listings: Paid Tryout" $475 (Ayomide) — [Q1 sources]
- **Retainer language in client posts:** "DTC Video Ad Editor Meta | $1K-$2K Monthly Retainer + Performance Bonuses" (Ammad); "Finish a 60s Instagram Reel… + view bonuses, potential ongoing" (Hani); "Ongoing, ~4 Episodes/Month" (MD A.) — [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589); [MD A.](https://www.upwork.com/freelancers/~01f46fff441d8a4b88)
- **Consultations as a priced product** (11/25 offer a paid "Video & Audio Consultation" or "Marketing Consultation"): starting prices $10 (Rahool, Khizar), $30 (Yevhen, Hani), $50 (Faraz, Hammad), $75 (Ammad), $100 (Serhii, Vo, Anu F.), $150 (Shamima). Rahool and Yevhen show "30 minute consultation" contracts in recent history — [Q1 sources]
- **"Bulk discount" / "unlimited revisions" price-led messaging** appears only among lower-rate generalists (Tarun "best discounts on bulk work order"; Rahool "lower price than others, with an unlimited number of revisions") — [Tarun](https://www.upwork.com/freelancers/~01e797aa302e0e51dc); [Rahool](https://www.upwork.com/freelancers/~0188d110886cca6ed1)

### Inferences
- **(inferred)** A realistic entry price structure for a new short-form editor, by matching the dataset:
  - Listed hourly rate in the $10–$15 band (the Nigerian TR peers sit at $10–$20)
  - Per-video fixed quotes in the $15–$50 range for a single 30–60s reel
  - Batch quotes for 5–10 reels
  - Willingness to do a small paid trial
- **(inferred)** Established editors' listed rates are not much higher than newcomers'. Their earnings come from volume, retainers and long hourly contracts, not high hourly rates.

### Gaps
- Project Catalog package prices (e.g. "3 Reels for $X") are not visible through this API.
- Total hours billed per profile are unavailable, so lifetime effective hourly cannot be computed.

---

## Q6. Skill tags used most often

### Takeaway
Across the 25 profiles' exact skill lists, the core stack is:
- **Video Editing** (25/25)
- **Adobe Premiere Pro** (20)
- **Video Post-Editing** (18)
- **Motion Graphics**, **Adobe After Effects**, **Instagram Reels**, **YouTube Shorts** (17 each)
- **Video Editing & Production** (16)
- **TikTok Video** (14)
- Social Media Video (12)
- Short Video Ad, Video Production, YouTube Video (11 each)

CapCut appears in only 6 of 25 skill lists. Most established profiles fill all 20 skill slots (14 of 25 had exactly 20).

### Cited Findings
- **Skill frequency (count of 25 profiles):**
  - Video Editing 25
  - Adobe Premiere Pro 20
  - Video Post-Editing 18
  - Motion Graphics 17
  - Adobe After Effects 17
  - Instagram Reels 17
  - YouTube Shorts 17
  - Video Editing & Production 16
  - TikTok Video 14
  - Social Media Video 12
  - Short Video Ad 11
  - Video Production 11
  - YouTube Video 11
  - Color Grading 9
  - Podcast Editing 9
  - Short Video 7
  - Video Intro & Outro 7
  - Social Media Content Creation 6
  - CapCut 6
  - TikTok 6
  - Video Ad 5
  - UGC 5
  - Video Design 5
  - Content Editing 5
  - Podcast 5
  - Video Sales Letter 4
  - AI Video Generation 4
  - Video Commercial 4
  - Video Advertising 4
  - Graphic Design 4
  - Audio Editing 4
  - YouTube Ads 3
  - TikTok Ad 3
  - Canva 3
  - Instagram 3
  - Social Media Advertising 3
  - — [exact skill lists in Q1 per-profile records]
- **Number of skills listed:** 20 (the max) on 14 profiles; 14–16 on 8; 9–11 on 3 (Vo 10, MD A. 11, Paula 9) — [Q1 sources]
- **Order of skills:**
  - Platform-first: Faraz (Instagram Reels; TikTok Video; YouTube Video; YouTube Shorts… first)
  - Tool-first: Tarun (CapCut first); Rahool (DaVinci Resolve first)
  - Niche-first: Fahad (Podcast Editing; Podcast Content… first); Ammad (Video Editing; AI Content Editing; AI Content Creation; AI Video Generation; UGC…)
  - — [Faraz](https://www.upwork.com/freelancers/~01520d25d1f66f5703); [Tarun](https://www.upwork.com/freelancers/~01e797aa302e0e51dc); [Rahool](https://www.upwork.com/freelancers/~0188d110886cca6ed1); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415)
- **Newer/AI skill tags in use:** "AI Video Generation", "AI-Generated Video", "AI Content Creation", "AI Content Editing", "AI Image Generation", "higgsfield", "Clipper" (Ammad), "ai video ads" and "Kling AI" (Shariful I. search card), "Seedance" (God'swill A., Nigeria) — [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5); [S-SF]; [S-NG]
- The tool help for `find_freelancers` states that skills are applied as structured facets and AND-matched, while query text is AND-matched against profile text. So exact Upwork skill names (e.g. "Instagram Reels", "YouTube Shorts", "TikTok Video", "Short Video Ad", "UGC", "CapCut") are what filter-based client searches hit — [Upwork MCP get_tool_help("find_freelancers"), retrieved 2026-10-27]

### Inferences
- **(inferred)** A newcomer should fill all available skill slots, starting with the exact platform and format tags clients filter on: Instagram Reels, YouTube Shorts, TikTok Video, Short Video, Short Video Ad, Social Media Video, UGC, Podcast Editing. Then the tool tags: Adobe Premiere Pro, CapCut, Adobe After Effects, Motion Graphics, Video Post-Editing, Video Editing.

### Gaps
- No visibility into how Upwork weights skill-order or skill count in ranking.

---

## Q7. Portfolio presentation

### Takeaway
Strong short-form portfolios use:
- **Keyword-rich item titles** in a "Format | Platform | Tool/Outcome" form (Serhii, Val, Shamima, Vo).
- **Results or view counts in the title** ("23M Views Viral TikTok Clip", "Short-Form Content – 1K to 20K+ Views", "Youtube growth 700 - 4k+ subscribers").
- **Designed cover thumbnails**: branded title cards, YouTube-thumbnail style, and explicit **BEFORE/AFTER** comparisons.
- **Named clients** or "style of" references (Alex Hormozi, Iman Gadzhi, Ali Abdaal, Magnates Media, Hillier Smith).

Portfolio size varies widely (1 to 452 items) and does not by itself predict earnings.

### Cited Findings
- **View-count / results titles:**
  - MD A.: "23M Views Viral TikTok Clip | Podcast Short-Form Editing", "2M+ Views Podcast Clip | 1+ Year Editing Partnership", "1M+ Views Short-Form Clip: Mads World Podcast"
  - Ayomide: "Short-Form Content – 1K to 20K+ Views", "Youtube growth 700 - 4k+ subscribers"
  - Khoa: "Instagram Reels" (desc: "reached 2 million views and 9.3 million views")
  - MD A. thumbnail is a TikTok screenshot showing 3.6M likes / 289.7K saves
  - — [MD A.](https://www.upwork.com/freelancers/~01f46fff441d8a4b88); [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556); [Khoa](https://www.upwork.com/freelancers/~017142a33a9cd51e6b)
- **Before/after:**
  - Val: "Before vs After | Ad Performance Optimization"
  - Christopher: cover image split "BEFORE / AFTER… ATTENTION GRABBING CAPTIONS" with a checklist (Captions, Zoom-ins, B-roll, Transitions, Sound effects, Engaging hooks) and tool logos (Pr, Ae, CapCut, DaVinci)
  - Ayomide: "AFTER WORKING WITH US" with circled YouTube view counts
  - — [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8); [Christopher](https://www.upwork.com/freelancers/~017a268103c52cb2db); [Ayomide](https://www.upwork.com/freelancers/~019ddcf392d482f556)
- **SEO-structured item titles:**
  - Serhii: "UGC Video Ad | TikTok & Reels Editing | Adobe Premiere Pro"; "E-commerce Video Ads | TikTok & Reels Editing | Premiere Pro"
  - Shamima: "YouTube Video Editing | Cash Cow Video Editing | Faceless" (plus hashtags in descriptions)
  - Vo: "Youtube Shorts/Tiktok Video Editing"
  - Paula: "Short-Form Video Editing | Med Spa"
  - — [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f); [Vo](https://www.upwork.com/freelancers/~0164bae49ec98f51a9); [Paula](https://www.upwork.com/freelancers/~01ddfa32109e3c2789)
- **Uniform branded thumbnails:**
  - Shamima: neon-pink "Promo Video Editor" / "Event Video Editor" cards
  - Fahad: green glowing "UGC Ads" / "Ecommerce Ads" cards
  - Shams: black cards "STORYTELLING Narration Style videos… Click to view"
  - Ammad: "PERSONAL BRANDING… PERFECT FOR COACHES & CREATORS"
  - — [Shamima](https://www.upwork.com/freelancers/~01ae341509f3a4484f); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415)
- **Raw-frame thumbnails** (an actual vertical frame with burned-in captions): Reid ("My 3-Step Social Video Strategy"), Val ("turned my boring clips into ads"), Faraz ("YOU ARE NOT"), Abdullah ("but that's not to INTIMIDATE YOU"), Anu F. ("THIS IS THE ONLY WAY TO SURVIVE IF YOU'RE BURIED ALIVE") — [Reid](https://www.upwork.com/freelancers/~0153fee2c2e51fddb1); [Val](https://www.upwork.com/freelancers/~0167007f1fbab4e0c8); [Faraz](https://www.upwork.com/freelancers/~01520d25d1f66f5703); [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546); [Anu F.](https://www.upwork.com/freelancers/~01442ee478a70618cf)
- **"Style of" references** used as portfolio titles:
  - "Video editing in the style of Alex Hormozi" (Serhii)
  - "Closer to Alex Hormozi style" (Hani)
  - "Iman Gadzhi Style Video Editing", "Sunny V2 Style Edits", "Magnatesmedia Style Edits" (Syed)
  - "Personal Brand YouTube Edit — Iman Gadzhi Style Talking Head" (Abdullah)
  - "Hillier Smith Style", "Ali Abdaal Style" (Khizar)
  - — [Serhii](https://www.upwork.com/freelancers/~01d85999f0a93aadf9); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589); [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Abdullah](https://www.upwork.com/freelancers/~0169d35b8373416546); [Khizar](https://www.upwork.com/freelancers/~013a1069f3537cc8e5)
- **Testimonial items in the portfolio:** "Hear It From My Clients" (Shams); "Client Testimonials | Video Editing & Content Repurposing" (Fahad); "One of our many long-term satisfied clients" (Hani) — [Shams](https://www.upwork.com/freelancers/~017efce70163499b54); [Fahad](https://www.upwork.com/freelancers/~01d11ab1b86ae99b3d); [Hani](https://www.upwork.com/freelancers/~0103fb9cd267199589)
- **Portfolio size vs results:** Reid has 1 item ($100K+, #1 [S-SF]); Tarun 2 ($80K+); Faraz 4 ($100K+); Christopher 5; Fahad 6 ($200K+); Yevhen 452 ($1M+) — [Q1 table]
- **Weaknesses seen even in top profiles:** non-video items (3D renders, websites, book covers) in Syed's and Raheel's portfolios; a bracket-template title left unfilled in Ammad's ("B2B Video for [SaaS / Consultant]"); stock-image thumbnails in Tarun's — [Syed](https://www.upwork.com/freelancers/~0172a72d3c9bbeca91); [Raheel](https://www.upwork.com/freelancers/~01438e050770e2debd); [Ammad](https://www.upwork.com/freelancers/~01af61047f5376d415); [Tarun](https://www.upwork.com/freelancers/~01e797aa302e0e51dc)

### Inferences
- **(inferred)** For a profile with no reviews, the portfolio has to do the trust work. Use 6–12 vertical short-form samples, each with:
  - an SEO title naming format + platform + niche
  - a cover frame showing a hook caption, or a before/after
  - a 2–4 line description listing the hook, captions, pacing and B-roll choices
- **(inferred)** "Spec" samples re-editing public-domain or self-shot footage in a named popular style (Hormozi-style captions, podcast clip with split-screen) are a common way these editors label samples. Claiming client results for spec work would be misrepresentation.

### Gaps
- `get_profile` returns only the first image(s) and text of portfolio items. Video lengths and whether items embed actual 9:16 video were not inspectable for all items.

---

## Q8. Ranking: what top-ranked profiles have in common per query

### Takeaway
Across the 8 queries (200 results, none boosted), top positions go to profiles whose **title contains the exact query phrase** and that have **Top Rated / Top Rated Plus** plus JSS ≥ 90. Earnings and job count matter less than keyword match:
- $2K+ / 1-job profiles ranked top-15 on four queries.
- The $1M+ editor ranked only #25 on [S-TT].
- Some profiles dominated multiple queries by stacking platform keywords in the title. Examples: Luong Tan D., Vu P., Tatheer A., Giang P., Van Trung N. and Kaiwan I. each appeared in 5 of the 7 short-form queries.

### Cited Findings
- **Top 5 per query** (rank: name, rate, badge, earnings, title):
  - **[S-SF] "short form video editor"**
    1. Reid N. ($30, TR+, $100K+, "Short Form Video Editor | Ads That Actually Convert")
    2. Luong Tan D. ($15, TR, $30K+, "Video Editing | Short-Form Video Editor | YouTube Videos | Meta Ads")
    3. Khoa Nguyen B. ($16, TR+, $100K+)
    4. Shariful I. ($20, TR, "Short-Form Video Editor | Reels, TikTok, Shorts Editing Expert")
    5. Syed Muhammad A. ($19.99, TR+)
  - **[S-TT] "TikTok video editor"**
    1. Saniya A. ($35, TR, $10K+, "YouTube, Reels & TikTok Video Editor | Retention-Focused Strategist")
    2. Vu P. ($10, TR+, $10K+, "Professional Video Editor | Instagram | YouTube | TikTok Reels")
    3. Vo N.
    4. Shams Y.
    5. Shariful I.
  - **[S-RE] "Reels editor"**
    1. Hafsa H. ($5, TR+, $70K+)
    2. Khoa Nguyen B.
    3. Luong Tan D.
    4. Andrew L. ($15, TR, $7K+, "Video Editor | Reels, Ads, YouTube, Podcasts & AI Video")
    5. Vu P.
  - **[S-YS] "YouTube Shorts editor"**
    1. Hafsa H.
    2. Vo N.
    3. Giang P. ($10, TR, $50K+, "Professional Video Editor | YouTube, Ads, Shorts, Reels, TikTok")
    4. Barzaan Ali K. ($9, TR, $30K+, "YouTube Video Editor | Faceless & Talking Head Video Editing")
    5. Fawas P. ($15, TR+, $400K+, "Certified Youtube Strategist | 10 Years Of Experience | Video Editor")
  - **[S-UGC] "UGC video editor"**
    1. Van Trung N. ($15, TR, $20K+, "Video Editor | Short-Form, YouTube, Tiktok, Meta Ads, VSL & AI UGC")
    2. Yurii Z. ($30, TR+, "Short Form Video Editor || Meta Ads Video Editor || UGC & AI Video Ads")
    3. Serhii K.
    4. Ammad R.
    5. Van T. ($12, TR, $9K+)
  - **[S-CC] "CapCut editor"**
    1. Rahool T. (CapCut in skills)
    2. Shonkor G. ($20, TR+, $90K+, 2D animator; CapCut in skills)
    3. Van Trung N.
    4. Alexandro Damian P. ($15, no badge, $700+, "Short-Form Video Editor | Reels, TikTok & UGC Ads | Premiere & CapCut")
    5. Christopher G.
  - **[S-VCC] "video editor for content creators"**
    1. Muhammad R. ($9.99, TR+, $50K+, "Faceless YouTube Automation Specialist | Documentary Video Editor")
    2. Reid N.
    3. Luong Tan D.
    4. Antoni S. ($25, TR+, $50K+, "Senior Content Specialist/Video Editor")
    5. Khizar S.
  - **[S-POD] "podcast clips editor"**
    1. Prashant V. ($10, TR+, $40K+, audio/podcast)
    2. Sanele D. ($20, TR+, podcast manager)
    3. Nicolae Bogdan B. ($50, TR+, $400K+, "Results Driven Podcast Editor & Podcast Producer")
    4. Mervyn J. ($37.5, TR, $10K+, "Premium Podcast Video Editor | Podcast Producer | Podcasts & Clips")
    5. Ali R. ($17.99, TR+, "Short-Form Video Editor | Podcast Clips & Social Content")
- **Badge prevalence in top-25 lists:** almost every listed profile had Top Rated or Top Rated Plus. The few unbadged entries were:
  - Tatheer A. (#8 [S-SF], $5, JSS 88, $2K+, 1 job)
  - Sarita R. (#10 [S-SF], JSS 83)
  - Dua D. (#12 [S-SF], $20, JSS 100, $2K+, no jobs listed)
  - Bui N. (#19 [S-SF])
  - Ahmed E. (#21 [S-SF])
  - Mustafa I. (#6 [S-RE], $5, $2K+, 1 job)
  - Ammad R. (#4 [S-UGC], $100K+)
  - Alexandro Damian P. (#4 [S-CC], $700+)
  - — [S-SF]; [S-RE]; [S-UGC]; [S-CC]
- **Exact-phrase title match drives cross-query ranking:**
  - Tatheer A. ("Short Form Video Editor | YouTube Shorts, Reels & TikTok Editor", 1 job, $2K+, no badge) appeared at #8 [S-SF], #12 [S-TT], #14 [S-RE], #14 [S-YS], #8 [S-VCC]
  - Alexandro Damian P. ("…| Premiere & CapCut", $700+, no badge) ranked #4 on [S-CC]
  - Muhammad Shayan S. ("Short Form Video Editor, Tiktok Video Editor | Reels Editor", no earnings shown) ranked #20 [S-RE]
  - — [S-SF]; [S-TT]; [S-RE]; [S-YS]; [S-VCC]; [S-CC]
- **Big earners don't automatically rank high:** Yevhen ($1M+) #25 [S-TT], #10 [S-VCC]; Antonio S. ($1M+, "Social Media Manager | Strategy, Video Editing, Reels & Organic Growth") #13 [S-TT]; Fawas P. ($400K+) #5 [S-YS] — [S-TT]; [S-VCC]; [S-YS]
- **Consultation flag** (`offers_consultation`) appears on many top results, e.g. #1 [S-TT] Saniya A., #2 Vu P., #3 Vo N. No ranking effect could be isolated — [S-TT]
- **Profiles in ≥4 of the 7 short-form/creator queries ([S-SF], [S-TT], [S-RE], [S-YS], [S-UGC], [S-CC], [S-VCC]):**
  - Luong Tan D., Vu P., Tatheer A., Giang P., Kaiwan I., Van Trung N.: 5 each
  - Khoa, Nure E J., Shariful I., Tooba D., Hafsa, Abdullah D.: 4 each
  - Their titles stack 3–5 platform/format keywords (e.g. "Video Editor | Short-Form, YouTube, Tiktok, Meta Ads, VSL & AI UGC") — [all search sources]
- **Nigeria:** a Nigerian profile (Isaac T., $1K+, no badge) ranked #23 on the global [S-RE] query. Nigerian TR+ editors (Anu F., Ayomide O., Paula E.) did not appear in the top 25 of any global query but lead the country-filtered search — [S-RE]; [S-NG]

### Inferences
- **(inferred)** Ranking appears to weight:
  1. Keyword match of the query phrase in the title (and probably the overview/skills)
  2. Badge / JSS
  3. Earnings/volume, much more weakly than expected

  This gives a new profile with a precisely keyworded title a realistic chance to surface for long-tail queries ("CapCut editor", "Reels editor") before it has reviews. Badge-holders still dominate overall.
- **(inferred)** Because many clients search with different phrases (TikTok vs Reels vs Shorts vs short form), titles that pack 3–4 platform synonyms appear in more searches. Specialist titles rank on fewer queries but convert to higher-value contracts (per Q4/Q5).

### Gaps
- Search results reflect one client account's view on one date. Personalisation, location and the Rising Talent/new-freelancer boost were not tested. No `rising_talent=true` or `no_earnings=true` search was run.
- Profile-completeness signals (video intro, consultation, portfolio count) could not be isolated as ranking factors from 25 results per query.
