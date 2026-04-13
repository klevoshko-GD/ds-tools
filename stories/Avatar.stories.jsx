import React from 'react';
import { Avatar, AvatarGroup } from './Avatar';

// ─── Layout helpers ────────────────────────────────────────────────────────────

const Row = ({ children, gap = 24, wrap = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: wrap ? 'wrap' : 'nowrap', gap }}>
    {children}
  </div>
);

const LabelledItem = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    {children}
    <span style={{ fontSize: 11, color: '#6b7280', fontFamily: 'system-ui, sans-serif' }}>{label}</span>
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

// ─── Sample avatar image (placeholder) ────────────────────────────────────────

const SAMPLE_IMG = 'https://i.pravatar.cc/150?img=12';
const SAMPLE_IMG_2 = 'https://i.pravatar.cc/150?img=47';
const SAMPLE_IMG_3 = 'https://i.pravatar.cc/150?img=32';

// ─── Meta ──────────────────────────────────────────────────────────────────────

export default {
  title: 'Design Tokens/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Avatar component — circular, 5 sizes (20–48px). Types: image, initials, icon fallback. Includes AvatarGroup with overlap and overflow counter.',
      },
    },
  },
};

// ─── All Sizes ─────────────────────────────────────────────────────────────────

export const AllSizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Avatar Sizes</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Five sizes based on ×4px grid: <strong>48px · 40px · 32px · 24px · 20px</strong>
      </p>

      <Section title="Image" subtitle="Photo avatar at each size">
        <Row gap={24} wrap={false}>
          {[
            { size: '12', label: 'Size 12 · 48px' },
            { size: '10', label: 'Size 10 · 40px' },
            { size: '8',  label: 'Size 8 · 32px' },
            { size: '6',  label: 'Size 6 · 24px' },
            { size: '5',  label: 'Size 5 · 20px' },
          ].map(({ size, label }) => (
            <LabelledItem key={size} label={label}>
              <Avatar src={SAMPLE_IMG} alt="User" size={size} />
            </LabelledItem>
          ))}
        </Row>
      </Section>

      <Section title="Initials" subtitle="Text fallback at each size">
        <Row gap={24} wrap={false}>
          {[
            { size: '12', label: 'Size 12 · 48px' },
            { size: '10', label: 'Size 10 · 40px' },
            { size: '8',  label: 'Size 8 · 32px' },
            { size: '6',  label: 'Size 6 · 24px' },
            { size: '5',  label: 'Size 5 · 20px' },
          ].map(({ size, label }) => (
            <LabelledItem key={size} label={label}>
              <Avatar initials="CN" size={size} />
            </LabelledItem>
          ))}
        </Row>
      </Section>

      <Section title="Icon fallback" subtitle="Person icon at each size">
        <Row gap={24} wrap={false}>
          {[
            { size: '12', label: 'Size 12 · 48px' },
            { size: '10', label: 'Size 10 · 40px' },
            { size: '8',  label: 'Size 8 · 32px' },
            { size: '6',  label: 'Size 6 · 24px' },
            { size: '5',  label: 'Size 5 · 20px' },
          ].map(({ size, label }) => (
            <LabelledItem key={size} label={label}>
              <Avatar size={size} />
            </LabelledItem>
          ))}
        </Row>
      </Section>
    </div>
  ),
};

// ─── All Types ─────────────────────────────────────────────────────────────────

export const AllTypes = {
  name: 'All Types',
  render: () => (
    <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Avatar Types</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
        Three content types: photo image, initials text, and person icon fallback.
      </p>

      <Section title="Default size (48px)">
        <Row gap={32}>
          <LabelledItem label="Image">
            <Avatar src={SAMPLE_IMG} alt="Alice" size="12" />
          </LabelledItem>
          <LabelledItem label="Initials">
            <Avatar initials="CN" size="12" />
          </LabelledItem>
          <LabelledItem label="Icon fallback">
            <Avatar size="12" />
          </LabelledItem>
        </Row>
      </Section>

      <Section title="Small size (32px)">
        <Row gap={32}>
          <LabelledItem label="Image">
            <Avatar src={SAMPLE_IMG_2} alt="Bob" size="8" />
          </LabelledItem>
          <LabelledItem label="Initials">
            <Avatar initials="AB" size="8" />
          </LabelledItem>
          <LabelledItem label="Icon fallback">
            <Avatar size="8" />
          </LabelledItem>
        </Row>
      </Section>
    </div>
  ),
};

