# Short-form video editors on Upwork: global cross-search rankers and no-badge rankers
**For:** Harry (new freelancer in Nigeria, short-form video editing). Goal: see how high-ranking editors write their employment history, title and overview, so he can copy what works.
**Collected:** 2026-10-27, live through the Upwork MCP (`find_freelancers` search + get_profile only; read-only). org_uid 2019193251887559564.
**Rules followed:** All data below was copied from API responses. Anything marked **(inference)** is my interpretation and not an API fact. No boosted (paid-ad) rows came up: every search row had `boosted:false`.

## API limits (what we could NOT see)
- Employment records give only **companyName + jobTitle**. The API returns no dates, no descriptions and no "other experience".
- Search results return only `top_rated` (Top Rated / Top Rated Plus). **Rising Talent is never shown as a field.** For no-badge people, "Rising Talent" below means *they appeared in a `rising_talent=true` search*. That is inferred from the filter, not read from a badge field.
- `get_profile` returns the last 10 contracts. They have start dates, earnings so far and status; feedback scores appear only on closed contracts. Search `completed_jobs` is a different number from the profile's totalJobs (profile = fixed + hourly, recalculated by the API).
- Two profiles (Syed Muhammad A., Kaiwan I.) returned no earnings in the API. Kaiwan's output was truncated after the work history; the fields we requested were all captured.
- Record IDs are Upwork snowflake-style IDs. When several employment IDs run in sequence, I read that as "entered in one sitting" **(inference)**.

## Method
Main searches (limit 25, no country filter):
Q1 "short form video editor", Q2 "TikTok video editor", Q3 "Reels editor", Q4 "YouTube Shorts editor", Q5 "UGC video editor", Q6 "podcast clips editor", Q7 "video editor for content creators".
Rising-Talent searches (same params + `rising_talent:true`): R1 = Q1, R2 = Q2, R3 = Q3, R4 = Q4.
That makes 11 searches and 275 rows. Then I ran 24 get_profile calls: group A = 12 non-Nigerians with the most main-search appearances; group B = 12 with no Top Rated / TR+ badge who appear in several searches.

### Market snapshot from the 7 main searches (175 rows)
- Badges: **TR 93, TR+ 62, no badge 20**. About 89% of first-page slots go to badge holders.
- Countries: Pakistan 71, Vietnam 42, Bangladesh 14, India 9, Philippines 9, **Nigeria 7** (all 7 are Emmanuel E., TR, who appears in 6/7 queries; excluded as asked), US 4, others 1–3.
- Q6 ("podcast clips editor") brings up a separate group of audio/podcast producers (UK, US, North Macedonia, Philippines) who barely overlap with the short-form crowd.

### No-badge rows found in the main (unfiltered) searches
| Query#rank | Name | Country | JSS | Earnings |
|---|---|---|---|---|
| Q1#3, Q2#3 | Sana A. | UAE | 88 | $1K+ |
| Q1#9 | Bui N. | Vietnam | 100 | $10K+ |
| Q1#10, Q2#6, Q3#13, Q4#13, Q7#4 | Tatheer A. | Pakistan | 88 | $2K+ |
| Q1#13 | Dua D. | Pakistan | 100 | $2K+ |
| Q1#17 | Vu D. | Vietnam | 88 | $10K+ |
| Q1#19 | Dibyendu M. | Bangladesh | 92 | $200K+ |
| Q3#2, Q4#8, Q5#7 | Mustafa I. | Pakistan | 100 | $2K+ |
| Q3#16 | Isaac T. | **Nigeria** | 95 | $1K+ |
| Q4#10 | Khang N. | Vietnam | 89 | $4K+ |
| Q5#18 | Christian Mark M. | Philippines | 100 | $4K+ |
| Q5#24, Q7#12 | Ammad R. | Pakistan | 100 | $100K+ |
| Q6#12 | Bradley M. | Canada | 100 | $2K+ |

### Cross-search aggregate (top of list; M = main-query hits /7, R = RT-query hits /4, avg = mean rank across all hits)
| M | R | avg | Name | Country | Badge (search) | JSS | Earn | Hits |
|---|---|---|---|---|---|---|---|---|
| 3 | 4 | 4.1 | Mustafa I. | Pakistan | none | 100 | $2K+ | Q3#2 Q4#8 Q5#7 R1#5 R2#5 R3#1 R4#1 |
| 7 | 0 | 10.4 | Hafsa H. | Pakistan | TR+ | 90 | $70K+ | Q1#12 Q2#24 Q3#3 Q4#7 Q5#8 Q6#10 Q7#9 |
| 6 | 0 | 9.3 | Giang P. | Vietnam | TR | 96 | $50K+ | Q1#21 Q2#12 Q3#5 Q4#2 Q5#10 Q7#6 |
| 6 | 0 | 14.8 | Emmanuel E. | Nigeria | TR | 100 | $20K+ | Q1#18 Q2#17 Q3#7 Q4#22 Q5#23 Q7#2 |
| 5 | 0 | 4.0 | Luong Tan D. | Vietnam | TR | 94 | $30K+ | Q1#2 Q2#1 Q3#10 Q4#4 Q7#3 |
| 1 | 4 | 4.6 | Dua D. | Pakistan | none | 100 | $2K+ | Q1#13 R1#1 R2#2 R3#4 R4#3 |
| 5 | 0 | 9.2 | Tatheer A. | Pakistan | none | 88 | $2K+ | Q1#10 Q2#6 Q3#13 Q4#13 Q7#4 |
| 5 | 0 | 13.6 | Abdullah D. | Pakistan | TR | 100 | $50K+ | Q1#24 Q2#4 Q3#11 Q5#9 Q6#20 |
| 5 | 0 | 15.4 | Syed Muhammad A. | Pakistan | TR+ | 98 | - | Q1#7 Q2#13 Q3#21 Q4#23 Q7#13 |
| 5 | 0 | 15.4 | Umair T. | Pakistan | TR | 100 | $5K+ | Q1#16 Q3#18 Q4#20 Q5#15 Q7#8 |
| 0 | 4 | 4.0 | Areej R. | Pakistan | RT/none-in-RTsearch | 100 | $1K+ | R1#6 R2#3 R3#3 R4#4 |
| 4 | 0 | 4.5 | Fawas P. | India | TR+ | 99 | $400K+ | Q1#6 Q2#7 Q4#1 Q5#4 |
| 0 | 4 | 5.5 | Linh D. | Vietnam | RT/none-in-RTsearch | 100 | $500+ | R1#3 R2#4 R3#10 R4#5 |
| 0 | 4 | 8.2 | Dung N. | Vietnam | RT/none-in-RTsearch | 100 | $1K+ | R1#8 R2#7 R3#16 R4#2 |
| 0 | 4 | 8.2 | Syed R. | Pakistan | RT/none-in-RTsearch | 100 | $1K+ | R1#15 R2#6 R3#6 R4#6 |
| 4 | 0 | 9.2 | Van Trung N. | Vietnam | TR | 100 | $20K+ | Q1#8 Q2#20 Q3#8 Q5#1 |
| 0 | 4 | 14.2 | Romexio R. | Indonesia | RT/none-in-RTsearch | 100 | $1K+ | R1#19 R2#8 R3#21 R4#9 |
| 0 | 4 | 14.8 | Bao N. | Vietnam | RT/none-in-RTsearch | 100 | $2K+ | R1#12 R2#16 R3#18 R4#13 |
| 0 | 4 | 14.8 | Muhammad A.(3) | Pakistan | RT/none-in-RTsearch | 100 | $4K+ | R1#22 R2#19 R3#11 R4#7 |
| 0 | 4 | 15.2 | Laiba B. | Pakistan | RT/none-in-RTsearch | 100 | $800+ | R1#23 R2#21 R3#7 R4#10 |
| 0 | 4 | 15.5 | Amna S. | Pakistan | RT/none-in-RTsearch | 100 | $1K+ | R1#9 R2#12 R3#20 R4#21 |
| 0 | 4 | 17.0 | Samar F. | Pakistan | RT/none-in-RTsearch | 100 | $6K+ | R1#24 R2#13 R3#13 R4#18 |
| 0 | 4 | 17.2 | Taha A. | Pakistan | RT/none-in-RTsearch | 100 | $1K+ | R1#17 R2#25 R3#12 R4#15 |
| 4 | 0 | 17.8 | Kaiwan I. | Pakistan | TR | 95 | - | Q1#11 Q2#25 Q3#15 Q5#20 |
| 0 | 4 | 18.8 | Joshua F. | Philippines | RT/none-in-RTsearch | - | $7K+ | R1#21 R2#15 R3#15 R4#24 |
| 0 | 3 | 1.7 | Lam P. | Vietnam | RT/none-in-RTsearch | 100 | $900+ | R1#2 R2#1 R3#2 |
| 3 | 0 | 4.0 | Minh K. | Vietnam | TR | 100 | $4K+ | Q3#1 Q4#6 Q5#5 |
| 3 | 0 | 4.7 | Barzaan Ali K. | Pakistan | TR | 100 | $30K+ | Q1#4 Q4#3 Q6#7 |
| 0 | 3 | 8.0 | Shayan F. | Pakistan | RT/none-in-RTsearch | 100 | $400+ | R1#4 R3#9 R4#11 |
| 0 | 3 | 13.3 | Gustavo V. | Brazil | RT/none-in-RTsearch | - | $1K+ | R1#11 R2#10 R3#19 |
| 3 | 0 | 15.7 | Vo N. | Vietnam | TR+ | 99 | $60K+ | Q1#20 Q2#8 Q4#19 |
| 3 | 0 | 15.7 | Antoni S. | Poland | TR+ | 100 | $50K+ | Q2#23 Q5#17 Q7#7 |
| 0 | 3 | 15.7 | Nicolas B. | Spain | RT/none-in-RTsearch | 100 | - | R1#16 R2#23 R3#8 |
| 3 | 0 | 16.0 | Khizar S. | Pakistan | TR+ | 100 | $100K+ | Q2#18 Q5#25 Q7#5 |
| 3 | 0 | 17.7 | Nure E J. | Bangladesh | TR | 100 | $50K+ | Q1#15 Q2#21 Q3#17 |
| 0 | 3 | 18.0 | Hamza A. | Morocco | RT/none-in-RTsearch | 100 | - | R2#18 R3#24 R4#12 |
| 2 | 0 | 3.0 | Sana A. | UAE | none | 88 | $1K+ | Q1#3 Q2#3 |
| 2 | 0 | 3.0 | Muhammad R. | Pakistan | TR+ | 100 | $50K+ | Q1#5 Q7#1 |
| 2 | 0 | 3.0 | Andrew L. | Vietnam | TR | 93 | $7K+ | Q3#4 Q5#2 |
| 2 | 0 | 7.5 | Reid N. | United States | TR+ | 100 | $100K+ | Q1#1 Q7#14 |
| 2 | 0 | 7.5 | Nguyen D. | Vietnam | TR+ | 100 | $20K+ | Q4#9 Q5#6 |
| 2 | 0 | 8.0 | Shamima K. | Bangladesh | TR+ | 95 | $100K+ | Q2#5 Q7#11 |
| 2 | 0 | 8.5 | Talib H. | Pakistan | TR | 100 | $5K+ | Q3#12 Q4#5 |
| 2 | 0 | 10.0 | Gul H. | Pakistan | TR | 100 | $2K+ | Q2#9 Q4#11 |
| 2 | 0 | 11.5 | Kiet T. | Vietnam | TR | 100 | $7K+ | Q3#6 Q4#17 |

(For badge, "none" = no top_rated field in an unfiltered search; "RT/none-in-RTsearch" = only seen in rising_talent=true searches.)

## Selection
- **Group A (non-Nigeria, most main-search appearances):** Hafsa H. (7), Giang P. (6), Luong Tan D. (5), Abdullah D. (5), Syed Muhammad A. (5), Umair T. (5), Fawas P. (4), Van Trung N. (4), Kaiwan I. (4), Minh K. (3), Barzaan Ali K. (3), Vo N. (3; tie-break with Antoni S./Khizar S./Nure E J. on avg rank, all ≈15.7–17.7).
- **Group B (no TR/TR+):** truly unbadged in unfiltered searches: Tatheer A., Sana A., Ammad R. Rising Talent (inferred) who also rank in unfiltered searches: Mustafa I., Dua D. RT-only multi-rankers: Areej R., Linh D., Lam P., Dung N., Syed R., Samar F., Bao N.

---
## PER-PERSON RECORDS
## GROUP A: CROSS-SEARCH RANKERS (non-Nigeria)
### A1. Hafsa H. — Pakistan — ~01839f946ded0eeacf
- Badge: Top Rated Plus | JSS 90 | Earnings $70K+ | Jobs 509 (365 fixed + 144 hourly; API recalculated) | 237 feedback | Rate $5/hr
- Searches: 7/7 main — Q1#12 Q2#24 Q3#3 Q4#7 Q5#8 Q6#10 Q7#9 (avg 10.4)
- Title: "YouTube Video Editor | Reels, Shorts & Motion Graphics"
- Overview first 400: "I help YouTube creators, brands and businesses turn raw footage into high-retention videos that drive engagement and growth. With 5+ years of experience and 310+ completed projects, I specialize in storytelling, pacing and visual flow tailored for social media and digital audiences.\n\nMy Core Services:\n\nYouTube Long-Form: Talking-head, documentary-style, faceless and educational videos optimized for watch time.\n\nShort-Form Conte"
- Overview structure: hook ("I help X turn Y into Z") → years + project count → "My Core Services:" list (YouTube Long-Form / Short-Form Content: Instagram Reels, TikTok, YouTube Shorts / 3D Animation (Zack D Films Style) / 2D Animation / Post-Production / AI-Generated Video / Corporate & SaaS) → "Why Clients Choose Me:" (TR+, 4.9/5, $60K+ earned, retention-focused, reliable) → "My Workflow:" (Consultation/Editing/Review/Delivery) → Tools list → CTA ("send me a message with your footage, script, or a reference video").
- Employment (2): 1) "Lamore Digital" — "Video Editor"; 2) "Freelancer" — "Video Editor"
- Education (1): Fatima Jinnah Women University — BFA, Visual Design (2021–2025)
- Portfolio (61 total) first 8: Video Editing; Reels Editing; Animated logo; ANIMATED LOGO; Ads Video; Map Animation; Facebook Reel monetization explained; Anime Video
- Recent contracts (10 of 445 shown): starts 2026-10-27, 10-26, 10-26, 10-25, 10-23, 10-22, 10-20, 10-20, 10-19, 10-14 — ALL active/in progress. Titles incl. "YouTube Video Editor for Educational Channel", "Iphone Motion Graphics", "Looking For Experienced YouTube Video Editor. Food/Supplements Niche Channel 100 Videos For $3,000", "Video Editor for Geopolitics Channel", "CapCut Video Editor – Corporate Communications", "Video Editor & Motion Graphics Editor for Social Media Reels + YouTube", "Video Editor Needed: Professional Testimonial Videos from Recorded Interviews". ~10 new contracts in 2 weeks.
- Skills (15): Video Editing, Promotional Video, Travel Video, YouTube Video, YouTube Shorts, Premiere Pro, Illustrator, Photoshop, Testimonial Video, Instagram Reels, YouTube Ads, Script, Intro & Outro Animation Design, Motion Graphics, YouTube Marketing


