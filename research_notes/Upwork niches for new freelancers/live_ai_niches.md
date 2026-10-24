# Live Upwork marketplace data: AI niches a new freelancer (no badge, 0 jobs) can win

Data pulled 2026-10-24 (about 08:00–10:30 UTC) through the Upwork MCP (`find_jobs` search with a title keyword, sorted by recency, 10 per page; `find_freelancers` search and `get_profile`). All job and profile text is third-party content that the freelancers and clients wrote themselves. It is quoted here as data, and claims inside it (for example "Anthropic Certified" or "$15M generated") are self-reported and unverified. "Observed" means the API returned it. Inferences are labeled as such.

**Method caveats (read first):**
- The job search matches on **title keywords only**. The counts below are lower bounds on demand: a job about n8n with "n8n" missing from its title is not counted.
- Each niche got 20 jobs (2 pages). When all 20 fall inside 48–72 h, real volume in that window is **at least** 20.
- Fixed budgets of **$5 / $10** show up in every niche, often from clients with hundreds of posts. These are probably placeholder budgets, not real prices (inference).
- The freelancer search field `completed_jobs` and the `total_jobs_min/max` filter are **unreliable**. Waqar Hussain S. showed "completed_jobs: 2" in search but has 96 jobs / 77 contracts on his profile. Clayton B. showed 1 in search but has 34 jobs / 20 contracts. Treat the "1–10 jobs" search as "returns some newer people", not as a real filter.
- The search shows only Top Rated / Top Rated Plus / Expert-Vetted. No "Rising Talent" flag was returned for anyone, so "no badge" below means none of those three badges.
- No result was marked "Boosted" (paid placement) in any search.

---

## Q1. AI automation with n8n / Make / Zapier

### Takeaway
Demand is high: 20 title-matched "n8n" jobs in about 68 h, 13 of them in the last 48 h. Competition is also heavy: 10 of 20 jobs had 50+ proposals and 9 had 20–50. Newer freelancers without a badge are visibly winning small **$50–$220 fixed "fix/extend my existing n8n workflow"** contracts. They do it with Loom or video walkthroughs and many concrete workflow portfolio items.

