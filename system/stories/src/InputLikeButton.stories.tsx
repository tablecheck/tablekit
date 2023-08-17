import { FavoriteFilled, Close } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { inputLikeButton } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = [
  { name: 'Default' },
  { name: 'Hover', 'data-pseudo': 'hover' as const },
  { name: 'Active', 'data-pseudo': 'active' as const },
  { name: 'Focus', 'data-pseudo': 'focus' as const },
  { name: 'Disabled', 'data-variant': 'disabled' as const },
  { name: 'Error', 'data-variant': 'error' as const },
  { name: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'TableKit/InputLikeButton',
  component: emotion.InputLikeButton,
  parameters: { variants: contentVariants, ...inputLikeButton }
} as Meta;

const Template: Story = ({ InputLikeButton }) => (
  <>
    {contentVariants.map((props) => (
      <InputLikeButton {...props}>Click Me!</InputLikeButton>
    ))}
    {contentVariants.map((props) => (
      <InputLikeButton {...props}>
        <span>Click Me!</span>
        <Close size={16} />
      </InputLikeButton>
    ))}
    {contentVariants.map((props) => (
      <InputLikeButton {...props}>
        <FavoriteFilled size={16} />
        <span>Click Me!</span>
      </InputLikeButton>
    ))}
    {contentVariants.map((props) => (
      <InputLikeButton {...props}>
        <FavoriteFilled size={16} />
        <span>Click Me!</span>
        <Close size={16} />
      </InputLikeButton>
    ))}
  </>
);
export const Emotion: Story = Template.bind({});
Emotion.args = { InputLikeButton: emotion.InputLikeButton };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { InputLikeButton: css.InputLikeButton };
Class.parameters = { useEmotion: false };
