# Upwork search ranking check: Harry S. (Roblox)

- **Target:** Harry S., Nigeria, profile_key `~01ec9b3903b16aa26b`, person_id `2019193251887559563`
- **Target row as search shows it:** $18/hr · no badge · no JSS · no earnings shown · no "offers consultation" · title "Roblox UI/UX Designer + Luau Scripter | Shops, HUDs & Battle Passes" · skills: Roblox Studio, Lua, Game UI/UX Design, Monetization … plus n8n, AI Automation, Claude, API Integration, Automated Workflow
- **Method:** `find_freelancers` action=search, org `2019193251887559564`, limit 25, offset 0→275 (top 300), read-only. Run on 2026-10-20.
- **Caveats:** Pages overlap by 1–3 rows (the same person sometimes appears at the end of one page and the start of the next), so "position" means the raw row index. "No earnings" means the API returned no `total_earnings` field, which some Top Rated/TR+ profiles also lack, so it is not always literally $0. **No boosted (paid) rows appeared in any of the ~1,000 rows seen.**

## Summary

| # | Search | Target position | Rows seen | Rows above target with no earnings shown |
|---|---|---|---|---|
| 1 | `query: "Roblox developer"` | **Not in top 300** | 300 (hasMore=true) | 38 of 300 had none |
| 2 | `query: "Roblox scripter"` | **#148** | 150 | 19 (18 unique) |
| 3 | `query: "Roblox game developer"` | **Not in top 300** | 300 (hasMore=true) | 46 of 300 had none |
| 4 | `skills: ["Roblox Studio"]` | **#147** | 150 | 37 |
| 5 | `query: "Roblox", country: "Nigeria"` | **#28** | 50 | 4 |
| 6 | `query: "Luau"` (bonus) | **#145** | 150 | 17 |

---

## 1. "Roblox developer": not found in top 300

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Haseeb A. | Pakistan | – | $4K+ | 100 | $20 | Unity Game Developer \| Roblox Developer \| Mobile Games \| AR/VR/XR |
| 2 | Uzair S. | Pakistan | Top Rated Plus | none shown | 100 | $30 | Roblox \| Roblox game developer \| Roblox Maps \| Roblox scripting |
| 3 | Ahmad I. | Pakistan | Top Rated | $60K+ | 100 | $25 | Unity & Unreal Game Developer \| Roblox \| Interactive 3D \| AR/VR/XR |
| 4 | Faiza T. | Pakistan | Top Rated | $4K+ | 100 | $10 | Roblox Scripter + Web developer |
| 5 | Petros P. | Greece | – | $100+ | – | $3 | Roblox developer |
| 6 | Odukoya M. | Nigeria | – | $1K+ | 100 | $10 | Roblox Game Developer \| Roblox Scripting \| Full game & Map Creation |
| 7 | John Matthew Joshua L. | Philippines | Top Rated | $3K+ | 100 | $10 | Senior Roblox Developer w/ 3D Modelling Experience |
| 8 | Simon M. | United States | – | $4K+ | 100 | $40 | Roblox and Lua scripter. Game Designer. |
| 9 | Hamza K. | Pakistan | – | $6K+ | 90 | $15 | Game Producer / UEFN / Roblox / Game designer / Game QA |
| 10 | Serhii S. | Ukraine | Top Rated | none shown | 100 | $35 | Game Development & Designer \| Roblox \| Godot \| Unreal Engine |

