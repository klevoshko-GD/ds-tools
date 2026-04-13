# Design Token Pipeline — Design Spec

**Date:** 2026-04-10
**Status:** Draft

---

## Overview

A full design token pipeline that ingests tokens from Figma, validates them, and transforms them into multiple output formats (CSS, SCSS, JS/TS, Tailwind). Built with npm, Style Dictionary v4, and a thin Figma sync layer.

---

## Architecture & Data Flow

The pipeline has four sequential stages:

```
Figma API  ──►  sync.js  ──►  tokens/  ──►  validate.js  ──►  style-dictionary  ──►  dist/
(PAT)           (fetch)       (JSON)         (lint)            (build)               (CSS/SCSS/JS/TW)
```

Each stage exits non-zero on failure. The `&&`-chained npm scripts (`pipeline`, `pipeline:ci`) halt immediately on any non-zero exit, ensuring a failed validation never allows a build to run and a failed build never commits output.

---

## Stage 1: Sync (`scripts/sync.js`)

### Purpose
Fetches Figma Variables from the Figma REST API and normalizes them to a Style Dictionary v4–compatible token JSON format, writing one file per token collection to `tokens/`.

### Figma API
- **Endpoint:** `GET /v1/files/:file_key/variables/local` (Figma Variables REST API — requires a paid Figma plan)
- **Authentication:** `X-Figma-Token: <FIGMA_PAT>` request header
- **File key:** read from `FIGMA_FILE_KEY` env var (the alphanumeric ID in the Figma file URL: `figma.com/file/<FILE_KEY>/...`)

### Output format
One JSON file per Figma variable collection, written to `tokens/<collection-name>.json`. Each file uses the Style Dictionary v4 token format:

```json
{
  "color": {
    "brand": {
      "primary": { "value": "#3B82F6", "type": "color" }
    }
  }
}
```

Note: Style Dictionary v4 uses `value` and `type` (not `$value`/`$type`). The sync script normalizes Figma's response directly to this format.

Supported token types written by sync: `color`, `dimension`, `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`, `opacity`, `number`, `string`.

### Fallback (manual export / CI)
If `FIGMA_PAT` is not set, `sync.js` logs a warning and exits 0 without modifying `tokens/`. `pipeline:ci` always runs without `sync`, relying on already-committed `tokens/` files.

### Error handling
- HTTP 4xx/5xx from Figma API: log the status + body, exit non-zero.
- Rate limit (HTTP 429): log and exit non-zero (no automatic retry in v1).
- Partial response (some collections missing): log an error and exit non-zero. A partial sync could cause validate/build to silently produce incomplete output, so the pipeline halts.

---

## Stage 2: Validate (`scripts/validate.js`)

### Purpose
Checks all `tokens/*.json` files for invalid values before the build runs. Exits non-zero if any error is found.

`dotenv` is loaded at the top of this script (and in `sync.js`) via `import 'dotenv/config'` to ensure env vars are available in local runs. In CI, env vars are injected directly and no `.env` file is required.

### Validation rules

Each rule describes the failure condition — the condition that triggers an error and a non-zero exit:

| Token `type`   | Field    | Failure condition                                                         | On failure          |
|----------------|----------|---------------------------------------------------------------------------|---------------------|
| `color`        | `value`  | Value is not a valid hex string (`#RGB`, `#RGBA`, `#RRGGBB`, `#RRGGBBAA`) | Error, exit non-zero |
| `number`       | `value`  | Value is not a finite JavaScript number                                   | Error, exit non-zero |
| `dimension`    | `value`  | Value does not match `<number>px` or `<number>rem`                        | Error, exit non-zero |
| `fontWeight`   | `value`  | Value is not a number in `[100, 900]` and a multiple of 100               | Error, exit non-zero |
| `opacity`      | `value`  | Value is not a number in `[0, 1]`                                         | Error, exit non-zero |
| any            | `type`   | `type` field is absent (null, undefined, or empty string)                 | Error, exit non-zero |
| any            | `value`  | `value` field is absent (null, undefined, or empty string)                | Error, exit non-zero |

**Unknown types:** If a token's `type` is present but not one of the supported types listed in Stage 1, the token is skipped with a warning (not an error). Only the absence of `type` entirely is an error.

**Type awareness:** Rules are applied per type. A `string` token is never checked against the hex or numeric rules. The types `fontFamily`, `fontSize`, `lineHeight`, and `string` have no format-specific validation rule — they are validated for presence only (covered by the `any.value` / `any.type` rules above).

---

## Stage 3: Build (`style-dictionary.config.js`)

### Purpose
Style Dictionary v4 reads all `tokens/*.json`, resolves aliases/references, and writes formatted output to `dist/`.

### Output files

| File                        | Format                          | Example output |
|-----------------------------|---------------------------------|----------------|
| `dist/css/variables.css`    | CSS custom properties           | `:root { --color-brand-primary: #3B82F6; }` |
| `dist/scss/_variables.scss` | SCSS variables                  | `$color-brand-primary: #3B82F6;` |
| `dist/js/tokens.js`         | ES module, named exports        | `export const colorBrandPrimary = '#3B82F6';` |
| `dist/js/tokens.d.ts`       | TypeScript declaration file     | `export declare const colorBrandPrimary: string;` (all token constants typed as `string`) |
| `dist/tailwind/tokens.js`   | Tailwind theme extension (CJS)  | `module.exports = { theme: { extend: { colors: { brand: { primary: '#3B82F6' } }, spacing: { sm: '8px' } } } }` |

