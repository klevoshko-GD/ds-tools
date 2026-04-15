import React, { useState } from 'react';
import { Table } from './Table';
import { BadgeStatus } from './Badge';
import { Toggle } from './Toggle';
import { Tabs } from './Tabs';

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Widgets',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Dashboard widget components for the SRP (Sales Revenue Projections) design system. ' +
          'Ref: Figma DS–Sales Revenue Projections.',
      },
    },
  },
};

// ─── Shared data (self-contained; mirrors Table.stories) ──────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const QUARTERS_AO = ['Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL'];

const HEADCOUNT_DATA = [
  { scenario: 'optimistic',  Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
  { scenario: 'realistic',   Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
  { scenario: 'pessimistic', Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185, Sep: 185, Oct: 185, Nov: 185, Dec: 185 },
];

const REVENUE_DATA = [
  { scenario: 'spt',         Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185,   Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: null },
  { scenario: 'optimistic',  Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 0,     Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: { month: 'Aug', label: '-20%' } },
  { scenario: 'realistic',   Jan: 194, Feb: 171, Mar: 178, Apr: 178, May: 186, Jun: 186, Jul: 185, Aug: 185,   Sep: 185, Oct: 185, Nov: 185, Dec: 185, variance: null },
  { scenario: 'pessimistic', Jan: 194, Feb: 194, Mar: 194, Apr: 194, May: 194, Jun: 194, Jul: 194, Aug: 194,   Sep: 194, Oct: 194, Nov: 194, Dec: 194, variance: null },
];

const ACCOUNT_OVERVIEW_DATA = [
  { scenario: 'target',
    Q1: '$1.25M', Q2: '$150.75K', Q3: '$1.10B', Q4: '$999.99K', ANNUAL: '$1.10B',
  },
  { scenario: 'optimistic',
    Q1: { amount: '$95,432',  pct: '25%' }, Q2: { amount: '$98.765K', pct: '10%' },
    Q3: { amount: '$132.10K', pct: '00%' }, Q4: { amount: '$12,345',  pct: '15%' },
    ANNUAL: { amount: '$000.0K', pct: '00%' },
  },
  { scenario: 'realistic',
    Q1: { amount: '$87,654',  pct: '33%' }, Q2: { amount: '$250.88K', pct: '15%' },
    Q3: { amount: '$000.0K',  pct: '00%' }, Q4: { amount: '$000.0K',  pct: '00%' },
    ANNUAL: { amount: '$000.0K', pct: '00%' },
  },
  { scenario: 'pessimistic',
    Q1: { amount: '$000.0K', pct: '00%' }, Q2: { amount: '$000.0K', pct: '00%' },
    Q3: { amount: '$000.0K', pct: '00%' }, Q4: { amount: '$000.0K', pct: '00%' },
    ANNUAL: { amount: '$000.0K', pct: '00%' },
  },
];

// ─── Shared helpers ────────────────────────────────────────────────────────────

function ScenarioLabel({ scenario }) {
  if (scenario === 'spt') {
    return <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-base-foreground,#1f1f21)' }}>SPT</strong>;
  }
  if (scenario === 'target') {
    return <strong style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-base-foreground,#1f1f21)' }}>Target</strong>;
  }
  return <BadgeStatus variant={scenario} />;
}

function VarianceBadgeCell({ badge, value, muted = false }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span style={{
        display: 'inline-block',
        background: 'var(--color-status-warning-icon,#ea580c)',
        color: '#fff', fontSize: 11, fontWeight: 700,
        borderRadius: 9999, padding: '1px 7px', lineHeight: '18px', whiteSpace: 'nowrap',
      }}>
        {badge}
      </span>
      <span style={{ fontSize: 13, color: muted ? 'var(--color-base-muted-foreground,#91959f)' : 'inherit' }}>
        {value}
      </span>
    </div>
  );
}

// ─── Shared icon components ────────────────────────────────────────────────────

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
    style={{ flexShrink: 0, color: 'var(--color-base-muted-foreground,#91959f)' }}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
    <path d="M8 7v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ─── Shared widget card styles ─────────────────────────────────────────────────
// Ref: Figma node 198:19784 — card fills white (#fff), cornerRadius 12, two drop-shadows.
// Header + body fill #fcfcfc (color-base-card / 2015:174 token).

const S = {
  card: {
    background: '#ffffff',
    borderRadius: 12,
    border: '1px solid rgba(1,1,46,0.08)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.10)',
    overflow: 'hidden',
    fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    background: 'var(--color-base-card,#fcfcfc)',
    borderBottom: '1px solid rgba(1,1,46,0.08)',
    gap: 24,
  },
  body: {
    padding: '16px 24px 24px',
    background: 'var(--color-base-card,#fcfcfc)',
    overflow: 'hidden',
  },
  panelsRow: {
    display: 'flex',
    alignItems: 'flex-end',   /* counterAxisAlignItems: MAX — bottom-aligned */
    gap: 56,
  },
  panel: {
    background: '#ffffff',
    borderRadius: 6,
    border: '1px solid rgba(0,0,0,0.07)',
    overflow: 'hidden',
    flexShrink: 0,
  },
  settingsBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    borderRadius: 6,
    border: '1px solid var(--color-base-primary,#0069b4)',
    background: '#ffffff',
    color: 'var(--color-base-primary,#0069b4)',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    minHeight: 40,
  },
};

