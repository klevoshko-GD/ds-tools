import StyleDictionary from 'style-dictionary';
import pc from 'picocolors';

const TOKENS_DIR = 'tokens';
const DIST_DIR   = 'dist';

// ─── Modes ────────────────────────────────────────────────────────────────────
// Each mode maps to its own token source file and CSS selector.
// Light tokens live in :root; dark tokens apply when data-theme="dark" is set
// on <html> (or any ancestor), so both files can be loaded together.
const MODES = [
  { name: 'light', selector: ':root' },
  { name: 'dark',  selector: '[data-theme="dark"]' },
];

// ─── Build ────────────────────────────────────────────────────────────────────
async function buildMode({ name: mode, selector }) {
  const sd = new StyleDictionary({
    // Mode-specific semantic tokens + shared brand primitives
    source: [
      `${TOKENS_DIR}/tokens.${mode}.json`,
      `${TOKENS_DIR}/brand.json`,
    ],

    hooks: {
      transformGroups: {
        // camelCase names + CSS-compatible colors (rgba() for alpha values)
        // Used for JS ES6 named exports
        'js/esm': ['attribute/cti', 'name/camel', 'color/css'],

        // kebab-case names + CSS-compatible colors
        // Used for the flat JSON token map
        'json/flat-tokens': ['attribute/cti', 'name/kebab', 'color/css'],
      },
    },

    platforms: {
      // ── CSS custom properties ──────────────────────────────────────────────
      // Output: dist/{mode}/variables.css
      //   Light → :root { --color-base-background: #ffffff; ... }
      //   Dark  → [data-theme="dark"] { --color-base-background: #202020; ... }
      css: {
        transformGroup: 'css',
        buildPath: `${DIST_DIR}/${mode}/`,
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: {
              selector,
              outputReferences: false, // resolve all aliases to final values
            },
          },
        ],
      },

      // ── JavaScript ES6 named exports ───────────────────────────────────────
      // Output: dist/{mode}/tokens.js
      //   export const colorBaseBackground = '#ffffff';
      //   export const spacing4 = '16px';
      js: {
        transformGroup: 'js/esm',
        buildPath: `${DIST_DIR}/${mode}/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
          },
        ],
      },

      // ── Flat JSON token map ────────────────────────────────────────────────
      // Output: dist/{mode}/tokens.json
      //   { "color-base-background": "#ffffff", "spacing-4": "16px", ... }
      json: {
        transformGroup: 'json/flat-tokens',
        buildPath: `${DIST_DIR}/${mode}/`,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
  console.log(pc.green(`✓ ${mode}`), `→ ${DIST_DIR}/${mode}/ (CSS, JS, JSON)`);
}

// Build all modes sequentially
console.log(pc.bold('\nBuilding design tokens…\n'));
for (const mode of MODES) {
  await buildMode(mode);
}
console.log(pc.bold(pc.green('\nDone.\n')));
