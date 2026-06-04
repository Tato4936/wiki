# CLAUDE.md — operating manual for this wiki

This file is the **schema**: the rules Claude follows to maintain this wiki reliably. Read it fully
before editing anything. It is not published to the site.

## 1. What this repo is

A personal **"LLM Wiki"** (after Karpathy's pattern): interlinked Markdown notes, rendered with
Material for MkDocs, maintained collaboratively. Three layers:

1. **`sources/`** — raw, immutable curated material (the source of truth). Never edited after it lands.
2. **`docs/`** — the wiki itself: distilled, interlinked notes. The only thing published.
3. **`CLAUDE.md`** (this file) — the schema defining structure and workflows.

Plus **`docs/index.md`** (the catalog) and **`log.md`** (append-only history of operations).

The division of labor is the whole point:

- **Human (Ronald):** chooses topics, curates sources, supplies judgment and synthesis, approves merges.
- **Claude:** the *bookkeeping* — filing, formatting, cross-linking, deduplication, index/log upkeep,
  link and staleness checks — and drafting **only** where a section's autonomy tier allows.

## 2. The value rule (read first — non-negotiable)

The only content that belongs here is knowledge **not already trivially in an LLM's weights.**

- **Banned:** generic encyclopedia summaries, "one-prompt-away" explanations, commodity definitions
  with no synthesis and no citation. If a page could be reproduced by asking any LLM the topic name,
  it does not belong here.
- **Valued:** (a) Ronald's own synthesis [`source: me`], and (b) faithfully absorbed *specific*
  sources, with citations [`source: cited`].
- When unsure whether material clears this bar, **ask** — do not pad the wiki to look complete.

## 3. Provenance system

Every note declares `source:` in its front matter:

- `source: me` — Ronald's own synthesis. Highest trust. **Claude never invents or writes this**; only
  Ronald authors `me` content (Claude may format it).
- `source: cited` — faithful absorption of a *specific named source*, **with a real citation**.
  Medium–high trust.
- `source: claude` — LLM-generated, unverified. **Lowest trust.** Must be visibly marked DRAFT and
  never promoted to `cited`/`me` without (a) a real source and (b) Ronald's review.

Confidence scale: `high` | `medium` | `low` | `contested`. A `contested` note **must** carry a
`!!! warning "Contested"` admonition whose job is to explain the dispute, not assert the claim.

## 4. Per-section autonomy tiers

How much Claude may do **without Ronald**, per section. Autonomy scales with how externally
**verifiable** a topic is — soft / contested domains stay supervised.

| Section | Tier | Claude may… |
|---------|------|-------------|
| `eq/` (Emotional Intelligence) | `draft-with-review` | research + draft notes as **DRAFT** (`source: claude`, or `cited` with a real source); **never auto-merge**; Ronald reviews and sets final provenance. |
| `relationships/` | `draft-with-review` | draft from a **specific cited source** as **DRAFT**; flag worldview + lack of evidence; **never auto-merge**; Ronald reviews and sets final provenance. |
| `connection/` (Connection & rapport) | `draft-with-review` | draft applied techniques from **specific cited sources** (books / research) as **DRAFT**; **never auto-merge**; Ronald reviews and sets final provenance. |
| `body-language/` (Body language) | `draft-with-review` | draft from **specific cited sources** as **DRAFT**; flag myths / overreach explicitly; **never auto-merge**; Ronald reviews and sets final provenance. |
| *future* soft topics (`success/`) | `structure-only` | only file/format what Ronald dropped in `inbox.md`; **author no claims**. |
| *future* externally-checkable topics (e.g. tool/reference docs) | `autonomous` | research, draft, and finalize. |

Rule of thumb: **start manual; ratchet a section UP only after its output has earned trust.** Default
new sections to `structure-only` or `draft-with-review`, never `autonomous`.

## 5. Note format, depth & coverage

- Follow the canonical template in `docs/about/conventions.md` exactly (front matter, TL;DR, a visible
  provenance/confidence line, What it is, How to apply, Sources, Related).
- **Links are relative Markdown links** to the `.md` file (e.g. `[Affect labeling](affect-labeling.md)`),
  never `[[wikilinks]]`. Relative links are validated by `mkdocs build --strict`.
- **Every new note must be added to `nav:` in `mkdocs.yml`**, or it won't appear in the sidebar (and
  `--strict` will warn).
- Add **reciprocal backlinks**: if note A links to B, add A to B's "Related" too.
- Never link to unpublished files (`CLAUDE.md`, `sources/`, `log.md`) from a `docs/` page — it breaks
  the strict build.

### Depth (how much a note says) — default: **lean / one-screen**

- A note is a **reference card, not an essay.** Target: a stand-alone TL;DR + a body of roughly
  **150–400 words** + a concrete "How to apply." If it grows past ~one screen, **split it or cut** — do
  not expand.
- Explain the **core mechanism + the single most important nuance/caveat**, then **link out** instead of
  covering every sub-finding. Breadth comes from *more linked notes*, not longer ones.
- This matches the wiki's whole point (lean, low-weight, cp-algorithms-style). When in doubt, shorter.

### Granularity (one note or many) — default: **atomic**

