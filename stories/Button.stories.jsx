import React from 'react';
import { Button } from './Button';

// ─── Helpers ───────────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Plus() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Trash() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M5 4V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V4M6 7v5M10 7v5M3 4l1 9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Search() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5 13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Layout helpers
const Row = ({ children, gap = 12, wrap = true, style }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: wrap ? 'wrap' : 'nowrap', gap, ...style }}>
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

const Label = ({ children }) => (
  <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace', marginTop: 6, textAlign: 'center' }}>{children}</div>
);

const LabelledButton = ({ label, ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Button {...props} />
    <Label>{label}</Label>
  </div>
);

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Token-driven button component. Reflects the Figma Button component set — 9 variants × 5 sizes × 6 states.',
      },
    },
  },
};

// ─── All Variants ──────────────────────────────────────────────────────────────

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Button Variants</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        All 9 variants at default size. Token: <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>--color-buttons-btn-*</code>
      </p>

      <Row gap={12} wrap>
        <LabelledButton variant="default"          label="default">Default</LabelledButton>
        <LabelledButton variant="secondary"        label="secondary">Secondary</LabelledButton>
        <LabelledButton variant="outline"          label="outline">Outline</LabelledButton>
        <LabelledButton variant="outline-brand"    label="outline-brand">Outline Brand</LabelledButton>
        <LabelledButton variant="outline-secondary" label="outline-secondary">Outline Secondary</LabelledButton>
        <LabelledButton variant="ghost"            label="ghost">Ghost</LabelledButton>
        <LabelledButton variant="ghost-secondary"  label="ghost-secondary">Ghost Secondary</LabelledButton>
        <LabelledButton variant="link"             label="link">Link</LabelledButton>
        <LabelledButton variant="destructive"      label="destructive">Destructive</LabelledButton>
      </Row>
    </div>
  ),
};

// ─── All Sizes ─────────────────────────────────────────────────────────────────

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Button Sizes</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        5 sizes shown on Default variant. Heights: xs=24px · sm=32px · default=36px · lg=40px · icon=36×36px
      </p>

      <Section title="Default variant — all sizes">
        <Row gap={12} wrap style={{ alignItems: 'flex-end' }}>
          <LabelledButton size="xs"      label="xs · 24px">Extra Small</LabelledButton>
          <LabelledButton size="sm"      label="sm · 32px">Small</LabelledButton>
          <LabelledButton size="default" label="default · 36px">Default</LabelledButton>
          <LabelledButton size="lg"      label="lg · 40px">Large</LabelledButton>
          <LabelledButton size="icon"    leftIcon={<Plus />} label="icon · 36×36px" />
        </Row>
      </Section>

      <Section title="Secondary variant — all sizes">
        <Row gap={12} wrap style={{ alignItems: 'flex-end' }}>
          <LabelledButton variant="secondary" size="xs"      label="xs">Extra Small</LabelledButton>
          <LabelledButton variant="secondary" size="sm"      label="sm">Small</LabelledButton>
          <LabelledButton variant="secondary" size="default" label="default">Default</LabelledButton>
          <LabelledButton variant="secondary" size="lg"      label="lg">Large</LabelledButton>
          <LabelledButton variant="secondary" size="icon"    leftIcon={<Plus />} label="icon" />
        </Row>
      </Section>

      <Section title="Outline variant — all sizes">
        <Row gap={12} wrap style={{ alignItems: 'flex-end' }}>
          <LabelledButton variant="outline" size="xs"      label="xs">Extra Small</LabelledButton>
          <LabelledButton variant="outline" size="sm"      label="sm">Small</LabelledButton>
          <LabelledButton variant="outline" size="default" label="default">Default</LabelledButton>
          <LabelledButton variant="outline" size="lg"      label="lg">Large</LabelledButton>
          <LabelledButton variant="outline" size="icon"    leftIcon={<Search />} label="icon" />
        </Row>
      </Section>
    </div>
  ),
};

// ─── States ────────────────────────────────────────────────────────────────────

