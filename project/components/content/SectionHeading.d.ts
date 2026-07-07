import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase blue eyebrow label above the title */
  eyebrow?: React.ReactNode;
  /** The section heading */
  title: React.ReactNode;
  /** Optional supporting paragraph */
  intro?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Invert text for dark backgrounds */
  onDark?: boolean;
}

/**
 * Recurring section opener: uppercase blue eyebrow + squared heading + optional intro.
 * @startingPoint section="Content" subtitle="Eyebrow + heading + intro" viewport="700x200"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
