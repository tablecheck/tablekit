import { Label } from '@tablecheck/tablekit-input';
import { Size } from '@tablecheck/tablekit-theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  parseIncompletePhoneNumber,
  parsePhoneNumberFromString,
  PhoneNumber,
  CountryCode
} from 'libphonenumber-js/core';
import metadata from 'libphonenumber-js/metadata.full.json';
import {
  useEffect,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useRef,
  ChangeEvent
} from 'react';
import {
  e164,
  migrateParsedInputForNewCountry,
  parseInput as baseParseInput
  // CAUTION: DO NOT UPGRADE THIS PACKAGE
  // WITHOUT REFACTOR AS ITS INTERNAL STRUCTURE AND SIGNATURES
  // HAS CHANGED IN MINOR VERSION
} from 'react-phone-number-input/modules/phoneInputHelpers';

import { FlagSelect } from './FlagSelect';
import { PhoneNumberInput } from './PhoneNumberInput';
import { PhoneInputContainer, Wrapper } from './styled/PhoneField';
import { PhoneFieldProps, I18nCountry } from './types';

type ParsedInputProps = {
  country?: CountryCode;
  input?: string;
  value: string;
};

const parseInput = (
  countries: string[],
  value?: string,
  previousValue?: string,
  country?: CountryCode,
  defaultCountry?: CountryCode
): ParsedInputProps =>
  baseParseInput(
    value,
    previousValue,
    country,
    defaultCountry,
    countries,
    true,
    false,
    metadata
  );

const parsePhoneNumber = (
  value = '',
  country?: CountryCode
): PhoneNumber | undefined =>
  country
    ? parsePhoneNumberFromString(value, country, metadata)
    : parsePhoneNumberFromString(value, metadata);

const localizeNumber = (
  countries: string[],
  country?: CountryCode,
  defaultCountry?: CountryCode,
  value = ''
): ParsedInputProps => {
  const { input, value: newValue } = parseInput(
    countries,
    value,
    parseIncompletePhoneNumber(value),
    country,
    defaultCountry
  );
  let newCountry: CountryCode | undefined;
  const phoneNumber = parsePhoneNumber(newValue);

  let newInput = input;
  if (phoneNumber) {
    newCountry = newValue ? phoneNumber.country : defaultCountry;
    if (newCountry) {
      newInput = phoneNumber.formatNational();
    }
  } else if (!newValue) {
    newCountry = defaultCountry;
  }

  return { country: newCountry, input: newInput, value: newValue };
};

