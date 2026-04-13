/**
 * DS Icons — powered by lucide-react.
 *
 * All exports use 16px / strokeWidth 1.5 as defaults (matching DS specs).
 * Override via props: <SearchIcon size={20} strokeWidth={2} className="..." />
 *
 * Lucide icon references:
 *   lucide.dev/icons/list-filter-plus  → FilterIcon
 *   lucide.dev/icons/search            → SearchIcon
 *   lucide.dev/icons/settings          → SettingsIcon
 *   lucide.dev/icons/arrow-down-up     → SortIcon
 *   lucide.dev/icons/refresh-cw        → RefreshIcon
 *   lucide.dev/icons/circle-check      → CheckCircleIcon / CheckCircleFilledIcon
 *   lucide.dev/icons/user              → UserIcon
 *   lucide.dev/icons/trash-2           → TrashIcon
 */

import React from 'react';
import {
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Menu,
  Plus, Minus, X, Pencil, Trash2, Search, ExternalLink,
  Download, Upload, Copy, ListFilterPlus, ArrowDownUp,
  Check, CircleCheck, CircleMinus, AlertCircle, AlertTriangle, Info,
  ShieldCheck, Circle, CircleSlash, Settings, User, Calendar,
  Clock, Eye, EyeOff, Lock, Link, Tag, RefreshCw, Archive,
} from 'lucide-react';

const DEFAULTS = { size: 16, strokeWidth: 1.5 };

// ─── Navigation ───────────────────────────────────────────────────────────────

export const ChevronDownIcon  = (p) => <ChevronDown  {...DEFAULTS} {...p} />;
export const ChevronUpIcon    = (p) => <ChevronUp    {...DEFAULTS} {...p} />;
export const ChevronLeftIcon  = (p) => <ChevronLeft  {...DEFAULTS} {...p} />;
export const ChevronRightIcon = (p) => <ChevronRight {...DEFAULTS} {...p} />;
export const MenuIcon         = (p) => <Menu         {...DEFAULTS} {...p} />;

// ─── Actions ─────────────────────────────────────────────────────────────────

export const PlusIcon         = (p) => <Plus          {...DEFAULTS} {...p} />;
export const MinusIcon        = (p) => <Minus         {...DEFAULTS} {...p} />;
export const CloseIcon        = (p) => <X             {...DEFAULTS} {...p} />;

/** Edit / Create — lucide Pencil */
export const EditIcon         = (p) => <Pencil        {...DEFAULTS} {...p} />;

/** Delete — lucide Trash2 (lucide.dev/icons/trash-2) */
export const TrashIcon        = (p) => <Trash2        {...DEFAULTS} {...p} />;

/** Search — lucide.dev/icons/search */
export const SearchIcon       = (p) => <Search        {...DEFAULTS} {...p} />;

export const ExternalLinkIcon = (p) => <ExternalLink  {...DEFAULTS} {...p} />;
export const DownloadIcon     = (p) => <Download      {...DEFAULTS} {...p} />;
export const UploadIcon       = (p) => <Upload        {...DEFAULTS} {...p} />;
export const CopyIcon         = (p) => <Copy          {...DEFAULTS} {...p} />;

/** Filter — lucide.dev/icons/list-filter-plus */
export const FilterIcon       = (p) => <ListFilterPlus {...DEFAULTS} {...p} />;

/** Sort — lucide.dev/icons/arrow-down-up */
export const SortIcon         = (p) => <ArrowDownUp   {...DEFAULTS} {...p} />;

/** Refresh — lucide.dev/icons/refresh-cw */
export const RefreshIcon      = (p) => <RefreshCw     {...DEFAULTS} {...p} />;

export const ArchiveIcon      = (p) => <Archive       {...DEFAULTS} {...p} />;

// ─── Status ───────────────────────────────────────────────────────────────────

export const CheckIcon        = (p) => <Check         {...DEFAULTS} {...p} />;

/** Check Circle (outline) — lucide.dev/icons/circle-check */
export const CheckCircleIcon  = (p) => <CircleCheck   {...DEFAULTS} {...p} />;

/**
 * Check Circle (filled variant) — lucide CircleCheck with filled style.
 * Used for Archived badge (SRP). Fill color comes from `currentColor`.
 */
export const CheckCircleFilledIcon = ({ size = 16, strokeWidth = 1.5, style, ...p }) => (
  <CircleCheck
    size={size}
    strokeWidth={strokeWidth}
    style={{ ...style, fill: 'currentColor', stroke: 'var(--color-base-background, #fff)' }}
    {...p}
  />
);

export const AlertCircleIcon   = (p) => <AlertCircle   {...DEFAULTS} {...p} />;
export const AlertTriangleIcon = (p) => <AlertTriangle {...DEFAULTS} {...p} />;
export const InfoIcon          = (p) => <Info          {...DEFAULTS} {...p} />;

/** Shield — lucide ShieldCheck */
export const ShieldIcon        = (p) => <ShieldCheck   {...DEFAULTS} {...p} />;

export const CircleIcon        = (p) => <Circle        {...DEFAULTS} {...p} />;
export const CircleSlashIcon   = (p) => <CircleSlash   {...DEFAULTS} {...p} />;
export const CircleMinusIcon   = (p) => <CircleMinus   {...DEFAULTS} {...p} />;

// ─── UI ───────────────────────────────────────────────────────────────────────

/** Settings — lucide.dev/icons/settings */
export const SettingsIcon = (p) => <Settings  {...DEFAULTS} {...p} />;

/** User / Avatar — lucide.dev/icons/user */
export const UserIcon     = (p) => <User      {...DEFAULTS} {...p} />;

export const CalendarIcon = (p) => <Calendar  {...DEFAULTS} {...p} />;
export const ClockIcon    = (p) => <Clock     {...DEFAULTS} {...p} />;
export const EyeIcon      = (p) => <Eye       {...DEFAULTS} {...p} />;
export const EyeOffIcon   = (p) => <EyeOff    {...DEFAULTS} {...p} />;
export const LockIcon     = (p) => <Lock      {...DEFAULTS} {...p} />;
export const LinkIcon     = (p) => <Link      {...DEFAULTS} {...p} />;
export const TagIcon      = (p) => <Tag       {...DEFAULTS} {...p} />;
