import { Meta, StoryFn } from '@storybook/react';
import { inputAlert } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants: emotion.InputAlertProps[] = [
  { id: '1', 'data-variant': 'info', children: 'Info' },
  { id: '2', 'data-variant': 'warning', children: 'Warning' },
  { id: '3', 'data-variant': 'error', children: 'Error' }
];

export default {
  title: 'TableKit/InputAlert',
  component: emotion.InputAlert,
  parameters: {
    variants: contentVariants.map((props) => props['data-variant']),
    ...inputAlert
  }
} as Meta;

const Template: StoryFn = ({ InputAlert }) => (
  <>
    {contentVariants.map(({ id: key, ...props }) => (
      <InputAlert key={key} {...props} />
    ))}
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  InputAlert: emotion.InputAlert
};
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  InputAlert: css.InputAlert
};
Class.parameters = { useEmotion: false };
