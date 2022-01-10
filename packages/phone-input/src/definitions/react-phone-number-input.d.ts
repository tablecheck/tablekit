declare module 'react-phone-number-input/modules/phoneInputHelpers' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { MetadataJson, CountryCode } from 'libphonenumber-js/core';

  export const e164: (
    val: string,
    country: CountryCode,
    meta: MetadataJson
  ) => string;
  export const migrateParsedInputForNewCountry: (
    val: string,
    prev_country: CountryCode | undefined,
    next_country: CountryCode | undefined,
    meta: MetadataJson,
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
    meta: MetadataJson
  ) => {
    country?: CountryCode;
    input?: string;
    value: string;
  };
}
