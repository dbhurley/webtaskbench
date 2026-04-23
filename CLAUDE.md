# WebTaskBench — Agent Context

> `webtaskbench.com` — a live, weekly-updated public observatory measuring token efficiency of **SOM (Semantic Object Model)** vs raw HTML across a curated battery of real websites. Publishes results, a formal protocol open to third-party submissions, a per-URL lookup tool, vertical leaderboards (News, SaaS, DevDocs), and a transparent "failed sites" registry.
>
> The repo is a Next.js 14 static site + one data file + one GitHub Actions workflow that re-runs the benchmark every Monday via an external harness (`plasmate-labs/plasmate-benchmarks`) and auto-commits fresh numbers. There is no server runtime — everything is SSG.

---

## Related Repos & Services

| Name | Role | Relationship |
|------|------|--------------|
| `dbhurley/webtaskbench` | Public-facing observatory site (this repo) | `webtaskbench.com` — where the numbers are shown |
| `plasmate-labs/plasmate` | The tool being measured (publisher SDK) | Binary downloaded in CI; latest release tag = reported version |
| `plasmate-labs/plasmate-benchmarks` | The benchmark harness + `run-benchmark.sh` | Invoked by this repo's weekly workflow; also receives third-party submissions via PR |
| `dbhurley/somspec` | SOM/1.0 specification | Format being benchmarked; blog post "How to Read the WebTaskBench Leaderboard" lives there |
| `dbhurley/somordom` | Interactive one-URL live comparison demo | Consumer-grade showcase of the same compression story, one URL at a time |
| `dbhurley/somready` | `robots.txt` SOM-Directives checker | Consumer-side compliance — different surface from measurement |

---

## What It Measures (One Paragraph)

For each URL in the registry, the harness captures two values:

1. **`html_tokens`** — tokens in raw HTML via `curl -sL` fetched with a 30-second timeout, tokenized with `tiktoken` / `cl100k_base`. This is intentionally the low bar (no JS rendering) — real AI agents often receive less-than-rendered content.
2. **`som_tokens`** — tokens in the SOM output produced by the current `plasmate fetch <url>` binary, tokenized the same way.