### 7. Anu F. (Anuoluwapo) — ~01442ee478a70618cf — state OG (Ogun)
- Badge: Top Rated Plus | JSS 100 | Earnings $50K+ | Jobs 196 (154 fixed + 42 hourly; 186 contracts; 57 feedback) | Rate $15/hr | Consultation $100
- Search appearances 6/8: short form #6, TikTok #4, Reels #7, YT Shorts #3, podcast clips #5, video editor #3 (absent UGC, CapCut) — avg 4.7
- Title: "Video Editor & AI Filmmaker | YouTube, Podcasts & AI Video"
- Overview first 400 chars: "Looking for an experienced video editor who can turn raw footage into engaging, high-quality videos that keep viewers watching?\n\nI'm Anuoluwapo, a professional video editor with 10+ years of experience in video editing and post-production. I work with creators, brands, businesses, and agencies to produce compelling content through storytelling, strong pacing, and professional editing.\n\nVideo Edit"
- Structure: question hook → name + years → "Video Editing Services" dash list (7, each line packs 3 keyword phrases e.g. "YouTube Shorts, Instagram Reels, and TikTok Videos") → "My Editing Approach" paragraph → services sentence → "Software and Tools" (6) → "Why Work With Me?" (10+ yrs, 100M+ views, 170+ projects, $50K+) → "Top Rated Plus freelancer" → closing that re-lists role keywords ("YouTube video editor, podcast editor, short-form content editor, or AI video creator") → CTA.
- Employment (5) — job title formula "<Role> at <Company>" (company repeated inside title):
  1. Upwork — "Expert Podcast & Vlog Video Editor at Upwork"
  2. Story Teller Media NG — "Video Editor & Motion Graphics Artist at Story Teller Media NG"
  3. Detrix Studios — "Creative Director & Video Editor at Detrix Studios"
  4. Wedding Channel Africa — "Wedding Video Editor Specialist at Wedding Channel Africa"
  5. Xteam Studios — "Professional Video Editor & Storyteller at Xteam Studios"
- Education: University of Lagos, Environmental engineering (2011–2015); Xteam Studios Academy, Video Editing/Motion graphics (2015–2018); Delyork Creative Academy, Advanced VFX Training for Cinematic Videos (2019)
- Portfolio (12). First 8 (all SEO-style titles = gig-style headlines): "Wedding Video Production Specialist with 10+ Years Expertise"; "Creative TikTok & YouTube Shorts Editor to Boost Views Fast"; "Clear Explainer Videos & Motion Graphics to Educate & Engage"; "Faceless Video Production Expert | Upwork Top Video Editor"; "Professional Real Estate Video Editor | Fast Turnaround"; "Compelling Advert Video & Slideshow Editing to Drive Results"; "Professional Short Film Video Editor | Premiere Pro Expert"; "Engaging True Crime Video Editing for Captivating Stories"
- Recent contracts (10 of 186, all active): 2026-10-26 City Videos (100+ videos) fixed; 2026-10-19 long form + three shorts $100; 2026-09-21 Short-Form for IG & TikTok $130; 2026-09-14 Social Media Content Creator; 2026-09-09 Short video clip editing $60; 2026-08-31 Eshel Night 2026 hourly $75/5h; 2026-08-31 Football doc YouTube $45; 2026-08-28 Artist docu-minis $150; 2026-08-25 Hype Video Celebrity Event $110; 2026-08-25 Long-Form Narrative $120.
- Notes: Real Nigerian studios/media brands (Story Teller Media NG, Wedding Channel Africa, Xteam Studios — Xteam also listed as training academy, consistent) + "Upwork" as an employer. Portfolio titles are the most keyword-optimised in the set.
### A2. Giang P. — Vietnam — ~0143a42d619d02f86b
- Badge: Top Rated | JSS 96 | Earnings $50K+ | Jobs 332 (313 fixed + 19 hourly) | 151 feedback | Rate $10/hr | capacity fullTime | has profile video (YouTube Shorts link) | sells $100 "Marketing Consultation"
- Searches: 6/7 main — Q1#21 Q2#12 Q3#5 Q4#2 Q5#10 Q7#6 (avg 9.3)
- Title: "Professional Video Editor | YouTube, Ads, Shorts, Reels, TikTok"
- Overview first 400: "Hi, I’m Giang, a video editor specializing in YouTube videos, documentaries, interviews, storytelling content, and performance-driven video ads.\n\nI help creators and businesses turn raw footage into engaging, polished videos that communicate clearly, hold viewers’ attention, and support their goals. Whether it’s a documentary, a YouTube video, a social media ad, or a VSL, I focus on strong pa"
- Structure: intro w/ niche list → "I help..." value line → "What I Work On:" bullet list (YouTube & Faceless; Documentaries; Interviews & Podcasts; Instagram Reels, TikTok & YouTube Shorts; Short-Form Ads for FB/IG/TikTok; VSLs; UGC Ads) → "My Services Include:" bullets → "Tools I Use:" → reliability paragraph → recap of niches → CTA ("Send me your footage, script, or reference video").
- Employment (2): 1) "FPT Arena Multimedia" — "Visual Design"; 2) "S&P Global" — "video editer" [sic]
- Education (1): FPT Arena — Bachelor of Architecture (BArch), Visual Design (2019–2023) [note: FPT Arena is a multimedia school; degree label looks mis-selected — inference]
- Portfolio (11) first 8: Faceless History Video Editing & Storytelling Project; Podcast Video Editing with Social Media Clips (Reels/TikToks); Documentary Specialist; Dynamic Football Highlight Editing | Sports Recap & Social Media Reels; Professional health video editing; Motion Graphics Video Editing & Animation; Cinematic Travel Vlog Editing for YouTube; Luxury Real Estate Video Editor
- Recent contracts (10 of 318): 2026-10-22, 10-20, 10-19, 10-17, 10-16, 10-14, 10-13, 10-13, 10-12, 10-07 (all active). Small tickets: $35–$195 earned so far. Titles: "Youtube editing", "Video Editor & Creative Content Partner | Gramercy Atelier", "Cinematic Video Editor", "Social Media Reel Editing", "Podcast Video 2 (Billy Nash)", "Video Editor for CapCut", "Short-Form Video Editor for Instagram Reels & TikTok", "IG Reel - Cooking w/ Friends Reel", "Landing page".
- Red flag: "S&P Global" (big financial-data brand) + misspelled "video editer" — unverifiable; API gives no dates/description.


### 8. Jules . — ~0166f124d0b7da15a2 — state field "CORSICA" (country Nigeria; inconsistent location data)
- Badge: Top Rated | JSS 100 | Earnings $6K+ (mixed: video + Django dev) | Jobs 27 (12 fixed + 15 hourly; 20 contracts; 9 feedback) | Rate $15/hr | Consultation is for "Development & IT" ($30)
- Search appearances 6/8: short form #9, TikTok #8, Reels #14, UGC #20, CapCut #9, video editor #16 — avg 12.7
- Title: "Short-Form Video Editor | Reels, TikTok & AI-Assisted Ads"
- Overview first 400 chars: "🎬 Short-form edits built to hold attention past the first 3 seconds\n\nMost Reels and TikToks lose their audience before the message lands. I fix that with sharp hooks, tight pacing, and captions that work with the sound off, so people keep watching and your content actually performs.\n\nProof, not promises\n\n-100% Job Success Score and 5.0 rating, with 5-star feedback from video clients: "very quick and"
- Structure: emoji headline → problem/solution → "Proof, not promises" (3 metric bullets incl. quoted review, 30–40 videos/month for fitness brand, <100 → 1,000+ views) → "What I edit" (6 lines) → "What you get" (5) → "How it works" (3 steps) → risk-reversal CTA (send one raw clip; small trial batch) → "Best fit for:" list → 🛠 Tools → 💻 "Also: senior backend developer" cross-sell. Best-written copy in the set (inference).
- Employment (4) — only 1 is video:
  1. Self-Employed — "Freelance Video Editor"
  2. Bluekivi — "Backend Engineer (Sole Backend Owner)"
  3. Martial QA (remote, South Africa) — "Django Backend Engineer (SaaS Systems)"
  4. DoWell Research Pte. Ltd. — "🏢Backend-Focused Full Stack Engineer (Django)"
- Education: BEng Computer engineering, University of Benin (2016–2021)
- Portfolio (16). First 8 (7 are software): "A herbal therapy archive built with django."; "A voting app"; "APIs for a project (with sample data)"; "An FAQ answering chatbot for a client"; "Real Estate Website"; "A Fully Functional Chrome extension (300+ downloads)"; "The Batman Cinematic Edit"; "Whiplash (2014) | Fast-Paced Cinematic Edit & Storytelling". Later video ones: "Talking-Head Social Reel | Dynamic Captions & Retention Editing", "UGC Product Demo | High-Retention Video Ad", "UGC Product Ad | ASMR Sneaker Commercial | TikTok & Meta Ads", "Law Firm UGC Short-Form Video — Editing Breakdown".
- Recent contracts (10 of 20, all active): 2026-10-25 Edit 100 … Reels (9:16) for a Blind Creator; 2026-09-29 Short-Form Video Editor/Production hourly; 2026-09-26 Daily YouTube Descript $15; 2026-08-03 Reel creator $30; 2026-07-10 Sneaker Video Editor hourly $983.34/98h; 2026-06-25 Backend Engineer Django $50; 2026-06-04 IG Reels Video Editor $295; 2026-06-01 Podcast & Video Production Assistant $283.49/40.5h; 2025-06-16 Django Backend long-term $300; 2025-05-12 Senior Full Stack $188/15.7h.
- Notes: Career-switcher; ranks on 6/8 despite employment being mostly software → employment content clearly not gating search (inference). Shows a pivot path Harry could copy (Top Rated from other category carries over).
### A3. Luong Tan D. ("Duy") — Vietnam — ~017317c428378d833e
- Badge: Top Rated | JSS 94 | $30K+ | Jobs 211 (154 fixed + 57 hourly) | 74 feedback | $15/hr | fullTime | has profile video
- Searches: 5/7 — Q1#2 Q2#1 Q3#10 Q4#4 Q7#3 (avg 4.0 — best avg rank among multi-query rankers)
- Title: "Video Editing | Short-Form Video Editor | YouTube Videos | Meta Ads"
- Overview first 400: "👋 Hello!\n\n\nMy name is Duy, and I'm from Tien Giang, Vietnam. My team and I have over 6 years of experience editing short-form and talking-head video for businesses ranging from startups to eight-figure brands and creators with 150,000+ followers. Across 160+ projects, we've specialized in retention-focused edits — fast cuts, engaging subtitles, B-roll, and motion graphics — built to stop th"
- Structure: emoji greeting → name/location → "My team and I" + years + client tiers + project count → proof stat ("In 2025 alone, our edits generated over 5 million views across TikTok, Instagram Reels, YouTube, Facebook, and LinkedIn") → differentiator paragraph (edit for performance/retention) → "🎯 What I can help you with:" → "🧰 Tools I use daily:" → "📌 Content I work with:" → "💡 ... free 30-sec High-Retention demo. Results first, contract later." → sign-off.
- Employment (2): 1) company "Video Editor | Big Agency's" — title "Video Editing"; 2) company "Social Media Marketing | Content Creator | Youtube Video Editor" — title "Video Editor"  ← company field used as a KEYWORD slot (no real company names)
- Education (1): Van Hien University — Associate of Arts (AA), Graphic Design (2023–2027)
- Portfolio (7): Cinematic Real Estate Tours - Sell Your Property Today; VLOG, TRAVEL VIDEOS - visual storytelling videos; Podcast videos - Meaningful experiences of successful people; FACELESS VIDEOS - Build a Faceless Cash Cow Channel; Ads video - The Secret to Doubling Your Conversion Rates; Short-Form Video Editor | High-Retention TikTok, Reels & YT Shorts; Talking Head Video Editor | Personal Brand Growth & Retention  (portfolio titles also written as keyword headlines)
- Recent contracts (10 of 198): 2026-10-27, 10-26, 10-24, 10-22, 10-21, 10-20, 10-19, 10-18, 10-18, 10-18 (all active; $30–$385 so far). Titles: "Video ads editor", "Social Media Video Editor", "Video Editor for Social Media Agency", "Long Form Youtube Editor Trial (Fitness Brand)", "Video Editor for Conference Content", "Video Editing, color correction Social Ads".

### A4. Abdullah D. — Pakistan — ~0169d35b8373416546
- Badge: Top Rated | JSS 100 | $50K+ | Jobs 360 (243 fixed + 117 hourly) | 141 feedback | $30/hr | fullTime | profile video
- Searches: 5/7 — Q1#24 Q2#4 Q3#11 Q5#9 Q6#20 (avg 13.6)
- Title: "Talking-Head Video Editor | YouTube, VSL & Reels | Motion Graphics"
- Overview first 400: "Top Rated video editor with 100% Job Success, 300+ completed Upwork jobs and $50K+ earned. I edit talking-head content for coaches, founders and personal brands who need their videos to hold attention and look premium.\n\nIf you record yourself on camera and want an editor who can take the raw footage and hand back a finished, ready-to-publish video without hand-holding, that is what I do.\n\nWHA"
- Structure: proof-first opener (badge/JSS/jobs/earnings) + niche (coaches, founders, personal brands) → ideal-client paragraph → "WHAT I EDIT" (YouTube talking-head; VSL & ad creatives; courses/keynotes; brand launch; Short-form Reels/Shorts/TikTok; Podcast & interview + clips) → "HOW I WORK" → "TOOLS" (Premiere Pro Expert certification) → "PROOF" (Iman Gadzhi style, Shark Tank-featured brand) → "Best fit" + CTA (send a reference + raw sample → fixed price per video). ALL-CAPS section headers, no emojis.
- Employment (1): "MyPackagingPro" — "Video Editor / Graphic Designer / Product Designer"
- Education (1): Punjab University College of Information Technology (PUCIT) — BS Computer Science (2020–2024)
- Portfolio (6): Long-Form YouTube Talking-Head Edit; Instagram Reel — Motion Graphics Short-Form Edit; Motion Graphics & Animated Text for YouTube and Ads; VSL Edit — Talking Head with Motion Graphics; UGC & Ad Edits for a Shark Tank-Featured Brand; Personal Brand YouTube Edit — Iman Gadzhi Style Talking Head
- Recent contracts (10 of 325): 2026-10-27, 10-23, 10-20, 10-18, 10-18, 10-16, 10-15, 10-14, 10-14, 10-13 (all active; $20–$250 so far). Titles: "Video Editing - for VSL Funnel", "Documentary/Explainer Video Editor", "Youtube Video Editing(Documentary)", "VSL Video of Raw Footage", "Short-Form Video Editor (TikTok Shop Affiliate Content)", "Short-Form Video Editor: Product Motion Graphics + Fashion/Unboxing", "Meta ad & sales asset editor", "Video Editor Needed for Instagram Reels".


