import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Typography } from '@tablecheck/tablekit-typography';

import { useCalendarContext, Root } from '../Root';

import { Week } from './index';

export default {
  title: 'Components/Calendar/Week',
  component: Week,
  parameters: {
    controls: {
      exclude: ['data-testid', 'description']
    }
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
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

const onDateSelected = action('onDateSelected');
const displayDate = new Date('2021-06-21');

const WeekTemplate = ({ ...args }) => {
  const { calendars } = useCalendarContext();
  const week = calendars[0].weeks.slice(args.weekOfMonth)[0];
  return <Week {...args} week={week} />;
};

const Template: Story = ({ ...args }) => (
  <Wrapper>
    {args.description}
    <Root {...args} onDateSelected={(dateObject) => onDateSelected(dateObject)}>
      <WeekTemplate {...args} />
    </Root>
  </Wrapper>
);

export const MonthStartWithoutOutsideDays = Template.bind({});
MonthStartWithoutOutsideDays.args = {
  date: displayDate,
  weekOfMonth: 0,
  description: (
    <p>
      The <span>Week</span> export of the date picker supports rendering one
      week of dates, it expects in a single array from the{' '}
      <span>calendar[].weeks</span> array.
    </p>
  )
};

export const MonthEndWithOutsideDays = Template.bind({});
MonthEndWithOutsideDays.args = {
  date: displayDate,
  selected: [new Date('2021-07-02')],
  showOutsideDays: true,
  weekOfMonth: -1
};

export const DateRange = Template.bind({});
DateRange.args = {
  date: displayDate,
  selected: [new Date('2021-06-22'), new Date('2021-06-24')],
  weekOfMonth: 3
};

export const DateRangePartialSelection = Template.bind({});
DateRangePartialSelection.args = {
  date: displayDate,
  selected: [new Date('2021-06-22')],
  weekOfMonth: 3
};

export const MondayAsFirstDayOfWeek = Template.bind({});
MondayAsFirstDayOfWeek.args = {
  date: displayDate,
  firstDayOfWeek: 1,
  selected: new Date('2021-06-22'),
  weekOfMonth: 3
};
