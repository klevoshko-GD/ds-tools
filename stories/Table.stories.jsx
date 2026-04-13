import React, { useState } from 'react';
import { Table } from './Table';
import { Badge } from './Badge';
import { BadgeStatus } from './Badge';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Input } from './Input';
import { TimesheetCell } from './TimesheetCell';

// ─── Sample data ───────────────────────────────────────────────────────────────

const INVOICES = [
  { id: 'INV-001', customer: 'Acme Corp',        email: 'billing@acme.com',      amount: 1250.00, status: 'paid',    date: '2024-01-15' },
  { id: 'INV-002', customer: 'Globex Ltd',        email: 'accounts@globex.com',   amount:  875.50, status: 'pending', date: '2024-01-18' },
  { id: 'INV-003', customer: 'Initech Inc',       email: 'finance@initech.com',   amount: 3200.00, status: 'paid',    date: '2024-01-20' },
  { id: 'INV-004', customer: 'Umbrella Corp',     email: 'ap@umbrella.com',       amount:  450.75, status: 'overdue', date: '2024-01-05' },
  { id: 'INV-005', customer: 'Massive Dynamics',  email: 'billing@massive.com',   amount: 2100.00, status: 'paid',    date: '2024-01-22' },
  { id: 'INV-006', customer: 'Soylent Corp',      email: 'accounts@soylent.com',  amount:  690.00, status: 'pending', date: '2024-01-24' },
  { id: 'INV-007', customer: 'Initrode',          email: 'info@initrode.com',     amount: 5450.00, status: 'paid',    date: '2024-01-26' },
];

const STATUS_BADGE = {
  paid:    <Badge variant="success">Paid</Badge>,
  pending: <Badge variant="caution">Pending</Badge>,
  overdue: <Badge variant="destructive">Overdue</Badge>,
};

const fmt = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Table component — sortable columns, row selection, striped/compact variants. Built on semantic <table> element.',
      },
    },
  },
};

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default',
  render: () => {
    const columns = [
      { key: 'id',       label: 'Invoice',  sortable: true },
      { key: 'customer', label: 'Customer', sortable: true },
      { key: 'email',    label: 'Email',    muted: true },
      { key: 'date',     label: 'Date',     sortable: true },
      { key: 'status',   label: 'Status',   render: (v) => STATUS_BADGE[v] },
      { key: 'amount',   label: 'Amount',   align: 'right', sortable: true, render: (v) => fmt(v) },
    ];

    const [sortKey, setSortKey] = useState('date');
    const [sortDir, setSortDir] = useState('desc');

    const sorted = [...INVOICES].sort((a, b) => {
      const v = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0;
      return sortDir === 'asc' ? v : -v;
    });

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Invoices</h2>
        <Table
          columns={columns}
          data={sorted}
          sortKey={sortKey}
          sortDir={sortDir}
          onSort={(key, dir) => { setSortKey(key); setSortDir(dir); }}
          footer={
            <span className="table-footer__info">
              Showing {sorted.length} of {sorted.length} results
            </span>
          }
        />
      </div>
    );
  },
};

// ─── With Row Selection ───────────────────────────────────────────────────────

export const WithRowSelection = {
  name: 'With Row Selection',
  render: () => {
    const columns = [
      { key: 'id',       label: 'Invoice' },
      { key: 'customer', label: 'Customer' },
      { key: 'date',     label: 'Date', muted: true },
      { key: 'status',   label: 'Status', render: (v) => STATUS_BADGE[v] },
      { key: 'amount',   label: 'Amount', align: 'right', render: (v) => fmt(v) },
    ];

    const [selected, setSelected] = useState(new Set());

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Row Selection</h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          {selected.size === 0 ? 'Click rows or use checkboxes to select.' : `${selected.size} row${selected.size > 1 ? 's' : ''} selected.`}
        </p>
        <Table
          columns={columns}
          data={INVOICES}
          selectedRows={selected}
          onRowSelect={setSelected}
        />
      </div>
    );
  },
};

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants = {
  name: 'Variants',
  render: () => {
    const columns = [
      { key: 'id',       label: 'Invoice' },
      { key: 'customer', label: 'Customer' },
      { key: 'status',   label: 'Status', render: (v) => STATUS_BADGE[v] },
      { key: 'amount',   label: 'Amount', align: 'right', render: (v) => fmt(v) },
    ];

    const Section = ({ title, children }) => (
      <div style={{ marginBottom: 40 }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</h3>
        {children}
      </div>
    );

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 40 }}>Table Variants</h2>

        <Section title="Default">
          <Table columns={columns} data={INVOICES.slice(0, 4)} />
        </Section>

        <Section title="Striped">
          <Table columns={columns} data={INVOICES.slice(0, 4)} variant="striped" />
        </Section>

        <Section title="Compact">
          <Table columns={columns} data={INVOICES.slice(0, 4)} variant="compact" />
        </Section>

        <Section title="Empty state">
          <Table columns={columns} data={[]} />
        </Section>
      </div>
    );
  },
};

