import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import { InputLikeButton, classySelector } from './InputLikeButton';

const contentVariants = [
  {},
  { 'data-disabled': true },
  { 'data-stretch': true },
  { 'data-error': true }
];

export default {
  title: 'TableKit/InputLikeButton',
  component: InputLikeButton,
  parameters: { variants: contentVariants.length, classySelector }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map((props) => (
      <>
        <InputLikeButton {...props}>Click Me!</InputLikeButton>
        <InputLikeButton {...props}>
          Click Me!
          <Close size={16} />
        </InputLikeButton>
        <InputLikeButton {...props}>
          <FavoriteFilled size={16} />
          Click Me!
        </InputLikeButton>
        <InputLikeButton {...props}>
          <FavoriteFilled size={16} />
          Click Me!
          <Close size={16} />
        </InputLikeButton>
      </>
    ))}
  </>
);
