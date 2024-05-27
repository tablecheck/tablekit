import { startOfDay, endOfDay } from 'date-fns';
import { useDayzed, Props as DayzedProps } from 'dayzed';
import * as React from 'react';

import { SelectedRange } from './types';

type Props = Omit<DayzedProps, 'children' | 'render'> & {
  composeDateAria?: (date: Date) => string;
  children: React.ReactNode;
  id: string;
};

type ContextProps = ReturnType<typeof useDayzed> &
  Pick<Props, 'date' | 'firstDayOfWeek'> & {
    domId: string;
    hoveredDate: InteractionDate;
    setHoveredDate: (date: InteractionDate) => void;
    focusedDate: InteractionDate;
    setFocusedDate: (date: InteractionDate) => void;
    selected: SelectedRange;
    composeDateAria: (date: Date) => string;
    minDate: undefined | Date;
    maxDate: undefined | Date;
  };

const RootContext = React.createContext<null | ContextProps>(null);

export function useDatePickerContext(): ContextProps {
  const context = React.useContext(RootContext);
  if (!context)
    throw new Error(
      '@tablecheck/tablekit-react-datepicker hook or component was used outside of Root element'
    );
  return context;
}

export function useMonthChange(): (newMonth: number) => void {
  const context = useDatePickerContext();
  return (newMonth: number) => {
    const currentMonth = context.calendars[0].firstDayOfMonth.getMonth();
    if (newMonth < currentMonth)
      context
        .getBackProps({
          calendars: context.calendars,
          offset: currentMonth - newMonth
        })
        .onClick({ defaultPrevented: false });
    else
      context
        .getForwardProps({
          calendars: context.calendars,
          offset: newMonth - currentMonth
        })
        .onClick({ defaultPrevented: false });
  };
}

export function useYearChange(): (newYear: number) => void {
  const context = useDatePickerContext();
  return (newYear: number) => {
    const currentYear = context.calendars[0].firstDayOfMonth.getFullYear();
    if (newYear < currentYear)
      context
        .getBackProps({
          calendars: context.calendars,
          offset: (currentYear - newYear) * 12
        })
        .onClick({ defaultPrevented: false });
    else
      context
        .getForwardProps({
          calendars: context.calendars,
          offset: (newYear - currentYear) * 12
        })
        .onClick({ defaultPrevented: false });
  };
}

function composeDate(date: Date | undefined) {
  if (!date) return date;
  const safeDate = new Date(date.getTime());
  safeDate.setHours(0, 0, 0, 0);
  return safeDate;
}

type InteractionDate = undefined | Date;
function interactionDateReducer(
  prevState: InteractionDate,
  event: InteractionDate
): InteractionDate {
  return composeDate(event);
}

function composeSelectedRange(
  selectedArgument: Date | Date[] | undefined
): SelectedRange {
  const selectedRange = Array.isArray(selectedArgument)
    ? selectedArgument
    : [selectedArgument];

  if (Array.isArray(selectedArgument)) {
    return (selectedRange || []).map((date) =>
      composeDate(date)
    ) as SelectedRange;
  }
  return composeDate(selectedArgument);
}

export const Root = React.forwardRef<HTMLDivElement, Props>(
  (props: React.HTMLAttributes<HTMLDivElement> & Props, ref): JSX.Element => {
    const {
      date,
      maxDate,
      minDate,
      monthsToDisplay,
      firstDayOfWeek,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      showOutsideDays,
      selected: unsafeSelected,
      offset,
      onOffsetChanged,
      onDateSelected,
      id: domId,
      composeDateAria,
      ...htmlProps
    } = props;

    const selected = composeSelectedRange(unsafeSelected);

    let safeMaxDate: undefined | Date;
    if (maxDate) {
      safeMaxDate = endOfDay(maxDate);
    }
    let safeMinDate: undefined | Date;
    if (minDate) {
      safeMinDate = startOfDay(minDate);
    }
    const dayzed = useDayzed({
      date,
      maxDate: safeMaxDate,
      minDate: safeMinDate,
      monthsToDisplay,
      firstDayOfWeek,
      showOutsideDays,
      selected,
      offset,
      onOffsetChanged,
      onDateSelected
    });

    const [hoveredDate, setHoveredDate] = React.useReducer(
      interactionDateReducer,
      undefined
    );
    const [focusedDate, setFocusedDate] = React.useReducer(
      interactionDateReducer,
      undefined
    );
    const contextValue = React.useMemo(
      () => ({
        ...dayzed,
        date,
        firstDayOfWeek,
        selected,
        domId,
        hoveredDate,
        setHoveredDate,
        focusedDate,
        setFocusedDate,
        composeDateAria:
          composeDateAria || ((ariaDate: Date) => `${ariaDate.getDate()}`),
        maxDate: safeMaxDate,
        minDate: safeMinDate
      }),
      [
        composeDateAria,
        date,
        dayzed,
        domId,
        firstDayOfWeek,
        focusedDate,
        hoveredDate,
        safeMaxDate,
        safeMinDate,
        selected
      ]
    );
    return (
      <RootContext.Provider value={contextValue}>
        <div {...htmlProps} id={domId} ref={ref} />
      </RootContext.Provider>
    );
  }
);