// ─── Cell Types ───────────────────────────────────────────────────────────────

const TEAM = [
  {
    id: 1,
    avatar: null,
    firstName: 'Elena',
    lastName: 'Morris',
    role: 'Frontend Developer',
    rate: 1200,
    status: 'active',
    action: 'View',
    tag: 'Design',
    location: 'New York',
    photoUrl: 'https://i.pravatar.cc/40?img=47',
    notes: '',
  },
  {
    id: 2,
    avatar: null,
    firstName: 'James',
    lastName: 'Carter',
    role: 'Backend Engineer',
    rate: 1500,
    status: 'pending',
    action: 'Review',
    tag: 'Engineering',
    location: 'London',
    photoUrl: 'https://i.pravatar.cc/40?img=12',
    notes: '',
  },
  {
    id: 3,
    avatar: null,
    firstName: 'Sofia',
    lastName: 'Reyes',
    role: 'Product Designer',
    rate: 1100,
    status: 'inactive',
    action: 'Edit',
    tag: 'Design',
    location: 'Berlin',
    photoUrl: 'https://i.pravatar.cc/40?img=32',
    notes: '',
  },
  {
    id: 4,
    avatar: null,
    firstName: 'Marcus',
    lastName: 'Webb',
    role: 'Data Analyst',
    rate: 950,
    status: 'active',
    action: 'View',
    tag: 'Analytics',
    location: 'Toronto',
    photoUrl: 'https://i.pravatar.cc/40?img=59',
    notes: '',
  },
];

const TEAM_STATUS_BADGE = {
  active:   <Badge variant="success">Active</Badge>,
  pending:  <Badge variant="caution">Pending</Badge>,
  inactive: <Badge variant="secondary">Inactive</Badge>,
};

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export const CellTypes = {
  name: 'Cell Types',
  render: () => {
    const [notes, setNotes] = useState(Object.fromEntries(TEAM.map(r => [r.id, r.notes])));

    const columns = [
      {
        key: 'person',
        label: 'Person',
        render: (_, row) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar size="8" initials={`${row.firstName[0]}${row.lastName[0]}`} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.3 }}>
                {row.firstName} {row.lastName}
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.3 }}>
                {row.role}
              </div>
            </div>
          </div>
        ),
      },
      {
        key: 'rate',
        label: 'Rate / mo',
        align: 'right',
        render: (_, row) => (
          <span style={{ fontWeight: 600, fontSize: 13 }}>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.rate)}
          </span>
        ),
      },
      {
        key: 'status',
        label: 'Status',
        render: (_, row) => TEAM_STATUS_BADGE[row.status],
      },
      {
        key: 'action',
        label: 'Action',
        render: (_, row) => (
          <Button variant="outline" size="sm">{row.action}</Button>
        ),
      },
      {
        key: 'location',
        label: 'Location',
        render: (_, row) => (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)' }}>
            <LocationIcon />
            {row.location}
          </span>
        ),
      },
      {
        key: 'tag',
        label: 'Team',
        render: (_, row) => (
          <span style={{ fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)' }}>{row.tag}</span>
        ),
      },
      {
        key: 'photo',
        label: 'Photo',
        render: (_, row) => (
          <Avatar size="8" src={row.photoUrl} alt={`${row.firstName} ${row.lastName}`} />
        ),
      },
      {
        key: 'notes',
        label: 'Notes',
        width: 180,
        render: (_, row) => (
          <Input
            placeholder="Add a note…"
            value={notes[row.id]}
            onChange={(e) => setNotes(prev => ({ ...prev, [row.id]: e.target.value }))}
            style={{ minWidth: 150 }}
          />
        ),
      },
      {
        key: 'variance',
        label: 'Variance',
        align: 'center',
        render: (_, row) => row.id === 2 ? (
          <VarianceBadgeCell badge="-20%" value="$0.00" muted />
        ) : (
          <span style={{ fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)' }}>—</span>
        ),
      },
    ];

    // Map TEAM rows to flat objects so Table can access keys; render functions use the full row
    const data = TEAM.map(r => ({ ...r, person: r.id, photo: r.id, notes: r.id }));

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Cell Types</h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          Demonstration of all Table / Cell component types from the Figma DS.
        </p>
        <Table columns={columns} data={data} />
      </div>
    );
  },
};

