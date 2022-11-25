import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import {
  Input,
  InputWithIcons,
  classlessSelector,
  classySelector
} from './Input';

const contentVariants = [
  {},
  { 'data-variant': 'disabled' as const },
  { 'data-variant': 'error' as const },
  { 'data-stretch': true }
];

export default {
  title: 'TableKit/Input',
  component: Input,
  parameters: {
    variants: contentVariants,
    classlessSelector,
    classySelector
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map((props) => (
      <>
        <Input {...props} placeholder="Placeholder" />
        <InputWithIcons {...props}>
          <input placeholder="Placeholder" />
          <Close size={16} />
        </InputWithIcons>
        <InputWithIcons {...props}>
          <FavoriteFilled size={16} />
          <input placeholder="Placeholder" />
        </InputWithIcons>
        <InputWithIcons {...props}>
          <FavoriteFilled size={16} />
          <input placeholder="Placeholder" />
          <Close size={16} />
        </InputWithIcons>
      </>
    ))}
  </>
);
