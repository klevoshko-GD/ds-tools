import React from 'react';
import './input.css';

/**
 * Input component — matches Figma DS (AI) Input component set.
 * States: default | focus | filled | error | error-focus | disabled
 * Features: optional label, placeholder, description, error message, leading/trailing icons
 */
export function Input({
  label,
  description,
  errorMessage,
  placeholder = 'Placeholder',
  value,
  defaultValue,
  disabled = false,
  state = 'default',   // 'default' | 'error'
  leadingIcon = null,
  trailingIcon = null,
  type = 'text',
  id,
  onChange,
  ...props
}) {
  const isError = state === 'error';

  const boxClass = [
    'input-box',
    isError ? 'is-error' : '',
    disabled ? 'is-disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="input-field">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={boxClass}>
        {leadingIcon && <span className="input-icon" aria-hidden="true">{leadingIcon}</span>}
        <input
          id={id}
          type={type}
          className="input-native"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          aria-invalid={isError}
          aria-describedby={description ? `${id}-desc` : errorMessage ? `${id}-err` : undefined}
          {...props}
        />
        {trailingIcon && <span className="input-icon" aria-hidden="true">{trailingIcon}</span>}
      </div>
      {isError && errorMessage && (
        <span id={`${id}-err`} className="input-error-message">{errorMessage}</span>
      )}
      {description && !isError && (
        <span id={`${id}-desc`} className="input-description">{description}</span>
      )}
    </div>
  );
}

export default Input;
