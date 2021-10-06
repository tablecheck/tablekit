import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing, FieldHeight, Size } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import {
  TRANSITION_SETTINGS,
  TRANSITION_SPEED,
  IS_CLICKED_SELECTOR
} from './constants';
import { checkboxClassicTheme, checkboxThemeNamespace } from './themes';
import { CheckboxProps } from './types';

export const Text = styled.span`
  display: inline-flex;
  ${Typography.Body2};
`;

export const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  color: ${getThemeValue(
    `${checkboxThemeNamespace}.fillColorInvalid`,
    checkboxClassicTheme.fillColorInvalid
  )};
  padding-left: ${Spacing.L1};
  font-weight: bold;
`;

export const CheckboxText = styled.p<{
  'data-size'?: CheckboxProps['size'];
}>`
  &[data-size='${Size.Large}'] {
    ${Typography.Body1};
  }
`;

export const InputDisplay = styled.span<{
  isInvalid?: boolean;
  'data-size'?: CheckboxProps['size'];
}>`
  background: ${getThemeValue(
    `${checkboxThemeNamespace}.backgroundColorBox`,
    checkboxClassicTheme.backgroundColorBox
  )};
  border: 1px solid
    ${getThemeValue(
      `${checkboxThemeNamespace}.borderColorBox`,
      checkboxClassicTheme.borderColorBox
    )};
  border-radius: 2px;
  display: inline-flex;
  flex-shrink: 0;
  margin: 2px ${Spacing.L2} 0 0;
  position: relative;
  transition: box-shadow ${TRANSITION_SETTINGS},
    border-color ${TRANSITION_SETTINGS};
  vertical-align: text-bottom;
  height: 20px;
  width: 20px;
  &[data-size='${Size.Large}'] {
    width: 24px;
    height: 24px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .checkbox-checkmark {
      stroke-width: 2;
      stroke-dasharray: 14;
      fill: none;
      stroke-dashoffset: 14;
      stroke: ${({ theme }) => theme.colors.primary2};
    }
  }

  // focus display
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -${Spacing.L1};
    left: -${Spacing.L1};
    right: -${Spacing.L1};
    bottom: -${Spacing.L1};
    outline: none;
    transition: box-shadow ${TRANSITION_SETTINGS};
    box-shadow: 0 0 0 2px transparent;
    border-radius: 4px;
  }

  // invalid display
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -${Spacing.L1};
    left: -${Spacing.L1};
    right: -${Spacing.L1};
    bottom: -${Spacing.L1};
    outline: none;
    transition: box-shadow ${TRANSITION_SETTINGS},
      opacity ${TRANSITION_SETTINGS};
    box-shadow: 0 0 0 2px transparent;
    border-radius: 4px;
  }

  ${({ isInvalid }) => {
    if (!isInvalid) return '';
    return (props) => css`
      background: ${getThemeValue(
        `${checkboxThemeNamespace}.backgroundColorBoxInvalid`,
        checkboxClassicTheme.backgroundColorBoxInvalid
      )(props)};
      border: 1px solid
        ${getThemeValue(
          `${checkboxThemeNamespace}.borderColorBoxInvalid`,
          checkboxClassicTheme.borderColorBoxInvalid
        )(props)};
      &::after {
        box-shadow: 0 0 0 2px
          ${getThemeValue(
            `${checkboxThemeNamespace}.fillColorInvalid`,
            checkboxClassicTheme.fillColorInvalid
          )(props)};
      }
    `;
  }}
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  & + ${InputDisplay} svg .checkbox-checkmark {
    transition: stroke-dashoffset ${TRANSITION_SPEED} ease;
  }

  &:checked + ${InputDisplay} svg .checkbox-checkmark {
    stroke-dashoffset: 0;
  }

  &:not(:checked) + ${InputDisplay} svg .checkbox-checkmark {
    stroke-dashoffset: 14;
  }

  &:disabled {
    & + ${InputDisplay} svg .checkbox-checkmark {
      stroke: ${getThemeValue(
        `${checkboxThemeNamespace}.textColorDisabled`,
        checkboxClassicTheme.textColorDisabled
      )};
    }
  }

  &:focus + ${InputDisplay}::before {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary2};
  }

  &:focus + ${InputDisplay}::after {
    // uses opacity here so that we can have smooth transition from invalid state to focus state
    opacity: 0;
  }
`;

const getLabelColors = (
  props: ThemeOnlyProps & {
    isDisabled?: boolean;
    isInvalid?: boolean;
  }
) => {
  const { isDisabled, isInvalid } = props;

  if (isInvalid) {
    return css`
      background-color: ${getThemeValue(
        `${checkboxThemeNamespace}.backgroundColorInvalid`,
        checkboxClassicTheme.backgroundColorInvalid
      )(props)};
      color: ${getThemeValue(
        `${checkboxThemeNamespace}.textColorInvalid`,
        checkboxClassicTheme.textColorInvalid
      )(props)};
    `;
  }

  if (isDisabled) {
    return css`
      color: ${getThemeValue(
        `${checkboxThemeNamespace}.textColorDisabled`,
        checkboxClassicTheme.textColorDisabled
      )(props)};
    `;
  }

  return css`
    color: ${getThemeValue(
      `${checkboxThemeNamespace}.textColor`,
      checkboxClassicTheme.textColor
    )(props)};
  `;
};

export const CheckboxLabel = styled.label`
  align-items: center;
  border-radius: 4px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: flex-start;
  min-height: ${FieldHeight.Regular};
  padding: ${Spacing.L2};
  transition: background-color ${TRANSITION_SETTINGS};
  ${Typography.Body2};

  ${getLabelColors}

  &:hover ${CheckboxInput}:not(:disabled) + ${InputDisplay} {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
  &${IS_CLICKED_SELECTOR} ${InputDisplay}::before {
    display: none !important;
  }
  // since we are removing the focus display, we can now show invalid display
  &${IS_CLICKED_SELECTOR} ${InputDisplay}::after {
    opacity: 1 !important;
  }
`;
