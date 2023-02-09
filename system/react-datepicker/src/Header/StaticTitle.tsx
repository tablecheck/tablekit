import styled from '@emotion/styled';

import { useDatePickerContext } from '../Root';

import { NextMonth, PreviousMonth } from './MonthArrowButtons';
import { HeaderRow } from './styled';

const TitleText = styled.h2`
  font: var(--label);
  text-align: center;
`;

const Titles = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-around;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
`;

interface Props {
  formatTitle: (options: { month: number; year: number }) => string;
  nextMonthAriaLabel: string;
  previousMonthAriaLabel: string;
}

export function StaticTitle({
  formatTitle,
  nextMonthAriaLabel,
  previousMonthAriaLabel
}: Props): JSX.Element {
  const { calendars } = useDatePickerContext();
  return (
    <HeaderRow>
      <PreviousMonth aria-label={previousMonthAriaLabel} />
      <Titles>
        {calendars.map(({ month, year }) => (
          <TitleText key={`${month}-${year}`} aria-live="polite">
            {formatTitle({ month, year })}
          </TitleText>
        ))}
      </Titles>
      <NextMonth aria-label={nextMonthAriaLabel} />
    </HeaderRow>
  );
}
