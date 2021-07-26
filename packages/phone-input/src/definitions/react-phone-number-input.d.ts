declare module 'react-phone-number-input/modules/phoneInputHelpers' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { Metadata, CountryCode } from 'libphonenumber-js/core';

  export const e164: (
    val: string,
    country: CountryCode,
    meta: Metadata
  ) => string;
  export const migrateParsedInputForNewCountry: (
    val: string,
    prev_country: CountryCode | undefined,
    next_country: CountryCode | undefined,
    meta: Metadata,
    preferNationalFormat?: boolean
  ) => string;
  export const parseInput: (
    value?: string,
    previousValue?: string,
    country?: CountryCode,
    defaultCountry?: CountryCode,
    countries?: string[],
    includeInternationalOption: boolean,
    limitMaxLength: boolean,
    meta: Metadata
  ) => {
    country?: CountryCode;
    input?: string;
    value: string;
  };
}
