import * as React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "785K+" or "81%" */
  value: React.ReactNode;
  /** Supporting label beneath the figure */
  label: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Invert colors for dark backgrounds */
  onDark?: boolean;
}

/** Big display figure + label for stat strips (e.g. "Facts About FIRST"). */
export function StatCard(props: StatCardProps): JSX.Element;
