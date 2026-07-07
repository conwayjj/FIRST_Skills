import React from 'react';

/**
 * That ONE Team — Card
 * General content surface. Clean white card, soft neutral shadow, optional
 * top accent rule in Team Blue. No colored glows.
 */
export function Card({
  accent = false,
  padding = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const pads = { sm: '16px', md: '24px', lg: '32px' };
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        borderTop: accent ? '4px solid var(--tot-blue)' : '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        padding: pads[padding],
        transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
