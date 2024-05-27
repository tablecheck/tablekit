import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  useDatePickerContext,
  Root,
  WeekHeader
} from '@tablecheck/tablekit-react-datepicker';

export default {
  title: 'Components/DatePicker/WeekHeader',
  component: WeekHeader,
  parameters: {
    chromatic: { disableSnapshot: true },
    packageName: '@tablecheck/tablekit-react-datepicker',
    variants: ['Default', 'Monday as First Day'],
    controls: {
      exclude: ['data-testid', 'description']
    }
  }
} as Meta;

const onDateSelected = action('onDateSelected');
const displayDate = new Date('2021-06-21');

const WeekHeaderTemplate = ({ ...args }) => {
  const { calendars } = useDatePickerContext();
  return <WeekHeader {...args} calendar={calendars[0]} />;
};

const Template: Story = ({ ...args }) => (
  <Root
    {...args}
    id="template"
    onDateSelected={(dateObject) => onDateSelected(dateObject)}
  >
    <WeekHeaderTemplate {...args} />
  </Root>
);

export const Variants = () => (
  <>
    <Template date={displayDate} />
    <Template
      date={displayDate}
      firstDayOfWeek={1}
      selected={new Date('2021-06-22')}
    />
  </>
);
