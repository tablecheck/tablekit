import { Calendar, DateObj } from 'dayzed';
import * as React from 'react';

import { Day } from './Day';
import { BlankDayButton, DayOfWeekHeader, WeekRow } from './styled';
import { DayOfWeek } from './types';

const weekdays: DayOfWeek[] = [0, 1, 2, 3, 4, 5, 6];
const defaultWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function WeekHeader({
  calendar,
  renderDay = (dayOfWeek) => defaultWeekdays[dayOfWeek]
}: {
  calendar: Calendar;
  renderDay?: (dayOfWeek: DayOfWeek) => React.ReactNode;
}): JSX.Element {
  const firstWeek = calendar.weeks[0];
  const lastDateOfFirstWeek = firstWeek[firstWeek.length - 1] as DateObj;
  const lastDayOfWeek = lastDateOfFirstWeek.date.getDay();
  let firstDayOfWeek = lastDayOfWeek - 6;
  if (firstDayOfWeek < 0) {
    firstDayOfWeek += 7;
  }
  return (
    <WeekRow role="row">
      {weekdays.map((originalDayOfWeek) => {
        const dayOfWeek = ((originalDayOfWeek + firstDayOfWeek) %
          7) as DayOfWeek;
        return (
          <DayOfWeekHeader key={dayOfWeek} role="columnheader" scope="col">
            {renderDay(dayOfWeek)}
          </DayOfWeekHeader>
        );
      })}
    </WeekRow>
  );
}

export function Week({ week }: { week: (DateObj | '')[] }): JSX.Element {
  return (
    <WeekRow data-testid="week" role="row">
      {week.map((dateObj, index) => {
        if (!dateObj) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <BlankDayButton key={index} />
          );
        }
        return (
          <td key={dateObj.date.getTime()}>
            <Day dateObj={dateObj} />
          </td>
        );
      })}
    </WeekRow>
  );
}
