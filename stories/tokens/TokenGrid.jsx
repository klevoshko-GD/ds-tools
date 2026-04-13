import React from 'react';

// ─── Shared layout primitives ─────────────────────────────────────────────────

export function Page({ children }) {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '32px', maxWidth: '1100px' }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#6B7280',
      margin: '40px 0 16px',
      paddingBottom: '8px',
      borderBottom: '1px solid #E5E7EB',
    }}>
      {children}
    </h2>
  );
}

export function SubTitle({ children }) {
  return (
    <h3 style={{
      fontSize: '12px',
      fontWeight: 600,
      color: '#374151',
      margin: '24px 0 12px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    }}>
      {children}
    </h3>
  );
}

// ─── Color swatch ─────────────────────────────────────────────────────────────

function isLight(hex) {
  const c = hex.replace('#', '');
  if (c.length < 6) return true;
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  // WCAG relative luminance approximation
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

export function ColorSwatch({ name, value, tokenKey, description }) {
  const displayValue = value || '—';
  const isTransparent = displayValue.includes('rgba') || (displayValue.length === 9 && displayValue.startsWith('#'));
  const swatchBg = isTransparent
    ? `linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)`
    : 'none';

  return (
    <div style={{ width: '140px' }}>
      <div
        title={tokenKey}
        style={{
          height: '60px',
          borderRadius: '8px',
          backgroundColor: displayValue,
          backgroundImage: isTransparent ? swatchBg : 'none',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px',
          border: '1px solid rgba(0,0,0,0.08)',
          marginBottom: '6px',
          position: 'relative',
          overflow: 'hidden',
        }}
      />
      <div style={{ fontSize: '11px', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>{name}</div>
      <div style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'monospace', marginTop: '2px' }}>
        {displayValue.toUpperCase()}
      </div>
      {description && (
        <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '3px', lineHeight: 1.4 }}>
          {description}
        </div>
      )}
    </div>
  );
}

export function SwatchRow({ children }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '8px' }}>
      {children}
    </div>
  );
}

// ─── Semantic swatch (shows light + dark side by side) ────────────────────────

export function SemanticSwatch({ name, lightValue, darkValue, description }) {
  return (
    <div style={{ width: '160px' }}>
      {/* Split swatch: left half light, right half dark */}
      <div style={{
        height: '48px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        marginBottom: '6px',
      }}>
        <div style={{ flex: 1, backgroundColor: lightValue }} title={`Light: ${lightValue}`} />
        <div style={{ flex: 1, backgroundColor: darkValue }} title={`Dark: ${darkValue}`} />
      </div>
      <div style={{ fontSize: '11px', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>{name}</div>
      <div style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'monospace', marginTop: '2px' }}>
        <span style={{ color: '#374151' }}>{lightValue?.toUpperCase()}</span>
        {' / '}
        <span style={{ color: '#6B7280' }}>{darkValue?.toUpperCase()}</span>
      </div>
      {description && (
        <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '3px', lineHeight: 1.4 }}>
          {description}
        </div>
      )}
    </div>
  );
}

// ─── Spacing swatch ───────────────────────────────────────────────────────────

export function SpacingSwatch({ name, value, tokenKey }) {
  const px = parseInt(value, 10) || 0;
  const clampedWidth = Math.min(px, 320);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '6px 0', borderBottom: '1px solid #F3F4F6' }}>
      {/* fixed label column */}
      <div style={{ width: '80px', textAlign: 'right' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#111827', fontFamily: 'monospace' }}>{name}</span>
      </div>
      {/* bar */}
      <div style={{
        height: '20px',
        width: `${clampedWidth}px`,
        backgroundColor: '#BFDBFE',
        borderRadius: '3px',
        minWidth: px === 0 ? '2px' : undefined,
        border: px === 0 ? '1px dashed #93C5FD' : 'none',
      }} />
      {/* value */}
      <div style={{ fontSize: '10px', color: '#6B7280', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
        {value}
      </div>
      {/* token key */}
      <div style={{ fontSize: '10px', color: '#D1D5DB', fontFamily: 'monospace' }}>
        --{tokenKey}
      </div>
    </div>
  );
}

// ─── Border-radius swatch ─────────────────────────────────────────────────────

export function RadiusSwatch({ name, value, tokenKey }) {
  const px = parseInt(value, 10) || 0;
  const radius = Math.min(px, 40); // cap display at 40px so boxes stay square-ish

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '80px',
        height: '80px',
        backgroundColor: '#BFDBFE',
        border: '1.5px solid #93C5FD',
        borderRadius: `${radius}px`,
      }} />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#111827' }}>{name}</div>
        <div style={{ fontSize: '10px', color: '#6B7280', fontFamily: 'monospace' }}>{value}</div>
      </div>
    </div>
  );
}
