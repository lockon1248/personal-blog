## ADDED Requirements

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
