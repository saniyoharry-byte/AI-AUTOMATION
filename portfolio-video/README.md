# Portfolio case study video

A 34-second, 1080p animated case study, rendered from HTML with Playwright and ffmpeg.

- `case-study.html`: the video. Edit the `CONFIG` block at the top of the script to change the text, steps, stats and tech stack.
- `render.js`: renders the page frame by frame to MP4.
- `case-study.mp4`: the rendered sample. All of its numbers are placeholders.

Render: `NODE_PATH=$(npm root -g) node portfolio-video/render.js`