### Tailwind formatter
Style Dictionary v4 does not ship a built-in Tailwind formatter. A custom `tailwindFormatter` must be written and registered in `style-dictionary.config.js`. It receives the resolved token dictionary and outputs a CJS `module.exports` object. Token type → Tailwind theme key mapping:

| Token `type` | Tailwind theme key  |
|--------------|---------------------|
| `color`      | `colors`            |
| `dimension`  | `spacing`           |

Only `color` and `dimension` tokens are included in the Tailwind output; all other types are intentionally excluded (including `fontSize` and `lineHeight`, which are out of scope for v1).

### Token naming
- CSS/SCSS: kebab-case (`color-brand-primary`)
- JS/TS and Tailwind: camelCase paths nested as objects (`colorBrandPrimary` for flat JS export; `{ brand: { primary } }` for nested Tailwind object)
- Token names from different Figma collections are namespaced by their collection name, preventing collisions.

### Style Dictionary v4 token format
Style Dictionary v4 reads the `value`/`type` format natively (not Tokens Studio's `$value`/`$type`). The sync script outputs this format directly, so no additional parser plugin is needed.

---

## Stage 4: npm Scripts

```json
{
  "scripts": {
    "sync":        "node scripts/sync.js",
    "validate":    "node scripts/validate.js",
    "build":       "style-dictionary build --config style-dictionary.config.js",
    "pipeline":    "npm run sync && npm run validate && npm run build",
    "pipeline:ci": "npm run validate && npm run build"
  }
}
```

- `pipeline` — full local run: fetch from Figma, validate, build. Halts on any stage failure.
- `pipeline:ci` — CI run: skips Figma fetch, uses committed `tokens/` JSON, validates, builds. Halts on any stage failure.

---

## Project Structure

```
design-token-pipeline/
├── tokens/                    # Source token JSON (Style Dictionary v4 format, committed)
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   └── ...
├── dist/                      # Generated output (gitignored — force-added by CI on main)
│   ├── css/variables.css
│   ├── scss/_variables.scss
│   ├── js/tokens.js
│   ├── js/tokens.d.ts
│   └── tailwind/tokens.js
├── scripts/
│   ├── sync.js
│   └── validate.js
├── style-dictionary.config.js
├── .env.example               # Documents required env vars (see below)
├── .gitignore                 # dist/, .env, node_modules/
├── .github/
│   └── workflows/
│       └── tokens.yml
└── package.json
```

### Key decisions
- `tokens/` is committed — it is the source of truth between Figma syncs.
- `dist/` is gitignored. The CI workflow commits `dist/` back to `main` using `git add -f dist/` (force-add to bypass `.gitignore`). This step only runs on push to `main`, not on PRs.
- The main-branch CI run builds from committed `tokens/`, not live Figma data. Live Figma sync is a separate manual or scheduled workflow step that commits updated `tokens/` files; a subsequent push to main then triggers the dist rebuild.

---

## Dependencies

### Runtime
- `style-dictionary` v4 — token transformation and output engine

### Dev
- `dotenv` — loads `.env` for local script execution; loaded via `import 'dotenv/config'` at the top of each script that needs env vars (`sync.js`, `validate.js`)
- `picocolors` — lightweight terminal coloring for script output

Node 18+ native `fetch` is used for Figma API calls. The `package.json` will include `"engines": { "node": ">=18" }` to surface a clear error on older Node versions.

---

## Environment Variables

`.env.example` contents:

```
# Figma Personal Access Token
# Generate at figma.com → Account Settings → Personal access tokens
# Requires a paid Figma plan to access the Variables API
FIGMA_PAT=

# Figma file key (alphanumeric ID in the Figma file URL)
# Example URL: https://www.figma.com/file/AbCdEfGhIjKl/My-Design-System
# File key: AbCdEfGhIjKl
FIGMA_FILE_KEY=
```

---

## CI/CD (GitHub Actions)

**File:** `.github/workflows/tokens.yml`

**Triggers:**
- Push to `main`
- Pull requests touching `tokens/**`

### On PR (validate + build only)
1. Checkout repo
2. Setup Node.js v20
3. `npm ci`
4. `npm run pipeline:ci` — validates and builds; confirms tokens are valid and buildable

No `dist/` files are committed during PR runs.

### On push to `main` (validate + build + commit dist)
1. Checkout repo
2. Setup Node.js v20
3. `npm ci`
4. `npm run pipeline:ci`
5. `git add -f dist/` — force-add bypasses `.gitignore`
6. `git commit -m "chore: regenerate dist [skip ci]"` — skipped automatically if no changes; `[skip ci]` prevents an infinite workflow loop
7. `git push` using `GITHUB_TOKEN` (the default Actions token); if branch protection rules require a PAT or deploy key, that must be configured separately

**Secrets required in GitHub Actions:** `FIGMA_PAT` and `FIGMA_FILE_KEY` — used only when a sync step is added to CI in the future (not required for `pipeline:ci`).

---

## Out of Scope (for now)

- Advanced token linting: naming convention enforcement, required token set checks
- Figma plugin development
- npm package publishing
- Multi-theme / multi-brand token sets
- Automatic retry on Figma API rate limits
- Scheduled CI sync from Figma (tokens/ update flow)
