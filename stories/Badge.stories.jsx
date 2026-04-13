import React from 'react';
import { Badge, BadgeNumber, BadgeStatus } from './Badge';
import {
  CheckIcon, AlertCircleIcon, ShieldIcon, EditIcon,
  CheckCircleIcon, CheckCircleFilledIcon, AlertTriangleIcon,
} from './Icons';

// ─── Layout helpers ────────────────────────────────────────────────────────────

const Row = ({ children, gap = 12, wrap = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: wrap ? 'wrap' : 'nowrap', gap }}>
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
  title: 'Design Tokens/Badge',
  component: Badge,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Badge component — pill-shaped label, 9 variants. BadgeNumber — compact numeric counter, 4 variants.',
      },
    },
  },
};

// ─── All Variants ──────────────────────────────────────────────────────────────

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Badge</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Pill labels for status, categories, or counts. Height auto · border-radius 9999px · font 12px/600.
      </p>

      <Section title="Text badges">
        <Row gap={12}>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="outline-secondary">Outline Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="caution">Caution</Badge>
          <Badge variant="verified">Verified</Badge>
        </Row>
      </Section>

      <Section title="With leading icon">
        <Row gap={12}>
          <Badge variant="default" icon={<CheckIcon />}>Default</Badge>
          <Badge variant="secondary" icon={<AlertCircleIcon />}>Secondary</Badge>
          <Badge variant="outline" icon={<AlertCircleIcon />}>Outline</Badge>
          <Badge variant="destructive" icon={<AlertCircleIcon />}>Destructive</Badge>
          <Badge variant="success" icon={<CheckIcon />}>Success</Badge>
          <Badge variant="warning" icon={<AlertCircleIcon />}>Warning</Badge>
          <Badge variant="caution" icon={<AlertCircleIcon />}>Caution</Badge>
          <Badge variant="verified" icon={<ShieldIcon />}>Verified</Badge>
        </Row>
      </Section>

      <Section title="Badge Number — default | secondary | outline | destructive">
        <Row gap={12}>
          <BadgeNumber variant="default">8</BadgeNumber>
          <BadgeNumber variant="default">42</BadgeNumber>
          <BadgeNumber variant="secondary">8</BadgeNumber>
          <BadgeNumber variant="secondary">42</BadgeNumber>
          <BadgeNumber variant="outline">8</BadgeNumber>
          <BadgeNumber variant="outline">42</BadgeNumber>
          <BadgeNumber variant="destructive">8</BadgeNumber>
          <BadgeNumber variant="destructive">99+</BadgeNumber>
        </Row>
      </Section>
    </div>
  ),
};

// ─── Status Variants ───────────────────────────────────────────────────────────

export const StatusVariants = {
  name: 'Status Variants',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Status Badges</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Semantic colour tokens from status palette. Each variant uses its own bg/border/text triplet.
      </p>

      {[
        { variant: 'default',          label: 'Default',          bg: '#0069b4', border: '#0069b4', text: '#f7f8f8' },
        { variant: 'secondary',        label: 'Secondary',        bg: '#f5f5f5', border: '#f5f5f5', text: '#41434b' },
        { variant: 'outline',          label: 'Outline',          bg: 'transparent', border: '#d9dade', text: '#1f1f21' },
        { variant: 'outline-secondary',label: 'Outline Secondary',bg: 'transparent', border: '#d9dade', text: '#41434b' },
        { variant: 'destructive',      label: 'Destructive',      bg: '#fee2e2', border: '#fecaca', text: '#dc2626' },
        { variant: 'success',          label: 'Success',          bg: '#f0fdf4', border: '#16a34a', text: '#16a34a' },
        { variant: 'warning',          label: 'Warning',          bg: '#fff7ed', border: '#ea580c', text: '#ea580c' },
        { variant: 'caution',          label: 'Caution',          bg: '#fffbeb', border: '#f59e0b', text: '#f59e0b' },
        { variant: 'verified',         label: 'Verified',         bg: '#eff6ff', border: '#bfdbfe', text: '#2563eb' },
      ].map(({ variant, label, bg, border, text }) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 160 }}>
            <Badge variant={variant}>{label}</Badge>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 11, fontFamily: 'monospace', color: '#6b7280' }}>
            <span>bg: {bg}</span>
            <span>border: {border}</span>
            <span>text: {text}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Common Patterns ───────────────────────────────────────────────────────────

export const CommonPatterns = {
  name: 'Common Patterns',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 40 }}>Common Patterns</h2>

      <Section title="Order statuses">
        <Row gap={8}>
          <Badge variant="success" icon={<CheckIcon />}>Delivered</Badge>
          <Badge variant="default">Processing</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="caution">On Hold</Badge>
          <Badge variant="destructive">Cancelled</Badge>
          <Badge variant="secondary">Draft</Badge>
        </Row>
      </Section>

      <Section title="Notification counts">
        <Row gap={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
            Inbox <BadgeNumber variant="destructive">3</BadgeNumber>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
            Updates <BadgeNumber variant="default">12</BadgeNumber>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
            Archived <BadgeNumber variant="secondary">99+</BadgeNumber>
          </div>
        </Row>
      </Section>

      <Section title="Feature labels">
        <Row gap={8}>
          <Badge variant="verified" icon={<ShieldIcon />}>Verified Seller</Badge>
          <Badge variant="default">New</Badge>
          <Badge variant="caution">Beta</Badge>
          <Badge variant="outline">Pro</Badge>
        </Row>
      </Section>
    </div>
  ),
};

