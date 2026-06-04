# Operations log

Append-only. Newest entries at the bottom. Each ingest / lint run records what changed.

## 2026-06-03 — Scaffold created

- Initialized the wiki: Material for MkDocs config, `CLAUDE.md` schema, conventions page.
- Seeded the **Emotional Intelligence** section with 6 `source: cited` notes plus a cluster map and backlog.

## 2026-06-03 — Ingest: Mu 姐 dating collection 6.0

- **Source** archived at `sources/relationships/mujie-dating-collection-6.0.pdf` (79 pp, Chinese dating/marriage coaching).
- **Value-rule call:** skipped pp. 1–6 (author marketing + success-story screenshots — survivorship bias, no content). Captured 资料一 "脱单渠道大全" as one framework note.
- Created section **`relationships/`** (tier: `draft-with-review`). New note `where-to-meet-partners.md` — `source: cited`, `confidence: low`, **DRAFT — awaiting review** — with a worldview/evidence caveat and an EQ cross-link.
- Updated home catalog + `nav`; added `relationships/` to the CLAUDE.md autonomy table.
- **Backlog** (same source, un-ingested): mate-selection-by-archetype (资料二), texting (聊天), progression (推进), marriage (婚姻), plus an EQ counterweight note.
- `mkdocs build --strict`: pass.

## 2026-06-03 — Ingest (full): Mu 姐 dating collection 6.0

- User endorsed the resource and asked for a full ingest. Read all 79 pp.; the document is five 资料
  sections built on one recurring "value-exchange" worldview, ending in a paid-consult sales pitch.
- Added **5 notes** under `relationships/` (all `source: cited`, `confidence: low`, with targeted caveats):
  `the-value-exchange-model` (the worldview + its limits — the anchor), `partner-archetypes` (资料二),
  `texting-and-conversation` (资料三), `infidelity-prevention` (资料四, stats fact-checked), and
  `marriage-and-financial-power` (资料五).
- **Critical handling:** flagged pop evo-psych and pop-psychoanalysis as storytelling; separated genuine
  rapport/communication skill from manipulation (push-pull, faked mistakes); fact-checked the infidelity
  statistics (academic 潘绥铭 figure vs. unreliable online poll); noted where the marriage advice
  actually *converges* with the EQ/Gottman research and cross-linked it.
- Dropped the per-note DRAFT banner on `where-to-meet-partners` for consistency (source now endorsed).
- Updated section Map (source fully ingested), `nav`, and backlog (now: an avoidant-attachment EQ note +
  a `source: me` EQ-vs-value-exchange counterweight).
- `mkdocs build --strict`: pass.
