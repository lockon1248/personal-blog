## ADDED Requirements

### Requirement: Centralized site content source

The site SHALL maintain journal entries and photography entries in one shared
content module so that listing pages and detail pages are generated from the
same source of truth.

#### Scenario: Journal pages use centralized content

- **WHEN** a journal entry is added to the shared content module
- **THEN** the journal index and the matching journal detail route SHALL render
  from that entry without duplicating page templates

#### Scenario: Photography page uses centralized content

- **WHEN** a photography entry is added to the shared content module
- **THEN** the photography archive SHALL render the entry from the same source
  of truth without hand-written repeated markup

### Requirement: Lowercase public route contract

The site SHALL expose public content routes using lowercase URLs and SHALL keep
legacy uppercase routes redirecting to the canonical lowercase routes.

#### Scenario: Canonical journal route

- **WHEN** a visitor opens a journal page
- **THEN** the canonical URL SHALL use `/journal/...` and not an uppercase path

#### Scenario: Legacy route redirect

- **WHEN** a visitor opens `/Journal` or `/Photograph`
- **THEN** the site SHALL redirect to `/journal` or `/photography`

### Requirement: Content pages include discoverable SEO metadata

Journal listings, journal detail pages, and photography listings SHALL expose
canonical metadata and JSON-LD that matches the rendered page purpose.

#### Scenario: Journal detail metadata

- **WHEN** a journal detail page is rendered
- **THEN** the page SHALL include a canonical URL and BlogPosting JSON-LD

#### Scenario: Collection page metadata

- **WHEN** a journal or photography listing page is rendered
- **THEN** the page SHALL include collection-oriented metadata and breadcrumb
  JSON-LD

## Requirements

### Requirement: Spectra-visible content architecture baseline

The repository SHALL expose the current content architecture through Spectra
artifacts so contributors can inspect the site contract from OpenSpec without
reverse-engineering implementation files first.

#### Scenario: Project context is visible

- **WHEN** a contributor opens the Spectra project overview
- **THEN** the project context SHALL describe the stack, conventions, and
  validation commands instead of an empty placeholder

#### Scenario: Capability spec is visible

- **WHEN** a contributor opens the `content-architecture` capability
- **THEN** the spec SHALL describe centralized content, lowercase routes,
  legacy redirects, and SEO metadata expectations

<!-- @trace
source: improve-content-architecture
updated: 2026-05-19
code:
  - .agents/skills/spectra-commit/SKILL.md
  - .agents/skills/spectra-audit/SKILL.md
  - src/components/ArrowLink.astro
  - src/style/global.css
  - .agents/skills/spectra-ingest/SKILL.md
  - src/components/PhotoWall.astro
  - src/data/site-content.ts
  - README.md
  - .agents/skills/spectra-drift/SKILL.md
  - src/pages/photography.astro
  - src/layouts/Header.astro
  - .agents/skills/spectra-archive/SKILL.md
  - AGENTS.md
  - src/layouts/Footer.astro
  - scripts/smoke.mjs
  - src/pages/blog/index.astro
  - .agents/skills/spectra-debug/SKILL.md
  - src/pages/Photograph.astro
  - .nvmrc
  - .agents/skills/spectra-propose/SKILL.md
  - .agents/skills/spectra-discuss/SKILL.md
  - .agents/skills/spectra-apply/SKILL.md
  - src/pages/index.astro
  - src/components/BlogCard.astro
  - astro.config.ts
  - .spectra.yaml
  - src/components/Pagination.astro
  - src/pages/[...legacy].astro
  - .agents/skills/spectra-ask/SKILL.md
  - src/pages/Journal.astro
  - src/pages/journal/[slug].astro
  - package.json
  - src/layouts/Layout.astro
  - src/pages/journal/index.astro
-->