The ratio is `html_tokens / som_tokens`. A ratio >1 means SOM is more compact (the usual case); <1 means SOM is **larger** than the raw HTML (happens on trivially small pages like `example.com` or `crates.io` where HTML is already tiny and SOM's structural overhead dominates). The latest run (Plasmate v0.5.1, 2026-04-20): **38/38 sites succeeded**, **29.6× avg**, **9.8× median**, **118.5× peak** at `cloud.google.com`.

---

## Directory Structure

```
webtaskbench/
├── src/
│   ├── app/                                # Next.js 14 App Router (all SSG)
│   │   ├── page.tsx                        # Hero, top-compression chart, full table, calculator
│   │   ├── layout.tsx                      # Syne + Azeret Mono + DM Sans, "Signal & Noise" theme
│   │   ├── globals.css                     # Tailwind + custom CSS (scan-lines, glow-teal)
│   │   ├── favicon.ico
│   │   │
│   │   ├── methodology/page.tsx            # Internal methodology — HTML baseline, tokenizer, limits
│   │   ├── protocol/page.tsx               # Formal WebTaskBench Protocol v1.0 (third-party spec)
│   │   │
│   │   ├── test/                           # Single-URL lookup tool
│   │   │   ├── page.tsx                    # Input → lookup() → result + GH issue submission link
│   │   │   └── layout.tsx
│   │   │
│   │   ├── news/page.tsx                   # News & Media vertical leaderboard
│   │   ├── saas/page.tsx                   # SaaS & Cloud vertical leaderboard
│   │   ├── devdocs/page.tsx                # Developer Documentation vertical leaderboard
│   │   │   (all three are thin shells around <VerticalPage vertical={...} />)
│   │   │
│   │   ├── sites/page.tsx                  # Full site list view
│   │   ├── failed/page.tsx                 # Sites that couldn't be benchmarked (transparency page)
│   │   └── fonts/                          # Self-hosted Geist + Geist Mono (fallback only)
│   │
│   ├── components/
│   │   ├── Header.tsx                      # Top nav with live run-date stamp
│   │   ├── Footer.tsx
│   │   ├── AnimatedCounter.tsx             # Hero stat counters (animate on mount)
│   │   ├── CategoryCards.tsx               # "By Vertical" grid on home
│   │   ├── TopChart.tsx                    # Recharts bar chart of top compressions
│   │   ├── ResultsTable.tsx                # Full sortable/filterable table
│   │   ├── VerticalPage.tsx                # Shared renderer for /news, /saas, /devdocs
│   │   └── TokenCalculator.tsx             # "At N pages/day, save $X" estimator
│   │
│   ├── data/
│   │   ├── benchmark.ts                    # MASTER DATA — machine-written by weekly CI
│   │   └── verticals.ts                    # Curated vertical leaderboards (hand-maintained)
│   │
│   └── lib/
│       └── lookup.ts                       # URL → benchmark entry or category estimate
│
├── scripts/
│   └── update-benchmark-data.js            # Reads harness JSON, rewrites src/data/benchmark.ts
│
├── .github/workflows/
│   └── weekly-benchmark.yml                # Monday 06:00 UTC — the auto-commit loop
│
├── benchmark-data.json                     # (Legacy/cached raw results file; primary data is in src/data/)
├── README.md                               # Just "# webtaskbench.com" (a stub)
├── next.config.mjs                         # Minimal
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json                            # Next 14.2.35, React 18, recharts 3, TS 5
```

---

## Pages & What Lives Where

| Path | Purpose | File |
|------|---------|------|
| `/` | Hero, animated stats, top-compression chart, full results table, calculator | `src/app/page.tsx` |
| `/sites` | Sortable list view of every tested site | `src/app/sites/page.tsx` |
| `/news` | News & Media vertical leaderboard | `src/app/news/page.tsx` + `VerticalPage` |
| `/saas` | SaaS & Cloud vertical leaderboard | `src/app/saas/page.tsx` + `VerticalPage` |
| `/devdocs` | Developer Documentation vertical leaderboard | `src/app/devdocs/page.tsx` + `VerticalPage` |
| `/failed` | Sites we couldn't benchmark (w/ reason) | `src/app/failed/page.tsx` |
| `/methodology` | How we measure (HTML baseline, tokenizer, limits) | `src/app/methodology/page.tsx` |
| `/protocol` | Formal WebTaskBench Protocol v1.0 — open for 3rd-party submissions | `src/app/protocol/page.tsx` |
| `/test` | Paste any URL → exact / domain / category-estimate + PR/issue link | `src/app/test/page.tsx` |

---

## Data Model

### `src/data/benchmark.ts` (machine-written)

```ts
benchmarkMeta: {
  plasmate_version, run_date, sites_attempted, sites_succeeded,
  avg_compression, median_compression, peak_compression, peak_site,
  previous_version?, previous_avg_compression?,
}

benchmarkData: Array<{ url, html_tokens, som_tokens, ratio, category? }>

failedSites: Array<{ url, reason }>
```

Categories (from `scripts/update-benchmark-data.js` classifier): **`News & Media`**, **`SaaS & Cloud`**, **`Dev Tools`**, **`General`** (fallback). The classifier uses a hardcoded domain → category map plus regex heuristics. When adding new benchmark sites, update both the classifier and (if relevant) the vertical data.

### `src/data/verticals.ts` (hand-maintained)

Curated per-vertical leaderboards with ~10 entries each, keyed by `id` (`news`, `saas`, `devdocs`). Used by `/news`, `/saas`, `/devdocs` via `VerticalPage.tsx`. These are **not automatically updated** by the weekly CI — they're editorial. Watch for drift between `verticals.ts` numbers and `benchmark.ts` numbers; they can (and do) disagree.

### `src/lib/lookup.ts`

Pure function used by `/test`:

- Exact URL match → `{ type: 'exact', entry, category }`
- Domain-level match (same hostname, different path) → `{ type: 'domain', ... }`
- Category estimate (domain-heuristic → category average) → `{ type: 'estimated', estimated_ratio, ... }`
- Unknown → `{ type: 'none' }`

Category averages hardcoded: `SaaS & Cloud: 47`, `News & Media: 41`, `Dev Tools: 12`, `General: 4` — update when the averages drift materially.

---

## Weekly Benchmark Pipeline (`.github/workflows/weekly-benchmark.yml`)

Runs **Monday 06:00 UTC** (also manual `workflow_dispatch`). Steps:

1. Checkout this repo with `contents: write` permission (required for the bot's auto-commit — see commit `9de489f` which fixed a 403).
2. Checkout `plasmate-labs/plasmate-benchmarks` side-by-side as `benchmarks/`.
3. Download latest Plasmate binary: `github.com/plasmate-labs/plasmate/releases/latest/download/plasmate-x86_64-linux`. Chmod +x. The binary reports its version as `0.1.0` regardless (build bug) — the workflow reads the actual tag from the GitHub Releases API and passes it as `plasmate_version` to the update script.
4. **Patch `run-benchmark.sh`** in place to wrap `plasmate fetch` with `timeout 45s` and add `--timeout 30000`. This is a workaround for a past hang — single-URL runaway would otherwise stall the entire 40-minute job cap (see commits `e8d30d2`, `d373ad5`).
5. Pre-install `tiktoken` (`pip install tiktoken --quiet`) so it doesn't stall mid-run.
6. Run `./run-benchmark.sh` in the harness repo (30-minute cap).
7. Locate the latest `benchmarks/results/benchmark-*.json`.
8. `node scripts/update-benchmark-data.js <results.json> <version>` → rewrites `src/data/benchmark.ts` with fresh entries and updated `benchmarkMeta`.
9. Commit as **`WebTaskBench Bot <webtaskbench@somspec.org>`** with message `data: weekly benchmark update (Plasmate v<X.Y.Z>)` and push. If no diff, skip the commit silently.

**Important safeguards:**
- Job cap: 40 minutes total, 30-minute inner cap on the benchmark step, 45-second per-URL timeout on `plasmate fetch`. Belt-and-suspenders because hung runs previously wedged the pipeline.
- The bot commit is atomic — either fresh data lands or nothing changes. `git diff --cached --quiet` guards the push.

---

## Key Design Decisions

1. **SSG only; data is code.** `src/data/benchmark.ts` is the deployable database. No runtime DB, no API, no client-side fetch. This is how the site stays instant and Vercel stays free-tier-sized even at high traffic.

2. **Bot-written data file, hand-written editorial.** `benchmark.ts` is machine-regenerated weekly. `verticals.ts` is editorial — carefully curated for vertical leaderboards with compelling URL sets. Keep them separate; do not auto-overwrite `verticals.ts`.

3. **Conservative HTML baseline.** The protocol uses `curl -sL`, not a headless browser. This understates how much HTML an agent would *actually* receive in production (real browsers get more DOM bloat from JS-inserted content). Under-reporting keeps the claim defensible — real-world ratios are likely higher.

4. **Transparent failures.** `/failed` is a first-class page. The protocol's quality threshold explicitly requires documenting failure reasons for every attempted site. This positions the leaderboard against less-rigorous benchmark publishing.

5. **Formal protocol with quality thresholds.** `/protocol` defines v1.0 — ≥20 sites, ≥3 categories, ≤40% from any single category, publicly accessible, must not be the benchmark runner's own site. Third parties submit PRs to `plasmate-labs/plasmate-benchmarks` under `results/third-party/`. This is the "we welcome adversarial benchmarks" stance.

6. **Version-stamping.** Every page footer / run-date UI surfaces the Plasmate version measured. Viewers can immediately tell which release produced the current numbers. This is deliberate — it turns the site into a *changelog* as much as a leaderboard.

7. **Token estimate for user input in `/test`.** `GPT4O_INPUT_PRICE = 0.0000015` per token is hardcoded in `src/app/test/page.tsx`. Update when pricing drifts.

8. **"Signal & Noise" visual identity.** Fonts Syne (display) + Azeret Mono (mono) + DM Sans (body), electric teal accent (`glow-teal` class), scan-line aesthetic (`scan-lines` class). Deliberately telemetry-dashboard coded — look like a scientific instrument, not marketing.

---

## Deployment / Infra

- **Host:** Vercel (default Next.js, no `vercel.json` override)
- **Domain:** `webtaskbench.com`
- **Runtime:** Next.js 14.2.35, React 18, entirely SSG — no server routes
- **Third-party runtime deps:** Google Fonts for Syne/Azeret Mono/DM Sans (loaded at build via `next/font/google`), Recharts for the top chart
- **Build:** `next build` → fully static
- **Bot commits:** `WebTaskBench Bot <webtaskbench@somspec.org>`, signed with default `GITHUB_TOKEN`

---

## Environment Variables

**None.** No runtime secrets. The GitHub Actions workflow uses `secrets.GITHUB_TOKEN` (auto-provisioned) for repo write access — no other secrets required.

---

## Local Dev

```bash
npm install
npm run dev         # localhost:3000
npm run lint
npm run build       # SSG build — catches type + data-shape errors
```

To regenerate data locally (requires the `plasmate-benchmarks` harness + Plasmate binary):

```bash
# Assuming you've run the harness and produced results JSON:
node scripts/update-benchmark-data.js path/to/benchmark-results.json 0.5.1
```

The script preserves the existing `failedSites` block by regexing it out of `benchmark.ts` before rewriting — don't reformat that block without checking the regex still matches.

---

## Testing / CI

- **No test framework** in `package.json`.
- **CI = the weekly benchmark workflow**, which is itself the integration test. If the benchmark runs green, the data file writes correctly and the site rebuilds.
- **No lint gate** — `npm run lint` exists but isn't wired into any workflow.

High-value additions if this hardens:
- Unit tests for `lookup()` (pure function, many edge cases — domain matching, URL parsing failure, category guessing)
- A data-shape validator that runs in CI before the bot commits (guard against update-script regressions)
- A drift detector comparing `verticals.ts` entries to `benchmark.ts` entries for the same hostnames

---

## Known Limitations / Current State

- **The Plasmate binary reports `0.1.0` regardless of release** (build bug). Workaround is in the workflow (`jq`-reads the release tag). If that API changes, version stamping silently goes stale.
- **Hand-maintained vertical data can drift from weekly benchmark data.** A reader comparing `/news` to the master table can find disagreements. No drift detector yet.
- **Category classifier is regex-based and domain-hardcoded** in `scripts/update-benchmark-data.js` *and* in `src/lib/lookup.ts`. When adding new categories or new known domains, update both.
- **`benchmark-data.json` at repo root is legacy.** Primary data source is `src/data/benchmark.ts`. Delete once confirmed unused by downstream tooling.
- **README.md is a one-line stub.** Anyone landing via GitHub sees essentially nothing.
- **No analytics, no error tracking.** Hard to tell if `/test` is actually used.
- **No rate limiting / bot protection on the harness trigger.** `workflow_dispatch` is restricted to maintainers, so low risk, but if the workflow were ever triggered from issue-comments or similar, this matters.
- **Category averages in `lookup.ts` are hardcoded** (`SaaS & Cloud: 47`, etc.). They get stale. Consider generating them from `benchmarkData` at build time.
- **GPT-4o pricing in `/test`** is hardcoded at `0.0000015/token`. OpenAI will change this; auto-stales.
- **Default branch is `master`, not `main`.**
- **HTML baseline uses `curl -sL`, not a browser.** Cannot measure pages that require JS to render content. The `/failed` page documents this class explicitly — seven sites blocked by anti-bot / JS-only paths at last check.

---

## Roadmap / Open Threads

(No open issues or PRs. Inferred from commit cadence.)

Recent work:
- **Vertical leaderboards + /protocol + /test** (`71b27ea`, `ceff0bd`) — expanded from flat list to segmented, third-party-friendly surface.
- **CI automation** (`d373ad5`, `e8d30d2`, `9de489f`) — moved from manual data updates to weekly autopilot.
- **Live observatory stamping** (`a932641`) — every run carries its Plasmate version visibly.
- **Visual redesign: Signal & Noise** (`084d956`) — telemetry aesthetic, teal-accented, scan-line visuals.

**Plausible next moves:**
- **Third-party tool submissions arriving.** Protocol v1.0 is published; the first non-Plasmate entry would be a major story — add a "tools" dimension to the data model if/when that happens.
- **Historical leaderboard.** Each weekly run overwrites; there's no time-series surface. Preserve historical runs under `src/data/history/` or similar and plot compression-over-time per site.
- **Per-page badges.** `webtaskbench.com/badge/<domain>.svg` — analogous to somready.com badges.
- **JS-rendered baseline as a second column.** Opt-in browser-rendered baseline for sites where `curl -sL` is obviously inadequate (`reddit.com`, `stackoverflow.com` — currently `/failed`).
- **Protocol v1.1** — maybe split failure reasons into structured categories (anti-bot, rate-limit, auth-required, timeout, parse-fail).
- **API surface.** A static `/api/v1/benchmark.json` dump so other tooling (somordom, somready, somspec/compliance) can import the dataset without scraping the site.
- **Plasmate version `unknown` detection.** Fail CI if the version lookup from GitHub Releases API returns empty, rather than silently publishing `unknown`.

---

## Conventions for Changes

- **Data edits.** Never hand-edit `src/data/benchmark.ts` — it's bot-owned. Hand-edit `src/data/verticals.ts` only.
- **New sites.** Submit a PR to `plasmate-labs/plasmate-benchmarks` with the URL added to the harness config; the next Monday run picks it up and lands in `benchmark.ts` automatically.
- **New categories.** Touch three places: `update-benchmark-data.js` (classifier), `lookup.ts` (category averages + category heuristic), and ideally a corresponding `src/app/<slug>/page.tsx` vertical page.
- **New pages.** `page.tsx` + `layout.tsx` for page-specific metadata; update `Header.tsx` nav. No sitemap to update (none present).
- **Styling.** Tailwind utility classes only. Theme tokens in `tailwind.config.ts` — use those, not raw hex. "Signal & Noise" aesthetic is load-bearing for the positioning.
- **CI changes.** Workflow lives in `.github/workflows/weekly-benchmark.yml`. Test via `workflow_dispatch` before merging — Monday-morning surprises are expensive to diagnose.
- **Default branch is `master`.**
