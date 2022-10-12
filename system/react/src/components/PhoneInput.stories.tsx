import { Story, Meta } from '@storybook/react';

import { classlessSelector, classySelector, PhoneInput } from './PhoneInput';

const contentVariants = [
  {},
  { 'data-disabled': true },
  { 'data-stretch': true },
  { 'data-error': true }
];

export default {
  title: 'TableKit/PhoneInput',
  component: PhoneInput,
  parameters: {
    variants: contentVariants,
    classlessSelector,
    classySelector
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map((props) => (
      <PhoneInput {...props} />
    ))}
  </>
);
