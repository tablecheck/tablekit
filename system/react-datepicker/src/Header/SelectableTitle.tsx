import { useDatePickerContext, useMonthChange, useYearChange } from '../Root';

import { NextMonth, PreviousMonth } from './MonthArrowButtons';
import { MonthSelect, YearSelect } from './MonthYearSelect';
import { HeaderRow } from './styled';

interface Props {
  formatMonth: (month: number) => string;
  yearRange: [number, number];
  nextMonthAriaLabel: string;
  previousMonthAriaLabel: string;
}

export function SelectableTitle({
  formatMonth,
  yearRange,
  nextMonthAriaLabel,
  previousMonthAriaLabel
}: Props): JSX.Element {
  const { calendars } = useDatePickerContext();
  const handleMonthChange = useMonthChange();
  const handleYearChange = useYearChange();
  const { month, year } = calendars[0];
  return (
    <HeaderRow>
      <PreviousMonth aria-label={previousMonthAriaLabel} />
      <MonthSelect
        value={month}
        formatMonth={formatMonth}
        onChange={(event) => {
          handleMonthChange(parseInt(event.currentTarget.value, 10));
        }}
      />
      <YearSelect
        value={year}
        yearRange={yearRange}
        onChange={(event) => {
          handleYearChange(parseInt(event.currentTarget.value, 10));
        }}
      />
      <NextMonth aria-label={nextMonthAriaLabel} />
    </HeaderRow>
  );
}
