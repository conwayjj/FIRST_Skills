import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label */
  label?: React.ReactNode;
  /** Helper text below the field */
  hint?: React.ReactNode;
  /** Error message (overrides hint, turns border red) */
  error?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Squared text field with a 2px border that turns Team Blue on focus. */
export function Input(props: InputProps): JSX.Element;
