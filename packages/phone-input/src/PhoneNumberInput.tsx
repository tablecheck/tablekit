import { Appearance } from '@tablecheck/tablekit-input';
import { onChange, onCut, onKeyDown, onPaste } from 'input-format';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AsYouType, parsePhoneNumberCharacter } from 'libphonenumber-js/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import metadata from 'libphonenumber-js/metadata.full.json';
import { forwardRef, useCallback, useRef } from 'react';

import { PhoneInputField } from './styled/PhoneField';
import { PhoneInputProps } from './types';

// fork of InputBasic@react-phone-number-input
// https://github.com/catamphetamine/react-phone-number-input/blob/master/source/InputSmart.js
export const PhoneNumberInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (props: PhoneInputProps, ref) => {
    const {
      country,
      form,
      type,
      id,
      message,
      inputCss,
      inputClassName,
      min,
      max,
      name,
      onBlur,
      onChange: propOnChange,
      onFocus,
      onKeyDown: propOnKeyDown,
      onKeyPress,
      onKeyUp,
      value,
      pattern,
      placeholder,
      isRequired,
      isSpellCheckEnabled,
      shouldFitContainer,
      maxLength,
      autoComplete,
      isMessageHidden,
      isDisabled,
      ...restProps
    } = props;
    const inputRef = useRef<HTMLInputElement>();
    const disabledAppearanceProps = isDisabled
      ? { appearance: Appearance.Disabled }
      : null;

    const format = useCallback(
      (inputValue: string) => {
        // "As you type" formatter.
        const formatter = new AsYouType(country, metadata);
        return {
          text: formatter.input(inputValue),
          template: formatter.getTemplate()
        };
      },
      [country]
    );

    const onChangeHandler = useCallback(
      (event) => {
        if (inputRef.current) {
          onChange(
            event,
            inputRef.current,
            parsePhoneNumberCharacter,
            format,
            (newValue) => {
              if (propOnChange) {
                propOnChange(newValue, event);
              }
            }
          );
        }
      },
      [propOnChange, inputRef, format]
    );

    const onKeyDownHandler = useCallback(
      (event) => {
        if (propOnKeyDown) {
          propOnKeyDown(event);
        }
        if (inputRef.current) {
          onKeyDown(
            event,
            inputRef.current,
            parsePhoneNumberCharacter,
            format,
            (newValue: string) => propOnChange && propOnChange(newValue, event)
          );
        }
      },
      [propOnKeyDown, format, propOnChange]
    );

    const onCutHandler = useCallback(
      (event) => {
        if (inputRef.current) {
          onCut(
            event,
            inputRef.current,
            parsePhoneNumberCharacter,
            format,
            (newValue: string) => propOnChange && propOnChange(newValue, event)
          );
        }
      },
      [format, propOnChange]
    );

    const onPasteHandler = useCallback(
      (event) => {
        if (inputRef.current) {
          onPaste(
            event,
            inputRef.current,
            parsePhoneNumberCharacter,
            format,
            (newValue) => propOnChange && propOnChange(newValue, event)
          );
        }
      },
      [format, propOnChange]
    );

    return (
      <PhoneInputField
        {...restProps}
        css={inputCss}
        className={inputClassName}
        form={form}
        id={id}
        isMessageHidden={isMessageHidden}
        type={type}
        min={min}
        max={max}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        message={message}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        pattern={pattern}
        placeholder={placeholder}
        ref={(inputElement: HTMLInputElement) => {
          inputRef.current = inputElement;
          if (typeof ref === 'function') ref(inputElement);
          else if (ref) ref.current = inputElement;
        }}
        isRequired={isRequired}
        spellCheck={isSpellCheckEnabled}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
        onCut={onCutHandler}
        onPaste={onPasteHandler}
        value={format(value || '').text}
        shouldFitContainer={shouldFitContainer}
        {...disabledAppearanceProps}
      />
    );
  }
);
