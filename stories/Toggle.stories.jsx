import React, { useState } from 'react';
import { Toggle } from './Toggle';

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Toggle With Text — switch with optional left/right labels. ' +
          '45×24px pill track. OFF=gray, ON=primary-blue. Focus ring via keyboard. ' +
          'Ref: Figma node 53:9670.',
      },
    },
  },
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: '#9ca3af',
        textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16,
      }}>
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
        {children}
      </div>
    </div>
  );
}

function Labelled({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
      {children}
      <span style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>{label}</span>
    </div>
  );
}

// Controlled wrapper
function Controlled(props) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false);
  return <Toggle {...props} checked={checked} onChange={setChecked} />;
}

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'All States',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>
        Toggle With Text
      </h2>

      <Section title="Default — OFF / ON">
        <Labelled label="OFF (default)">
          <Controlled labelLeft="Label" labelRight="Label" />
        </Labelled>
        <Labelled label="ON">
          <Controlled labelLeft="Label" labelRight="Label" defaultChecked />
        </Labelled>
      </Section>

      <Section title="Label positions">
        <Labelled label="left + right">
          <Controlled labelLeft="Label" labelRight="Label" />
        </Labelled>
        <Labelled label="left only">
          <Controlled labelLeft="Label" />
        </Labelled>
        <Labelled label="right only">
          <Controlled labelRight="Label" />
        </Labelled>
        <Labelled label="no labels">
          <Controlled />
        </Labelled>
      </Section>

      <Section title="Custom labels">
        <Labelled label="month / year">
          <Controlled labelLeft="Monthly" labelRight="Annual" />
        </Labelled>
        <Labelled label="on / off">
          <Controlled labelLeft="Off" labelRight="On" defaultChecked />
        </Labelled>
        <Labelled label="headcount / revenue">
          <Controlled labelLeft="Headcount" labelRight="Revenue" />
        </Labelled>
      </Section>

      <Section title="Disabled">
        <Labelled label="disabled OFF">
          <Toggle labelLeft="Label" labelRight="Label" checked={false} disabled />
        </Labelled>
        <Labelled label="disabled ON">
          <Toggle labelLeft="Label" labelRight="Label" checked disabled />
        </Labelled>
      </Section>
    </div>
  ),
};

// ─── Interactive ──────────────────────────────────────────────────────────────

export const Interactive = {
  name: 'Interactive',
  render: () => {
    function Demo() {
      const [annual, setAnnual]         = useState(false);
      const [notifications, setNotify]  = useState(true);
      const [darkMode, setDark]         = useState(false);

      const row = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid #f3f4f6' };
      const label = { fontSize: 14, color: '#111827', fontFamily: 'system-ui, sans-serif' };
      const sub = { fontSize: 12, color: '#6b7280', marginTop: 2, fontFamily: 'system-ui, sans-serif' };

      return (
        <div style={{ width: 400, background: '#fff', borderRadius: 8, border: '1px solid #e5e7eb', padding: '0 20px', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ padding: '16px 0 8px', fontWeight: 700, fontSize: 15, color: '#111827' }}>Settings</div>
          <div style={row}>
            <div>
              <div style={label}>Billing cycle</div>
              <div style={sub}>Switch to annual billing and save 20%</div>
            </div>
            <Toggle labelLeft="Monthly" labelRight="Annual" checked={annual} onChange={setAnnual} />
          </div>
          <div style={row}>
            <div>
              <div style={label}>Email notifications</div>
              <div style={sub}>Receive project and task updates</div>
            </div>
            <Toggle labelRight={notifications ? 'On' : 'Off'} checked={notifications} onChange={setNotify} />
          </div>
          <div style={{ ...row, borderBottom: 'none' }}>
            <div>
              <div style={label}>Dark mode</div>
              <div style={sub}>Coming soon</div>
            </div>
            <Toggle labelRight="Off" checked={darkMode} onChange={setDark} disabled />
          </div>
        </div>
      );
    }
    return <Demo />;
  },
};
