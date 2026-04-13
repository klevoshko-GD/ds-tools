import React from 'react';
import { Page, SectionTitle, RadiusSwatch } from './TokenGrid.jsx';
import lightTokens from '../../dist/light/tokens.json';

const RADIUS_ORDER = [
  'rounded-none', 'rounded-xs', 'rounded-sm', 'rounded-md',
  'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl',
  'rounded-4xl', 'rounded-full',
];

const USAGE_NOTES = {
  'rounded-none':  'Data tables, sharp rule lines',
  'rounded-xs':    'Micro badges, tight labels',
  'rounded-sm':    'Badges, tags, small pills',
  'rounded-md':    'Inputs, buttons (default)',
  'rounded-lg':    'Cards, dropdowns, modals',
  'rounded-xl':    'Sheet panels, popovers',
  'rounded-2xl':   'Elevated containers',
  'rounded-3xl':   'Large pill shapes',
  'rounded-4xl':   'Hero containers',
  'rounded-full':  'Circular avatars, pill buttons',
};

const radiusEntries = RADIUS_ORDER
  .map(name => {
    const key = `border-radius-${name}`;
    return lightTokens[key] != null ? { name, key, value: lightTokens[key] } : null;
  })
  .filter(Boolean);

export default {
  title: 'Design Tokens/Border Radius',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Corner rounding scale. Match the component size to its rounding — larger surfaces use larger radii.',
      },
    },
  },
};

export const BorderRadiusScale = {
  name: 'Border Radius Scale',
  render: () => (
    <Page>
      <SectionTitle>Border Radius Scale</SectionTitle>
      <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 32px' }}>
        Match component size to rounding. Larger surfaces use larger radii.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end' }}>
        {radiusEntries.map(({ name, key, value }) => (
          <RadiusSwatch key={key} name={name} value={value} tokenKey={key} />
        ))}
      </div>

      {/* Usage table */}
      <div style={{ marginTop: '48px' }}>
        <SectionTitle>Usage Guide</SectionTitle>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
              {['Token', 'Value', 'CSS var', 'Use for'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '10px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {radiusEntries.map(({ name, key, value }, i) => (
              <tr key={key} style={{ borderBottom: '1px solid #F3F4F6', background: i % 2 === 0 ? '#FAFAFA' : '#FFFFFF' }}>
                <td style={{ padding: '8px 12px', fontWeight: 600, color: '#111827' }}>{name}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#374151' }}>{value}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#6B7280', fontSize: '11px' }}>
                  --{key}
                </td>
                <td style={{ padding: '8px 12px', color: '#6B7280' }}>{USAGE_NOTES[name] || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  ),
};
