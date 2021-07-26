import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Size } from '@tablecheck/tablekit-theme';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { avatarClassicTheme, avatarThemeNamespace } from './themes';
import { AvatarProps } from './types';

// For the font-size, it’s the line heights that we focused on
// Those are all either full or half increments of 8
export const Container = styled.div<Omit<AvatarProps, 'name' | 'initials'>>`
  ${({ size }) => {
    let sizePx = '16px'; // xsmall
    let internalSizePx = '14px';
    if (size === Size.XSmall) internalSizePx = '10px';
    if (size === Size.Small) sizePx = '24px';
    if (size === Size.Regular) sizePx = '32px';
    if (size === Size.Regular2) sizePx = '48px';
    if (size === Size.Large) {
      sizePx = '64px';
      internalSizePx = '24px';
    }
    if (size === Size.XLarge) {
      sizePx = '128px';
      internalSizePx = '35px';
    }
    if (size === Size.XXLarge) {
      sizePx = '256px';
      internalSizePx = '52px';
    }
    return css`
      width: ${sizePx};
      height: ${sizePx};
      font-size: ${internalSizePx};

      svg {
        width: ${internalSizePx};
        height: ${internalSizePx};
      }
    `;
  }};
  background-color: ${getThemeValue(
    `${avatarThemeNamespace}.backgroundColor`,
    avatarClassicTheme.backgroundColor
  )};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getThemeValue(
    `${avatarThemeNamespace}.textColor`,
    avatarClassicTheme.textColor
  )};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
