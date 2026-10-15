// Renders 4:3 gallery images for the Upwork Project Catalog listings.
const { chromium } = require("playwright");
const path = require("path");

const covers = [
  { slug: "catalog-1-full-game", eyebrow: "Roblox · Full game build",
    title: 'Your Roblox game, <span class="grad">built to launch</span>',
    points: ["Playable prototype first", "DataStore saves", "Shop & gamepasses", "PC + mobile tested"], price: "$250" },
  { slug: "catalog-2-scripting-fix", eyebrow: "Roblox · Luau scripting",
    title: 'Roblox scripts <span class="grad">fixed or built</span>',
    points: ["Bug fixes", "New features", "Clean Luau", "No backdoors"], price: "$30" },
  { slug: "catalog-3-ui-ux", eyebrow: "Roblox · UI/UX",
    title: 'Roblox UI that works <span class="grad">on every screen</span>',
    points: ["Shop & inventory", "HUD & menus", "Phone + tablet + PC", "Wired to live data"], price: "$60" },
  { slug: "catalog-4-animated-shorts", eyebrow: "Roblox · Animated shorts",
    title: 'Roblox story animations <span class="grad">for Shorts & TikTok</span>',
    points: ["From your script & VO", "Moon Animator · Blender", "Faces & lip sync", "Vertical 9:16"], price: "$35" },
  { slug: "catalog-5-game-rescue", eyebrow: "Roblox · Game rescue",
    title: 'Fix lag, data loss <span class="grad">& exploits</span>',
    points: ["Full code audit", "Session-locked saves", "Remote validation", "Mobile performance"], price: "$60" },
];

(async () => {
  const browser = await chromium.launch();
  for (const c of covers) {
    const page = await browser.newPage({ viewport: { width: 2000, height: 1500 } });
    await page.addInitScript(cfg => { window.CONFIG = cfg; }, c);
    await page.goto("file://" + path.join(__dirname, "catalog-covers.html"));
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(__dirname, `${c.slug}.png`) });
    await page.close();
  }
  await browser.close();
})();
