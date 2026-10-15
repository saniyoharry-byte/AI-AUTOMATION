# Roblox employment history and other experiences

Fill every [bracket] with your REAL details before saving: the real client, studio or game name, the real city and country, and the real dates.
Upwork requires these fields, and clients can ask about any entry. If a job was a private Upwork or Discord client, use "Freelance" or "Freelance (Client name withheld)" as the company.

Limits used: job title ≤ 70 characters, role ≤ 50 characters, employment description ≤ 1,000 characters, other-experience title ≤ 70 characters, other-experience description ≤ 4,000 characters.

---

# PART 1: EMPLOYMENT HISTORY (10 entries)

## 1. Tycoon simulator, full game build
- **Company:** [Client or studio name, or "Freelance"]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Game Developer | Tycoon Simulator Full Build
- **Role:** Lead Roblox developer: systems, UI & Luau
- **Period:** [Month Year] – [Month Year]

**Description:**
Built a complete tycoon simulator from concept to launch. I started with a written plan and a playable prototype of the core loop (earn, upgrade, expand) so the client could test the feel before any content was built. I then added player-owned plots with ownership checks, automated production, purchasable upgrades, unlockable areas, rebirth and prestige. Player data used ProfileService with session locking, so progress was never lost between servers. I set up gamepasses and developer products that felt organic, built a responsive shop and HUD, and tested on PC, mobile and tablet. The code was modular and configurable, so new machines, prices and upgrades could be added without touching the core logic. Delivered with clean, commented Luau and a full handover.

---

## 2. "Steal a" base-raiding multiplayer game
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Developer | "Steal a" Base-Raiding Multiplayer Game
- **Role:** Roblox gameplay & multiplayer developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Developed a multiplayer "Steal a" style game where players own bases, buy and collect items, steal from other players and defend with lock timers. Every steal, purchase and hit was validated on the server, so exploiters could not teleport items or duplicate cash. I built plot ownership, base lock and unlock systems, a live item shop with purchase announcements, carrying and stealing mechanics, melee with ragdoll and recovery, and a rebirth loop with saved progress. I worked in milestones with short video updates, ran multiplayer tests with full servers, and fixed edge cases such as players leaving mid-steal and bases being reassigned. The result was a fast, fair core loop with long-term goals that brought players back.

---

## 3. Grow-a-Garden style farming game
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Developer | Farming Game: Mutations, Weather & Index
- **Role:** Roblox systems & UI developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Built the core systems for a Grow-a-Garden style farming game. Players plant seeds, grow fruit and trees, and sell their harvest, with value affected by weight, rarity and mutations. I created a weather event system that triggers mutations and value multipliers, a collection Index that tracks discovered fruits, trees, mutations and weather events, and a sell flow where favorited items are never sold by "Sell All". The HUD showed currency, the day and night cycle and upcoming weather without blocking gameplay. All data was saved safely with DataStore, and the Robux shop pulled live product prices. Every screen was tested on PC, mobile portrait, mobile landscape and tablet.

---

## 4. Responsive UI/UX overhaul
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox UI/UX Developer | Responsive Shop, Inventory & HUD
- **Role:** Roblox UI/UX developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Redesigned and rebuilt the full interface of an existing Roblox game while keeping every working function intact. I inspected each existing screen first, then delivered mock-ups for approval before implementing. The new UI covered the shop, inventory, HUD, settings, player profile and season pass, in one consistent style. I used scale-based layouts, aspect ratio constraints and safe-area handling so nothing clipped, overlapped or hid under the Roblox top bar. Screens were wired to live data: real Robux prices, ownership states and inventory counts. Each device format was tested and documented with screenshots: PC, mobile portrait, mobile landscape and tablet. No existing systems were replaced without approval, and no new errors were introduced.

---

## 5. Combat and ability systems
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Scripter | PvP Combat, Abilities & Anti-Exploit
- **Role:** Roblox combat & security scripter
- **Period:** [Month Year] – [Month Year]

