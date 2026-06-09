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

## 2026-06-04 — New sections: Friendship, Judgment & decision-making

- Ronald asked to "ingest stuff on friends" (Dunbar / how many friends you can have) and add a
  decision-making section (Kahneman — *Thinking, Fast and Slow*, *Noise* — plus the broader field).
  Sourced via a deep-research pass: Part 1 (friendship) was adversarially fact-checked against primary
  papers; Part 2 (decision-making) was verified against named sources after a web-search limit cut a
  second harness run short.
- Created section **`friendship/`** (tier: `draft-with-review`; coverage: `anchors`) with **5 cited
  notes**: `dunbars-number` (contested — the ~150 figure is an extrapolation; Lindenfors 2021 vs. Dunbar's
  rebuttal), `friendship-layers` (the replicated ~×3 nested structure), `hours-to-make-a-friend` (Hall
  2019: 50/90/200h), `seven-pillars-of-friendship` (Dunbar 2018 homophily), `friendship-and-longevity`
  (Holt-Lunstad — ~50% survival, "like quitting smoking").
- Created section **`decision-making/`** (tier: `draft-with-review`; coverage: `anchors`) with **4 cited
  notes**: `noise-vs-bias` (*Noise* — the 55% insurance audit; decision hygiene), `thinking-fast-and-slow-
  replication` (contested — the priming chapter's R-index ~14, Kahneman's 2017 "underpowered studies"
  concession, the ego-depletion RRR), `superforecasting` (Tetlock — foxes > hedgehogs, perpetual beta),
  `ecological-rationality` (contested — Gigerenzer's counter-case).
- **Value-rule calls:** kept only cited / non-obvious material; pushed generic textbook items (System 1/2,
  anchoring, prospect theory, Nudge, the outside view) to the decision-making **Backlog** rather than
  writing encyclopedia notes. Friendship backlog: decay/contact rhythm, sex differences, life-course,
  online friendship, *Platonic*.
- Cross-linked into EQ (marshmallow test) and Connection (peak-end rule, similarity & mere exposure, the 36
  questions) with reciprocal backlinks.
- Updated home catalog, `nav`, and the CLAUDE.md autonomy + coverage tables.
- `mkdocs build --strict`: pass (exit 0, no broken-link / nav warnings).
- **Not yet committed or pushed** — left in the working tree for Ronald's review (provenance still `cited`,
  the two contested notes carry "Contested" admonitions; nothing promoted to `me`). Pushing would
  auto-deploy the public site, so it's held pending sign-off.

## 2026-06-04 — New section: Goals (anonymized & published)

- Ronald asked for a personal-goals section (wealth-building), tailored to his background. Gathered the
  relevant parameters via AskUserQuestion (quant/AI background, graduate quant-finance training, access to
  patient capital + fundamental mentorship, an investing path, steady ~20–30-yr horizon, an ambitious target).
- Created section **`goals/`** (tier: `structure-only`; coverage: `anchors`) with an index + **4 notes**,
  all **`source: claude` DRAFT** (personal goals are `source: me` — Ronald's to own; seeded a first draft
  at his explicit request): `the-plan` (two engines — compound the owned base + scale external AUM/carry),
  `the-compounding-math` (CAGR tables, FX-stated, the headline insight), `the-quantamental-edge`
  (quant/AI + fundamental network + permanent capital), `honest-odds-and-risks` (own-vs-manage, currency,
  key-person risk, realism).
- One-directional cross-links out to `decision-making/` and `wealth-structuring/` (reciprocal backlinks
  left as a follow-up).
- **PRIVACY:** the first draft held personal/financial specifics; per Ronald's choice it was **anonymized**
  for publication — identifying details (relation, amounts, school, project name) replaced with generic
  placeholders, the local-only gitignore removed, then committed + pushed. `mkdocs build --strict`: pass.

## 2026-06-04 — New section: Learning

- Ronald asked for an evidence-based "how to best learn" section (active recall, interleaving,
  structure-first, etc.).
