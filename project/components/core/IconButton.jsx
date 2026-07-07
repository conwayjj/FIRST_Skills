import React from 'react';

/**
 * That ONE Team — IconButton
 * Square icon-only control. Used for social links, nav toggles, close buttons.
 * Pass an SVG / icon element as children.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  style = {},
  children,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size];
  const variants = {
    solid:   { background: 'var(--tot-blue)', color: 'var(--tot-white)', border: '2px solid var(--tot-blue)' },
    outline: { background: 'transparent', color: 'var(--tot-blue)', border: '2px solid var(--tot-blue)' },
    ghost:   { background: 'transparent', color: 'var(--grey-700)', border: '2px solid transparent' },
    dark:    { background: 'var(--grey-900)', color: 'var(--tot-white)', border: '2px solid var(--grey-900)' },
  };
  return (
    <button
      aria-label={label}
      title={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: d,
        height: d,
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        transition: 'filter var(--dur) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.9)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.94)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