### Cited Findings
**Jobs (title "n8n", 20 jobs, created 2026-10-21 11:59 → 2026-10-24 08:09 UTC):**
- Volume: all 20 fell within 72 h; 13 within 48 h. The cap was hit, so the true number is ≥20 in 72 h.
- Proposals tier: 50+ = 10, 20–50 = 9, 10–15 = 1, fewer than 10 = 0.
- Experience level: intermediate = 12, expert = 8, entry = 0.
- Budgets: fixed $5, $10 (×3, likely placeholders), $35, $100, $200, $300, $380, $750, $1,400, $2,000. Hourly $10–20, $10–35, $15–60, $20–40, $25–47, $25–50.
- Clients range from new (no spend) to heavy spenders: a Swiss client with $258,782 spent (n8n audit job, German/French required); a US client with $48,366 spent, 4.99★… (support email workflow, $380).
- Example jobs:
  - "n8n AI Automation Specialist – Customer Support Email Workflow", $380 fixed, intermediate, 50+ proposals, client $48K spent, 5.0★ — [job](https://www.upwork.com/jobs/~022113396734814561387)
  - "n8n Developer for Vapi Integration" (Vapi voice-agent calls → Google Sheets plus a daily email), $1,400 fixed, intermediate, 20–50 proposals — [job](https://www.upwork.com/jobs/~022113195058792281862)
  - "n8n Developer Needed for Simple API Automation" (webhook → validate JSON → external API), $100 fixed, intermediate, 50+, client 5★ $1,565 spent — [job](https://www.upwork.com/jobs/~022112891781956892368)
  - Others: "Polish-speaking developer for a voicebot project (n8n, REST API)", $2,000 — [job](https://www.upwork.com/jobs/~022112909108138993762); "Freelance n8n Automation Specialist – Workflow Audit & Optimization – with German or French", $15–60/hr — [job](https://www.upwork.com/jobs/~022113173131818219270)

**Freelancer search ("n8n AI automation", 25 results):** 20/25 had Top Rated or TR+. No badge: Simon K. (ranked #1), Abdul R., Anamta S., Masud S., David A., Aleksandar D. — [search run 2026-10-24]

**Profiles:**
- **Simon K.**: Denmark, $15/hr, **no badge**, no JSS, **$60+ earned, 1 job**. He still ranked **#1** in the "n8n AI automation" search. Title: "AI Automation Specialist | n8n Workflow Automation | AI Agents". His only contract was "Danish (Denmark) NATIVE SPEAKER – AI Voice Agent Evaluation Project", $60 fixed, Oct 3–5, 2026. Review (5★): "Good freelancer, committed to the quality." His overview offers a personalized Loom video for every invite. It lists an ex-LEGO/Grundfos IT project-manager background and PMP certification. Portfolio: 5 items, each titled "WATCH THIS: … Full Loom Breakdown!" (RAG chatbot, support-email workflow, invoice extraction, lead intake with HubSpot plus error handling) — [profile](https://www.upwork.com/freelancers/~01556cbb11cb3d3585)
- **Masud S.**: Pakistan, $35/hr, **no badge**, JSS 90, $3K+, 10 jobs (9 feedback). Recent contracts: "Fix & Improve n8n AI WhatsApp Workflow", $60, Oct 9, 2026; "Add Lead Tracking and Follow-Up Automation to an Existing n8n WhatsApp Bot", $50, Oct 12, 2026; "AI Automation Developer (n8n + Vapi + Botpress) — Build Automations & Record Training Videos", $217, ended Oct 4, 2026; active "No-Code WhatsApp AI Assistant for ISP", $150, started Oct 15, 2026. Most recent review (Oct 12, 2026): "knows n8n inside and out… fixed the workflow issues". His overview is built on outcomes ("Took 40 emails a day down to 3") and covers the WhatsApp Business API setup "most freelancers won't touch". 16 portfolio items with stacks named, plus a consultation offered from $10 — [profile](https://www.upwork.com/freelancers/~01e6cb8213e695dfa0)
- **Abdul R.**: Pakistan, $20/hr, **no badge**, JSS 100, $1K+, 5 jobs. Most recent: "360 AI video from floor plan provided", $220, ended Oct 21, 2026 ("Will work with Abdul again! Recommended!"). Before that: "AI Automation Expert for n8n & AI Agent Workflow", $100 hourly (5 h), ended Sep 30, 2026, and "AI Automation Expert Needed for n8n, OpenAI & API Integration", $100, Sep 16, 2026 ("quickly fixed our AI agent workflow, API integration, and CRM automation issues"). His overview stresses "production-ready" work with retries and error handling, and ERP/CRM integrations (NetSuite/Salesforce). 4 infographic-style portfolio images — [profile](https://www.upwork.com/freelancers/~01f63e4e528082ce4b)
- **Clayton B.**: USA (MI), $56.23/hr, **Top Rated**, $20K+, 34 jobs / 20 contracts. Earliest visible contracts are from Feb 2026, so he went from new to Top Rated in about 8 months. Large hourly contracts: "Attio Automation & Integration Specialist", $5,775 (77 h, since Aug 6, 2026), and "Ai Automations", $5,602.91 (73.5 h, since Jul 14, 2026). Most recent: "Hourly AI Dev Support", Oct 11, 2026. Most recent review (Sep 17, 2026, "I am looking for a Claude magician", $92): "clearly knows his stuff in the Claude world." His overview leads with named client outcomes ("Next Round Capital… 20+ hrs/wk saved") and says "Anthropic Claude Certified Architect" (self-reported) — [profile](https://www.upwork.com/freelancers/~0139d225b3c2cb4987)

### Inferences
- Wedge for newcomers (from the Masud and Abdul histories): **fixing or extending an existing workflow** (n8n plus WhatsApp, CRM, OpenAI) for $50–$220. These are short contracts closed in 1–3 days, and the quick 5★ reviews compound.
- Simon K. ranking #1 with $60 earned suggests Upwork search weighs recent activity, profile completeness, a niche-exact title and skills, and video/Loom portfolio items heavily, not just earnings. It is one data point, not a proven ranking rule.
- Language and location (Danish, Polish, German/French) is a moat: several n8n and voice jobs require a specific language.
- US-based Clayton gets $56/hr and large hourly contracts. Rate ceilings appear tied to location, named client results and a CRM specialty (Attio).

### Gaps
- Win rates or proposal-to-hire ratios can't be observed. Contract dates show *when* someone won, not how many proposals it took.
- No profile carried a "Rising Talent" flag, so that badge's effect can't be assessed.

---

## Q2. AI agents & chatbots (including voice agents)

### Takeaway
This is the **highest-volume niche**: 20 "AI agent" title jobs in about 22 h. It is also the **most badge-saturated**. Of the 25 search results for both "AI voice agent chatbot" and "Retell AI Vapi voice agent", 22–25 had Top Rated or TR+, and only 3 of the voice results had no badge. Most jobs draw 50+ proposals. The openings for a newcomer are freshly posted jobs (some sat at "Fewer than 5" proposals) and small "fix my voice agent" tasks.

### Cited Findings
**Jobs (title "AI agent", 20 jobs, created 2026-10-23 12:14 → 2026-10-24 10:12 UTC, about 22 h):**
- Volume: ≥20 in 24 h (cap hit).
- Proposals tier: 50+ = 13, 20–50 = 3, 10–15 = 2, 5–10 = 1, fewer than 5 = 1.
- Experience: expert = 10, intermediate = 9, entry = 1.
- Budgets: fixed $5, $10 (×2), $100 (×2), $250 (×3), $1,200. Hourly $10–30, $10–100, $15–55, $20–40, $20–45, $20–80, $25–50, $50–100.
- Clients include heavy spenders: France $323K spent (BigQuery data architect for an AI-agent stack, $50–100/hr); Ukraine $246K spent, 546 jobs posted (HR AI agent automation); US $130,956 spent (AI agents for business tasks, $15–55/hr).
- Example jobs:
  - "Voice AI Developer Needed for Retell AI & Vapi (Appointment Booking Agents)", $250 fixed, intermediate, **Fewer than 5 proposals**, India client (the same post appears twice) — [job](https://www.upwork.com/jobs/~022113936646831842411)
  - "Looking for an AI voice agent expert" (edit a Retell prompt so it sounds human), $10–100/hr, expert, 50+, US client 4.96★ — [job](https://www.upwork.com/jobs/~022113708431924024210)
  - "AI Career Coach Agent for Resume Building and Career Planning", $1,200 fixed, expert, 50+, German client $56,900 spent, 5★ — [job](https://www.upwork.com/jobs/~022113624544028802041)
  - Also: "AI Agent Development" (first-line customer-support agent), Ukraine, 50+ — [job](https://www.upwork.com/jobs/~022113660612181754679)

**Freelancer searches:**
- "AI voice agent chatbot": 25/25 had TR or TR+ (default sort). The "1–10 jobs" run: 25/25 badged.
- "Retell AI Vapi voice agent" (1–5 jobs filter): 22/25 badged. No badge: Nauman N. ($40K+), Ravi S. ($50K+), Masud S. ($3K+).

**Profiles:**
- **Syed Muhammad Jarrar U.**: Pakistan, $35/hr, **Top Rated**, $5K+, 5 jobs. First visible contract: "AI agent for lead generation", $650 fixed, Mar 25 – May 13, 2026. Then "Paid Consultation — LangGraph Multi-Agent Architecture Review", $70.83, May 2026, and "Ai Assistant Developer", hourly $3,920 (98 h, since Jun 4, 2026). Active "AI Consultant for US Venture Fund" since Aug 13, 2026. Review (Jun 2026): "Great upworker, would hire again." He reached Top Rated with only 5 jobs in about 7 months. His overview leads with credentials (Georgia Tech MS CS, Afiniti lead AI engineer, AT&T/Verizon) and has a very long keyword list. 8 portfolio items (voice receptionist, LangGraph multi-agent, RAG support bot) — [profile](https://www.upwork.com/freelancers/~01b22e16125e1a993b)
- **Muhammad Umair A.**: Pakistan, $25/hr, **Top Rated**, $7K+, 9 jobs. Biggest contract: "Retell AI Calling Agent Usage & Projection", hourly $3,058 (122 h, since Apr 28, 2026). Small fix: "AI Engineer for Voice Agent Fixes", **$15**, Aug 28–30, 2026 ("did an excellent job resolving issues with our AI Voice Agents"). The portfolio has Loom walkthroughs of voice agents (outbound medical-clinic caller, inbound clinic receptionist, GHL calling agent). One past 3.6★ review (2025) — [profile](https://www.upwork.com/freelancers/~015453daad5d2d4f11)
- **Waqar Hussain S.**: Canada, $15/hr, **Top Rated**, JSS 96, **96 jobs / 77 contracts**. Not a newcomer: search showed "2 completed jobs", which confirms that field is unreliable. Recent contracts: "n8n Specialist — Finish & Launch Instagram Reels Auto-Posting Workflow", Sep 17, 2026; "AI Voice Agent Developer (Vapi / Twilio / GoHighLevel)", Sep 8, 2026. He has a consult-first positioning and is low-priced at $15/hr despite his volume — [profile](https://www.upwork.com/freelancers/~012582252a80f3f140)
- Masud S. (Q1) also appears in the voice-agent results without a badge. His portfolio shows a Vapi + n8n dental-clinic voice agent and a hotel phone receptionist — [profile](https://www.upwork.com/freelancers/~01e6cb8213e695dfa0)

### Inferences
- The rankings are dominated by badged people. A new profile will not surface in search, so wins must come from **proposals sent within minutes of posting**. The "Fewer than 5" and "5–10" tiers appeared only on jobs posted less than 30 minutes earlier.
- Voice agents (Retell, Vapi, ElevenLabs, Twilio) have distinct sub-demand: prompt and "make it sound human" fixes, plus logging calls to Sheets or a CRM via n8n. That overlaps with Q1, so one n8n + voice profile can cover both.
- Jarrar's path suggests that strong verifiable credentials plus a first mid-size fixed job ($650) and a paid consultation can produce Top Rated within about 6 months.

### Gaps
- No no-badge voice-agent specialist profile with fewer than 5 jobs was found to fetch. All the very-new voice profiles were already badged.
- How long freshly posted jobs keep low proposal counts was not measured over time.

---

## Q3. Fixing / finishing "vibe-coded" apps (Lovable, Bolt, Cursor, Bubble, Claude Code)

### Takeaway
Title-matched volume is **much lower**: "Lovable" had 10 jobs over about 6.4 days (5 in the last 48 h), and "vibe coded" had 10 over about 3 weeks (1 in 72 h). Most are labeled expert. The client need is clear, though: migrate off Lovable, finish an app, fix auth, publish to the app stores. Profiles without a badge do rank here (5 of the first 25). Akram S. shows the newcomer path: a first $20 Lovable/Bolt/Replit job led to $6K+ and repeat clients.

### Cited Findings
**Jobs (title "Lovable", 10 jobs, 2026-10-17 10:23 → 2026-10-23 20:32 UTC):**
- 5 in 48 h; 5 in 72 h. Proposals: 50+ = 5, 20–50 = 3, 15–20 = 1, 10–15 = 1. Experience: expert = 7, entry = 2, intermediate = 1.
- Budgets: $2,500 fixed (Lovable e-learning app → Android/iOS with in-app purchases), $5 fixed, $10 fixed, $5–15/hr ("$20 per site" Lovable SEO sites), $8–25/hr; several hourly jobs had no rate given.
- Examples:
  - "App finishing and move from lovable.dev" (guest-management app, move to a generic stack), hourly, expert, 50+, UK client — [job](https://www.upwork.com/jobs/~022113730419946181522)
  - "Quick fix for a small Lovable app: login and signup errors" (Lovable + Supabase sessions), $5 fixed, **entry level**, 20–50 — [job](https://www.upwork.com/jobs/~022112721057566551464)
  - "Publish our e-learning platform (built on Lovable) as Android & iOS apps with in-app purchases", $2,500 fixed, expert, 50+ — [job](https://www.upwork.com/jobs/~022113293318374449462)
  - "Quick Fix on Our AI-Built App (Lovable/Bubble) — Small Task", $10 fixed, entry, 15–20, client with 1,218 jobs posted, 4.99★ — [job](https://www.upwork.com/jobs/~022112555266692472857)

**Jobs (title "vibe coded", 10 jobs, 2026-09-30 → 2026-10-22):** 1 in 72 h. Examples: "48–72 Hour Vibe-Coded Build: Stripe + Plaid + Realtime Sales Dashboard", $25–47/hr, 50+ — [job](https://www.upwork.com/jobs/~022112582613607509416); "Vibe coded site, need a developer to solidify the code.", US client with $49,877 spent — [job](https://www.upwork.com/jobs/~022110148166343387106); "Looking for vibe coding up scaler…", $3–40/hr — [job](https://www.upwork.com/jobs/~022112322917115320911)

**Freelancer search ("Lovable Supabase vibe coding"):** 5 of the first 25 had no badge: Gaurav K. ($200K+), Akram S. ($6K+), abbas m. ($2K+), Dhruvit K. ($2K+), Phu H. ($10K+). Rescue-style titles: "Vibe-Coded App Rescue & AI SaaS Developer" (Ehsanullah Q., TR), "Next.js + Supabase Developer for App Audit & Secure Launch" (Christian C., TR), "Lovable/Replit Rescue" (Anton M., TR+).

**Profiles:**
- **Akram S.**: Uganda, $18/hr, **no badge**, JSS 100, $6K+, 10 jobs. Path:
  - First: "Full Stack Developer for Software Management (Lovable/Bolt/Replit)", $20, Jun 2025 ("Great to work with!").
  - Then "Lovable generated platform-nocode", $544, Aug–Oct 2025 ("built the best platform I could have ever dreamed of").
  - "Build Lovable Assessment", hourly $2,230.83 (166 h), Mar–Aug 21, 2026 (long 5★ review: "scope… became much larger… incredibly flexible").
  - Most recent: active "AIMESAYS Phase-One Read-Only Recoverability Assessment", $400, since Sep 16, 2026.
  - One 1★ review on an off-niche "B2B Cold Caller" job, $50, Mar 2026.
  - His overview opens: "Most of my clients now arrive with 50–70% of an app already built using Claude Code, Replit, Lovable or Bolt". It emphasizes security/RLS hardening, moving off Lovable Cloud, HIPAA, and "I start read-only, change nothing without your approval". 13 portfolio items of named live apps (EHR, healthcare chat) — [profile](https://www.upwork.com/freelancers/~0192ebb2a3f91f9436)
- **Dhruvit K.**: India, $12/hr, **no badge**, JSS 100 (self-stated), $2K+, 9 jobs. Title: "Fix Lovable, Bolt & Vibe-Coded Apps | Next.js + Supabase Developer". **None of his visible contracts are vibe-code fixes**: he repositioned onto the niche. Most recent contract: "AI/LLM Engineer Needed to Improve Accuracy of Existing AML Enforcement Chatbot", $500, ended Aug 26, 2026 (5★ long review). Earlier contracts were $5–$9 tiny fixed jobs in 2023 used to start his profile. 15 portfolio items and a $10 consultation — [profile](https://www.upwork.com/freelancers/~01366a28d07bbe5980)

### Inferences
- Demand is real but thinner than the title counts suggest, because many rescue jobs say "React/Supabase developer" without "Lovable" in the title (unmeasured). Budgets are bimodal: $5–10 "quick fix" jobs or $2,500 builds.
- The winning positioning is **trust and safety**: read-only start, client keeps ownership, security audit, migration with tested backups. It is not "I can vibe-code too".
- Newcomers can take entry-level "quick fix" jobs (auth, domains, deploy). It is a smaller pool and needs real React/Supabase skill, which raises the bar compared with Q1.

### Gaps
- No search on "Bolt", "Cursor", "Bubble" or "Replit" titles was run (call budget). Volume for those tools is unknown.
- Only 2 profiles fetched for this niche (rate-limit errors cost calls).

---

## Q4. AI UGC video ads & AI video generation

### Takeaway
This looks like the **most newcomer-friendly niche observed**. There were 20 "AI UGC" title jobs in about 48 h (17 in the last 48 h). Competition is **notably lower**: only 2/20 jobs had 50+ proposals, and 11/20 had 10–20. Many of the top-25 ranked freelancers had **no badge**, including people under $1K earned. Several brand-new 2026 profiles were winning repeatedly through $10–$20 trial ads.

### Cited Findings
**Jobs (title "AI UGC", 20 jobs, 2026-10-22 05:37 → 2026-10-24 05:47 UTC):**
- Volume: 17 within 48 h; ≥20 within 72 h.
- Proposals: 10–15 = 6, 15–20 = 5, 20–50 = 7, 50+ = 2.
- Experience: intermediate = 10, expert = 9, entry = 1.
- Budgets: fixed $5 (×2), $10 (×4), $20, $50, $150, $400, **$2,200/month + bonuses** (Canadian skincare). Hourly $5–15, $15–30, $20–25, $20–50, $25–50.
- Clients: UK client with **$1,003,987 spent**, 806 jobs posted (AI UGC creator, $5–15/hr, ongoing per-video); 8-figure DTC brand (Belgium, senior editor, $25–50/hr); DTC brand that "hit $100K days on Meta" ($15–30/hr retainer).
- Examples:
  - "AI UGC Video Editor & Creative Strategist for Skincare Brand | $2,200/Month + Uncapped Bonuses", expert, 20–50 — [job](https://www.upwork.com/jobs/~022113832674250957931)
  - "AI UGC video creator" (scripts → realistic UGC for Meta ad tests, ongoing per video), $5–15/hr, 50+, client $1M+ spent — [job](https://www.upwork.com/jobs/~022113559683734676587)
  - "AI UGC Video Creator for Luxury Car Ads", $10 fixed, intermediate, 15–20 — [job](https://www.upwork.com/jobs/~022113160745436899267)
  - Also: "AI UGC Video Editor for Meta Ads, DTC Brand Done $100K Days (Retainer + Bonuses)", 15–20 proposals — [job](https://www.upwork.com/jobs/~022113142692022401704)
- Tools named in posts and profiles: Higgsfield, Seedance 2.0/2.5, Kling, Veo 3, Sora 2, HeyGen, ElevenLabs, CapCut.

**Freelancer search ("AI UGC video ads"):**
- Default sort: **at least 9 of 25 had no badge**: Ahmed E. (Sweden, $9K+), Arham M. ($10K+), Christian Mark M. ($4K+), Boluwatife D. (**$100+**), Sarita R. ($20K+), Ryl D. ($2K+), Varnika C. ($3K+), plus others in the second run: Muhammad J. (Indonesia, $900+, $5/hr) and Amna S. ($800+, $8/hr).
- Several ranked profiles have 2026-era person IDs (Boluwatife D., Christian Mark M., Ahmed E., Naima S., Liubov K.).

**Profiles:**
- **Boluwatife D.**: Poland, $12.25/hr, **no badge**, JSS 100, **$100+ earned, 9 jobs, 7 feedback**. Contracts (all Sep–Oct 2026): "AI Video Creator & Editor for Short-Form Ad", $10, Sep 28–29; "AI UGC Video Creator – E-Commerce Ads (Meta / TikTok / Reels)", $10, Oct 2–4; "AI Video Creator for E-commerce Ads | UGC, B-Roll & DTC Creatives", $15, Oct 8–9; "Kling AI video creator…", $10 (4★), Oct 11–12; "15s AI video ad", hourly $87.10, Oct 13–14. Active: "facebook" (since Oct 11) and "30-second YouTube ad for moving company" (since **Oct 22, 2026**). Review (Oct 9): "Exceptional AI video creator!… voiceovers, movement, and captions looked completely natural." Overview hook: "DO YOUR AI UGC VIDEOS ADS LOOK GOOD UNTIL SOMEONE MOVES OR SPEAKS". **90 portfolio items**, heavily keyword-stuffed (tool names repeated in titles and descriptions). A video consultation is offered from $30 — [profile](https://www.upwork.com/freelancers/~014808e5e56e1b36f6)
- **Christian Mark M.**: Philippines, $12/hr, **no badge**, $4K+, 10 jobs. Profile created around Mar 2026. Biggest contract: "AI Video Creator: Higgsfield, Kling, Veo, etc.", **hourly $2,880 (360 h, since Aug 12, 2026)**, active. Also "AI UGC video creator", $680 fixed, since Oct 2, 2026, and "Direct Response Video Editor for Beauty Ads", $20, since Oct 20, 2026. Most recent review (Oct 12, 2026, $50): "Great communication and questions. He is a fine editor." One **2★** review (May 2026) on an off-niche Etsy VA job. His overview is only 2 sentences ("6 years META ADS and 3 years AI UGC VIDEO EDITING"); his 20 portfolio items are mostly "AI UGC SAMPLE" videos plus a "META ADS PROOF OF SPENT" item — [profile](https://www.upwork.com/freelancers/~017df9074867594a01)

### Inferences
- The newcomer playbook observed is to take the many $10–$20 "test" UGC ad jobs (sometimes with placeholder $5/$10 budgets). Each one is a 1–2 day job that yields a 5★ review, and some trials convert into hourly or retainer work (Christian: $2,880 hourly; Boluwatife: hourly $87 within 2 weeks).
- Lower proposal counts and visible ranking of no-badge, sub-$1K profiles suggest the supply side hasn't caught up with demand yet. The skill is portfolio-provable: sample videos are the whole sales pitch.
- Risk: $5–15/hr rates are low. The higher tier is "creative strategist": scripting, hooks, Meta performance knowledge, retainers at $2,200/month.

### Gaps
- Effective hourly pay on per-video fixed jobs is unknown.
- How the platform ranked Boluwatife (whether by the 90-item keyword-stuffed portfolio or by recency) can't be determined from the data.

---

## Q5. Data annotation / AI training / LLM evaluation

### Takeaway
Generic "data annotation" title volume is **low**: 1 job in 72 h and 10 over 6.5 days. Rates are low ($3–12/hr), and the generic jobs draw 50+ proposals. **"AI evaluation" SME jobs** pay **$20–150/hr**, some with only 10–15 proposals, but they require domain or language credentials (medical, coding, native language). The newcomers who win here use **language or location scarcity** (Danish, Canadian French, Yoruba, Hiligaynon). This niche also works as a **profile-starter**: Simon K. (Q1) got his only review from a Danish voice-agent eval gig.

### Cited Findings
**Jobs (title "data annotation", 10 jobs, 2026-10-16 03:29 → 2026-10-22 15:33):**
- 1 in 48 h; 1 in 72 h. Proposals: 50+ = 4, 20–50 = 3, 15–20 = 1, 10–15 = 1, 5–10 = 1.
- Budgets: $3–6/hr, $4–9/hr, $5–6/hr, $10–12/hr, $19–40/hr; fixed $10, $50, $70, $460.
- Examples:
  - "Content Annotation Associate / Data Quality Specialist (RegTech)", $10–12/hr, full-time, client **$5.72M spent** — [job](https://www.upwork.com/jobs/~022113292691717904054)
  - "Data Labeling Annotator" (2D bounding boxes, traffic cameras), $50 fixed, **10–15 proposals** — [job](https://www.upwork.com/jobs/~022112709292850817968)
  - "Football (Soccer) Data Reviewer — AI Annotation & Quality Checks", $460 fixed, expert, 20–50 — [job](https://www.upwork.com/jobs/~022111821961152369756)

**Jobs (title "AI evaluation", 10 jobs, 2026-10-20 04:55 → 2026-10-23 12:01):**
- 2 in 48 h; 3 in 72 h. Proposals: 50+ = 3, 20–50 = 2, 15–20 = 1, 10–15 = 3, fewer than 5 = 1.
- Rates: $10–25, $10–30, $20–30, $20–45, $20–50 (×2), $20–55, $30–60, $50–150/hr.
- One client (US, $513K spent, 423 jobs posted) posted **4 healthcare SME eval jobs** (internal medicine, NP, PA, AU/NZ healthcare), 10 hires each, 10–20 proposals.
- Examples:
  - "Internal Medicine SME – AI Evaluation", $20–55/hr, 20–50 — [job](https://www.upwork.com/jobs/~022112407260297202923)
  - "Urgent: AI Content Evaluator (Decks, Documents & Spreadsheets) | HandShake AI Experience Required", $10–30/hr, **10–15** — [job](https://www.upwork.com/jobs/~022112985526722486297)
  - "India Voice AI Operators: Paid Live-Client Evaluation | 1,000 Real Calls", $20–50/hr, **Fewer than 5** — [job](https://www.upwork.com/jobs/~022112837985343836982)
  - "Senior Software Engineer – AI Coding Agent Evaluation & Task Development", $20–30/hr, 5 hires, 50+ — [job](https://www.upwork.com/jobs/~022113601668989521531)

**Freelancer search ("data annotation AI training LLM evaluation"):** a mix of badged and no-badge at low rates. No badge: Md Atikur Rahman A. ($7/hr, $300+), David M. ($10, $3K+), Saharsh P. ($3/hr, $1K+), Faith Nanjala W. ($6, $4K+), Mona Nikki O. ($7), Salsabilah I. ($5, $100+), Allen Gabriel M. ($15, $2K+). Language-specialist titles are common: "Arabic LLM Evaluator" (TR+, $50K+), "Urdu/Punjabi", "Vietnamese", "Chinese Speech QA", "Native German AI Evaluator" (Davide C., TR, 2026 ID).

**Profiles:**
- **Olutaiwo A.**: Canada (QC), $20/hr, **Top Rated**, $7K+, 14 jobs. Profile created around Jul 2026, so he reached Top Rated in about 3 months. First contracts were location- and language-gated micro-gigs: "Product Testers Needed – User Feedback Project", $34.72, Jul 2026; "🇨🇦 Canada Only | $60 USD | Simple In-Store Video Research Project", Jul–Aug 2026; "Remote Solo Recording Project – Native Canadian French Speakers Needed", $5.50, ended Oct 22, 2026 (5★ "follow the instructions well!"). The big win: "Image Captioning and Annotation Specialist", **hourly $6,132.50 (423.5 h ≈ $14.5/hr)**, Jul 8 – Oct 13, 2026. Active: Yoruba audio transcription (Oct 19, 2026), "Human Rater for AI Work Sample Assessment" (Oct 12), French AI chatbot (Sep 29). Overview: "AI models are only as good as the human feedback behind them", with prior Micro1 and SuperAnnotate annotator experience listed — [profile](https://www.upwork.com/freelancers/~01b31c776e2efea79f)
- **Allen Gabriel M.**: Philippines, $15/hr, **no badge**, JSS 90 (self-stated), $2K+, 11 jobs. Path: tiny contracts at $10 (image labeling, Nov 2024), $44 (Gboard Hiligaynon testing, Mar–Apr 2025), $5 and $15 (Tagalog recording and review, 2025), then "Allen Gabriel Moral | Hiligaynon", $611.19 (since Aug 2025), "From Luzon to Mindanao – Multi-Dialect Filipino Linguists Wanted!", $906.38 (since Jun 2026), "3 Data Annotators Wanted for AI Evaluation", $368 hourly (since Aug 2, 2026), and "AI Model Evaluation Expert LLM Testing", hourly (since **Oct 9, 2026**). Overview: "I audit multi-turn conversations between people and AI models… English, Tagalog and Hiligaynon"; mentions Alignerr/Sigma AI experience and a self-built Python tool that tracks guideline changes — [profile](https://www.upwork.com/freelancers/~012d1443cf362073e5)
- **Simon K.** (see Q1): his only contract was a Danish-native AI voice-agent evaluation, $60, Oct 2026 — [profile](https://www.upwork.com/freelancers/~01556cbb11cb3d3585)

### Inferences
- Generic English annotation is a race to the bottom ($3–12/hr, 50+ proposals). The defensible newcomer entry is **scarcity**: native language (especially less-common ones), country-gated studies, or domain SME status (medicine, coding, finance) for the $20–55/hr eval jobs.
- These gigs are excellent **review-generators** for a 0-job account (Simon, Olutaiwo, Allen). Volume per title is thin, so they work better as a side channel than as a primary niche.

### Gaps
- Searches on "LLM", "RLHF", "AI training", "native speaker" or "transcription" titles were not run; true volume of language-eval gigs is likely higher than these title counts.
- Can't tell from the API whether many such gigs route through agencies or vendors (Alignerr, Micro1) rather than direct clients.

---

## Q6. Cross-niche comparison: which can a new freelancer win?

### Takeaway
On observed volume, competition and visible newcomer wins, the order is: **(1) AI UGC video ads**, **(2) n8n/Make automation**, where small fix jobs are the wedge, **(3) language-gated AI evaluation** as a review starter, **(4) vibe-coded app rescue** (lower volume, needs real dev skills), and **(5) AI agents/voice agents** (highest volume but the most badge-saturated; best attacked as an n8n + voice add-on).

### Cited Findings
| Niche (title query) | Jobs observed / window | Share 50+ proposals | Badge-free in top-25 search | Newest observed win by a no-badge freelancer |
|---|---|---|---|---|
| AI UGC ("AI UGC") | 20 / ~48 h | 2/20 | ≥9/25 | Boluwatife D., active contract started Oct 22, 2026 — [profile](https://www.upwork.com/freelancers/~014808e5e56e1b36f6) |
| n8n ("n8n") | 20 / ~68 h | 10/20 | 5–6/25 | Abdul R., $220 ended Oct 21, 2026 — [profile](https://www.upwork.com/freelancers/~01f63e4e528082ce4b); Masud S., $150 started Oct 15, 2026 — [profile](https://www.upwork.com/freelancers/~01e6cb8213e695dfa0) |
| AI agent ("AI agent") | 20 / ~22 h | 13/20 | 0/25 (voice/chatbot query); 3/25 (Retell/Vapi query) | none observed for a voice specialist |
| Lovable / vibe coded | 10 / ~6.4 d; 10 / ~3 wk | 5/10; 6/10 | 5/25 | Akram S., $400 started Sep 16, 2026 — [profile](https://www.upwork.com/freelancers/~0192ebb2a3f91f9436) |
| Data annotation / AI evaluation | 10 / ~6.5 d; 10 / ~4.3 d | 4/10; 3/10 | ~7/25 | Allen Gabriel M., hourly started Oct 9, 2026 — [profile](https://www.upwork.com/freelancers/~012d1443cf362073e5) |

Common traits of the newer winners (observed in their profiles):
- a niche-exact title (tool names: "n8n", "Seedance", "Lovable", "Hiligaynon");
- an outcome-led opening line;
- many portfolio items, often video or Loom walkthroughs (Simon: 5 Loom items; Masud: 16; Boluwatife: 90; Akram: 13 named live apps);
- consultations at $5–$50;
- low or mid rates ($12–$35/hr);
- first jobs that were tiny ($5–$60) fixed contracts closed in 1–3 days.

### Inferences
- Combining niches 1 + 2 (n8n plus voice/WhatsApp agents) on one profile matches what Masud and Simon do. It also matches job titles that span both (for example "n8n Developer for Vapi Integration").
- A 0-job account should bid on jobs under 1 hour old. Low proposal tiers ("Fewer than 5", "5–10") were seen only on jobs posted minutes earlier.

### Gaps
- Profile-view and invite data, which drive ranking, are not exposed by the API.
- Only a single 2-day snapshot was taken, so demand trends over weeks are unknown.
