import React from 'react';
import {
  Page, SectionTitle, SubTitle,
  ColorSwatch, SemanticSwatch, SwatchRow,
} from './TokenGrid.jsx';

import lightTokens from '../../dist/light/tokens.json';
import darkTokens  from '../../dist/dark/tokens.json' ;
import guidelines  from '../../tokens/guidelines.json' ;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const guideMap = Object.fromEntries(
  guidelines.guidelines.map(g => [g.token, g])
);

function semanticDesc(tokenPath) {
  // tokenPath like "color.base.background"
  return guideMap[tokenPath]?.description || '';
}

function tokensByGroup(prefix) {
  return Object.entries(lightTokens)
    .filter(([k]) => k.startsWith(`color-${prefix}-`))
    .sort(([a], [b]) => a.localeCompare(b));
}

function label(key) {
  // "color-base-background" → "background"
  return key.replace(/^color-[^-]+-/, '');
}

// ─── Brand palette ────────────────────────────────────────────────────────────

// label → token key (wagyu tokens are now displayed as "Tools")
const PALETTES = [
  { label: 'Mariner', tokenKey: 'mariner' },
  { label: 'Tools',   tokenKey: 'wagyu'   },
  { label: 'Angus',   tokenKey: 'angus'   },
];
const SHADE_ORDER = ['50','100','150','200','300','400','500','600','700','800','850','875','900','925','950'];

function PaletteRow({ label, tokenKey }) {
  const entries = SHADE_ORDER
    .map(shade => {
      const key = `color-brand-${tokenKey}-${shade}`;
      return lightTokens[key] ? { shade, key, value: lightTokens[key] } : null;
    })
    .filter(Boolean);

  return (
    <>
      <SubTitle>{label}</SubTitle>
      <SwatchRow>
        {entries.map(({ shade, key, value }) => (
          <ColorSwatch key={key} name={shade} value={value} tokenKey={key} />
        ))}
      </SwatchRow>
    </>
  );
}

// ─── Semantic section ─────────────────────────────────────────────────────────

function SemanticGroup({ title, prefix, guidePrefix }) {
  const entries = tokensByGroup(prefix);
  if (!entries.length) return null;

  return (
    <>
      <SubTitle>{title}</SubTitle>
      <SwatchRow>
        {entries.map(([key, lightVal]) => {
          const name = label(key);
          const guideKey = `color.${guidePrefix || prefix}.${name}`;
          return (
            <SemanticSwatch
              key={key}
              name={name}
              lightValue={lightVal}
              darkValue={darkTokens[key]}
              description={semanticDesc(guideKey)}
            />
          );
        })}
      </SwatchRow>
    </>
  );
}

// ─── Status groups (grouped by status type) ───────────────────────────────────

const STATUS_TYPES = ['success', 'error', 'warning', 'caution', 'info', 'passive'];
const STATUS_ROLES = ['background', 'border', 'icon', 'primary-text', 'secondary-text'];

function StatusGroup() {
  return (
    <>
      <SubTitle>Status</SubTitle>
      {STATUS_TYPES.map(type => {
        const entries = STATUS_ROLES.map(role => {
          const key = `color-status-${type}-${role}`;
          return lightTokens[key] ? { key, role } : null;
        }).filter(Boolean);
        if (!entries.length) return null;
        return (
          <div key={type} style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#374151', marginBottom: '8px', textTransform: 'capitalize' }}>
              {type}
            </div>
            <SwatchRow>
              {entries.map(({ key, role }) => (
                <SemanticSwatch
                  key={key}
                  name={role}
                  lightValue={lightTokens[key]}
                  darkValue={darkTokens[key]}
                />
              ))}
            </SwatchRow>
          </div>
        );
      })}
    </>
  );
}

// ─── Alpha overlays ───────────────────────────────────────────────────────────

function AlphaGroup() {
  const entries = Object.entries(lightTokens)
    .filter(([k]) => k.startsWith('color-alpha-'))
    .sort(([a], [b]) => {
      const na = parseInt(a.replace('color-alpha-', ''), 10);
      const nb = parseInt(b.replace('color-alpha-', ''), 10);
      return na - nb;
    });

  return (
    <>
      <SubTitle>Alpha overlays</SubTitle>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {entries.map(([key, lightVal]) => {
          const name = key.replace('color-alpha-', '') + '%';
          return (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              {/* Checkerboard behind alpha swatch */}
              <div style={{
                width: '56px', height: '40px', borderRadius: '6px', overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundImage: `linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%)`,
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0,0 4px,4px -4px,-4px 0',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: lightVal }} />
              </div>
              <span style={{ fontSize: '10px', color: '#374151' }}>L {name}</span>
              <div style={{
                width: '56px', height: '40px', borderRadius: '6px', overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundImage: `linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%)`,
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0,0 4px,4px -4px,-4px 0',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: darkTokens[key] }} />
              </div>
              <span style={{ fontSize: '10px', color: '#374151' }}>D {name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'All design token colors extracted from Figma. Left half of each swatch = Light mode, right half = Dark mode.',
      },
    },
  },
};

export const BrandPalettes = {
  name: 'Brand Palettes',
  render: () => (
    <Page>
      <SectionTitle>Brand Palettes</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>
        Primitive color scales. Use semantic tokens in components — reach for these only when building new semantic mappings.
      </p>
      {PALETTES.map(p => <PaletteRow key={p.tokenKey} label={p.label} tokenKey={p.tokenKey} />)}
    </Page>
  ),
};

export const SemanticColors = {
  name: 'Semantic — Base',
  render: () => (
    <Page>
      <SectionTitle>Semantic Colors — Base</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>
        Split swatch: <strong>left = Light</strong>, <strong>right = Dark</strong>.
      </p>
      <SemanticGroup title="Surfaces & Text" prefix="base" />
    </Page>
  ),
};

export const StatusColors = {
  name: 'Semantic — Status',
  render: () => (
    <Page>
      <SectionTitle>Semantic Colors — Status</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>
        Use the full set (background + border + icon + text) together as a system within alert and toast components.
        Split swatch: <strong>left = Light</strong>, <strong>right = Dark</strong>.
      </p>
      <StatusGroup />
    </Page>
  ),
};

export const UIColors = {
  name: 'Semantic — UI',
  render: () => (
    <Page>
      <SectionTitle>Semantic Colors — UI & Components</SectionTitle>
      <SemanticGroup title="Navigation" prefix="ui" />
      <SemanticGroup title="Buttons" prefix="buttons" />
      <SemanticGroup title="Chips" prefix="chips" />
      <SemanticGroup title="Tags" prefix="tags" />
      <SemanticGroup title="Account Switcher" prefix="account-switcher" />
      <SemanticGroup title="Specifications" prefix="specifications" />
      <SemanticGroup title="Custom" prefix="custom" />
    </Page>
  ),
};

export const AlphaOverlays = {
  name: 'Alpha Overlays',
  render: () => (
    <Page>
      <SectionTitle>Alpha Overlays</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>
        White-based in Light mode, black-based in Dark mode. Use as scrims behind modals and layered surfaces.
      </p>
      <AlphaGroup />
    </Page>
  ),
};
