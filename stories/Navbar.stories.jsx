import React, { useState } from 'react';
import { NavBar } from './Navbar';

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top navigation bar — 72px blue bar with brand logo, nav links, and user profile. ' +
          'Three variants: Account Profile (hamburger + 4 links), Timesheets (2 links), ' +
          'Staffing (hamburger + 4 links with counter badge). ' +
          'Ref: Figma node 194:6623.',
      },
    },
  },
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48, fontFamily: 'system-ui, sans-serif' }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: '#9ca3af',
        textTransform: 'uppercase', letterSpacing: '0.07em',
        marginBottom: 12, padding: '0 16px',
      }}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: '#f3f4f6', margin: '8px 0' }} />;
}

// ─── All Variants ──────────────────────────────────────────────────────────────

export const Default = {
  name: 'All Variants',
  render: () => (
    <div style={{ background: '#f7f8f8', minHeight: '100vh', paddingBottom: 32 }}>
      <div style={{
        padding: '24px 16px 16px',
        fontFamily: 'system-ui, sans-serif',
        fontSize: 20, fontWeight: 700, color: '#111827',
      }}>
        NavBar — All Variants
      </div>

      <Section title="Account Profile">
        <NavBar variant="account-profile" />
      </Section>

      <Divider />

      <Section title="Timesheets">
        <NavBar variant="timesheets" userInitials={null} />
      </Section>

      <Divider />

      <Section title="Staffing">
        <NavBar variant="staffing" />
      </Section>
    </div>
  ),
};

// ─── Account Profile ───────────────────────────────────────────────────────────

export const AccountProfile = {
  name: 'Account Profile',
  render: () => {
    function Demo() {
      const [active, setActive] = useState('srp');
      return (
        <div>
          <NavBar
            variant="account-profile"
            activeNavItem={active}
            onNavChange={setActive}
          />
          <div style={{
            padding: '24px 32px',
            fontFamily: 'system-ui, sans-serif',
            background: '#f7f8f8', minHeight: 120,
          }}>
            <div style={{ fontSize: 13, color: '#6b7280' }}>
              Active nav: <strong style={{ color: '#111827' }}>{active}</strong>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: '#9ca3af' }}>
              Click nav items above to switch.
            </div>
          </div>
        </div>
      );
    }
    return <Demo />;
  },
};

// ─── Timesheets ────────────────────────────────────────────────────────────────

export const Timesheets = {
  name: 'Timesheets',
  render: () => {
    function Demo() {
      const [active, setActive] = useState('time-reports');
      return (
        <div>
          <NavBar
            variant="timesheets"
            activeNavItem={active}
            onNavChange={setActive}
            userName="Username"
            userInitials={null}
          />
          <div style={{
            padding: '24px 32px',
            fontFamily: 'system-ui, sans-serif',
            background: '#f7f8f8', minHeight: 120,
          }}>
            <div style={{ fontSize: 13, color: '#6b7280' }}>
              Active nav: <strong style={{ color: '#111827' }}>{active}</strong>
            </div>
          </div>
        </div>
      );
    }
    return <Demo />;
  },
};

// ─── Staffing ──────────────────────────────────────────────────────────────────

export const Staffing = {
  name: 'Staffing',
  render: () => {
    function Demo() {
      const [active, setActive] = useState('recruitment');
      return (
        <div>
          <NavBar
            variant="staffing"
            activeNavItem={active}
            onNavChange={setActive}
          />
          <div style={{
            padding: '24px 32px',
            fontFamily: 'system-ui, sans-serif',
            background: '#f7f8f8', minHeight: 120,
          }}>
            <div style={{ fontSize: 13, color: '#6b7280' }}>
              Active nav: <strong style={{ color: '#111827' }}>{active}</strong>
            </div>
          </div>
        </div>
      );
    }
    return <Demo />;
  },
};

// ─── Interactive — Variant Switcher ───────────────────────────────────────────

export const Interactive = {
  name: 'Interactive — Variant Switcher',
  render: () => {
    function Demo() {
      const [variant, setVariant]   = useState('account-profile');
      const [activeNav, setActiveNav] = useState(undefined);

      // Reset active nav when variant changes
      const handleVariant = (v) => {
        setVariant(v);
        setActiveNav(undefined);   // fall back to variant default
      };

      const variants = [
        { id: 'account-profile', label: 'Account Profile' },
        { id: 'timesheets',      label: 'Timesheets' },
        { id: 'staffing',        label: 'Staffing' },
      ];

      const btnBase = {
        padding: '6px 14px', borderRadius: 6, border: '1px solid #d1d5db',
        fontFamily: 'system-ui, sans-serif', fontSize: 13, cursor: 'pointer',
        fontWeight: 500,
      };

      return (
        <div>
          {/* Navbar */}
          <NavBar
            variant={variant}
            activeNavItem={activeNav}
            onNavChange={setActiveNav}
          />

          {/* Controls */}
          <div style={{
            padding: '20px 24px',
            background: '#f9fafb',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            fontFamily: 'system-ui, sans-serif',
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>
              Variant:
            </span>
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => handleVariant(v.id)}
                style={{
                  ...btnBase,
                  background: variant === v.id ? '#0069b4' : '#fff',
                  color: variant === v.id ? '#fff' : '#374151',
                  borderColor: variant === v.id ? '#0069b4' : '#d1d5db',
                }}
              >
                {v.label}
              </button>
            ))}
          </div>

          {/* Content placeholder */}
          <div style={{
            padding: '32px',
            fontFamily: 'system-ui, sans-serif',
            background: '#f7f8f8',
            minHeight: 200,
          }}>
            <div style={{
              background: '#fff',
              borderRadius: 8,
              border: '1px solid #e5e7eb',
              padding: '24px',
              maxWidth: 480,
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
                Current state
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Row label="Variant" value={variant} />
                <Row label="Active nav" value={activeNav ?? '(default)'} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    function Row({ label, value }) {
      return (
        <div style={{ display: 'flex', gap: 8, fontSize: 13 }}>
          <span style={{ color: '#6b7280', width: 80, flexShrink: 0 }}>{label}</span>
          <span style={{ color: '#111827', fontFamily: 'monospace' }}>{value}</span>
        </div>
      );
    }

    return <Demo />;
  },
};
