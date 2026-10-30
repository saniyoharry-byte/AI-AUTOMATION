# Harry S.: client search ranking audit (30 Oct 2026)

**Profile:** Harry S., `~01ec9b3903b16aa26b`, Nigeria, $10/hr, 0 jobs, no JSS, no badge, $0 earnings.
**Method:** Live Upwork `find_freelancers` search (read-only), 25 results per page. Unfiltered searches were paged through offset 200 (top 225). Nigeria-filtered and newcomer searches were paged through offset 100 (top 125).
**Position convention:** position = offset + row index on the page. Pages sometimes overlap by one row (the first row of a page repeats the last row of the previous page), so a true deduplicated position can be about 1 to 2 places better.

## Results

| # | Search | Harry's position | Pages scanned | hasMore at end | Boosted rows |
|---|---|---|---|---|---|
| 1 | "short form video editor" | Not in top 225 | 9 (off 0–200) | true | 0 |
| 2 | "TikTok video editor" | Not in top 225 | 9 | true | 0 |
| 3 | "Reels editor" | Not in top 225 | 9 | true | 0 |
| 4 | "YouTube Shorts editor" | Not in top 225 | 9 | true | 0 |
| 5 | "podcast clips editor" | Not in top 225 | 9 | true | 0 |
| 6 | "CapCut editor" | Not in top 225 | 9 | true | 0 |
| 7 | "video editor" | Not in top 225 | 9 | true | 0 |
| 8 | skills = [Short Video, Instagram Reels], no query | Not in top 225 | 9 | true | 0 |
| 9 | "short form video editor" + Nigeria | Not in top 125 | 5 (off 0–100) | true | 0 |
| 10 | "TikTok editor" + Nigeria | Not in top 125 | 5 | true | 0 |
| 11 | "Reels editor" + Nigeria | Not in top 125 | 5 | true | 0 |
| 12 | "podcast clips editor" + Nigeria | Not in top 125 | 5 | true | 0 |
| 13 | "short form video editor" + no_earnings | Not in top 125 | 5 | true | 0 |
| 14 | "short form video editor" + no_earnings + Nigeria | **#87** (offset 75, row 12; about #86 deduplicated) | 4 (stopped once found) | true | 0 |
| 15 | "video editor" + Nigeria | Not in top 125 | 5 | true | 0 |

**Harry appears in only 1 of the 15 searches.** That search combined the newcomer filter and the Nigeria filter, and he placed #87 there.

## Harry's row as returned in search 14
- **Title:** "Short-Form Video Editor | Reels, TikTok & YouTube Shorts | Podcasts"
- **Profile data:** $10/hr, public, no JSS, no badge, no earnings. The `offers_consultation` flag is **not** set.
- **Skills (20):** Video Editing, Short Video, Instagram Reels, TikTok Video, YouTube Shorts, Social Media Video, Adobe Premiere Pro, CapCut, Video Post-Editing, Podcast Editing, Short Video Ad, UGC, AI Video Generation, Subtitles, Motion Graphics, Video Editing & Production, Content Editing, Video Ad, YouTube Video, Social Media Content Creation
- **Neighbours:** #86 Samuel O. ($25, "Short-Form Video Editor | Reels, TikTok, Shorts & Social Ads"); #88 Alimi Ridwan A.

## Search 13: top 5 (newcomer filter, all countries)
| Rank | Name | Country | Rate | Title | What they have over Harry |
|---|---|---|---|---|---|
| 1 | Syed Ali Taqi H. | Pakistan | $15 | Graphic Designer \| Short-Form Video Editor \| Logo & Vector Design | Consultation flag on; no JSS; skills lean toward graphic design |
| 2 | Abraham G. | US | $5 | AI Video Creator \| UGC Ad \| AI Commercials \| Higgsfield \| Seedance 2.5 | Lower rate; AI/UGC keywords in title; US location |
| 3 | Md Antim A. | Bangladesh | $5 | Video Editor \| Motion Graphics, After Effects, Premiere Pro & DaVinci | Lower rate; tool names in title |
| 4 | Thinh L. | Vietnam | $15 | YouTube & Short-Form Video Editor \| AI Video & AI Image Creator | Same niche skills (Shorts, CapCut, TikTok, Reels, UGC, Podcast) plus AI wording |
| 5 | Aayush B. | India | $10 | Short-Form Video Editor \| Clipping Specialist | Same rate; short, focused title ("Clipping Specialist") |

