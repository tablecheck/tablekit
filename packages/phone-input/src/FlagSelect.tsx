import { useTheme } from '@emotion/react';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import { Select, createFilter, Config } from '@tablecheck/tablekit-select';
import * as React from 'react';

import { Flag } from './styled/Flag';
import { getFlagSelectStyles, Label, FlagWrap } from './styles';
import { I18nCountry, FlagSelectProps, CountryInfo } from './types';

type Option = {
  label: string;
  value: string;
  data: CountryInfo;
};

const filterOptions: Config = {
  ignoreCase: true,
  ignoreAccents: true,
  stringify: (option: Option) => {
    const { data } = option;
    return `${data.name} (${data.shortName}) +${data.code}`;
  },
  trim: true,
  matchFrom: 'any'
};

function Opt({
  children = null,
  shortName,
  shouldHideFlags
}: {
  children?: React.ReactNode | null;
  shortName: string;
  shouldHideFlags: boolean;
}) {
  return (
    <Label>
      {!shouldHideFlags && (
        <FlagWrap>
          <Flag country={shortName.toUpperCase()} />
        </FlagWrap>
      )}
      {children}
    </Label>
  );
}

const getOptionLabel = (opt: I18nCountry) => opt.name || '';

const getOptionValue = (opt: I18nCountry) => opt.shortName || '';

const controlLabel = (
  { shortName = '', code }: I18nCountry,
  shouldHideFlags: boolean
) => (
  <Label>
    {shouldHideFlags ? (
      <>+{code}</>
    ) : (
      <Flag country={shortName.toUpperCase()} />
    )}
  </Label>
);

const optionLabel = (
  { shortName = '', code, name }: I18nCountry,
  shouldHideFlags: boolean
) => (
  <Opt shortName={shortName.toUpperCase()} shouldHideFlags={shouldHideFlags}>
    {name} ({shortName.toUpperCase()}) +{code}
  </Opt>
);

const findCountry = (
  value: string | null | undefined,
  i18nCountries: I18nCountry[]
): I18nCountry | undefined => {
  if (!value) return undefined;
  for (let i = 0; i < i18nCountries.length; i += 1) {
    const element = i18nCountries[i];
    if (element.options) {
      const country = element.options.find((c) => c.shortName === value);
      if (country) return country;
    }
    if (element.shortName === value) return element;
  }
  return undefined;
};

export function FlagSelect(props: FlagSelectProps): JSX.Element {
  const {
    i18nCountries,
    isInvalid,
    value: countryCode,
    onChange,
    isDisabled,
    flagSelectOptions = {
      styles: null
    },
    size = InputSize.Regular,
    shouldHideFlags
  } = props;

  const value = React.useMemo(
    () => findCountry(countryCode, i18nCountries),
    [countryCode, i18nCountries]
  );
  const { styles, ...selectOptions } = flagSelectOptions;
  const theme = useTheme();

  return (
    <Select
      {...selectOptions}
      placeholder={<Icon icon={getIcon('globe')} />}
      formatOptionLabel={(
        opt: I18nCountry,
        { context }: { context: 'menu' | 'value' }
      ) =>
        context === 'value'
          ? controlLabel(opt, shouldHideFlags)
          : optionLabel(opt, shouldHideFlags)
      }
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      filterOption={createFilter(filterOptions)}
      onChange={(country) => {
        onChange(country as I18nCountry | null);
      }}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      options={i18nCountries}
      value={value}
      shouldNotChangeDropdownIcon
      styles={{ ...getFlagSelectStyles({ theme, size }), ...styles }}
    />
  );
}
