import styled from '@emotion/styled';
import { Spacing, FieldHeight, Size } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { radioClassicTheme, radioThemeNamespace } from './themes';
import { RadioProps } from './types';

export const IS_CLICKED_ATTR = 'isClicked';
const IS_CLICKED_SELECTOR = '[data-is-clicked="true"]';

const TRANSITION_SPEED = '120ms';
const TRANSITION_SETTINGS = `${TRANSITION_SPEED} ease-in-out`;

export const RadioText = styled.span`
  ${Typography.Body2};
  &[data-size='${Size.Large}'] {
    ${Typography.Body1};
  }
`;

export const RadioInputDisplay = styled.span<{
  'data-size'?: RadioProps['size'];
}>`
  position: relative;

  width: 16px;
  height: 16px;
  &[data-size='${Size.Large}'] {
    width: 24px;
    height: 24px;
  }
  background: ${getThemeValue(
    `${radioThemeNamespace}.default.backgroundColor`,
    radioClassicTheme.default.backgroundColor
  )};
  border: 1px solid
    ${getThemeValue(
      `${radioThemeNamespace}.default.borderColor`,
      radioClassicTheme.default.borderColor
    )};
  border-radius: 50%;
  margin: 0 ${Spacing.L2} 0 0;
  transition: box-shadow ${TRANSITION_SETTINGS},
    border-color ${TRANSITION_SETTINGS};
  vertical-align: text-bottom;
  flex-shrink: 0;

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
    border-radius: 50%;
  }

  // inside dot display
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px; // Offset for border
    left: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary2};
    transform: scale(0);
    transition: transform ${TRANSITION_SETTINGS};
  }
  &[data-size='${Size.Large}']::after {
    width: 24px;
    height: 24px;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + ${RadioInputDisplay}::before {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary2};
  }

  &:checked + ${RadioInputDisplay}::after {
    transform: scale(0.375);
  }

  &:disabled {
    & ~ * {
      color: ${getThemeValue(
        `${radioThemeNamespace}.disabled.textColor`,
        radioClassicTheme.disabled.textColor
      )};
    }
    & + ${RadioInputDisplay}::after {
      background: ${getThemeValue(
        `${radioThemeNamespace}.disabled.backgroundColor`,
        radioClassicTheme.disabled.backgroundColor
      )};
    }
  }
`;

export const RadioLabel = styled.label<{
  isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: ${FieldHeight.Small};
  padding: ${Spacing.L1};
  color: ${getThemeValue(
    `${radioThemeNamespace}.default.textColor`,
    radioClassicTheme.default.textColor
  )};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  &${IS_CLICKED_SELECTOR} > ${RadioInputDisplay}::before {
    display: none !important;
  }

  &:hover ${RadioInput}:not(:disabled):not(:checked) + ${RadioInputDisplay} {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;
