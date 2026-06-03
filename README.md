# 🧭 BI Compass — Navigate Your Data Journey

> Interactive learning platform for Microsoft PL-300 Power BI Data Analyst certification.
> Built with HTML, CSS, and Chart.js. No frameworks. No build tools. Deploy anywhere.

**Live site:** [augusto-t7.github.io/bi-compass](https://augusto-t7.github.io/bi-compass)

---

## For Recruiters

**What this project demonstrates:**

- **End-to-end ownership** — Conceived, designed, built, and iterated on a full educational product from zero
- **Domain expertise translated into tooling** — Applied real-world data analytics knowledge to build a structured learning platform
- **Iterative delivery** — Each module released progressively with documented changelogs and commit history
- **Bilingual execution** — Full ES/EN language toggle with zero hardcoded strings
- **Production thinking** — Accessibility, responsive design, theme variants, and UX error handling built in from day one

**Stack:** HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript · Chart.js · GitHub Pages

**Target certification:** Microsoft PL-300 — Power BI Data Analyst Associate

**Domain background:** Supply Chain Analytics · Freight Audit · EDI · Financial Data · Logistics Operations

---

## For Students

BI Compass is a free, open-source study platform designed to help you pass the **Microsoft PL-300** certification — the most in-demand BI certification for data analysts in 2025–2026.

### What you'll find here

| Module | Domain | Topics |
|--------|--------|--------|
| **Module 1** ✅ | Prepare Data (25–30%) | ETL, Power Query, Data Quality, Pivot/Unpivot, Parameters, Privacy Levels, Query Types |
| **Module 2** 🔒 | Model Data (25–30%) | Star Schema, Relationships, Cardinality, Date Tables, Role-Playing Dimensions |
| **Module 3** 🔒 | DAX Core (25–30%) | Measures, CALCULATE, Time Intelligence, Semi-additive, Quick Measures |
| **Module 4** 🔒 | Visualize & Analyze (25–30%) | Chart Selection, Storytelling, Conditional Formatting, Drillthrough |
| **Module 5** 🔒 | Executive Storytelling | McKinsey SCQA, Narrative Dashboards, Accessibility |
| **Module 6** 🔒 | Manage & Secure (15–20%) | RLS, Workspaces, Row-Level Security, Deployment |

### How to use it

1. Open the live site or download `index.html` and open locally in your browser
2. Start at Module 1 — each module builds on the previous one
3. Read the concepts → study the dashboard → attempt the challenge (find deliberate errors) → take the quiz
4. Toggle between **ES / EN** to study in your preferred language
5. Use the **sepia** or **darker** theme for extended study sessions

### No installation required

Download `index.html` → open in any browser → works offline.

---

## For Developers

### Architecture

Single-file HTML application. All CSS and JavaScript are inlined — no build step, no dependencies to install, no bundler.

```
index.html          ← entire application (HTML + CSS + JS)
README.md           ← this file
CHANGELOG.md        ← version history
LICENSE             ← MIT
```

### Language system

Two CSS classes control all bilingual content:

```css
.lang-active-es .lang-es-inline { display: inline; }
.lang-active-es .lang-en-inline { display: none; }
.lang-active-en .lang-en-inline { display: inline; }
.lang-active-en .lang-es-inline { display: none; }
```

All user-visible strings use `lang-es-inline` / `lang-en-inline` spans. JavaScript strings use the `alertBilingual(es, en)` helper.

### Theme system

Three themes via CSS custom properties on `body`:

```javascript
// Default dark: body.lang-active-{lang}
// Sepia:        body.lang-active-{lang} theme-sepia
// Darker dark:  body.lang-active-{lang} theme-darker
```

### Charts

Chart.js 4.4.1 via CDN. All challenge-mode charts use `responsive: false` + `animation: false` to prevent resize loop on hidden tabs.

### Adding a new module

1. Copy the `<!-- MODULE 1 PAGE -->` block
2. Update all `m1` IDs to `m2`
3. Add sidebar item with `onclick="showPage('m2')"`
4. Update `initDashboardCharts()` with new chart data
5. Add quiz questions to the `feedbacks` object
6. Commit with message: `feat: Module N - [Topic] complete`

### Contributing

Issues and PRs welcome. If you find a factual error in the PL-300 content, please open an issue with a reference to the official Microsoft study guide.

---

## Certification roadmap covered

```
PL-300  ← You are here
  ↓
SQL (HackerRank / DataLemur)    ← parallel
  ↓
DP-900  Azure Data Fundamentals
  ↓
Google Data Analytics Certificate
  ↓
dbt Analytics Engineering
  ↓
Cloud (AZ-900 / DP-203)
```

---

## License

MIT — free to use, modify, and distribute with attribution.

---

*Built by [@augusto-t7](https://github.com/augusto-t7) — Supply Chain Data Analyst in transition · Zapopan, México*
