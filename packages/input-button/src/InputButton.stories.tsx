import { Story, Meta } from '@storybook/react';
import { InputSize } from '@tablecheck/tablekit-input';

import { ItemGroup, ItemGroupOrientation } from '../../item';

import { InputButtonProps } from './types';

import { InputButton } from './index';

export default {
  title: 'Components/Input Button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        InputSize.Small,
        InputSize.Regular,
        InputSize.Regular2,
        InputSize.Large
      ]
    }
  },

  component: InputButton,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Template: Story<InputButtonProps> = ({ ...args }) => (
  <ItemGroup headingText={args.name}>
    <InputButton {...args}>{`${args.name} button`}</InputButton>
  </ItemGroup>
);

export const Small = Template.bind({});
Small.args = {
  name: 'small',
  value: 'small',
  id: 'small',
  size: InputSize.Small
};

export const Regular = Template.bind({});
Regular.args = {
  name: 'regular',
  value: 'regular',
  id: 'regular',
  size: InputSize.Regular
};

export const Regular2 = Template.bind({});
Regular2.args = {
  name: 'regular2',
  value: 'regular2',
  id: 'regular2',
  size: InputSize.Regular2
};

export const Large = Template.bind({});
Large.args = {
  name: 'large',
  value: 'large',
  id: 'large',
  size: InputSize.Large
};

const RadioTemplate: Story<InputButtonProps> = (args) => (
  <ItemGroup
    hasIndent
    orientation={ItemGroupOrientation.Horizontal}
    headingText="Smoking preference (radio)"
  >
    <InputButton {...args} id="none" value="none">
      None
    </InputButton>
    <InputButton {...args} id="smoking" value="smoking">
      Smoking
    </InputButton>
    <InputButton {...args} id="no-smoking" value="no-smoking">
      No smoking
    </InputButton>
  </ItemGroup>
);

export const Radio = RadioTemplate.bind({});
Radio.args = {
  type: 'radio',
  name: 'smoking-pref'
};

const CheckboxTemplate: Story<InputButtonProps> = () => (
  <>
    <ItemGroup
      hasIndent
      orientation={ItemGroupOrientation.Horizontal}
      headingText="Meals (checkbox)"
    >
      <InputButton id="breakfast" name="breakfast" value="breakfast">
        Breakfast
      </InputButton>
      <InputButton id="lunch" name="lunch" value="lunch">
        Lunch
      </InputButton>
      <InputButton id="tea" name="tea" value="tea">
        Tea
      </InputButton>
      <InputButton id="dinner" name="dinner" value="dinner">
        Dinner
      </InputButton>
      <InputButton id="night" name="night" value="night">
        Night
      </InputButton>
    </ItemGroup>
  </>
);

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {
  type: 'checkbox'
};

const OtherTemplate: Story<InputButtonProps> = (args) => (
  <>
    <ItemGroup
      hasIndent
      orientation={ItemGroupOrientation.Horizontal}
      headingText="Other"
    >
      <InputButton
        {...args}
        name="disabled"
        id="disabled"
        value="value1"
        isDisabled
      >
        Disabled
      </InputButton>
      <InputButton
        {...args}
        name="long-label"
        id="long-label"
        value="value2"
        isRequired
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </InputButton>
      <InputButton
        {...args}
        name="on-change"
        id="on-change"
        value="Hi there!"
        onChange={(event: any) => console.log(event.target.defaultValue)}
      >
        onChange
      </InputButton>
    </ItemGroup>
  </>
);

export const Other = OtherTemplate.bind({});
