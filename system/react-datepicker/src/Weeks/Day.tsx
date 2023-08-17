// adapted from https://github.com/deseretdigital/dayzed/blob/d75f5109756d1f8d81c78ad4a404eeac2959a4c3/docs/components/range.js#L90
import { useTheme } from '@emotion/react';
import { DateObj } from 'dayzed';
import * as React from 'react';

import { useDatePickerContext } from '../Root';
import { SelectedRange } from '../types';

import { formatDate, handleOnKeydown } from './handleOnKeydown';
import { BlankDayButton, DateButton } from './styled';
import { DayState } from './types';

function isBetween(date1: Date, date2: Date, testDate: Date): boolean {
  if (date1.getTime() < date2.getTime())
    return (
      date1.getTime() < testDate.getTime() &&
      date2.getTime() > testDate.getTime()
    );
  return (
    date2.getTime() < testDate.getTime() && date1.getTime() > testDate.getTime()
  );
}

function isInRange(
  selected: SelectedRange,
  date: undefined | Date,
  hoveredDate: undefined | Date,
  focusedDate: undefined | Date
): boolean {
  if (!Array.isArray(selected) || !date) return false;
  const [firstDate, secondDate] = selected;
  if (firstDate && secondDate) {
    return isBetween(firstDate, secondDate, date);
  }
  if (hoveredDate) {
    return isBetween(firstDate, hoveredDate, date);
  }
  if (focusedDate) {
    return isBetween(firstDate, focusedDate, date);
  }
  return false;
}

function getTabIndex(
  calendars: ReturnType<typeof useDatePickerContext>['calendars'],
  date: DateObj,
  selected: ReturnType<typeof useDatePickerContext>['selected'],
  hoveredDate: ReturnType<typeof useDatePickerContext>['hoveredDate'],
  buttonRef: React.RefObject<HTMLButtonElement>
): 0 | -1 {
  // this logic defines which date should be focussed if we tab into the calendar
  // the "target" focusable date should be undefined tab index, everything else is -1
  // there must be only one
  const selectable = 0;
  const unselectable = -1;
  if (date.selected || buttonRef.current === document.activeElement)
    return selectable;
  let firstVisibleDate;
  let lastVisibleDate;
  const { firstDayOfMonth } = calendars[0];
  const { lastDayOfMonth } = calendars[calendars.length - 1];
  for (let c = 0; c < calendars.length && !firstVisibleDate; c += 1) {
    for (
      let w = 0;
      w < calendars[c].weeks.length && !firstVisibleDate;
      w += 1
    ) {
      const week = calendars[c].weeks[w];
      for (let d = 0; d < week.length && !firstVisibleDate; d += 1) {
        const day = week[d];
        if (
          day &&
          day.selectable &&
          day.date.getTime() >= firstDayOfMonth.getTime()
        ) {
          firstVisibleDate = day.date;
        }
      }
    }
  }
  for (let c = calendars.length - 1; c >= 0 && !lastVisibleDate; c -= 1) {
    for (
      let w = calendars[c].weeks.length - 1;
      w >= 0 && !lastVisibleDate;
      w -= 1
    ) {
      const week = calendars[c].weeks[w];
      for (let d = week.length - 1; d >= 0 && !lastVisibleDate; d -= 1) {
        const day = week[d];
        if (
          day &&
          day.selectable &&
          day.date.getTime() <= lastDayOfMonth.getTime()
        ) {
          lastVisibleDate = day.date;
        }
      }
    }
  }
  if (!lastVisibleDate || !firstVisibleDate) return unselectable;
  lastVisibleDate.setHours(23, 59);
  if (
    selected &&
    !Array.isArray(selected) &&
    isBetween(firstVisibleDate, lastVisibleDate, selected)
  ) {
    return date.selected ? selectable : unselectable;
  }
  if (Array.isArray(selected)) {
    if (isBetween(firstVisibleDate, lastVisibleDate, selected[0])) {
      return date.date.getTime() === selected[0].getTime()
        ? selectable
        : unselectable;
    }
    if (
      selected[1] &&
      isBetween(firstVisibleDate, lastVisibleDate, selected[1])
    ) {
      return date.date.getTime() === selected[1].getTime()
        ? selectable
        : unselectable;
    }
  }
  if (hoveredDate) {
    return hoveredDate.getTime() === date.date.getTime()
      ? selectable
      : unselectable;
  }
  if (isBetween(firstVisibleDate, lastVisibleDate, new Date())) {
    return date.today ? selectable : unselectable;
  }
  return date.date.getTime() === firstVisibleDate.getTime()
    ? selectable
    : unselectable;
}

