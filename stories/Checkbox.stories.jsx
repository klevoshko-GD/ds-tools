import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

// ─── Layout helpers ────────────────────────────────────────────────────────────

const Row = ({ children, gap = 24, wrap = true }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: wrap ? 'wrap' : 'nowrap', gap }}>
    {children}
  </div>
);

const Section = ({ title, subtitle, children }) => (
  <div style={{ marginBottom: 40 }}>
    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 4px', fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</h3>
    {subtitle && <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 16px', fontFamily: 'system-ui, sans-serif' }}>{subtitle}</p>}
    {!subtitle && <div style={{ marginBottom: 16 }} />}
    {children}
  </div>
);

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Checkbox component — 16×16px box, 4px corner radius. States: unchecked, checked, indeterminate, disabled.',
      },
    },
  },
};

// ─── All States ────────────────────────────────────────────────────────────────

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Checkbox States</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Box size: <strong>16×16px</strong> · Radius: <strong>4px</strong> · Checked fill: <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>--color-base-primary (#0069b4)</code>
      </p>

      <Section title="Unchecked / Checked / Indeterminate">
        <Row gap={32}>
          <Checkbox id="s1" label="Unchecked" />
          <Checkbox id="s2" checked label="Checked" />
          <Checkbox id="s3" indeterminate label="Indeterminate" />
        </Row>
      </Section>

      <Section title="Disabled">
        <Row gap={32}>
          <Checkbox id="d1" disabled label="Disabled unchecked" />
          <Checkbox id="d2" disabled checked label="Disabled checked" />
          <Checkbox id="d3" disabled indeterminate label="Disabled indeterminate" />
        </Row>
      </Section>

      <Section title="With description">
        <Row gap={32}>
          <Checkbox
            id="desc1"
            label="Accept terms"
            description="I agree to the terms and conditions."
          />
          <Checkbox
            id="desc2"
            checked
            label="Marketing emails"
            description="Receive product updates and offers."
          />
          <Checkbox
            id="desc3"
            disabled
            label="Disabled option"
            description="This option is currently unavailable."
          />
        </Row>
      </Section>

      <Section title="No label (standalone box)">
        <Row gap={24}>
          <Checkbox id="bare1" />
          <Checkbox id="bare2" checked />
          <Checkbox id="bare3" indeterminate />
          <Checkbox id="bare4" disabled />
          <Checkbox id="bare5" disabled checked />
        </Row>
      </Section>
    </div>
  ),
};

// ─── Interactive ───────────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive',
  render: () => {
    const [items, setItems] = useState([
      { id: 1, label: 'Option A', description: 'First selectable option', checked: false },
      { id: 2, label: 'Option B', description: 'Second selectable option', checked: true },
      { id: 3, label: 'Option C', description: 'Third selectable option', checked: false },
    ]);

    const allChecked = items.every(i => i.checked);
    const someChecked = items.some(i => i.checked) && !allChecked;

    const toggle = (id) =>
      setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));

    const toggleAll = () =>
      setItems(prev => prev.map(i => ({ ...i, checked: !allChecked })));

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff', maxWidth: 400 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Interactive Checkboxes</h2>

        <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #f3f4f6' }}>
            <Checkbox
              id="all"
              checked={allChecked}
              indeterminate={someChecked}
              label="Select all"
              onChange={toggleAll}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map(item => (
              <Checkbox
                key={item.id}
                id={`item-${item.id}`}
                checked={item.checked}
                label={item.label}
                description={item.description}
                onChange={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>

        <p style={{ fontSize: 12, color: '#6b7280', marginTop: 16 }}>
          Selected: {items.filter(i => i.checked).map(i => i.label).join(', ') || 'none'}
        </p>
      </div>
    );
  },
};

// ─── Token Reference ───────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const rows = [
      { state: 'Unchecked — default', bg: '#ffffff', border: '#d9dade', check: '—', token: '--color-base-input' },
      { state: 'Unchecked — hover',   bg: '#ffffff', border: '#91959f', check: '—', token: '--color-base-ring' },
      { state: 'Checked',             bg: '#0069b4', border: '#0069b4', check: '#f7f8f8', token: '--color-base-primary' },
      { state: 'Indeterminate',       bg: '#0069b4', border: '#0069b4', check: '#f7f8f8', token: '--color-base-primary' },
      { state: 'Disabled',            bg: '#ffffff', border: '#d9dade', check: '—', token: 'opacity: 0.5' },
      { state: 'Focus ring',          bg: '—', border: 'rgba(0,105,180,0.3)', check: '—', token: '--color-base-primary + 30%' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };
    const swatch = (color) => color !== '—'
      ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 2, background: color, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{color}</span>
        </span>
      : <span style={{ color: '#9ca3af' }}>—</span>;

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Token Reference</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['State', 'Box fill', 'Border', 'Check color', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({ state, bg, border, check, token }, i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{state}</td>
                <td style={td}>{swatch(bg)}</td>
                <td style={td}>{swatch(border)}</td>
                <td style={td}>{swatch(check)}</td>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
