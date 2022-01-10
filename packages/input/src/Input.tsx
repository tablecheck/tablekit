import {
  Icon,
  WarningIcon,
  SuccessIcon,
  DangerIcon,
  getIcon
} from '@tablecheck/tablekit-icon';
import { Spinner } from '@tablecheck/tablekit-spinner';
import { Size } from '@tablecheck/tablekit-theme';
import { forwardRef, cloneElement } from 'react';

import { Label } from './Label';
import {
  InputContainer,
  InputField,
  InputAppendElement,
  InputPrependElement,
  InputWrapper,
  InputMessage
} from './styled';
import { Appearance, InputProps, InputShape, InputSize } from './types';

/** @component */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    let { iconBefore, iconAfter } = props;
    const {
      id,
      appearance,
      className,
      type,
      shouldFitContainer,
      isRequired,
      label,
      inputCss,
      inputClassName,
      message,
      isMessageHidden,
      isSpellCheckEnabled,
      name,
      placeholder,
      onChange,
      value,
      size = InputSize.Regular,
      shape = InputShape.Rounded,
      width = Size.Regular,
      alt,
      ...restProps
    } = props;
    const isDisabled = appearance === Appearance.Disabled;

    if (type === 'search') {
      iconBefore = <Icon icon={getIcon('search')} />;
    }

    const labelElement =
      label !== undefined ? (
        <Label htmlFor={id} isRequired={isRequired} label={label} />
      ) : null;

    switch (appearance) {
      case Appearance.Loading:
        iconAfter = <Spinner />;
        break;
      case Appearance.Invalid:
        iconAfter = <DangerIcon />;
        break;
      case Appearance.Warning:
        iconAfter = <WarningIcon />;
        break;
      case Appearance.Success:
        iconAfter = <SuccessIcon />;
        break;
      default:
    }
    return (
      <InputContainer
        className={className}
        shouldFitContainer={shouldFitContainer}
        width={width}
      >
        {labelElement}
        <InputWrapper fieldSize={size}>
          {iconBefore && (
            <InputPrependElement isDisabled={isDisabled} elementSize={size}>
              {cloneElement(iconBefore, { size })}
            </InputPrependElement>
          )}
          <InputField
            {...restProps}
            appearance={appearance}
            shape={shape}
            className={inputClassName}
            css={inputCss}
            disabled={isDisabled}
            hasIconAfter={!!iconAfter}
            hasIconBefore={!!iconBefore}
            id={id}
            ref={ref}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            alt={alt}
            readOnly={appearance === Appearance.ReadOnly}
            required={isRequired}
            spellCheck={isSpellCheckEnabled}
            fieldSize={size}
            type={type}
            value={value}
          />
          {iconAfter && (
            <InputAppendElement isDisabled={isDisabled} elementSize={size}>
              {cloneElement(iconAfter, { size })}
            </InputAppendElement>
          )}
        </InputWrapper>
        {!isMessageHidden && <InputMessage>{message}</InputMessage>}
      </InputContainer>
    );
  }
);
