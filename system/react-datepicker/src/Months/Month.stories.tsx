import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { addDays, isSameDay } from 'date-fns';
import { Calendar } from 'dayzed';

import { Root } from '../Root';

import { Months } from './index';

export default {
  title: 'TableKit/DatePicker/Months',
  component: Months,
  parameters: {
    chromatic: { disableSnapshot: true },
    packageName: '@tablecheck/tablekit-react-datepicker',
    controls: {
      exclude: ['data-testid', 'description']
    }
  },
  argTypes: {
    renderMonthHeader: {
      control: false
    },
    monthAriaLabel: {
      control: false
    }
  }
} as Meta;

const today = new Date('2023-03-14T16:47:18.502Z');

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 94%;
  p {
    padding-bottom: 10px;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 3px 5px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
`;

const MonthsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledMonths = styled(Months)`
  margin: 10px;
`;

const onDateSelected = action('onDateSelected');

const Template: Story = ({ ...args }) => (
  <Wrapper>
    {args.description}
    <Root
      {...args}
      id="template"
      onDateSelected={(dateObject) => onDateSelected(dateObject)}
    >
      <MonthsWrapper>
        <StyledMonths {...args} />
      </MonthsWrapper>
    </Root>
  </Wrapper>
);

const Template2: Story = ({ ...args }) => (
  <Wrapper>
    {args.description}
    <Root
      id="template"
      onDateSelected={(dateObject) => onDateSelected(dateObject)}
      composeDateAria={(date) => {
        const day = date.getDate();
        if (day === 1) return '1st';
        if (day === 2) return '2nd';
        if (day === 3) return '3rd';
        return `${day}th`;
      }}
    >
      <MonthsWrapper>
        <StyledMonths {...args} />
      </MonthsWrapper>
    </Root>
  </Wrapper>
);

export const Variants = () => (
  <>
    <Template
      description={
        <>
          <p>
            The <span>Months</span> export of the date picker supports rendering
            the multiple months, it expects the same properties that{' '}
            <span>useDayzed</span> will return.
          </p>
          <p>
            The one extra addition that is of the <span>isDateDisabled</span>{' '}
            prop which can be used to disable a particular date
          </p>
          <p>
            Note that the className passed to Months is applied to all the Month
            children as there is no top level wrapper, see{' '}
            <span>renderMonthHeader</span> for an example.
          </p>
        </>
      }
      isDateDisabled={(date: Date) => isSameDay(date, addDays(today, 2))}
    />
    <Template2
      description={
        <p>
          There are several props available for i18n/a11y purposes as outlined
          below, it is recommended you correctly implement these according to
          your application. Try turning your screen reader on and
          tabbing/clicking into the following examples to see the differences
          between them.
        </p>
      }
    />
    <Template
      calendarRoleDescription="A Nice Calendar"
      monthAriaLabel={(calendar: Calendar) =>
        `${calendar.year}-${calendar.month + 1}`
      }
      description={
        <p>
          For <span>monthAriaLabel</span> is used for a11y compatibility, it is
          used to indicate to the user which month and year is currently being
          displayed. The default is to display the year and month numerically
          but it is highly recommended this is localised in the application to
          assist users.
        </p>
      }
    />
    <Template
      renderMonthHeader={(calendar: Calendar) => {
        const { year } = calendar;
        const { month } = calendar;
        return `${year}-${month + 1}`;
      }}
      renderWeekdayHeader={(dayOfWeek: number) => `Day ${dayOfWeek + 1}`}
      monthsToDisplay={2}
      description={
        <p>
          Optionally month and week header can be customosed to give visual aid
          to multiple calendars.
        </p>
      }
    />
  </>
);
