import { ReactNode, HTMLAttributes } from 'react';

export type Value = string | number | readonly string[] | undefined;

type OnChangeHandler = (
  event: React.SyntheticEvent<HTMLInputElement>
) => unknown;

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
    onChange: OnChangeHandler;

    /** Field value */
    value: Value;
  }>;
