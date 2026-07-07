import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
  /** Icon element rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label */
  iconRight?: React.ReactNode;
  /** Stretch to fill container width */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Brand-forward call-to-action button. Uppercase squared label on Team Blue.
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost actions" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
