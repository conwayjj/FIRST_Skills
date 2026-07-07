import React from 'react';

/**
 * That ONE Team — Button
 * Brand-forward action. Blue primary, outline secondary, quiet ghost.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px', gap: '6px' },
    md: { padding: '12px 24px', fontSize: '15px', gap: '8px' },
    lg: { padding: '16px 32px', fontSize: '17px', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--tot-blue)',
      color: 'var(--brand-ink)',
      border: '2px solid var(--tot-blue)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--tot-blue)',
      border: '2px solid var(--tot-blue)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent',
    },
    dark: {
      background: 'var(--grey-900)',
      color: 'var(--tot-white)',
      border: '2px solid var(--grey-900)',
    },
  };

  const Tag = as;
  return (
    <Tag
      disabled={as === 'button' ? disabled : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textDecoration: 'none',
        transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur) var(--ease-standard)',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