// ─── Widget Header (shared) ────────────────────────────────────────────────────

function WidgetHeader({ includeUnmapped, onToggle }) {
  return (
    <div style={S.header}>
      {/* Left: company + info + toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, minWidth: 0, flex: 1, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <span style={{
            fontSize: 24, fontWeight: 600,
            color: 'var(--color-base-foreground,#1f1f21)',
            lineHeight: '140%', whiteSpace: 'nowrap',
          }}>
            Boston Scientific International SA
          </span>
          <InfoIcon />
        </div>
        <Toggle checked={includeUnmapped} onChange={onToggle} labelRight="Include unmapped position" />
      </div>
      {/* Right: Account Settings */}
      <button style={S.settingsBtn} type="button">
        <SettingsIcon />
        Account Settings
      </button>
    </div>
  );
}

// ─── Right panel — Tabs + monthly table (shared between both widget variants) ──

function RightPanel({ activeTab, onTabChange, showTabs = true }) {
  const headcountColumns = [
    { key: 'scenario', label: '', width: 120, sticky: 'left',
      render: (val) => <ScenarioLabel scenario={val} /> },
    ...MONTHS.map((m) => ({
      key: m, label: m, align: 'right',
      render: (val) => <span style={{ fontSize: 13 }}>{val}</span>,
    })),
  ];

  const revenueColumns = [
    { key: 'scenario', label: '', width: 120, sticky: 'left',
      render: (val) => <ScenarioLabel scenario={val} /> },
    ...MONTHS.map((month) => {
      const isVarianceMonth = REVENUE_DATA.some((r) => r.variance?.month === month);
      return {
        key: month, label: month, align: 'right',
        className: isVarianceMonth ? 'table__td--variance' : '',
        render: (val, row) => {
          const hasVariance = row.variance?.month === month;
          if (hasVariance) {
            return <VarianceBadgeCell badge={row.variance.label} value={val === 0 ? '$0.00' : val} muted={val === 0} />;
          }
          return <span style={{ fontSize: 13 }}>{val}</span>;
        },
      };
    }),
  ];

  return (
    <div style={{ ...S.panel, flex: 1, minWidth: 0, flexShrink: 1 }}>
      {/* Tabs row — hidden when parent renders its own aligned tab bar */}
      {showTabs && (
        <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <Tabs
            tabs={[{ id: 'headcount', label: 'Headcount' }, { id: 'revenue', label: 'Revenue' }]}
            active={activeTab}
            onChange={onTabChange}
            size="sm"
          />
        </div>
      )}
      {/* Monthly table */}
      {activeTab === 'headcount'
        ? <Table columns={headcountColumns} data={HEADCOUNT_DATA} wrapperClassName="table-wrapper--seamless" />
        : <Table columns={revenueColumns}   data={REVENUE_DATA}   wrapperClassName="table-wrapper--seamless" />
      }
    </div>
  );
}

