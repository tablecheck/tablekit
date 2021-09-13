import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import { useState } from 'react';

import { ButtonGroup, ButtonGroupPropsType } from './index';

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const items: any[] = [
  { label: 'First content', value: 1 },
  { label: 'Second content content content', value: 2 },
  { label: 'Third content', value: 3 },
  { label: 'content', value: 5 },
  { label: 'ad content', value: 32 },
  { label: 'asd content', value: 31 },
  { label: 'asd content', value: 33, iconBefore: <Icon icon={faCircle} /> },
  { label: 'sad content', value: 34 },
  { label: 'Third', value: 4 }
];

const Template: Story<ButtonGroupPropsType> = (args) => {
  const [values, setValues] = useState<any>([]);
  return (
    <ButtonGroup
      {...args}
      values={values}
      onChange={(newValues) => {
        setValues(newValues);
      }}
    />
  );
};

export const Regular = Template.bind({});
Regular.args = {
  isValueRequired: true,
  isMulti: true,
  items
};
