import React from 'react';

/**
 * That ONE Team — StatCard
 * A single big number + label, used for the "Facts About FIRST" stat strip.
 * Big display figure in Team Blue, squared label beneath.
 */
export function StatCard({ value, label, align = 'left', onDark = false, style = {}, ...rest }) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
        lineHeight: 1,
        letterSpacing: '0.02em',
        color: onDark ? 'var(--blue-400)' : 'var(--tot-blue)',
      }}>
        {value}
      </div>
      <div style={{
        marginTop: '8px',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        lineHeight: 1.4,
        color: onDark ? 'var(--grey-300)' : 'var(--text-muted)',
        maxWidth: '22ch',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}>
        {label}
      </div>
    </div>
  );
}
