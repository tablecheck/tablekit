import styled from '@emotion/styled';
import { Select } from '@tablecheck/tablekit-react';
import * as React from 'react';

const BaseSelect = styled(Select)`
  min-width: var(--width);
  max-width: var(--width);
  width: var(--width);

  background-image: none !important;
  text-align: center;
  padding: var(--spacing-l3) !important;
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
      value={value}
      onChange={onChange}
      style={{ '--width': '117px' } as React.CSSProperties}
    >
      {months.map((month) => (
        <option value={month}>{formatMonth(month)}</option>
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
      value={value}
      onChange={onChange}
      style={{ '--width': '71px' } as React.CSSProperties}
    >
      {years.map((year) => (
        <option value={year}>{year}</option>
      ))}
    </BaseSelect>
  );
}
