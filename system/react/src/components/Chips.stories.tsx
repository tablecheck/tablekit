import { Story, Meta } from '@storybook/react';

import { classySelector, Chip } from './Chip';

const contentVariants = [
  'Default',
  'Hover',
  'Active',
  'Focus',
  'Disabled',
  'Selected'
] as const;

export default {
  title: 'TableKit/Chip',
  component: Chip,
  parameters: {
    classySelector,
    variants: contentVariants.length
  }
} as Meta;

export const AllVariants: Story = () => (
  <>
    {contentVariants.map((variant) => (
      <Chip
        data-pseudo={variant.toLowerCase()}
        data-disabled={variant === 'Disabled'}
        data-selected={variant === 'Selected'}
      >
        {variant}
      </Chip>
    ))}
  </>
);
