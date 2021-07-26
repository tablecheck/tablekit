import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { BORDER_RADIUS, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, variant } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import { tagClassicTheme, tagThemeNamespace } from './themes';
import { TagAppearance, TagSize } from './types';

export const borderWidth = 1;

export const transition = css`
  transition: 120ms ease-in-out;
`;

export const TagContent = styled.span<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  align-self: center;
  margin: ${({ isSelected }) =>
    isSelected ? '0 6px 0 2px' : `0 ${Spacing.L3}`};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;

export const RemoveIconWrapper = styled.span`
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  margin: 0;
  user-select: none;
`;

export const TagWrapper = styled.span`
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  position: relative;
`;

interface StyledTagProps {
  appearance: TagAppearance;
  size: TagSize;
  isSelected?: boolean;
}

function renderAppearance(
  appearance: TagAppearance,
  props: StyledTagProps & ThemeOnlyProps
): SerializedStyles {
  const { isSelected } = props;
  if (isSelected) {
    return css`
      color: ${getThemeValue(
        `${tagThemeNamespace}.${appearance}.selectedTextColor`,
        tagClassicTheme[appearance].selectedTextColor
      )(props)};
      background: ${getThemeValue(
        `${tagThemeNamespace}.${appearance}.selectedBackgroundColor`,
        tagClassicTheme[appearance].selectedBackgroundColor
      )(props)};
      &:hover {
        background: ${getThemeValue(
          `${tagThemeNamespace}.${appearance}.hoverSelectedBackgroundColor`,
          tagClassicTheme[appearance].hoverSelectedBackgroundColor
        )(props)};
      }
      ${RemoveIconWrapper} {
        color: ${getThemeValue(
          `${tagThemeNamespace}.${appearance}.selectedTextColor`,
          tagClassicTheme[appearance].selectedTextColor
        )(props)};
      }
    `;
  }
  return css`
    color: ${getThemeValue(
      `${tagThemeNamespace}.${appearance}.textColor`,
      tagClassicTheme[appearance].textColor
    )(props)};
    background: ${getThemeValue(
      `${tagThemeNamespace}.${appearance}.backgroundColor`,
      tagClassicTheme[appearance].backgroundColor
    )(props)};
    &:hover {
      background: ${getThemeValue(
        `${tagThemeNamespace}.${appearance}.hoverBackgroundColor`,
        tagClassicTheme[appearance].hoverBackgroundColor
      )(props)};
    }
  `;
}

export const StyledTag = styled.button<StyledTagProps>`
  text-decoration: none;
  border-color: ${getThemeValue(
    `${tagThemeNamespace}.common.borderColor`,
    tagClassicTheme?.common?.borderColor
  )};
  ${variant<TagAppearance, SerializedStyles, StyledTagProps>({
    prop: 'appearance',
    default: TagAppearance.Outline,
    variants: {
      [TagAppearance.Outline]: (props) =>
        renderAppearance(TagAppearance.Outline, props),
      [TagAppearance.Solid]: (props) =>
        renderAppearance(TagAppearance.Solid, props)
    }
  })}
  align-items: baseline;
  border-width: ${borderWidth}px;
  border-style: solid;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  margin: 0;
  max-width: 100%;
  outline: none;
  pointer-events: auto;
  text-align: center;
  white-space: nowrap;
  width: auto;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS}px;
  ${Typography.Body2};
  padding: 0 ${Spacing.L1};
  ${variant<TagSize, SerializedStyles, StyledTagProps>({
    prop: 'size',
    default: TagSize.Regular,
    variants: {
      [TagSize.Regular]: css`
        height: ${Spacing.L6};
      `,
      [TagSize.Small]: css`
        height: ${Spacing.L5};
      `
    }
  })}
  & .svg-inline--fa {
    width: ${Spacing.L4};
    height: ${Spacing.L4};
  }
  &::-moz-focus-inner {
    border: 0;
    margin: 0;
    padding: 0;
  }
  font-weight: bold;
  ${transition};
  &::after {
    border-radius: ${BORDER_RADIUS}px;
    ${transition};
  }
`;