function getCountries(i18nCountries: I18nCountry[]): string[] {
  let countries: string[] = [];
  i18nCountries.forEach((element) => {
    if (element.options) {
      const shortNames = element.options.map((c) => c.shortName);
      countries = [...countries, ...shortNames];
    } else {
      countries.push(element.shortName || '');
    }
  });
  return countries;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneFieldProps>(
  (props: PhoneFieldProps, ref) => {
    const {
      autoComplete = 'tel',
      defaultCountry = 'JP',
      form,
      i18nCountries,
      id,
      isInvalid,
      isDisabled,
      isRequired,
      label,
      onChange,
      shouldFitContainer,
      shouldHideFlags = false,
      type = 'tel',
      value: propsValue = '',
      flagSelectOptions,
      isMessageHidden,
      className,
      width = Size.Regular,
      ...passThroughProps
    } = props;
    const inputRef = useRef<HTMLInputElement>();

    const countries: string[] = useMemo(
      () => getCountries(i18nCountries),
      [i18nCountries]
    );
    const {
      country: initialCountry,
      input: initialInput,
      value: initialValue
    } = useMemo(
      () => localizeNumber(countries, undefined, defaultCountry, propsValue),
      []
    );

    const [stateCountry, setCountry] = useState<undefined | CountryCode>(
      initialCountry
    );
    const [stateInput, setInput] = useState<undefined | string>(initialInput);
    const [stateValue, setValue] = useState<undefined | string>(initialValue);

    const validate = (
      newValue?: string,
      valInput?: string,
      valCountry?: CountryCode
    ): boolean => {
      if (valCountry) {
        const phoneNumber = parsePhoneNumber(newValue, valCountry);
        return phoneNumber ? phoneNumber.isValid() : false;
      }

      return true;
    };

    // If `value` property has been changed externally
    // then re-initialize the component.
    useEffect(() => {
      if (props.value !== stateValue) {
        const isCurrentValid = validate(stateValue, stateInput, stateCountry);
        const {
          country: newCountry,
          input: newInput,
          value: newValue
        } = localizeNumber(countries, stateCountry, undefined, propsValue);
        if (newInput) {
          setCountry(newCountry);
        }
        setInput(newInput);
        setValue(newValue);
        const isNowValid = validate(newValue, newInput, newCountry);
        if (isNowValid !== isCurrentValid && onChange) {
          onChange(newValue, {
            country: newCountry,
            input: newInput,
            isValid: isNowValid
          });
        }
      }
    }, [propsValue, stateCountry]);

    const onChangeHandle = useCallback(
      (onChangeValue: string, event: ChangeEvent<HTMLInputElement>) => {
        try {
          const {
            input: newInput,
            country: newCountry,
            value: newValue
          } = parseInput(
            countries,
            onChangeValue,
            stateValue,
            stateCountry,
            defaultCountry
          );
          setInput(newInput);
          if (newValue) {
            setCountry(newCountry);
            setValue(newValue);
          }
          if (onChange) {
            onChange(
              newValue,
              {
                country: stateCountry,
                input: stateInput,
                isValid: validate(newValue, newInput, newCountry)
              },
              event
            );
          }
        } catch (error) {
          setInput(onChangeValue);
          if (onChange) {
            onChange(
              '',
              { country: stateCountry, input: onChangeValue, isValid: false },
              event
            );
          }
        }
      },
      [stateCountry, setValue, setInput]
    );
    // Migrates parsed input value for the newly selected country
    // ref: https://github.com/catamphetamine/react-phone-number-input/blob/676417a1417f905cd43cc2d4ae098e3eb2b10f80/source/PhoneInput.js#L551
    const onCountryChange = (selectedCountry: I18nCountry | null) => {
      if (selectedCountry) {
        const newCountry = selectedCountry.shortName as CountryCode;
        const newInput = migrateParsedInputForNewCountry(
          stateInput || '',
          stateCountry,
          newCountry,
          metadata,
          false
        );
        const newValue = e164(newInput, newCountry, metadata);
        setCountry(newCountry || undefined);
        if (newValue) {
          setInput(newInput);
          setValue(newValue);
        }
        if (onChange) {
          onChange(newValue, {
            country: stateCountry,
            input: stateInput,
            isValid: validate(newValue, newInput, newCountry)
          });
        }
      }
    };

    return (
      <PhoneInputContainer
        className={className}
        shouldFitContainer={shouldFitContainer}
        width={width}
      >
        <Label htmlFor={id} isRequired={isRequired} label={label || ''} />
        <Wrapper>
          <FlagSelect
            isInvalid={isInvalid}
            onChange={onCountryChange}
            i18nCountries={i18nCountries}
            value={stateCountry}
            flagSelectOptions={flagSelectOptions}
            size={passThroughProps.size}
            isDisabled={isDisabled}
            shouldHideFlags={shouldHideFlags}
          />
          <PhoneNumberInput
            {...passThroughProps}
            autoComplete={autoComplete}
            isRequired={isRequired}
            ref={(inputElement: HTMLInputElement) => {
              if (typeof ref === 'function') {
                ref(inputElement);
              } else if (ref) {
                ref.current = inputElement;
              }
              inputRef.current = inputElement;
            }}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            isMessageHidden={isMessageHidden}
            form={form}
            id={id}
            country={stateCountry}
            onChange={onChangeHandle}
            value={stateInput || ''}
            type={type}
            shouldFitContainer={shouldFitContainer}
          />
        </Wrapper>
      </PhoneInputContainer>
    );
  }
);
