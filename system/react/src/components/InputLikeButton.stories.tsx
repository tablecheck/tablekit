import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import { InputLikeButton, classySelector } from './InputLikeButton';

const contentVariants = [
  {},
  { 'data-variant': 'disabled' as const },
  { 'data-variant': 'error' as const },
  { 'data-stretch': true }
];

export default {
  title: 'TableKit/InputLikeButton',
  component: InputLikeButton,
  parameters: { variants: contentVariants, classySelector }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map((props) => (
      <>
        <InputLikeButton {...props}>Click Me!</InputLikeButton>
        <InputLikeButton {...props}>
          <span>Click Me!</span>
          <Close size={16} />
        </InputLikeButton>
        <InputLikeButton {...props}>
          <FavoriteFilled size={16} />
          <span>Click Me!</span>
        </InputLikeButton>
        <InputLikeButton {...props}>
          <FavoriteFilled size={16} />
          <span>Click Me!</span>
          <Close size={16} />
        </InputLikeButton>
      </>
    ))}
  </>
);
