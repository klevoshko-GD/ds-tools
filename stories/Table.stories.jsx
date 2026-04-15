import React, { useState } from 'react';
import { Table } from './Table';
import { Badge } from './Badge';
import { BadgeStatus } from './Badge';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { Input } from './Input';
import { TimesheetCell } from './TimesheetCell';
import { Toggle } from './Toggle';
import { Tabs } from './Tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

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
    return <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-base-foreground, #1f1f21)' }}>SPT</strong>;
  }
  if (scenario === 'target') {
    return <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-base-foreground, #1f1f21)' }}>Target</strong>;
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
  name: 'SRP / Account Overview — Headcount Revenue',
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

// TimesheetProjectHeader replaced by accordion in ReconciliationStory

// ─── Timesheet — Reconciliation ──────────────────────────────────────────────
// Ref: Figma node 40000024:2381
// Columns: Assignee | Source | Rate | [day/week cols] | Hours | Revenue
// Row types: group header (assignee), source row, variance row
// Views: Week (7 day columns) · Month (4 week columns)

// ─── Timesheet — Reconciliation ──────────────────────────────────────────────
// Structure: 1 assignee = 5 rows (SP + Invoice + CSV + Assignment % + Variance)
// Ref: Figma node 40000024:2381

const RECON_WEEK_DAYS  = ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'];
const RECON_MONTH_DAYS = Array.from({ length: 28 }, (_, i) => `Feb ${i + 1}`);

// Weekend days in February (Feb 1 = Sun, Feb 7 = Sat, repeating every 7 days)
const _FEB_WE = new Set([1, 7, 8, 14, 15, 21, 22, 28]);

// Generate full-month day-hours map. Weekends → null, workdays → 8 unless overridden.
function _febH(overrides = {}) {
  const r = {};
  for (let d = 1; d <= 28; d++) {
    const k = `Feb ${d}`;
    r[k] = _FEB_WE.has(d) ? null : (k in overrides ? overrides[k] : 8);
  }
  return r;
}

// Generate full-month assignment-% map. Weekends → null, workdays → '100%' unless overridden.
function _febPct(overrides = {}) {
  const r = {};
  for (let d = 1; d <= 28; d++) {
    const k = `Feb ${d}`;
    r[k] = _FEB_WE.has(d) ? null : (k in overrides ? overrides[k] : '100%');
  }
  return r;
}

// One entry per assignee. Each source carries:
//   dayHours          — full 28-day map (null=weekend, 0=no-hours, n=hours)
//   weeklyTotalHours  — shown in "Total Hrs" column in Week view (first 7 days)
//   monthlyTotalHours — shown in "Total Hrs" column in Month view
const RECON_ASSIGNEES = [
  {
    id: 1, name: 'David Rayan', role: 'Senior Frontend Engineer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$90',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$3,600',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$14,400',
      },
      {
        source: 'Invoice', rate: '$90',
        dayHours: _febH({ 'Feb 5': 0, 'Feb 19': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,880',
        monthlyTotalHours: '144h', monthlyTotalRevenue: '$12,960',
      },
      {
        source: 'Client CSV', rate: '$90',
        dayHours: _febH({ 'Feb 4': 0, 'Feb 25': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,880',
        monthlyTotalHours: '144h', monthlyTotalRevenue: '$12,960',
      },
    ],
    dayAssignPct: _febPct({ 'Feb 4': '80%', 'Feb 5': '75%', 'Feb 18': '80%', 'Feb 19': '75%' }),
  },
  {
    id: 2, name: 'Sofia Reyes', role: 'Product Designer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$85',
        dayHours: _febH({ 'Feb 3': 0, 'Feb 17': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,720',
        monthlyTotalHours: '144h', monthlyTotalRevenue: '$12,240',
      },
      {
        source: 'Invoice', rate: '$85',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$3,400',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$13,600',
      },
      {
        source: 'Client CSV', rate: '$85',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$3,400',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$13,600',
      },
    ],
    dayAssignPct: _febPct({ 'Feb 3': '33%', 'Feb 17': '33%' }),
  },
  {
    id: 3, name: 'James Carter', role: 'Backend Engineer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$110',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$4,400',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$17,600',
      },
      {
        source: 'Invoice', rate: '$110',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$4,400',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$17,600',
      },
      {
        source: 'Client CSV', rate: '$110',
        dayHours: _febH(),
        weeklyTotalHours: '40h',  weeklyTotalRevenue: '$4,400',
        monthlyTotalHours: '160h', monthlyTotalRevenue: '$17,600',
      },
    ],
    dayAssignPct: _febPct(),
  },
  {
    id: 4, name: 'Elena Morris', role: 'Frontend Developer',
    sources: [
      {
        source: 'SuitProjects Pro', rate: '$85',
        dayHours: _febH({ 'Feb 4': 0, 'Feb 13': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,720',
        monthlyTotalHours: '144h', monthlyTotalRevenue: '$12,240',
      },
      {
        source: 'Invoice', rate: '$85',
        dayHours: _febH({ 'Feb 4': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,720',
        monthlyTotalHours: '152h', monthlyTotalRevenue: '$12,920',
      },
      {
        source: 'Client CSV', rate: '$85',
        dayHours: _febH({ 'Feb 4': 0 }),
        weeklyTotalHours: '32h',  weeklyTotalRevenue: '$2,720',
        monthlyTotalHours: '152h', monthlyTotalRevenue: '$12,920',
      },
    ],
    dayAssignPct: _febPct({ 'Feb 4': '0%', 'Feb 13': '50%' }),
  },
];

// Build 5 flat rows per assignee: 3 source rows + Assignment % + Variance.
// Both week and month views use dayHours — periods slice the relevant columns.
function buildReconRows(assignees, periods, viewMode) {
  const rows = [];
  const isWeek = viewMode === 'week';

  for (const a of assignees) {
    const [sp, inv] = a.sources;

    // Per-period variance: Invoice − SP (both always use dayHours)
    const variancePerPeriod = {};
    for (const p of periods) {
      const spH  = sp.dayHours[p];
      const invH = inv.dayHours[p];
      if (spH === null || invH === null) { variancePerPeriod[p] = null; continue; }
      const diff = invH - spH;
      variancePerPeriod[p] = diff === 0 ? '—' : (diff > 0 ? `+${diff}h` : `${diff}h`);
    }

    const base = { _assigneeId: a.id, _name: a.name, _role: a.role };

    // 3 source rows
    a.sources.forEach((src, si) => {
      const hasDiscrepancy = periods.some(p => src.dayHours[p] === 0);
      rows.push({
        ...base,
        _type: 'source',
        _isFirstInGroup: si === 0,
        _hasDiscrepancy: hasDiscrepancy,
        source: src.source,
        rate: src.rate,
        totalHours:   isWeek ? src.weeklyTotalHours   : src.monthlyTotalHours,
        totalRevenue: isWeek ? src.weeklyTotalRevenue  : src.monthlyTotalRevenue,
        _hours: src.dayHours,
      });
    });

    // Assignment % row
    rows.push({
      ...base,
      _type: 'assignmentPct',
      _isFirstInGroup: false,
      source: 'Assignment %',
      rate: '—', totalHours: '—', totalRevenue: '—',
      _pct: a.dayAssignPct,
    });

    // Variance row (Invoice total − SP total)
    const invH = parseInt(isWeek ? inv.weeklyTotalHours  : inv.monthlyTotalHours);
    const spH  = parseInt(isWeek ? sp.weeklyTotalHours   : sp.monthlyTotalHours);
    const diff = invH - spH;
    rows.push({
      ...base,
      _type: 'variance',
      _isFirstInGroup: false,
      source: 'Variance',
      rate: '—', totalRevenue: '—',
      totalHours: diff === 0 ? '—' : (diff > 0 ? `+${diff}h` : `${diff}h`),
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
      const periods = viewMode === 'week' ? RECON_WEEK_DAYS : RECON_MONTH_DAYS;
      const rows = buildReconRows(RECON_ASSIGNEES, periods, viewMode);

      // ── Helpers ──────────────────────────────────────────────────────────────
      const varColor = (val) => {
        if (!val || val === '—') return 'var(--color-base-muted-foreground, #91959f)';
        return val.startsWith('+') ? 'var(--color-status-success-foreground, #16a34a)'
             : val.startsWith('-') ? 'var(--color-base-destructive, #dc2626)'
             : 'var(--color-base-muted-foreground, #91959f)';
      };

      // Inline day-cell for reconciliation — shows numbers, NOT state icons.
      // Valid: green pill  |  Weekend: dash  |  Zero: dashed red border
      function ReconHoursCell({ hours }) {
        if (hours === null) {
          return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12, userSelect: 'none' }}>—</span>;
        }
        if (hours === 0) {
          return (
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              minWidth: 28, height: 22, borderRadius: 4,
              border: '1.5px dashed var(--color-base-destructive, #dc2626)',
              color: 'var(--color-base-destructive, #dc2626)',
              fontSize: 11, fontWeight: 700, lineHeight: 1,
            }}>0</span>
          );
        }
        return (
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minWidth: 28, height: 22, borderRadius: 4,
            background: 'var(--color-status-success-background, #dcfce7)',
            color: 'var(--color-status-success-foreground, #16a34a)',
            fontSize: 12, fontWeight: 700, lineHeight: 1,
          }}>{hours}</span>
        );
      }

      // ── Columns ──────────────────────────────────────────────────────────────
      const columns = [
        {
          key: 'assignee', label: 'Assignee', sticky: 'left', width: 180,
          render: (_, row) => row._isFirstInGroup ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <Avatar size="8" />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.35, whiteSpace: 'nowrap' }}>
                  {row._name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.35, whiteSpace: 'nowrap' }}>
                  {row._role}
                </div>
              </div>
            </div>
          ) : null,
        },
        {
          key: 'source', label: 'Source', sticky: 'left', width: 148,
          render: (val, row) => {
            if (row._type === 'variance') {
              return (
                <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--color-base-muted-foreground, #91959f)' }}>
                  {val}
                </span>
              );
            }
            if (row._type === 'assignmentPct') {
              return (
                <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--color-base-muted-foreground, #91959f)' }}>
                  {val}
                </span>
              );
            }
            // All source rows use the same muted style
            return (
              <span style={{
                fontSize: 12,
                fontWeight: 400,
                color: 'var(--color-base-muted-foreground, #91959f)',
              }}>{val}</span>
            );
          },
        },
        {
          key: 'rate', label: 'Rate', sticky: 'left', width: 52,
          render: (val, row) => {
            if (row._type !== 'source') return null;
            return <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)' }}>{val}</span>;
          },
        },
        ...periods.map((period) => ({
          key: period, label: period, align: 'center', width: 66,
          render: (_, row) => {
            if (row._type === 'source') {
              return <ReconHoursCell hours={row._hours[period]} />;
            }
            if (row._type === 'assignmentPct') {
              const pct = row._pct[period];
              if (pct === null) {
                return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12 }}>—</span>;
              }
              return (
                <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--color-base-muted-foreground, #91959f)' }}>
                  {pct}
                </span>
              );
            }
            if (row._type === 'variance') {
              const val = row._variance[period];
              if (val === null) {
                return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12 }}>—</span>;
              }
              if (val === '—') {
                return <span style={{ color: 'var(--color-base-muted-foreground, #91959f)', fontSize: 12 }}>—</span>;
              }
              return (
                <span style={{ fontSize: 12, fontWeight: 700, color: varColor(val) }}>{val}</span>
              );
            }
            return null;
          },
        })),
        {
          key: 'totalHours', label: 'Total Hrs', align: 'right', sticky: 'right', width: 84,
          render: (val, row) => {
            if (row._type === 'assignmentPct') {
              return <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)' }}>—</span>;
            }
            return (
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: row._type === 'variance' ? varColor(val) : 'var(--color-base-foreground, #1f1f21)',
              }}>{val}</span>
            );
          },
        },
        {
          key: 'totalRevenue', label: 'Revenue', align: 'right', sticky: 'right', width: 100,
          render: (val, row) => {
            if (row._type !== 'source') {
              return <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)' }}>—</span>;
            }
            return (
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-base-foreground, #1f1f21)' }}>
                {val}
              </span>
            );
          },
        },
      ];

      // Row classes — NO row-level error; error is cell-level only (dashed red border in ReconHoursCell)
      const rowClassName = (row) => {
        const cls = [];
        if (row._isFirstInGroup)         cls.push('is-group-start');
        if (row._type === 'assignmentPct') cls.push('is-assign-pct');
        if (row._type === 'variance')      cls.push('is-variance');
        return cls.join(' ');
      };

      const btnStyle = (active) => ({
        padding: '5px 14px', fontSize: 13, fontWeight: 600,
        border: '1px solid var(--color-base-border, #d9dade)',
        borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit',
        background: active ? 'var(--color-base-primary, #0069b4)' : '#fff',
        color: active ? '#fff' : 'var(--color-base-foreground, #1f1f21)',
        transition: 'background 0.15s',
      });

      const totalWidth = columns.reduce((s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0);

      return (
        <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
          <div style={{ padding: '28px 32px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>
                Timesheet — Reconciliation
              </h2>
              <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
                SP · Invoice · Client CSV · Assignment % · Variance — ref: Figma node 141:39046
              </p>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button style={btnStyle(viewMode === 'week')}  onClick={() => setViewMode('week')}>Week</button>
              <button style={btnStyle(viewMode === 'month')} onClick={() => setViewMode('month')}>Month</button>
            </div>
          </div>

          <div style={{ overflowX: 'auto', margin: '0 32px 32px' }}>
            <Accordion
              type="single"
              collapsible
              defaultValue="project"
              className="accordion--timesheets accordion--time-reports"
              style={{ minWidth: totalWidth }}
            >
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience Jan</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table
                    columns={columns}
                    data={rows}
                    rowClassName={rowClassName}
                    wrapperClassName="table-wrapper--seamless table-wrapper--recon"
                    style={{ width: totalWidth }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
          Revenue by forecast scenario with SPT baseline · ref: Figma node 153:39076
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

// ─── SRP / Account Overview (quarterly) ───────────────────────────────────────
// Ref: Figma node 179:39925
// Columns: Q1, Q2, Q3, Q4, ANNUAL
// Rows: Target (plain $amount) + Optimistic/Realistic/Pessimistic ($amount / bold%)

const QUARTERS_AO = ['Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL'];

const ACCOUNT_OVERVIEW_DATA = [
  {
    scenario: 'target',
    Q1: '$1.25M', Q2: '$150.75K', Q3: '$1.10B', Q4: '$999.99K', ANNUAL: '$1.10B',
  },
  {
    scenario: 'optimistic',
    Q1:     { amount: '$95,432',  pct: '25%' },
    Q2:     { amount: '$98.765K', pct: '10%' },
    Q3:     { amount: '$132.10K', pct: '00%' },
    Q4:     { amount: '$12,345',  pct: '15%' },
    ANNUAL: { amount: '$000.0K',  pct: '00%' },
  },
  {
    scenario: 'realistic',
    Q1:     { amount: '$87,654',  pct: '33%' },
    Q2:     { amount: '$250.88K', pct: '15%' },
    Q3:     { amount: '$000.0K',  pct: '00%' },
    Q4:     { amount: '$000.0K',  pct: '00%' },
    ANNUAL: { amount: '$000.0K',  pct: '00%' },
  },
  {
    scenario: 'pessimistic',
    Q1:     { amount: '$000.0K', pct: '00%' },
    Q2:     { amount: '$000.0K', pct: '00%' },
    Q3:     { amount: '$000.0K', pct: '00%' },
    Q4:     { amount: '$000.0K', pct: '00%' },
    ANNUAL: { amount: '$000.0K', pct: '00%' },
  },
];

export const SRPAccountOverview = {
  name: 'SRP / Account Overview',
  render: () => {
    const columns = [
      {
        key: 'scenario',
        label: '',
        width: 140,
        render: (val) => <ScenarioLabel scenario={val} />,
      },
      ...QUARTERS_AO.map((q) => ({
        key: q,
        label: q,
        align: 'right',
        render: (val, row) => {
          if (row.scenario === 'target') {
            return <span style={{ fontSize: 13 }}>{val}</span>;
          }
          return (
            <span style={{ fontSize: 13 }}>
              {val.amount} / <strong>{val.pct}</strong>
            </span>
          );
        },
      })),
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>
          SRP Account Overview
        </h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          Quarterly revenue vs. target by forecast scenario · ref: Figma node 179:39925
        </p>
        <Table
          columns={columns}
          data={ACCOUNT_OVERVIEW_DATA}
          caption="Account Overview by forecast scenario"
        />
      </div>
    );
  },
};

// ─── SRP Dashboard Widget ─────────────────────────────────────────────────────
// Ref: Figma node 183:7496
// Card with header (company name + toggle + settings button) and two-panel body:
//   Left  → Account Overview quarterly table (sticky scenario column)
//   Right → Tabs (Headcount | Revenue) + monthly table (sticky scenario column)

export const SRPDashboardWidget = {
  name: 'SRP / Dashboard Widget',
  render: () => {
    function WidgetStory() {
      const [activeTab, setActiveTab]        = useState('headcount');
      const [includeUnmapped, setUnmapped] = useState(true);

      // ── Inline SVG icons (Lucide) ──────────────────────────────────────────
      const InfoIcon = () => (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
          style={{ flexShrink: 0, color: 'var(--color-base-muted-foreground,#91959f)' }}>
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25"/>
          <path d="M8 7v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
          <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
        </svg>
      );

      // Lucide settings icon — https://lucide.dev/icons/settings
      const SettingsIcon = () => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      );

      // ── Column builders ────────────────────────────────────────────────────

      // Account Overview quarterly — scenario column sticky left
      const aoColumns = [
        {
          key: 'scenario', label: '', width: 120, sticky: 'left',
          render: (val) => <ScenarioLabel scenario={val} />,
        },
        ...QUARTERS_AO.map((q) => ({
          key: q, label: q, align: 'right',
          render: (val, row) =>
            row.scenario === 'target'
              ? <span style={{ fontSize: 13, fontWeight: 500 }}>{val}</span>
              : (
                <span style={{ fontSize: 13 }}>
                  {val.amount}{' '}
                  <span style={{ color: 'var(--color-base-muted-foreground,#91959f)', fontWeight: 600, fontSize: 12 }}>
                    {val.pct}
                  </span>
                </span>
              ),
        })),
      ];

      // Headcount monthly — scenario column sticky left
      const headcountColumns = [
        {
          key: 'scenario', label: '', width: 120, sticky: 'left',
          render: (val) => <ScenarioLabel scenario={val} />,
        },
        ...MONTHS.map((m) => ({
          key: m, label: m, align: 'right',
          render: (val) => <span style={{ fontSize: 13 }}>{val}</span>,
        })),
      ];

      // Revenue monthly — scenario column sticky left
      const revenueColumns = [
        {
          key: 'scenario', label: '', width: 120, sticky: 'left',
          render: (val) => <ScenarioLabel scenario={val} />,
        },
        ...MONTHS.map((month) => {
          const isVarianceMonth = REVENUE_DATA.some(r => r.variance?.month === month);
          return {
            key: month, label: month, align: 'right',
            className: isVarianceMonth ? 'table__td--variance' : '',
            render: (val, row) => {
              const hasVariance = row.variance?.month === month;
              if (hasVariance) {
                return (
                  <VarianceBadgeCell
                    badge={row.variance.label}
                    value={val === 0 ? '$0.00' : val}
                    muted={val === 0}
                  />
                );
              }
              return <span style={{ fontSize: 13 }}>{val}</span>;
            },
          };
        }),
      ];

      // ── Styles ────────────────────────────────────────────────────────────
      const cardStyle = {
        background: '#ffffff',
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        fontFamily: 'system-ui, sans-serif',
      };

      const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        gap: 16,
      };

      const bodyStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px 16px 16px',
        gap: 12,
        background: 'var(--color-base-card, #ffffff)',
        overflowX: 'auto',
      };

      const panelStyle = {
        background: '#ffffff',
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,0.07)',
        overflow: 'hidden',
        flexShrink: 0,
      };

      const settingsBtnStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 6,
        border: '1px solid rgba(0,0,0,0.14)',
        background: '#ffffff',
        color: '#374151',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: '20px',
        cursor: 'pointer',
        fontFamily: 'inherit',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      };

      return (
        <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif', background: '#eef0f2' }}>
          <div style={cardStyle}>

            {/* ── Header ── */}
            <div style={headerStyle}>
              {/* Left: title + info icon + toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#1f1f21', whiteSpace: 'nowrap' }}>
                    Boston Scientific International SA
                  </span>
                  <InfoIcon />
                </div>
                <Toggle
                  checked={includeUnmapped}
                  onChange={setUnmapped}
                  labelRight="Include unmapped position"
                />
              </div>
              {/* Right: Account Settings with Lucide settings icon */}
              <button style={settingsBtnStyle} type="button">
                <SettingsIcon />
                Account Settings
              </button>
            </div>

            {/* ── Body ── */}
            <div style={bodyStyle}>

              {/* Left panel — Account Overview quarterly */}
              <div style={panelStyle}>
                <Table
                  columns={aoColumns}
                  data={ACCOUNT_OVERVIEW_DATA}
                  wrapperClassName="table-wrapper--seamless"
                />
              </div>

              {/* Right panel — Headcount / Revenue monthly */}
              <div style={{ ...panelStyle, flex: 1, minWidth: 0 }}>
                {/* Tabs — Headcount | Revenue */}
                <div style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid rgba(0,0,0,0.07)',
                }}>
                  <Tabs
                    tabs={[
                      { id: 'headcount', label: 'Headcount' },
                      { id: 'revenue',   label: 'Revenue'   },
                    ]}
                    active={activeTab}
                    onChange={setActiveTab}
                    size="sm"
                  />
                </div>
                {/* Scrollable monthly table — scenario col sticky left */}
                {activeTab === 'headcount'
                  ? <Table columns={headcountColumns} data={HEADCOUNT_DATA} wrapperClassName="table-wrapper--seamless" />
                  : <Table columns={revenueColumns}   data={REVENUE_DATA}   wrapperClassName="table-wrapper--seamless" />
                }
              </div>

            </div>
          </div>
        </div>
      );
    }
    return <WidgetStory />;
  },
};

