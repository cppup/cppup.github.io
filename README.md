# cppup.github.io

> 🌐 **Homepage**: https://cppup.github.io

Terminal-themed personal homepage with responsive layout, 5 color schemes, blog section, and a built-in game center.

## Structure

```
/
├── index.html              # Homepage (about · blog preview · game center)
├── blog/
│   ├── index.html          # Full blog listing with tag filter
│   └── posts.json          # Blog posts data (add your own entries here)
├── games/
│   ├── index.html          # Game Center hub
│   ├── 2048.html           # 2048 — arrow keys / swipe, terminal colors
│   ├── pong.html           # Pong — mouse / keyboard / touch vs AI
│   └── snake.html          # Snake — WASD / arrows / swipe, speed ramp
└── .github/workflows/
    └── pages.yml           # Auto-deploy to GitHub Pages on push to main
```

## Features

- **5 terminal color themes** — VSCode Dark, Dracula, Monokai, Solarized Dark, Light  
  One-click switcher in the nav; preference saved in `localStorage`
- **Blog** — loads from `blog/posts.json`; add posts by editing the JSON file  
  Supports title, date, tags, description, and URL
- **Game Center** — three fully-playable browser games with consistent terminal UI:
  - 2048 (sliding tiles, win/lose overlays, best score)
  - Pong (AI opponent, mouse/keyboard/touch control, speed ramp)
  - Snake (food pulse, speed ramp, high score)
- **Responsive layout** — works on desktop, tablet, and mobile
- **Zero dependencies** — pure HTML / CSS / JS, no CDN, no build step

## Customize Blog Posts

Edit `blog/posts.json`:

```json
[
  {
    "title": "My Post Title",
    "date": "2025-06-01",
    "tags": ["tag1", "tag2"],
    "desc": "Short description shown in the card.",
    "url": "https://link-to-full-post"
  }
]
```

The homepage shows the 3 most recent posts; `blog/index.html` shows all of them with tag filtering.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/pages.yml`) automatically deploys to GitHub Pages.

No build step required — the workflow uploads the repository root directly.
