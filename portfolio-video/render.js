// Renders case-study.html to an MP4, frame by frame.
// Usage: node render.js [input.html] [output.mp4] [fps]
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const input = path.resolve(process.argv[2] || path.join(__dirname, "case-study.html"));
const output = path.resolve(process.argv[3] || path.join(__dirname, "case-study.mp4"));
const fps = +(process.argv[4] || 30);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto("file://" + input);
  await page.evaluate(() => document.fonts.ready);
  const duration = await page.evaluate(() => window.DURATION);
  const frames = Math.round(duration * fps);

  const ff = spawn("ffmpeg", ["-y", "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-preset", "medium",
    "-movflags", "+faststart", output], { stdio: ["pipe", "ignore", "inherit"] });

  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.render(t), i / fps);
    const buf = await page.screenshot({ type: "jpeg", quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    if (i % fps === 0) process.stdout.write(`\r${Math.round(i / frames * 100)}%`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on("close", r));
  await browser.close();
  console.log(`\nWrote ${output} (${duration}s @ ${fps}fps)`);
})();