// ─── Time Reports ─────────────────────────────────────────────────────────────
// Columns: ASSIGNEE · RATE · INV. · ASSIGNMENT (sticky left)
//          [Feb 1…Feb 28] (month) | [Q1…Q4] (quarter)  — scrollable
//          HOURS · REVENUE  (sticky right)
// ─────────────────────────────────────────────────────────────────────────────

const TR_QUARTER_COLS = ['Q1', 'Q2', 'Q3', 'Q4'];

// Reuse _FEB_WE / _febH already declared above in the RECON section
const TR_ASSIGNEES = [
  {
    id: 1, name: 'David Rayan',  role: 'Senior Frontend Engineer',
    rate: '$90/hr', invoice: 'INV-001', billable: true,
    dayHours: _febH({ 'Feb 5': 0, 'Feb 12': 6, 'Feb 26': 4 }),
    quarterly: { Q1: 480, Q2: 456, Q3: 480, Q4: 464 },
    totalHours: '160h', totalRevenue: '$14,400',
  },
  {
    id: 2, name: 'Sofia Reyes',  role: 'Product Designer',
    rate: '$85/hr', invoice: 'INV-002', billable: true,
    dayHours: _febH({ 'Feb 3': 0, 'Feb 17': 0 }),
    quarterly: { Q1: 432, Q2: 440, Q3: 448, Q4: 440 },
    totalHours: '144h', totalRevenue: '$12,240',
  },
  {
    id: 3, name: 'James Carter', role: 'Backend Engineer',
    rate: '$110/hr', invoice: 'INV-003', billable: false,
    dayHours: _febH(),
    quarterly: { Q1: 480, Q2: 480, Q3: 480, Q4: 480 },
    totalHours: '160h', totalRevenue: '$17,600',
  },
  {
    id: 4, name: 'Elena Morris', role: 'Frontend Developer',
    rate: '$85/hr', invoice: 'INV-004', billable: true,
    dayHours: _febH({ 'Feb 4': 0, 'Feb 13': 4 }),
    quarterly: { Q1: 456, Q2: 448, Q3: 464, Q4: 448 },
    totalHours: '152h', totalRevenue: '$12,920',
  },
  {
    id: 5, name: 'Marcus Webb',  role: 'QA Engineer',
    rate: '$75/hr', invoice: 'INV-005', billable: false,
    dayHours: _febH({ 'Feb 6': 0, 'Feb 20': 0, 'Feb 27': 6 }),
    quarterly: { Q1: 360, Q2: 376, Q3: 360, Q4: 384 },
    totalHours: '120h', totalRevenue: '$9,000',
  },
  {
    id: 6, name: 'Priya Nair',   role: 'DevOps Engineer',
    rate: '$95/hr', invoice: 'INV-006', billable: true,
    dayHours: _febH({ 'Feb 10': 6, 'Feb 18': 6 }),
    quarterly: { Q1: 504, Q2: 488, Q3: 496, Q4: 504 },
    totalHours: '168h', totalRevenue: '$15,960',
  },
];

