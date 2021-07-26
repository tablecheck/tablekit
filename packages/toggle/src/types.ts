import { HTMLAttributes } from 'react';

export type ToggleProps = HTMLAttributes<HTMLInputElement> & {
  /** Whether the toggle is checked or not */
  isChecked?: boolean;

  /** Whether the toggle is disabled or not. This will prevent any interaction with the user */
  isDisabled?: boolean;

  /** Label to be set for accessibility */
  label?: string;

  /** Descriptive name for value property to be submitted in a form */
  name?: string;

  /** Defines the style of the icon inside the Toggle */
  type?: 'empty' | 'confirm' | 'power';

  /** The value to be submitted in a form. */
  value?: string;
};