### 9. Geraldine O. — ~01952240dd71c58a6b — state "Lagos"; timezone UTC-04:00 US Eastern
- Badge: none | JSS 81 | Earnings $2K+ | Jobs 17 (7 fixed + 10 hourly; 14 contracts; 4 feedback) | Rate $10/hr
- Search appearances 5/8: Reels #5, YT Shorts #4, UGC #5, CapCut #5, podcast clips #10 — avg 5.8 (high ranks with lowest JSS in set)
- Title: "VSL & Meta Ad Creative Video Editor | AI UGC ads, Long & Shorts, Reels"
- Overview first 400 chars: "I'm a Meta ads video editor who has run paid ads, not just edited them. I understand paid ads from the inside, not just as an editor who is guessing\n\nI scripted, edited, and ran Meta ads for my own online product and generated over $7,000 in revenue in about six weeks. So I edit the way a media buyer thinks: hook rate, hold rate, CTR, cost per purchase. Not \"does it look nice.\"\n\nWhat I make:\n✅"
- Structure: differentiated positioning claim → personal proof ($7K in 6 weeks own product) → "What I make:" ✅ list (6) → retention credential (50K+ view clips; fitness channel 40K→88.8K subs) → "consistent creative partner" → specific CTA ("Send me your product link and your current best ad. I'll reply with 3 new angles") → Tools line → trailing raw KEYWORD BLOCK: "Video Editor, YouTube Editor, Podcast, Podcast Clipping, Multicam Interview, Documentary, Vlog. Adobe Premiere Pro, … Short-form, Instagram Reels, Interview Videos" (looks appended purely for search).
- Employment (2):
  1. FitLyss Lifestyle — "Youtube Video Editor" (likely a real client's channel — inference, matches fitness-channel claim)
  2. Multichoice Africa — "Videographer and Video Editor" (real large African media brand; unverifiable)
- Education: BAcc Business, Accounting Technician Scheme (2020–2023); BAcc Business, Abia State University (2019–2023) — duplicate degree listed twice
- Portfolio (12). First 8: "Podcast Style Talking Head Video" (claims 700k views); "Storytelling Focused Youtube Vlog"; "Leila Hormozi Style Video"; "Talking Head Video"; "Talking Head Video"; "Multi-Cam YouTube Video"; "Shorts, Instagram Reels Video"; "Talking Head Reels/ Podcast Repurposing"
- Recent contracts (10 of 14): 2026-10-25 Short-Form for Meta Ads & IG Reels (hourly, active); 2026-09-16 Content Calendar Designer $375; 2026-07-10 Edit Interview Video $97.50/21.7h; 2026-07-06 TikTok/Short Form $1,690 (active); then 6 contracts all closed on 2026-10-24 within 6 minutes: "10 hours of editing work" $11/2h; "5 hours of editing work" $18/4h; Short Term Project $120/20h; YouTube Long-Form $5; "Trial edit for meeeeee" $40; Birthday compilation $56.67/11.3h. No feedback scores shown.
- Notes/RED FLAGS: Effective hourly rates of $4.50–$6 on several hourly contracts; bulk closure on one day (likely cleanup — inference); JSS 81. Shows that title + overview keyword stuffing alone can rank #4–5 even with weak stats.

### 10. Ayomide O. — ~019ddcf392d482f556 — state LA (Lagos); timezone UTC+01:00 London
- Badge: Top Rated Plus | JSS 100 | Earnings $50K+ | Jobs 82 (67 fixed + 15 hourly; 77 contracts; 28 feedback) | Rate $20/hr
- Search appearances 5/8: short form #7, TikTok #3, Reels #20, YT Shorts #5, video editor #9 — avg 8.8
- Title: "Performance Video Editor | Paid Ads, Short-Form & YouTube Content"
- Overview first 400 chars: "I'll be honest… most videos don't have a views problem or a conversion problem; they have an attention problem.\n\nI've edited 1,000+ videos, from Facebook and TikTok ads that have generated $300k+ in revenue, to YouTube content and organic short-form that builds real audiences. The pattern is always the same… if the first few seconds don't hit, nothing else matters.\n\nAchievements:\n→ Helped a $"
- Structure (~3,000 chars): contrarian hook → volume + revenue proof → "Achievements:" → list (5 results: $37B company CPA $13→$6; 22.7M views; 1.5k→22k views + 130 leads; 7-fig ecom; 40k first video) → 2 named client testimonials with ⭐⭐⭐⭐⭐ → "When I'm working on a project, I'm thinking about:" (Hook/Retention/Messaging/Flow) → "This is the kind of work I do:" (6) → who I work with → organic paragraph → "I'm not the guy you hire just to 'edit videos.'" positioning → low-friction revisions → keyword-rich CTA sentence ("video editor for ads, UGC content, YouTube videos, IG Reels, TikTok, Facebook creatives, VSLs, or short-form content") → "Send an invite…👍"
- Employment (2) — minimal, lowercase:
  1. spines — "video editor"
  2. Atlas News — "video editor"
- Education: BS Computer engineering, Federal University, Oye-Ekiti (2019–2024)
- Portfolio (8): "Youtube growth 700 - 4k+ subscribers"; "Talking head video editor"; "Short-Form Content – 1K to 20K+ Views"; "Addictive AI UGC Ads"; "High Converting UGC Ecom Ads"; "VSL & Long-Form Editing – High Retention Results"; "ADDICTING Short-form Content"; "High-quality service business ADs". Portfolio DESCRIPTIONS are keyword-stuffed ("As a shorts editor, Instagram Reels editor, TikTok video editor, short form video editor, and YouTube Shorts editor…").
- Recent contracts (10 of 77, all active): 2026-10-12 Land Listings paid tryout $475; 2026-10-02 VSL for Ecommerce Agency $385; 2026-09-22 Motion Graphics TikTok/Meta app $50; 2026-09-08 Short Reels $425; 2026-09-04 Podcast Clip Creation $365; 2026-08-15 Long-Form Interviews hourly $1,333.33/66.7h (~$20/h); 2026-06-12 Warren Development $480; 2026-06-02 Short-Form Reels/TikTok/Shorts for Health Creator (800K+) $6,233; 2026-05-21 VSL 2 $525; 2026-05-11 ugc videos for school $340.
- Notes: Employment is an afterthought (2 entries, 2 words each) on a $50K+ TRP profile → keyword work happens in overview + portfolio descriptions, not employment. "spines" is a real short-form tool/agency? — unverified.
### A5. Syed Muhammad A. ("Affan") — Pakistan — ~0172a72d3c9bbeca91
- Badge: Top Rated Plus | JSS 98 | earnings not shown by API (overview claims "$60K+") | Jobs 318 (238 fixed + 80 hourly) | 135 feedback | $19.99/hr | profile video
- Searches: 5/7 — Q1#7 Q2#13 Q3#21 Q4#23 Q7#13 (avg 15.4)
- Title: "Short-Form Video Editor | UGC Ads | VSL | Reels & TikTok | Get Sales"
- Overview first 400: "Why is your short-form content getting views but not converting? What if the fix is in the first 3 seconds? I'm 𝐀𝐟𝐟𝐚𝐧, a 𝐓𝐨𝐩 𝐑𝐚𝐭𝐞𝐝 𝐏𝐥𝐮𝐬 Short-Form Video Editor in Upwork's 𝐓𝐨𝐩 𝟑%, with $𝟔𝟎𝐊+ 𝐄𝐚𝐫𝐧𝐞𝐝. 𝟐𝟗𝟎+ 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬, and 𝟐,𝟎𝟎𝟎+ 𝐇𝐨𝐮𝐫𝐬 of retention-focused editing across UGC Ads, Instagram Reels, TikTok, and YouTube Shorts.📩 Not sure what's holding your content back? Send me your latest short-form video and I'll s"
- Structure: question hook → unicode-bold proof stats → free-audit CTA in first ~450 chars → emoji stat block (🏆💰🎬📈🤖🎯⌚) → "About Me & Achievements" (names brands: Bellroy, Captions App, Efani, HEYS Luggage; 10M+ YouTube views) → "Industries & Clients I've Worked With" (10 emoji industry lines) → "TOOLS & SOFTWARE I USE" (grouped) → "Why Work with Me?" → "P.S." urgency + CTA ("Click Invite to Job") → **"Keywords for UMA and Client Matching:"** — a ~60-term comma keyword block at the very end (Short-Form Video Editor, Instagram Reels Editor, TikTok Video Editor, YouTube Shorts Editor, Reels Editor, UGC Video Editor, AI Video Editor, VSL Editor, Podcast Clips Editor, Content Repurposing Editor, … Coaches Video Editor, Content Creator Video Editor, …). NOTE: block literally contains every one of our 7 search phrases ("Short-Form Video Editor", "TikTok Video Editor", "Reels Editor", "YouTube Shorts Editor", "UGC Video Editor", "Podcast Clips Editor", "Content Creator Video Editor").
- Internal inconsistency: says 290+ projects in line 1, 260+ later.
- Employment (6): 1) "Alch3m1st" — "Video Editing Manager"; 2) "OAM Digital" — "Short-Form Video Editor Specialist"; 3) "The Monetization Group (MON Group)" — "Full Stack Video Expert"; 4) "SWISH Marketing Agency" — "Video Editing Manager"; 5) "Smarty AI" — "Short-Form Video Expert"; 6) "Times Consultant" — "Video Editor Intern". (All six record IDs are sequential 20702579…–20702617…, i.e. added in one sitting recently — inference from IDs.) Pattern: agency/startup names + job titles that embed "Short-Form" keyword.
- Education (1): University of Sindh — MBA, Business (2020–2024)
- Portfolio (16) first 8: 3D EXTERIOR ELEVATION DESIGN; Business Portfolio Website; UI/UX for MyHCM Training Service; PSD to HTML; Magnatesmedia Style Edits; Graphical Cash Cow Videos; Documentary Style Editing; Top 10 Style Editing  (first 4 are off-niche leftovers from earlier web/3D work; later items use creator-style names: "Sunny V2 Style", "Ali Abdaal Style", "Iman Gadzhi Style", "Tim Burmaster | 200K+ Subscribers")
- Recent contracts (10 of 302): 2026-10-27, 10-22, 10-21, 10-16, 10-06, 09-21, 09-21, 09-11, 09-05, 09-05 (all active). Titles: "Meta Ad Designer/Editor for Jamaican Wellness Tea Blend", "Video Editor (Descript) – Ongoing Projects…", "Corporate Video Editor | Interviews, Testimonials & Business Videos", "HLC Videos for Socials", "Trial reel", "Instagram Video Editor Needed for Instagram Account 600K+ followers", "VSL Video Editing - Prometheus".

### A6. Umair T. — Pakistan — ~0136e707e4c588907b
- Badge: Top Rated | JSS 100 | $5K+ | Jobs 45 (30 fixed + 15 hourly) | 9 feedback | $10/hr | fullTime
- Searches: 5/7 — Q1#16 Q3#18 Q4#20 Q5#15 Q7#8 (avg 15.4). Note: low earnings yet ranks in 5 searches.
- Title: "Professional Video Editor for YouTube, Ads & Social Media"
- Overview first 400: "Hey!\nI’m Muhammad Umair, a full-time freelance video editor with strong experience in creating high-quality content for YouTube, Instagram, and other social media platforms. I focus on delivering videos that not only look professional but also keep viewers engaged and improve overall performance.\n\nWhether you need simple editing or a complete video built from scratch, I can help bring your id"
- Structure: plain/generic — greeting → who I am → "I specialize in:" (tool list) → "post-production services" list → "types of content" list (YouTube long/short, Reels/TikTok/Shorts, talking-head, faceless, documentary, promo) → thank-you sign-off. No proof numbers, no CTA. (Shows ranking ≠ fancy copy.)
- Employment (3): 1) "NovaCore Game Labs" — "Creative Media & Technical Designer | NovaCore Game Labs"; 2) "PixelForge Technologies" — "Visual Content Developer | PixelForge Technologies"; 3) "Vertex Interactive Studios" — "Junior Visual Designer". Company name repeated inside job title. [Inference/red flag: generic-sounding names, unverifiable; not video-editor titles; records created in one batch per sequential IDs.]
- Education (1): Riphah International University — Bachelor of Computer Applications, Computer science (2020–2024)
- Portfolio (4): Social Media Ads; Ai Influencers; Long Form | Youtube Edits; Short Form Portfolio | Instagram, TikTok & YouTube Shorts
- Recent contracts (10 of 43): 2026-10-27, 10-19, 10-15, 10-13, 10-12, 10-07, 10-01, 09-29, 09-23, 09-15 (all active; $40–$248). Titles: "Short-Form Video Editor — TikTok, Reels, YouTube Shorts & UGC Ads", "Video Editor for Hypnotherapy Content", "Video Editor for YouTube and Classes", "Video Editor for Founder Story Sizzle Reel (1-2 min)", "PODCAST VIDEO EDIT x 2", "Meta Ads Video Editor", "B2B Meta Ads Video Editor".

### A7. Fawas P. — India — ~011179e46730c1b40e
- Badge: Top Rated Plus | JSS 99 | $400K+ | Jobs 886 (514 fixed + 372 hourly) | 348 feedback | $15/hr | partTime | profile video | sells $25 "Marketing Consultation"
- Searches: 4/7 — Q1#6 Q2#7 Q4#1 Q5#4 (avg 4.5). Only 6 skills listed (all YouTube-centric) yet ranks #1 for "YouTube Shorts editor" — inference: account history/earnings weigh heavily.
- Title: "Certified Youtube Strategist | 10 Years Of Experience | Video Editor"
- Overview first 400: "🥇 Top 3% Talent on Upwork | Top Rated Plus ⭐️\n🕒 600+ Jobs Worked on Upwork\n✅ 10+ Youtube Marketing\n✅ 10+ Years of Video Editing\n\nAs a Senior Youtube Manager, I specialize in creating engaging video content, keyword researches, SEO, backlinks and provideo 360 degree end to end support for YouTube Clients looking for organic growth and revenue,  With over 10 years of experience, I’ve co"
- Structure: emoji proof stack (4 lines) → role paragraph → "What I’ve Achieved:" ($3.8M sales, ROAS 3.33; +1M subscribers; course bought by 5M) → "My Expertise:" bullets → "Tools I Use:" emoji list → CTA ("Press 'Invite' 🚀") → **"Keywords for Finding Me:"** comma block (Video Editing, Video Production, YouTube Video Editing, … Instagram Reels, TikTok Videos, … UGC Content, … Short-form Video, Video Course Production).
- Employment (1): "Vishfa Digital Solutions" — "Co Founder"  (own agency/studio)
- Education (1): University of Calicut — BA, Bachelors of Graphic Design (2009–2011)
- Portfolio (13) first 8: Youtube Monetisation; SEO Friendly Thumbnails; YouTube Video Editing; Professional Youtube Video Editing; Show reel; Google Ads Case Study; Youtube Ads Case Study 1 - High Convertion; This documentary style video was edited using Adobe Premiere Pro
- Recent contracts (10 of 746): 2026-10-27, 10-23, 10-21, 10-16, 10-11, 10-06, 09-15, 09-10, 09-07, 09-01 (all active; mostly hourly $60–$650). Titles: "YouTube Video Editor + SEO & Packaging Strategist for Faceless Automotive Channel", "YouTube Channel Audit and Shorts SEO Strategy…", "UGC strategist and editor", "Youtube Manager for Futrzone", "Seo YouTube expert", "Channel Managament & SEO".

