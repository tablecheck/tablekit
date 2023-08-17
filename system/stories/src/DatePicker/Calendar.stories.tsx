import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  Months,
  Root,
  StaticTitle,
  SelectableTitle,
  DatePickerWrapper
} from '@tablecheck/tablekit-react-datepicker';
import { addDays, addMonths, isSameDay } from 'date-fns';

import { Table, InfoWrapper } from './storyStyles';

export default {
  title: 'TableKit/Date Picker',
  component: Root,
  parameters: {
    layout: 'fullscreen',
    showStarImport: true,
    packageName: '@tablecheck/tablekit-react-datepicker',
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

const today = new Date('2023-03-14T16:47:18.502Z');

const twoMonthsLater = addMonths(today, 2);
const tomorrow = addDays(today, 1);

const Template: Story = (args: any) => (
  <Root {...args} onDateSelected={(dateObject) => onDateSelected(dateObject)}>
    <StaticTitle
      formatTitle={({ month, year }) =>
        `${months.find(({ value }) => value === month)?.name} ${year}`
      }
      nextMonthAriaLabel="Next Month"
      previousMonthAriaLabel="Previous Month"
    />
    <div style={{ display: 'flex', gap: 'var(--spacing-l2)' }}>
      <Months {...args} />
    </div>
  </Root>
);

export const MonthRange2 = Template.bind({});
MonthRange2.args = {
  monthsToDisplay: 2,
  selected: [tomorrow],
  showOutsideDays: true,
  minDate: today
};
MonthRange2.storyName = '2 Month Range';

const DemoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l5);

  & > div {
    --inner-padding: var(--spacing-l4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--info);
    border-radius: var(--border-radius-large);
    padding: var(--inner-padding);
    gap: var(--inner-padding);

    & > h4 {
      border-top-right-radius: var(--border-radius-large);
      border-top-left-radius: var(--border-radius-large);
      margin: calc(-1 * var(--inner-padding));
      margin-bottom: 0;
      padding: var(--spacing-l2);
      color: var(--info-text);
      background-color: var(--info-surface);
      justify-self: flex-start;
      border-bottom: 1px solid var(--info);
      text-align: center;
    }
  }
`;

const InformationTemplate: Story<{
  selected: Date;
  minDate: Date;
  maxDate: Date;
}> = (args) => {
  const { minDate } = args;
  return (
    <Root
      {...args}
      id="template"
      onDateSelected={(dateObject) => onDateSelected(dateObject)}
    >
      <InfoWrapper>
        <p>
          The <span>Date Picker</span> package is a set of wrappers and
          utilities around the <span>dayzed</span> library. The basic exports
          are:
        </p>
        <ul>
          <li>
            <span>Root</span> which must wrap everything and provides a context
          </li>
          <li>
            <span>Months</span> which renders the calendar grid (see Months
            stories for more options)
          </li>
          <li>
            <span>useMonthChange</span> - returns a function that can be passed
            the new month number (0 based) to viewed calendar
          </li>
          <li>
            <span>useYearChange</span> - returns a function that can be passed
            the new full year number to change the viewed calendar
          </li>
          <li>
            <span>useDatePickerContext</span> - returns the context from Root
            including all dayzed variables and relevant settings
          </li>
        </ul>
        <p>
          Though we do export the internals of the <span>Months</span> component
          if you want to override them it is not recommended as the internals
          are quite sensitive for a11y and keyboard interaction.
          <br />
          Supported customisation of the Months component is available through
          use of
          <span>isDateDisabled</span> prop, which is used to disable the day
          after tomorrow in the below examples.
        </p>
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
        <DemoRow>
          <div>
            <h4>Undecorated</h4>
            <DatePickerWrapper>
              <Months
                isDateDisabled={(date: Date) =>
                  isSameDay(date, addDays(today, 2))
                }
              />
            </DatePickerWrapper>
          </div>
          <div>
            <h4>Static Title</h4>
            <DatePickerWrapper>
              <StaticTitle
                formatTitle={({ month, year }) =>
                  `${months.find(({ value }) => value === month)?.name} ${year}`
                }
                nextMonthAriaLabel="Next Month"
                previousMonthAriaLabel="Previous Month"
              />
              <Months
                isDateDisabled={(date: Date) =>
                  isSameDay(date, addDays(today, 2))
                }
              />
            </DatePickerWrapper>
          </div>
          <div>
            <h4>Selectable Title</h4>
            <DatePickerWrapper>
              <SelectableTitle
                formatMonth={(month) =>
                  months.find(({ value }) => value === month)!.name
                }
                yearRange={[minDate.getFullYear(), minDate.getFullYear() + 4]}
                nextMonthAriaLabel="Next Month"
                previousMonthAriaLabel="Previous Month"
              />
              <Months
                isDateDisabled={(date: Date) =>
                  isSameDay(date, addDays(today, 2))
                }
              />
            </DatePickerWrapper>
          </div>
        </DemoRow>
      </InfoWrapper>
    </Root>
  );
};

export const Information = InformationTemplate.bind({});
Information.args = {
  selected: tomorrow,
  minDate: today,
  maxDate: twoMonthsLater
};