// TimeReportsHeader replaced by Accordion (accordion--timesheets variant)

// Day cell for month view — null=weekend, 0=no-hours (red dashed), n=green pill
function TRHoursCell({ hours }) {
  if (hours === null) {
    return <span style={{ color: 'var(--color-base-border, #d9dade)', fontSize: 12, userSelect: 'none' }}>—</span>;
  }
  if (hours === 0) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 26, height: 20, borderRadius: 4,
        border: '1.5px dashed var(--color-base-destructive, #dc2626)',
        color: 'var(--color-base-destructive, #dc2626)',
        fontSize: 11, fontWeight: 700, lineHeight: 1,
      }}>0</span>
    );
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      minWidth: 26, height: 20, borderRadius: 4,
      background: 'var(--color-status-success-background, #dcfce7)',
      color: 'var(--color-status-success-foreground, #16a34a)',
      fontSize: 11, fontWeight: 700, lineHeight: 1,
    }}>{hours}</span>
  );
}

// Quarter cell — plain hours number with a subtle tint
function TRQuarterCell({ hours }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      minWidth: 44, height: 26, borderRadius: 5,
      background: 'var(--color-base-muted, #f7f8f8)',
      color: 'var(--color-base-foreground, #1f1f21)',
      fontSize: 12, fontWeight: 600, lineHeight: 1,
    }}>{hours}h</span>
  );
}