### A8. Van Trung N. ("Trung") — Vietnam — ~013f7e0b7640d12ec1
- Badge: Top Rated | JSS 100 | $20K+ | Jobs 175 (116 fixed + 59 hourly) | 45 feedback | $15/hr | profile video | sells $50 "Video & Audio Consultation"
- Searches: 4/7 — Q1#8 Q2#20 Q3#8 Q5#1 (avg 9.2; #1 for "UGC video editor")
- Title: "Video Editor | Short-Form, YouTube, Tiktok, Meta Ads, VSL & AI UGC"
- Overview first 400: "Hi, I'm Trung, a scroll-stopping video editor who turns raw footage into content people actually finish watching.\n\nTired of editors who miss deadlines, overpromise, or hand back edits that feel flat and forgettable? You're not alone, most of my clients come to me after exactly that experience.\n\nI have 5 years of editing experience, including helping a YouTube channel reach 100,000+ subscriber"
- Structure: one-line positioning → pain-point paragraph → proof (5 yrs; channel to 100K+ subs in 6 months; 200+ intl clients US/UK/AU) → "I specialize in:" emoji list (🎥 Short-form — Reels, TikTok, YouTube Shorts; YouTube; 🏠 real estate; talking-head; 🎧 Podcast editing and clip repurposing; 🤖 AI UGC; 📊 Meta/TikTok ads; documentary/faceless) → "My process covers:" ✨ list → "Why work with me:" ✅ list → Tools → CTA.
- Employment (2): 1) "TP Entertainment" — "Video Editor"; 2) "Ebay E-commerce Company" — "Management Online Store and Promotion Video"  [red flag/inference: "Ebay E-commerce Company" likely means running an eBay store, not employment at eBay — reads as a big-brand name-drop]
- Education (1): University of Economics Ho Chi Minh City — BBA, Business (2012–2016)
- Portfolio (9) first 8: The Liver King Situation GETS WORSE..; Video editor for YouTube explainer channel; Documentary Crime Video 10 Most DRAMATIC Courtroom Moments OF ALL TIME; Niksetting Video Editor for YouTube + TikTok Shorts + Instagram Reel; vincenijhof Short-Form for Talking Head Video IG Reels/Shorts/TikTok; Talking Head - Instagram- Short - Tiktok; Travel Vlog; Viral Short-Form Content (Reels/TikTok/Shorts) High-Retention  (portfolio titles carry platform keywords)
- Recent contracts (10 of 161): 2026-10-27, 10-24, 10-24, 10-22, 10-22, 10-22, 10-21, 10-19, 10-17, 10-16 (all active; $25–$132). Titles: "Short Form/Long Form Video Editing", "Short form videos", "Direct-Response Video Editor (CapCut / Short-Form Meta Ads) – Paid 48hr Test…", "Edit a VSL", "Real estate vertical video" ×2, "Short-Form Video Editor & Content Repurposing Specialist", "short form trial reel".


### 11. Kazeem M. — ~01a64ee7f64757a556 — state LA (Lagos)
- Badge: none | JSS 100 | Earnings $4K+ | Jobs 27 (22 fixed + 5 hourly; 26 contracts; 16 feedback) | Rate $15/hr | Consultation "Marketing" $10
- Search appearances 5/8: short form #21, TikTok #18, Reels #21, YT Shorts #18, podcast clips #23 — avg 20.2 (broad but low)
- Title: "Video Editor | Short-Form, UGC & Meta/TikTok Video Ads"
- Overview first 400 chars: "VIDEO EDITOR | SHORT-FORM • UGC • META & TIKTOK ADS • AI VIDEO\n\nI'm a professional Video Editor specializing in short-form video, UGC content, and Meta/TikTok video ads for DTC brands, eCommerce businesses, creators, coaches, and agencies.\n\nI turn raw footage, UGC, talking-head videos, product footage, podcasts, and creative briefs into scroll-stopping, high-retention content designed to capt"
- Structure (~4,500 chars, longest): ALL-CAPS keyword headline → specialization → inputs→outputs → approach → "WHAT I CAN HELP YOU CREATE" (10 •) → "UGC & DIRECT-RESPONSE VIDEO EDITING" para → "AI-ASSISTED VIDEO PRODUCTION" (tool list Runway, Kling, Veo, Sora, HeyGen, ElevenLabs, Midjourney) → "CLIENT FEEDBACK" ⭐ quote → "MY EDITING FOCUS" (13 • pure keywords) → "HOW I CAN WORK WITH YOU" (7) → "IDEAL CLIENTS" • line → keyword CTA. Reads AI-generated (inference).
- Employment: **100 entries** (full list in kazeem_emp.txt below). Pattern: ~90 entries have sequential record IDs 1973504…–1973550… → added in one bulk session (inference from IDs). Companies = invented-sounding client descriptors by industry/city: "Lagos Street Food Brand", "Dubai Luxury Real Estate Firm", "Tokyo Gaming Startup", "Istanbul Coffee Brand "KahveLove"", "Fitness TikToker "Coach Leo"", "SaaS StartUp "TasklyPro"", plus platforms "Fiverr", "Freelancer.com", "Linkedin", "Upwork Client (Finance YouTube Channel)", plus a few real-looking clients (Veronda Bellamy / Happyology, DeepAesthetics Clinic). Job titles are short role+niche keyword phrases ("YouTube Shorts Editor" ×4, "Short form Video Editor" ×7+, "UGC Content Creator", "Campaign Video Editor", "Freelance Reels Editor"); 40/100 titles contain short/reel/shorts/tiktok/ugc. Also non-video: "Financial Analyst" (Berlly exchange), "mobile distribution" (Hijrah comm.), "Executive Virtual Assistant".
- Education: BCompSc Software eng., FUTA (no dates); BA Fine art, OAU (2014–2018)
- Portfolio: 31. First 8: "Recent Instagram post Designs"; "Video editing"; "TikTok Video Creation from written script"; "DAILY AFFIRMATION POST"; "Full-time short and Long form video editor for DeepAesthetics Clinic"; "Short form YouTube shorts Video editor and YouTube Management"; "Viral AI video generation for Social Media posts"; "YouTube Shorts and reels Edits". Later items copy job-post titles verbatim ("Short-Form Video Editor Needed (High Volume / Long-Term)", "VSL / Social Media Ads Editor" whose description is literally a client job post: "Hi there, We are in need of a VSL / Social Media video editor…").
- Recent contracts (10 of 26): 2026-08-05 Thought leadership videos (active); 2026-01-18 Ecommerce DR $40; 2026-01-03 "Sample Project" hourly $790/52.7h; 2025-12-10 YouTube/TikTok Entrepreneur $75/5h; 2025-10-05 IG Reels Viral Ad $10; 2025-10-02 Reels as Ads $1,230; 2024-09-25 VSL/Social Ads hourly $445/29.7h; 2026-03-28→07-14 IG Reels 90 Videos $630 5★; 2026-05-08→05-11 Upscale to 4K $10 5★ (long glowing review); 2026-05-08→05-11 Creative Short-Form $10 5★ (long glowing review).
- RED FLAGS: 100 employment entries, most likely fabricated/embellished client descriptors; two $10 contracts opened the same morning with long effusive reviews (possible review padding — inference); portfolio items reusing job-post text. Despite all this he ranks only #18–23 → mass employment entries did NOT buy top ranks (key finding).

Kazeem M. full employment list (company — job title), 100 entries:
  1. Health4All — Motion Graphics Designer
  2. AestheticsbyKk — Aesthetics Reels and TikTok Video editor
  3. InspireYouth Football Academy — Content Producer
  4. DeepAesthetics Clinic — Video Marketing Specialist
  5. London Coach "ThriveWithMaya" — Content Editor
  6. Deep Aesthetics Clinics UK — Full-time Short form Social media Video editor
  7. Startup Pitch Media — Short form Video Editor
  8. Veronda Bellamy | Happyology.com — Social media manager and content creator
  9. Xtrafine Digital Agency — Creative Director & Video Editor
 10. Linkedin — Visual Content Strategist
 11. Mental Health Awareness NGO — Freelance Creative Editor
 12. Africa Cricket Fan Club — Campaign Video Editor
 13. Abuja Real Estate Agency — Video Ads Editor
 14. Tech Simplified — YouTube Shorts Editor
 15. LuxeBottle Club — Social Media Manager
 16. Veronda Bellamy Ministries — Content Editor
 17. Happyology Blog — Content Manager
 18. EcoBagLife — Short-Form Content Producer
 19. Lagos Street Food Brand — UGC Campaign Creator
 20. Karl.VisionViral — Content Growth Strategist
 21. NurseBeli Children's Books — Social Media Marketing Assistant
 22. Branded Lifestyle Entrepreneur — Executive Virtual Assistant
 23. Berlin Startup "EduSpark" — Freelance Full-Time Editor
 24. EcoLiving Home Products — Campaign Video Editor
 25. LoveNest Dating App — Campaign Video Specialist
 26. social media platform — social media Promotion
 27. MindfulCoach Academy — Full-time Video Editor
 28. Happy Parents Workshop — Content Designer
 29. Nigerian Gospel Influencer — Freelance Full-Time Short-form video Editor
 30. Kenya Sports Predictions App — Ad Campaign Editor
 31. SoccerPulse Africa — Content Creator
 32. BeHappyology Blog Reels — Freelance Creative Editor
 33. GlowSkin Cosmetics — UGC Content Creator
 34. Melbourne Tech Gadget Store — Video Ad Editor
 35. Glow Beauty Spa — Instagram Reel Strategist
 36. Fiverr — Youtube and Google Ads video
 37. Upwork Client (Finance YouTube Channel) — Freelance Video Editor
 38. South African Cricket Influencer — Video Editor
 39. SaaS Startup "Schedulr" — Digital Content Specialist
 40. StyleHive Accessories — UGC Content Creator
 41. QuickServe SaaS — Brand Content Specialist
 42. Faith Talks with Veronda — YouTube Shorts Editor
 43. GreenLeaf Nutrition — Content Marketing Coordinator
 44. Tech Startups Meetup Berlin — Short-Form Video Consultant
 45. Istanbul Coffee Brand "KahveLove" — Freelance Reels Editor
 46. Finance Influencer "MoneyMark" — Short form Video Editor
 47. GlowRush — UGC-Style Creator
 48. Wellness Retreat — Creative Strategist
 49. HealthySnax Brand — UGC-Style Video Creator
 50. EcoDrip Bottles — Content Marketing Coordinator
 51. Johannesburg Fashion Expo — Video Campaign Manager
 52. Glow & Go Aesthetic Studio — Short Form Video Editor
 53. Fashion Influencer "StyleByAyo" — Freelance Video Editor
 54. Africa Fashion Week — Social Media Content Editor
 55. Dubai Luxury Real Estate Firm — Campaign Editor
 56. HealWell Nutrition — Marketing Assistant
 57. TrendTok Influencer "Maya B. — Freelance Video Editor
 58. Seoul Streetwear Collective — Short-Form Video Producer
 59. Fitness TikToker "Coach Leo" — Short form Video Editor
 60. Cairo Tech Summit — Social Media Video Editor
 61. Dubai Tech Expo — Event Highlight Editor
 62. FinEdu Academy — Freelance Video Editor
 63. Nigerian E-commerce Startup — Marketing Reel Editor
 64. Startup Expo Africa — Video Marketing Manager
 65. GlowNest Candle Co. — Campaign Editor
 66. FitMinds Coaching — Social Media Strategist
 67. SaaS StartUp "TasklyPro" — Short-Form Content Editor
 68. TravelWithLina (Travel Influencer) — Short form Video Editor
 69. AfroBeats Live Events — Social Media Editor
 70. Zen Spa & Wellness — Marketing Assistant
 71. SaaS Automation Brand — Freelance Motion Graphics Designer
 72. "QuickFinance Tips" Channel — YouTube Shorts Editor
 73. WanderKids Travel Blog — Content Producer
 74. Barcelona Streetwear Brand — Creative Video Producer
 75. GlowFit Apparel Co. — Full-time Video Editor
 76. "CryptoSimplified" YouTube Channel — Freelance Short-Form Editor
 77. QuickLearn Academy — Video Content Assistant
 78. Inspiration media — Expert video editor and Social media manager
 79. Afrobeats Music Promo Campaign — Content Editor
 80. FitMum Diaries - YouTube Channel — Video Editor
 81. Digital Course "Mindful Leaders" — Short form Video Editor
 82. Startup Accelerator Lagos — Video Consultant
 83. New York Skincare Brand — UGC-Style Creator
 84. London Fitness Influencer "MaxTrain" — Marketing Video Producer
 85. Hijrah comm. — mobile distribution
 86. Dubai Auto Show — Creative Video Producer
 87. Lagos Tech Fest — Event Video Editor
 88. Paris Fashion Boutique — Social Media Video Editor
 89. Fitness Creator "LeanWithLeo" — YouTube Shorts Editor
 90. NGO Climate Awareness Campaign — Video Storyteller
 91. Tokyo Gaming Startup — Short-Form Content editor
 92. Zen Yoga Studio — Campaign Specialist
 93. Cape Town Adventure Tours — Campaign Video Editor
 94. Sahara Fit Collective — Video Ads Editor
 95. Spanish Food Blogger "Sabores Con Ana" — Freelance Editor
 96. Lagos Startup Incubator — Short-Form Video Strategist
 97. UrbanFit Gym — Full-time Video Editor
 98. Freelancer.com — Multimedia Producer — Creative Studio Partner
 99. Social Boost Agency — Short-Form Video Editor
100. Berlly exchange — Financial Analyst
### A9. Kaiwan I. — Pakistan — ~01852d9cb546721b87
- Badge: Top Rated | JSS 95 | earnings not returned | Jobs 101 (59 fixed + 42 hourly) | 41 feedback | $5/hr
- Searches: 4/7 — Q1#11 Q2#25 Q3#15 Q5#20 (avg 17.8)
- Title: "Expert Video Editor | Short Reel | VSL Video Edit | Short Video Editor"
- Overview first 400: "Expert Video Editor | Short Video Editor | VSL Video Editing | Short Reel | Adobe Premiere Pro | Expert Video Editor | YouTube Video Edit | CapCutPro | FinalCut Pro | Reels | YouTube Video Edit | Short Video Editor | VSL Video Editing | Short Reel | Adobe Premiere Pro | CapCutPro | FinalCut Pro | Reels\n\n\nHi, I’m 𝐊𝐚𝐢𝐰𝐚𝐧 𝐈𝐪𝐛𝐚𝐥, a professional 𝐕𝐢𝐝𝐞𝐨 𝐄𝐝𝐢𝐭𝐨𝐫 𝐚𝐧𝐝 𝐌𝐨𝐭𝐢𝐨𝐧 𝐆𝐫𝐚𝐩𝐡𝐢𝐜𝐬 Specialist focused on turning raw footage into clean,"
- Structure: pipe-separated keyword line BEFORE the intro → unicode-bold intro → "What I Can Help You With" ✅ list (incl. "Shorts, Reels & TikTok Video Editing", "Podcast Video Editing") → "Tools I Use" → CTA → ~40 blank lines (hides the block below the fold) → a MASSIVE repeated keyword dump ("Expert Video Editor, Short Video Editor, VSL Video Editing, Short Reel, Adobe Premiere Pro, CapCutPro, FinalCut Pro, Reels, Youtube video edit" repeated ~25+ times). Same keyword dump is pasted into every portfolio description too. = most extreme keyword-stuffing seen. [Red flag: spammy; Upwork could treat as manipulation — inference]
- Employment (7): 1) "Hill Studio Solutions" — "Video Ad Creator"; 2) "Dynamic Edit Studio Solutions" — "YouTube Video Editor"; 3) "Editopia Pvt Ltd" — "Motion Graphics Expert"; 4) "Cinematic Creations Pvt Ltd" — "Video Design Expert"; 5) "Cinematic Creations Pvt Ltd" — "Social Media Video Specialist"; 6) "Cinematix Pvt Ltd" — "Video Production Specialist"; 7) "Video Production Solutions" — "Video Editing Expert". Pattern: every job title = a different service keyword ("Video Ad", "YouTube Video Editor", "Motion Graphics", "Video Design", "Social Media Video", "Video Production", "Video Editing"); generic studio names; 6 of 7 IDs created within one batch (2008256…–2008267…). [Red flag/inference: looks like keyword-farming via employment, not verifiable work history]
- Education (2): Islamia University Bahawalpur (IUB) — MBA, Business (2018–2020); IUB — BA, Business (2014–2018)
- Portfolio (85 total) first 8: Uber Clone App; iFood Clone Presentation; Shopify SEO Complete Guide; The Bible Reveals 4 Businesses That NEVER Fail (You’re Not Ready!); The BEEF Cast Reveal Their Biggest Pet Peeves; Why Most Salesmen Stay BROKE; Leem Bakery Promotional Reel; Aesthetic Cinematic Edit
- Recent contracts (10 of 79): 2026-10-26, 10-12, 10-09, 09-29, 09-23, 09-23, 09-18, 09-08, 09-06, 09-04 (all active). Titles: "Short-Form Video Editor & Content Repurposing Specialist", "Brand Deal Video Editing", "Real Estate Tour for Instagram Reels and Tiktok", "Fitness reel", "UGC style content ads video editor", "Podcast Video Editor Needed: 3‑Camera Interview…", "Short-Form Editor (Reels / Shorts / linked in", "Video Editor – VSLs, UGC & Reels".
- (API output truncated after work history; data above is complete for requested fields.)


