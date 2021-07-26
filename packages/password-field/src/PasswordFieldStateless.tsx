import {
  Button,
  ButtonAppearance,
  ButtonSize
} from '@tablecheck/tablekit-button';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Input, Appearance, InputSize } from '@tablecheck/tablekit-input';
import { Size } from '@tablecheck/tablekit-theme';
import { forwardRef } from 'react';

import { ScoreBar, VALID_SCORE } from './ScoreBar';
import {
  PasswordFieldContainer,
  PasswordFieldWrapper,
  PasswordFieldInputWrapper
} from './styled/PasswordField';
import { StatelessProps } from './types';

export const PasswordFieldStateless = forwardRef<
  HTMLInputElement,
  StatelessProps
>((props: StatelessProps, ref): JSX.Element => {
  const {
    appearance,
    i18nMessages,
    shouldHideScore,
    inputClassName,
    inputCss,
    label,
    score,
    isTouched,
    shouldFitContainer,
    toggleShowPassword,
    value,
    shouldShowPassword,
    invalidKey,
    width = Size.Regular,
    ...inputProps
  } = props;
  const eyeIcon = shouldShowPassword
    ? getIcon('openEye')
    : getIcon('closedEye');
  const hasInvalidScore = !shouldHideScore && !!value && score < VALID_SCORE;
  let iconSize;
  let buttonSize;

  switch (inputProps.size) {
    case InputSize.Regular:
      iconSize = Size.Regular;
      buttonSize = ButtonSize.Regular;
      break;
    case InputSize.Large:
      iconSize = Size.Large;
      buttonSize = ButtonSize.Large;
      break;
    case InputSize.Regular2:
      iconSize = Size.Regular2;
      buttonSize = ButtonSize.Regular2;
      break;
    case InputSize.Small:
      iconSize = Size.Small;
      buttonSize = ButtonSize.Small;
      break;
    default:
      iconSize = Size.Regular;
      buttonSize = ButtonSize.Regular;
  }

  return (
    <PasswordFieldContainer
      shouldFitContainer={shouldFitContainer}
      width={width}
    >
      <PasswordFieldWrapper>
        <PasswordFieldInputWrapper>
          <Input
            {...inputProps}
            label={label}
            appearance={
              isTouched && (!!i18nMessages.isInvalidFormat || hasInvalidScore)
                ? Appearance.Invalid
                : appearance
            }
            css={inputCss}
            className={inputClassName}
            ref={ref}
            width={width}
            shouldFitContainer={shouldFitContainer}
            isMessageHidden
          />
        </PasswordFieldInputWrapper>
        <Button
          appearance={ButtonAppearance.Subtle}
          onClick={toggleShowPassword}
          size={buttonSize}
        >
          <Icon icon={eyeIcon} size={iconSize} />
        </Button>
      </PasswordFieldWrapper>
      <ScoreBar
        scoreValue={score}
        invalidKey={invalidKey}
        shouldHideScore={shouldHideScore}
        i18nMessages={i18nMessages}
        hasValue={!!value}
        shouldFitContainer={shouldFitContainer}
        width={width}
      />
    </PasswordFieldContainer>
  );
});
