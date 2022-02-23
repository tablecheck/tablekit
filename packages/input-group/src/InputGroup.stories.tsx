import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import { Input, InputSize } from '@tablecheck/tablekit-input';
import { ThemeProvider, Size } from '@tablecheck/tablekit-theme';
import { InputGroupProps } from 'InputGroup';

import { InputGroup } from './index';

export default {
  title: 'Components/Input Group',
  component: InputGroup,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Template: Story<InputGroupProps> = ({ ...args }) => (
  <ThemeProvider>
    <InputGroup {...args}>
      <Input placeholder="Code" size={InputSize.Regular} width={Size.Regular} />
      <Button>Submit</Button>
    </InputGroup>
    <br />
    <InputGroup {...args}>
      <Input placeholder="Code" size={InputSize.Regular} shouldFitContainer />
      <Button>Submit</Button>
    </InputGroup>
  </ThemeProvider>
);

export const InputButton = Template.bind({});
InputButton.args = {};
