import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import { RadioProps } from './types';

import { Radio } from './index';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const DefaultTemplate: Story<RadioProps> = ({ ...args }) => {
  const [checked, setChecked] = useState(0);
  return (
    <>
      <Radio {...args} isChecked={checked === 1} onChange={() => setChecked(1)}>
        <>First</>
      </Radio>
      <Radio {...args} isChecked={checked === 2} onChange={() => setChecked(2)}>
        <>Second</>
      </Radio>
    </>
  );
};

export const Default = DefaultTemplate.bind({});

const Template: Story<RadioProps> = ({ ...args }) => (
  <Radio {...args}>{args.children}</Radio>
);

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
  children: <>Required</>
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  children: <>Checked</>
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: <>Disabled</>
};

export const Multilined = Template.bind({});
Multilined.args = {
  children: (
    <ul>
      <li>This text box</li>
      <li>has multiple lines of code</li>
      <li>
        and actually has quite a lot of content just to fill out the space like
        certain clients do in TableCheck
      </li>
    </ul>
  )
};
