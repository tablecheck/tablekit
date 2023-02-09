import styled from '@emotion/styled';
import { DateObj, Calendar } from 'dayzed';
import * as React from 'react';

import { useDatePickerContext } from '../Root';
import { WeekHeader, Week } from '../Weeks';

const MonthsWrapper = styled.div`
  user-select: none;
`;

const DefaultMonthHeader = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-l2);
  font: var(--label);
`;

interface MonthAriaLabel {
  /**
   * @param calendar - current dayzed calender being rendered
   */
  (calendar: Calendar): string;
}

interface RenderMonthHeader {
  /**
   * @param calendar - current dayzed calender being rendered
   */
  (calendar: Calendar): React.ReactNode;
}

export function Months({
  calendarRoleDescription = 'Calendar',
  renderWeekdayHeader,
  renderMonthHeader,
  monthAriaLabel = (calendar) => `${calendar.year}-${calendar.month + 1}`,
  className,
  isDateDisabled
}: {
  calendarRoleDescription?: string;
  renderWeekdayHeader?: React.ComponentPropsWithoutRef<
    typeof WeekHeader
  >['renderDay'];
  renderMonthHeader?: RenderMonthHeader;
  monthAriaLabel?: MonthAriaLabel;
  className?: string;
  isDateDisabled?: (date: Date) => boolean;
}): JSX.Element {
  const { calendars, setHoveredDate, setFocusedDate, domId } =
    useDatePickerContext();
  return (
    <>
      {calendars.map((calendar) => {
        const id = `${domId}-${calendar.year}-${calendar.month}`;
        let monthHeader;
        const renderResult = renderMonthHeader?.(calendar);
        if (typeof renderResult === 'string') {
          monthHeader = (
            <DefaultMonthHeader aria-live="polite">
              {renderResult}
            </DefaultMonthHeader>
          );
        } else {
          monthHeader = renderResult || null;
        }
        return (
          <MonthsWrapper className={className} key={id}>
            {monthHeader}
            <table
              aria-label={monthAriaLabel(calendar)}
              aria-roledescription={calendarRoleDescription}
              role="grid"
              onMouseLeave={() => setHoveredDate(undefined)}
              onBlur={() => setFocusedDate(undefined)}
            >
              <thead>
                <WeekHeader
                  calendar={calendar}
                  renderDay={renderWeekdayHeader}
                />
              </thead>
              <tbody>
                {calendar.weeks.map((week) => (
                  <Week
                    key={(week[0] || (week[6] as DateObj)).date.getTime()}
                    week={week}
                    isDateDisabled={isDateDisabled}
                  />
                ))}
              </tbody>
            </table>
          </MonthsWrapper>
        );
      })}
    </>
  );
}