// Billable badge — verified (light blue) | not-billable — secondary (gray)
function AssignmentBadge({ billable }) {
  return billable
    ? <Badge variant="verified">Billable</Badge>
    : <Badge variant="secondary">Not Billable</Badge>;
}

// Shared sticky-left columns for both Time Reports variants
function buildTRStickyLeft() {
  return [
    {
      key: 'assignee', label: 'Assignee', sticky: 'left', width: 200,
      render: (_, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Avatar size="8" initials={row.name.split(' ').map(n => n[0]).join('')} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', lineHeight: 1.35, whiteSpace: 'nowrap' }}>
              {row.name}
            </div>
            <div style={{ fontSize: 11, color: 'var(--color-base-muted-foreground, #91959f)', lineHeight: 1.35, whiteSpace: 'nowrap' }}>
              {row.role}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'rate', label: 'Rate', sticky: 'left', width: 70,
      render: (_, row) => (
        <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)', whiteSpace: 'nowrap' }}>
          {row.rate}
        </span>
      ),
    },
    {
      key: 'invoice', label: 'Inv.', sticky: 'left', width: 90,
      render: (_, row) => (
        <span style={{ fontSize: 12, color: 'var(--color-base-muted-foreground, #91959f)', whiteSpace: 'nowrap' }}>
          {row.invoice}
        </span>
      ),
    },
    {
      key: 'assignment', label: 'Assignment', sticky: 'left', width: 130,
      render: (_, row) => <AssignmentBadge billable={row.billable} />,
    },
  ];
}