// ─── Token Reference ───────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const rows = [
      { element: 'Wrapper border',    token: '--color-base-border',           value: '#d9dade' },
      { element: 'Header background', token: '--color-base-muted',            value: '#f7f8f8' },
      { element: 'Header text',       token: '--color-base-muted-foreground', value: '#91959f' },
      { element: 'Row text',          token: '--color-base-foreground',       value: '#1f1f21' },
      { element: 'Row hover bg',      token: '--color-base-muted',            value: '#f7f8f8' },
      { element: 'Row divider',       token: '--color-base-border',           value: '#d9dade' },
      { element: 'Selected row',      token: '(hardcoded)',                   value: '#eef5fb' },
      { element: 'Sort active',       token: '--color-base-primary',          value: '#0069b4' },
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
          <strong>Cell padding:</strong> 10px 20px (default) · 6px 20px (compact)<br />
          <strong>Font:</strong> 14px/400 body · 12px/700 header<br />
          <strong>Border radius:</strong> 8px (wrapper) · Border: 1px solid #d9dade
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Element', 'Token', 'Value'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({ element, token, value }, i) => (
              <tr key={element} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{element}</td>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
                <td style={td}>{sw(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

// ─── SRP Table / Account Overview ─────────────────────────────────────────────
// Ref: Figma DS (AI) node 40000020:80355
// Two variants: Headcount | Revenue
// Rows use BadgeStatus (Optimistic/Realistic/Pessimistic) in the first column.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Headcount data — headcount numbers per month per forecast scenario
const HEADCOUNT_DATA = [
  { scenario: 'optimistic', Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
  { scenario: 'realistic',  Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
  { scenario: 'pessimistic',Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
];

// Revenue data — SPT row + 3 forecast rows, values in USD
const REVENUE_DATA = [
  { scenario: 'spt',        Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185,    Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: null },
  { scenario: 'optimistic', Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 0,      Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: { month: 'Aug', label: '-20%' } },
  { scenario: 'realistic',  Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185,    Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: null },
  { scenario: 'pessimistic',Jan: 194, Feb: 194, Mar: 194, Apr: 194, May: 194, Jun: 194, Jul: 194, Aug: 194,    Sep: 194, Oct: 194, Nov: 194, Dec: 194, variance: null },
];

function ScenarioLabel({ scenario }) {
  if (scenario === 'spt') {
    return (
      <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-base-foreground, #1f1f21)' }}>SPT</strong>
    );
  }
  return <BadgeStatus variant={scenario} />;
}

/**
 * VarianceBadgeCell — stacks a variance pill badge above a value, both centered.
 * Used in SRP Revenue table for cells with a forecast deviation indicator.
 */
/**
 * VarianceBadgeCell — variance pill badge above a value, stacked and centered.
 * Use with column className "table__td--variance" (adds extra top padding to the td).
 */
export function VarianceBadgeCell({ badge, value, muted = false }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span style={{
        display: 'inline-block',
        background: 'var(--color-status-warning-icon, #ea580c)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700,
        borderRadius: 9999,
        padding: '1px 7px',
        lineHeight: '18px',
        whiteSpace: 'nowrap',
      }}>
        {badge}
      </span>
      <span style={{ fontSize: 13, color: muted ? 'var(--color-base-muted-foreground, #91959f)' : 'inherit' }}>
        {value}
      </span>
    </div>
  );
}

export const SRPAccountOverviewHeadcount = {
  name: 'SRP / Account Overview — Headcount',
  render: () => {
    const columns = [
      {
        key: 'scenario',
        label: '',
        width: 140,
        render: (val) => <ScenarioLabel scenario={val} />,
      },
      ...MONTHS.map((month) => ({
        key: month,
        label: month,
        align: 'right',
        render: (val) => <span style={{ fontSize: 13 }}>{val}</span>,
      })),
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>
          SRP Account Overview — Headcount
        </h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          Headcount by forecast scenario · ref: Figma node 40000020:80356
        </p>
        <Table
          columns={columns}
          data={HEADCOUNT_DATA}
          caption="Headcount by forecast scenario"
        />
      </div>
    );
  },
};

// ─── Timesheet Tables ─────────────────────────────────────────────────────────
// Ref: Figma DS (AI) nodes 40000022:1609 (Week) and 40000022:1734 (Quarter)
// Layout: accordion header (project + description) + table rows per assignee
// Row with "no-hours" cell → is-error state (light red bg + 1px red border)

const TIMESHEET_ASSIGNEES_WEEK = [
  {
    id: 1,
    name: 'David Rayan',
    role: 'UI Designer',
    rate: '$100',
    involvement: '100%',
    assignment: 'Billable',
    days: { 'Feb 1': 'weekend', 'Feb 2': 'approved', 'Feb 3': 'approved', 'Feb 4': 'approved', 'Feb 5': 'no-hours', 'Feb 6': 'approved', 'Feb 7': 'weekend' },
    hours: '40 h',
    revenue: '$100,000',
  },
  {
    id: 2,
    name: 'David Rayan',
    role: 'UI Designer',
    rate: '$100',
    involvement: '100%',
    assignment: 'Billable',
    days: { 'Feb 1': 'weekend', 'Feb 2': 'approved', 'Feb 3': 'approved', 'Feb 4': 'approved', 'Feb 5': 'approved', 'Feb 6': 'approved', 'Feb 7': 'weekend' },
    hours: '40 h',
    revenue: '$100,000',
  },
];

const TIMESHEET_ASSIGNEES_QUARTER = [
  {
    id: 1,
    name: 'David Rayan',
    role: 'UI Designer',
    rate: '$100',
    involvement: '100%',
    assignment: 'Billable',
    quarters: { Q1: 480, Q2: 480, Q3: 480, Q4: 410 },
    hours: '40 h',
    revenue: '$100,000',
  },
  {
    id: 2,
    name: 'David Rayan',
    role: 'UI Designer',
    rate: '$100',
    involvement: '100%',
    assignment: 'Billable',
    quarters: { Q1: 480, Q2: 480, Q3: 480, Q4: 480 },
    hours: '40 h',
    revenue: '$100,000',
  },
];

const WEEK_DAYS = ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'];
const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];

function TimesheetProjectHeader() {
  return (
    <div style={{ padding: '12px 20px', background: 'var(--color-base-card, #fff)', borderBottom: '1px solid var(--color-base-border, #d9dade)' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-base-muted-foreground, #91959f)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
        Project / Assignment
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-base-foreground, #1f1f21)' }}>
        Boston Global HCP Web Experience Jan
      </div>
      <div style={{ fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)' }}>
        Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering
      </div>
    </div>
  );
}

export const TimesheetWeek = {
  name: 'Timesheet — Week',
  render: () => {
    const columns = [
      {
        key: 'assignee', label: 'Assignee', sticky: 'left', width: 200,
        render: (_, row) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Avatar size="8" initials={row.name.split(' ').map(n => n[0]).join('')} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.3 }}>{row.name}</div>
              <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.3 }}>{row.role}</div>
            </div>
          </div>
        ),
      },
      { key: 'rate',        label: 'Rate',        sticky: 'left', width: 80,  render: (_, row) => <span style={{ fontSize: 13 }}>{row.rate}</span> },
      { key: 'involvement', label: 'Involvement', sticky: 'left', width: 110, render: (_, row) => <span style={{ fontSize: 13 }}>{row.involvement}</span> },
      { key: 'assignment',  label: 'Assignment',  render: (_, row) => <Badge variant="success">{row.assignment}</Badge> },
      ...WEEK_DAYS.map(day => ({
        key: day, label: day, align: 'center',
        render: (_, row) => <TimesheetCell state={row.days[day]} small />,
      })),
      { key: 'hours',   label: 'Hours',   align: 'right', sticky: 'right', width: 90,  render: (_, row) => <span style={{ fontSize: 13, fontWeight: 600 }}>{row.hours}</span> },
      { key: 'revenue', label: 'Revenue', align: 'right', sticky: 'right', width: 110, render: (_, row) => <span style={{ fontSize: 13, fontWeight: 600 }}>{row.revenue}</span> },
    ];

    const data = TIMESHEET_ASSIGNEES_WEEK.map(r => ({ ...r }));

    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
        <div style={{ padding: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Timesheet — Week</h2>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
            Weekly view with day cells · error row = light red bg + 1px red border · ref: Figma node 40000022:1609
          </p>
        </div>
        <div style={{ background: '#fff', borderRadius: 8, border: '1px solid var(--color-base-border, #d9dade)', overflow: 'hidden', margin: '0 32px 32px' }}>
          <TimesheetProjectHeader />
          <Table
            columns={columns}
            data={data}
            rowClassName={(row) => Object.values(row.days).includes('no-hours') ? 'is-error' : ''}
          />
        </div>
      </div>
    );
  },
};

export const TimesheetQuarter = {
  name: 'Timesheet — Quarter',
  render: () => {
    const columns = [
      {
        key: 'assignee', label: 'Assignee', sticky: 'left', width: 200,
        render: (_, row) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Avatar size="8" initials={row.name.split(' ').map(n => n[0]).join('')} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.3 }}>{row.name}</div>
              <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.3 }}>{row.role}</div>
            </div>
          </div>
        ),
      },
      { key: 'rate',        label: 'Rate',        sticky: 'left', width: 80,  render: (_, row) => <span style={{ fontSize: 13 }}>{row.rate}</span> },
      { key: 'involvement', label: 'Involvement', sticky: 'left', width: 110, render: (_, row) => <span style={{ fontSize: 13 }}>{row.involvement}</span> },
      { key: 'assignment',  label: 'Assignment',  render: (_, row) => <Badge variant="success">{row.assignment}</Badge> },
      ...QUARTERS.map(q => ({
        key: q, label: q, align: 'center',
        render: (_, row) => {
          const val = row.quarters[q];
          const isLow = val < 480;
          return (
            <TimesheetCell
              state={isLow ? 'no-hours' : 'approved'}
              value={String(val)}
              small={false}
              style={{ width: 48, height: 40, fontSize: 13 }}
            />
          );
        },
      })),
      { key: 'hours',   label: 'Hours',   align: 'right', sticky: 'right', width: 90,  render: (_, row) => <span style={{ fontSize: 13, fontWeight: 600 }}>{row.hours}</span> },
      { key: 'revenue', label: 'Revenue', align: 'right', sticky: 'right', width: 110, render: (_, row) => <span style={{ fontSize: 13, fontWeight: 600 }}>{row.revenue}</span> },
    ];

    const data = TIMESHEET_ASSIGNEES_QUARTER.map(r => ({ ...r }));

    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
        <div style={{ padding: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Timesheet — Quarter</h2>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
            Quarterly view with aggregated hours per quarter · error row = light red bg + 1px red border · ref: Figma node 40000022:1734
          </p>
        </div>
        <div style={{ background: '#fff', borderRadius: 8, border: '1px solid var(--color-base-border, #d9dade)', overflow: 'hidden', margin: '0 32px 32px' }}>
          <TimesheetProjectHeader />
          <Table
            columns={columns}
            data={data}
            rowClassName={(row) => Object.values(row.quarters).some(v => v < 480) ? 'is-error' : ''}
          />
        </div>
      </div>
    );
  },
};

