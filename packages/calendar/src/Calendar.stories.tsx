import styled from '@emotion/styled';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  Button,
  ButtonAppearance,
  ButtonShape
} from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Calendar } from 'dayzed';
import { useRef, useEffect, MutableRefObject } from 'react';

import { Table, MonthsWrapper, Top, Wrapper, InfoWrapper } from './storyStyles';

import {
  Months,
  Root,
  useCalendarContext,
  useMonthChange,
  useYearChange
} from './index';

export default {
  title: 'Components/Calendar',
  component: Root,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const onDateSelected = action('onDateSelected');

const months = [
  {
    name: 'January',
    value: 0
  },
  {
    name: 'February',
    value: 1
  },
  {
    name: 'March',
    value: 2
  },
  {
    name: 'April',
    value: 3
  },
  {
    name: 'May',
    value: 4
  },
  {
    name: 'June',
    value: 5
  },
  {
    name: 'July',
    value: 6
  },
  {
    name: 'August',
    value: 7
  },
  {
    name: 'September',
    value: 8
  },
  {
    name: 'October',
    value: 9
  },
  {
    name: 'November',
    value: 10
  },
  {
    name: 'December',
    value: 11
  }
];

function MonthSelect() {
  const handler = useMonthChange();
  const { calendars } = useCalendarContext();
  return (
    <select
      value={calendars[0].firstDayOfMonth.getMonth()}
      onChange={(event: any) => {
        handler(event.currentTarget.value);
      }}
    >
      {months.map((month) => (
        <option key={month.value} value={month.value}>
          {month.name}
        </option>
      ))}
    </select>
  );
}

function YearSelect() {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const handler = useYearChange();
  const { calendars } = useCalendarContext();
  const currentYear = calendars[0].firstDayOfMonth.getFullYear();
  useEffect(() => {
    if (!ref.current) return;
    ref.current.value = String(currentYear);
  }, [currentYear]);
  return (
    <input
      ref={ref}
      defaultValue={currentYear}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          const newValue = Number.parseInt(event.currentTarget.value, 10);
          if (!Number.isNaN(newValue)) handler(newValue);
        }
      }}
    />
  );
}

function Next() {
  const { calendars, getForwardProps } = useCalendarContext();
  return (
    <Button
      appearance={ButtonAppearance.Subtle}
      shape={ButtonShape.Circular}
      {...getForwardProps({ calendars, offset: 1 })}
      iconBefore={<Icon icon={faChevronRight} />}
    />
  );
}

function Prev() {
  const { calendars, getBackProps } = useCalendarContext();
  return (
    <Button
      appearance={ButtonAppearance.Subtle}
      shape={ButtonShape.Circular}
      {...getBackProps({ calendars, offset: 1 })}
      iconBefore={<Icon icon={faChevronLeft} />}
    />
  );
}

const oneMonthLater = new Date();
oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

const StyledRoot = styled(Root)`
  height: 100%;
`;

const InfoTemplate: Story = () => (
  <InfoWrapper>
    <p>
      The <span>Calendar</span> component is a set of wrappers and utilities
      around the <span>dayzed</span> library. The basic exports are:
    </p>
    <ul>
      <li>
        <span>Root</span> which must wrap everything and provides a context
      </li>
      <li>
        <span>Months</span> which renders the calendar grid (see Months stories
        for more options)
      </li>
      <li>
        <span>useMonthChange</span> - returns a function that can be passed the
        new month number (0 based) to viewed calendar
      </li>
      <li>
        <span>useYearChange</span> - returns a function that can be passed the
        new full year number to change the viewed calendar
      </li>
      <li>
        <span>useCalendarContext</span> - returns the context from Root
        including all dayzed variables and relevant settings
      </li>
    </ul>
    <p>
      Though we do export the internals of the <span>Months</span> component if
      you want to override them it is not recommended as the internals are quite
      sensitive for a11y and keyboard interaction.
    </p>
  </InfoWrapper>
);

export const Information = InfoTemplate.bind({});

const Template: Story = (args: any) => (
  <Wrapper>
    <StyledRoot
      {...args}
      onDateSelected={(dateObject) => onDateSelected(dateObject)}
    >
      <Top>
        <Prev />
        <div>
          <MonthSelect />
          <YearSelect />
        </div>
        <Next />
      </Top>
      <MonthsWrapper>
        <Months {...args} />
      </MonthsWrapper>
    </StyledRoot>
  </Wrapper>
);

export const MonthRange2 = Template.bind({});
MonthRange2.args = {
  monthsToDisplay: 2,
  selected: [oneMonthLater]
};
MonthRange2.storyName = '2 Month Range';

export const showOutsideDays = Template.bind({});
showOutsideDays.args = {
  monthsToDisplay: 2,
  selected: [tomorrow],
  showOutsideDays: true,
  minDate: new Date()
};

export const withCustomMonthHeader = Template.bind({});
withCustomMonthHeader.args = {
  selected: [tomorrow, nextWeek],
  showOutsideDays: true,
  monthsToDisplay: 2,
  renderMonthHeader: (calendar: Calendar) =>
    `Header: ${months[calendar.month].name}`,
  monthAriaLabel: (calendar: Calendar) =>
    `${calendar.year}-${calendar.month + 1}`
};
withCustomMonthHeader.storyName = 'With custom month header';

const SingleTemplate: Story = (args: any) => (
  <Root {...args} onDateSelected={(dateObject) => onDateSelected(dateObject)}>
    <InfoWrapper>
      <p>
        You can add any markup you desire within the Root, in this case press
        tab and try out keyboard navigation.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Key Press</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="200">Space / Enter</td>
            <td>Select current date</td>
          </tr>
          <tr>
            <td>Arrow keys</td>
            <td>Move to neigbouring date</td>
          </tr>
          <tr>
            <td>Home / End</td>
            <td>Move to first/last day of week</td>
          </tr>
          <tr>
            <td>Page-up / Page-down</td>
            <td>
              Move to next/previous month. Hold shift to go to next/previous
              year.
            </td>
          </tr>
        </tbody>
      </Table>
      <Months />
    </InfoWrapper>
  </Root>
);

export const SingleDay = SingleTemplate.bind({});
SingleDay.args = {
  selected: tomorrow,
  minDate: new Date(),
  maxDate: oneMonthLater
};
SingleDay.storyName = 'Single Day with extra markup';