### 12. Nawwal I. — ~01570c8b3355d205e1 — state KW (Kwara)
- Badge: none | JSS 100 | Earnings $3K+ | Jobs 18 (8 fixed + 10 hourly; 10 contracts shown, history complete; 2 feedback) | Rate $10/hr
- Search appearances 5/8: short form #19, Reels #24, UGC #16, CapCut #20, podcast clips #24 — avg 20.6
- Title: "Instagram Reels Editor for Wellness Brands | UGC & Short-Form Video"
- Overview first 400 chars: "Need your raw wellness footage turned into scroll-stopping Instagram Reels every week, without touching an editing app yourself? I'm a video editor for wellness brands. I turn UGC, talking-head, and product footage into ready-to-post Reels with captions, pacing and sound handled. for wellness and skincare brands.\n\nYour brand probably has more raw footage sitting in a camera folder than you have time to turn in"
- Structure (~5,500 chars, longest in set): niche question hook → pain → "That's where I come in." → proof paragraphs paraphrasing client reviews → "HERE'S WHAT I CAN TAKE OFF YOUR PLATE" ✅ (4) → 📌 process → review-themes paragraph → "MONTHLY REELS PACKAGES" with PRICES (8 Reels $240 / 16 $440 / 24 $600) → 📌 Q4 seasonal (Black Friday, Christmas) → 📌 retainers → 📌 FAQ (4 Q&As) → 📌 why brands keep me → niche CTA → pipe keyword line "Instagram Reels | UGC Video | Short-Form Video | AI Video | Reel Covers" → tagline.
- Employment: **100 entries** (API returned 100 — same count as Kazeem; possibly an API/display cap — inference). Company names = invented-sounding DTC brand names (TrendHive Electronics, NextCart Electronics, GlowCart Beauty, LuxeGlow Skincare, UrbanPet Supplies, PeakFuel Supplements, ZenFlow Yoga, BloomKids Learning…) mixed with 2 real multinationals: **THG (The Hut Group)** — "INSTAGRAM REELS & AI VIDEO STRATEGIST | UGC, BEAUTY & WELLNESS" and **Publicis Groupe** — "INSTAGRAM REELS & AI VIDEO SPECIALIST | UGC & PERFORMANCE CONTENT". Job titles: ALL-CAPS, near-identical template "INSTAGRAM REELS & AI [NICHE] VIDEO EDITOR | UGC & SHORT-FORM [NICHE] CONTENT" on ~99/100 (only last = "AI Video Designer"); one typo "NSTAGRAM REELS…" (TopTier Brands Co.). Record IDs cluster in batches (1984…, 1993…, 1997…, 2014…, 2022…) → added in ~5 bulk sessions (inference).
  Examples (company — title): TrendHive Electronics — INSTAGRAM REELS & AI VIDEO EDITOR | UGC & SHORT-FORM VIDEO; GlowCart Beauty — INSTAGRAM REELS & AI VIDEO EDITOR | UGC & BEAUTY SHORT-FORM CONTENT; FitWave Studio — INSTAGRAM REELS & AI VIDEO EDITOR | FITNESS UGC & SHORT-FORM VIDEO; NextGen Realty — INSTAGRAM REELS & AI VIDEO EDITOR | UGC & SHORT-FORM REAL ESTATE VIDEO; PeakFuel Supplements — INSTAGRAM REELS | SHORT-FORM UGC AI VIDEO | PEAKFUEL SUPPLEMENTS; SocialSpark Studio — AI Video Designer.
- Education: BBA, university of ilorin (2018–2023)
- Portfolio (13). First 8: "INSTAGRAM REELS | CONTENT CALENDAR & SOCIAL MEDIA STRATEGY DEVELOPMENT"; "INSTAGRAM REELS | SHORT FORM UGC | CONTENT PLANNING & SCHEDULING"; "INSTAGRAM REELS | SHORT FORM UGC | AI PRESENTER VIDEO FOR SOCIAL MEDIA"; "AI VIDEO | INSTAGRAM REELS | VIDEO EDITING"; "INSTAGRAM REEL | AI VIDEO ADS | SHORT-FORM CONTENT - DTC Video Suite"; "SHORT FORM REELS EDITING | SOCIAL MEDIA STRATEGY (Opus Clip)"; "INSTAGRAM REELS | SOCIAL MEDIA CONTENT"; "INSTAGRAM REELS | UGC SHORT-FORM VIDEO | UGC TIKTOK VIDEO". Every portfolio title starts with the same keyword prefix.
- Contracts (10): 2026-10-18 AI Video & Likeness Creator hourly $70/10h; 2026-04-09 AI Broll Generator for Handbag Brand $858/143h (~$6/h); 2026-03-30 AI-Driven UGC + Landing Page Real Estate $1,921.67/187h (~$10/h); 2026-09-09→09-15 "Instagram Reels & Short-Form UGC AI Video Editor for Wellness Brand" $5 5★ (long review); 2026-03-19→05-19 Podcast clips + posts $176/16h 5★; 2026-03-11 AI Social Media Manager $5; 2026-03-10 Skincare AI Content $5; 2026-01-30 Canva Designer $5; 2026-01-30 AI Video Editor Ecommerce $5; 2026-01-30 AI Social Scheduling $5.
- RED FLAGS: six $5 fixed contracts, three opened the same day (2026-01-30) — pattern consistent with cheap "starter" jobs to seed history (inference); a $5 contract carries a long 5★ review whose wording ("clear communicator, reliable, detail-oriented… accountable") is echoed verbatim in her overview; real multinationals (THG, Publicis) inserted among 98 invented brands; 100 near-identical ALL-CAPS employment titles. Still ranks only #16–24.
### A10. Minh K. — Vietnam — ~0173c53bf41cdcb449
- Badge: Top Rated | JSS 100 | $4K+ | Jobs 25 (24 fixed + 1 hourly) | 8 feedback | $10/hr | fullTime | profile video
- Searches: 3/7 — Q3#1 Q4#6 Q5#5 (avg 4.0; #1 for "Reels editor") — newish account (person ID 1960…, ~2025 inference) with tiny earnings ranks top-5.
- Title: "Expert Video Editor | YouTube, Reels, Ads"
- Overview first 400: "I am a professional video editor and designer with 5 years of experience, a creative mindset, and fluency in English. My goal is to transform your ideas and business objectives into impactful, high-quality videos. Every project begins with a deep understanding of your vision before executing it to perfection.\n\nMy Expertise:\n\n✔ YouTube Video Editing (Vlogs, Documentaries, Cash Cow, Educational, Gaming, et"
- Structure: intro → "My Expertise:" ✔ list (YouTube; Social Media Video Editing (Reels, TikTok, YouTube Shorts); UGC Video Editing; Video Ad; Motion Graphics; Logo intros; Thumbnails; SMM) → "Tools I Use:" ✅ → "Key Skills:" pipe-separated keyword rows (YouTube & TikTok Videos | Facebook Ads | UGC Content | … YouTube Shorts | Instagram Reels | Facebook Reels …) → "⭐⭐⭐⭐⭐ What My Client Said" — two pasted client reviews (social proof inside overview) → CTA → sign-off.
- Employment (1): "Upwork" — "Video Editor"
- Education (2): Kingston College — Other, "Manager" (2024–2025); The University of Da nang — BTech, Computer science (2013–2017)
- Portfolio (4): Video Editing: Faceless Video: Explain Video: Video Edit; Video Editing: Vlogs, Travel, Events & Podcasts Video Editor; Video Editing: Longform Talking head Video Edit; Video Editing: Reel/Short/Tiktok Video Edit  (every portfolio title starts with "Video Editing:" + keyword)
- Recent contracts (10 of 26): 2026-10-27, 10-27, 10-27, 10-05, 10-04, 10-03, 09-24, 09-17, 09-10, 09-03 (all active). Biggest: "$1,850 — Long-Term Talking Head Video Editor (Alex Hormozi Style)". Others: "VSL Edit for a 3min video", "Reel Editing from Script", "YouTube Video Editor and Social Media Manager", "Experienced Faceless YouTube Video Editor Needed… (5 videos for $200)", "Instagram Reels Video Editor Needed" ($250).

### A11. Barzaan Ali K. — Pakistan (timezone set to US Mountain) — ~01177bdac836ce4770
- Badge: Top Rated | JSS 100 | $30K+ | Jobs 228 (202 fixed + 26 hourly) | 61 feedback | $9/hr | fullTime | profile video | sells $10 "Video & Audio Consultation"
- Searches: 3/7 — Q1#4 Q4#3 Q6#7 (avg 4.7)
- Title: "YouTube Video Editor | Faceless & Talking Head Video Editing"
- Overview first 400: "🎬 YouTube Video Editor specializing in Faceless Videos, Talking Head Videos, YouTube Shorts, Documentary Videos & Long-Form YouTube Video Editing.\n\nIf you're looking for a YouTube Video Editor who understands storytelling, pacing, viewer retention, and what keeps people watching, I can help turn your raw footage, script, or voiceover into engaging, professionally edited YouTube content.\n\nOver th"
- Structure: keyword-dense first line (repeats title phrases) → "If you're looking for a [exact search phrase]…" → proof (5+ yrs, 1,000+ videos, 50M+ views) → "🚀 YouTube Video Editing Services" bullet list (each bullet = a searchable service phrase: Faceless YouTube Video Editing, YouTube Shorts & Short-Form Video Editing, Podcast Video Editing…) → "📈 Editing Built Around Viewer Retention" → "🏆 Experience & Results" → niche list → "💬 What Clients Say" (pasted testimonial) → "🎯 Looking for a YouTube Video Editor?" CTA. The phrase "YouTube Video Editor" is repeated ~6 times naturally (keyword density without a dump).
- Employment (4): 1) "Pixelon Production" — "💼 Founder"; 2) "Freelance" — "💼 Lead YouTube Editor & Content Strategist"; 3) "Xpert Creation" — "💼 Team Lead Video Editors"; 4) "Black Bird Productions" — "💼 Junior Video Editor". Shows a career ladder Junior → Team Lead → Founder of own studio; emoji in job titles.
- Education (2): Karachi University — Bachelor of Visual Communication Design, Video production (2017–2020); Arena Multimedia — Advanced Diploma in Media Studies (2021–2023)
- Portfolio (10) first 8: Reel/Short/Tiktok; Documentary editing; 2D Map Animation like Vox Media; 2D Explainer Video Editing for YouTube (High-Retention Format); Talking Head YouTube Video Editing for Real Estate Channel; Faceless Documentary YouTube Editing; Faceless Sport Video; YouTube Documentary & Celebrity Recap Video Production
- Recent contracts (10 of 196): 2026-10-25 ×4, 10-24, 10-19, 10-19, 10-17, 10-13, 10-12 (all active; $10–$100). Titles: "Sample for youtube channel", "Alexander Volkanovski Documentary", "YouTube Video Editor", "Video editor for faceless documentary channel", "Short reels creation tiktok and YouTube", "Faceless youtube".

### A12. Vo N. ("Nhat") — Vietnam — ~0164bae49ec98f51a9
- Badge: Top Rated Plus | JSS 99 | $60K+ | Jobs 140 (98 fixed + 42 hourly) | 49 feedback | $30/hr | fullTime | profile video | sells $100 consultation
- Searches: 3/7 — Q1#20 Q2#8 Q4#19 (avg 15.7)
- Title: "Video Editor | YouTube, Tiktok, IG, LinkedIn | Long & Short Form"
- Overview first 400: "4 Years of Experience in Video Editing, both Long and Short Form.\nQUALITY, RELIABILITY, and getting things done ON TIME. Simply THE BEST!\n\nYou wanna boost your business with awesome videos? My goal is to make your brand stand out. Let's create videos that really connect with your audience!\n\n🎞️ Video Editing: Transform raw footage into refined, visually compelling, and engaging videos\n📖 Storytell"
- Structure: SHORT (~1,100 chars total): years line → caps tagline → question hook → 5 emoji service lines (Video Editing, Storytelling, Color, Motion Graphics, Sound) → sign-off. No platform keyword block, no proof numbers. (Keywords instead live in title + 18 keyword-titled portfolio items.)
- Employment (2): 1) "FPT Media" — "Video Editor"; 2) "Viettel" — "Telecommunications Engineer" (Viettel = large real Vietnamese telecom; matches his telecom degrees → plausible real history, not keyword-driven)
- Education (2): Ho Chi Minh City University of Technology — MS, Telecommunications; Posts and Telecommunications Institute of Technology — BEng, Telecommunications engineering (no dates)
- Portfolio (18) first 8: Youtube Short-Form Video Editing; Youtube Shorts/Tiktok Video Editing; Instagram Reels, Youtube Shorts Video Editing; Short-Form Youtube Video Editing; Short-Form Video Editing; YouTube Faceless Video Editing for Tech Channel; Talking Head Video Editing for Youtube Channel; Vlog Video Editing for Youtube Channel  ← portfolio titles are pure search phrases (5 near-duplicate "Short-Form/Shorts" titles)
- Recent contracts (10 of 129): 2026-10-26, 10-24, 10-21, 10-21, 10-21, 09-06, 09-03, 08-13, 08-06, 08-04 (all active). Largest: "$1,187.50 — Video Editor Needed (Short & Long Form) in the Real Estate Niche". Others: "YouTube Video Editor for Language-Learning Reviews", "2 reels", "Webinar video edit & short reels", "Linkedin video".


### 13. Ejiofor J. — ~0139b5152f85e4be35 — state "Ogun State"
- Badge: Top Rated | JSS 100 | Earnings $3K+ | Jobs 23 (20 fixed + 3 hourly; 22 contracts; 13 feedback) | Rate $17/hr | Consultation "Marketing" $30 | profile appears new (person_id range ~2026 — inference)
- Search appearances 4/8: short form #8, TikTok #15, UGC #9, CapCut #11 — avg 10.8
- Title: "AI UGC Ad | AI Video Ad | TikTok, Meta & Product Video"
- Overview first 400 chars: "Need AI video ads that feel authentic enough to stop the scroll, without the cost and production time of a traditional shoot?\n\nI create AI UGC Ads, AI Video Ads, and AI Product Videos for eCommerce brands, TikTok Shop sellers, agencies, SaaS companies, and businesses that need more high-quality advertising creatives.\n\nMy focus is simple: turning products, offers, and ideas into engaging video creati"
- Structure: question hook → who/what → focus → "I specialize in:" • (7) → approach → AI tool list (Veo 3, HeyGen, Kling, Runway, Higgsfield, Seedance, ElevenLabs, Midjourney, Premiere, AE, CapCut) → client-praise summary → CTA → then the SAME ~55-term comma-separated keyword block pasted **3 times** ("AI UGC Ad, AI UGC Video, AI UGC, AI Product Video, AI Video Ad, … Scroll Stopping Video Ad, AI Video Creative."). Most aggressive overview stuffing in the set.
- Employment: **100 entries** (third profile to hit exactly 100 → strong sign the API/Upwork caps at 100; true total may be higher — inference). Patterns:
  • ~28 entries use FREELANCER-PROFILE-STYLE TITLES AS COMPANY NAMES, many duplicated: e.g. company "AI Video Editor | Meta & TikTok Ads | UGC | Ecommerce | DTC | Video Ads" (×3), "Performance Creative Strategist | Meta Ads | AI UGC & Video Ads" (×3), "AI Video Creator | Seedance 2.0 UGC, Avatars & Cinematic Ads" (×2), "AI Video Generator | UGC & Meta Ads | HeyGen | Kling AI | VEO 3" (×3).
  • ~60 invented agency-sounding names: "Elite AI Commerce", "AI Commerce Labs", "Viral Commerce Studio", "Elite UGC Performance Studio", "BluePeak Creative" + "BluePeak Creative Solutions", "Scale Commerce AI", "Performance Creative Hu" [sic], "Waymo Studios" (borrows a real brand name).
  • Self-Employed / "Freelance (Self-Employed)" ×5.
  • Last ~10 are generic non-video roles: "Entertainment Promotions Coordinator" (InfinitePulse Entertainment), "Digital Audio Content Assistant" (UrbanSound Network), "Media Operations Assistant" (PrimeLink Media Solutions).
  • Job titles = permutations of the same keywords: "AI UGC Ads Producer | AI Product Ads Specialist", "AI Product Video Creator | AI Video Ads Editor", "AI UGC Video Creator | Meta & TikTok Product Ads" etc. Record IDs cluster 2053…–2057… → all added within a short window (inference).
