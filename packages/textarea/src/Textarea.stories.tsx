import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';

import { TextAreaProps } from './types';

import { Textarea } from './index';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  },
  argTypes: {
    iconBefore: {
      control: false
    },
    iconAfter: {
      control: false
    },
    message: {
      control: false
    }
  }
} as Meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
`;

const Description = styled.p`
  padding-bottom: 30px;
`;

const Template: Story<TextAreaProps> = (args) => (
  <Wrapper>
    <Description>
      The Textarea component supports all the same display features as the Input
      component, in addition the following 3 props are added specifically for
      interacting with the Textarea.
    </Description>
    <Textarea {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default Textarea',
  placeholder: 'Default Settings'
};

export const MinumumRows = Template.bind({});
MinumumRows.args = {
  label: 'Minumum Rows',
  placeholder: 'Minimum of 6 rows',
  minimumRows: 6
};

export const WithoutMessagePlaceholder = Template.bind({});
WithoutMessagePlaceholder.args = {
  label: 'Without message placeholder',
  placeholder: 'Minimum of 6 rows',
  minimumRows: 6,
  isMessageHidden: true
};

export const AutoExpand = Template.bind({});
AutoExpand.args = {
  label: 'Auto Expand',
  placeholder: 'Type to auto-expand text area',
  shouldAutoExpand: true,
  shouldFitContainer: true
};