- **One concept per note.** Split when a note carries two separable "How to apply" payloads, or when you'd
  ever want to link to *just one half* of it. Merge when a sub-concept can't stand on its own.

### Coverage (how exhaustive a section gets) — default: **anchors**

Set per section, like the autonomy tier (§4). Levels:

- `anchors` *(default for new sections)* — only the **load-bearing concepts you'd actually use**, then
  stop. Keeps sections small and honors the value rule.
- `thorough` — the **full standard map** a practitioner should know.
- `exhaustive` — everything, incl. niche / historical / contested. Use sparingly; high filler risk.

| Section | Coverage |
|---------|----------|
| `eq/` | `thorough` (the full EI map) |
| `connection/` | `thorough` (applied-technique map; breadth requested) |
| `body-language/` | `thorough` (myth-busting + rapport map) |
| `relationships/` | source-bounded (covers the ingested source; otherwise `anchors`) |
| *new sections* | `anchors` until Ronald says otherwise |

**"Done" signal:** a section is done-for-now when its Map covers its coverage tier; anything beyond sits
in the **Backlog**, not the Map. Never pad a section to feel complete (value rule, §2).

## 6. Operation — INGEST

Run when Ronald says "ingest" or drops material into `inbox.md` / `sources/`.

1. Read `inbox.md` and any new files under `sources/`. Treat `sources/` as immutable.
2. For each item, apply the **value rule** (§2). If it fails, propose dropping it — ask, don't pad.
3. Classify into a section + cluster. If a near-duplicate note exists, **merge / enrich** rather than
   create a new one (dedup).
4. Honor the section's **autonomy tier** (§4):
   - `structure-only`: file and format only; author no new claims.
   - `draft-with-review`: create the note as a visible **DRAFT** (`source: claude`, or `cited` if a
     real source is attached); set confidence honestly; do **not** merge silently.
   - `autonomous`: may research, draft, and finalize.
5. Fill the template at the **§5 depth default (lean / one-screen)**: TL;DR, body, How to apply, **real**
   Sources (never fabricate citations), Related (with reciprocal backlinks). Stay within the section's
   **coverage** tier (§5) — don't expand beyond it.
6. Update `docs/<section>/index.md` (move the item from Backlog into the Map) and the home catalog in
   `docs/index.md` if a new section appeared.
7. Add the page to `nav:` in `mkdocs.yml`.
8. Clear the consumed item from `inbox.md`.
9. Append a dated entry to `log.md`: what was ingested, where filed, provenance, open questions.
10. Run `mkdocs build --strict`; it **must pass** before reporting done.

## 7. Operation — LINT

Run periodically or when Ronald says "lint." Produce a report; apply only fixes the tier permits.

1. **Dead links / nav:** run `mkdocs build --strict`; resolve every broken-link and missing-from-nav warning.
2. **Orphans:** find notes not reachable from any index/nav, or with zero inbound "Related" links.
3. **Missing cross-links:** same-cluster notes that should reference each other but don't.
4. **Stale claims:** notes with old `updated:` dates or time-sensitive content; flag for review.
5. **Contradictions:** surface conflicting claims across notes — **do not silently pick a winner.**
6. **Provenance hygiene:** any `source: claude` note lingering unreviewed → remind Ronald to verify/cite.
7. **Confidence audit:** any `confidence: contested` note missing its "Contested" admonition.
8. Write findings as a dated `log.md` entry. In `draft-with-review` / `structure-only` sections, **ask
   before content changes.**

## 8. Verification (always, after any change)

```bash
source venv/bin/activate
mkdocs build --strict     # must exit 0
```

`--strict` is the safety net: it fails on broken internal links and on any doc missing from `nav`.

## 9. Deployment & hosting

The site is **live and auto-deploys**: every push to `main` runs `.github/workflows/deploy.yml`,
which builds with `mkdocs build --strict` and publishes to GitHub Pages.

- **Live URL:** <https://tato4936.github.io/wiki/>
- **Repo:** `github.com/Tato4936/wiki` (public, pseudonymous — deliberately **not** under the main
  `rliu4936` account).
- **`noindex`:** `overrides/main.html` adds a `robots: noindex` tag (kept out of search results).
- **Source PDFs stay local:** `sources/**/*.pdf` is git-ignored; raw material is never published.

### GitHub account switching (IMPORTANT before any push)

This repo lives under the **`Tato4936`** account, but `gh` may be active as `rliu4936` (the main
account). Before pushing, make `Tato4936` active; switch back when done:

```bash
gh auth switch -u Tato4936     # before pushing the wiki / any gh op on this repo
git push                       # triggers the auto-deploy
gh auth switch -u rliu4936     # back to the main account afterwards
```

Both accounts stay logged in; this only flips which one git/gh uses. A push that fails with a
permissions / 403 error almost always means the wrong account is active — switch and retry.

## 10. Future (documented, not built yet)

- **Scheduling** Ingest / Lint via cron or the `/schedule` skill (start manual; automate only what has
  earned trust).
- **Private hosting** option: flip the repo to private + gate the site behind Cloudflare Access if it
  should be viewable only by the owner.
- Optional **`[[wikilink]]`** support via `mkdocs-roamlinks-plugin` if authoring ergonomics demand it.
- New sections: corporate & quantitative finance, investing, success.
