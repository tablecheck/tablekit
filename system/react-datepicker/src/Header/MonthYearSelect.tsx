import styled from '@emotion/styled';
import { selectStyledComponents } from '@tablecheck/tablekit-react';
import * as React from 'react';

const BaseSelect = styled(selectStyledComponents.Base)`
  min-width: var(--tk-date-select-width);
  max-width: var(--tk-date-select-width);
  width: var(--tk-date-select-width);

  background-image: none !important;
  text-align: center;
  padding: calc(var(--tk-input-vertical-padding) - var(--tk-input-border-width))
    var(--tk-input-horizontal-padding);
`;

interface Props {
  value: number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function MonthSelect({
  value,
  onChange,
  formatMonth
}: Props & { formatMonth: (month: number) => string }): JSX.Element {
  return (
    <BaseSelect
      data-size="small"
      value={value}
      onChange={onChange}
      style={{ '--tk-date-select-width': '117px' } as React.CSSProperties}
    >
      {months.map((month) => (
        <option key={month} value={month}>
          {formatMonth(month)}
        </option>
      ))}
    </BaseSelect>
  );
}

export function YearSelect({
  value,
  onChange,
  yearRange
}: Props & { yearRange: [number, number] }): JSX.Element {
  const [startYear, endYear] = yearRange;
  const years = React.useMemo(() => {
    const range = [];
    for (let i = startYear; i < endYear; i += 1) {
      range.push(i);
    }
    return range;
  }, [startYear, endYear]);
  return (
    <BaseSelect
      data-size="small"
      value={value}
      onChange={onChange}
      style={{ '--tk-date-select-width': '71px' } as React.CSSProperties}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </BaseSelect>
  );
}
