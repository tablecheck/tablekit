import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../button';

import { PropsType } from './Spinner';

import { Spinner, SpinnerSize } from './index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [SpinnerSize.Regular, SpinnerSize.Large]
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Template: Story<PropsType> = (args) => <Spinner {...args} />;

export const regular = Template.bind({});
regular.args = {
  size: SpinnerSize.Regular
};

export const large = Template.bind({});
large.args = {
  size: SpinnerSize.Large
};

const AnimatedSpinnerTemplate: Story<PropsType> = (args) => {
  const [isCompleting, setIsCompleting] = useState(true);
  const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90px;
  `;
  return (
    <SpinnerWrapper>
      <div>
        <Spinner {...args} isCompleting={isCompleting} />
        <Spinner {...args} isCompleting={isCompleting} delay={1000} />
      </div>
      <div>
        <Button
          onClick={() => setIsCompleting((previousValue) => !previousValue)}
        >
          Toggle Spinners
        </Button>
      </div>
    </SpinnerWrapper>
  );
};

export const animated = AnimatedSpinnerTemplate.bind({});
animated.args = {
  size: SpinnerSize.Large
};
