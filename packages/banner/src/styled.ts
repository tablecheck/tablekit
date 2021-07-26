import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Size, Spacing } from '@tablecheck/tablekit-theme';
import {
  Typography,
  TypographyHeadlineMobile
} from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import { bannerClassicTheme, bannerThemeNamespace } from './themes';
import { Appearance, BannerProps } from './types';

const sizedTypography = {
  [Size.Small]: Typography.Heading4,
  [Size.Regular]: Typography.Heading4,
  [Size.Regular2]: Typography.Heading3,
  [Size.Large]: Typography.Heading3,
  [Size.XLarge]: Typography.Heading2,
  [Size.XXLarge]: TypographyHeadlineMobile.Heading1
};

export const adjustedIconSizes = {
  [Size.Small]: Size.Regular,
  [Size.Regular]: Size.Regular2,
  [Size.Regular2]: Size.Large,
  [Size.Large]: Size.Large,
  [Size.XLarge]: Size.XLarge,
  [Size.XXLarge]: Size.XXLarge
};

const getBannerAppearance =
  ({ appearance = Appearance.Primary }) =>
  (props: ThemeOnlyProps) =>
    css`
      background-color: ${getThemeValue(
        `${bannerThemeNamespace}.${appearance}.backgroundColor`,
        bannerClassicTheme[appearance].backgroundColor
      )(props)};
      color: ${getThemeValue(
        `${bannerThemeNamespace}.${appearance}.textColor`,
        bannerClassicTheme[appearance].textColor
      )(props)};

      .bannerIcon path {
        fill: ${getThemeValue(
          `${bannerThemeNamespace}.${appearance}.fillColor`,
          bannerClassicTheme[appearance].fillColor
        )(props)};
      }
    `;

export const BannerContainer = styled.div<
  Omit<BannerProps, 'isDismissible' | 'message'> & { size: Size }
>`
  display: flex;
  padding: 0 ${Spacing.L1} 0 ${Spacing.L4};
  align-items: flex-start;
  ${({ size }) => sizedTypography[size]}
  ${getBannerAppearance}
`;

export const BannerMessageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 6px 0;

  &:only-child {
    padding: 6px ${Spacing.L2} 6px 0;
  }
`;

export const AlertIcon = styled(Icon)`
  margin-right: ${Spacing.L2};
`;

export const CloseButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isIndented'
})<{ isIndented: boolean }>`
  ${({ isIndented }) => isIndented && 'margin-top: 2px;'}
`;