// Shared sticky-right columns for both Time Reports variants
function buildTRStickyRight() {
  return [
    {
      key: 'totalHours', label: 'Hours', align: 'right', sticky: 'right', width: 80,
      render: (_, row) => (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-base-foreground, #1f1f21)' }}>
          {row.totalHours}
        </span>
      ),
    },
    {
      key: 'totalRevenue', label: 'Revenue', align: 'right', sticky: 'right', width: 100,
      render: (_, row) => (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-base-foreground, #1f1f21)' }}>
          {row.totalRevenue}
        </span>
      ),
    },
  ];
}

// ─── Time Reports — Month ────────────────────────────────────────────────────

export const TimeReportsMonth = {
  name: 'Time Reports — Month',
  render: () => {
    function Story() {
      const periods = RECON_MONTH_DAYS; // ['Feb 1' … 'Feb 28']

      const columns = [
        ...buildTRStickyLeft(),
        ...periods.map((day) => ({
          key: day, label: day, align: 'center', width: 52,
          render: (_, row) => <TRHoursCell hours={row.dayHours[day]} />,
        })),
        ...buildTRStickyRight(),
      ];

      const totalWidth = columns.reduce(
        (s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0,
      );

      return (
        <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
          <div style={{ padding: '28px 32px 16px' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>
              Time Reports — Month
            </h2>
            <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
              Daily hours per assignee for February · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE
            </p>
          </div>

          <div style={{ overflowX: 'auto', margin: '0 32px 32px' }}>
            <Accordion
              type="single"
              collapsible
              defaultValue="project"
              className="accordion--timesheets accordion--time-reports"
              style={{ minWidth: totalWidth }}
            >
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience — February 2025</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table
                    columns={columns}
                    data={TR_ASSIGNEES}
                    wrapperClassName="table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports"
                    style={{ width: totalWidth }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      );
    }
    return <Story />;
  },
};

// ─── Time Reports — Quarter ───────────────────────────────────────────────────

export const TimeReportsQuarter = {
  name: 'Time Reports — Quarter',
  render: () => {
    function Story() {
      const columns = [
        ...buildTRStickyLeft(),
        ...TR_QUARTER_COLS.map((q) => ({
          key: q, label: q, align: 'center', width: 120,
          render: (_, row) => (
            <TimesheetCell
              state="approved"
              value={String(row.quarterly[q])}
              style={{ width: 52, height: 28, fontSize: 12, borderRadius: 5 }}
            />
          ),
        })),
        ...buildTRStickyRight(),
      ];

      const totalWidth = columns.reduce(
        (s, c) => s + (typeof c.width === 'number' ? c.width : parseInt(c.width) || 120), 0,
      );

      return (
        <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f7f8f8' }}>
          <div style={{ padding: '28px 32px 16px' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: '0 0 3px' }}>
              Time Reports — Quarter
            </h2>
            <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
              Aggregated hours per quarter per assignee · sticky ASSIGNEE / RATE / INV. / ASSIGNMENT + HOURS / REVENUE
            </p>
          </div>

          <div style={{ overflowX: 'auto', margin: '0 32px 32px' }}>
            <Accordion
              type="single"
              collapsible
              defaultValue="project"
              className="accordion--timesheets accordion--time-reports"
              style={{ minWidth: totalWidth }}
            >
              <AccordionItem value="project">
                <AccordionTrigger>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="accordion-project__title">Boston Global HCP Web Experience — FY 2025</p>
                    <p className="accordion-project__subtitle">Cloud and App Platforms and Engineering / Quality &amp; Performance Engineering</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table
                    columns={columns}
                    data={TR_ASSIGNEES}
                    wrapperClassName="table-wrapper--seamless table-wrapper--recon table-wrapper--time-reports"
                    style={{ width: totalWidth }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      );
    }
    return <Story />;
  },
};
