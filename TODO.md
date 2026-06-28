# TODO

## Set up a private "brain" repo for CLAUDE.md + private files

**Goal:** Sync `CLAUDE.md` and the `private/` folder across machines (basement,
cloud sessions, future laptops) without exposing them in the public StratCatAI
repo. Result: "clone it and Claude already knows me" on any machine, nothing
repeated.

**Why not just un-ignore CLAUDE.md here:** the `stratcatai/StratCatAI` repo is
**public**, so committing `CLAUDE.md` would make its contents visible to anyone
on the internet. Keep private context in a separate private repo instead.

### Steps

1. **Create a new PRIVATE GitHub repo** (e.g. `stratcat-private` or
   `stratcat-brain`). Visibility: Private.

2. **Move private files into it** (from the basement machine):
   ```bash
   git clone git@github.com:stratcatai/stratcat-private.git
   cd stratcat-private
   # copy existing CLAUDE.md and the private/ folder in here
   git add .
   git commit -m "Add CLAUDE.md and private working files"
   git push
   ```

3. **Link CLAUDE.md into the StratCatAI project** so Claude reads it each
   session (symlink stays gitignored in the public repo):
   ```bash
   cd /path/to/StratCatAI
   ln -s ../stratcat-private/CLAUDE.md CLAUDE.md
   ```

4. **On any new machine**, reproduce the setup:
   ```bash
   git clone <public StratCatAI repo>
   git clone <private brain repo>
   # recreate the symlink (step 3)
   ```

### Notes / decisions to make
- Symlink (cleanest) vs. manual copy of CLAUDE.md — pick one.
- Optionally also keep shared, non-sensitive prefs in `~/.claude/CLAUDE.md`
  (applies across all projects, never touches any repo).
