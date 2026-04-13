import React from 'react';
import {
  // Navigation
  ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, MenuIcon,
  // Actions
  PlusIcon, MinusIcon, CloseIcon, EditIcon, TrashIcon, SearchIcon,
  ExternalLinkIcon, DownloadIcon, UploadIcon, CopyIcon, FilterIcon, SortIcon,
  // Status
  CheckIcon, CheckCircleIcon, CheckCircleFilledIcon,
  AlertCircleIcon, AlertTriangleIcon, InfoIcon, ShieldIcon, CircleIcon, CircleSlashIcon,
  // UI
  SettingsIcon, UserIcon, CalendarIcon, ClockIcon,
  EyeIcon, EyeOffIcon, LockIcon, LinkIcon, TagIcon, RefreshIcon, ArchiveIcon,
} from './Icons';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'DS icon set — inline SVG, 16×16, stroke-based (currentColor). ' +
          'All icons use strokeWidth 1.5, rounded caps/joins. ' +
          'Size controlled via the size prop (default 16). ' +
          'Colour via CSS color / className.',
      },
    },
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function IconCard({ name, children }) {
  return (
    <div
      title={name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '16px 12px',
        borderRadius: 8,
        border: '1px solid var(--color-base-border, #d9dade)',
        background: 'var(--color-base-card, #fff)',
        minWidth: 80,
        cursor: 'default',
      }}
    >
      <span style={{ color: 'var(--color-base-foreground, #1f1f21)' }}>{children}</span>
      <span style={{ fontSize: 10, color: 'var(--color-base-muted-foreground, #91959f)', textAlign: 'center', lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}

function Group({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{
        fontSize: 11, fontWeight: 700, color: 'var(--color-base-muted-foreground, #91959f)',
        textTransform: 'uppercase', letterSpacing: '0.08em',
        margin: '0 0 16px', fontFamily: 'system-ui, sans-serif',
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {children}
      </div>
    </div>
  );
}

// ─── All Icons ────────────────────────────────────────────────────────────────

export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: 'var(--color-base-background, #fff)' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-base-foreground, #1f1f21)', margin: '0 0 8px' }}>
        Icons
      </h2>
      <p style={{ fontSize: 13, color: 'var(--color-base-muted-foreground, #91959f)', margin: '0 0 40px' }}>
        16×16 · stroke-based · currentColor · strokeWidth 1.5
      </p>

      <Group title="Navigation">
        <IconCard name="ChevronDown"><ChevronDownIcon /></IconCard>
        <IconCard name="ChevronUp"><ChevronUpIcon /></IconCard>
        <IconCard name="ChevronLeft"><ChevronLeftIcon /></IconCard>
        <IconCard name="ChevronRight"><ChevronRightIcon /></IconCard>
        <IconCard name="Menu"><MenuIcon /></IconCard>
      </Group>

      <Group title="Actions">
        <IconCard name="Plus"><PlusIcon /></IconCard>
        <IconCard name="Minus"><MinusIcon /></IconCard>
        <IconCard name="Close"><CloseIcon /></IconCard>
        <IconCard name="Edit"><EditIcon /></IconCard>
        <IconCard name="Trash"><TrashIcon /></IconCard>
        <IconCard name="Search"><SearchIcon /></IconCard>
        <IconCard name="ExternalLink"><ExternalLinkIcon /></IconCard>
        <IconCard name="Download"><DownloadIcon /></IconCard>
        <IconCard name="Upload"><UploadIcon /></IconCard>
        <IconCard name="Copy"><CopyIcon /></IconCard>
        <IconCard name="Filter"><FilterIcon /></IconCard>
        <IconCard name="Sort"><SortIcon /></IconCard>
        <IconCard name="Refresh"><RefreshIcon /></IconCard>
        <IconCard name="Archive"><ArchiveIcon /></IconCard>
      </Group>

      <Group title="Status">
        <IconCard name="Check"><CheckIcon /></IconCard>
        <IconCard name="CheckCircle"><CheckCircleIcon /></IconCard>
        <IconCard name="CheckCircle\n(filled)"><CheckCircleFilledIcon /></IconCard>
        <IconCard name="AlertCircle"><AlertCircleIcon /></IconCard>
        <IconCard name="AlertTriangle"><AlertTriangleIcon /></IconCard>
        <IconCard name="Info"><InfoIcon /></IconCard>
        <IconCard name="Shield"><ShieldIcon /></IconCard>
        <IconCard name="Circle"><CircleIcon /></IconCard>
        <IconCard name="CircleSlash"><CircleSlashIcon /></IconCard>
      </Group>

      <Group title="UI">
        <IconCard name="Settings"><SettingsIcon /></IconCard>
        <IconCard name="User"><UserIcon /></IconCard>
        <IconCard name="Calendar"><CalendarIcon /></IconCard>
        <IconCard name="Clock"><ClockIcon /></IconCard>
        <IconCard name="Eye"><EyeIcon /></IconCard>
        <IconCard name="EyeOff"><EyeOffIcon /></IconCard>
        <IconCard name="Lock"><LockIcon /></IconCard>
        <IconCard name="Link"><LinkIcon /></IconCard>
        <IconCard name="Tag"><TagIcon /></IconCard>
      </Group>
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes = {
  name: 'Sizes',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 32px' }}>Sizes</h2>
      {[12, 14, 16, 20, 24, 32].map(size => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#6b7280', width: 32 }}>{size}px</span>
          <CheckCircleIcon size={size} />
          <EditIcon size={size} />
          <SettingsIcon size={size} />
          <AlertTriangleIcon size={size} />
          <ShieldIcon size={size} />
        </div>
      ))}
    </div>
  ),
};

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors = {
  name: 'Colors',
  render: () => {
    const palette = [
      { label: 'Foreground',      color: 'var(--color-base-foreground, #1f1f21)' },
      { label: 'Muted',           color: 'var(--color-base-muted-foreground, #91959f)' },
      { label: 'Primary',         color: 'var(--color-base-primary, #0069b4)' },
      { label: 'Success',         color: 'var(--color-status-success-icon, #16a34a)' },
      { label: 'Warning',         color: 'var(--color-status-warning-icon, #ea580c)' },
      { label: 'Caution',         color: 'var(--color-status-caution-icon, #f59e0b)' },
      { label: 'Destructive',     color: 'var(--color-base-destructive, #dc2626)' },
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 32px' }}>Colors</h2>
        {palette.map(({ label, color }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: '#6b7280', width: 100 }}>{label}</span>
            <div style={{ display: 'flex', gap: 12, color }}>
              <CheckCircleIcon />
              <EditIcon />
              <AlertTriangleIcon />
              <InfoIcon />
              <ShieldIcon />
              <SettingsIcon />
              <UserIcon />
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// ─── Usage in Badges ──────────────────────────────────────────────────────────

export const InBadges = {
  name: 'In Badges',
  render: () => {
    // Inline minimal badge for demo purposes
    const badgeBase = {
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 10px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
      border: '1px solid',
    };
    const variants = {
      caution:   { background: '#fffbeb', borderColor: '#f59e0b', color: '#f59e0b' },
      secondary: { background: '#f5f5f5', borderColor: '#f5f5f5', color: '#41434b' },
      outline:   { background: 'transparent', borderColor: '#d9dade', color: '#1f1f21' },
      success:   { background: '#f0fdf4', borderColor: '#16a34a', color: '#16a34a' },
      warning:   { background: '#fff7ed', borderColor: '#ea580c', color: '#ea580c' },
      destructive: { background: '#fee2e2', borderColor: '#fecaca', color: '#dc2626' },
    };

    const demos = [
      { label: 'Draft',    variant: 'caution',     Icon: EditIcon },
      { label: 'Inactive', variant: 'secondary',   Icon: CheckCircleIcon },
      { label: 'Archived', variant: 'outline',     Icon: CheckCircleFilledIcon },
      { label: 'Success',  variant: 'success',     Icon: CheckIcon },
      { label: 'Warning',  variant: 'warning',     Icon: AlertTriangleIcon },
      { label: 'Error',    variant: 'destructive', Icon: AlertCircleIcon },
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>Icons in Badges</h2>
        <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 32px' }}>
          SRP state badges and common status patterns.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {demos.map(({ label, variant, Icon }) => (
            <span key={label} style={{ ...badgeBase, ...variants[variant] }}>
              <Icon size={12} />
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  },
};