// ─── Chart data ────────────────────────────────────────────────────────────────
// Quarterly headcount: Q1–Q2 = actuals (scenarios converge), Q3–Q4 = projections.
// Target is the management goal line across quarters.
// Ref: Figma node 198:19825 — Bar Chart / Type10 (Show Grid + Show Legend).

const CHART_DATA = [
  { period: 'Q1', optimistic: 194, realistic: 181, pessimistic: 163, target: 190 },
  { period: 'Q2', optimistic: 198, realistic: 183, pessimistic: 160, target: 195 },
  { period: 'Q3', optimistic: 210, realistic: 185, pessimistic: 152, target: 205 },
  { period: 'Q4', optimistic: 222, realistic: 185, pessimistic: 138, target: 212 },
];

// Chart series colors — match DS forecast badge tokens exactly
// Optimistic:  #3d854e  (--color-forecast-optimistic)
// Realistic:   #d9993a  (--color-forecast-realistic)
// Pessimistic: #ce4e45  (--color-forecast-pessimistic)
// Target line: #005999  (Figma Stroke rgb(0,0.35,0.6))
const CHART_COLORS = {
  optimistic:  '#3d854e',
  realistic:   '#d9993a',
  pessimistic: '#ce4e45',
  target:      '#005999',
};

// ─── AccountOverviewBarChart ───────────────────────────────────────────────────
// Compact SVG bar chart sized for the left panel (~360px wide, 148px tall).
// viewBox: 0 0 320 148 — 4 Q groups × 3 bars (Opt / Real / Pess) + Target line.
// Y-axis: 0–240 with grid lines at 50, 100, 150, 200.

function AccountOverviewBarChart({ data = CHART_DATA }) {
  const VW = 320, VH = 148;
  const PL = 36, PR = 8, PT = 8, PB = 22;

  const cW = VW - PL - PR;   // 276
  const cH = VH - PT - PB;   // 118

  const MAX_Y = 240;
  const GRID   = [50, 100, 150, 200];

  // Per-group geometry — 4 quarters
  const nGroups   = data.length;          // 4
  const groupW    = cW / nGroups;         // = 69 px
  const BAR_W     = 16;
  const BAR_GAP   = 3;
  const GROUP_PAD = (groupW - 3 * BAR_W - 2 * BAR_GAP) / 2; // ≈ 7.5 px

  const toY   = (v) => PT + cH - (v / MAX_Y) * cH;
  const grpX  = (gi) => PL + gi * groupW;
  const barX  = (gi, bi) => grpX(gi) + GROUP_PAD + bi * (BAR_W + BAR_GAP);
  const barH  = (v) => (v / MAX_Y) * cH;

  const targetPts = data.map((d, i) => [grpX(i) + groupW / 2, toY(d.target)]);

  return (
    <svg
      width="100%" height={VH}
      viewBox={`0 0 ${VW} ${VH}`}
      aria-label="Quarterly headcount projections by forecast scenario"
      style={{ display: 'block' }}
    >
      {/* ── Grid lines ───────────────────────────────────────── */}
      {GRID.map((v) => (
        <line key={v}
          x1={PL} y1={toY(v)} x2={VW - PR} y2={toY(v)}
          stroke="#e5e7eb" strokeWidth={0.75} />
      ))}
      <line x1={PL} y1={toY(0)} x2={VW - PR} y2={toY(0)} stroke="#d1d5db" strokeWidth={0.75} />

      {/* ── Y-axis labels ────────────────────────────────────── */}
      {GRID.map((v) => (
        <text key={v}
          x={PL - 4} y={toY(v) + 3.5}
          textAnchor="end" fontSize={8}
          fontFamily="'Source Sans Pro',system-ui,sans-serif"
          fill="#9ca3af">
          {v}
        </text>
      ))}

      {/* ── Bars ─────────────────────────────────────────────── */}
      {data.map((d, i) => (
        <g key={d.period}>
          <rect x={barX(i,0)} y={toY(d.optimistic)}  width={BAR_W} height={barH(d.optimistic)}  fill={CHART_COLORS.optimistic}  rx={2} />
          <rect x={barX(i,1)} y={toY(d.realistic)}   width={BAR_W} height={barH(d.realistic)}   fill={CHART_COLORS.realistic}   rx={2} />
          <rect x={barX(i,2)} y={toY(d.pessimistic)} width={BAR_W} height={barH(d.pessimistic)} fill={CHART_COLORS.pessimistic} rx={2} />
        </g>
      ))}

      {/* ── Target line ──────────────────────────────────────── */}
      <polyline
        points={targetPts.map(([x, y]) => `${x},${y}`).join(' ')}
        fill="none" stroke={CHART_COLORS.target}
        strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      />
      {targetPts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill={CHART_COLORS.target} />
      ))}

      {/* ── X-axis quarter labels ────────────────────────────── */}
      {data.map((d, i) => (
        <text key={d.period}
          x={grpX(i) + groupW / 2} y={VH - 6}
          textAnchor="middle" fontSize={9}
          fontFamily="'Source Sans Pro',system-ui,sans-serif"
          fontWeight="600" fill="#6b7280">
          {d.period}
        </text>
      ))}
    </svg>
  );
}

