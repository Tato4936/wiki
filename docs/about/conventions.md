---
hide:
  - tags
---

# Conventions

How this wiki is structured, so every note reads the same way and stays trustworthy.

## The value rule

A page earns its place only if it holds knowledge **not already one prompt away from an LLM** — either
my own synthesis or a faithfully absorbed, cited source. Generic summaries are omitted by design.

## Provenance

Every content note tags its `source` in the header:

`me`
:   My own synthesis — conclusions and frameworks conditioned on my situation. Highest trust.

`cited`
:   Faithfully absorbed from a specific named source, with a citation. Medium–high trust.

`claude`
:   Drafted by an LLM and not yet verified. Lowest trust; flagged on sight, and never promoted to
    `me`/`cited` without a real source and my review.

## Confidence

`high` · `medium` · `low` · `contested`. A `contested` claim **must** wear a callout:

!!! warning "Contested"
    Used for ideas that are popular but scientifically disputed. The note's job is to explain the
    dispute, not to assert the claim.

## Note template

Every content note follows this shape:

````markdown
---
tags: [section, cluster]
source: cited
confidence: high
updated: YYYY-MM-DD
---

# Title

> **TL;DR.** The single thing to remember.

**Provenance:** `cited` · **Confidence:** high · **Updated:** YYYY-MM-DD

## What it is
Body — short paragraphs, definition lists, caveats in admonitions.

## How to apply
Concrete, practitioner-facing takeaways.

## Sources
1. Author, *Title* (Year). DOI/URL.

## Related
- [Other note](other-note.md) — why it's related
````

Links between notes are **relative Markdown links** to the `.md` file, which the build checks for
breakage. Every new note is added to `nav:` in `mkdocs.yml`.

## How it's maintained

The maintaining agent (Claude) **posts directly** — it researches, drafts, finalizes, and publishes
notes without a review gate. The honesty rules still bind it: `cited` needs a real citation, disputed
claims wear a "Contested" callout, it never fabricates a source, and it never authors `me` content
(that's mine). Its full operating manual — the value rule, provenance system, and Ingest / Lint
procedures — lives in the repo's `CLAUDE.md`, kept out of the published site.
