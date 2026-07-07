import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show a Team Blue top accent rule. @default false */
  accent?: boolean;
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * General white content surface with soft neutral shadow and optional blue top accent.
 * @startingPoint section="Content" subtitle="Content surface with optional accent" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