// ─── Avatar Group ──────────────────────────────────────────────────────────────

export const Groups = {
  name: 'Avatar Groups',
  render: () => {
    const mixedAvatars = [
      { src: SAMPLE_IMG,   alt: 'Alice' },
      { src: SAMPLE_IMG_2, alt: 'Bob' },
      { initials: 'CN' },
      { src: SAMPLE_IMG_3, alt: 'Diana' },
      { initials: 'EF' },
      { alt: 'Frank' },
      { initials: 'GH' },
    ];

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Avatar Group</h2>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 40 }}>
          Stacked with −8px overlap and 2px white ring. Overflowing members shown as +N counter.
        </p>

        <Section title="Default size (48px)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <LabelledItem label="3 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 3)} size="default" />
            </LabelledItem>
            <LabelledItem label="5 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 5)} size="default" />
            </LabelledItem>
            <LabelledItem label="7 avatars · max=5 · +2 overflow">
              <AvatarGroup avatars={mixedAvatars} size="default" max={5} />
            </LabelledItem>
          </div>
        </Section>

        <Section title="Small size (32px)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <LabelledItem label="3 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 3)} size="small" />
            </LabelledItem>
            <LabelledItem label="5 avatars">
              <AvatarGroup avatars={mixedAvatars.slice(0, 5)} size="small" />
            </LabelledItem>
            <LabelledItem label="7 avatars · max=5 · +2 overflow">
              <AvatarGroup avatars={mixedAvatars} size="small" max={5} />
            </LabelledItem>
          </div>
        </Section>
      </div>
    );
  },
};

// ─── Token Reference ───────────────────────────────────────────────────────────

export const TokenReference = {
  name: 'Token Reference',
  render: () => {
    const sizes = [
      { name: 'Size 12', size: '12', px: '48px', fontSize: '16px', usage: 'Profile, detail pages' },
      { name: 'Size 10', size: '10', px: '40px', fontSize: '14px', usage: 'Cards, lists' },
      { name: 'Size 8',  size: '8',  px: '32px', fontSize: '12px', usage: 'Compact lists, comments' },
      { name: 'Size 6',  size: '6',  px: '24px', fontSize: '10px', usage: 'Inline, table rows' },
      { name: 'Size 5',  size: '5',  px: '20px', fontSize: '9px',  usage: 'Chips, badges' },
    ];

    const th = { textAlign: 'left', padding: '8px 12px', fontSize: 10, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #e5e7eb' };
    const td = { padding: '10px 12px', fontSize: 12, borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };

    return (
      <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', background: '#fff' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Token Reference</h2>

        <div style={{ marginBottom: 24, padding: 12, background: '#f9fafb', borderRadius: 8, fontSize: 12, color: '#374151', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div><strong>Shape:</strong> borderRadius: 9999px (circle)</div>
          <div><strong>Fallback bg:</strong> #f2f2f2 · <strong>Icon color:</strong> #91959f · <strong>Initials color:</strong> #41434b</div>
          <div><strong>Group ring:</strong> box-shadow: 0 0 0 2px #ffffff · <strong>Overlap:</strong> margin-left: −8px</div>
          <div><strong>Overflow counter bg:</strong> #eeeef0 · color: #41434b</div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{['Size', 'Preview', 'Dimensions', 'Font Size', 'Usage'].map(h => <th key={h} style={th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {sizes.map(({ name, size, px, fontSize, usage }, i) => (
              <tr key={name} style={{ background: i % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ ...td, fontWeight: 600, color: '#111827' }}>{name}</td>
                <td style={td}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Avatar src={SAMPLE_IMG} alt="" size={size} />
                    <Avatar initials="CN" size={size} />
                    <Avatar size={size} />
                  </div>
                </td>
                <td style={{ ...td, fontFamily: 'monospace' }}>{px} × {px}</td>
                <td style={{ ...td, fontFamily: 'monospace' }}>{fontSize}</td>
                <td style={{ ...td, color: '#6b7280' }}>{usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