- Education (keyword-stuffed / not real schools): institution "AI UGC Advertising Specialist", field "Independent Creative Studio" (2020–2023); BFA at "AI Marketing Studio" (2017–2020); "AI UGC Advertising Specialist"/"Independent Creative Studio" again (2023–2025).
- Portfolio: **311 items** (API showed 50). First 8: "Cinematic Ancient Japanese AI Video | Samurai Visual Storytelling"; "Hair Treatment & Beauty Brand Commercial | Cinematic Ad Video"; "3D Cinematic Fantasy Movie Trailer | Water Power Character Animation"; "Japanese Anime Cinematic Trailer | AI Anime Video Editing & Animation"; "AI Music Video Production | Cinematic AI Animation & Video Editing"; "Logo Animation | Custom Brand Intro & Motion Graphics"; "AI Video UGC Content Creation | UGC Ads & Social Media Video Editing"; "Real Estate Graphic Design | Property Marketing Flyer |". Later descriptions are raw keyword lists ("using AI Ugc, AI Ugc Video, AI Ugc Ad, AI Ugc Creator, Product UGC, UGC Video Ad…").
- Recent contracts (10 of 22): 2026-10-10 Arcads 4 AI UGC ads $100; 2026-10-01 AI driver video $15; 2026-09-21 AI videos for Plant Keep $60; 2026-09-14 AI Creative Designer/UGC $50; 2026-09-12 AI UGC Supplements hourly $4/4.5h; 2026-09-07 "Looking for Ai ad video creators" $5; 2026-08-23 TV Remote commercial $350; 2026-07-24 AI Content Creators hourly $1,995/133h (~$15/h, the bulk of earnings); 2026-07-22 EP 1 - Fly $140; 2026-09-21→09-23 AI Product Video $10 5★.
- RED FLAGS: fake education institutions, 100+ fabricated-looking employment entries, triple-pasted keyword block, 311 portfolio items, $4–$15 contracts. Ranks mid (#8–15) on 4 searches — keyword stuffing helps on UGC/AI queries but did not put him on top.
## GROUP B — NO TOP BADGE

### B1. Mustafa I. — Pakistan — ~017ed4c94770e7cffe
- Badge: none returned by get_profile (no top_rated field); appears in rising_talent=true results → Rising Talent (inferred from filter). JSS 100 | $2K+ | Jobs 47 (29 fixed + 18 hourly) | 10 feedback | $5/hr | fullTime | profile video | sells $15 consultation
- Searches: 7 total — main Q3#2 Q4#8 Q5#7 + RT R1#5 R2#5 R3#1 R4#1 (avg 4.1). STRONGEST no-badge cross-ranker: top-10 in 3 open (non-filtered) searches against TR/TR+ competition.
- Title: "YouTube Video Editor | Reels, Shorts, Ads & Motion Graphics"
- Overview first 400: "I'm an expert YouTube video editor and motion graphic artist. I turn raw footage into YouTube videos, Reels, Shorts, ads and VSLs that stop the scroll and keep people watching to the end. 100% Job Success on Upwork, 30+ jobs completed, and capacity for 20–40 videos a week.\n\nRecent results:\n• Took a client's videos from 1–2K views to 100K+\n• Managed content for YouTube channels with 500K+ subscribers\n•"
- Structure: positioning + proof + capacity in first 2 lines → "Recent results:" bullets → "What I edit:" 9 long bullets, each packed with sub-keywords (YouTube long-form…; Faceless / cash cow…; "Short-form: Instagram Reels, TikToks & YouTube Shorts, plus podcast and long-video repurposing into clips"; Ads: UGC ads, Facebook & Instagram ads, TikTok ads…; VSLs; Motion graphics; AI video (HeyGen, ElevenLabs, Higgsfield); Real estate; Course/corporate) → "Every edit is built to keep viewers watching:" → "Long-term channel partner:" → "Why clients keep working with me:" → Tools → CTA. NO separate keyword dump — keywords woven into bullets (covers YouTube, Reels, Shorts, TikTok, UGC, podcast clips, VSL).
- Employment (2): 1) "IBEX Global" — "Video Editor"; 2) "Arena Multimedia" — "Video editor and Motion graphic artist". (IBEX = real BPO/CX company; Arena Multimedia = training institute — inference)
- Education (1): Iqra University — Master of Computer Science (MSCS) (2017–2020)
- Portfolio (9) first 8: Car edit reel; Short Form Content; Faceless YouTube Documentary Edit; Long-Form Talking Head & VSL Edit; Motion Graphics Reel | Kinetic Typography for Social Ads; Talking-Head Short with Dynamic Captions; Motion Graphics & Kinetic Text Reel; Real Estate & Brand Reel  (descriptions end with "Ideal for…" keyword-rich sentences)
- Recent contracts (10 of 35): 2026-10-23, 10-22, 10-20, 10-20, 10-16, 10-01, 09-22, 09-20, then 2025-01-02, 2024-12-23 (still marked active). Tiny tickets $5–$100: "Reel and two Stories", "Meta Ads Content Creator/Video Editor", "Short Social Media Video Creator", "VSL Video Editor Needed for Beauty Ad Videos". → Low-price volume strategy at $5/hr.


### 14. Paula E. — ~01ddfa32109e3c2789 — state "Federal Capital Territory" (Abuja)
- Badge: Top Rated Plus | JSS 100 | Earnings $10K+ | Jobs 13 (10 fixed + 3 hourly; 12 contracts; 6 feedback) | Rate $15/hr
- Search appearances 4/8: short form #16, TikTok #12, Reels #17, YT Shorts #11 — avg 14.0
- Title: "Short-Form Video Editor | Reels, TikTok & Youtube Shorts, Talking-Head"
- Overview first 400 chars: "Need a video editor to get on board immediately? I'm right here\n\nEvery day, thousands of videos are posted… but only a few actually hold attention.\nI promise to help you create clean, high-performing short-form videos that people actually watch.\n\nIn a project I worked, I edited multiple short-from videos for Kachins, a fashion brand, helping their instagram gain thousands of followers in a few "
- Structure (~1,700 chars): availability hook → attention insight → named-client proof (Kachins) → "Here's how I will help you get results:" * list (6) → industries → "Simple? Yes. Done right? That's where I come in." → extra services → "What I Offer:" ✔ (4) → CTA → trailing pipe keyword line: "Video Editor | Short-form Content | Reels | TikTok | Youtube Shorts | CapCut | Video Editing | Color Grading | Talking-Head Video"
- Employment (3) — small real-sounding businesses, plain roles:
  1. Mastribe — "Creative Content Creator"
  2. Xplicit Mode — "Content Creator & Editor"
  3. Jubilee Systems — "Content Creator & Social Media Manger" [sic]
- Education: Bachelor's, Fine and Applied Arts, Nnamdi Azikiwe University (2014–2018); MBA Marketing, Ahmadu Bello University (2026–2028, in progress)
- Portfolio (15). First 8: "Social Media Management"; "Lead Magnet Design"; "Social Media Designs"; "Portfolio"; "Content creation for a beauty brand"; "Video Editing Portfolio"; "Short-Form Video Editing | Visuals for men's fashion brand"; "Short-Form Video Editing | Video for an e-commerce start-up". Later items use "Short-Form Video Editing | <client/niche>" pattern.
- Recent contracts (10 of 12): 2026-10-16 Floral Design Reels $35; 2026-08-17 Video Editor for Social Media $900; 2025-10-15 Short Form Video Editor for Boutique Hotel & Restaurant **$10,135** (active, ≈ all her earnings, single anchor client); 2025-08-31 Social Media Management $250; 2025-03-27 Newsletter design $35; 2026-08-03 Video Editor for Social Media $200 5★; 2026-07-27 same title hourly $60/4h 5★; 2026-07-08 same title $60 5★; 2026-04-18 Short-Form TikTok/Reels/Shorts $40/2.7h; 2025-12-18 Short-Form Social Media Editor $53.33/2.7h 5★.
- Notes: TRP with only 13 jobs because one $10K retainer. Honest employment, typos. Shows "one big retainer" path to TRP.
### B2. Tatheer A. — Pakistan — ~01b6f6b334ae3c0ca6
- Badge: none returned; did NOT appear in any of the 4 rising_talent=true searches → likely truly unbadged (inference). JSS 88 | $2K+ | Jobs 55 (30 fixed + 25 hourly) | 16 feedback | $5/hr | fullTime | no profile video
- Searches: 5/7 main — Q1#10 Q2#6 Q3#13 Q4#13 Q7#4 (avg 9.2). Best "truly unbadged" cross-ranker; beats many TR/TR+ profiles despite JSS 88.
- Title: "Short Form Video Editor | YouTube Shorts, Reels & TikTok Editor"
- Overview first 400: "I’m a Short Form Video Editor specializing in YouTube Shorts, Instagram Reels, and TikTok video editing for creators, brands, coaches, businesses, and personal brands.\n\nI create engaging social media videos designed for audience retention, watch time, and engagement using fast-paced cuts, dynamic captions, motion graphics, clean transitions, and scroll-stopping editing styles.\n\nWhether you need a"
- Structure: first sentence = title phrase + all 3 platforms + client types ("creators, brands, coaches…") → style paragraph → **"Whether you need a YouTube Shorts editor, Reel editor, TikTok video editor, or social media video editor…"** (exact buyer search phrases in a sentence) → "What I can help you with:" 15 ✔ items, each a search phrase (YouTube Shorts Editing, Instagram Reels Editing, TikTok Video Editing, Short Form Video Editing, Podcast Clip Editing, UGC Video Editing, Content Repurposing…) → "My editing style focuses on:" → Tools (Premiere, AE, CapCut) → audience line ("creators, entrepreneurs, coaches, influencers, podcasts…content creators") → CTA repeating "YouTube Shorts editor, Instagram Reels editor, TikTok editor, or short form video editor" → **closing keyword list, one per line** (Short Form Video Editor / YouTube Shorts Editor / Instagram Reels Editor / TikTok Video Editor / Social Media Video Editor / Reels Editor / … / Podcast Clip Editor / … / UGC Video Editing …). Inference: this text literally maps to 6 of our 7 queries, explaining appearance in 5 searches with weak stats.
- Employment (1): "Team AR" — "Video Editor"
- Education (1): Bahauddin Zakariya University — BS, Journalism, media studies and communication (2020–2024)
- Portfolio (12) first 8: Business Idea Explainer; AI Generated Cinematic Video; High-Converting VSL Video Edit; The Rise of Nike; YouTube Shorts Video Editing; AI-Generated Marketing Video; Top Ranking Video Editing; Product Promotion Video Editing  (role field set to "Short form video editor" on most items)
- Recent contracts (10 of 39): 2026-10-27, 10-26, 10-24, 10-22, 10-21, 10-18, 10-15, 10-10, 10-08, 10-05 (all active; $5.83–$56.66). Titles: "Short form video Editor", "Motion Graphics Designer for Video Animations", "Youtube Shorts Editing", "Short-Form Video Editor (TikTok Shop Affiliate Content)", "Short-Form Video Editor to join our team", "TikTok Video Editor Needed", "Reels editor hiring Urgent". ~10 small orders in 3 weeks.


### 15. Oluwatoba A. (Toba) — ~01e3968da192142afa — state LA (Lagos)
- Badge: Top Rated | JSS 100 | Earnings $5K+ | Jobs 24 (21 fixed + 3 hourly; 21 contracts; 9 feedback) | Rate $20/hr
- Search appearances 4/8: short form #12, TikTok #17, Reels #13, CapCut #17 — avg 14.8
- Title: "Short-Form Video Editor | TikTok, Reels, YouTube Shorts & Ad Creatives"
- Overview first 400 chars: "I help creators, brands, and businesses turn raw footage into high-impact videos that hold attention, tell clear stories, and drive results.\n\nI specialize in short-form video editing, working across talking-head videos, motivational content, gaming, social media videos, and YouTube content. My focus is simple: make videos that people actually watch to the end.\n\nI primarily work with CapCut PC Pro f"
- Structure (~2,100 chars): "I help X turn Y into Z" → specialization → tools paragraph (CapCut PC Pro, learning DaVinci, Canva, ChatGPT/Gemini/Grok) → experience line → "What I can help you with:" - list (6) → "Why clients enjoy working with me:" - list (4) → passion paragraph → CTA. No keyword dump; honest ("actively expanding… DaVinci").
- Employment (3) — generic/placeholder:
  1. Freelance — "Video Editor"
  2. Freelancer — "Freelancer"
  3. Freelancer — "Freelancer"
