import { HTMLAttributes } from 'react';

export type Value = string | number | readonly string[] | undefined;

export type OnChangeHandler = (
  event: React.SyntheticEvent<HTMLInputElement>
) => void;

export type RadioProps = HTMLAttributes<HTMLInputElement> & {
  children: JSX.Element | JSX.Element[];

  /** Set the field as checked */
  isChecked?: boolean;

  /** Field disabled */
  isDisabled?: boolean;

  /** Marks this as a required field */
  isRequired?: boolean;

  /** Field name */
  name: string;

  /** onChange event handler */
  onChange?: OnChangeHandler;

  /** Field value */
  value: Value;
};
