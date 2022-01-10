import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldHeight, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { variant } from '@tablecheck/tablekit-utils';

import { Appearance, ButtonSize, DerivedButtonProps } from '../types';

import {
  transition,
  styledComponentOptions,
  getLoadingStyle,
  getBorderRadius,
  getOutlineRadius,
  getButtonHeight
} from './commonStyles';
import { borderWidth, defaultVariants } from './themeDefinitions';

export function getButtonStyles(
  props: DerivedButtonProps & { theme: Theme }
): SerializedStyles {
  let cursor = 'pointer';
  let width = 'auto';
  const height = getButtonHeight(props);

  const size = variant<ButtonSize, SerializedStyles, DerivedButtonProps>({
    prop: 'size',
    default: ButtonSize.Regular,
    variants: {
      [ButtonSize.Regular]: css`
        ${Typography.Heading4};
        padding: 0 ${Spacing.L5};
        vertical-align: middle;
        ${props.isOnlyChild
          ? ''
          : `min-width: ${parseInt(FieldHeight.Regular, 10) * 3}px`};

        & .svg-inline--fa {
          width: ${Spacing.L4};
          height: ${Spacing.L4};
        }
      `,
      [ButtonSize.Regular2]: css`
        ${Typography.Heading4};
        padding: 0 ${Spacing.L5};
        vertical-align: middle;
        ${props.isOnlyChild
          ? ''
          : `min-width: ${parseInt(FieldHeight.Regular2, 10) * 3}px`};

        & .svg-inline--fa {
          width: ${Spacing.L4};
          height: ${Spacing.L4};
        }
      `,
      [ButtonSize.Small]: css`
        ${Typography.Heading4};
        padding: 0 ${Spacing.L4};
        vertical-align: middle;
        ${props.isOnlyChild
          ? ''
          : `min-width: ${parseInt(FieldHeight.Small, 10) * 3}px`};

        & .svg-inline--fa {
          width: ${Spacing.L4};
          height: ${Spacing.L4};
        }
      `,
      [ButtonSize.Large]: css`
        ${Typography.Body1};
        padding: 0 ${Spacing.L5};
        vertical-align: middle;
        ${props.isOnlyChild
          ? ''
          : `min-width: ${parseInt(FieldHeight.Large, 10) * 3}px`};

        & .svg-inline--fa {
          width: ${Spacing.L5};
          height: ${Spacing.L5};
        }
      `
    }
  })(props);
  let sizeOverride: string | SerializedStyles = '';

  if (props.disabled) {
    cursor = 'not-allowed';
  }

  // Fit to parent width
  if (props.fit) {
    width = '100%';
  } else if (props.isOnlyChild) {
    width = FieldHeight.Regular;
    if (props.size === ButtonSize.Large) {
      width = FieldHeight.Large;
    } else if (props.size === ButtonSize.Small) {
      width = FieldHeight.Small;
    } else if (props.size === ButtonSize.Regular2) {
      width = FieldHeight.Regular2;
    }
    sizeOverride = css`
      padding: 0;
      justify-content: center;
    `;
  }

  return css`
    text-decoration: none;
    border-color: transparent;
    border-width: ${borderWidth}px;
    border-style: solid;
    align-items: baseline;
    box-sizing: border-box;
    cursor: ${cursor};
    display: inline-flex;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    outline: none;
    pointer-events: auto;
    text-align: center;
    white-space: nowrap;
    width: ${width};
    height: ${height};
    ${size};
    ${sizeOverride};
    &::-moz-focus-inner {
      border: 0;
      margin: 0;
      padding: 0;
    }
    font-weight: 600;
    ${transition};
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      background: transparent;
      opacity: 0;
      top: -${borderWidth}px;
      right: -${borderWidth}px;
      bottom: -${borderWidth}px;
      left: -${borderWidth}px;
      ${transition};
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -${borderWidth}px;
      right: -${borderWidth}px;
      bottom: -${borderWidth}px;
      left: -${borderWidth}px;
      ${transition};
    }
    &,
    &:before {
      border-radius: ${getBorderRadius(height, props.shape)};
    }
    &:after {
      border-radius: ${getOutlineRadius(height, props.shape)};
    }
    ${variant<Appearance, SerializedStyles, DerivedButtonProps>({
      prop: 'appearance',
      default: Appearance.Solid,
      variants: defaultVariants
    })(props)}
    &:focus::after {
      border: 2px solid ${props.theme.colors.focusOutline};
    }
  `;
}

export const StyledButton = styled(
  'button',
  styledComponentOptions
)<DerivedButtonProps>`
  ${getButtonStyles};
`;

export const StyledLink = styled(
  'a',
  styledComponentOptions
)<DerivedButtonProps>`
  ${getButtonStyles};
  &,
  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
  }
`;

export const IconWrapper = styled.span`
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  margin: 0;
  user-select: none;
  ${getLoadingStyle};
`;
