import { FavoriteFilled, Close } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { input } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content' },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', 'data-variant': 'disabled' as const },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'TableKit/Input',
  component: emotion.Input,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    auxiliaryComponents: [emotion.InputWithIcons],
    ...input
  }
} as Meta;

const Template: Story = ({ Input, InputWithIcons }) => (
  <>
    {contentVariants.map(({ title: key, ...props }) => (
      <Input key={key} {...props} placeholder="Placeholder" />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </InputWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
      </InputWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </InputWithIcons>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = {
  Input: emotion.Input,
  InputWithIcons: emotion.InputWithIcons
};
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = {
  Input: css.Input,
  InputWithIcons: emotion.InputWithIcons
};
Class.parameters = { useEmotion: false };
