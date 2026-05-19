## ADDED Requirements

### Requirement: README describes project purpose in Chinese

The README SHALL describe the project's purpose, target content, and primary
collaborator audience in Chinese so a contributor can understand what the site
is for before reading implementation files.

#### Scenario: Purpose summary is visible

- **WHEN** a contributor opens the README
- **THEN** the document SHALL explain that the site is a personal portfolio and
  travel photography journal built for contributor-facing maintenance

### Requirement: README describes public pages from existing behavior

The README SHALL describe the public pages and what each page renders from
existing data without inventing functionality that does not exist in the code.

#### Scenario: Public pages are listed

- **WHEN** a contributor reads the README page overview
- **THEN** the document SHALL describe `/`, `/photography`, `/journal`, and
  `/journal/[slug]` using behavior that matches the current implementation

### Requirement: README describes centralized content at a human-readable level

The README SHALL describe the centralized content source and the required entry
fields for posts and photos in human-readable language rather than raw type
definitions.

#### Scenario: Content source is explained

- **WHEN** a contributor reads the content model section
- **THEN** the document SHALL name the shared content source and explain the
  required post and photo fields in readable Chinese

### Requirement: README describes route and SEO responsibilities

The README SHALL describe canonical lowercase routes, legacy redirects, and SEO
responsibilities without contradicting the runtime route behavior.

#### Scenario: Canonical and legacy routes are distinguished

- **WHEN** a contributor reads the routing section
- **THEN** the document SHALL distinguish canonical lowercase routes from
  compatibility redirect routes

#### Scenario: SEO ownership is explained

- **WHEN** a contributor reads the SEO section
- **THEN** the document SHALL explain where shared metadata composition happens
  and what page-level metadata is expected

### Requirement: README describes validation workflow

The README SHALL describe the validation commands and when contributors use
them before shipping documentation or content updates.

#### Scenario: Validation command purpose is visible

- **WHEN** a contributor reads the development workflow section
- **THEN** the document SHALL explain the role of `npm run check`,
  `npm run build`, `npm run smoke`, and `npm run validate`
