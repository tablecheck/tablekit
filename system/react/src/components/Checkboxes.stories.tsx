import { Story, Meta } from '@storybook/react';

import { Checkbox, classlessSelector, classySelector } from './Checkbox';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Checkbox',
  component: Checkbox,
  parameters: {
    variants: contentVariants.length,
    classlessSelector,
    classySelector
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <Checkbox
          data-pseudo={variant.toLowerCase()}
          disabled={variant.toLowerCase() === 'disabled'}
          checked={isChecked}
        />
      ))
    )}
  </>
);
