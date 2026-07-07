import React from 'react';

/**
 * That ONE Team — Input
 * Text field for email signup, contact forms, donations. Squared, 2px border
 * that turns Team Blue on focus.
 */
export function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const sizes = {
    sm: { padding: '8px 12px', fontSize: '14px' },
    md: { padding: '12px 14px', fontSize: '15px' },
    lg: { padding: '15px 16px', fontSize: '16px' },
  };
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--tot-blue)' : 'var(--border-strong)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label htmlFor={id} style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-body)',
        }}>
          {label}
        </label>
      )}
      <input
        id={id}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--text-strong)',
          background: 'var(--surface)',
          border: `2px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxShadow: focused && !error ? '0 0 0 3px var(--blue-100)' : 'none',
          transition: 'border-color var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)',
          ...sizes[size],
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: error ? 'var(--danger)' : 'var(--text-muted)',
        }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