- Created section **`learning/`** (tier: `draft-with-review`; coverage: `thorough`) with an index + **9
  cited notes**, as a principle → techniques → encoding → metacognition/myths map: `desirable-difficulties`
  (Bjork; performance ≠ learning — the anchor); `retrieval-practice`, `spaced-repetition`, `interleaving`
  (the high-utility trio — Roediger/Karpicke, Cepeda, Rohrer; Dunlosky's top-rated); `elaboration-and-self-
  explanation`, `structure-first` (advance organizers/schemas), `dual-coding` (deeper encoding); `the-
  fluency-illusion` (rereading/highlighting = low utility) and `learning-styles-myth` (contested — Pashler
  2008).
- Real citations throughout; the contested/myth items carry "Contested"/honest admonitions. One cross-link
  to decision-making (fluency illusion ↔ cognitive ease) with a reciprocal backlink. Backlog: deliberate
  practice, generation effect, cognitive load / worked examples, sleep & consolidation, handwriting-vs-
  laptop notes, metacognitive planning.
- Updated home catalog, `nav`, and the CLAUDE.md autonomy + coverage tables. `mkdocs build --strict`: pass.
  Published (committed + pushed).

## 2026-06-06 — Ingest: Visible effort (connection/)

- Ronald asked to add something to the interpersonal section about "being effortful and showing" it.
- New note `connection/visible-effort.md` — **first `source: claude` DRAFT** in the wiki (`draft-with-review`
  tier), `confidence: medium`, with a "🚧 Draft — pending review" admonition. One atomic concept: effort
  as a **costly signal** of caring (Zahavi handicap logic) × the **effort heuristic** (Kruger et al. 2004) —
  so *perceived* effort is what counts — with the flip caveat **show the care, not the cost** (announcing
  sacrifice / humblebragging backfires — Sezer et al. 2018).
- Cross-linked with reciprocal backlinks into perceived-partner-responsiveness (its "show it, don't just
  feel it" line is the same principle), specific-compliments, vulnerability-loop, bids-for-connection.
- Added to the section Map (flagged 🚧 draft) and `nav`.
- **Provenance honesty:** the 3 cited papers are real/well-established but drawn from background knowledge,
  not freshly read — left as `source: claude` for Ronald to verify and promote to `cited`/`me`.
- `mkdocs build --strict`: pass (exit 0, no broken-link / nav warnings).
- **Not committed or pushed** — held in the working tree pending review.

## 2026-06-06 — Restructure: 4 top-level domains (nav only)

- The wiki felt cluttered at the top level (12 flat sections / 124 notes). Regrouped the nav into **4 life
  domains** — **People** (EQ, Connection, Body language, Friendship, Relationships), **Mind** (Judgment &
  decision-making, Learning), **Body** (Lookism, Gym), **Money & ambition** (Wealth-structuring, Goals) —
  plus Home / About / Tags. Switched the sidebar feature `navigation.sections` → `navigation.tabs`, so the
  four domains render as top tabs and each section collapses cleanly underneath.
- **No files moved** — purely navigational grouping, so zero URL/link changes (folder paths unchanged, so
  the CLAUDE.md folder-keyed tier tables stay valid). Rewrote `docs/index.md` to mirror the four domains.
- `mkdocs build --strict`: pass (125 pages; no missing-from-nav or broken-link warnings). Committed + pushed.
- **Deferred (Approach B):** sharpen the EQ↔Connection boundary, cross-link `affect-labeling`↔`labeling`,
  add one-line scope statements to the Friendship / Relationships / Connection indexes.

## 2026-06-06 — New section: Startups & strategy

- Ronald asked to add *Zero to One* + "a lot of related books, theory, and concepts."
- **Value-rule call (§2):** rather than dump one-prompt-away book summaries, built a curated,
  **idea/debate-centric** section under the **Money & ambition** domain. Created **`startups/`** (tier:
  `draft-with-review`; coverage: `thorough`) with an index + **10 cited notes**: `monopoly-vs-competition`
  (anchor), `the-power-law`, `secrets-and-the-contrarian-question`, `definite-vs-indefinite-optimism`
  (⚠️ incl. the Lean Startup tension), `the-seven-questions`, `start-small-and-monopolize`,
  `distribution-and-sales`, `moats` (Porter/Buffett), `network-effects-and-increasing-returns`
  (Arthur/Metcalfe), `disruption-and-its-critics` (⚠️ Christensen + Lepore + Thiel). Anchored on Zero to
  One; broadened to the canon and the live debates.
- All `source: cited` from named books — but drawn from **background knowledge, not freshly re-read**;
  recommend Ronald skim to verify and promote his own takes to `me`. Contested notes carry admonitions.
- One-directional cross-links into `goals/` (compounding-math, quantamental-edge). Backlog: 7 Powers
  (Helmer), Lean Startup own-note, Jobs-to-be-Done, Blue Ocean, aggregation theory, "do things that don't
  scale", founder/team dynamics.
- Updated home catalog, `nav` (nested under Money & ambition), and the CLAUDE.md autonomy + coverage tables.
  `mkdocs build --strict`: pass. Published (committed + pushed).

## 2026-06-06 — New section: Success & leverage

- Ronald asked to add Sam Altman's *How to Be Successful* + "similar high-quality blogs."
- **Faithfully fetched** the two primary sources (blog.samaltman.com/how-to-be-successful; nav.al/rich)
  rather than summarizing from memory; Graham (*How to Do Great Work*) and Housel (*Psychology of Money*)
  from background knowledge.
- **Value-rule call (§2):** the most one-prompt-away genre there is, so curated to **specific, non-obvious,
  cross-essay ideas** and dropped the generic Altman points (work hard / be bold / focus / be willful).
  Created **`success/`** under **Money & ambition** (tier upgraded from the pre-planned `structure-only` to
  `draft-with-review`, since Ronald commissioned cited content; coverage `thorough`) with an index + **10
  notes**: `compound-yourself`, `leverage` (labor/capital/code & media), `own-things-not-time`,
  `specific-knowledge`, `productize-yourself`, `pick-what-to-work-on` (Graham), `independent-thinking-and-
  conviction`, `asymmetric-bets`, `long-term-games`, `psychology-of-money` (Housel).
- All `source: cited`; index carries a **"philosophy, not evidence — survivorship bias"** caveat. Richly
  cross-linked into startups/, goals/, wealth-structuring/, learning/, friendship/, connection/, and
  decision-making/. Reciprocal backlinks left as a follow-up.
- Replaced the §4 `success/` placeholder row, added the §5 coverage row, updated home catalog + `nav`.
  `mkdocs build --strict`: pass. Published (committed + pushed).

## 2026-06-06 — New section: Humor

- Followed from a chat thread on improving the "sense of humour" friendship pillar; Ronald asked for a
  dedicated section.
- Created **`humor/`** under the **People** domain (tier: `draft-with-review`; coverage: `thorough`) with
  an index + **8 notes**, structured theory → craft → social function → practice: `benign-violation-theory`
  (McGraw & Warren — the anchor), `classic-theories` (incongruity/superiority/relief ⚠️), `the-craft`
  (timing, rule of three, callbacks, misdirection), `humor-styles` (Martin's HSQ — affiliative/self-
  enhancing vs. aggressive/self-defeating), `self-deprecation` (targets; punching up vs. down), `shared-
  laughter-and-bonding` (Provine — appreciation ≥ production), `humor-and-attraction` (⚠️ evo-psych —
  flagged speculative), `how-to-get-funnier` (improv + input + practice; McGhee humor-training evidence).
- All `source: cited` (McGraw & Warren, Martin, Provine, Bressler/Miller, McGhee); the attraction note is
  explicitly flagged as speculative evo-psych. Cross-linked into connection/ (affectionate-teasing,
  pratfall, lead-with-warmth), friendship/ (seven pillars — humour is one), eq/ (emotional contagion),
  success/ (specific knowledge). Reciprocal backlinks left as a follow-up.
- Updated home catalog, `nav` (under People, after Connection), and the CLAUDE.md autonomy + coverage
  tables. `mkdocs build --strict`: pass. Published (committed + pushed).

## 2026-06-06 — Personal-focus flags (personalization)

- Ronald wanted to mark the notes he's actively working on, to "pay extra attention." Introduced a
  lightweight **personal-focus** convention: a `focus` tag (auto-aggregates on the Tags page) + a prominent
  `!!! danger "🎯 Personal focus — working on this"` admonition carrying a personalized, goal-framed cue.
- Flagged **3 notes** matching his stated growth areas: `connection/support-vs-shift-response` (his
  conversational-narcissism / shift-response default), `eq/gottman-ratio-and-four-horsemen` (defensiveness
  → take responsibility), `connection/intent-vs-impact` (the instant malice-into-impact reflex that fires
  his defensiveness).
- Cues are first-person and **goal-framed** (not confessional), so low-sensitivity on the pseudonymous /
  noindex site. `mkdocs build --strict`: pass. Published.
- Offered (not built): a dedicated "Focus" dashboard page; and to localize the focus layer if he'd prefer
  it private.

## 2026-06-06 — Home page → personal dashboard

- Ronald found the front-page "what this wiki is / how to read it" meta blurb useless. Replaced it: the home
  page now **leads with a 🎯 What I'm working on dashboard** (the 3 focus notes + cues), then the four-domain
  map — and nothing else.
- The removed meta description already lives in CLAUDE.md §1–§3 and `docs/about/conventions.md` (nothing
  lost). Documented the convention in CLAUDE.md §5 ("Home page & personal-focus flags"): home = focus
  dashboard + domain map; flagging a note = `focus` tag + 🎯 banner + a home-list line (keep them in sync).
- `mkdocs build --strict`: pass. Published.

## 2026-06-06 — Focus flags (+2): assuming too much

- Ronald flagged a new growth area — **assuming too much in conversation** (the curse of knowledge /
  illusory transparency: leaping to the inferred "obvious" instead of checking it, which closes threads or
  builds on wrong assumptions).
- Flagged the two exact antidotes: `connection/looping-for-understanding` (voice the guess and check before
  building on it) and `connection/ask-follow-up-questions` (ask the obvious question anyway). Added both to
  the home "What I'm working on" list per the convention. Focus dashboard now has **5 items**.
- Offered: a dedicated "curse of knowledge" note (names the problem; currently only the antidotes are in
  the wiki). `mkdocs build --strict`: pass. Published.

## 2026-06-08 — Three new sections: Habits, Focus & deep work, Health & performance

- From a chat thread proposing four growth areas for the wiki. Ronald picked **1, 2, 4** and **declined 3**
  (mental health / resilience — says he's adapted to high stress and isn't worried about burnout). So no
  `resilience/` section was created.
- All three new sections: tier **`draft-with-review`**, coverage **`anchors`**, under the existing domains
  (Habits + Focus → **Mind**; Health → **Body**). Each index carries a **"Drafted — pending review"**
  admonition; all notes are `source: cited` with **real citations** but provenance is **not yet finalized**
  — they're DRAFTs for Ronald to review/correct/promote.
- **`habits/`** (Mind) — index + **6 notes**: `the-habit-loop` (Duhigg/Clear/Graybiel), `implementation-
  intentions` (Gollwitzer 1999; Gollwitzer & Sheeran 2006 meta d≈0.65 — the best-evidenced tactic), `make-
  it-easy-context-design` (Wood — ~43% of behavior is context-cued; Galla & Duckworth), `habit-stacking-
  and-temptation-bundling` (Clear/Fogg; Milkman 2014), `identity-based-habits` (Clear + Bem self-perception;
  flagged practitioner-framework, `medium`), `how-habits-form` (Lally 2010 — median ~66 days; kills the
  21-day myth).
- **`focus/`** (Mind) — index + **4 notes**: `deep-work` (Newport — flagged as thesis, not experiment,
  `medium`), `attention-residue` (Leroy 2009 + Monsell switching cost + Ophir 2009), `time-blocking`
  (Newport; leans on the implementation-intentions evidence base), `distraction-and-dopamine`
  (`confidence: contested` — variable-ratio/Eyal real; **"dopamine detox" flagged as pop-neuroscience**,
  Berridge wanting-vs-liking).
- **`health/`** (Body) — index + **6 notes**: `sleep-the-core` (AASM/NSF 7–9h consensus + Xie 2013
  glymphatic; **Contested admonition on *Why We Sleep* / Guzey critique**), `sleep-regularity-and-circadian`
  (Windred 2024 — regularity > duration; Roenneberg social jetlag), `caffeine-and-adenosine` (Drake 2013;
  Borbély two-process; half-life rule), `nutrition-fundamentals` (Hall 2019 UPF RCT; contested-margins
  caveat), `zone-2-and-vo2max` (Mandsager 2018 JAMA; Attia), `healthspan-vs-lifespan` (Attia four horsemen
  / Centenarian Decathlon — flagged practitioner-opinion).
- **Dedup honored:** Health cross-links the existing `gym/recovery-and-sleep` and `gym/protein-and-nutrition`
  (training angle) and `lookism/the-unsexy-basics` rather than restating them. New sections also cross-link
  `learning/` (focus↔learning; sleep↔memory) and `success/long-term-games`.
- Updated home catalog (Mind +2, Body +1), `nav` (mkdocs.yml), and CLAUDE.md §4 autonomy + §5 coverage
  tables (3 rows each). **Reciprocal backlinks from the existing notes into the new sections left as a
  follow-up** (as with humor/ & success/).
- `mkdocs build --strict`: **pass** (exit 0, no broken-link/nav warnings). **Not yet published** — awaiting
  Ronald's review and an explicit go-ahead to push (needs the `Tato4936` account switch).

## 2026-06-08 — Policy change: post directly (no draft gate) + new section: Upper chest

- **Policy.** Ronald: "remove the draft-with-review thing, just post it directly every time." Flipped the
  maintaining posture to **autonomous / post-directly** in every section — no DRAFT gate, no waiting for
  sign-off. Rewrote **CLAUDE.md §4** (autonomy-tier table → "Posting policy & per-section flags": kept the
  honesty/safety **standing flags** — avoidance-vs-evasion, blackpill, *Why We Sleep*/EMG, contested flags,
  `goals/` `me`-only — dropped the gate). Updated §6 step 4 + step 10 (publish after build) and §7 step 8
  (apply fixes directly), and the published `about/conventions.md` ("How it's maintained" — posts directly).
  Removed the three "Drafted — pending review" banners from `habits/`, `focus/`, `health/` indexes.
  **Guardrails kept:** real citations only, never fabricate, `contested` admonitions, never author `me`.
- **New section `upper-chest/`** (Body, after The gym; coverage `anchors`) — Ronald's stated **#1 training
  goal**. Index + **4 notes**: `clavicular-head-anatomy` (two heads; **regional hypertrophy is real** —
  Antonio 2000), `incline-angle` (Rodríguez-Ridao 2020 — ~30° peaks upper-pec EMG, 45° → delt; Trebs 2010),
  `exercise-selection` (low-to-high line of pull; incline press + low-to-high cable; reverse-grip flagged
  weak), `programming` (priority principle + volume/frequency — Schoenfeld 2016/2017 — + overload).
- **Honesty flag:** whole section carries an **"EMG ≠ hypertrophy"** caveat (activation is an acute proxy);
  firm ground is the anatomy + regional-hypertrophy basis + progressive overload. Not medical advice.
- **Personal-focus flagged** per the convention: `focus` tag + 🎯 admonition on the `upper-chest` index, and
  a new **first** item on the home "What I'm working on" dashboard (now **6 items**). Dedup: cross-links
  `gym/` (overload, building-muscle, recovery, protein, form) rather than restating fundamentals.
- Updated home catalog (Body +1) + dashboard, `nav`, and CLAUDE.md §5 coverage (`upper-chest` row).
- `mkdocs build --strict`: **pass**. **Published** (committed + pushed) — and this same push ships the three
  sections from the entry above (Habits, Focus, Health), which are now live too.

## 2026-06-08 — Ingest: CZ & Justin Sun operator models (folded into Startups/Success)

- **Source material:** two community-compiled "thinking framework" **persona-skill** files in `~/Downloads`
  (`SKILL-en.md` = `cz-perspective`; `SKILL-en2.md` = `justin-sun-perspective`) — role-play OSes distilled
  from each founder's tweets/autobiography/interviews. **Not** archived into `sources/` (third-party files,
  public repo); provenance recorded here instead. Offered to archive them in `sources/` if Ronald wants.
- **Decision (asked):** distill the *substance* into wiki notes (drop the role-play scaffolding), and **fold
  into existing `startups/` + `success/`** — no new section. Curated **only the strongest, non-duplicative**
  models (skipped dupes: CZ "Infinite Game" = existing `long-term-games`; "Platform Thinking" = network-
  effects/moats; Sun "Texas Hold'em/all-in" ≈ monopoly+power-law; "leverage" = existing `leverage`).
- **5 notes added**, all `source: cited` with a visible **second-hand-distillation caveat** (quotes
  attributed to named primaries — memoirs/interviews — but **not independently verified**):
  - `success/two-track-decision-system` (CZ) — fast 50/50 coin-flip + course-correct vs. structured
    reversible/irreversible checklist. `medium`.
  - `success/increment-over-stock` (Sun) — value growth-rate/slope over holdings. `medium`.
  - `success/study-failure-not-success` (Sun) — inversion / pre-mortem (Munger parallel noted). `medium`.
  - `startups/build-dont-hype` (CZ) — BUIDL > TALK, with the explicit **tension vs. `distribution-and-sales`**
    held in a note admonition. `medium`.
  - `startups/attention-as-value` (Sun) — attention→value/memecoin engine. **`confidence: contested`** with a
    "Contested — describe, don't endorse" admonition (the Harvester/SEC context; attention ≠ created value).
- **Justin Sun framed critically throughout** (controversial figure); his two `success` notes link to the
  `attention-as-value` caveat. Both index Maps got an **"Operator notes — crypto founders (second-hand;
  flagged)"** sub-group with the caveat; `nav` updated (2 under Startups, 3 under Success).
- `mkdocs build --strict`: **pass**. **Published** (committed + pushed).
