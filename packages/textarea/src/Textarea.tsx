import {
  Icon,
  SuccessIcon,
  DangerIcon,
  WarningIcon,
  getIcon
} from '@tablecheck/tablekit-icon';
import {
  Label,
  Appearance,
  InputSize,
  InputContainer as Container,
  InputAppendElement as AppendElement,
  InputPrependElement as PrependElement,
  InputMessage
} from '@tablecheck/tablekit-input';
import { Spinner } from '@tablecheck/tablekit-spinner';
import { Size } from '@tablecheck/tablekit-theme';
import {
  forwardRef,
  useRef,
  cloneElement,
  ForwardedRef,
  KeyboardEvent
} from 'react';

import { TextareaInput, TextareaInputWrapper } from './styled';
import { TextAreaProps } from './types';

function setRef(
  ref:
    | ForwardedRef<HTMLTextAreaElement>
    | ForwardedRef<HTMLTextAreaElement | undefined>,
  element: HTMLTextAreaElement
) {
  if (!element || !ref) return;
  if (typeof ref === 'function') ref(element);
  else ref.current = element;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    props: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    const {
      className,
      type,
      shouldFitContainer,
      id,
      appearance,
      isRequired,
      label,
      inputCss,
      inputClassName,
      message,
      isMessageHidden,
      isSpellCheckEnabled,
      maxLength,
      autoComplete,
      name,
      placeholder,
      form,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      value,
      size = InputSize.Regular,
      enableResize: shouldEnableResize,
      minimumRows,
      shouldAutoExpand,
      width = Size.Regular,
      ...restProps
    } = props;
    let { iconBefore, iconAfter } = props;
    const isDisabled = appearance === Appearance.Disabled;
    const innerRef = useRef<HTMLTextAreaElement>();
    const autoResize = () => {
      if (!innerRef.current) return;
      setTimeout(() => {
        if (!innerRef.current) return;
        innerRef.current.style.height = 'auto';
        innerRef.current.style.height = `${innerRef.current.scrollHeight}px`;
      });
    };
    const keyDownHandler = shouldAutoExpand
      ? (event: KeyboardEvent<HTMLTextAreaElement>) => {
          if (onKeyDown) onKeyDown(event);
          autoResize();
        }
      : onKeyDown;

    if (type === 'search') {
      iconBefore = <Icon icon={getIcon('search')} />;
    }

    const labelElement =
      label !== undefined ? (
        <Label htmlFor={id} isRequired={isRequired} label={label} />
      ) : null;

    if (appearance === Appearance.Loading) {
      iconAfter = <Spinner />;
    } else if (appearance === Appearance.Invalid) {
      iconAfter = <DangerIcon />;
    } else if (appearance === Appearance.Warning) {
      iconAfter = <WarningIcon />;
    } else if (appearance === Appearance.Success) {
      iconAfter = <SuccessIcon />;
    } else if (iconAfter) {
      iconAfter = cloneElement(iconAfter, { size: Size.Regular });
    }
    return (
      <Container
        className={className}
        shouldFitContainer={shouldFitContainer}
        width={width}
      >
        {labelElement}
        <TextareaInputWrapper>
          {iconBefore && (
            <PrependElement elementSize={size} isDisabled={isDisabled}>
              {cloneElement(iconBefore, { size: Size.Regular })}
            </PrependElement>
          )}
          <TextareaInput
            {...restProps}
            autoComplete={autoComplete}
            className={inputClassName}
            css={inputCss}
            disabled={isDisabled}
            form={form}
            id={id}
            maxLength={maxLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={keyDownHandler}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            readOnly={appearance === Appearance.ReadOnly}
            required={isRequired}
            spellCheck={isSpellCheckEnabled}
            size={size}
            type={type}
            value={value}
            minimumRows={minimumRows}
            enableResize={shouldEnableResize || isDisabled}
            ref={(r: HTMLTextAreaElement) => {
              setRef(ref, r);
              setRef(innerRef, r);
              if (shouldAutoExpand) autoResize();
            }}
          />
          {iconAfter && (
            <AppendElement elementSize={size} isDisabled={isDisabled}>
              {cloneElement(iconAfter, { size: Size.Regular })}
            </AppendElement>
          )}
        </TextareaInputWrapper>
        {!isMessageHidden && <InputMessage>{message}</InputMessage>}
      </Container>
    );
  }
);
