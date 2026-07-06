# Scout Audit Ledger

This is Scout's **memory** of what he has already audited. Scout reads it at the
start of every weekly run so he only works the *new* stuff instead of re-checking
every video from scratch.

- **How Scout reads it:** public raw URL —
  `https://raw.githubusercontent.com/stratcatai/StratCatAI/main/SCOUT-audit-ledger.md`
- **Who updates it:** Scout emits an updated version at the end of each run;
  **Claude Code** saves it back here and re-pushes so the raw URL stays current.
  (Scout can read from the web but can't commit — that's why Claude Code owns the file.)

**Status values:**
- `CLEAN` — audited, everything on-brand, nothing to do. Safe to skip next run.
- `OPEN` — audited but something is still unresolved (put the reason in Notes).
  Re-checked every run until it's CLEAN.

**Skip rule (what Scout does with this):** on each run, only audit a video if it's
(a) **not in this table** (new), (b) its **title changed** vs. the table, or
(c) its status is **OPEN**. Everything else marked `CLEAN` with an unchanged title
is skipped and logged as "skipped, unchanged."

---

## Ledger

_First run: 2026-07-06 — all 12 videos + channel shell audited._

| Video ID | Title | Last audited | Status | Notes |
|----------|-------|--------------|--------|-------|
| f8M3q5hyVdc | Copying Viral Sites for Profit | 2026-07-06 | CLEAN | Fixed 2 broken github.io links → canonical. |
| M388LdaFQHo | I'm Testing the Viral "1,000 Subs in 30 Days With Claude Code" Method — Real Numbers | 2026-07-06 | OPEN | Links/casing clean. Chapter "1:25 Skeptical Cat" = retired persona; rename to StratCat (Strat's call). This is the canonical Day-0 30-day test video. |
| JsAwn2TGWfQ | I let Claude Code My YouTube Channel | 2026-07-06 | CLEAN | Fixed "StratCat AI"→"StratCatAI". "Newsletter for restaurant operators" footer noted (channel-level). |
| 7wDD693SCps | A Restaurant GM's Honest First Month With AI (I Made $0) | 2026-07-06 | CLEAN | On-brand, honest, links correct. No fixes. |
| u6WYkZhYI4w | The One File That Made Claude Actually Run My Restaurant (CLAUDE.md Setup) | 2026-07-06 | CLEAN | Casing correct (Claude Code / GitHub). No fixes. |
| 5INcRpmJabQ | Delete Brain Fog in 420 seconds | 2026-07-06 | OPEN | Entire description is a ClickBank affiliate pitch, off-voice, non-canonical link. Strat's call: rewrite/unlist. |
| XSO4gqBcRg4 | I Bought AI Tools Before I Needed Them — A GM's Lesson | 2026-07-06 | CLEAN | On-brand, links correct. No fixes. |
| M2thd0_Zt3o | Zero to 1,000 in a month — you calling it hype or legit? | 2026-07-06 | OPEN | Added #Shorts. Broken CTA "Watch it from day 0 → ()" (empty link) — set target. |
| ECQuRtS3SeM | Don't Pay Hostinger | 2026-07-06 | OPEN | Added #Shorts. "Full 30-day test" links to f8M3q5hyVdc — should point to M388LdaFQHo. |
| xnMsBl3wo7U | No Skills Just $20 AI Tool | 2026-07-06 | OPEN | #Shorts present, casing clean. "Full 30-day test" links to JsAwn2TGWfQ — should point to M388LdaFQHo. |
| x8uyafuTfzI | He says $20 of AI = 1,000 subscribers in 30 days. So I'm testing it. | 2026-07-06 | OPEN | #Shorts present, clean. "Full 30-day test" links to JsAwn2TGWfQ — should point to M388LdaFQHo. |
| pezzS1e00bA | 1000 Subs in 30 Days? | 2026-07-06 | OPEN | Added #Shorts. OPEN only for the shared 30-day-test link standardization. |

### Channel-level items (not per-video — still needing Strat's call)
- **Banner** reads "StratCat AI" (spaced) → needs a new one-word graphic (tagline fine). Upload manually.
- **Channel Links** section has only the beehiiv newsletter → consider adding main site, one-pager, BS Radar, Magic Picker.
- **"Delete Brain Fog"** (5INcRpmJabQ) → strongest recommendation to rewrite or unlist.