export function useDayProps(
  dateObj: DateObj | '',
  isDateDisabled?: (date: Date) => boolean
): null | React.ComponentPropsWithRef<typeof DateButton> {
  const {
    domId,
    calendars,
    getBackProps,
    getDateProps,
    getForwardProps,
    selected,
    hoveredDate,
    setHoveredDate,
    focusedDate,
    setFocusedDate,
    composeDateAria,
    firstDayOfWeek,
    maxDate,
    minDate
  } = useDatePickerContext();
  const theme = useTheme();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  if (!dateObj) return null;
  const {
    date,
    selectable: isSelectable,
    selected: isSelected,
    today: isToday,
    nextMonth: isNextMonth,
    prevMonth: isPrevMonth
  } = dateObj as DateObj;
  const isHovered = hoveredDate && hoveredDate.getTime() === date.getTime();
  const isFocused = focusedDate && focusedDate.getTime() === date.getTime();

  let dateState = DayState.Default;
  if (!isSelectable || isDateDisabled?.(date)) dateState = DayState.Disabled;
  else if (isSelected) {
    dateState = DayState.Selected;
    if (Array.isArray(selected)) {
      if (selected.length === 2) {
        dateState =
          selected[0].getTime() === date.getTime()
            ? DayState.SelectionStart
            : DayState.SelectionEnd;
      } else if (hoveredDate && hoveredDate.getTime() !== date.getTime()) {
        dateState =
          hoveredDate.getTime() > date.getTime()
            ? DayState.SelectionStart
            : DayState.SelectionEnd;
      } else if (
        !hoveredDate &&
        focusedDate &&
        focusedDate.getTime() !== date.getTime()
      ) {
        dateState =
          focusedDate.getTime() > date.getTime()
            ? DayState.SelectionStart
            : DayState.SelectionEnd;
      }
    }
  } else if (
    (isHovered || (!hoveredDate && isFocused)) &&
    Array.isArray(selected) &&
    selected[0] &&
    !selected[1]
  ) {
    dateState =
      selected[0].getTime() > date.getTime()
        ? DayState.SelectionStart
        : DayState.SelectionEnd;
  } else if (isInRange(selected, date, hoveredDate, focusedDate))
    dateState = DayState.Inbetween;
  else if (isNextMonth || isPrevMonth) dateState = DayState.Outside;

  const dayOfWeek = date.getDay();
  const defaultWeekdaysLong = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const dateProps = getDateProps({
    dateObj: dateObj as DateObj,
    'aria-label': `${defaultWeekdaysLong[dayOfWeek]} ${composeDateAria(date)}`,
    onMouseEnter: () => {
      setHoveredDate(date);
    },
    onFocus: () => {
      setFocusedDate(date);
    },
    onKeyDown: (event) => {
      const isHandled = handleOnKeydown(
        domId,
        event,
        date,
        buttonRef,
        theme,
        (offset, passthroughEvent) =>
          getBackProps({ calendars, offset }).onClick(passthroughEvent),
        (offset, passthroughEvent) =>
          getForwardProps({ calendars, offset }).onClick(passthroughEvent),
        () => dateProps.onClick(event),
        firstDayOfWeek,
        maxDate,
        minDate
      );
      if (isHandled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  });
  return {
    'data-testid': 'day',
    'data-state': dateState,
    'data-date': formatDate(date),
    'data-today': isToday.toString() as 'true' | 'false',
    'data-dow': dayOfWeek,
    tabIndex: getTabIndex(calendars, dateObj, selected, hoveredDate, buttonRef),
    ref: buttonRef,
    ...dateProps,
    'aria-pressed': undefined,
    'aria-roledescription': 'Date Button',
    'aria-selected': isSelected ? 'true' : undefined,
    children: (
      <span role="presentation" aria-hidden="true">
        {date.getDate()}
      </span>
    )
  };
}

export function Day({
  dateObj,
  isDateDisabled
}: {
  dateObj: DateObj;
  isDateDisabled?: (date: Date) => boolean;
}): JSX.Element {
  const props = useDayProps(dateObj, isDateDisabled);
  if (!props) return <BlankDayButton data-testid="blank-day" />;
  return <DateButton {...props} />;
}