// ─── Timesheet — Reconciliation ──────────────────────────────────────────────
// Ref: Figma node 40000024:2381
// Columns: Assignee | Source | Rate | [day/week cols] | Hours | Revenue
// Row types: group header (assignee), source row, variance row
// Views: Week (7 day columns) · Month (4 week columns)

// ─── Timesheet — Reconciliation ──────────────────────────────────────────────
// Structure: 1 assignee = 5 rows (SP + Invoice + CSV + Assignment % + Variance)
// Ref: Figma node 40000024:2381

const RECON_WEEK_DAYS   = ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'];
const RECON_MONTH_WEEKS = ['Feb W1', 'Feb W2', 'Feb W3', 'Feb W4'];

// One entry per assignee. sources: SP / Invoice / CSV.
// dayHours / weekHours values: null = weekend, 0 = no-hours, number = approved hours.
const RECON_ASSIGNEES = [
  {
    id: 1, name: 'David Rayan', role: 'Senior Frontend Engineer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$90',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 32 },
        totalHours: '40h', totalRevenue: '$3,600',
      },
      {
        source: 'Invoice', rate: '$90',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 0, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 32, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '32h', totalRevenue: '$2,880',
      },
      {
        source: 'Client CSV', rate: '$90',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 0, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 32, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 32 },
        totalHours: '32h', totalRevenue: '$2,880',
      },
    ],
    dayAssignPct:  { 'Feb 1': null, 'Feb 2': '100%', 'Feb 3': '100%', 'Feb 4': '80%', 'Feb 5': '75%', 'Feb 6': '100%', 'Feb 7': null },
    weekAssignPct: { 'Feb W1': '87%', 'Feb W2': '100%', 'Feb W3': '100%', 'Feb W4': '87%' },
  },
  {
    id: 2, name: 'Sofia Reyes', role: 'Product Designer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 0, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 32, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '32h', totalRevenue: '$2,720',
      },
      {
        source: 'Invoice', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '40h', totalRevenue: '$3,400',
      },
      {
        source: 'Client CSV', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '40h', totalRevenue: '$3,400',
      },
    ],
    dayAssignPct:  { 'Feb 1': null, 'Feb 2': '100%', 'Feb 3': '33%', 'Feb 4': '100%', 'Feb 5': '100%', 'Feb 6': '100%', 'Feb 7': null },
    weekAssignPct: { 'Feb W1': '100%', 'Feb W2': '87%', 'Feb W3': '100%', 'Feb W4': '100%' },
  },
  {
    id: 3, name: 'James Carter', role: 'Backend Engineer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$110',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '40h', totalRevenue: '$4,400',
      },
      {
        source: 'Invoice', rate: '$110',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '40h', totalRevenue: '$4,400',
      },
      {
        source: 'Client CSV', rate: '$110',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 8, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 40, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '40h', totalRevenue: '$4,400',
      },
    ],
    dayAssignPct:  { 'Feb 1': null, 'Feb 2': '100%', 'Feb 3': '100%', 'Feb 4': '100%', 'Feb 5': '100%', 'Feb 6': '100%', 'Feb 7': null },
    weekAssignPct: { 'Feb W1': '100%', 'Feb W2': '100%', 'Feb W3': '100%', 'Feb W4': '100%' },
  },
  {
    id: 4, name: 'Elena Morris', role: 'Frontend Developer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 0, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 24, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '32h', totalRevenue: '$2,720',
      },
      {
        source: 'Invoice', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 0, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 32, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '32h', totalRevenue: '$2,720',
      },
      {
        source: 'Client CSV', rate: '$85',
        dayHours:  { 'Feb 1': null, 'Feb 2': 8, 'Feb 3': 8, 'Feb 4': 0, 'Feb 5': 8, 'Feb 6': 8, 'Feb 7': null },
        weekHours: { 'Feb W1': 40, 'Feb W2': 32, 'Feb W3': 40, 'Feb W4': 40 },
        totalHours: '32h', totalRevenue: '$2,720',
      },
    ],
    dayAssignPct:  { 'Feb 1': null, 'Feb 2': '100%', 'Feb 3': '100%', 'Feb 4': '0%', 'Feb 5': '100%', 'Feb 6': '100%', 'Feb 7': null },
    weekAssignPct: { 'Feb W1': '100%', 'Feb W2': '67%', 'Feb W3': '100%', 'Feb W4': '100%' },
  },
];

