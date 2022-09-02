import { Story, Meta } from '@storybook/react';

import { Select, classlessSelector, classySelector } from './Select';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Select',
  component: Select,
  parameters: {
    variants: contentVariants.length,
    classlessSelector,
    classySelector
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {[true, undefined].map((isError) =>
      contentVariants.map((variant) => (
        <Select
          data-error={isError}
          data-pseudo={variant.toLowerCase()}
          disabled={variant.toLowerCase() === 'disabled'}
        >
          <option selected>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
          <option>Option 6</option>
        </Select>
      ))
    )}
  </>
);
