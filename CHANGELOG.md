# Changelog

All notable changes to BI Compass are documented here.
Format: `[version] — date — description`

---

## [1.2.0] — 2026-06-02

### Added
- **Module 1 expanded to 100% PL-300 coverage** — 9 additional concept cards covering all missing topics from the "Prepare the Data" domain:
  - Pivot, Unpivot, and Transpose
  - Group By and Aggregate Rows
  - Reference vs Duplicate Queries
  - Parameters (Create and Modify)
  - Credentials and Privacy Levels (Formula.Firewall)
  - Semi-structured Data (JSON, XML)
  - Configure Data Loading (Enable/Disable Load)
  - Resolve Data Import Errors
  - Create and Transform Columns (Custom, Conditional, Split)
- **Forward reference panel** — explicit callouts for topics covered in Modules 2 and 3
- **3 new quiz questions** (Q7–Q9) aligned to new concepts — quiz now 9 questions total
- **Sepia and Darker Dark theme toggles** — accessible via header controls
- **Power BI Desktop navigation hints** — each relevant concept card includes exact UI path in Power BI

### Fixed
- All hardcoded Spanish strings now respond to ES/EN language toggle
- `alertBilingual()` helper replaces all Spanish-only `alert()` calls
- Dashboard subtitle and title fully bilingual
- Sidebar section label bilingual
- Challenge description text bilingual
- Pie chart label in challenge mode bilingual

### Updated
- Module hero: 1–2 hrs → 2–3 hrs, 5 exercises → 9 exercises
- All exam weight percentages updated to official April 2026 Microsoft spec

---

## [1.1.0] — 2026-05-26

### Added
- DirectLake / DirectQuery / Import comparison table with bilingual support
- Q6 quiz question on connection mode selection (manufacturing scenario)
- Functional dashboard filters: All / Nulls / Dupes / Type Errors with real chart data updates

### Fixed
- Infinite loop / flickering in Challenge tab charts — `responsive: false` + `animation: false` + CSS fixed heights
- Exam weights updated to April 2026 official: 4 domains (removed separate "Analizar datos")
- Industry examples changed from freight/carrier to Finance/Supply Chain/Retail/Manufacturing
- ETL analogy changed from logistics to neutral chef analogy
- Language toggle: "Módulo X de 6" → "Module X of 6" in EN mode
- "del examen" / "ejercicios" now bilingual in hero meta

---

## [1.0.0] — 2026-05-19

### Initial release

- Module 1 — Prepare Data (partial coverage)
- 6 concept cards: ETL, Data Quality, Applied Steps, Combining Data, Query Folding, Data Types
- Interactive dashboard: Data Quality Audit with 4 KPIs and 4 charts
- Storytelling layer: 4-step reading guide
- Challenge Mode: 4 deliberate errors with hint system and full solution reveal
- Quiz: 5 PL-300-style questions with immediate feedback
- Roadmap: certification path post PL-300
- Bilingual ES/EN toggle
- Certification roadmap sidebar with official exam weights
