import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "ghost" */
  variant?: 'solid' | 'outline' | 'ghost' | 'dark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (required for icon-only controls) */
  label: string;
  /** Icon / SVG element */
  children?: React.ReactNode;
}

/** Square icon-only control for social links, nav toggles, and close buttons. */
export function IconButton(props: IconButtonProps): JSX.Element;
