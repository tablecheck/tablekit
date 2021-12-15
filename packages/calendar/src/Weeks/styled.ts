import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { FontWeight, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, hexToRgba } from '@tablecheck/tablekit-utils';

import { calendarClassicTheme, calendarThemeNamespace } from '../themes';

import { DayOfWeek, DayState } from './types';

export const WeekRow = styled.tr`
  align-items: center;
`;

const buttonWidth = 40;
const buttonPadding = Spacing.L1;

const buttonStyles = css`
  box-sizing: border-box;
  padding: ${buttonPadding};
  ${Typography.Body2};
  width: ${buttonWidth + Number.parseFloat(buttonPadding) * 2}px;
  min-width: ${buttonWidth + Number.parseFloat(buttonPadding) * 2}px;
  height: ${buttonWidth + Number.parseFloat(buttonPadding) * 2}px;
  min-height: ${buttonWidth + Number.parseFloat(buttonPadding) * 2}px;
  &,
  & > span {
    justify-content: center;
    align-items: center;
  }
  & > span {
    display: inline-flex;
    width: ${buttonWidth}px;
    min-width: ${buttonWidth}px;
    height: ${buttonWidth}px;
    min-height: ${buttonWidth}px;
    border-radius: 50%;
  }
`;

declare global {
  interface Date {
    // Default ts types make this `number` which is a bit broader than I'd like
    getDay(): DayOfWeek;
  }
}

const weekendFontWeight = css`
  font-weight: ${FontWeight.Regular};
  &[data-dow='0'],
  &[data-dow='6'] {
    font-weight: ${FontWeight.SemiBold};
  }
` as unknown as (props: { 'data-dow'?: DayOfWeek }) => ReturnType<typeof css>;
// the above weird typecast means we aren't using interpolation,
// but emotion correctly passes the props up to the function that uses it
// meaning that `data-dow` becomes a required prop on parent components

export const DayOfWeekHeader = styled.th`
  ${buttonStyles};
  position: relative;
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: center;
  vertical-align: middle;
  ${weekendFontWeight};
  height: ${Spacing.L5};
  min-height: ${Spacing.L5};
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  ${Typography.Body2};
`;

export const BlankDayButton = styled.td`
  ${buttonStyles};
  cursor: default;
`;

const inbetweenColor = ({ theme }: { theme: Theme }) =>
  hexToRgba(theme.colors.primary2, 0.4);

export const DateButton = styled.button<{
  'data-state': DayState;
  'data-dow': DayOfWeek;
  'data-date': string;
  'data-today': 'true' | 'false';
}>`
  color: ${({ theme }) => theme.colors.text};
  ${buttonStyles};
  position: relative;
  transition: none;
  outline: none;
  cursor: pointer;
  ${weekendFontWeight};

  & > span {
    position: relative;
  }

  &:hover > span {
    background-color: ${({ theme }) => theme.colors.hoverNeutralBackground};
  }

  &:active,
  &:focus {
    & > span {
      background-color: ${({ theme }) => theme.colors.hoverPrimaryBackground};
      color: ${({ theme }) => theme.colors.text};
      box-shadow: 0 0 1px 2px ${({ theme }) => theme.colors.focusOutline};
    }
    &[data-today='true'] > span:after {
      background-color: ${({ theme }) => theme.colors.text};
    }
  }

  &[data-today='true'] > span:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 6px;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }

  &[data-state=${DayState.Selected}], &[data-state=${DayState.SelectionStart}], &[data-state=${DayState.SelectionEnd}] {
    &:hover > span,
    &:active > span,
    & > span {
      color: ${getThemeValue(
        `${calendarThemeNamespace}.selectedTextColor`,
        calendarClassicTheme.selectedTextColor
      )};
    }
    &:hover > span,
    &:active > span {
      color: ${getThemeValue(
        `${calendarThemeNamespace}.selectedTextColor`,
        calendarClassicTheme.selectedTextColor
      )};
      background-color: ${({ theme }) => theme.colors.primary2};
    }
    &[data-today='true'] > span:after {
      background-color: ${getThemeValue(
        `${calendarThemeNamespace}.selectedTextColor`,
        calendarClassicTheme.selectedTextColor
      )};
    }
  }

  &[data-state=${DayState.Outside}] {
    color: ${({ theme }) => theme.colors.textSubtle};
    &[data-today='true'] > span:after {
      background-color: ${({ theme }) => theme.colors.primary2};
    }
  }

  &[data-state=${DayState.Disabled}] {
    cursor: default;
    pointer-events: none;
    opacity: 0.4;
  }
  &[data-state=${DayState.Selected}] {
    cursor: default;
    & > span {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  &[data-state=${DayState.Inbetween}] {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: ${buttonPadding};
      bottom: ${buttonPadding};
      background-color: ${inbetweenColor};
    }
    & > span {
      color: white;
    }
    &[data-today='true'] > span:after {
      background-color: white;
    }
  }
  &[data-state=${DayState.SelectionStart}], &[data-state=${DayState.SelectionEnd}] {
    &:before {
      content: '';
      position: absolute;
      top: ${buttonPadding};
      bottom: ${buttonPadding};
      background-color: ${inbetweenColor};
    }
    & > span {
      font-weight: 600;
      color: white;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  &[data-state=${DayState.SelectionStart}] {
    &:before {
      left: 50%;
      right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &[data-state=${DayState.SelectionEnd}] {
    &:before {
      left: 0;
      right: 50%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
