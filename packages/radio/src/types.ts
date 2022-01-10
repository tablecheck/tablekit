import { Size } from '@tablecheck/tablekit-theme';
import { ReactNode, HTMLAttributes } from 'react';

export type Value = string | number | readonly string[] | undefined;

export type RadioProps = HTMLAttributes<HTMLInputElement> & {
  children: ReactNode;

  /** Set the field as checked */
  isChecked?: boolean;

  /** Field disabled */
  isDisabled?: boolean;

  /** Marks this as a required field */
  isRequired?: boolean;

  /** Field name */
  name: string;

  /** onChange event handler */
  onChange?: HTMLAttributes<HTMLInputElement>['onChange'];

  /** Field value */
  value: Value;

  size?: Size.Regular | Size.Large;
};
