import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
import { TimesheetCell } from './TimesheetCell';
import { Badge } from './Badge';
import {
  EditIcon, CheckCircleIcon, CheckCircleFilledIcon,
  CircleMinusIcon, ArchiveIcon, PlusIcon, SettingsIcon, ExternalLinkIcon,
} from './Icons';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion — collapsible content sections. Single or multiple open items. ' +
          'Animated with CSS grid-template-rows trick (200ms ease-out). ' +
          'Ref: Figma DS (AI) node 34:526.',
      },
    },
  },
};

// ─── Default (single, collapsible) ────────────────────────────────────────────

export const Default = {
  name: 'Default',
  render: () => (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a design system?</AccordionTrigger>
          <AccordionContent>
            A design system is a collection of reusable components, guided by clear standards,
            that can be assembled to build any number of applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How are tokens used?</AccordionTrigger>
          <AccordionContent>
            Design tokens are the visual design atoms of the design system — specifically,
            they are named entities that store visual design attributes such as color, spacing,
            and typography.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What components are available?</AccordionTrigger>
          <AccordionContent>
            The library includes Badge, Avatar, Button, Checkbox, Input, Table, Timesheet Cell,
            Accordion, and more — all token-driven and Figma-matched.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
          <AccordionContent>
            Dark mode support is built into the token architecture. Switching the
            variables file from <code>light</code> to <code>dark</code> updates all
            component colors automatically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// ─── Multiple open ────────────────────────────────────────────────────────────

export const Multiple = {
  name: 'Multiple Open',
  render: () => (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Trigger Text</AccordionTrigger>
          <AccordionContent>This is an accordion content.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// ─── All closed ───────────────────────────────────────────────────────────────

export const AllClosed = {
  name: 'All Closed',
  render: () => (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      <Accordion type="single" collapsible>
        {['Trigger Text', 'Trigger Text', 'Trigger Text', 'Trigger Text'].map((t, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{t}</AccordionTrigger>
            <AccordionContent>This is an accordion content.</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
};

// ─── With disabled item ───────────────────────────────────────────────────────

export const WithDisabled = {
  name: 'With Disabled Item',
  render: () => (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Active item</AccordionTrigger>
          <AccordionContent>This item can be toggled open and closed.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Disabled item</AccordionTrigger>
          <AccordionContent>This content is not reachable.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Another active item</AccordionTrigger>
          <AccordionContent>This item can also be toggled.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// ─── Rich content slot ────────────────────────────────────────────────────────

export const RichContent = {
  name: 'Rich Content (Slot)',
  render: () => (
    <div style={{ maxWidth: 360, fontFamily: 'system-ui, sans-serif' }}>
      <Accordion type="single" collapsible defaultValue="team">
        <AccordionItem value="team">
          <AccordionTrigger>Team Members</AccordionTrigger>
          <AccordionContent>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { name: 'Elena Morris',  role: 'Frontend Developer' },
                { name: 'James Carter',  role: 'Backend Engineer' },
                { name: 'Sofia Reyes',   role: 'Product Designer' },
              ].map(({ name, role }) => (
                <li key={name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-base-foreground, #1f1f21)' }}>{name}</span>
                  <span style={{ color: 'var(--color-base-muted-foreground, #91959f)' }}>{role}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="billing">
          <AccordionTrigger>Billing Details</AccordionTrigger>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)' }}>
              <div>Plan: <strong style={{ color: 'var(--color-base-foreground)' }}>Professional</strong></div>
              <div>Cycle: <strong style={{ color: 'var(--color-base-foreground)' }}>Monthly</strong></div>
              <div>Next billing: <strong style={{ color: 'var(--color-base-foreground)' }}>May 1, 2026</strong></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="settings">
          <AccordionTrigger>Notifications</AccordionTrigger>
          <AccordionContent>
            Configure your email and push notification preferences in account settings.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// ─── Token Reference ──────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const rows = [
      { element: 'Wrapper border',       token: '--color-base-border',           value: '#d9dade' },
      { element: 'Item divider',         token: '--color-base-border',           value: '#d9dade' },
      { element: 'Background',           token: '--color-base-card',             value: '#ffffff' },
      { element: 'Trigger text',         token: '--color-base-foreground',       value: '#1f1f21' },
      { element: 'Trigger hover bg',     token: '--color-base-muted',            value: '#f7f8f8' },
      { element: 'Trigger active bg',    token: '--color-base-accent',           value: '#eeeef0' },
      { element: 'Trigger focus ring',   token: '--color-base-primary',          value: '#0069b4' },
      { element: 'Chevron color',        token: '--color-base-muted-foreground', value: '#91959f' },
      { element: 'Content text',         token: '--color-base-muted-foreground', value: '#91959f' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>Token Reference</h2>
        <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 20px' }}>
          Border radius: 5px · Trigger height: 52px · Content padding: 0 16px 20px · Transition: 200ms ease-out
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Element', 'Token', 'Value'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(({ element, token, value }, i) => (
              <tr key={element} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{element}</td>
                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280' }}>{token}</td>
                <td style={td}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 12, height: 12, borderRadius: 2, background: value, border: '1px solid rgba(0,0,0,0.12)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{value}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

// ─── Cell State Legend ────────────────────────────────────────────────────────
// Ref: Figma DS (AI) node 40000018:63327 "Cell State Legend"
// Horizontal row of state indicators — small cell + label pairs.

const LEGEND_STATES = [
  { state: 'approved',        label: 'Approved' },
  { state: 'bamboo',          label: 'Note attached to entry' },
  { state: 'draft',           label: 'Draft' },
  { state: 'pto',             label: 'PTO' },
  { state: 'overtime',        label: 'Overtime' },
  { state: 'public-holiday',  label: 'Public Holiday' },
  { state: 'account-holiday', label: 'Account Holiday' },
  { state: 'weekend',         label: 'Weekend' },
  { state: 'travelling',      label: 'Travelling' },
  { state: 'training',        label: 'Training' },
  { state: 'merged',          label: 'Merged' },
  { state: 'no-hours',        label: 'No Hours' },
  { state: 'hint',            label: 'Hint Applied' },
  { state: 'actual',          label: 'Actual' },
  { state: 'total',           label: 'Total' },
];

function CellStateLegend() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px', alignItems: 'center' }}>
      {LEGEND_STATES.map(({ state, label }) => (
        <div key={state} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <TimesheetCell
            state={state}
            value={state === 'total' ? '40h' : undefined}
            progress={0.65}
            small
          />
          <span style={{ fontSize: 13, color: 'var(--color-base-foreground, #1f1f21)', whiteSpace: 'nowrap' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Timesheets project data ───────────────────────────────────────────────────

const TIMESHEET_PROJECTS = [
  {
    value: 'project-boston',
    title: 'Boston Global HCP Web Experience Jan',
    subtitle: 'Cloud and App Platforms and Engineering / Quality & Performance Engineering',
  },
  {
    value: 'project-phoenix',
    title: 'Phoenix Cloud Migration Q1',
    subtitle: 'Infrastructure & DevOps / Platform Engineering',
  },
  {
    value: 'project-atlas',
    title: 'Atlas Data Platform Redesign',
    subtitle: 'Data Engineering / Analytics & Insights',
  },
];

export const Timesheets = {
  name: 'Timesheets',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#f7f8f8', minHeight: '100vh' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1f1f21', margin: '0 0 4px' }}>Timesheets</h2>
      <p style={{ fontSize: 13, color: '#91959f', margin: '0 0 20px' }}>
        Project accordions + Cell state legend — ref: Figma nodes 40000016:54479, 40000018:63327
      </p>

      {/* Project accordions — ref: Figma node 40000016:54479 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 8 }}>
        {TIMESHEET_PROJECTS.map(({ value, title, subtitle }) => (
          <Accordion key={value} type="single" collapsible className="accordion--timesheets">
            <AccordionItem value={value}>
              <AccordionTrigger>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className="accordion-project__title">{title}</p>
                  <p className="accordion-project__subtitle">{subtitle}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)' }}>
                  Timesheet content for {title}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* Cell State Legend — ref: Figma node 40000018:63327 */}
      <Accordion type="single" collapsible defaultValue="legend" className="accordion--timesheets">
        <AccordionItem value="legend">
          <AccordionTrigger>
            <span style={{ fontWeight: 500, color: 'var(--color-base-foreground, #1f1f21)' }}>
              Cell State Legend
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <CellStateLegend />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// ─── SRP (Sales Revenue Projections) ─────────────────────────────────────────
// Ref: Figma DS (AI) node 40000016:54522 "Accordion / SRP"
// Variants: Active | Draft | Inactive Project | Archived Opportunity

/**
 * Unified SRP trigger layout:
 *   Left  — title + subtitle row [badge? | description]
 *   Right — variant-specific CTAs (stop propagation)
 */
function SRPTrigger({ title, subtitle, badge = null, rightSlot = null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, gap: 16, minWidth: 0 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p className="accordion-project__title" style={{ color: 'var(--color-base-primary-foreground, #f7f8f8)' }}>
          {title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
          {badge}
          <p className="accordion-project__subtitle" style={{ color: 'rgba(255,255,255,0.75)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {subtitle}
          </p>
        </div>
      </div>
      {rightSlot && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, flexWrap: 'nowrap' }} onClick={e => e.stopPropagation()}>
          {rightSlot}
        </div>
      )}
    </div>
  );
}

/* Right-side CTA slots per variant */
function ActiveDraftActions() {
  return (
    <>
      <span className="srp-tag">USD</span>
      <span className="srp-tag">T&amp;M</span>
      <span className="srp-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
        P: Production Testing <ExternalLinkIcon size={11} />
      </span>
      <button className="srp-action-btn srp-action-btn--icon" title="Settings">
        <SettingsIcon size={14} />
      </button>
      <button className="srp-action-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <PlusIcon size={14} /> Add Position
      </button>
    </>
  );
}

function InactiveActions() {
  return (
    <button className="srp-action-btn srp-action-btn--icon" title="Settings">
      <SettingsIcon size={14} />
    </button>
  );
}

function ArchivedActions() {
  return (
    <>
      <button className="srp-action-btn srp-action-btn--icon" title="Settings">
        <SettingsIcon size={14} />
      </button>
      <button className="srp-action-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <ArchiveIcon size={14} /> Unarchive projections
      </button>
    </>
  );
}

const SRP_POSITIONS = [
  { role: 'Senior Frontend Engineer', level: 'L5', rate: '$185', hours: 160, revenue: '$29,600' },
  { role: 'Backend Engineer',          level: 'L4', rate: '$165', hours: 160, revenue: '$26,400' },
  { role: 'Product Designer',          level: 'L4', rate: '$155', hours: 80,  revenue: '$12,400' },
  { role: 'QA Engineer',               level: 'L3', rate: '$130', hours: 80,  revenue: '$10,400' },
];

function SRPContent({ positions = SRP_POSITIONS }) {
  const th = { padding: '8px 12px', fontSize: 11, fontWeight: 700, color: '#91959f', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #d9dade', textAlign: 'left' };
  const td = { padding: '10px 12px', fontSize: 13, borderBottom: '1px solid #f0f1f3', color: '#1f1f21' };
  const total = positions.reduce((s, p) => s + parseInt(p.revenue.replace(/\D/g, '')), 0);

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {['Position', 'Level', 'Rate / hr', 'Hours', 'Projected Revenue'].map(h => (
            <th key={h} style={{ ...th, textAlign: h === 'Projected Revenue' ? 'right' : 'left' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {positions.map((p, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
            <td style={{ ...td, fontWeight: 600 }}>{p.role}</td>
            <td style={{ ...td, color: '#91959f' }}>{p.level}</td>
            <td style={td}>{p.rate}</td>
            <td style={td}>{p.hours}</td>
            <td style={{ ...td, textAlign: 'right', fontWeight: 600 }}>{p.revenue}</td>
          </tr>
        ))}
        <tr style={{ background: '#f0f9ff' }}>
          <td colSpan={4} style={{ ...td, fontWeight: 700, color: '#0069b4', borderTop: '2px solid #d1ecff' }}>Total</td>
          <td style={{ ...td, textAlign: 'right', fontWeight: 700, color: '#0069b4', borderTop: '2px solid #d1ecff' }}>
            ${total.toLocaleString()}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

// ─── SRP Design Documentation ────────────────────────────────────────────────

export const SRPDocumentation = {
  name: 'SRP — Design Documentation',
  render: () => {
    function Num({ n }) {
      return (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 20, height: 20, borderRadius: '50%',
          background: '#0069b4', color: '#fff',
          fontSize: 10, fontWeight: 700, flexShrink: 0, lineHeight: 1,
        }}>{n}</span>
      );
    }

    const H = ({ children }) => (
      <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', margin: '36px 0 12px', paddingBottom: 8, borderBottom: '2px solid #e5e7eb' }}>
        {children}
      </h3>
    );

    const ANATOMY = [
      {
        n: 1, name: 'Project Title',
        desc: 'Primary label identifying the project. Semibold 16px, white. Truncates with ellipsis on overflow.',
        sample: <span style={{ fontWeight: 600, fontSize: 14, color: '#1f1f21' }}>Boston Global HCP Web Experience Jan</span>,
      },
      {
        n: 2, name: 'Project Description',
        desc: 'Secondary line showing department / team hierarchy. 14px regular, white @75% opacity. Truncates.',
        sample: <span style={{ fontSize: 12, color: '#91959f' }}>Cloud and App Platforms / Quality & Performance Engineering</span>,
      },
      {
        n: 3, name: 'Status Badge',
        desc: 'Ghost pill shown only when project is in a non-active state: Draft, Inactive, or Archived. Omitted for Active.',
        sample: (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>
            <Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>
            <Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>
          </div>
        ),
      },
      {
        n: 4, name: 'Currency Badge',
        desc: 'Compact ghost tag indicating the billing currency for the project. Currently USD.',
        sample: <span className="srp-tag" style={{ background: 'rgba(0,105,180,0.12)', color: '#0069b4', border: '1px solid rgba(0,105,180,0.25)', borderRadius: 4, fontSize: 12, fontWeight: 600, padding: '3px 8px' }}>USD</span>,
      },
      {
        n: 5, name: 'Billing Model Badge',
        desc: 'Ghost tag indicating the revenue model. One of: T&M, Fixed, or POD. See Billing Model section below.',
        sample: (
          <div style={{ display: 'flex', gap: 6 }}>
            {['T&M', 'Fixed', 'POD'].map(l => (
              <span key={l} className="srp-tag" style={{ background: 'rgba(0,105,180,0.12)', color: '#0069b4', border: '1px solid rgba(0,105,180,0.25)', borderRadius: 4, fontSize: 12, fontWeight: 600, padding: '3px 8px' }}>{l}</span>
            ))}
          </div>
        ),
      },
      {
        n: 6, name: 'Stage / Scenario Tag',
        desc: 'Optional ghost tag linking the accordion to a specific projection stage or scenario (e.g. P: Production Testing).',
        sample: <span className="srp-tag" style={{ background: 'rgba(0,105,180,0.12)', color: '#0069b4', border: '1px solid rgba(0,105,180,0.25)', borderRadius: 4, fontSize: 12, fontWeight: 600, padding: '3px 8px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>P: Production Testing <ExternalLinkIcon size={11} /></span>,
      },
      {
        n: 7, name: 'Settings CTA',
        desc: 'Icon-only ghost button. Opens project settings. Present on all variants except the base active state without extra controls.',
        sample: <button className="srp-action-btn srp-action-btn--icon" style={{ background: 'rgba(0,105,180,0.08)', border: '1px solid rgba(0,105,180,0.25)', color: '#0069b4', borderRadius: 6 }} title="Settings"><SettingsIcon size={14} /></button>,
      },
      {
        n: 8, name: 'Primary CTA',
        desc: 'Text ghost button with optional icon. Varies by status: "Add Position" (Active/Draft) · "Unarchive projections" (Archived). Hidden on Inactive.',
        sample: (
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="srp-action-btn" style={{ background: 'rgba(0,105,180,0.08)', border: '1px solid rgba(0,105,180,0.25)', color: '#0069b4', borderRadius: 6, fontSize: 13, fontWeight: 600, padding: '5px 10px', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <PlusIcon size={13} /> Add Position
            </button>
            <button className="srp-action-btn" style={{ background: 'rgba(0,105,180,0.08)', border: '1px solid rgba(0,105,180,0.25)', color: '#0069b4', borderRadius: 6, fontSize: 13, fontWeight: 600, padding: '5px 10px', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <ArchiveIcon size={13} /> Unarchive projections
            </button>
          </div>
        ),
      },
      {
        n: 9, name: 'Chevron',
        desc: 'Collapse/expand indicator on the far right. White @70% opacity when closed, full white when open. Rotates 180° on open.',
        sample: (
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#6b7280' }}>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M6 9l6 6 6-6" /></svg>
              Collapsed
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#0069b4' }}>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }}><path d="M6 9l6 6 6-6" /></svg>
              Expanded
            </div>
          </div>
        ),
      },
    ];

    const BILLING = [
      {
        label: 'T&M',
        name: 'Time & Materials',
        desc: 'Revenue calculated dynamically as recorded work (hours or days) × role-specific rates.',
        chars: [
          'No predefined total budget',
          'Position-level revenue calculation',
          'Reflects real-time delivery effort',
          'Includes a T&M Utilization Rate (adjusts for time off / non-billable periods)',
        ],
        ux: 'Signals flexibility and variability — numbers may change over time',
      },
      {
        label: 'Fixed',
        name: 'Fixed Price',
        desc: 'Total revenue is fixed regardless of actual effort. Revenue does not change with hours logged.',
        chars: [
          'Predefined project budget',
          'Revenue capped at contract value',
          'Focus on delivery within scope and budget',
        ],
        ux: 'Signals predictability — financials are stable and capped',
      },
      {
        label: 'POD',
        name: 'POD — Product-Oriented Delivery',
        desc: 'Revenue tied to a dedicated team with a stable cost structure based on recurring bundled capacity.',
        chars: [
          'Team-based billing (not individual positions)',
          'Often aligned with long-term engagements',
          'Blends predictability with flexibility',
        ],
        ux: 'Signals a hybrid model — more stable than T&M, more flexible than Fixed Price',
      },
    ];

    const STATUS_VARIANTS = [
      { label: 'Active', cls: 'accordion-item--srp-active', badge: null, desc: 'Live project with active revenue projections. Brand blue header.' },
      { label: 'Draft', cls: 'accordion-item--srp-draft', badge: <Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>, desc: 'Project in planning phase. Slightly darker blue (Mariner 800).' },
      { label: 'Inactive', cls: 'accordion-item--srp-inactive', badge: <Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>, desc: 'Project paused or on hold. Secondary foreground grey @40% opacity.' },
      { label: 'Archived', cls: 'accordion-item--srp-archived', badge: <Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>, desc: 'Closed opportunity. Dark secondary foreground grey.' },
    ];

    const tdStyle = { padding: '12px 14px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'top' };
    const thStyle = { padding: '8px 14px', fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', borderBottom: '2px solid #e5e7eb', textAlign: 'left' };

    return (
      <div style={{ padding: '32px 40px', fontFamily: 'system-ui, sans-serif', background: '#fff', maxWidth: 920 }}>

        {/* Page title */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: '0 0 6px' }}>
          SRP Accordion — Design Documentation
        </h2>
        <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 4px' }}>
          Anatomy, Billing Model Badges, Status Variants, CTAs, and interaction states for the
          Sales Revenue Projections accordion component.
        </p>
        <p style={{ fontSize: 11, color: '#9ca3af', margin: 0 }}>
          Ref: Figma node 40000016:54522
        </p>

        {/* ── Anatomy ──────────────────────────────────── */}
        <H>Anatomy</H>

        {/* Live annotated example */}
        <div style={{ marginBottom: 20, borderRadius: 10, overflow: 'hidden', border: '1px solid #d9dade' }}>
          <Accordion type="single" collapsible defaultValue="doc-demo">
            <AccordionItem value="doc-demo" className="accordion-item--srp-active">
              <AccordionTrigger>
                <SRPTrigger
                  title="Boston Global HCP Web Experience Jan"
                  subtitle="Cloud and App Platforms and Engineering / Quality & Performance Engineering"
                  rightSlot={<ActiveDraftActions />}
                />
              </AccordionTrigger>
              <AccordionContent>
                <p style={{ margin: 0, fontSize: 13, color: '#91959f' }}>
                  Accordion content area — tables, position lists, etc.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Anatomy reference table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: 32 }}>#</th>
              <th style={thStyle}>Element</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Visual</th>
            </tr>
          </thead>
          <tbody>
            {ANATOMY.map(({ n, name, desc, sample }) => (
              <tr key={n} style={{ background: n % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...tdStyle, paddingTop: 14 }}><Num n={n} /></td>
                <td style={{ ...tdStyle, fontWeight: 600, color: '#111827', whiteSpace: 'nowrap' }}>{name}</td>
                <td style={{ ...tdStyle, color: '#6b7280', lineHeight: 1.6 }}>{desc}</td>
                <td style={tdStyle}>{sample}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Billing Model Badge ───────────────────────── */}
        <H>Billing Model Badge</H>
        <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 16px', lineHeight: 1.6 }}>
          A compact visual indicator within each project accordion that communicates the project's
          revenue model at a glance, helping users distinguish billing logic without opening the accordion.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 8 }}>
          {BILLING.map(({ label, name, desc, chars, ux }) => (
            <div key={label} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, background: '#fafafa' }}>
              {/* Badge preview on dark swatch */}
              <div style={{ background: '#0069b4', borderRadius: 6, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, fontSize: 12, color: '#fff' }}>Project Title</span>
                <span className="srp-tag">{label}</span>
              </div>
              <p style={{ fontWeight: 700, fontSize: 13, color: '#111827', margin: '0 0 4px' }}>{name}</p>
              <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 10px', lineHeight: 1.5 }}>{desc}</p>
              <ul style={{ margin: '0 0 10px', padding: '0 0 0 16px', fontSize: 12, color: '#374151', lineHeight: 1.7 }}>
                {chars.map(c => <li key={c}>{c}</li>)}
              </ul>
              <p style={{ fontSize: 11, color: '#9ca3af', margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
                UX: {ux}
              </p>
            </div>
          ))}
        </div>

        {/* ── Status Variants ───────────────────────────── */}
        <H>Status Variants</H>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 8 }}>
          <thead>
            <tr>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Header Preview</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            {STATUS_VARIANTS.map(({ label, cls, badge, desc }, i) => (
              <tr key={label} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...tdStyle, fontWeight: 600, color: '#111827', whiteSpace: 'nowrap' }}>{label}</td>
                <td style={{ ...tdStyle, padding: '8px 14px' }}>
                  <div style={{ borderRadius: 8, overflow: 'hidden', width: 320 }}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`sv-${label}`} className={cls}>
                        <AccordionTrigger>
                          <SRPTrigger
                            title="Project Name"
                            subtitle="Department / Team"
                            badge={badge}
                          />
                        </AccordionTrigger>
                        <AccordionContent><span /></AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </td>
                <td style={{ ...tdStyle, color: '#6b7280', lineHeight: 1.6 }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── CTAs by Variant ───────────────────────────── */}
        <H>CTAs by Status</H>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Currency</th>
              <th style={thStyle}>Billing Model</th>
              <th style={thStyle}>Stage Tag</th>
              <th style={thStyle}>Settings</th>
              <th style={thStyle}>Primary CTA</th>
            </tr>
          </thead>
          <tbody>
            {[
              { status: 'Active',   currency: true, billing: true, stage: true,  settings: true,  cta: 'Add Position' },
              { status: 'Draft',    currency: true, billing: true, stage: true,  settings: true,  cta: 'Add Position' },
              { status: 'Inactive', currency: false, billing: false, stage: false, settings: true, cta: '—' },
              { status: 'Archived', currency: false, billing: false, stage: false, settings: true, cta: 'Unarchive projections' },
            ].map(({ status, currency, billing, stage, settings, cta }, i) => {
              const check = (v) => v
                ? <span style={{ color: '#16a34a', fontWeight: 700 }}>✓</span>
                : <span style={{ color: '#d1d5db' }}>—</span>;
              return (
                <tr key={status} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                  <td style={{ ...tdStyle, fontWeight: 600, color: '#111827' }}>{status}</td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>{check(currency)}</td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>{check(billing)}</td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>{check(stage)}</td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>{check(settings)}</td>
                  <td style={{ ...tdStyle, color: cta === '—' ? '#d1d5db' : '#374151' }}>{cta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    );
  },
};

export const SRP = {
  name: 'SRP (Sales Revenue Projections)',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#f7f8f8', minHeight: '100vh' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1f1f21', margin: '0 0 4px' }}>
        Sales Revenue Projections
      </h2>
      <p style={{ fontSize: 13, color: '#91959f', margin: '0 0 20px' }}>
        Project variants: Active · Draft · Inactive Project · Archived Opportunity — ref: Figma node 40000016:54522
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Active */}
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #d9dade' }}>
          <Accordion type="single" collapsible defaultValue="active-inner">
            <AccordionItem value="active-inner" className="accordion-item--srp-active">
              <AccordionTrigger>
                <SRPTrigger
                  title="Boston Global HCP Web Experience Jan"
                  subtitle="Cloud and App Platforms and Engineering / Quality & Performance Engineering"
                  rightSlot={<ActiveDraftActions />}
                />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Draft */}
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #d9dade' }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="draft-inner" className="accordion-item--srp-draft">
              <AccordionTrigger>
                <SRPTrigger
                  title="Phoenix Cloud Migration Q1"
                  subtitle="Infrastructure & DevOps / Platform Engineering"
                  badge={<Badge variant="srp" icon={<EditIcon size={11} />}>Draft Project</Badge>}
                  rightSlot={<ActiveDraftActions />}
                />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(0, 2)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Inactive Project */}
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #d9dade' }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="inactive-inner" className="accordion-item--srp-inactive">
              <AccordionTrigger>
                <SRPTrigger
                  title="Atlas Data Platform Redesign"
                  subtitle="Data Engineering / Analytics & Insights"
                  badge={<Badge variant="srp" icon={<CircleMinusIcon size={11} />}>Inactive Project</Badge>}
                  rightSlot={<InactiveActions />}
                />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(1, 3)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Archived Opportunity */}
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #d9dade' }}>
          <Accordion type="single" collapsible>
            <AccordionItem value="archived-inner" className="accordion-item--srp-archived">
              <AccordionTrigger>
                <SRPTrigger
                  title="Meridian Analytics Platform"
                  subtitle="Business Intelligence / Data Visualization"
                  badge={<Badge variant="srp" icon={<ArchiveIcon size={11} />}>Archived Opportunity</Badge>}
                  rightSlot={<ArchivedActions />}
                />
              </AccordionTrigger>
              <AccordionContent>
                <SRPContent positions={SRP_POSITIONS.slice(2, 4)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  ),
};
