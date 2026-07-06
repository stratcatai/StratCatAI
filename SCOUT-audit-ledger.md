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

_(Empty — the first weekly run fills this in.)_

| Video ID | Title | Last audited | Status | Notes |
|----------|-------|--------------|--------|-------|
|          |       |              |        |       |