Notes:
- Relevance drops quickly. By row ~60, off-topic profiles appear: UI/UX designers, MERN/Laravel developers, n8n automation, WordPress, Shopify, GoHighLevel.
- Below row ~200, low-earning Roblox specialists come back in roughly descending earnings order: Jessi M I., Daniel I. (Nigeria, $700+, #212), Ajayi B. (Nigeria, $40+, #215), Hafiz Arslan A., Norman C., Reynell B. (#250s).
- Zero-earnings Roblox profiles near the cutoff: Adebayo J. (Nigeria, #287) and Mehul K. ("Roblox & Luau Specialist", #298). The target is below them.

## 2. "Roblox scripter": #148

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Faiza T. | Pakistan | Top Rated | $4K+ | 100 | $10 | Roblox Scripter + Web developer |
| 2 | Simon M. | United States | – | $4K+ | 100 | $40 | Roblox and Lua scripter. Game Designer. |
| 3 | Lukasz K. | Poland | Top Rated Plus | $400K+ | 100 | $50 | Programming Artist |
| 4 | Hamza K. | Pakistan | – | $6K+ | 90 | $15 | Game Producer / UEFN / Roblox / Game designer / Game QA |
| 5 | Francis A. | Nigeria | – | $200+ | 100 | $10 | Roblox Developer \| Full Game Builds \| Scripting, UI & Monetization |
| 6 | Manish S. | India | Top Rated | $200K+ | 94 | $40 | Game Developer \| Your Vision, My Game Development Expertise |
| 7 | John Matthew Joshua L. | Philippines | Top Rated | $3K+ | 100 | $10 | Senior Roblox Developer w/ 3D Modelling Experience |
| 8 | Yongcong W. | China | Top Rated | $30K+ | 100 | $40 | Senior Game Developer \|\| 15 years of experience |
| 9 | Rakesh K. | India | Top Rated Plus | $200K+ | 100 | $25 | Unity Game Developer \| Multiplayer & Mobile Games \| Unreal Engine \| VR |
| 10 | Jahongir E. | Uzbekistan | – | $100K+ | 83 | $40 | Unreal Engine \| Game Developer \| UEFN |

Notes:
- "scripter" also matches scriptwriters, so many YouTube, anime and fiction scriptwriters fill rows 26–150.
- Target neighbours: #146 Opeyemi L. (Nigeria, $2K+), #147 Jay V. ($10K+), #149 Antonio Roberto W. ($600+).
- Zero-earnings Roblox profiles above the target include Marcel B. (#133, "Roblox 3D Artist and Lua Scripter") and Talal A. (#141, "Roblox Game Developer").

## 3. "Roblox game developer": not found in top 300

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Odukoya M. | Nigeria | – | $1K+ | 100 | $10 | Roblox Game Developer \| Roblox Scripting \| Full game & Map Creation |
| 2 | Rumin A. | Thailand | – | $3K+ | – | $22.22 | Roblox Game Developer |
| 3 | Uzair S. | Pakistan | Top Rated Plus | none shown | 100 | $30 | Roblox \| Roblox game developer \| Roblox Maps \| Roblox scripting |
| 4 | Ermias S. | United States | – | none shown | 100 | $30 | Game Developer & Designer \| Roblox \| Godot \| AI \| React \| RAG |
| 5 | Abdulrazaq S. | Nigeria | Top Rated | $10K+ | 100 | $19.85 | Godot & Roblox Game Developer \| GDscript \| Lua \| Multiplayer Systems |
| 6 | Faiza T. | Pakistan | Top Rated | $4K+ | 100 | $10 | Roblox Scripter + Web developer |
| 7 | Petros P. | Greece | – | $100+ | – | $3 | Roblox developer |
| 8 | Oma E. | Nigeria | Top Rated | $5K+ | 100 | $17 | Roblox Game Developer \| Interactive Maps & 3D Builder |
| 9 | John Matthew Joshua L. | Philippines | Top Rated | $3K+ | 100 | $10 | Senior Roblox Developer w/ 3D Modelling Experience |
| 10 | Simon M. | United States | – | $4K+ | 100 | $40 | Roblox and Lua scripter. Game Designer. |

Notes:
- The top 3 have "Roblox Game Developer" almost word for word in their titles.
- Rows ~60–220 are mostly generic Unity/Unreal developers with high earnings.
- Zero- or near-zero-earnings Roblox specialists that still made the top 300:
  - Zeeshan S. ($5+, #230)
  - Talal A. (none shown, #257)
  - Mubarak O. (Nigeria, none shown, #274)
  - Ahmed S. (none shown, #281)
  - Adebayo J. (Nigeria, none shown, #293)

## 4. skills = ["Roblox Studio"]: #147

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Ahmad I. | Pakistan | Top Rated | $60K+ | 100 | $25 | Unity & Unreal Game Developer \| Roblox \| Interactive 3D \| AR/VR/XR |
| 2 | Simon M. | United States | – | $4K+ | 100 | $40 | Roblox and Lua scripter. Game Designer. |
| 3 | Hamza K. | Pakistan | – | $6K+ | 90 | $15 | Game Producer / UEFN / Roblox / Game designer / Game QA |
| 4 | Fareed T. | Pakistan | Top Rated | $3K+ | 100 | $25 | Unity AR/VR & Roblox Developer \| Meta Quest, WebAR, XR Experiences |
| 5 | Ivo Febrian P. | Indonesia | – | none shown | 100 | $15 | 3D Character Modeler & Rigger \| 3D Printing \| 3D Game-Ready |
| 6 | Arshad Kamal S. | India | Top Rated | $200K+ | 100 | $65 | iGaming \| Casino \| Sportsbook \| Poker \| Sweepstakes \| Prediction |
| 7 | Husayn P. | Indonesia | Top Rated | $20K+ | 95 | $15 | 3D Modeling Artist \| Sculpt \| 3D Character \| 3D NFT Art \| 3D Fashion |
| 8 | Serhii S. | Ukraine | Top Rated | none shown | 100 | $35 | Game Development & Designer \| Roblox \| Godot \| Unreal Engine |
| 9 | Haseeb A. | Pakistan | – | $4K+ | 100 | $20 | Unity Game Developer \| Roblox Developer \| Mobile Games \| AR/VR/XR |
| 10 | Paul Anthony D. | United States | Top Rated | $10K+ | 100 | $29 | Creative Designer for Games, Products, and Marketing |

Notes:
- Every row has the skill, so the order looks like a general quality and history score with no keyword relevance. Customer-service reps, VAs and video editors that merely list Roblox Studio rank in the 50s–70s.
- Rows 100–150 are the zero- or low-earnings tier, mostly newer Nigerian and other Roblox devs.
- Profiles with no earnings shown that rank just above the target:
  - Mary-Ann I. (#119)
  - Friday O. (#121)
  - Babs O. (#126)
  - Somtochukwu C. (#133, "Luau Scripter | Systems, UI & Monetization", nearly the same positioning as the target)
  - Mubarak O. (#146)

## 5. "Roblox" + country Nigeria: #28

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Francis A. | Nigeria | – | $200+ | 100 | $10 | Roblox Developer \| Full Game Builds \| Scripting, UI & Monetization |
| 2 | Odukoya M. | Nigeria | – | $1K+ | 100 | $10 | Roblox Game Developer \| Roblox Scripting \| Full game & Map Creation |
| 3 | Oma E. | Nigeria | Top Rated | $5K+ | 100 | $17 | Roblox Game Developer \| Interactive Maps & 3D Builder |
| 4 | Moyosore J. | Nigeria | – | $6+ | – | $10 | Roblox Game Developer \| Roblox Studio, Lua \| Bug Fixes & Game Design |
| 5 | Opeyemi A. | Nigeria | – | $200+ | – | $5 | Full-Cycle Roblox Game Creator \| From Blocks to Playable Worlds |
| 6 | Inioluwa A. | Nigeria | – | none shown | 100 | $10 | Roblox Game Developer \| Luau Scripting, Multiplayer, Tycoon & Obby |
| 7 | Abdulrazaq S. | Nigeria | Top Rated | $10K+ | 100 | $19.85 | Godot & Roblox Game Developer \| GDscript \| Lua \| Multiplayer Systems |
| 8 | Emmanuel A. | Nigeria | – | $9+ | – | $10 | Roblox Developer \| Lua Scripting, UI & Gameplay Systems |
| 9 | Adam A. | Nigeria | Top Rated | $20K+ | 100 | $30 | 3D Artist\| 3D Modeling \| 3D Product \| 3D Animation, Game & 3D Printing |
| 10 | Daniel I. | Nigeria | – | $700+ | 100 | $10.22 | Roblox Game Developer \| Tycoon Games, Scripting & Full Studio Builds |

Notes:
- Off-topic Nigerian profiles outrank the target:
  - Joel A G. (VA, $100K+, #12)
  - Daniels K. (brand designer, $90K+, #13)
  - Akinola E. (AI video, #25)
  - Prosperity A. (n8n automation, #27)
- Directly above the target: #26 Adebayo J. (Roblox, no earnings) and #27 Prosperity A. (n8n/AI automation, Top Rated, $3K+).
- Below the target are about 10 more Nigerian Roblox devs with no earnings shown: Mubarak O., Caleb A., Enoch A., Mary-Ann I., Agboola A., Lucky S., Benjamin I., Blessing A., Teslim O., Friday O.

## 6. "Luau" (bonus): #145

Top 10:

| # | Name | Country | Badge | Earnings | JSS | Rate | Title |
|---|---|---|---|---|---|---|---|
| 1 | Inioluwa A. | Nigeria | – | none shown | 100 | $10 | Roblox Game Developer \| Luau Scripting, Multiplayer, Tycoon & Obby |
| 2 | Julie A. | Finland | Top Rated Plus | $10K+ | 100 | $10 | Reliable Virtual Assistant-Boosting Productivity and Efficiency |
| 3 | Rumin A. | Thailand | – | $3K+ | – | $22.22 | Roblox Game Developer |
| 4 | Mina T. | Japan | – | $30+ | – | $5 | Japanese Virtual Assistant \| Administrative Support \| IT Background |
| 5 | Shivam S. | India | Top Rated | $200K+ | 93 | $25 | Roblox Game Developer \| Lua/Luau \| Simulators, Combat, Gacha & Monetiz |
| 6 | David L. | Finland | – | $4K+ | 100 | $15 | AI-development, Translations, Recordings, Transcription and UGC |
| 7 | Manish G. | India | Top Rated Plus, Expert-Vetted | $3M+ | 100 | $40 | Expert-Vetted Architect \| Enterprise AI, Web3 & Game Development |
| 8 | Odukoya M. | Nigeria | – | $1K+ | 100 | $10 | Roblox Game Developer \| Roblox Scripting \| Full game & Map Creation |
| 9 | Abdulrazaq S. | Nigeria | Top Rated | $10K+ | 100 | $19.85 | Godot & Roblox Game Developer \| GDscript \| Lua \| Multiplayer Systems |
| 10 | Felix K. | Uganda | Top Rated | $2K+ | 100 | $8 | Customer Support Specialist \| CRM \| Zendesk \| Data Analysis & Scraping |

Notes:
- The query is matched loosely. More than half the results are Finnish translators and Japanese or Ugandan VAs, probably from loose language-term matching.
- Inioluwa A. is #1 with "Luau Scripting" in the title, even though they have no earnings shown. The target also has "Luau" in the title but ranks #145.
- One difference: Inioluwa's row carries a JSS of 100, while the target has no JSS.

---

## What the top-ranked profiles have in common

1. **The title repeats the exact query phrase.** The winners lead with "Roblox Game Developer", "Roblox Developer" or "Roblox Scripter", often more than once (for example, "Roblox | Roblox game developer | … | Roblox scripting"). The target's title starts with "Roblox UI/UX Designer" and never says "Developer" or "Game Developer". It did not appear at all in the two developer queries.
2. **Some delivery history.** About 80% of the top 10s show earnings (usually $1K–$60K) and JSS 100. The few top-10 rows with nothing shown are Top Rated or TR+ (Uzair S., Serhii S.), or have a JSS (Inioluwa A.). The target has no earnings, no JSS and no badge.
3. **Focused skills.** The top Roblox specialists list Roblox Studio and Lua plus game skills only. The target's skill list ends with n8n, AI Automation, Claude, API Integration and Automated Workflow. That probably weakens its relevance to Roblox searches, and in the Nigeria search it placed the target right next to an n8n automation profile.
4. **Badges and earnings decide the order within the relevant set.** Among relevant profiles, Top Rated, TR+ or high earnings beat relevance. Once those run out, ranking falls back to roughly descending earnings, and zero-earnings profiles sit at the bottom.
5. **"Offers consultation" is common among the top Nigerian rows** (Francis A., Odukoya M., Oma E., Abdulrazaq S.). The target does not have this flag.
6. **No paid boosts appeared in any search**, so none of these positions were bought.
