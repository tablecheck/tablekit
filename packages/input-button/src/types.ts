import { ButtonShape } from '@tablecheck/tablekit-button';
import { InputSize } from '@tablecheck/tablekit-input';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { HTMLAttributes } from 'react';

export type Value = string | number | undefined;

type OnChangeHandler = (
  event: React.SyntheticEvent<HTMLInputElement>
) => unknown;

export type InputButtonProps = Omit<HTMLAttributes<HTMLInputElement>, 'id'> & {
  id: string;
} & Partial<{
    children: string | number;
    className: string;

    /** Set the field as checked */
    isChecked: boolean;

    /** Field disabled */
    isDisabled: boolean;

    /** Marks this as a required field */
    isRequired: boolean;

    /** Field id */
    id: string;

    /** Field name */
    name: string;

    /** onChange event handler */
    onChange: OnChangeHandler;

    /** Determines the height of the button */
    size?: MediaQuery<InputSize>;

    shape?: MediaQuery<ButtonShape>;

    /** Field value */
    value: Value;

    /** Input type */
    type: 'checkbox' | 'radio';
  }>;