export const States = {
  name: 'States',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Button States</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Default, disabled, and loading states across variants.
      </p>

      {[
        { variant: 'default',          label: 'Default (Primary)' },
        { variant: 'secondary',        label: 'Secondary' },
        { variant: 'outline',          label: 'Outline' },
        { variant: 'outline-brand',    label: 'Outline Brand' },
        { variant: 'ghost',            label: 'Ghost' },
        { variant: 'destructive',      label: 'Destructive' },
      ].map(({ variant, label }) => (
        <Section key={variant} title={label}>
          <Row gap={12}>
            <LabelledButton variant={variant} label="default">Button</LabelledButton>
            <LabelledButton variant={variant} disabled label="disabled">Button</LabelledButton>
            <LabelledButton variant={variant} loading label="loading">Button</LabelledButton>
          </Row>
        </Section>
      ))}
    </div>
  ),
};

// ─── Icons ─────────────────────────────────────────────────────────────────────

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Icons</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Left icon, right icon, and icon-only configurations.
      </p>

      <Section title="Icon left — all variants" subtitle="Leading icon before label text">
        <Row gap={12} wrap>
          <LabelledButton variant="default"           leftIcon={<Plus />}       label="default">Add Item</LabelledButton>
          <LabelledButton variant="secondary"         leftIcon={<Search />}     label="secondary">Search</LabelledButton>
          <LabelledButton variant="outline"           leftIcon={<Search />}     label="outline">Search</LabelledButton>
          <LabelledButton variant="outline-brand"     leftIcon={<Plus />}       label="outline-brand">Add Item</LabelledButton>
          <LabelledButton variant="outline-secondary" leftIcon={<Search />}     label="outline-secondary">Search</LabelledButton>
          <LabelledButton variant="ghost"             leftIcon={<Plus />}       label="ghost">Add Item</LabelledButton>
          <LabelledButton variant="ghost-secondary"   leftIcon={<Search />}     label="ghost-secondary">Search</LabelledButton>
          <LabelledButton variant="link"              leftIcon={<ArrowRight />} label="link">Open link</LabelledButton>
          <LabelledButton variant="destructive"       leftIcon={<Trash />}      label="destructive">Delete</LabelledButton>
        </Row>
      </Section>

      <Section title="Icon right — all variants" subtitle="Trailing icon after label text">
        <Row gap={12} wrap>
          <LabelledButton variant="default"           rightIcon={<ArrowRight />} label="default">Continue</LabelledButton>
          <LabelledButton variant="secondary"         rightIcon={<ArrowRight />} label="secondary">Continue</LabelledButton>
          <LabelledButton variant="outline"           rightIcon={<ArrowRight />} label="outline">Continue</LabelledButton>
          <LabelledButton variant="outline-brand"     rightIcon={<ArrowRight />} label="outline-brand">Learn more</LabelledButton>
          <LabelledButton variant="outline-secondary" rightIcon={<ArrowRight />} label="outline-secondary">Learn more</LabelledButton>
          <LabelledButton variant="ghost"             rightIcon={<ArrowRight />} label="ghost">View all</LabelledButton>
          <LabelledButton variant="ghost-secondary"   rightIcon={<ArrowRight />} label="ghost-secondary">View all</LabelledButton>
          <LabelledButton variant="link"              rightIcon={<ArrowRight />} label="link">See details</LabelledButton>
          <LabelledButton variant="destructive"       rightIcon={<Trash />}      label="destructive">Delete</LabelledButton>
        </Row>
      </Section>

      <Section title="Icon only — all variants">
        <Row gap={12} wrap style={{ alignItems: 'flex-end' }}>
          <LabelledButton variant="default"           size="icon" leftIcon={<Plus />}   label="default" />
          <LabelledButton variant="secondary"         size="icon" leftIcon={<Search />} label="secondary" />
          <LabelledButton variant="outline"           size="icon" leftIcon={<Search />} label="outline" />
          <LabelledButton variant="outline-brand"     size="icon" leftIcon={<Plus />}   label="outline-brand" />
          <LabelledButton variant="outline-secondary" size="icon" leftIcon={<Plus />}   label="outline-secondary" />
          <LabelledButton variant="ghost"             size="icon" leftIcon={<Plus />}   label="ghost" />
          <LabelledButton variant="ghost-secondary"   size="icon" leftIcon={<Search />} label="ghost-secondary" />
          <LabelledButton variant="destructive"       size="icon" leftIcon={<Trash />}  label="destructive" />
        </Row>
      </Section>

      <Section title="Icon only — all sizes">
        <Row gap={12} style={{ alignItems: 'flex-end' }}>
          <LabelledButton size="icon" style={{ width: 24, height: 24, fontSize: 11 }} leftIcon={<Plus />} label="xs" />
          <LabelledButton size="icon" style={{ width: 32, height: 32, fontSize: 13 }} leftIcon={<Plus />} label="sm" />
          <LabelledButton size="icon"                                                  leftIcon={<Plus />} label="default" />
          <LabelledButton size="icon" style={{ width: 40, height: 40 }}               leftIcon={<Plus />} label="lg" />
        </Row>
      </Section>
    </div>
  ),
};

