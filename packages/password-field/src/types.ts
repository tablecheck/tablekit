import { InputProps } from '@tablecheck/tablekit-input';
import { Size } from '@tablecheck/tablekit-theme';
import { ForwardedRef } from 'react';

export enum ScoreLevel {
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning'
}

export enum I18nMessageFlag {
  Required = 'isRequired',
  InvalidFormat = 'isInvalidFormat'
}

export interface Score {
  level: ScoreLevel;
  progressPercent: number;
}

export type I18nMessages = Record<string, string | undefined> &
  {
    [key in ScoreLevel]?: string;
  } &
  {
    [key in I18nMessageFlag]?: string;
  };

interface BaseProps extends InputProps {
  /** object of error messages. Can add any key which `validationFunc` can return  */
  i18nMessages: I18nMessages;
  ref?: ForwardedRef<HTMLInputElement>;

  /** hides score bar if true */
  shouldHideScore?: boolean;
}

export interface StatefullProps extends BaseProps {
  /** custom function that calculates the password score */
  calculateScore?: (
    value: string,
    minLength?: number,
    normalLength?: number
  ) => number;

  /** An optional html element to prepend to the input */
  iconBefore?: JSX.Element;

  /** adds error state when value is empty */
  isRequired?: boolean;

  /** custom function that takes the input's value and, in the case of an error, returns an I18nMessageFlag  */
  validationFunc?: (value: string) => void | I18nMessageFlag;

  /** The value of the input. */
  value?: string;

  /** Minimum password length */
  minLength?: number;

  /** Normal password length */
  normalLength?: number;
}

export interface StatelessProps extends BaseProps {
  /**
   * Score of password strength. internal prop
   * @ignore
   */
  score: number;

  invalidKey?: keyof I18nMessages;

  shouldShowPassword: boolean;

  toggleShowPassword: () => void;

  isTouched: boolean;
}

export type ScoreBarProps = {
  hasValue?: boolean;
  invalidKey?: keyof I18nMessages;
  shouldHideScore?: boolean;
  i18nMessages: I18nMessages;
  scoreValue: number;
  shouldFitContainer?: boolean;
  width: Size;
};