**Description:**
Built and reworked a multiplayer combat system to feel instant while staying secure. The client plays animations and feedback immediately, while the server validates range, timing, cooldowns and weapon ownership before applying damage, knockback, stun or ragdoll. I created a configurable ability kit for anime-style moves and combos, a combat state machine (attacking, blocking, stunned, recovering) that stays consistent in fast fights, and rate limiting on every RemoteEvent to block spam and remote abuse. VFX and sounds replicate cleanly to all players. I tested with multiple players under real latency and removed client trust from every important action.

---

## 6. Fashion and dress-up game
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Developer | Fashion Dress-Up Game & Runway Voting
- **Role:** Roblox game systems & UI developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Developed a Dress to Impress style fashion game with a full round system: lobby and theme reveal, a timed dressing room, runway walk, 1–5 star voting and a winner podium with rewards. Players equip Roblox layered clothing, hair, accessories and makeup through a clean UI, and recolor items in real time with a color wheel and pattern picker. Voting is counted on the server to keep results fair, and currency, unlocked items and stats are saved with DataStore. I kept the code modular so new clothing and themes could be added easily, and tested rounds with full servers to keep timers and stages in sync for every player.

---

## 7. Tower defense game
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Developer | Tower Defense Game Systems
- **Role:** Roblox gameplay & optimization developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Built a tower defense game designed to handle large waves without lag. Towers and enemy waves were data-driven, so new content and balance changes needed no new code. I implemented tower placement with validation, targeting modes, upgrades and selling, a configurable wave director with bosses, and meta progression with unlocks and saved loadouts. Enemies used object pooling, path-based movement and lightweight replication to keep the server and low-end phones running smoothly. I profiled performance with the MicroProfiler, balanced early waves for a fast and satisfying first session, and delivered clean, documented Luau.

---

## 8. Game rescue: data loss, lag and exploits
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Developer | Live Game Rescue: Lag, Data Loss & Exploits
- **Role:** Roblox debugging & optimization developer
- **Period:** [Month Year] – [Month Year]

**Description:**
Took over a live Roblox game, including code written partly with AI tools, that was losing player data, lagging and being abused by exploiters. I read every system and mapped the data flow before changing anything. Then I traced save failures to unsafe DataStore writes and fixed them with session locking and retry-safe saving, removed memory leaks and heavy loops found with the MicroProfiler and Developer Console, and added validation and rate limiting to unprotected remotes. Working features stayed working: I changed only what was needed and tested each fix in a copy before going live. The client received a plain-English report of every problem found and fixed.

---

