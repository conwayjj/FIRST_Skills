import React from 'react';

/**
 * That ONE Team — SectionHeading
 * Eyebrow + title + optional intro. The recurring section opener across the
 * site (uppercase blue eyebrow, squared heading).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--tot-blue)',
          marginBottom: '10px',
        }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
        lineHeight: 1.12,
        letterSpacing: '0.01em',
        color: onDark ? 'var(--tot-white)' : 'var(--text-strong)',
        margin: 0,
        textWrap: 'balance',
      }}>
        {title}
      </h2>
      {intro && (
        <p style={{
          marginTop: '14px',
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.6,
          color: onDark ? 'var(--grey-300)' : 'var(--text-muted)',
          maxWidth: '62ch',
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
        }}>
          {intro}
        </p>
      )}
    </div>
  );
}