// Build 5 flat rows per assignee: 3 source rows + Assignment % row + Variance row.
function buildReconRows(assignees, periods, viewMode) {
  const rows = [];
  const isWeek = viewMode === 'week';

  for (const a of assignees) {
    const [sp, inv] = a.sources;

    // Compute per-period variance (Invoice − SP hours)
    const variancePerPeriod = {};
    for (const p of periods) {
      const spH  = isWeek ? sp.dayHours[p]  : sp.weekHours[p];
      const invH = isWeek ? inv.dayHours[p] : inv.weekHours[p];
      if (spH === null || invH === null) { variancePerPeriod[p] = null; continue; }
      const diff = invH - spH;
      variancePerPeriod[p] = diff === 0 ? '—' : (diff > 0 ? `+${diff}h` : `${diff}h`);
    }

    const base = { _assigneeId: a.id, _name: a.name, _role: a.role };

    // 3 source rows
    a.sources.forEach((src, si) => {
      const hasDiscrepancy = periods.some(p => {
        const h = isWeek ? src.dayHours[p] : src.weekHours[p];
        return h === 0;
      });
      rows.push({
        ...base,
        _type: 'source',
        _isFirstInGroup: si === 0,
        _hasDiscrepancy: hasDiscrepancy,
        source: src.source,
        rate: src.rate,
        totalHours: src.totalHours,
        totalRevenue: src.totalRevenue,
        _hours: isWeek ? src.dayHours : src.weekHours,
      });
    });

    // Assignment % row
    rows.push({
      ...base,
      _type: 'assignmentPct',
      _isFirstInGroup: false,
      source: 'Assignment %',
      rate: '—',
      totalHours: '—',
      totalRevenue: '—',
      _pct: isWeek ? a.dayAssignPct : a.weekAssignPct,
    });

    // Variance row (Invoice total − SP total)
    const invTotalH = parseInt(inv.totalHours);
    const spTotalH  = parseInt(sp.totalHours);
    const varDiff   = invTotalH - spTotalH;
    const varHours  = varDiff === 0 ? '—' : (varDiff > 0 ? `+${varDiff}h` : `${varDiff}h`);
    rows.push({
      ...base,
      _type: 'variance',
      _isFirstInGroup: false,
      source: 'Variance',
      rate: '—',
      totalHours: varHours,
      totalRevenue: '—',
      _variance: variancePerPeriod,
    });
  }
  return rows;
}

