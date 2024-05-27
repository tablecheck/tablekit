import { Story, Meta } from '@storybook/react';
import { spinner } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'Components/Spinner',
  component: emotion.Spinner,
  parameters: {
    ...spinner
  }
} as Meta;

const Template: Story = ({ Spinner }) => <Spinner aria-busy />;

export const Emotion: Story = Template.bind({});
Emotion.args = { Spinner: emotion.Spinner };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Spinner: css.Spinner };
Class.parameters = { useEmotion: false };
