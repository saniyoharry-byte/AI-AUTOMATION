// Renders the Roblox case-study videos and cover images from roblox-projects.js.
// Usage: node render-roblox.js [--preview] [slug ...]
//   --preview  writes 6 still frames per project instead of the full video
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const FPS = 30;
const args = process.argv.slice(2);
const preview = args.includes("--preview");
const only = args.filter(a => !a.startsWith("--"));
const projects = require("./roblox-projects").filter(p => !only.length || only.includes(p.slug));
const template = "file://" + path.join(__dirname, "template.html");
const outDir = path.join(__dirname, "roblox", preview ? "preview" : "");
fs.mkdirSync(outDir, { recursive: true });

async function open(browser, config) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.addInitScript(c => { window.CONFIG = c; }, config);
  await page.goto(template);
  await page.evaluate(() => document.fonts.ready);
  return page;
}

async function renderVideo(page, file) {
  const duration = await page.evaluate(() => window.DURATION);
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-preset", "medium",
    "-movflags", "+faststart", file], { stdio: ["pipe", "ignore", "inherit"] });
  for (let i = 0; i < Math.round(duration * FPS); i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    const buf = await page.screenshot({ type: "jpeg", quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on("close", r));
}

(async () => {
  const browser = await chromium.launch();
  for (const p of projects) {
    const page = await open(browser, p);
    if (preview) {
      for (const t of [3, 9, 17, 23, 28.5, 32]) {
        await page.evaluate(t => window.render(t), t);
        await page.screenshot({ path: path.join(outDir, `${p.slug}-${t}.png`) });
      }
    } else {
      await page.evaluate(() => window.render(3.5));
      await page.screenshot({ path: path.join(outDir, `${p.slug}-cover.png`) });
      await renderVideo(page, path.join(outDir, `${p.slug}.mp4`));
    }
    await page.close();
    console.log("done", p.slug);
  }
  await browser.close();
})();
