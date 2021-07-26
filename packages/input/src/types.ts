import { SerializedStyles } from '@emotion/react';
import { Size } from '@tablecheck/tablekit-theme';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { InputHTMLAttributes, ReactNode } from 'react';

export enum InputSize {
  Large = Size.Large,
  Regular = Size.Regular,
  Regular2 = Size.Regular2,
  Small = Size.Small
}

export enum InputShape {
  Sharp = 'sharp',
  Rounded = 'rounded',
  Circular = 'circular'
}

export enum Appearance {
  Default = 'default',
  Invalid = 'invalid',
  Disabled = 'disabled',
  Loading = 'loading',
  ReadOnly = 'readonly',
  Success = 'success',
  Warning = 'warning'
}

export interface BaseInputProps {
  /** Shape of input container */
  shape?: InputShape;

  /** to override the styling on the Container component */
  className?: string;

  /** An optional html element to append to the input */
  iconAfter?: JSX.Element;

  /** An optional html element to prepend to the input */
  iconBefore?: JSX.Element;

  /**
   * Add a classname to the input element
   */
  inputClassName?: string;

  /**
   * Emotion css to add to the input element
   */
  inputCss?: SerializedStyles;

  /** controls how the input should be displayed */
  appearance?: Appearance;

  /** If true, the message placeholder will be hidden. */
  isMessageHidden?: boolean;

  /** Add asterisk to label. Set required for form that the field is part of. */
  isRequired?: boolean;

  /** Sets whether to apply spell checking to the content. */
  isSpellCheckEnabled?: boolean;

  /** Label to be displayed above the input. */
  label?: string;

  /** Message to display below the input, usually used for invalid input information. */
  message?: JSX.Element | ReactNode;

  /** Ensure the input fits in to its containing element. */
  shouldFitContainer?: boolean;

  /** Determines the height of the input field */
  size?: MediaQuery<InputSize>;

  /** Type value to be passed to the html input. */
  type?: string;

  /** The value of the input. */
  value?: string | number;

  /** Determines the width of the input field */
  width?: Size;
}

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  BaseInputProps;

export interface IconElementProps {
  isDisabled: boolean;
  elementSize: MediaQuery<InputSize>;
}

export type InputFieldProps = InputProps & {
  fieldSize: InputProps['size'];
  hasIconAfter: boolean;
  hasIconBefore: boolean;
};
