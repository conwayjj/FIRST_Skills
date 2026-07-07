import React from 'react';

/**
 * That ONE Team — Badge
 * Compact status / award pill. Used for competition awards ("Impact Award"),
 * program grade bands ("Grades 9-12"), season labels, etc.
 */
export function Badge({ variant = 'brand', size = 'md', style = {}, children, ...rest }) {
  const sizes = {
    sm: { padding: '2px 8px', fontSize: '10px' },
    md: { padding: '4px 12px', fontSize: '12px' },
    lg: { padding: '6px 16px', fontSize: '13px' },
  };
  const variants = {
    brand:   { background: 'var(--tot-blue)', color: 'var(--tot-white)', border: '1px solid var(--tot-blue)' },
    soft:    { background: 'var(--brand-soft)', color: 'var(--brand-strong)', border: '1px solid var(--blue-200)' },
    neutral: { background: 'var(--grey-100)', color: 'var(--grey-800)', border: '1px solid var(--grey-200)' },
    dark:    { background: 'var(--grey-900)', color: 'var(--tot-white)', border: '1px solid var(--grey-900)' },
    outline: { background: 'transparent', color: 'var(--tot-blue)', border: '1px solid var(--tot-blue)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
