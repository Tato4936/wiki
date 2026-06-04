# Wiki

A lean personal knowledge base built on Karpathy's "LLM Wiki" pattern: curated synthesis and cited
sources — **not** encyclopedia summaries. Rendered with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

See [`CLAUDE.md`](CLAUDE.md) for the operating rules (the "schema") and
[`docs/about/conventions.md`](docs/about/conventions.md) for the note template.

## Setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Use

```bash
mkdocs serve              # live preview at http://127.0.0.1:8000
mkdocs build --strict     # build to site/ and fail on any broken link
```

## Layout

- `docs/`     — the rendered wiki (the only thing published)
- `sources/`  — raw, immutable source material (cite as `sources/<section>/<file>`)
- `inbox.md`  — paste raw drops here; run an **ingest** to file them
- `log.md`    — append-only history of ingest / lint operations
- `CLAUDE.md` — the schema: rules, provenance, autonomy tiers, procedures
