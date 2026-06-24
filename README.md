# Strat Cat

One-page site for the **StratCat AI** YouTube channel — the skeptical cat who tests AI money-making claims live and reports the real numbers. ("Does it actually work?")

Static site, single `index.html`. To configure it, edit the `CONFIG` block near the bottom of `index.html` (channel URL, email signup, featured video IDs). Email signup hands off to **beehiiv**.

## Folder map

```
stratcat/
├── index.html   ← the entire website
├── CLAUDE.md    ← brand guide / voice / content rules
├── README.md    ← this file
└── images/      ← all image assets (see guide below)
```

## Image guide

All images live in `images/`. Names describe what each one is so you can grab the right file fast:

| File | Size | Background | Use it for |
|------|------|-----------|------------|
| `logo-square-transparent.png` | 703×703 (square) | transparent | **Profile pics** (GitHub, social), site favicon & header logo |
| `logo-large-transparent.png` | 1536×1024 | transparent | High-res logo to drop on **any** background |
| `logo-on-black.png` | 1672×941 | black | When a site/tool wants a logo on a **black** background |
| `banner.png` | 1983×793 (wide) | black | Wide **channel/header banner** |

Tip: transparent versions work on light or busy backgrounds; the black-bg version is pre-baked for dark layouts.

## To-do / notes

- **Optional hero screenshot:** The homepage hero currently shows a coded "verdict card" (real numbers, styled in HTML — not an image). If you ever want to swap it for a real screenshot of your test results, save it as `images/your-dashboard.png` and follow the commented hint near line 244 of `index.html`.