- Education: BEd Educational Technology, Lagos State University (2024–2027, in progress)
- Portfolio (4): "Talking Head AD (Intro Edit)"; "Interview-style Project"; "Short Storytelling Documentary Video"; "Full Portfolio (Website)"
- Recent contracts (10 of 21): 2026-09-08 street interview/vox pop $30; 2026-06-28 YouTube Podcast Editor $1,855; 2026-06-22 IG Reel Editor $50; 2026-05-20 Short-Form Editor/Clipper $260; 2026-05-13 Reels 1–1.5 min $67; 2026-02-18 Social Media Video Editor & Graphic Designer hourly $1,083.34/83.3h; 2026-02-06 Social Media Editor hourly $1,020.52/78.5h; closed 2026-10-16: Luxury escape content $20, MMA Video Editor $20, Talking Head Meta Ad $15.
- Notes: Effectively ZERO employment optimisation (duplicate "Freelancer/Freelancer") yet ranks on 4/8 short-form searches → confirms title + skills + job history carry ranking.
### B3. Dua D. — Pakistan — ~0130d0b5925f90fb17
- Badge: none returned; appears in all 4 RT-filtered searches → Rising Talent (inferred). JSS 100 | $2K+ | Jobs 21 (15 fixed + 6 hourly) | 9 feedback | $20/hr | fullTime | profile video | sells $30 consultation. Very new account (person ID 2085…; first contracts Sept 2026 — inference).
- Searches: 5 total — main Q1#13 + RT R1#1 R2#2 R3#4 R4#3 (avg 4.6). Ranks #13 in open "short form video editor" search ~2 months in.
- Title: "Short-Form Video Editor for TikTok, Instagram Reels & YouTube Shorts"
- Overview first 400: "Short-Form Video Editor | Helping Brands & Creators Go Viral on TikTok, Instagram Reels & YouTube Shorts\n\nHi, I'm Dua — a short-form video editor specializing in fast-paced, scroll-stopping content that boosts engagement, retention, and real audience growth for creators, brands, and podcasters.\n\nWhat I do:\n- Editing raw footage into viral-ready TikToks, Reels & YouTube Shorts\n- Dynamic captions"
- Structure: headline line restating title → intro → "What I do:" (incl. "Podcast clipping & repurposing long-form content into short-form clips", "Faceless & UGC-style") → Tools → "Why work with me:" → CTA → sign-off → **THREE keyword blocks**: (1) Title-Case list (Video Editing / Short Form Video / TikTok Video Editing / Instagram Reels Editing / YouTube Shorts Editor / … / Social Media Video Editor), (2) lowercase list (short form video editor / TikTok video editing / … / video editor for creators / UGC video editing / …), (3) hashtags (#ShortFormVideo #VideoEditor #TikTokEditor #ReelsEditor #YouTubeShorts … #PodcastClipping #UGCEditor #FacelessVideo).
- Employment (3): 1) "Remotely" — "Short Form Video Editor"; 2) "Remotly" [sic] — "Podcast Clips Editing"; 3) "Remotely" — "YouTube Video Editore" [sic]. ← Company field is a placeholder; job titles are pure search keywords (one per target service). Typos suggest quick entry.
- Education (2): Allama Iqbal Open University — BA, Computer science (2025–2028, in progress); Al Mustafa Computer Center — "Bachelor of Visual Communication Design", Computer engineering (2019–2020) [degree label for a computer center looks mis-selected — inference]
- Portfolio (9) first 8: High-Engagement Instagram Reels Editing; Instagram Reel Editor; Viral-Style Short-Form Video Editing; High-Retention Instagram Reel | Professional Short-Form Video Editing; Instagram Reels Video Editing; UDC & DTC Instagram Reel | Professional Short-Form Video Editing; Podcast Clips Editing | Reels, TikTok & YouTube Shorts; Instagram Reels & Short-Form Video Editing  (all titles = keyword phrases)
- Recent contracts (10 of 20): 2026-10-20, 09-24, 09-23, 09-22, 09-22, 09-20, 09-18, 09-18, 09-11, 09-06 (all active; $10–$243). Titles: "Short Video Edit Project", "video editing of shorts", "Short-Form Video Editor for Instagram Reels, TikTok & YouTube Shorts (Ongoing)", "Test video to see skill set", "Short-form video editor for Instagram Reels and TikTok (talking-head content)", "Instagram and TikTok reels".


### 16. Chris C. — ~01a8ddc5785d734d2f — state LA (Lagos)
- Badge: none returned by API (overview claims "That's how I earned Top Rated" → badge likely lost or text outdated — discrepancy) | JSS 100 | Earnings $20K+ | Jobs 72 (53 fixed + 19 hourly; 59 contracts; 33 feedback) | Rate $28/hr (highest non-badge rate) | Consultation $40
- Search appearances 3/8: TikTok #6, Reels #8, YT Shorts #22 — avg 12.0
- Title: "Video Editor | Reels, Shorts, TikToks, Courses | Edits That Hook"
- Overview first 400 chars: "Tired of video editors who don't get it?\nI understand! I use my skills, experience, and work ethic to make sure you get videos that look great and keep people hooked to the screen.\n\nHOW I WORK\n✅ Learn all about you, your brand, or your business.\n✅ We look at videos in your niche that perform really well.\n✅ We talk, and I draw inspiration from you and what has been proven to work well.\n✅ You get story"
- Structure: question hook → "HOW I WORK" ✅ (4 steps) → "WHAT I CAN HELP YOU WITH:" ✅ (4) → reassurance lines (time zones, pricing) → results claim (6-figure views/dollars, 50+ clients) → "REVIEWS [Over 30+ 5⭐ reviews]" 2 quoted reviews → CTA → "FREEBIES" (200+ viral storytelling templates, lead magnet) → sign-off "Your go-to editor, Chris" → **explicit "P.S. I've included a keyword section below to help make this page more searchable and aligned with Upwork's matching system"** + ~27-term comma keyword block.
- Employment (1): IO Filmworks — "Professional video editor"
- Education: BS Biochemistry, Landmark University (2018–2022)
- Portfolio (11). First 8: "YOUTUBE SHORT"; "AUDIO CLEANUP & COLOR CORRECTION"; "VIDEO AD"; "COURSE / EDUCATIONAL VIDEOS"; "TRAVEL VIDEOS FOR SOCIAL MEDIA"; "Fashion Launch Videos | TikTok, Reels & Shorts"; "Short-form video for Youtube shorts| Tiktok| Instagram Reels"; "Wellness Ad | Instagram Reels & Short-Form Video"
- Recent contracts (10 of 59, all active): 2026-10-14 Social Media Video Editor for Reels (fixed); 2026-05-22 UK sustainability Reels/TikToks $20; 2026-04-11 Video project $55; 2026-03-04 Ads for Molly Baz hourly $1,171.34/41.8h (~$28/h); 2025-12-19 2 Premium Dental Videos $105; 2025-12-17 Short-Form Editor for Podcast Content hourly $3,215.34/114.8h (~$28/h); 2025-12-09 Facebook Ads $150; 2025-12-01 Faith, Family & Business hourly $145.83/5.8h; 2025-11-03 UGC Ads Editor $160; 2025-10-30 Instagram Reel Editor $15.
- Notes: Openly states the keyword block is for Upwork's matching. Sustains $28/h effective on hourly contracts — highest realised rate among the non-TR set.
### B4. Sana A. — United Arab Emirates — ~01ec0d6dfedfdb3147
- Badge: none returned; not in any RT-filtered search → likely truly unbadged (inference). JSS 88 | $1K+ | Jobs 16 (10 fixed + 6 hourly) | 9 feedback | $12/hr | fullTime | profile video | sells $80 consultation. Very new account (person ID 2079…; earliest visible contract Aug 2026).
- Searches: 2/7 main — Q1#3 Q2#3 (avg 3.0!). Ranks #3 in BOTH "short form video editor" and "TikTok video editor" with $1K+ earnings.
- Title: "Video Editing Expert | Short-Form Videos | AI Video, Reels & TikTok"
- Overview first 400: "🏆 Short-Form Editing Expert – 100% Job Success Score\n🕒 6+ years of experience in short-form video editing\n✅ Specialist in Reels, TikTok & YouTube Shorts\n✅ Expert in AI video and AI-generated content\n✅ Fast turnaround, clear communication, on-time delivery\n\nHelping personal brands, creators, and businesses grow with high-retention video content\n\nHi there! I'm a short-form video editor with 6+ year"
- Structure: 5-line emoji proof stack (note: claims "100% Job Success Score" while API shows JSS 88 — stale/inaccurate claim) → one-line value prop → long intro ("now bringing that experience to Upwork" = new-to-platform framing; lists Instagram Reels, TikToks, YouTube Shorts, talking head videos, podcast clips) → passion paragraph → "Accomplishments:" ⭐️ → "What You Get:" ✅ (English & Arabic captions) → "Who I Work With:" (client segments, each with keywords) → "My Process:" Step 1–4 → CTA → "Video Editing Software & Tools I Use:" → **"Video Editing Services:" pipe-separated keyword block** (Short-Form Video Editing | Instagram Reels Editing | YouTube Shorts Editing | TikTok Video Editing | … | Podcast Editing & Clips | UGC & Performance Ads | … | AI UGC Content).
- Employment (5): 1) "Xpo9tial" — "Video Editor & AI Video Specialist"; 2) "One Hub" — "Senior Video Editing & Short-Form Content Expert"; 3) "DigixStudio" — "Short-Form Video Editor & Social Media Content Creator"; 4) "Prism Digital" — "Video Editor & Motion Graphics Specialist"; 5) "Bruce Clay MENA" — "Expert Video Editor & Video Advertising Specialist". Pattern: real-sounding agency names + compound keyword job titles ("X & Y Specialist"); all 5 IDs from one batch (20803362…–20803630…). Bruce Clay = known SEO agency brand (regional office) — unverifiable.
- Education (2): University of Wollongong Dubai — Bachelor of Visual Communication Design, "Video Editing, branding and visual content" (2021–2024); "Adobe" — "Digital Video Editing – Adobe Premiere Pro" (2024–2025) (certificate listed as education)
- Portfolio (11) first 8: Short-Form Video Edit (Reels / TikTok / LinkedIn) for Executive Brand; Short Form Video | Social Media Reel Editing \ YouTube \ TikTok; Video Editing | E-Commerce Content | Talking Head Video; German AI UGC Video Ad | AI Product Advertisement; Russian UGC Style AI Video Ad | Product Promo Video; AI Faceless Product Video Ads | Meta, TikTok & E-commerce; Video Editor | DTC Ads & Paid Social Creative | Ecommerce Store; Short-Form Video Editing & Meta Ads for a DTC Fragrance Brand | ETHRA  (some descriptions end in bullet keyword lists)
- Recent contracts (10 of 16): starts 2026-10-22, 10-22, 10-20, 10-05, 08-26, 08-25, 10-20 (closed 10-27, ★5), 10-15 (closed 10-27, ★5), 10-15 (closed 10-17, ★3), 10-14 (closed 10-15, ★5). Largest: "$1,188 — Video Editor and Motion Graphics Designer" (99 hrs). Titles: "Video Editor (UGC)", "AI Video Editor for paid ads", "AI Video Editor for DTC/E-commerce Ads – Long-Term (Meta Ads)", "YouTube Video Repurposing", "Social Media Reel Editor", "Short-Form Editor for TikTok/Reels – Yacht Detailing…", "Podcast editing" (★3), "DTC Meta Ad Performance Video Editor".

### B5. Ammad R. — Pakistan — ~01af61047f5376d415
- Badge: none returned (no top_rated) despite JSS 100, $100K+, Jobs 249 (216 fixed + 33 hourly), 119 feedback — unusual; not in RT searches (reason unknown; inference: badge lapsed/ineligibility). $19/hr | profile video | sells $75 consultation
- Searches: 2/7 main — Q5#24 Q7#12 (avg 18.0)
- Title: "AI Video Ads & UGC Editor | Scroll-Stopping Ads for DTC Brands"
- Overview first 400: "Your video looks great. So why isn't anyone buying?\n\nI edit VSLs, Meta and TikTok ads, and AI UGC ads for DTC brands, B2B companies, and coaches who need their videos to sell, not just look nice.\n\nMost editors hand you something polished. You post it. A few likes come in. Nobody books a call, clicks your link, or buys your offer.\n\nThat gap between \"looks good\" and \"makes money\" is what I cl"
- Structure: copywriting style — question hook → who/what → pain story → "gap" line → proof (6+ yrs, 200+ jobs, 100% JSS, $100K+) → "WHAT I BUILD" (VSLs; paid ads Meta/TikTok/YouTube; UGC & AI UGC; Short-form Reels/TikToks/Shorts; B2B incl. podcast clips & LinkedIn) → "THE PROOF" (named brands: Bliss Collagen, Femmelife, Metrm; creators Omar Raja 12M+, Answered That For You 4M+; Jaime Gallardo, Soma Meditation, Esteriore Brothers) → "HOW I WORK" + long AI tool list → "GET STARTED" free 10-sec "hook edit" offer. No keyword block.
- Employment (2): 1) "Theblackbirdproduction" — "Video Editor"; 2) "Metro News" — "News Editor"
- Education (1): Iqra University — Bachelor of Science in Journalism, Filmmaking (2020–2024)
- Portfolio (16) first 8: Ali Abdaal Type Talking head Videos; Iman GadzHi Style Talking Head Videos; YouTube Automation Videos; Instagram Trending Reel; Motion Graphic Reel; Unlock Sales Potential Transforming Viewers into Buyers wit VSL Videos; Sales-Boosting VSL Edits – Perfect for Ads & Funnels; Done-for-You Video Content System to Build Your Personal Brand. Red flag: one item titled "B2B Video for [SaaS / Consultant] | Case Study & LinkedIn Content" with "[a webinar/interview / case study]" — unfilled template placeholders left in (likely AI-drafted copy, inference).
- Recent contracts (10 of 228): 2026-10-22, 10-22, 10-21, 10-21, 10-17, 10-09, 10-05, 10-04, 09-24, 09-24 (all active; $15–$650). Titles: "Meta Ad Creative Strategist (Video + Static) for Contractor Lead Gen" ($225), "DTC Video Ad Editor Meta | $1K-$2K Monthly Retainer…", "Video Editor for Meta Ads", "Video Editor for Product Ads" ($290), "AI Cartoon Video Ad" ($415), "VSL Editor – Experienced…" ($650), "Trial video - 1".

