import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { DayOfWeek, DayState } from './types';

export const WeekRow = styled.tr`
  align-items: center;
`;

const buttonSize = 40;

const buttonStyles = css`
  box-sizing: border-box;
  font: var(--small);
  width: ${buttonSize}px;
  min-width: ${buttonSize}px;
  height: ${buttonSize}px;
  min-height: ${buttonSize}px;
  &,
  & > span {
    justify-content: center;
    align-items: center;
  }
  & > span {
    display: inline-flex;
    width: ${buttonSize}px;
    min-width: ${buttonSize}px;
    height: ${buttonSize}px;
    min-height: ${buttonSize}px;
    border-radius: var(--border-radius-small);
  }
`;

declare global {
  interface Date {
    // Default ts types make this `number` which is a bit broader than I'd like
    getDay(): DayOfWeek;
  }
}

export const DayOfWeekHeader = styled.th`
  position: relative;
  color: var(--text-subtle);
  text-align: center;
  vertical-align: middle;
  font: 400 10px / 10px var(--font-family);
  height: 32px;
  min-height: 32px;
  width: ${buttonSize}px;
  min-width: ${buttonSize}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

export const BlankDayButton = styled.td`
  ${buttonStyles};
  cursor: default;
`;

export const DateButton = styled.button<{
  'data-state': DayState | `${DayState}`;
  'data-dow': DayOfWeek;
  'data-date': string;
  'data-today': 'true' | 'false';
  'data-testid': string;
}>`
  --day-text: var(--text);
  --day-background: transparent;
  color: var(--day-text);
  ${buttonStyles};
  position: relative;
  transition: none;
  outline: none;
  cursor: pointer;

  & > span {
    position: relative;
    color: var(--day-text);
    background-color: var(--day-background);
  }

  &[data-pseudo='hover'],
  &:hover {
    --day-background: var(--surface-hover-transparent);
  }

  &[data-pseudo='active'],
  &[data-pseudo='focus'],
  &:active,
  &:focus {
    --day-background: var(--surface-active);
  }

  &[data-pseudo='focus'] > span,
  &:focus > span,
  &:focus-visible > span {
    box-shadow: 0 0 0 2px var(--focus);
  }
  &:focus:not(:focus-visible) > span {
    box-shadow: none !important;
  }

  &[data-today='true'] > span:after {
    content: '';
    position: absolute;
    background-color: var(--day-text);
    bottom: 6px;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }

  &[data-state=${DayState.Selected}], &[data-state=${DayState.SelectionStart}], &[data-state=${DayState.SelectionEnd}] {
    --day-text: var(--brand-primary-text);
    --day-background: var(--brand-primary);
    cursor: default;
  }

  &[data-state=${DayState.Outside}] {
    --day-text: var(--text-disabled);
    --day-background: transparent;
  }

  &[data-state=${DayState.Disabled}] {
    --day-text: var(--text-disabled);
    --day-background: transparent;
    cursor: default;
    pointer-events: none;
  }

  &[data-state=${DayState.Inbetween}] {
    --day-text: var(--text);
    --day-background: var(--surface-hover-transparent);
    & > span {
      border-radius: 0;
    }
  }
  &[data-state=${DayState.SelectionStart}] > span {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &[data-state=${DayState.SelectionEnd}] > span {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
