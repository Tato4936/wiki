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

## 2026-06-03 — Ingest (full): Emotional Intelligence backlog

- Wrote **14 `source: cited` notes** clearing the entire EQ section backlog, across clusters A–F: Goleman
  mixed model, Trait EI (Petrides), Bar-On / EQ-i, MSCEIT (Models of EI); Theory of constructed emotion,
  Alexithymia (Awareness); Empathy types, Theory of mind, Emotional contagion, Mirror neurons (Empathy);
  Active listening (Rogers), Nonviolent Communication (Applied); Polyvagal theory, Marshmallow test
  (Contested classics).
- Each carries real citations and calibrated confidence; the contested/⛔ items (mirror neurons, polyvagal,
  marshmallow, plus the constructed-emotion debate) carry "Contested" admonitions explaining *why*, rather
  than asserting them.
- Moved every item from the `eq/index.md` Backlog into the linked Map; added all 14 to `nav`.
- Backlog now effectively empty (one cross-section item remains: a dedicated avoidant-attachment note).
- `mkdocs build --strict`: pass.

## 2026-06-04 — New section: Connection & rapport

- Ronald wanted more **applied interpersonal** technique (like the active-listening note) — "make people
  like me / bring relationships closer," incl. book techniques like Voss's "It seems like…".
- Created section **`connection/`** (tier: `draft-with-review`; coverage: `thorough`) with **10 cited
  notes**: labeling, mirroring, calibrated questions (Voss); active-constructive responding (Gable); the
  36 questions (Aron); ask follow-up questions (Huang et al.); lead with warmth (Fiske/Cuddy); genuine
  interest (Carnegie); validation (Linehan/DBT); bids for connection (Gottman).
- Lean depth, real citations, cross-linked to EQ (active listening, affect labeling, empathy, NVC,
  Gottman). Backlog: vulnerability loop, similarity/mere-exposure, Franklin/pratfall effects, Cialdini
  liking, specific compliments.
- Updated home catalog, `nav`, and the CLAUDE.md autonomy + coverage tables.
- `mkdocs build --strict`: pass.

## 2026-06-04 — Ingest: all section backlogs

- Connection backlog (6): vulnerability loop (Coyle/Brown), similarity & mere exposure (Zajonc/Moreland),
  the Franklin effect (Jecker & Landy), the pratfall effect (Aronson), Cialdini's liking principle,
  specific compliments (Boothby & Bohns + Carnegie). Connection map gained a 4th cluster ("the quieter
  forces"); backlog now caught up.
- EQ/Relationships shared item: wrote **Attachment styles** (`eq/attachment-styles.md`; Hazan & Shaver,
  Bartholomew & Horowitz) — secure / anxious / avoidant / fearful; linked from Partner archetypes.
- **Skipped** the relationships "EQ counterweight" item — it's `source: me`, Ronald's to author.
- Updated eq/index + relationships/index backlogs, `nav`, and the partner-archetypes backlink.
- `mkdocs build --strict`: pass.

## 2026-06-04 — New section: Body language

- Ronald asked to add body language. Created section **`body-language/`** (tier: `draft-with-review`;
  coverage: `thorough`) with **9 cited notes**, deliberately leading with myth-busting since the topic is
  myth-heavy.
- Myths (⛔): the "93% nonverbal" Mehrabian misquote, power posing (failed replication / author walk-back),
  lie-detection from body language (~54% accuracy). Rapport (✅): nonverbal synchrony / chameleon effect,
  open body-language / immediacy cluster, the Duchenne smile, eye contact. Channels (✅): vocal tone
  (paralinguistics), proxemics.
- Cross-linked to Connection (mirroring, lead-with-warmth, 36 questions, labeling) and EQ (emotional
  contagion, theory of mind). Backlog: microexpressions, thin-slicing, gestures & culture, haptics,
  embodiment.
- Updated home catalog, `nav`, and the CLAUDE.md autonomy + coverage tables.
- `mkdocs build --strict`: pass.

## 2026-06-04 — New section: Wealth & tax structuring

- Ronald asked for corporate-finance / "how the rich structure money to minimize tax" content (buy-borrow-
  die; running personal spend through a company / 报销).
- Created section **`wealth-structuring/`** (tier: `draft-with-review`; coverage: `anchors`) with **8 cited
  notes**: avoidance vs. evasion (the legal line — anchor), buy-borrow-die, stepped-up basis, capital vs.
  labor income, carried interest, business expenses & the line, holding companies, trusts & estate planning.
- **Handled responsibly:** documents *legal avoidance* (sourced — ProPublica, IRC sections); the one
  genuinely-illegal ask (报销-ing personal spending) is framed as the **line** between legitimate business
  deductions and tax fraud, explicitly *not* an evasion how-to. Flagged US-centric, not advice, law changes.
- Backlog: QSBS, 1031, depreciation/real estate, donor-advised funds, opportunity zones, estate/gift tax,
  offshore.
- Updated home catalog, `nav`, and the CLAUDE.md autonomy + coverage tables.
- `mkdocs build --strict`: pass.

## 2026-06-04 — Connection & rapport: high-quality expansion (+9)

- Ronald asked to keep ingesting high-quality Connection material. Added **9 cited notes** from top
  sources: perceived partner responsiveness (Reis/Gable — new "core" anchor), the matching principle &
  looping for understanding (Duhigg, *Supercommunicators*), support-vs-shift response (Derber),
  contrasting (*Crucial Conversations*), intent-vs-impact (*Difficult Conversations*), affectionate
  teasing (Keltner), the peak-end rule (Kahneman), self-expansion (Aron).
- Reorganized the section map into 6 clusters (added **The core** and **When it gets tense — repair**);
  reordered `nav` to match so Prev/Next reads logically. Section now ~25 notes.
- Refreshed backlog: gratitude (Algoe), accusation audit, "that's right" vs "you're right", getting to
  "no", saving face (Goffman), the Michelangelo phenomenon, the five love languages (⚠️).
- `mkdocs build --strict`: pass.

## 2026-06-04 — New sections: Lookism & appearance, The gym

- Ronald asked for a big lookism section (+ skin subsection) and a gym section.
- **`lookism/`** (tier: `draft-with-review`; coverage: `thorough`) — 9 notes + a nested **`lookism/skin/`**
  subsection (3 notes). Science (halo effect, beauty premium, what's attractive), the controllable-vs-fixed
  frame, levers (grooming, style/fit, body composition, the unsexy basics), and **the blackpill trap** —
  a mental-health-aware note flagging the determinism / body-dysmorphia / dangerous-procedure side rather
  than feeding it. Skin = evidence-based minimalist routine (basics, sunscreen [RCT], retinoids).
- **`gym/`** (tier: `draft-with-review`; coverage: `anchors`) — 7 notes: consistency & progressive overload
  (anchor), building muscle (Schoenfeld), getting stronger, a beginner program, form & injuries, protein &
  nutrition (Morton; creatine), recovery & sleep.
- **Handled responsibly:** lookism leads with controllable/healthy + flags the toxic; no dangerous-procedure
  or determinist content presented as valid.
- Updated home catalog, `nav` (skin nested under lookism), and the CLAUDE.md autonomy + coverage tables.
- `mkdocs build --strict`: pass.
