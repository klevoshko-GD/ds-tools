import React from 'react';
import './timesheet-cell.css';

/**
 * TimesheetCell — 40×40 px calendar-grid cell for timesheet views.
 * Matches Figma DS (AI) node 40000015-53108 "Cell States – Reference Sheet".
 *
 * States:
 *   approved | bamboo | draft | pto | overtime | public-holiday |
 *   account-holiday | weekend | travelling | training | merged |
 *   no-hours | hint | total | actual
 *
 * Props:
 *   state    — one of the states above (default: 'approved')
 *   value    — override the displayed text / hours
 *   progress — 0–1 fill for the 'total' state progress bar (default: 0.78)
 */

const DEFAULT_VALUES = {
  approved:        '8',
  bamboo:          '8',
  draft:           '8',
  pto:             'PTO',
  overtime:        '10',
  'public-holiday':  'PH',
  'account-holiday': 'AH',
  weekend:         '8',
  travelling:      '8',
  training:        '2',
  merged:          '8',
  'no-hours':      '0',
  hint:            '8',
  total:           '184h',
  actual:          '8',
};

// States that show a small dot indicator
const DOT_STATES = new Set(['travelling', 'merged']);

export function TimesheetCell({ state = 'approved', value, progress = 0.78, small = false, ...props }) {
  const displayValue = value ?? DEFAULT_VALUES[state] ?? '8';
  const hasDot  = DOT_STATES.has(state);
  const isTotal = state === 'total';

  return (
    <span
      className={`timesheet-cell timesheet-cell--${state}${small ? ' timesheet-cell--sm' : ''}`}
      aria-label={`${displayValue}, ${state.replace(/-/g, ' ')}`}
      {...props}
    >
      {isTotal ? (
        <>
          <span className="timesheet-cell__value">{displayValue}</span>
          <span className="timesheet-cell__progress" role="presentation">
            <span
              className="timesheet-cell__progress-fill"
              style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
            />
          </span>
        </>
      ) : (
        <span className="timesheet-cell__value">{displayValue}</span>
      )}
      {hasDot && <span className="timesheet-cell__dot" aria-hidden="true" />}
    </span>
  );
}

export default TimesheetCell;
