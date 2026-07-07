import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. @default "brand" */
  variant?: 'brand' | 'soft' | 'neutral' | 'dark' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

/** Compact uppercase pill for awards, grade bands, season labels & status. */
export function Badge(props: BadgeProps): JSX.Element;