The newcomer filter is **not strict**. Rows 6–11 and 17 had earnings or badges; for example, Julia P. is Top Rated Plus with $40K+. Harry did **not** appear in the top 125 of this search. Nigerian newcomers who did appear include Chizorba E. #42, Olujuwon O. #75, Serena N. #92 and Matthew Bamidele O. #98.

## Search 14: top 5 (newcomer filter + Nigeria)
All 25 rows on page 1 were Nigerian newcomers with no JSS and no earnings, so this is a like-for-like pool.

| Rank | Name | Rate | Title | What they have over Harry |
|---|---|---|---|---|
| 1 | Anuoluwapo O. | $5 | AI Video Creator \| UGC Ads \| Product Ad Videos \| Meta & TikTok | Consultation flag on; half his rate; AI/UGC/ad wording; 20 skills |
| 2 | Barakat O. | $3 | AI Video Creator \| AI UGC Ads \| E-Commerce, Meta Ads \| Seedance 2.5, | $3 rate; AI/UGC/e-commerce keywords |
| 3 | Chizorba E. | $10 | Video Editor \| Short-form video editor\| YouTube &Tiktok | Same rate, only 8 skills. Shows that filling every skill slot is not what lifts a profile; this suggests other factors, such as profile age, activity or matching on overview text, which are not visible here |
| 4 | Opeyemi H. | $5 | Short-Form Video Editor \| TikTok video, UGC, Youtube & Instagram Reels | Nearly the same title structure as Harry's, at half the rate |
| 5 | Serena N. | $8 | Short-Form Video Editor \| CapCut, Reels & TikTok | Slightly lower rate; tool name (CapCut) in title |

#7 Samson A. ($5, "Short-Form Video Editor | Podcast & Long-Form Clips for Reels/TikTok") covers almost exactly the same niche as Harry and ranks 80 places above him.

## Key findings
1. **Track record comes first in ranking.** In every unfiltered search and every Nigeria-only search, essentially every row in the scanned range had a JSS, earnings, or both. Most rows in the unfiltered searches also had a Top Rated or Top Rated Plus badge. A $0, no-JSS profile does not get into the top 125–225 for any keyword tested.
2. **Even tiny earnings beat zero.** In search 8, profiles with no JSS but small earnings ranked inside the top 225: Hao N. ($100+) at #68, Darxan S. ($300+) at #87, Vu Duc M. ($300+) at #188. In search 10, Ajudolu C. ($700+) ranked on page 1. **A first paid contract of any size is likely to change Harry's ranking more than any profile edit.** This is an inference from the observed pattern, not something Upwork has confirmed.
3. **Harry's only reachable search is newcomer + Nigeria, where he places #87.** No client is likely to stack those two filters, so in practice he gets no search visibility right now.
4. **In the newcomer pool, the profiles above him tend to have:**
   - the consultation flag turned on (Harry's is off);
   - a lower rate ($3–8 vs his $10);
   - AI, UGC or ad wording in the title ("AI Video Creator", "UGC Ads", "Meta & TikTok");
   - tool names in the title (CapCut, Seedance, Higgsfield).
5. **No boosted rows appeared in any of the 15 searches.** About 100 pages were scanned in total. Boosting was not displacing Harry anywhere in this sample.
6. **Expert-Vetted profiles are rare.** They appeared only in the "video editor" and "TikTok video editor" searches: Oleksii S., Ilia P., and Filippos T.

## Notes and caveats
- All data is from live searches on 2026-10-30. Upwork rankings change over time and can be personalised to the client account, so a different client may see a different order.
- Positions beyond the first occurrence of a duplicated row may be off by 1–2 places because of page overlap.
- Other Nigerian profiles seen ranking in the unfiltered searches all had a JSS or earnings. Examples: Anu F. ($50K+, Top Rated Plus), Ayomide O. ($50K+), Emmanuel E. ($20K+), Edmond O. ($100K+).
