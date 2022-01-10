import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Size, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, variant } from '@tablecheck/tablekit-utils';

import { badgeClassicTheme, badgeThemeNamespace } from './themes';
import { BadgeContainerProps, BadgeSize, BadgeType } from './types';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  ${Typography.Body2};
  ${variant<BadgeSize, SerializedStyles, BadgeContainerProps>({
    prop: 'size',
    default: Size.Regular,
    variants: {
      [Size.Small]: (props) => css`
        ${props.isFlexible
          ? `min-width: ${Spacing.L4}; width: fit-content;`
          : `width: ${Spacing.L4};`}
        height: ${Spacing.L4};
        padding: 0 ${Spacing.L1};
      `,
      [Size.Regular]: (props) => css`
        ${props.isFlexible
          ? `min-width: ${Spacing.L5}; width: fit-content;`
          : `width:${Spacing.L5};`}
        height: ${Spacing.L5};
        padding: 0 ${Spacing.L2};
      `
    }
  })}
  ${variant<BadgeType, SerializedStyles, BadgeContainerProps>({
    prop: 'type',
    default: BadgeType.Outline,
    variants: {
      [BadgeType.Solid]: (props) => css`
        background-color: ${getThemeValue(
          `${badgeThemeNamespace}.solid.backgroundColor`,
          badgeClassicTheme.solid.backgroundColor
        )(props)};
        color: ${getThemeValue(
          `${badgeThemeNamespace}.solid.textColor`,
          badgeClassicTheme.solid.textColor
        )(props)};
      `,
      [BadgeType.Outline]: (props) => css`
        border: 1px solid
          ${getThemeValue(
            `${badgeThemeNamespace}.outline.borderColor`,
            badgeClassicTheme.outline.borderColor
          )(props)};
        color: ${getThemeValue(
          `${badgeThemeNamespace}.outline.textColor`,
          badgeClassicTheme.outline.textColor
        )(props)};
      `
    }
  })}
`;
