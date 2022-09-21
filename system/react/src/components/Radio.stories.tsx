import { Story } from '@storybook/react';

import { classlessSelector, classySelector, Radio } from './Radio';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Radio',
  component: Radio,
  parameters: {
    classySelector,
    classlessSelector,
    variants: contentVariants.length
  }
};

export const AllVariants: Story = () => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <Radio
          data-pseudo={variant.toLowerCase()}
          disabled={variant === 'Disabled'}
          checked={isChecked}
        />
      ))
    )}
  </>
);
