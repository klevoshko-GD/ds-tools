import React, { useState } from 'react';
import { Tabs } from './Tabs';

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Segmented control (pill-style tabs). Blue container, white active pill, transparent inactive tabs. Sizes: lg (default) and sm. Optional numeric counter per tab. Ref: Figma node 59:25693.',
      },
    },
  },
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40, fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 16 }}>
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        {children}
      </div>
    </div>
  );
}

function Labelled({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
      {children}
      <span style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>{label}</span>
    </div>
  );
}

// Wrapper that manages its own active state for interactive demos
function Controlled({ tabs, size, defaultActive }) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]?.id);
  return <Tabs tabs={tabs} active={active} onChange={setActive} size={size} />;
}

// ─── Default — 2 tabs ─────────────────────────────────────────────────────────

export const Default = {
  name: 'Default (2 tabs)',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Tabs</h2>

      <Section title="2 Parts — Large">
        <Labelled label="first active">
          <Controlled
            tabs={[
              { id: 'headcount', label: 'Headcount' },
              { id: 'revenue',   label: 'Revenue' },
            ]}
            defaultActive="headcount"
          />
        </Labelled>
        <Labelled label="second active">
          <Controlled
            tabs={[
              { id: 'headcount', label: 'Headcount' },
              { id: 'revenue',   label: 'Revenue' },
            ]}
            defaultActive="revenue"
          />
        </Labelled>
      </Section>

      <Section title="3 Parts — Large">
        <Labelled label="interactive">
          <Controlled
            tabs={[
              { id: 'week',   label: 'Week' },
              { id: 'month',  label: 'Month' },
              { id: 'quarter', label: 'Quarter' },
            ]}
            defaultActive="week"
          />
        </Labelled>
      </Section>

      <Section title="4 Parts — Large">
        <Labelled label="interactive">
          <Controlled
            tabs={[
              { id: 'q1', label: 'Q1' },
              { id: 'q2', label: 'Q2' },
              { id: 'q3', label: 'Q3' },
              { id: 'q4', label: 'Q4' },
            ]}
            defaultActive="q1"
          />
        </Labelled>
      </Section>

      <Section title="2 Parts — Small">
        <Labelled label="first active">
          <Controlled
            size="sm"
            tabs={[
              { id: 'headcount', label: 'Headcount' },
              { id: 'revenue',   label: 'Revenue' },
            ]}
            defaultActive="headcount"
          />
        </Labelled>
        <Labelled label="second active">
          <Controlled
            size="sm"
            tabs={[
              { id: 'headcount', label: 'Headcount' },
              { id: 'revenue',   label: 'Revenue' },
            ]}
            defaultActive="revenue"
          />
        </Labelled>
      </Section>

      <Section title="3 Parts — Small">
        <Labelled label="interactive">
          <Controlled
            size="sm"
            tabs={[
              { id: 'week',    label: 'Week' },
              { id: 'month',   label: 'Month' },
              { id: 'quarter', label: 'Quarter' },
            ]}
            defaultActive="week"
          />
        </Labelled>
      </Section>
    </div>
  ),
};

// ─── With Counters ────────────────────────────────────────────────────────────

export const WithCounters = {
  name: 'With Counters',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Tabs — With Counters</h2>

      <Section title="Large">
        <Labelled label="first active">
          <Controlled
            tabs={[
              { id: 'open',   label: 'Open',   count: 12 },
              { id: 'closed', label: 'Closed', count: 4  },
            ]}
            defaultActive="open"
          />
        </Labelled>
        <Labelled label="second active">
          <Controlled
            tabs={[
              { id: 'open',   label: 'Open',   count: 12 },
              { id: 'closed', label: 'Closed', count: 4  },
            ]}
            defaultActive="closed"
          />
        </Labelled>
        <Labelled label="3 parts">
          <Controlled
            tabs={[
              { id: 'all',     label: 'All',     count: 28 },
              { id: 'active',  label: 'Active',  count: 15 },
              { id: 'archived', label: 'Archived', count: 3 },
            ]}
            defaultActive="all"
          />
        </Labelled>
      </Section>

      <Section title="Small">
        <Labelled label="interactive">
          <Controlled
            size="sm"
            tabs={[
              { id: 'open',   label: 'Open',   count: 12 },
              { id: 'closed', label: 'Closed', count: 4  },
            ]}
            defaultActive="open"
          />
        </Labelled>
      </Section>
    </div>
  ),
};

// ─── In Context (SRP view toggle) ─────────────────────────────────────────────

export const InContext = {
  name: 'In Context — SRP View Toggle',
  render: () => {
    function SRPDemo() {
      const [view, setView] = useState('headcount');

      const content = {
        headcount: (
          <div style={{ padding: '16px 0', color: '#6b7280', fontSize: 13 }}>
            Headcount view — Jan 194 · Feb 171 · Mar 178 · Apr 178 · May 186 · Jun 186 · Jul 185 · …
          </div>
        ),
        revenue: (
          <div style={{ padding: '16px 0', color: '#6b7280', fontSize: 13 }}>
            Revenue view — SPT baseline + Optimistic / Realistic / Pessimistic scenarios
          </div>
        ),
      };

      return (
        <div style={{ fontFamily: 'system-ui, sans-serif', padding: 32, background: '#f7f8f8', borderRadius: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>SRP Account Overview</div>
            <Tabs
              tabs={[
                { id: 'headcount', label: 'Headcount' },
                { id: 'revenue',   label: 'Revenue'   },
              ]}
              active={view}
              onChange={setView}
            />
          </div>
          <div style={{ background: '#fff', borderRadius: 6, border: '1px solid #e5e7eb', padding: '0 16px' }}>
            {content[view]}
          </div>
        </div>
      );
    }
    return <SRPDemo />;
  },
};