export const TimesheetReconciliation = {
  name: 'Timesheet — Reconciliation',
  render: () => {
    function ReconciliationStory() {
      const [viewMode, setViewMode] = useState('week');
      const periods = viewMode === 'week' ? RECON_WEEK_DAYS : RECON_MONTH_WEEKS;
      const rows = buildReconRows(RECON_ASSIGNEES, periods, viewMode);

      const varColor = (val) => {
        if (!val || val === '—') return 'var(--color-base-muted-foreground, #91959f)';
        return val.startsWith('+') ? 'var(--color-status-success-foreground, #16a34a)'
             : val.startsWith('-') ? 'var(--color-base-destructive, #dc2626)'
             : 'var(--color-base-muted-foreground, #91959f)';
      };

      const columns = [
        {
          key: 'assignee', label: 'Assignee', sticky: 'left', width: 190,
          render: (_, row) => row._isFirstInGroup ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar size="8" initials={row._name.split(' ').map(n => n[0]).join('')} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.3 }}>{row._name}</div>
                <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.3 }}>{row._role}</div>
              </div>
            </div>
          ) : null,
        },
        {
          key: 'source', label: 'Source', sticky: 'left', width: 160,
          render: (val, row) => (
            <span style={{
              fontSize: 12, fontWeight: 600,
              color: row._type === 'variance'     ? varColor(row.totalHours)
                   : row._type === 'assignmentPct' ? 'var(--color-base-primary, #0069b4)'
                   : 'var(--color-base-foreground, #1f1f21)',
            }}>{val}</span>
          ),
        },
        {
          key: 'rate', label: 'Rate', sticky: 'left', width: 75,
          render: (val) => <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)' }}>{val}</span>,
        },
        ...periods.map((period) => ({
          key: period, label: period, align: 'center', width: 72,
          render: (_, row) => {
            if (row._type === 'source') {
              const h = row._hours[period];
              if (h === null) return <TimesheetCell state="weekend" small />;
              return <TimesheetCell state={h === 0 ? 'no-hours' : 'approved'} small />;
            }
            if (row._type === 'assignmentPct') {
              const pct = row._pct[period];
              if (pct === null) return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12 }}>—</span>;
              return <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-base-primary, #0069b4)' }}>{pct}</span>;
            }
            if (row._type === 'variance') {
              const val = row._variance[period];
              if (val === null) return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12 }}>—</span>;
              return <span style={{ fontSize: 12, fontWeight: 600, color: varColor(val) }}>{val}</span>;
            }
            return null;
          },
        })),
        {
          key: 'totalHours', label: 'Total Hrs', align: 'right', sticky: 'right', width: 90,
          render: (val, row) => (
            <span style={{
              fontSize: 12, fontWeight: 600,
              color: row._type === 'variance' ? varColor(val) : 'var(--color-base-foreground, #1f1f21)',
            }}>{val}</span>
          ),
        },
        {
          key: 'totalRevenue', label: 'Revenue', align: 'right', sticky: 'right', width: 110,
          render: (val, row) => (
            <span style={{
              fontSize: 12,
              fontWeight: row._type === 'source' ? 600 : 400,
              color: row._type === 'assignmentPct' || row._type === 'variance'
                ? 'var(--color-base-muted-foreground, #91959f)'
                : 'var(--color-base-foreground, #1f1f21)',
            }}>{val}</span>
          ),
        },
      ];

      const rowClassName = (row) => {
        const cls = [];
        if (row._isFirstInGroup) cls.push('is-group-start');
        if (row._type === 'source' && row._hasDiscrepancy) cls.push('is-error');
        if (row._type === 'assignmentPct') cls.push('is-assign-pct');
        if (row._type === 'variance') cls.push('is-variance');
        return cls.join(' ');
      };

      const btnStyle = (active) => ({
        padding: '6px 14px', fontSize: 13, fontWeight: 600,
        border: '1px solid var(--color-base-border, #d9dade)',
        borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit',
        background: active ? 'var(--color-base-primary, #0069b4)' : '#fff',
        color: active ? '#fff' : 'var(--color-base-foreground, #1f1f21)',
      });

      return (
        <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
          <div style={{ padding: 32, paddingBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 4px' }}>Timesheet — Reconciliation</h2>
                <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>
                  5 rows per assignee (SP · Invoice · CSV · Assignment % · Variance) · ref: Figma node 40000024:2381
                </p>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button style={btnStyle(viewMode === 'week')}  onClick={() => setViewMode('week')}>Week</button>
                <button style={btnStyle(viewMode === 'month')} onClick={() => setViewMode('month')}>Month</button>
              </div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid var(--color-base-border, #d9dade)', overflow: 'hidden', margin: '0 32px 32px' }}>
            <TimesheetProjectHeader />
            <Table columns={columns} data={rows} rowClassName={rowClassName} />
          </div>
        </div>
      );
    }
    return <ReconciliationStory />;
  },
};

export const SRPAccountOverviewRevenue = {
  name: 'SRP / Account Overview — Revenue',
  render: () => {
    const columns = [
      {
        key: 'scenario',
        label: '',
        width: 140,
        render: (val) => <ScenarioLabel scenario={val} />,
      },
      ...MONTHS.map((month) => {
        const isVarianceMonth = REVENUE_DATA.some(r => r.variance?.month === month);
        return {
          key: month,
          label: month,
          align: 'right',
          className: isVarianceMonth ? 'table__td--variance' : '',
          render: (val, row) => {
            const hasVariance = row.variance?.month === month;
            const isZero = val === 0 && hasVariance;
            if (hasVariance) {
              return (
                <VarianceBadgeCell
                  badge={row.variance.label}
                  value={isZero ? '$0.00' : val}
                  muted={isZero}
                />
              );
            }
            return <span style={{ fontSize: 13 }}>{val}</span>;
          },
        };
      }),
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>
          SRP Account Overview — Revenue
        </h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          Revenue by forecast scenario with SPT baseline · ref: Figma node 40000020:80442
        </p>
        <Table
          columns={columns}
          data={REVENUE_DATA}
          caption="Revenue by forecast scenario"
        />
      </div>
    );
  },
};
