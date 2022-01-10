import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, margin, variant } from '@tablecheck/tablekit-utils';

import { alertClassicTheme, alertThemeNamespace } from './themes';
import { Appearance } from './types';

type AlertAppearanceProp = {
  appearance: Appearance;
};

type AlertIsDismissibleProp = {
  isDismissible: boolean;
};

type AlertContainerProps = AlertAppearanceProp & AlertIsDismissibleProp;

type AlertContentContainerProps = {
  shouldHideIcon: boolean;
};

type AlertContentProps = AlertIsDismissibleProp & AlertContentContainerProps;

export const AlertContainer = styled.div<AlertContainerProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 200px;
  max-width: 600px;
  min-height: 44px;
  ${Typography.Body2};
  color: ${getThemeValue(
    `${alertThemeNamespace}.textColor`,
    alertClassicTheme.textColor
  )};
  background-color: ${getThemeValue(
    `${alertThemeNamespace}.backgroundColor`,
    alertClassicTheme.backgroundColor
  )};
  box-shadow: 1px 1px 0 1px
    ${getThemeValue(
      `${alertThemeNamespace}.boxShadowColor`,
      alertClassicTheme.boxShadowColor
    )};
  padding: 6px ${Spacing.L1} 6px ${Spacing.L3};
  ${({ isDismissible }) => !isDismissible && `padding-right: ${Spacing.L3};`}
  border-radius: 3px;
  ${variant<Appearance, SerializedStyles, AlertContainerProps>({
    prop: 'appearance',
    default: Appearance.Primary,
    variants: {
      [Appearance.Primary]: (props) => css`
        border-left: ${Spacing.L1} solid
          ${getThemeValue(
            `${alertThemeNamespace}.primary.borderColor`,
            alertClassicTheme.primary.borderColor
          )(props)};
      `,
      [Appearance.Success]: (props) => css`
        border-left: ${Spacing.L1} solid
          ${getThemeValue(
            `${alertThemeNamespace}.success.borderColor`,
            alertClassicTheme.success.borderColor
          )(props)};
      `,
      [Appearance.Danger]: (props) => css`
        border-left: ${Spacing.L1} solid
          ${getThemeValue(
            `${alertThemeNamespace}.danger.borderColor`,
            alertClassicTheme.danger.borderColor
          )(props)};
      `,
      [Appearance.Warning]: (props) => css`
        border-left: ${Spacing.L1} solid
          ${getThemeValue(
            `${alertThemeNamespace}.warning.borderColor`,
            alertClassicTheme.warning.borderColor
          )(props)};
      `
    }
  })}
`;

export const AlertContentContainer = styled.div<AlertContentContainerProps>`
  position: relative;
  display: flex;
  ${({ shouldHideIcon }) => !shouldHideIcon && 'padding-top: 5px;'}
`;

export const AlertMark = styled(Icon)<AlertAppearanceProp>`
  margin-top: 1px;
  ${variant<Appearance, SerializedStyles, AlertAppearanceProp>({
    prop: 'appearance',
    default: Appearance.Primary,
    variants: {
      [Appearance.Primary]: (props) => css`
        color: ${getThemeValue(
          `${alertThemeNamespace}.primary.iconColor`,
          alertClassicTheme.primary.iconColor
        )(props)};
        fill: ${getThemeValue(
          `${alertThemeNamespace}.primary.fillColor`,
          alertClassicTheme.primary.fillColor
        )(props)};
      `,
      [Appearance.Success]: (props) => css`
        color: ${getThemeValue(
          `${alertThemeNamespace}.success.iconColor`,
          alertClassicTheme.success.iconColor
        )(props)};
        fill: ${getThemeValue(
          `${alertThemeNamespace}.success.fillColor`,
          alertClassicTheme.success.fillColor
        )(props)};
      `,
      [Appearance.Danger]: (props) => css`
        color: ${getThemeValue(
          `${alertThemeNamespace}.danger.iconColor`,
          alertClassicTheme.danger.iconColor
        )(props)};
        fill: ${getThemeValue(
          `${alertThemeNamespace}.danger.fillColor`,
          alertClassicTheme.danger.fillColor
        )(props)};
      `,
      [Appearance.Warning]: (props) => css`
        color: ${getThemeValue(
          `${alertThemeNamespace}.warning.iconColor`,
          alertClassicTheme.warning.iconColor
        )(props)};
        fill: ${getThemeValue(
          `${alertThemeNamespace}.warning.fillColor`,
          alertClassicTheme.warning.fillColor
        )(props)};
      `
    }
  })}
`;

export const AlertContent = styled.div<AlertContentProps>`
  ${(props) => {
    const { shouldHideIcon, isDismissible } = props;
    const horizontalMargin = shouldHideIcon ? 0 : Spacing.L2;
    const options = {
      top: 0,
      bottom: 0,
      left: horizontalMargin,
      right: isDismissible ? 40 : horizontalMargin
    };
    return margin(options)(props);
  }}
`;

export const AlertCloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  color: ${getThemeValue(
    `${alertThemeNamespace}.closeButton.color`,
    alertClassicTheme.closeButton.color
  )};
`;

export const AlertFooterButton = styled(Button)``;

export const AlertFooterContainer = styled.div`
  margin-top: ${Spacing.L1};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > *:not(:last-child) {
    ${margin({ right: Spacing.L2 })}
  }
`;

export const AlertWrapper = styled.div`
  margin-top: ${Spacing.L2};
  &:nth-of-type(1) {
    margin-top: 0;
  }
`;
