import { Theme } from '@emotion/react';
import {
  getWeekOfMonth,
  isSameMonth,
  addMonths,
  differenceInCalendarMonths,
  differenceInDays,
  endOfWeek,
  startOfWeek,
  getDay,
  setDay
} from 'date-fns';
import * as React from 'react';

import { DayOfWeek, DayState } from './types';

export interface GoBackForwardFunction {
  (offsetMonths: number, event: React.KeyboardEvent<HTMLButtonElement>): void;
}

// see https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html

enum KeyCode {
  Space = ' ',
  Enter = 'Enter',
  UpArrow = 'ArrowUp',
  DownArrow = 'ArrowDown',
  Home = 'Home',
  End = 'End',
  PageUp = 'PageUp',
  PageDown = 'PageDown'
}

enum LtrKeyCode {
  NextArrow = 'ArrowRight',
  PrevArrow = 'ArrowLeft'
}

enum RtlKeyCode {
  NextArrow = 'ArrowLeft',
  PrevArrow = 'ArrowRight'
}

function constrainDate(
  unsafeDate: Date,
  minDate: undefined | Date,
  maxDate: undefined | Date
): Date {
  const safeDate = new Date(unsafeDate);
  safeDate.setHours(12, 0, 0, 0);
  if (minDate && safeDate.getTime() < minDate.getTime())
    return new Date(minDate);
  if (maxDate && safeDate.getTime() > maxDate.getTime())
    return new Date(maxDate);
  return safeDate;
}

function addDays(unsafeDate: Date, offset: number): Date {
  const safeDate = new Date(unsafeDate);
  safeDate.setHours(12, 0, 0, 0);
  safeDate.setDate(safeDate.getDate() + offset);
  return safeDate;
}

function focus(domId: string, focusSelector: string): boolean {
  const element = document.querySelector(
    `#${domId} ${focusSelector}:not([data-state=${DayState.Disabled}])`
  ) as HTMLButtonElement | undefined;
  if (element) {
    element.focus();
    return true;
  }
  return false;
}

function goAndFocus(
  domId: string,
  goFunc: GoBackForwardFunction,
  focusSelector: string,
  event: React.KeyboardEvent<HTMLButtonElement>,
  months: number
): void {
  goFunc(months, event);
  window.requestAnimationFrame(() => {
    // next animation frame should have the new month/year available
    focus(domId, focusSelector);
  });
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

/**
 * Returns true if handled, false if not handled
 * @param domId
 * @param event
 * @param date
 * @param buttonRef
 * @param theme
 * @param goBack
 * @param goForward
 * @param onClick
 */
export function handleOnKeydown(
  domId: string,
  event: React.KeyboardEvent<HTMLButtonElement>,
  date: Date,
  buttonRef: React.RefObject<HTMLButtonElement>,
  theme: Theme,
  goBack: GoBackForwardFunction,
  goForward: GoBackForwardFunction,
  onClick: VoidFunction,
  weekStartsOn?: DayOfWeek,
  maxDate?: Date,
  minDate?: Date
): boolean {
  if (!buttonRef.current) return false;
  const { key, shiftKey: isShiftKeyPressed } = event;
  if (key === KeyCode.Space || key === KeyCode.Enter) {
    // select currently focused date
    onClick();
    return true;
  }

  const safeDate = new Date(date);
  safeDate.setHours(12, 0, 0, 0);

  function moveDays(offset: number): void {
    const targetDate = constrainDate(
      addDays(safeDate, offset),
      minDate,
      maxDate
    );
    const focusSelector = `[data-date="${formatDate(targetDate)}"]`;
    if (!isSameMonth(targetDate, safeDate)) {
      const monthOffset = differenceInCalendarMonths(targetDate, safeDate);
      goAndFocus(
        domId,
        monthOffset > 0 ? goForward : goBack,
        focusSelector,
        event,
        Math.abs(monthOffset)
      );
    } else {
      focus(domId, focusSelector);
    }
  }

  if (
    (theme.isRtl && key === RtlKeyCode.NextArrow) ||
    (!theme.isRtl && key === LtrKeyCode.NextArrow)
  ) {
    moveDays(1);
    return true;
  }
  if (
    (theme.isRtl && key === RtlKeyCode.PrevArrow) ||
    (!theme.isRtl && key === LtrKeyCode.PrevArrow)
  ) {
    moveDays(-1);
  }
  if (key === KeyCode.UpArrow) {
    moveDays(-7);
    return true;
  }
  if (key === KeyCode.DownArrow) {
    moveDays(7);
    return true;
  }
  if (key === KeyCode.Home) {
    // go to beginning of current week
    const targetDate = startOfWeek(safeDate, { weekStartsOn });
    moveDays(differenceInDays(targetDate, safeDate));
    return true;
  }
  if (key === KeyCode.End) {
    const targetDate = endOfWeek(safeDate, { weekStartsOn });
    moveDays(differenceInDays(targetDate, safeDate));
    return true;
  }

  function moveMonths(monthsOffset: number): void {
    const currentWeek = getWeekOfMonth(safeDate, { weekStartsOn });
    const currentDayOfWeek = getDay(safeDate);
    const absoluteTargetDate = addMonths(safeDate, monthsOffset);
    // first shift us onto correct day of week
    let targetDate = setDay(absoluteTargetDate, currentDayOfWeek, {
      weekStartsOn
    });
    // if this shifts us to a different month, shift back/forward one week
    const monthDiff = differenceInCalendarMonths(
      targetDate,
      absoluteTargetDate
    );
    if (monthDiff < 0) targetDate = addDays(targetDate, 7);
    else if (monthDiff > 0) targetDate = addDays(targetDate, -7);
    const targetWeek = getWeekOfMonth(targetDate, { weekStartsOn });
    if (targetWeek > currentWeek && targetDate.getDate() > 7)
      targetDate = addDays(targetDate, -7);
    else if (
      targetWeek < currentWeek &&
      differenceInCalendarMonths(addDays(targetDate, 7), targetDate) === 0
    )
      targetDate = addDays(targetDate, 7);
    return moveDays(
      differenceInDays(constrainDate(targetDate, minDate, maxDate), safeDate)
    );
  }

  const months = isShiftKeyPressed ? 12 : 1;
  if (key === KeyCode.PageUp) {
    moveMonths(-months);
    return true;
  }
  if (key === KeyCode.PageDown) {
    moveMonths(months);
    return true;
  }
  return false;
}
