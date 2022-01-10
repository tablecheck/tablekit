import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Typography } from '@tablecheck/tablekit-typography';

import { useCalendarContext, Root } from '../Root';

import { WeekHeader } from './index';

export default {
  title: 'Components/Calendar/WeekHeader',
  component: WeekHeader,
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

const WeekHeaderTemplate = ({ ...args }) => {
  const { calendars } = useCalendarContext();
  return <WeekHeader {...args} calendar={calendars[0]} />;
};

const Template: Story = ({ ...args }) => (
  <Wrapper>
    {args.description}
    <Root {...args} onDateSelected={(dateObject) => onDateSelected(dateObject)}>
      <WeekHeaderTemplate {...args} />
    </Root>
  </Wrapper>
);

export const BasicWeekHeader = Template.bind({});
BasicWeekHeader.args = {
  date: displayDate
};

export const WithMondayAsFirstDayOfWeek = Template.bind({});
WithMondayAsFirstDayOfWeek.args = {
  date: displayDate,
  firstDayOfWeek: 1,
  selected: new Date('2021-06-22')
};