## 9. Roblox animation for YouTube Shorts and TikTok
- **Company:** [Channel or client name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox Animator | Story Animations for YouTube Shorts & TikTok
- **Role:** Roblox animator & scene director
- **Period:** [Month Year] – [Month Year]

**Description:**
Created vertical Roblox story animations for short-form channels on YouTube Shorts, TikTok and Instagram Reels, working from the client's script and voiceover. For each video I broke the story into shots, set up scenes, characters and lighting in Roblox Studio, then animated acting, facial expressions, lip sync and camera moves in Moon Animator and Blender, timed to every beat of the audio. I matched each channel's reference style and pacing, delivered clean vertical renders ready for editing, and kept a consistent weekly schedule so the channel could post regularly.

---

## 10. VFX, maps and 3D builds
- **Company:** [Client or game name]
- **City / Country:** [City] / [Country]
- **Title:** Roblox VFX Artist & Builder | Abilities, Maps & Lobbies
- **Role:** Roblox VFX artist & level builder
- **Period:** [Month Year] – [Month Year]

**Description:**
Created ability VFX and environments for Roblox games. On the VFX side I built anime-style effects (sword slashes, auras, energy blasts, impact frames) and brainrot-style meme effects with ParticleEmitters, beams, trails, flipbooks and mesh effects, matched to reference and kept within particle budgets for mobile. On the build side I designed themed lobbies, arenas and maps, blocked out around the gameplay first and then dressed with custom Blender props. Interactive elements such as doors, shops, NPCs and destructible walls were scripted in Luau, and every map was optimized with StreamingEnabled and part budgets so it loaded fast on phones.

---

# PART 2: OTHER EXPERIENCES (10 entries)

## A. Roblox Game Security, Anti-Exploit & Server Validation

**Description:**
Securing Roblox games so exploiters cannot ruin them for real players, and so owners never lose their game to a backdoor.

WHAT I DO
• Server-authoritative design: the server decides every important action (damage, purchases, rewards, stealing, trading). The client only asks.
• RemoteEvent and RemoteFunction validation: every request is checked for type, range, ownership, distance, timing and cooldown before the server acts.
• Rate limiting: remotes that can be spammed get per-player limits, so exploiters cannot flood the server or farm rewards.
• Anti-dupe protection for trading, inventories and economies, using server-side checks and atomic saves.
• Sanity checks on movement and positions where gameplay depends on them.
• Backdoor removal: I audit free models, plugins and require() calls, and remove hidden scripts, unknown external assets and obfuscated code.

HOW I WORK
1. Audit. I read every script that talks between client and server and list each remote, what it does and what it trusts.
2. Rank the risks. Clients get a plain-English list of what an exploiter could do today, ordered by impact.
3. Fix safely. I move trust to the server, add validation and rate limits, and keep every working feature working.
4. Test like an attacker. I try to break each fixed system before signing it off.
5. Report. You get a summary of every problem found and fixed, and simple rules for keeping new features secure.

WHAT YOU GET
• A game where players compete fairly and the economy stays balanced.
• No backdoors, no hidden admin and no unknown assets in your place.
• Clean, readable Luau that any future developer can understand.

YOUR GAME STAYS YOURS
I never ask for your Roblox password. I work through Team Create or group permissions you control, and you can remove my access at any time.

---

## B. Roblox Player Data, DataStore & ProfileService

**Description:**
Making sure Roblox players never lose their progress, because lost saves are one of the fastest ways to get dislikes and lose players.

WHAT I BUILD
• Player data systems with ProfileService (or ProfileStore and DataStore2) and session locking, so the same player cannot overwrite their own data from two servers.
• Safe saving on join, on leave, on server shutdown and at regular intervals, with retries when Roblox services are busy.
• Data schemas with versioning, so new features can add fields without breaking old saves.
• Safe migrations when an existing game changes how it stores data.
• Ordered DataStores for global leaderboards, and MemoryStore for cross-server features such as live events, queues and matchmaking.
• Admin tools for support: look up a player's data, restore items and fix broken saves safely.

HOW I WORK
1. Review what you have. For an existing game, I trace how data is loaded and saved today and find where it can fail.
2. Design the schema with you: currencies, inventory, progression, settings and anything else that must persist.
3. Build and test failure cases on purpose: server shutdowns, rejoining quickly, teleporting between places and DataStore errors.
4. Migrate carefully. Existing player data is converted step by step, with backups, so nothing is lost.
5. Document it, so you know how saving works and how to add new data later.

WHAT YOU GET
• Players keep their progress, purchases and items, every time.
• Fewer support messages and fewer angry reviews.
• A data system that can grow with your game for years.

---

## C. Roblox Monetization, Gamepasses & Game Economy

**Description:**
Designing monetization that players are happy to pay for, and an in-game economy that stays balanced as the game grows.

WHAT I BUILD
• Gamepasses: VIP, 2x currency, extra slots, special tools and cosmetic passes, all checked on the server.
• Developer products: currency packs, boosts, skips and limited offers, with MarketplaceService receipts processed safely so every purchase is granted exactly once.
• Robux shops that show live product prices and Roblox discounts correctly.
• Currency, rewards and progression curves that feel generous early and keep long-term goals.
• Rebirth and prestige systems that reset progress in exchange for permanent bonuses.
• Daily rewards, playtime rewards and limited-time events that give players reasons to return.

PRINCIPLES I FOLLOW
• Organic, not forced. Paying should speed up or decorate the fun, never block it.
• Fair for free players. A game that feels pay-to-win loses ratings and players.
• Compliant with Roblox rules, including the policies on paid random items and age-appropriate content. If a feature could put your game at risk of moderation, I tell you before I build it.

HOW I WORK
1. Study the core loop and decide where spending naturally fits.
2. Propose a monetization plan with products, prices and placement for your approval.
3. Build the products, shop UI and secure receipt handling.
4. Test every purchase path, including failed and repeated purchases.
5. Set up analytics events so you can see what players buy and adjust prices with real data.

WHAT YOU GET
• Monetization that feels natural to players.
• Purchases that are always granted correctly.
• Data to make better pricing decisions after launch.

---

## D. Roblox Mobile Optimization & Cross-Platform UI

**Description:**
Most Roblox players are on phones and tablets, so a game that only works well on PC loses most of its audience in the first minute.

WHAT I DO
• Responsive UI: scale-based layouts, aspect ratio and size constraints, and safe-area handling, so menus never clip, overlap or hide under the Roblox top bar.
• Touch-friendly controls: large buttons, no hover-only or right-click-only actions, and input that works for touch, keyboard, mouse and controller.
• Performance for low-end devices: fewer active instances, lighter effects, streaming-friendly maps and efficient scripts.
• Lag diagnosis: MicroProfiler and Developer Console to find expensive scripts, memory growth and heavy replication.
• Visual budgets: particle limits, texture sizes and part counts tuned for phones without making the game look cheap.

HOW I WORK
1. Test your game on PC, mobile portrait, mobile landscape and tablet, and record every problem.
2. Profile performance on the server and on the client to find the real causes of lag.
3. Fix UI layouts and input first, because players notice those immediately.
4. Optimize scripts, effects and maps step by step, checking that nothing breaks.
5. Deliver screenshots or recordings of every device format, so you can see the result.

WHAT YOU GET
• A game that looks right and feels smooth on every device.
• More players staying past the first session, especially on mobile.
• A clear list of what was changed and why.

---

## E. AI-Assisted Roblox Development & Taking Over AI-Built Games

**Description:**
More Roblox games are now started with AI tools. I use AI in my own workflow to move faster, and I specialize in taking over AI-assisted Roblox projects and making them stable, secure and ready for real players.

WHAT I DO
• Review AI-generated Luau and find what it gets wrong: trusting the client, unsafe DataStore saving, memory leaks, duplicated logic and missing edge cases.
• Restructure messy code into clean, modular systems (ModuleScripts, clear client and server separation) without breaking working features.
• Add the parts AI tools usually skip: server validation, rate limiting, session-locked saves and multiplayer testing.
• Use AI tools such as Claude and Roblox MCP integrations to speed up my own work: generating boilerplate, writing tests, analyzing logs and reviewing code. Every line is still understood, tested and owned by me.

HOW I WORK
1. Read first. I understand every system in your project before changing anything.
2. List the risks: security holes, data loss risks, performance problems and fragile code, ordered by impact.
3. Fix in milestones, starting with what affects players most.
4. Test like a real player, in multiplayer and on PC, mobile and tablet.
5. Hand over clean, documented code so you can keep building, with or without AI.

WHAT YOU GET
• Your AI-built prototype turned into a game that is safe to launch.
• Faster delivery, because AI handles repetitive work while I focus on design, security and quality.
• Code you and any future developer can understand.

---

## F. Roblox Full Game Development: Concept to Launch

**Description:**
Taking a Roblox game from an idea, a reference game or a design document all the way to a published, launch-ready experience.

WHAT I BUILD
• Simulator, tycoon, clicker, obby, "Steal a" base-raiding, Grow-a-Garden style farming, tower defense, roleplay, horror, PvP and fashion games.
• The core gameplay loop first, then progression, currency, rebirth, shops, quests, leaderboards and events around it.
• Player data saving, gamepasses and developer products, and responsive UI for every device.
• Lobbies, maps and game page assets direction: name, description, icon and thumbnail brief.

HOW I WORK
1. Scope. I study your idea and reference games, then send a written plan with features, milestones, timeline and price. If something does not fit your budget, I say so before we start.
2. Playable prototype. You play the core loop in Roblox before any content is built around it.
3. Build in milestones, with short progress updates and video clips after each one.
4. Test like a real player: multiplayer, exploits, PC, mobile and tablet.
5. Launch-ready polish: performance tuning, UI cleanup and onboarding for new players.
6. Handover: clean, commented Luau, a short guide and full ownership. I can stay on for weekly updates after launch.

WHAT YOU GET
• A complete game that works, saves safely and runs smoothly on phones.
• Visible progress at every step, with no surprises.
• Full ownership of the game, the code and the revenue.

---

## G. Roblox Combat Systems & Multiplayer Architecture

**Description:**
Building fast, fair multiplayer gameplay where every player sees the same result and exploiters cannot fake hits or rewards.

WHAT I BUILD
• Melee, ranged and ability-based combat with hitboxes, combos, blocking, stuns, knockback and ragdoll.
• Anime-style ability kits with cooldowns, charge-ups and configurable damage.
• Round systems, lobbies, teams, matchmaking, voting and spectating.
• Server-authoritative architecture: the client plays animations instantly, the server validates and decides.
• Clean client and server separation with ModuleScripts and frameworks such as Knit.

HOW I WORK
1. Define how the combat should feel, using your reference games.
2. Prototype the core fight loop so you can test the feel early.
3. Move every important decision to the server and validate range, timing, cooldown and ownership.
4. Test with multiple players under real latency, including people joining and leaving mid-fight.
5. Tune feel and balance with you, then document how to add new weapons and abilities.

WHAT YOU GET
• Combat that feels responsive and fair.
• A system that is easy to extend with new moves and weapons.
• Fewer exploit reports and fewer frustrated players.

---

## H. Roblox Animation & Moon Animator for Content Creators

**Description:**
Animating Roblox characters for games and for short-form content on YouTube Shorts, TikTok and Instagram Reels.

WHAT I CREATE
• Story animations from your script and voiceover: acting, facial expressions, lip sync and camera work.
• POV, comedy, drama and meme-style shorts that match a channel's reference style.
• Gameplay animations for games: idles, runs, attacks, emotes and ability animations.
• Scenes and sets built in Roblox Studio, with characters, props and lighting.

TOOLS
Moon Animator, Roblox Studio Animation Editor and Blender, chosen to match the style you want.

HOW I WORK
1. Read the script and listen to the voiceover, then break the story into shots.
2. Set up scenes and characters that match your references.
3. Animate movement, expressions and camera, timed to every beat of the audio.
4. Render clean vertical video, or raw animation files if you edit yourself.
5. Deliver on a steady schedule for ongoing channels, with quick revisions.

WHAT YOU GET
• Animations that hold attention in the first seconds.
• A consistent look across every video on your channel.
• Reliable weekly delivery you can plan your uploads around.

---

## I. Roblox LiveOps, Analytics & Player Retention

**Description:**
Helping Roblox games grow after launch by learning from real player data and releasing regular updates.

WHAT I DO
• Analytics events for the moments that matter: first session, tutorial steps, rounds, purchases, rebirths and where players quit.
• Retention features: daily rewards, streaks, playtime rewards, quests and limited-time events.
• Weekly update cadence: new content, balance changes, fixes and seasonal events.
• Onboarding improvements so new players understand the game in the first minute.
• Support for testing thumbnails, icons and game page changes with real numbers.

HOW I WORK
1. Instrument the game so you can see what players actually do.
2. Review the data with you: where players stop, what they buy and what they ignore.
3. Plan the next update based on the biggest opportunity.
4. Build, test and ship the update, then measure the result.
5. Repeat every week or two, so the game keeps improving.

WHAT YOU GET
• Decisions based on real player behavior, not guesses.
• Updates that give players reasons to come back.
• A long-term partner invested in your game, not just a one-off task.

---

## J. Roblox VFX, Maps & 3D Assets with Blender

**Description:**
Making Roblox games look premium while staying smooth on phones and low-end devices.

WHAT I CREATE
• Ability VFX: sword slashes, auras, energy blasts, impact frames, elemental effects and loud brainrot-style meme effects.
• Themed maps, lobbies and arenas: city, fantasy, sci-fi, horror, school, roleplay and more.
• Custom 3D props and assets modeled in Blender and optimized for Roblox.
• Interactive builds: doors, shops, NPC areas, breakable windows and destructible walls, scripted in Luau.

HOW I WORK
1. Collect your references and agree on the style.
2. Block out maps around the gameplay first, so the layout supports the fun.
3. Build assets and effects, matched to your references.
4. Optimize: particle budgets, part counts, texture sizes and StreamingEnabled.
5. Test on PC and mobile, then deliver organized, easy-to-reuse assets.

WHAT YOU GET
• Visuals that stand out in gameplay clips and thumbnails.
• Maps and effects that load fast and run smoothly on phones.
• Clean, organized assets your team can reuse.
