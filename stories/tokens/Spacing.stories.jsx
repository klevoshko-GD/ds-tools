import React from 'react';
import { Page, SectionTitle, SpacingSwatch } from './TokenGrid.jsx';
import lightTokens from '../../dist/light/tokens.json';

const SPACING_ORDER = [
  '0', 'px', '0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4', '5', '6', '7',
  '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36',
  '40', '44', '48', '52', '56', '60', '64', '72', '80', '96',
];

const spacingEntries = SPACING_ORDER
  .map(step => {
    const key = `spacing-${step}`;
    return lightTokens[key] != null ? { step, key, value: lightTokens[key] } : null;
  })
  .filter(Boolean);

export default {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Spatial scale based on a 4 px base unit, Tailwind-compatible. Use these tokens for padding, margin, gap, and inset values.',
      },
    },
  },
};

export const SpacingScale = {
  name: 'Spacing Scale',
  render: () => (
    <Page>
      <SectionTitle>Spacing Scale</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 24px' }}>
        Base unit: <strong>4 px</strong>. Each bar is proportional to its pixel value (capped at 320 px for readability).
      </p>
      {/* Column headers */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '0 0 8px',
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '4px',
      }}>
        <div style={{ width: '80px', textAlign: 'right', fontSize: '10px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Step</div>
        <div style={{ fontSize: '10px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Visual size</div>
      </div>
      {spacingEntries.map(({ step, key, value }) => (
        <SpacingSwatch key={key} name={step} value={value} tokenKey={key} />
      ))}
      {/* Usage note */}
      <div style={{
        marginTop: '32px', padding: '16px', background: '#F9FAFB',
        borderRadius: '8px', fontSize: '12px', color: '#6B7280', lineHeight: 1.6,
      }}>
        <strong style={{ color: '#374151' }}>Usage: </strong>
        Reference as CSS custom properties: <code style={{ fontSize: '11px', background: '#F3F4F6', padding: '1px 5px', borderRadius: '3px' }}>var(--spacing-4)</code>{' '}
        or JS: <code style={{ fontSize: '11px', background: '#F3F4F6', padding: '1px 5px', borderRadius: '3px' }}>spacing4</code>{' '}
        or JSON key: <code style={{ fontSize: '11px', background: '#F3F4F6', padding: '1px 5px', borderRadius: '3px' }}>"spacing-4"</code>
      </div>
    </Page>
  ),
};