### B6. Areej R. — Pakistan — ~010b18432e7351053b
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $1K+ | Jobs 15 (9 fixed + 6 hourly) | 3 feedback | $10/hr | fullTime | no profile video
- Searches: 4 RT-only — R1#6 R2#3 R3#3 R4#4 (avg 4.0). Not in top-25 of any open search.
- Title: "Video Editor for Reels, TikTok & YouTube Shorts | Viral Content Expert"
- Overview first 400: "If your content looks good but doesn’t keep people watching, the editing is the problem.\n\nI’m a Short Form Video Editor with 5+ years of experience creating high retention content for brands, creators, and businesses across Instagram Reels, TikTok, and YouTube Shorts.\n\nMy expertise is not just editing videos. I specialize in creating content that matches trends, grabs attention fast, and keeps v"
- Structure: problem hook → "I'm a Short Form Video Editor…" + 3 platforms → differentiation (trend-based) → experience claims → "What I specialize in:" • list (incl. "Repurposing long videos into Shorts/Reels/TikToks") → platform-optimization para → "I’m also recognized for:" ✔ list (Trend finding, Audio selection…) → Tools (CapCut Pro, InShot, VMake, Vink, Premiere — mobile-first tools) → niche list (beauty reels, lifestyle, product, aesthetic) → CTA. No keyword dump.
- Employment (4): 1) "Anas Tours & Travels Pvt" — "UGC Video Editor l Trend Researcher"; 2) "HBCU Creatives" — "Social Media Video Editor"; 3) "Reuben Eczema Pvt" — "Video Editor and Trend Finder"; 4) "Kia Motors" — "Reels, Tiktok & Shorts Editor". Pattern: client/industry names (travel agency, skincare, auto) + titles that embed platform keywords (UGC, Social Media Video Editor, Reels/TikTok/Shorts). Red flag: "Kia Motors" big-brand name with a freelance-style title — unverifiable (could be a dealership client; inference). All 4 IDs one batch (20564881…–20564914…).
- Education (1): Lums — Journalism, media studies and communication (2018–2022) (no degree field)
- Portfolio (17) first 8: Professional Video Editor | Vlog & Lifestyle Short Form Video Editor; Professional Video Editor | Video Editing | YouTube Video Editor; Apocalyptic Documentary Creator; Created viral instagram, tiktok & Youtube shorts; instagram, tiktok, youtube shorts; video editor shorts; Daily routine video edit for instagram and TikTok reels; Motivational video  (titles = raw keyword phrases; one description reused 3×; "Apocalyptic Documentary" description identical to Hafsa H.'s portfolio text → copied text, red flag)
- Recent contracts (10 of 14): 2026-10-22, 10-17, 10-16, 10-13, 10-05, 09-28, 09-27, 09-22, 09-21, 09-05 (closed 10-13, ★5 "she came up with brilliant ideas"). $15–$360. Titles: "3 Short Reels", "Creative Video Editor for Engaging Hair & Beauty Reels (Instagram/TikTok)", "1 floral reel!", "Social Media Video Editor for Influencer" ($360), "Short-Form Video Editor for Wedding Brand & Mini Vlogs", "Instagram Reels Editor — Performance-Based Pay…".

### B7. Linh D. — Vietnam — ~01b6927b7b77f22bf9
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $500+ | Jobs 12 (all fixed) | 5 feedback | $10/hr | fullTime | profile video
- Searches: 4 RT-only — R1#3 R2#4 R3#10 R4#5 (avg 5.5)
- Title: "Senior Video Editor | High-Retention Short-Form & YouTube Content"
- Overview first 400: "Hello. I am Linh Do\nFull-time Video Editor | Unlimited Revisions | Free 30-second trial edit\n\nI have over 3 years of experience editing short-form videos, talking-head content, long-form YouTube videos, and faceless videos for a diverse range of clients—from startups and high-revenue brands to content creators on TikTok, Instagram Reels, YouTube, and Facebook.\n\nWhat I deliver:\n• High-converting U"
- Structure: name → offer line (unlimited revisions, free 30-sec trial) → experience + platforms → "What I deliver:" • list → "🛠️ Tools I use daily:" emoji → "🤝 Why work with me?" (free trial, risk-free) → CTA (send a video that underperformed for free audit) → name → **~45 hashtags** (#VideoEditing #ShortFormVideo #PodcastEditing #TalkingHead … #InstagramReels #UGCAds #TikTokAds …) as keyword block.
- Employment (1): "vận chuyển" (Vietnamese for "shipping/transport") — "editor". Minimal/placeholder.
- Education (2): FPT University (no degree/dates) ×2
- Portfolio (4): Video Editor PODCAST; youtube faceless; Video Editor Talking Head; Video Editor Short | Reel | Tiktok | IG  (descriptions literally "OK", "editor video", "Project done" — titles carry the keywords)
- Red flag: a portfolio thumbnail image reads "TOP RATED UPWORK FREELANCER" while profile has no Top Rated badge.
- Recent contracts (10 of 12): 2026-10-22, 10-07, 10-06, 09-23, 09-08, 09-03, 08-28, 08-25 (closed same day ★5), 08-23 (closed same day ★5), 08-20 (closed same day ★5). $12–$330. Titles: "Need a video editor for new harry potter channel", "Short-Form Video Editor for Cinematic Street Photography…", "Short-Form Video Editor for Instagram Reels & TikTok – Ongoing Work" ×2, "Video Editor — Reels for Interior Design Brands | Per Reel" ($330), "Witch Doctor jump trend video".

### B8. Lam P. — Vietnam — ~012bbff8874481ee30
- Badge: none returned; in 3 RT searches → Rising Talent (inferred). JSS 100 | $900+ | Jobs 10 (7 fixed + 3 hourly) | 4 feedback | $6/hr | fullTime | no video. Only 7 skills.
- Searches: 3 RT-only — R1#2 R2#1 R3#2 (avg 1.7 — best avg rank of any RT result)
- Title: "Professional Video Editor | Instagram | Youtube | Tiktok | Reels"
- Overview first 400: "Hi, I’m Lam!\n• Full-Time Video Editor helping creators, YouTubers, brands, and businesses turn raw footage into engaging, polished content.\n\n• I focus on clean editing, strong pacing, visual storytelling, and professional presentation to create videos that connect with audiences and keep viewers watching.\n\nWhat I specialize in:\n• Talking Head, Interviews & Podcasts\n• YouTube & Faceless Videos\n• Soc"
- Structure: short & plain — greeting → 2 bullet intro → "What I specialize in:" (4 items incl. "Social Media Ads, Shorts, Reels & TikTok") → "What you can expect:" → Tools → "Why work with me?" → CTA. No keyword block, no proof numbers.
- Employment (2): 1) "Xuan Phuoc Lam" (own name) — "Youtuber"; 2) "Rom Media" — "Editor video"
- Education (2): "University technology of Information" — Master's degree, Computer engineering (2004–2026); "University Information of Technology" — BS, IT (2022–2026) [dates/names look inconsistent — inference]
- Portfolio (8): Edit Project about content Talk Head; Professional Talkhead Video Editing (Short-form Content); Video style Alex Level 1; Video Level02 of David Gogin; Video Talking Head For My Client (Short-form Content); Video Subtext Layout Style; Documentary-Style Faceless Video Editing: Mysteries of Appalachia; High-Retention Talking Head Video Editing for TikTok, IG Reels
- Recent contracts (all 9 shown): 2026-10-19, 10-11, 09-02, 08-27, 07-11 (active); closed: 08-21→10-12 ★5, 10-05→10-12 ★5, 06-20→07-07 ★5 (thumbnail), 04-25→06-15 ★5 ($599, "Content Assistant (AI Scripts + Video Posting – TikTok, Reels, Shorts)"). Small tickets $5–$111 otherwise: "Insta reels edit", "Edit UGC promo", "Social Media Reel Editor", "Tik toker who needs help with editing".
- Note: why he ranks #1–2 in RT searches with a plain profile is not explained by text (inference: 100% JSS + recent activity + title containing Instagram/Youtube/Tiktok/Reels).

### B9. Dung N. ("Quang Dũng") — Vietnam — ~01f577ffc76cb46749
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $1K+ | Jobs 13 (all fixed) | 7 feedback | $15/hr | fullTime | profile video. Only 5 skills listed. Very new account (person ID 2097…; contracts from late Sept 2026).
- Searches: 4 RT-only — R1#8 R2#7 R3#16 R4#2 (avg 8.2)
- Title: "Professional Video Editor | Youtube Video | Shorts Video Expert"
- Overview first 400: "Need a video that keeps viewers watching and makes your content stand out?\n\nI'm a Video Editor with over 3 years of experience creating engaging, clean, and professional videos for YouTube and social media.\n\nAs your Video Editor, I focus on understanding your idea, audience, and style first — then turn your raw footage into a polished video that delivers your message clearly and keeps viewers"
- Structure: question hook → "I'm a Video Editor…" → "As your Video Editor…" → "🎬 What I can help you with:" (12 lines: YouTube Video Editing; YouTube Shorts, TikTok & Instagram Reels; Talking Head; Faceless / Cash Cow; Documentary; UGC & Promotional; …) → "🛠 Tools" ✅ → "Why choose me as your Video Editor?" ✓ → purpose para → "Whether you need a Video Editor for YouTube videos, short-form content, talking-head videos, faceless videos…" → CTA → name. The exact phrase "Video Editor" repeated ~6× in headings/sentences (keyword density via natural repetition, no dump).
- Employment (3): 1) "Self-Employed / Freelance" — "Video Editor"; 2) "Self-Employed / Freelance" — "Video Editor | YouTube & Short-Form Content"; 3) "vnexpess" [sic; likely VnExpress, major VN news site] — "Video editor". Second freelance entry's title copies the profile-title formula (pipe + keywords).
- Education (2): FPT University — (no degree) Computer engineering (2018–2022); FPT University — "Doctor of Engineering (DEng)", Computer engineering (2018–2022) [red flag: doctorate in same 2018–2022 window as undergrad — implausible/mis-selected]
- Portfolio (8): Cinematic Real Estate Video Editor; Video Editor - FACELESS VIDEOS; Video Editor - Food & Health videos; Cinematic Video Editing | Professional Visual Storytelling; VLOG , TRAVEL VIDEOS - visual storytelling videos (identical title + near-identical text to Luong Tan D.'s portfolio — copied); Video Editor - TALKING HEAD videos; Video Editor - YouTube Shorts & TikTok Reels videos; Video Editor / Social Media Ads
- Recent contracts (10 of 13): 2026-10-26, 10-19, 10-15, 10-12 ($346), 10-08 ($290), 10-06 ($340) active; closed ★5: 10-06→10-11, 10-01→10-08, 09-24→10-04, 09-29→09-30. Titles: "Experienced Video Editor for YouTube Automation Channel (Space Documentaries)", "YouTube Video Editor for Long-Form and Shorts", "Short form video editor for app", "Youtube Video Editor - The Forgotten Gentleman", "Editor for Youtube Sports channel American Football", "Funny Short Tiktok Edits".

### B10. Syed R. — Pakistan — ~01a49b8e3013583ba1
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $1K+ | Jobs 27 (25 fixed + 2 hourly) | 16 feedback | $6/hr | no video
- Searches: 4 RT-only — R1#15 R2#6 R3#6 R4#6 (avg 8.2)
- Title: "Video Editor | YouTube Videos, Meta Ads, TikTok Ads,  Insta Reels"
- Overview first 400: "Most videos and ads lose the viewer before the message even lands. That is not a footage problem, it is an editing problem, and fixing exactly that is what I do for every brand and creator I work with.\n\nI am a video editor and content producer working across YouTube, Meta, TikTok, and Instagram, helping ecommerce brands, DTC stores, agencies, coaches, and content creators turn raw footage into h"
- Structure: problem hook → positioning ("I run a small production team") → "What I Edit" (11 lines, each a buyer search phrase: YouTube Shorts; Meta Ads…; Facebook Video Ads and Facebook Ad Creative; TikTok Ads and organic TikTok Videos; Instagram Reels; UGC Video Editing and AI Generated UGC Ads; VSLs; Podcast Editing and Podcast Clips for repurposing…) → "Services I Offer" (11 more keyword lines) → "What Goes Into Every Edit" → "Tools and Software" → "Who I Work With" (7 client segments) → "Why Clients Work With Me" (repeats "every YouTube video, every Meta Ad, every TikTok Ad, and every Instagram Reel") → CTA. Very long; keyword-heavy via list headings instead of a dump. No emojis.
- Employment (2): 1) "Diligenttek" — "Social Media Manager & Video Ad Designer"; 2) "Bits N Digits" — "Video Editor"
- Education (2): Government Degree College for Boys & Girls, SRE Majeed — High school degree, Computer science (2023–2025); FAST University, Karachi — BS, Fintech (2026–2030, in progress)
- Portfolio (6): Skincare AI UGC | Storytelling Ad for Swedish Audience; Skincare Ad | AI Animated Character Creative; Supplement VSL Ad; YouTube Talking Head Edit | Motion Graphics & Dynamic Subtitles; Skincare UGC Video Ad | TikTok, Instagram Reels & Meta Ads; UGC Skincare Video Ad | Beauty Product & Meta Ad Editing
- Recent contracts (10 of 27): 2026-10-24 ×3, 10-22 ×3, 10-17 ($153), 10-16, 10-05, 09-22 (all active; $13–$153). Several from the same client(s) in batches (identical timestamps). Titles: "TERA NAAM HAI SAHARA", "Niyat Advertisement muslim", "sikh simran app -distraction video", "restaurant video for my instagram", "Create 5 Professional CapCut Video Templates for Attorney / Law Firm", "TikTok Shop UGC Short Form Video Editor", "Video Editor Needed for Pokémon Card Show Vendor Content – Long & Short Form".

### B11. Samar F. — Pakistan (timezone set to US Pacific) — ~0155567c787d26a7d6
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $6K+ | Jobs 10 (5 fixed + 5 hourly) | 1 feedback | $10/hr | fullTime | profile video. No education listed.
- Searches: 4 RT-only — R1#24 R2#13 R3#13 R4#18 (avg 17.0)
- Title: "High-Retention Video Editor | Reels, TikTok, Shorts & UGC Ads"
- Overview first 400: "I edit short-form videos that stop the scroll and keep people watching to the end.\n\n100% Job Success | 570+ hours on Upwork | 3 years of editing experience\n\nThe first few seconds decide whether someone keeps watching or swipes away. I build every edit around a strong hook, tight pacing and clean captions, so your content holds attention and performs.\n\nWhat I edit\n\nInstagram Reels, TikTok and YouTu"
- Structure: SHORT & tight (~1,200 chars): 1-line promise → proof bar (JSS | hours | years) → hook philosophy → "What I edit" (4 lines: Reels/TikTok/Shorts; UGC ads; "Podcast and talking-head clips repurposed into Shorts"; captions/motion) → "What you get" → Tools → "Try me first: … free sample" → CTA. No keyword dump.
- Employment (2): 1) "TUMARA TEXTILE" — "Video Editor"; 2) "Jade textile LIMITED" — "VIDEO EDITOR" (in-house roles at textile companies = client-industry naming; plain title)
- Education: none
- Portfolio (7): E-Commerce Ad Video Editing; YouTube Finance Video Editing | Credit Card Explainer Video; Real Estate YouTube Video Editing | Long-Form & Motion Graphics; Documentary Video Editing | Motion Graphics & Storytelling; Instagram Reels & YouTube Shorts Video Editing | Before & After; 500K+ Views | High-Retention YouTube Video Editing; Faceless Video Editing | Porsche 930 Turbo Documentary. (Last item's role = "Apocalyptic Documentary Creator" — same unusual string appears in Hafsa H.'s and Areej R.'s portfolios → shared template / possibly same team; inference.)
- Recent contracts (all 10 shown): 2026-10-19, 10-16, 09-10, 06-16 ($820, 82h), 05-26, 05-18, 05-05 ($2,200, 220h "BKPS Video Editing"), 04-20, 2025-06-22 ($2,556.67, 255h "Social Media Manager (6-Month Contract)…") active; closed 09-17→10-26 ★5 ("Trial: Live Hit Clip…"). Earnings concentrated in 3 long hourly contracts.

### B12. Bao N. — Vietnam — ~01521ccd8513ef4f1f
- Badge: none returned; in all 4 RT searches → Rising Talent (inferred). JSS 100 | $2K+ | Jobs 18 (14 fixed + 4 hourly) | 8 feedback | $20/hr | fullTime | profile video
- Searches: 4 RT-only — R1#12 R2#16 R3#18 R4#13 (avg 14.8)
- Title: "AI Video Editor & AI Video Creator | YouTube, UGC, Tiktok & Meta Ads"
- Overview first 400: "Need engaging video ads or YouTube content without the hassle of managing the entire production process? I can turn your scripts, raw footage, or ideas into polished, ready-to-publish videos using AI video generation and professional editing.\n\nWith 6+ years of experience in video editing, I combine storytelling, creative editing, and AI video production to help brands, agencies, and content cr"
- Structure: question hook → years → "🤖 AI VIDEO CREATION & PRODUCTION" bullets → process line → "🎬 VIDEO EDITING & YOUTUBE CONTENT" bullets (incl. "TikTok, Instagram Reels, and YouTube Shorts", "UGC ads, Meta ads") → "🛠️ SOFTWARE & AI TOOLS" (grouped) → "⭐ WHAT YOU CAN EXPECT" → recap ("AI-generated ad creatives, a reliable YouTube video editor") → CTA. ALL-CAPS emoji section headers; no keyword dump.
- Employment (1): "MCV GROUP CORPORATION" — "Video Editor" (a real Vietnamese media group name — inference)
- Education (2): University of Natural Resouces [sic] and Environment HCMC — Engineer's degree, Information Technology (2017–2021); FPT University — BA, Video Editing (2018–2022)
- Portfolio (7): Short-form Videos for TikTok, Instagram Reels, and YouTube Shorts; Faceless; Documentary; Explainer | Animation | Faceless; Talking head; AI Ads - Health Industry; UGC | ADS | SHORT | AI  (1-word or keyword titles, minimal descriptions)
- Recent contracts (10 of 17): 2026-10-19, 09-28 ($1,202.50, 84h "Video Editor for Meta Ads (AI first)"), 09-28, 09-21, 09-16, 09-11 ($375), 09-06, 08-21, 08-06 ($201) active; closed 07-29→10-08 ★5 ($180 "YouTube Video Editing"). Titles: "Direct-Response Video Editor (Generative AI, Meta Ads) – 7-Figure DTC Brand", "Need video editor for reels and facebook ads", "Editor for 2d whiteboard explainer channel".

