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

## 4. Posting policy & per-section flags

**Default posture: autonomous — post directly.** Claude may research, draft, finalize, and **publish**
(commit + push, §9) in every section, with **no draft-review gate** (Ronald's directive, 2026-06-08).
Don't mark notes DRAFT and don't wait for sign-off.

The honesty & safety rules are **not** a gate and still bind:

- `cited` needs a **real** citation — **never fabricate** sources. Disputed science wears a `contested`
  "Contested" admonition. **Never author `source: me`** (only Ronald does).
- Respect the **value rule** (§2) and each section's **coverage** tier (§5).
- Apply the section's **standing flags** below.

### Standing flags (apply where relevant)

- `wealth-structuring/` — mark **legal avoidance vs. illegal evasion** (never an evasion how-to); US-centric, not advice.
- `lookism/` — emphasize **controllable/healthy** levers; **flag blackpill / body-dysmorphia**; never promote dangerous procedures.
- `health/` — **not medical advice**; flag ***Why We Sleep* overreach** and Attia's practitioner protocols as opinion.
- `upper-chest/` — flag **EMG ≠ hypertrophy** (muscle activation is an acute proxy, not proof of growth); not medical advice.
- `relationships/` · `connection/` · `body-language/` — flag worldview / myths / overreach; soft claims need a cited source.
- `decision-making/` · `learning/` — flag **replication-contested** claims and myths (e.g. learning styles).
- `friendship/` — flag the contested **Dunbar-number** dispute.
- `success/` — flag as **practitioner opinion / survivorship bias**, not evidence.
- `startups/` — lead with **ideas & debates, not book summaries**; flag contested framings.
- `humor/` — flag evo-psych / attraction claims as **speculative**.
- `habits/` — flag practitioner frameworks vs. evidence and the **21-day myth**.
- `focus/` — flag Newport's **thesis** and the **"dopamine detox"** myth as contested.
- `goals/` — Ronald's `source: me` synthesis: Claude **files/formats only, authors no claims**; keep identifying personal/financial specifics out.

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
| `wealth-structuring/` | `anchors` (load-bearing strategies only) |
| `lookism/` | `thorough` (science + controllable levers + skin subsection) |
| `gym/` | `anchors` (the fundamentals) |
| `relationships/` | source-bounded (covers the ingested source; otherwise `anchors`) |
| `friendship/` | `anchors` (capacity, formation, why-it-matters) |
| `decision-making/` | `anchors` (the non-obvious, load-bearing parts) |
| `goals/` | `anchors` (the plan, the math, the edge, the risks) |
| `learning/` | `thorough` (the evidence-based study map + myths) |
| `startups/` | `thorough` (the Zero to One canon + the key debates) |
| `success/` | `thorough` (curated cross-essay ideas; opinion, flagged) |
| `humor/` | `thorough` (theory + craft + social function) |
| `habits/` | `anchors` (the loop + the load-bearing techniques) |
| `focus/` | `anchors` (depth, residue, distraction, scheduling) |
| `health/` | `anchors` (sleep, nutrition, fitness, healthspan) |
| `upper-chest/` | `anchors` (anatomy, angle, exercise selection, programming) |
| *new sections* | `anchors` until Ronald says otherwise |

**"Done" signal:** a section is done-for-now when its Map covers its coverage tier; anything beyond sits
in the **Backlog**, not the Map. Never pad a section to feel complete (value rule, §2).

### Home page

- **`docs/index.md` is just the four-domain map** — a clean index of the domains and their sections, nothing
  else. The "what this wiki is / how to read it" description lives in §1–§3 here and in
  `docs/about/conventions.md`; **do not** put it back on the front page.
- **Personal-focus layer removed (2026-06, privacy).** The site is public, so the old "🎯 What I'm working
  on" home dashboard and the per-note `focus` tags + `!!! danger "🎯 Personal focus"` admonitions were
  removed — they disclosed what Ronald is personally working on. **Do not re-add personal or confessional
  content to the published site.** If a focus tracker is ever wanted, keep it private (local-only or a gated
  page), never on the public wiki.

## 6. Operation — INGEST

Run when Ronald says "ingest" or drops material into `inbox.md` / `sources/`.

1. Read `inbox.md` and any new files under `sources/`. Treat `sources/` as immutable.
2. For each item, apply the **value rule** (§2). If it fails, propose dropping it — ask, don't pad.
3. Classify into a section + cluster. If a near-duplicate note exists, **merge / enrich** rather than
   create a new one (dedup).
4. **Post directly** (§4): research, draft, finalize, and publish. Use `cited` with a **real** source
   (never fabricate); set confidence honestly (`contested` where due); apply the section's standing
   flags. Exception: `goals/` stays Ronald's `source: me` — file/format only, author no claims.
5. Fill the template at the **§5 depth default (lean / one-screen)**: TL;DR, body, How to apply, **real**
   Sources (never fabricate citations), Related (with reciprocal backlinks). Stay within the section's
   **coverage** tier (§5) — don't expand beyond it.
6. Update `docs/<section>/index.md` (move the item from Backlog into the Map) and the home catalog in
   `docs/index.md` if a new section appeared.
7. Add the page to `nav:` in `mkdocs.yml`.
8. Clear the consumed item from `inbox.md`.
9. Append a dated entry to `log.md`: what was ingested, where filed, provenance, open questions.
10. Run `mkdocs build --strict`; it **must pass**. Then **publish** (commit + push, §9) — the default now.

## 7. Operation — LINT

Run periodically or when Ronald says "lint." Produce a report; apply only fixes the tier permits.

1. **Dead links / nav:** run `mkdocs build --strict`; resolve every broken-link and missing-from-nav warning.
2. **Orphans:** find notes not reachable from any index/nav, or with zero inbound "Related" links.
3. **Missing cross-links:** same-cluster notes that should reference each other but don't.
4. **Stale claims:** notes with old `updated:` dates or time-sensitive content; flag for review.
5. **Contradictions:** surface conflicting claims across notes — **do not silently pick a winner.**
6. **Provenance hygiene:** any `source: claude` note lingering unreviewed → remind Ronald to verify/cite.
7. **Confidence audit:** any `confidence: contested` note missing its "Contested" admonition.
8. Write findings as a dated `log.md` entry, then **apply fixes directly and publish.** Exception:
   `goals/` (Ronald's `source: me`) — don't author personal claims; ask first.

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
