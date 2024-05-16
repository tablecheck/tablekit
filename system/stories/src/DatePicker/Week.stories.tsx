import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  useDatePickerContext,
  Root,
  Week
} from '@tablecheck/tablekit-react-datepicker';

export default {
  title: 'Components/DatePicker/Week',
  component: Week,
  parameters: {
    chromatic: { disableSnapshot: true },
    packageName: '@tablecheck/tablekit-react-datepicker',
    controls: {
      exclude: ['data-testid', 'description']
    }
  }
} as Meta;

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

const onDateSelected = action('onDateSelected');
const displayDate = new Date('2021-06-21');

const WeekTemplate = ({ ...args }) => {
  const { calendars } = useDatePickerContext();
  const week = calendars[0].weeks.slice(args.weekOfMonth)[0];
  return <Week {...args} week={week} />;
};

const Template: Story = ({ ...args }) => (
  <Wrapper>
    {args.description}
    <Root
      {...args}
      id="template"
      onDateSelected={(dateObject) => onDateSelected(dateObject)}
    >
      <WeekTemplate {...args} />
    </Root>
  </Wrapper>
);

export const Variants = () => (
  <>
    <Template
      date={displayDate}
      weekOfMonth={0}
      description={
        <p>
          The <span>Week</span> export of the date picker supports rendering one
          week of dates, it expects in a single array from the{' '}
          <span>calendar[].weeks</span> array.
        </p>
      }
    />
    <Template
      date={displayDate}
      selected={[new Date('2021-07-02')]}
      showOutsideDays
      weekOfMonth={-1}
      description={<p>Month End With Outside Days</p>}
    />
    <Template
      date={displayDate}
      selected={[new Date('2021-06-22')]}
      weekOfMonth={3}
      description={<p>Date Range With Partial Selection</p>}
    />
    <Template
      date={displayDate}
      selected={[new Date('2021-06-22')]}
      firstDayOfWeek={1}
      weekOfMonth={3}
      description={<p>Monday as First Day of Week</p>}
    />
  </>
);
