# 🧭 BI Compass — Navigate Your Data Journey

> Interactive learning platform for Microsoft PL-300 Power BI Data Analyst certification.
> Built with HTML, CSS, and Chart.js. No frameworks. No build tools. Deploy anywhere.

**Live site:** [augusto-t7.github.io/bi-compass](https://augusto-t7.github.io/bi-compass)

---

## For Recruiters

**What this project demonstrates:**

- **End-to-end ownership** — Conceived, designed, architected, and shipped a full educational product from zero — solo
- **Iterative delivery** — Each module released progressively with documented changelogs and commit history; product improved through real user feedback each cycle
- **Domain expertise translated into tooling** — Applied real-world supply chain and financial data knowledge to build structured, industry-relevant learning content
- **Bilingual execution** — Full ES/EN toggle with zero hardcoded strings; language state managed across all UI components and JavaScript interactions
- **Production-grade UX** — Responsive mobile layout with FAB overlay navigation, theme variants (dark/darker/sepia), interactive Chart.js dashboards, 4 distinct challenge types, and 9-question PL-300 style quiz
- **Self-directed learning signal** — Built while actively studying for Microsoft PL-300; every module reflects real mastery, not theoretical knowledge

**Stack:** HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript · Chart.js 4.4 · GitHub Pages

**Target certification:** Microsoft PL-300 — Power BI Data Analyst Associate (April 2026 exam guide)

**Domain background:** Supply Chain Analytics · Financial Data · Logistics Operations · Industrial Engineering

---

## For Students

BI Compass is a free, open-source study platform built to help you pass the **Microsoft PL-300** certification — the most in-demand BI certification for data analysts in 2025–2026.

Every concept is aligned to the **official Microsoft study guide (April 2026)** and presented with real business context, interactive dashboards, and deliberate challenge exercises.

### Module progress

| Module | Domain | Weight | Status | Topics |
|--------|--------|--------|--------|--------|
| **Module 1** | Prepare Data | 25–30% | ✅ Complete | ETL · Power Query · Data Quality · Pivot/Unpivot · Group By · Parameters · Privacy Levels · Reference vs Duplicate · Configure Load · Import Errors · Column Transforms |
| **Module 2** | Model Data | 25–30% | 🔒 Coming | Star Schema · Relationships · Cardinality · Date Tables · Role-Playing Dimensions |
| **Module 3** | DAX Core | 25–30% | 🔒 Coming | Measures · CALCULATE · Time Intelligence · Semi-additive · Iterator Functions |
| **Module 4** | Visualize & Analyze | 25–30% | 🔒 Coming | Chart Selection · Conditional Formatting · Drillthrough · Bookmarks · Mobile Layout |
| **Module 5** | Executive Storytelling | — | 🔒 Coming | McKinsey SCQA · Narrative Dashboards · Show First vs Build Narrative |
| **Module 6** | Manage & Secure | 15–20% | 🔒 Coming | RLS · Workspaces · Deployment Pipelines · Sensitivity Labels |

### Each module includes

- **Concept cards** — bilingual explanations with Power BI Desktop navigation hints
- **Interactive dashboard** — real Chart.js visuals with filter controls and storytelling layer
- **4 challenge types** per module:
  - 🔍 Find deliberate errors in a dashboard
  - 🔬 Diagnose incorrect Applied Steps sequence
  - 🔄 Classify a transformation from Before/After tables
  - ⚡ Choose the correct connection mode for a business scenario
- **PL-300 style quiz** — scenario-based questions with immediate bilingual feedback
- **Roadmap tab** — certification path and concepts that connect to future modules

### How to use it

1. Open the live site or download `index.html` and open locally in your browser — works offline
2. Start at Module 1 — each module builds on the previous one
3. **Learn → Dashboard → Challenge → Quiz** — in that order, every module
4. Toggle **ES / EN** at any point — all content switches instantly
5. Use **Sepia** theme for long study sessions; **Darker** for low-light

### No installation required

```
Download index.html → open in browser → study offline
```

---

## For Developers

### Architecture

Single-file HTML application. All CSS and JavaScript are inlined — no build step, no dependencies to install, no bundler required.

```
index.html          ← entire application (~200KB, HTML + CSS + JS)
README.md           ← this file
CHANGELOG.md        ← full version history
LICENSE             ← MIT
```

### Language system

Body class drives all visibility. Every user-visible string uses inline spans:

```css
.lang-active-es .lang-es-inline { display: inline; }
.lang-active-es .lang-en-inline { display: none; }
.lang-active-en .lang-en-inline { display: inline; }
.lang-active-en .lang-es-inline { display: none; }
```

JavaScript strings use the `alertBilingual(es, en)` helper and `currentLang` state variable.

### Theme system

Three themes via CSS custom properties scoped to body class:

```
Default dark  →  body.lang-active-{lang}
Sepia         →  body.lang-active-{lang}.theme-sepia
Darker dark   →  body.lang-active-{lang}.theme-darker
```

Managed by `setTheme(theme)` — updates body class, dropdown icon, and active state without page reload.

### Mobile UX

- **FAB hamburger** (fixed, top-left) — triggers overlay sidebar slide-in from left
- **Sidebar overlay** — semi-transparent backdrop, closes on outside tap
- **Theme dropdown** — single button with active icon, opens a menu, closes on selection or outside click
- **Lang button** — single toggle showing the *other* language (tap to switch)

### Charts

Chart.js 4.4.1 via CDN (cdnjs.cloudflare.com). Main dashboard charts: `responsive: true`. Challenge-mode charts: `responsive: false` + `animation: false` to prevent resize loop when tab is hidden.

### Challenge system

4 challenge types, each self-contained with independent state:

| ID | Type | State var | JS function |
|----|------|-----------|-------------|
| Reto 1 | Click errors on dashboard | `errorsFound`, `foundSet` | `clickError()` |
| Reto 2 | Click wrong Applied Step | `c2answered` | `clickStep()` |
| Reto 3 | Classify transformation | `c3scores` | `answerC3()` |
| Reto 4 | Choose connection mode | `c4scores` | `answerC4()` |

All challenges use accordion expand/collapse via `toggleChallenge(id)`.

### Adding a new module

1. Copy the `<!-- MODULE 1 PAGE -->` block and all its tab content
2. Update all `m1` IDs → `m2`, all chart canvas IDs → unique names
3. Add sidebar item with `onclick="showPage('m2')"` and remove `🔒`
4. Populate `initDashboardCharts()` equivalent with new data
5. Add quiz questions and feedbacks to the `feedbacks` object
6. Update `CHANGELOG.md`
7. Commit: `feat: Module 2 - [Topic] complete`

### Contributing

Issues and PRs welcome. If you find a factual error in the PL-300 content, open an issue with a link to the relevant section of the [official Microsoft study guide](https://learn.microsoft.com/en-gb/credentials/certifications/resources/study-guides/pl-300).

---

## Certification roadmap

```
PL-300  Power BI Data Analyst        ← You are here
  │
  ├── SQL (HackerRank / DataLemur)   ← run in parallel
  │
  ↓
DP-900  Azure Data Fundamentals
  ↓
Google Data Analytics Certificate
  ↓
dbt Analytics Engineering
  ↓
Cloud (AZ-900 / DP-203)             ← 18–24 month target
```

---

## License

MIT — free to use, modify, and distribute with attribution.

---

*Built by [@augusto-t7](https://github.com/augusto-t7) · Supply Chain Data Analyst → BI Analytics Engineer · Zapopan, México*