// ─── Chart Legend ──────────────────────────────────────────────────────────────

function ChartLegend() {
  const ITEMS = [
    { key: 'optimistic',  label: 'Optimistic',  type: 'bar'  },
    { key: 'realistic',   label: 'Realistic',   type: 'bar'  },
    { key: 'pessimistic', label: 'Pessimistic', type: 'bar'  },
    { key: 'target',      label: 'Target',      type: 'line' },
  ];

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap',
      gap: '4px 14px', marginTop: 8,
    }}>
      {ITEMS.map(({ key, label, type }) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {type === 'bar'
            ? (
              <span style={{
                width: 10, height: 10, borderRadius: 2,
                background: CHART_COLORS[key], flexShrink: 0,
              }} />
            )
            : (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 2, flexShrink: 0,
              }}>
                <span style={{ width: 14, height: 2, background: CHART_COLORS[key], borderRadius: 2 }} />
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: CHART_COLORS[key] }} />
              </span>
            )
          }
          <span style={{
            fontSize: 11,
            fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif",
            color: 'var(--color-base-muted-foreground,#91959f)',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Story 1: SRP Dashboard Widget ────────────────────────────────────────────
// Ref: Figma node 183:7496
// Left panel  → Account Overview quarterly table (sticky scenario col)
// Right panel → Tabs (Headcount | Revenue) + monthly table

export const SRPDashboardWidget = {
  name: 'SRP / Dashboard Widget',
  render: () => {
    function DashboardWidgetStory() {
      const [activeTab,      setActiveTab]    = useState('headcount');
      const [includeUnmapped, setUnmapped]    = useState(true);

      // Account Overview quarterly columns
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

      return (
        <div style={{ padding: 24, background: '#eef0f2', fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif" }}>
          <div style={S.card}>

            {/* Header */}
            <WidgetHeader includeUnmapped={includeUnmapped} onToggle={setUnmapped} />

            {/* Body */}
            <div style={S.body}>
              <div style={S.panelsRow}>

                {/* Left panel — Account Overview quarterly */}
                <div style={S.panel}>
                  <Table
                    columns={aoColumns}
                    data={ACCOUNT_OVERVIEW_DATA}
                    wrapperClassName="table-wrapper--seamless"
                  />
                </div>

                {/* Right panel — Tabs + monthly table */}
                <RightPanel activeTab={activeTab} onTabChange={setActiveTab} />

              </div>
            </div>

          </div>
        </div>
      );
    }
    return <DashboardWidgetStory />;
  },
};

// ─── Story 2: Account Overview Widget with Chart ───────────────────────────────
// Ref: Figma node 198:19784
// Same header & right panel (Headcount | Revenue) as Dashboard Widget.
// Left panel  → "Chart | Table" toggle:
//     Chart → compact Q1–Q4 bar chart + legend
//     Table → Account Overview quarterly table (same as Dashboard Widget)

export const AccountOverviewWidgetWithChart = {
  name: 'Account Overview Widget — With Chart',
  render: () => {
    function ChartWidgetStory() {
      const [activeTab,       setActiveTab]    = useState('headcount');
      const [includeUnmapped, setUnmapped]     = useState(true);
      const [leftView,        setLeftView]     = useState('chart'); // 'chart' | 'table'

      // Account Overview quarterly columns (for Table view in left panel)
      const aoColumns = [
        {
          key: 'scenario', label: '', width: 100, sticky: 'left',
          render: (val) => <ScenarioLabel scenario={val} />,
        },
        ...QUARTERS_AO.map((q) => ({
          key: q, label: q, align: 'right',
          render: (val, row) =>
            row.scenario === 'target'
              ? <span style={{ fontSize: 12, fontWeight: 500 }}>{val}</span>
              : (
                <span style={{ fontSize: 12 }}>
                  {val.amount}{' '}
                  <span style={{ color: 'var(--color-base-muted-foreground,#91959f)', fontWeight: 600, fontSize: 11 }}>
                    {val.pct}
                  </span>
                </span>
              ),
        })),
      ];

      return (
        <div style={{ padding: 24, background: '#eef0f2', fontFamily: "'Source Sans Pro','Source Sans 3',system-ui,sans-serif" }}>
          <div style={S.card}>

            {/* Header */}
            <WidgetHeader includeUnmapped={includeUnmapped} onToggle={setUnmapped} />

            {/* Body */}
            <div style={S.body}>

              {/* ── Tab bar row — both toggles on same line ────────── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 56, marginBottom: 12 }}>
                {/* Left: Chart | Table */}
                <div style={{ width: 368, flexShrink: 0 }}>
                  <Tabs
                    tabs={[{ id: 'chart', label: 'Chart' }, { id: 'table', label: 'Table' }]}
                    active={leftView}
                    onChange={setLeftView}
                    size="sm"
                  />
                </div>
                {/* Right: Headcount | Revenue */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Tabs
                    tabs={[{ id: 'headcount', label: 'Headcount' }, { id: 'revenue', label: 'Revenue' }]}
                    active={activeTab}
                    onChange={setActiveTab}
                    size="sm"
                  />
                </div>
              </div>

              {/* ── Content row — top-aligned ──────────────────────── */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 56 }}>

                {/* Left content */}
                <div style={{ width: 368, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {leftView === 'chart' ? (
                    <>
                      <p style={{
                        margin: 0, fontSize: 10, fontWeight: 400, lineHeight: '16px',
                        color: 'var(--color-base-muted-foreground,#91959f)',
                        textTransform: 'uppercase', letterSpacing: '0.04em',
                      }}>
                        Actuals (Q1–Q2) · Projections (Q3–Q4)
                      </p>
                      <div style={{
                        background: '#ffffff', borderRadius: 8,
                        border: '1px solid rgba(0,0,0,0.07)', padding: '10px 12px 8px',
                      }}>
                        <AccountOverviewBarChart data={CHART_DATA} />
                        <ChartLegend />
                      </div>
                    </>
                  ) : (
                    <div style={S.panel}>
                      <Table
                        columns={aoColumns}
                        data={ACCOUNT_OVERVIEW_DATA}
                        wrapperClassName="table-wrapper--seamless"
                      />
                    </div>
                  )}
                </div>

                {/* Right content — table without its own tab bar */}
                <RightPanel activeTab={activeTab} onTabChange={setActiveTab} showTabs={false} />

              </div>
            </div>

          </div>
        </div>
      );
    }
    return <ChartWidgetStory />;
  },
};
