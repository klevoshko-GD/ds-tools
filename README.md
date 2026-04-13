# DS-Tools

A design token pipeline that transforms token definitions into CSS custom properties, JavaScript exports, and JSON maps — with full light/dark theme support and a Storybook component library.

## Overview

DS-Tools uses [Style Dictionary v5](https://styledictionary.com/) to compile token definitions from `/tokens` into three consumable output formats for use in any web application. A [Storybook](https://storybook.js.org/) setup provides live documentation for both design tokens and UI components.

## Requirements

- Node.js >= 18

## Installation

```bash
npm install
```

## Scripts

| Command | Description |
|---|---|
| `npm run build` | Compile tokens and write output to `dist/` |
| `npm run pipeline` | Validate tokens, then build |
| `npm run pipeline:ci` | Same as `pipeline`, for CI environments |
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook for deployment |

## Token Sources

Token definitions live in `/tokens`:

| File | Contents |
|---|---|
| `brand.json` | Primitive brand color palettes (Mariner, Wagyu, Angus) |
| `tokens.light.json` | Semantic light-mode tokens |
| `tokens.dark.json` | Semantic dark-mode tokens |
| `guidelines.json` | Token descriptions and documentation metadata |

Token categories: colors, spacing, border-radius, typography, UI states (buttons, chips, status indicators, data visualization).

## Build Output

Running `npm run build` generates `dist/light/` and `dist/dark/`, each containing:

```
dist/
├── light/
│   ├── variables.css   # CSS custom properties under :root
│   ├── tokens.js       # ES6 named exports (camelCase)
│   └── tokens.json     # Flat key-value map (kebab-case)
└── dark/
    ├── variables.css   # CSS custom properties under [data-theme="dark"]
    ├── tokens.js
    └── tokens.json
```

234 tokens are generated per theme.

### CSS

```css
/* Import both themes */
@import 'ds-tools/dist/light/variables.css';
@import 'ds-tools/dist/dark/variables.css';
```

```css
.button {
  background: var(--color-base-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}
```

Toggle dark mode by setting `data-theme="dark"` on the `<html>` element.

### JavaScript

```js
import { colorBasePrimary, spacing4 } from 'ds-tools/dist/light/tokens.js';
```

### JSON

```js
import tokens from 'ds-tools/dist/light/tokens.json' assert { type: 'json' };
const primary = tokens['color-base-primary'];
```

## Component Library

Storybook stories are in `/stories` and cover:

- **UI components**: Button, Badge, Checkbox, Avatar, Accordion, Input, Table, TimesheetCell, Icons, Header, Page
- **Token guides**: Colors, Spacing, BorderRadius

Run `npm run storybook` to browse them at `http://localhost:6006`.

## Project Structure

```
DS-Tools/
├── tokens/                  # Token source definitions
├── stories/                 # Storybook stories and React components
│   └── components/          # Component implementations
├── dist/                    # Generated output (do not edit manually)
├── .storybook/              # Storybook configuration
├── style-dictionary.config.mjs  # Style Dictionary build config
└── package.json
```