// ─── Token Reference ───────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const rows = [
      { variant: 'default',           bg: '#0069b4', border: '#0069b4',     text: '#f7f8f8', token: '--color-base-primary' },
      { variant: 'secondary',         bg: '#f5f5f5', border: '#f5f5f5',     text: '#41434b', token: '--color-base-secondary' },
      { variant: 'outline',           bg: 'transp.', border: '#d9dade',     text: '#1f1f21', token: '--color-base-input' },
      { variant: 'outline-secondary', bg: 'transp.', border: '#d9dade',     text: '#41434b', token: '--color-base-input' },
      { variant: 'destructive',       bg: '#fee2e2', border: '#fecaca',     text: '#dc2626', token: '--color-base-destructive' },
      { variant: 'success',           bg: '#f0fdf4', border: '#16a34a',     text: '#16a34a', token: '--color-status-success-*' },
      { variant: 'warning',           bg: '#fff7ed', border: '#ea580c',     text: '#ea580c', token: '--color-status-warning-*' },
      { variant: 'caution',           bg: '#fffbeb', border: '#f59e0b',     text: '#f59e0b', token: '--color-status-caution-*' },
      { variant: 'verified',          bg: '#eff6ff', border: '#bfdbfe',     text: '#2563eb', token: 'info blue (hardcoded)' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };
    const sw = (color) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 12, height: 12, borderRadius: 2, background: color === 'transp.' ? 'transparent' : color, border: '1px solid rgba(0,0,0,0.15)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{color}</span>
      </span>
    );

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Token Reference</h2>

        <div style={{ marginBottom: 24, padding: 12, background: '#f9fafb', borderRadius: 8, fontSize: 12, color: '#374151' }}>
          <strong>Dimensions:</strong> padding=2px 10px · border-radius=9999px · font=12px/600<br/>
          <strong>BadgeNumber:</strong> height=20px · min-width=20px · padding=0 6px · font=11px/700
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Variant', 'Preview', 'Background', 'Border', 'Text', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({ variant, bg, border, text, token }, i) => (
              <tr key={variant} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#111827' }}>{variant}</td>
                <td style={td}><Badge variant={variant}>{variant}</Badge></td>
                <td style={td}>{sw(bg)}</td>
                <td style={td}>{sw(border)}</td>
                <td style={td}>{sw(text)}</td>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

// ─── Status Badges (Badges/Status) ────────────────────────────────────────────

export const StatusBadges = {
  name: 'Status Badges (O/R/P)',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Badges/Status</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Forecasting/pipeline status badges — Optimistic, Realistic, Pessimistic.
        Letter circle prefix + full label. Component: <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>BadgeStatus</code>
      </p>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>All variants</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <BadgeStatus variant="optimistic" />
          <BadgeStatus variant="realistic" />
          <BadgeStatus variant="pessimistic" />
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>In context — forecast pipeline</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
          {[
            { label: 'Q1 Target',     badge: 'optimistic' },
            { label: 'Q2 Pipeline',   badge: 'realistic' },
            { label: 'Q3 Forecast',   badge: 'pessimistic' },
            { label: 'Annual Goal',   badge: 'optimistic' },
          ].map(({ label, badge }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderRadius: 8, border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: 14, color: '#111827' }}>{label}</span>
              <BadgeStatus variant={badge} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Token mapping</h3>
        <table style={{ borderCollapse: 'collapse', fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
          <thead>
            <tr>
              {['Variant', 'Preview', 'Background token', 'Border token', 'Text token'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '6px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { variant: 'optimistic',  token: '--color-status-success-*', bg: '#f0fdf4', border: '#16a34a', text: '#16a34a' },
              { variant: 'realistic',   token: '--color-base-primary',     bg: '#eff6ff', border: '#0069b4', text: '#0069b4' },
              { variant: 'pessimistic', token: '--color-status-warning-*', bg: '#fff7ed', border: '#ea580c', text: '#ea580c' },
            ].map(({ variant, token, bg, border, text }, i) => (
              <tr key={variant} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600, color: '#111827', textTransform: 'capitalize' }}>{variant}</td>
                <td style={{ padding: '10px 12px' }}><BadgeStatus variant={variant} /></td>
                <td style={{ padding: '10px 12px', fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 12, height: 12, borderRadius: 2, background: border, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{border}</span>
                  </span>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 12, height: 12, borderRadius: 2, background: text, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{text}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};
