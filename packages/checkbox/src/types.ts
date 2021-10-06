import { Size } from '@tablecheck/tablekit-theme';
import { ReactNode, HTMLAttributes } from 'react';

export type Value = string | number | readonly string[] | undefined;

export type CheckboxProps = HTMLAttributes<HTMLInputElement> &
  Partial<{
    children: ReactNode;
    className: string;

    /** Set the field as checked */
    isChecked: boolean;

    /** Field disabled */
    isDisabled: boolean;

    /** Set the field as invalid */
    isInvalid: boolean;

    /** Marks this as a required field */
    isRequired: boolean;

    /** Field name */
    name: string;

    /** onChange event handler */
    onChange?: HTMLAttributes<HTMLInputElement>['onChange'];

    /** Field value */
    value: Value;

    size?: Size.Regular | Size.Large;
  }>;
