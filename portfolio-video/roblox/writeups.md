# Roblox portfolio write-ups

For each item, upload the `.mp4` and use the `-cover.png` as the thumbnail. Add your real game link and any real numbers (visits, CCU) where marked.

---

## 1. Tycoon simulator
**Files:** `01-tycoon-simulator.mp4`, `01-tycoon-simulator-cover.png`

**Title:** Roblox Tycoon Simulator | Full Game: Progression, Rebirth & Gamepasses

**Role:** Roblox developer: systems, UI & Luau scripting

**Description:**
A complete tycoon simulator built from concept to launch. I prototyped the core loop first (earn, upgrade, expand), then built progression, unlocks, rebirth and prestige on top. Player data uses ProfileService with session locking, so progress is never lost. Monetization uses gamepasses and developer products that feel organic, not forced. Tested on PC, mobile and tablet, with clean, modular Luau and a full handover.

**Skills:** Roblox Studio, Lua, Game Development, Simulation Game, Monetization

---

## 2. "Steal a" base-raiding game
**Files:** `02-steal-a-base-raiding.mp4`, `02-steal-a-base-raiding-cover.png`

**Title:** Roblox "Steal a" Base-Raiding Game | Bases, Locks, Stealing & Rebirth

**Role:** Roblox developer: gameplay systems & anti-exploit

**Description:**
A multiplayer "Steal a" style game: players own bases, buy and collect items, steal from each other and defend with lock timers. Every steal, purchase and hit is validated on the server, so exploiters cannot teleport items or duplicate cash. Includes plot ownership, base lock and unlock, live purchase announcements, melee with ragdoll, and a rebirth loop with saved progress that gives players a reason to come back.

**Skills:** Roblox Studio, Lua, Multiplayer, Game Mechanics, Scripting

---

## 3. Responsive UI/UX
**Files:** `03-responsive-ui.mp4`, `03-responsive-ui-cover.png`

**Title:** Roblox UI/UX | Shop, Inventory, HUD & Index on PC, Mobile & Tablet

**Role:** Roblox UI/UX developer

**Description:**
A game-wide UI system designed for the fact that most Roblox players are on phones. Each screen starts as an approved mock-up, then is built with scale-based layouts that respect mobile safe areas and the Roblox top bar. Screens connect to live data: real Robux prices, ownership states and inventory. Tested on PC, mobile portrait, mobile landscape and tablet, with no clipped windows, no tiny buttons, and the game world always visible.

**Skills:** Roblox Studio, Game UI/UX Design, Lua, Mobile Game Development, Scripting

---

## 4. Combat and abilities
**Files:** `04-combat-abilities.mp4`, `04-combat-abilities-cover.png`

**Title:** Roblox Combat System | Server-Validated Hits, Abilities & Anti-Exploit

**Role:** Roblox developer: combat systems & security

**Description:**
A PvP and anime-style combat system that feels instant but cannot be faked. The client plays animations and feedback immediately, while the server validates range, timing and cooldowns before applying damage, knockback, stun or ragdoll. Abilities are configurable, remotes are rate-limited against spam, and VFX and sound replicate cleanly to every player.

**Skills:** Roblox Studio, Lua, Game Mechanics, Multiplayer, Animation

---

## 5. Fashion and dress-up game
**Files:** `05-fashion-dress-up.mp4`, `05-fashion-dress-up-cover.png`

**Title:** Roblox Fashion Game | Rounds, Layered Clothing, Color Picker & Voting

**Role:** Roblox developer: game systems & UI

**Description:**
A Dress to Impress style fashion game with a complete round loop: lobby and theme reveal, timed dressing room, runway walk, 1–5 star voting and a winner podium. Players equip layered clothing, hair, accessories and makeup, and recolor items live with a color wheel and pattern picker. Votes are counted on the server, and currency and unlocked items are saved with DataStore.

**Skills:** Roblox Studio, Lua, Game UI/UX Design, Game Development, Multiplayer

---

## 6. Tower defense
**Files:** `06-tower-defense.mp4`, `06-tower-defense-cover.png`

**Title:** Roblox Tower Defense | Towers, Enemy Waves, Upgrades & Progression

**Role:** Roblox developer: gameplay systems & optimization

**Description:**
A tower defense game built to handle large waves without lag. Towers and enemy waves are data-driven, so new content and balance changes need no new code. Includes tower placement, targeting and upgrades, a configurable wave director with bosses, and meta progression with unlocks and saved loadouts. Enemies use object pooling and lightweight replication so the game stays smooth on phones.

**Skills:** Roblox Studio, Lua, Game Mechanics, Game Design, Mobile Game Development

---

## 7. Game rescue
**Files:** `07-game-rescue.mp4`, `07-game-rescue-cover.png`

**Title:** Roblox Game Rescue | Fixing Lag, Data Loss & Exploits in a Live Game

**Role:** Roblox developer: debugging, optimization & security

**Description:**
Taking over an existing Roblox game, including AI-assisted code, and making it stable. I read every system and mapped the data flow before changing anything. Then I profiled lag and memory, traced save failures and tested remotes for abuse. Fixes included session-locked saves, removing leaks and heavy loops, and adding validation and rate limiting. Working features stayed working, and every fix was verified in live tests with no new errors.

**Skills:** Roblox Studio, Lua, Game Development Bug Fix, Scripting, Multiplayer

---

## 8. Animated shorts
**Files:** `08-animated-short.mp4`, `08-animated-short-cover.png`

**Title:** Roblox Animated Shorts | Story Videos from Script & Voiceover

**Role:** Roblox animator & scene director

**Description:**
Vertical Roblox story animations for YouTube Shorts, TikTok and Reels, made from the client's script and voiceover. I break the story into shots, build sets and characters in Roblox Studio, then animate acting, facial expressions, lip sync and camera moves in Moon Animator and Blender, timed to every beat of the audio. Delivered as clean vertical renders that match the channel's style and references, on a consistent weekly schedule.

**Skills:** Animation, 3D Animation, Roblox Studio, Blender, Video Editing

> Tip: also add one of your real animated shorts to this item. Animation clients decide on the actual sample.

---

## 9. VFX pack
**Files:** `09-vfx-pack.mp4`, `09-vfx-pack-cover.png`

**Title:** Roblox VFX | Anime Slashes, Auras & Brainrot Effects, Mobile-Ready

**Role:** Roblox VFX artist & implementer

**Description:**
Ability VFX in two styles: anime (sword slashes, auras, energy blasts, impact frames) and brainrot (loud, absurd, thumbnail-ready meme effects). Built in Roblox Studio with ParticleEmitters, beams, trails, flipbooks and mesh effects, matched to reference, and kept within particle budgets so they run on low-end phones. Effects are wired into gameplay and triggered by abilities, not just showcased.

**Skills:** Visual Effects, Roblox Studio, Animation, Lua, Mobile Game Development

> Tip: add a 15–30 second clip of your real effects to this item.

---

## 10. Maps and lobbies
**Files:** `10-map-lobby-build.mp4`, `10-map-lobby-build-cover.png`

**Title:** Roblox Maps & Lobbies | Themed Environments, Mobile-Optimized

**Role:** Roblox builder & level designer

**Description:**
Themed Roblox maps, lobbies and arenas (city, fantasy, sci-fi, horror) built for both looks and performance. Layouts are blocked out around the gameplay first, then dressed with custom Blender props and textures. Interactive elements such as doors, shops, NPCs and destructible objects are scripted in Luau. Each map is optimized with streaming and part budgets so it loads fast and runs smoothly on phones.

**Skills:** Level Design, Roblox Studio, Blender, 3D Modeling, Game Design
