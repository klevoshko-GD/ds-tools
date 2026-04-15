import React from 'react';
import { Input, InlineLabelInput } from './Input';

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

// ─── Inline Label Input ────────────────────────────────────────────────────────

// Trailing slot helpers used inside the Filled state demo
function ClearIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const ClearButton = ({ label = 'Clear' }) => (
  <button
    type="button"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px 3px 12px',
      background: 'var(--color-base-foreground, #1f1f21)',
      color: '#fff',
      border: 'none', borderRadius: 9999,
      fontSize: 12, fontWeight: 500, lineHeight: '18px',
      cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit',
    }}
  >
    {label}
    <span style={{ display: 'flex', alignItems: 'center' }}><ClearIcon /></span>
  </button>
);

const ChevronButton = () => (
  <button
    type="button"
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 28, height: 28,
      background: 'transparent',
      border: '1px solid var(--color-base-input, #d9dade)',
      borderRadius: 6,
      color: 'var(--color-base-muted-foreground, #91959f)',
      cursor: 'pointer', padding: 0,
    }}
  >
    <ChevronDownIcon />
  </button>
);

export const InlineLabelInputStates = {
  name: 'Inline Label Input',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
        Inline Label Input
      </h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        <strong>40px</strong> container · M3 compact density (−4).
        Label rests at <strong>14px</strong> (M3 Body Large, centered) when empty &amp; unfocused —
        floats to the top at <strong>11px</strong> (M3 Body Small, compact) on focus or when filled.
        Colors: muted (resting) → foreground/medium (focused &amp; filled) → destructive (error).
        Optional trailing slot for actions (clear, chevron, etc.).
      </p>

      {/* 3-column grid — 2 rows */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px 24px' }}>

        {/* 1 — Default */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Default</div>
          <InlineLabelInput
            id="il-default"
            label="Project"
            placeholder="Select project…"
          />
        </div>

        {/* 2 — Focus */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Focus</div>
          <InlineLabelInput
            id="il-focus"
            label="Project"
            placeholder="Select project…"
            forcedState="focus"
          />
        </div>

        {/* 3 — Filled */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Filled</div>
          <InlineLabelInput
            id="il-filled"
            label="Project"
            defaultValue="Boston Global HCP Web Experience Jan + 2 Others"
            trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>}
          />
        </div>

        {/* 4 — Disabled */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Disabled</div>
          <InlineLabelInput
            id="il-disabled"
            label="Project"
            defaultValue="Boston Global HCP Web Experience"
            disabled
            trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>}
          />
        </div>

        {/* 5 — Error */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Error</div>
          <InlineLabelInput
            id="il-error"
            label="Project"
            placeholder="Select project…"
            state="error"
            errorMessage="Please select a project."
          />
        </div>

        {/* 6 — Error Focus */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Error Focus</div>
          <InlineLabelInput
            id="il-error-focus"
            label="Project"
            placeholder="Select project…"
            forcedState="error-focus"
            errorMessage="Please select a project."
          />
        </div>

      </div>

      {/* With trailing slot — extra demo row */}
      <div style={{ marginTop: 40 }}>
        <Section title="With trailing actions" subtitle="Clear button + chevron on the right — common in filter / select inputs.">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px 24px' }}>
            <InlineLabelInput
              id="il-trail-default"
              label="Account"
              placeholder="All accounts"
              trailingSlot={<ChevronButton />}
            />
            <InlineLabelInput
              id="il-trail-filled"
              label="Account"
              defaultValue="Boston Scientific International SA"
              trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>}
            />
          </div>
        </Section>
      </div>

    </div>
  ),
};

// ─── Inline Label Input — Design Specifications ───────────────────────────────

export const InlineLabelSpec = {
  name: 'Inline Label — Specifications',
  render: () => {
    // ── shared spec style primitives ──────────────────────────────────────────
    const specLabel = {
      fontSize: 11, fontWeight: 700, color: '#6b7280',
      textTransform: 'uppercase', letterSpacing: '0.06em',
    };
    const specH2 = {
      fontSize: 18, fontWeight: 700, color: '#111827',
      margin: '0 0 6px', fontFamily: 'system-ui, sans-serif',
    };
    const specCaption = {
      fontSize: 13, color: '#6b7280',
      margin: '0 0 28px', fontFamily: 'system-ui, sans-serif', lineHeight: 1.5,
    };
    const divider = <div style={{ height: 1, background: '#f3f4f6', margin: '48px 0' }} />;

    // ── callout bubble ────────────────────────────────────────────────────────
    const Callout = ({ n, top, left }) => (
      <div style={{
        position: 'absolute', top, left,
        width: 20, height: 20, borderRadius: '50%',
        background: '#0069b4', color: '#fff',
        fontSize: 10, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        zIndex: 10, pointerEvents: 'none',
        fontFamily: 'system-ui, sans-serif',
      }}>
        {n}
      </div>
    );

    // ── annotation row ────────────────────────────────────────────────────────
    const ARow = ({ n, label, value }) => (
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          background: '#0069b4', color: '#fff',
          fontSize: 10, fontWeight: 700, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}>{n}</div>
        <div style={{ fontSize: 13, fontFamily: 'system-ui, sans-serif' }}>
          <strong style={{ color: '#111827' }}>{label}</strong>
          {value && <span style={{ color: '#6b7280' }}> — {value}</span>}
        </div>
      </div>
    );

    // ── do / don't card ───────────────────────────────────────────────────────
    const DDCard = ({ type, children, caption }) => {
      const isDo = type === 'do';
      return (
        <div style={{
          border: `1.5px solid ${isDo ? '#16a34a' : '#dc2626'}`,
          borderRadius: 8, overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{
            background: isDo ? '#f0fdf4' : '#fef2f2',
            padding: '16px 20px',
          }}>
            {children}
          </div>
          <div style={{
            padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 6,
            background: '#fff', borderTop: `1px solid ${isDo ? '#bbf7d0' : '#fecaca'}`,
          }}>
            <span style={{
              fontSize: 11, fontWeight: 700,
              color: isDo ? '#16a34a' : '#dc2626',
              textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>{isDo ? '✓  Do' : '✕  Don\'t'}</span>
            <span style={{ fontSize: 12, color: '#374151' }}>{caption}</span>
          </div>
        </div>
      );
    };

    // ── measurement line helper ───────────────────────────────────────────────
    const MeasLine = ({ label, vertical }) => (
      <div style={{
        position: 'absolute',
        ...(vertical
          ? { width: 1, background: '#0069b4', top: 0, bottom: 0, left: '50%' }
          : { height: 1, background: '#0069b4', left: 0, right: 0, top: '50%' }),
        opacity: 0.5,
      }}>
        <div style={{
          position: 'absolute', ...(vertical ? { top: '50%', left: 4 } : { left: '50%', top: 3 }),
          transform: vertical ? 'translateY(-50%)' : 'translateX(-50%)',
          fontSize: 10, fontWeight: 700, color: '#0069b4',
          background: '#fff', padding: '1px 4px', borderRadius: 3, whiteSpace: 'nowrap',
          fontFamily: 'system-ui, sans-serif',
        }}>{label}</div>
      </div>
    );

    return (
      <div style={{ padding: 40, fontFamily: 'system-ui, sans-serif', background: '#fff', maxWidth: 900 }}>

        {/* ── ANATOMY ─────────────────────────────────────────────────────── */}
        <h2 style={specH2}>Anatomy</h2>
        <p style={specCaption}>
          The floating-label input is a 40 px tall outlined container (M3 compact density −4).
          The label rests at body size (14px, centered) when empty, then floats to the top
          at 11px (M3 Body Small) on focus or when a value is present.
        </p>

        {/* Resting state diagram */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ ...specLabel, marginBottom: 12 }}>Resting (empty, unfocused)</div>
          <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* Annotated input */}
            <div style={{ position: 'relative', width: 320, flexShrink: 0 }}>
              {/* height ruler */}
              <div style={{
                position: 'absolute', right: -36, top: 0, bottom: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                pointerEvents: 'none',
              }}>
                <div style={{ flex: 1, width: 1, background: '#0069b4', opacity: 0.4 }} />
                <div style={{ fontSize: 10, fontWeight: 700, color: '#0069b4', padding: '2px 4px', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>56 px</div>
                <div style={{ flex: 1, width: 1, background: '#0069b4', opacity: 0.4 }} />
              </div>
              {/* horizontal cap lines */}
              <div style={{ position: 'absolute', right: -44, top: 0, width: 16, height: 1, background: '#0069b4', opacity: 0.5 }} />
              <div style={{ position: 'absolute', right: -44, bottom: 0, width: 16, height: 1, background: '#0069b4', opacity: 0.5 }} />

              <div style={{ position: 'relative' }}>
                <InlineLabelInput id="anat-rest" label="Project" placeholder="Select value…" />
                {/* callout 1 — container */}
                <Callout n={1} top={-10} left={-10} />
                {/* callout 2 — resting label */}
                <Callout n={2} top={16} left={64} />
              </div>
            </div>

            {/* Legend */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <ARow n={1} label="Container" value="40px height · 6px radius · 1px border (--color-base-input)" />
              <ARow n={2} label="Label (resting)" value="14px · weight 400 · color: muted-foreground · vertically centered" />
            </div>
          </div>
        </div>

        {/* Floating / filled state diagram */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ ...specLabel, marginBottom: 12 }}>Floating (focused or filled)</div>
          <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            <div style={{ position: 'relative', width: 320, flexShrink: 0 }}>
              {/* padding guide lines */}
              <div style={{
                position: 'absolute', top: 8, left: 12, right: 12, height: 1,
                background: '#0069b4', opacity: 0.25,
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 12, right: 12, height: 1,
                background: '#0069b4', opacity: 0.25,
              }} />

              <div style={{ position: 'relative' }}>
                <InlineLabelInput
                  id="anat-float"
                  label="Project"
                  defaultValue="Boston Global HCP Web Experience"
                  trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>}
                />
                {/* callout 3 — floating label */}
                <Callout n={3} top={0} left={60} />
                {/* callout 4 — value text */}
                <Callout n={4} top={28} left={60} />
                {/* callout 5 — trailing slot */}
                <Callout n={5} top={14} left={240} />
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 200 }}>
              <ARow n={3} label="Label (floating)" value="11px · weight 500 · color: foreground · 4px from top edge" />
              <ARow n={4} label="Value text" value="14px · weight 400 · color: foreground · bottom half of container" />
              <ARow n={5} label="Trailing slot" value="Optional — clear button, chevron, icon actions" />
            </div>
          </div>
        </div>

        {/* Spacing tokens table */}
        <div style={{
          marginTop: 28, background: '#f9fafb', borderRadius: 8,
          padding: '16px 20px', fontSize: 12,
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ ...specLabel, marginBottom: 12 }}>Measurements &amp; tokens</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px 24px' }}>
            {[
              ['Container height',    '40 px  (M3 compact density −4)'],
              ['Border radius',       '6 px'],
              ['Left padding',        '12 px'],
              ['Right padding',       '12 px'],
              ['Label top (floating)','4 px from box top'],
              ['Label size (resting)','14 px · weight 400  (M3 Body Large)'],
              ['Label size (floating)','11 px · weight 500  (M3 Body Small, compact)'],
              ['Value text',          '14 px · weight 400'],
              ['Label color (resting)','--color-base-muted-foreground'],
              ['Label color (float)', '--color-base-foreground'],
              ['Label color (error)', '--color-base-destructive'],
              ['Border (default)',    '--color-base-input (#d9dade)'],
              ['Border (focus)',      '--color-base-ring (#91959f)'],
              ['Border (error)',      '--color-base-destructive (#dc2626)'],
              ['Focus ring',         '0 0 0 3px rgba(145,149,159,.25)'],
              ['Error ring',         '0 0 0 3px rgba(220,38,38,.2)'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k}</span>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#374151' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {divider}

        {/* ── DO AND DON'TS ────────────────────────────────────────────────── */}
        <h2 style={specH2}>Do and Don'ts</h2>
        <p style={specCaption}>
          Guidance for using floating-label inputs correctly in context.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>

          <DDCard type="do" caption="Use sentence / title case for labels.">
            <InlineLabelInput id="dd-do1" label="Project" placeholder="Select project…" />
          </DDCard>

          <DDCard type="dont" caption="Don't use ALL CAPS — it looks like a screaming header, not a label.">
            <div style={{ position: 'relative' }}>
              <InlineLabelInput id="dd-dont1" label="PROJECT" placeholder="Select project…" />
            </div>
          </DDCard>

          <DDCard type="do" caption="Keep labels short and descriptive — 1–3 words.">
            <InlineLabelInput id="dd-do2" label="Account" placeholder="Select account…" />
          </DDCard>

          <DDCard type="dont" caption="Don't write labels as instructions or questions — that's what placeholder text is for.">
            <InlineLabelInput id="dd-dont2" label="Please choose your account here" placeholder="" />
          </DDCard>

          <DDCard type="do" caption="Use the trailing slot for lightweight actions (clear, chevron). Keep the slot uncluttered.">
            <InlineLabelInput
              id="dd-do3"
              label="Date range"
              defaultValue="Jan 2024 – Mar 2024"
              trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>}
            />
          </DDCard>

          <DDCard type="dont" caption="Don't stack multiple heavy controls in the trailing slot — it competes with the value.">
            <InlineLabelInput
              id="dd-dont3"
              label="Date range"
              defaultValue="Jan 2024 – Mar 2024"
              trailingSlot={
                <>
                  <ClearButton label="Reset" />
                  <ClearButton label="Edit" />
                  <ChevronButton />
                </>
              }
            />
          </DDCard>

          <DDCard type="do" caption="Show error messages below the field — brief, actionable, in sentence case.">
            <InlineLabelInput
              id="dd-do4"
              label="Project"
              state="error"
              errorMessage="Please select a project to continue."
            />
          </DDCard>

          <DDCard type="dont" caption="Don't leave the error state without a message — users won't know what to fix.">
            <InlineLabelInput id="dd-dont4" label="Project" state="error" />
          </DDCard>

        </div>

        {divider}

        {/* ── ADAPTIVE DESIGN ──────────────────────────────────────────────── */}
        <h2 style={specH2}>Adaptive Design</h2>
        <p style={specCaption}>
          Floating-label inputs fill their container width.
          On narrow viewports stack inputs vertically at full width;
          on wider layouts constrain to a max-width for readability.
        </p>

        {/* Mobile */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ ...specLabel, marginBottom: 12 }}>Mobile — full width</div>
          <div style={{
            width: 320, background: '#f7f8f8', borderRadius: 12,
            padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace', marginBottom: 4 }}>max-width: 100%</div>
            <InlineLabelInput id="ad-mobile-1" label="Project" defaultValue="Boston Global HCP Web Experience" trailingSlot={<><ClearButton label="Clear" /><ChevronButton /></>} />
            <InlineLabelInput id="ad-mobile-2" label="Account" placeholder="Select account…" trailingSlot={<ChevronButton />} />
            <InlineLabelInput id="ad-mobile-3" label="Date range" placeholder="Select range…" trailingSlot={<ChevronButton />} />
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
            Stack inputs vertically. Let them span the full container width.
            Min touch target: 44 × 44 px — the 56 px height already satisfies this.
          </p>
        </div>

        {/* Tablet / 2-column */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ ...specLabel, marginBottom: 12 }}>Tablet — 2-column grid</div>
          <div style={{
            maxWidth: 640, background: '#f7f8f8', borderRadius: 12,
            padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
          }}>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace', gridColumn: '1/-1', marginBottom: 4 }}>grid: 1fr 1fr · gap: 12px</div>
            <InlineLabelInput id="ad-tab-1" label="Project"    defaultValue="Boston Global HCP Web Experience" trailingSlot={<ChevronButton />} />
            <InlineLabelInput id="ad-tab-2" label="Account"    placeholder="Select account…"   trailingSlot={<ChevronButton />} />
            <InlineLabelInput id="ad-tab-3" label="Date range" placeholder="Select range…"     trailingSlot={<ChevronButton />} />
            <InlineLabelInput id="ad-tab-4" label="Region"     placeholder="Select region…"    trailingSlot={<ChevronButton />} />
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
            Use a 2-column grid when filters are related pairs (e.g. start/end date, region/account).
          </p>
        </div>

        {/* Desktop / constrained */}
        <div>
          <div style={{ ...specLabel, marginBottom: 12 }}>Desktop — constrained max-width</div>
          <div style={{
            maxWidth: 880, background: '#f7f8f8', borderRadius: 12,
            padding: 16, display: 'flex', gap: 12, flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace', width: '100%', marginBottom: 4 }}>flex-wrap · each item: min-width 200px, flex: 1</div>
            {['Project', 'Account', 'Date range', 'Region', 'Status'].map((lbl, i) => (
              <div key={lbl} style={{ flex: 1, minWidth: 180 }}>
                <InlineLabelInput
                  id={`ad-desk-${i}`}
                  label={lbl}
                  placeholder="Select…"
                  trailingSlot={<ChevronButton />}
                />
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
            On wide filter bars lay inputs out in a single row with <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>flex-wrap</code>.
            Set <code style={{ fontSize: 11, background: '#f3f4f6', padding: '1px 4px', borderRadius: 3 }}>min-width: ~180–200px</code> so labels never truncate awkwardly.
            Avoid exceeding 5–6 filters per row — break into rows or use a collapsible panel instead.
          </p>
        </div>

      </div>
    );
  },
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