// ─── Token Reference ───────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const VARIANT_TOKENS = [
      { variant: 'default',           css: 'color-buttons-btn-default-*',           bg: '#0069b4', text: '#ffffff', border: '#0069b4' },
      { variant: 'secondary',         css: 'color-buttons-btn-secondary-*',         bg: '#eeeef0', text: '#202020', border: 'none' },
      { variant: 'outline',           css: 'color-buttons-btn-outline-*',           bg: '#ffffff', text: '#202020', border: '#d9dade' },
      { variant: 'outline-brand',     css: 'color-buttons-btn-outline-brand-*',     bg: '#ffffff', text: '#0069b4', border: '#0069b4' },
      { variant: 'outline-secondary', css: 'color-buttons-btn-outline-secondary-*', bg: '#ffffff', text: '#202020', border: '#d9dade' },
      { variant: 'ghost',             css: 'color-buttons-btn-ghost-*',             bg: 'transparent', text: '#202020', border: 'none' },
      { variant: 'ghost-secondary',   css: 'color-buttons-btn-ghost-secondary-*',   bg: 'transparent', text: '#0069b4', border: 'none' },
      { variant: 'link',              css: 'color-buttons-btn-link-*',              bg: 'transparent', text: '#0069b4', border: 'none' },
      { variant: 'destructive',       css: 'color-buttons-btn-destructive-*',       bg: '#fee2e2', text: '#dc2626', border: 'none' },
    ];

    const SIZE_TABLE = [
      { size: 'xs',      height: '24px',  px: '8px',  py: '4px',  fontSize: '11px' },
      { size: 'sm',      height: '32px',  px: '12px', py: '8px',  fontSize: '13px' },
      { size: 'default', height: '36px',  px: '16px', py: '8px',  fontSize: '14px' },
      { size: 'lg',      height: '40px',  px: '32px', py: '8px',  fontSize: '15px' },
      { size: 'icon',    height: '36px',  px: '—',    py: '—',    fontSize: '14px' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };
    const mono = { fontFamily: 'monospace', fontSize: 11 };

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Token Reference</h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
          CSS custom property tokens for each variant and size.
        </p>

        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Variants</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 48 }}>
          <thead>
            <tr>
              {['Variant', 'Token group', 'BG (Light)', 'Text (Light)', 'Border (Light)', 'Preview'].map(h => (
                <th key={h} style={th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VARIANT_TOKENS.map(({ variant, css, bg, text, border }, i) => (
              <tr key={variant} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{variant}</td>
                <td style={{ ...td, ...mono, color: '#6b7280' }}>--{css}</td>
                <td style={{ ...td }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 14, height: 14, borderRadius: 3, background: bg, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                    <span style={{ ...mono }}>{bg}</span>
                  </span>
                </td>
                <td style={{ ...td }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 14, height: 14, borderRadius: 3, background: text, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                    <span style={{ ...mono }}>{text}</span>
                  </span>
                </td>
                <td style={{ ...td, ...mono, color: '#6b7280' }}>{border}</td>
                <td style={{ ...td }}>
                  <Button variant={variant} size="sm">Button</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sizes</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Size', 'Height', 'Padding X', 'Padding Y', 'Font Size', 'Preview'].map(h => (
                <th key={h} style={th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIZE_TABLE.map(({ size, height, px, py, fontSize }, i) => (
              <tr key={size} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{size}</td>
                <td style={{ ...td, ...mono }}>{height}</td>
                <td style={{ ...td, ...mono }}>{px}</td>
                <td style={{ ...td, ...mono }}>{py}</td>
                <td style={{ ...td, ...mono }}>{fontSize}</td>
                <td style={{ ...td }}>
                  {size === 'icon'
                    ? <Button size="icon" leftIcon={<Plus />} />
                    : <Button size={size}>Button</Button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
