import { InputProps, InputSize } from '@tablecheck/tablekit-input';
import { SelectProps } from '@tablecheck/tablekit-select';
import { MediaQuery } from '@tablecheck/tablekit-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CountryCode } from 'libphonenumber-js/core';
import { ChangeEvent, ComponentType } from 'react';

export interface CountryInfo {
  name: string;
  shortName: string;
  code: string;
  suggested?: boolean;
}
export interface I18nCountry {
  code?: string;
  name?: string;
  shortName?: string;
  suggested?: boolean;
  label?: string;
  options?: CountryInfo[];
}

export type SelectType = ComponentType<SelectProps<I18nCountry>>;

type FlagSelectOptionsProps = Omit<
  SelectProps<I18nCountry>,
  | 'placeholder'
  | 'formatOptionLabel'
  | 'getOptionLabel'
  | 'getOptionValue'
  | 'filterOption'
  | 'onChange'
  | 'isInvalid'
  | 'isDisabled'
  | 'options'
  | 'value'
  | 'shouldNotChangeDropdownIcon'
  | 'isRtl'
>;

export type PhoneFieldProps = InputProps & {
  /** selected country code by default. */
  defaultCountry?: CountryCode;

  /** styles and other options for flag select component(ex. menuPortalTarget) */
  flagSelectOptions?: FlagSelectOptionsProps;

  /** object of country. name should be localized
   example format: ./defaultI18nCountries.js */
  i18nCountries: I18nCountry[];

  isInvalid?: boolean;

  isDisabled?: boolean;

  /** If true, the message placeholder will be hidden. */
  isMessageHidden?: boolean;

  /** custom function that takes parsed value and metadata.  */
  onChange: (
    value: string,
    metadata: { country?: CountryCode; input?: string; isValid: boolean },
    event?: ChangeEvent<HTMLInputElement>
  ) => void;

  value?: string;

  shouldHideFlags?: boolean;
};

export interface FlagSelectProps {
  flagSelectOptions?: FlagSelectOptionsProps;
  i18nCountries: I18nCountry[];
  isInvalid?: boolean;
  isDisabled?: boolean;
  onChange: (selectedCountry: I18nCountry | null) => void;
  value: string | null | undefined;
  size: MediaQuery<InputSize> | undefined;
  shouldHideFlags: boolean;
}

export type PhoneInputProps = Omit<InputProps, 'onChange'> & {
  country?: CountryCode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
