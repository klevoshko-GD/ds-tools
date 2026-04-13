import React from 'react';
import { Input } from './Input';

// ─── Icon helpers ──────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5 13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 5l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="#dc2626" strokeWidth="1.5"/>
      <path d="M8 5v4" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="#dc2626"/>
    </svg>
  );
}

// ─── Layout helpers ────────────────────────────────────────────────────────────

const Row = ({ children, gap = 24, wrap = true }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: wrap ? 'wrap' : 'nowrap', gap }}>
    {children}
  </div>
);

const Col = ({ children, width = 280 }) => (
  <div style={{ width, flexShrink: 0 }}>
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
  title: 'Design Tokens/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Input component — 36px height, 6px radius, 12px horizontal padding. States: default, focus (ring), error, disabled.',
      },
    },
  },
};

// ─── All States ────────────────────────────────────────────────────────────────

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Input States</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Height: <strong>36px</strong> · Radius: <strong>6px</strong> · Border default: <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>--color-base-input (#d9dade)</code> · Focus: <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>--color-base-ring (#91959f)</code>
      </p>

      <Section title="Default, focus, filled, disabled">
        <Row gap={24} wrap>
          <Col>
            <Input id="st-default" label="Default" placeholder="Placeholder" />
          </Col>
          <Col>
            <Input id="st-filled" label="Filled" placeholder="Placeholder" defaultValue="Filled value" />
          </Col>
          <Col>
            <Input id="st-disabled" label="Disabled" placeholder="Placeholder" disabled />
          </Col>
          <Col>
            <Input id="st-disabled-filled" label="Disabled (filled)" defaultValue="Filled value" disabled />
          </Col>
        </Row>
      </Section>

      <Section title="Error state">
        <Row gap={24} wrap>
          <Col>
            <Input
              id="st-error"
              label="Email"
              placeholder="name@example.com"
              state="error"
              errorMessage="Please enter a valid email address."
            />
          </Col>
          <Col>
            <Input
              id="st-error-filled"
              label="Email"
              defaultValue="not-an-email"
              state="error"
              errorMessage="Please enter a valid email address."
            />
          </Col>
        </Row>
      </Section>

      <Section title="With description">
        <Row gap={24} wrap>
          <Col>
            <Input
              id="st-desc"
              label="Username"
              placeholder="e.g. john_doe"
              description="Letters, numbers, and underscores only."
            />
          </Col>
          <Col>
            <Input
              id="st-desc2"
              label="Password"
              type="password"
              placeholder="Enter password"
              description="Minimum 8 characters."
            />
          </Col>
        </Row>
      </Section>
    </div>
  ),
};

// ─── With Icons ────────────────────────────────────────────────────────────────

export const WithIcons = {
  name: 'With Icons',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Input with Icons</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Leading and trailing icon slots. Icons use <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>--color-base-muted-foreground</code>.
      </p>

      <Section title="Leading icon">
        <Row gap={24} wrap>
          <Col>
            <Input id="icon-search" label="Search" placeholder="Search…" leadingIcon={<SearchIcon />} />
          </Col>
          <Col>
            <Input id="icon-email" label="Email" placeholder="name@example.com" leadingIcon={<MailIcon />} />
          </Col>
          <Col>
            <Input id="icon-email-err" label="Email" placeholder="name@example.com" state="error" leadingIcon={<MailIcon />} errorMessage="Invalid email address." />
          </Col>
        </Row>
      </Section>

      <Section title="Trailing icon">
        <Row gap={24} wrap>
          <Col>
            <Input id="icon-pw" label="Password" type="password" placeholder="Enter password" trailingIcon={<EyeIcon />} />
          </Col>
          <Col>
            <Input id="icon-err-trailing" label="Field" placeholder="Enter value" state="error" trailingIcon={<AlertIcon />} errorMessage="This field has an error." />
          </Col>
        </Row>
      </Section>

      <Section title="Both icons">
        <Row gap={24} wrap>
          <Col>
            <Input
              id="icon-both"
              label="Search by email"
              placeholder="name@example.com"
              leadingIcon={<MailIcon />}
              trailingIcon={<SearchIcon />}
            />
          </Col>
        </Row>
      </Section>
    </div>
  ),
};

// ─── Common Patterns ───────────────────────────────────────────────────────────

export const CommonPatterns = {
  name: 'Common Patterns',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 40 }}>Common Patterns</h2>

      <Section title="Login form">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
          <Input id="login-email" label="Email" type="email" placeholder="name@example.com" leadingIcon={<MailIcon />} />
          <Input id="login-pw"    label="Password" type="password" placeholder="Enter your password" trailingIcon={<EyeIcon />} description="Forgot your password?" />
        </div>
      </Section>

      <Section title="Search bar">
        <div style={{ maxWidth: 400 }}>
          <Input id="search" placeholder="Search products…" leadingIcon={<SearchIcon />} />
        </div>
      </Section>

      <Section title="Validation errors">
        <Row gap={24} wrap>
          <Col>
            <Input
              id="val-email"
              label="Email address"
              defaultValue="notanemail"
              state="error"
              leadingIcon={<MailIcon />}
              errorMessage="Enter a valid email address."
            />
          </Col>
          <Col>
            <Input
              id="val-pw"
              label="Password"
              type="password"
              defaultValue="abc"
              state="error"
              trailingIcon={<AlertIcon />}
              errorMessage="Password must be at least 8 characters."
            />
          </Col>
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
      { state: 'Default',       bg: '#ffffff', border: '#d9dade', text: '#1f1f21', ph: '#91959f', token: '--color-base-input' },
      { state: 'Focus',         bg: '#ffffff', border: '#91959f', text: '#1f1f21', ph: '#91959f', token: '--color-base-ring' },
      { state: 'Filled',        bg: '#ffffff', border: '#d9dade', text: '#1f1f21', ph: '#91959f', token: '--color-base-input' },
      { state: 'Error',         bg: '#ffffff', border: '#dc2626', text: '#1f1f21', ph: '#91959f', token: '--color-base-destructive' },
      { state: 'Error Focus',   bg: '#ffffff', border: '#dc2626', text: '#1f1f21', ph: '#91959f', token: '--color-base-destructive + ring' },
      { state: 'Disabled',      bg: '#ffffff', border: '#d9dade', text: '#1f1f21', ph: '#91959f', token: 'opacity: 0.5' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };
    const sw = (color) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 12, height: 12, borderRadius: 2, background: color, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
        <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{color}</span>
      </span>
    );

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Token Reference</h2>

        <div style={{ marginBottom: 24, padding: 12, background: '#f9fafb', borderRadius: 8, fontSize: 12, color: '#374151' }}>
          <strong>Dimensions:</strong> height=36px · padding=4px 12px · borderRadius=6px · borderWidth=1px
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['State', 'Background', 'Border', 'Text', 'Placeholder', 'Token'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({ state, bg, border, text, ph, token }, i) => (
              <tr key={state} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{state}</td>
                <td style={td}>{sw(bg)}</td>
                <td style={td}>{sw(border)}</td>
                <td style={td}>{sw(text)}</td>
                <td style={td}>{sw(ph)}</td>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
