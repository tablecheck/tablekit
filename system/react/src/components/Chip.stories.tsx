import { Story, Meta } from '@storybook/react';

import { Chip, classySelector } from './Chip';
import { ChipRow } from './ChipRow';

const contentVariants = [
  'Default',
  'Selected',
  'Hover',
  'Focus',
  'Disabled',
  'Active'
] as const;

export default {
  title: 'TableKit/Chip',
  parameters: {
    classySelector,
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
} as Meta;

const chips = ['State', 'Default'];

export const Default: Story<any> = () => (
  <>
    {contentVariants.map((variant) => (
      <ChipRow role="tablist">
        {chips.map((name, i) => (
          <Chip
            key={name}
            data-variant={i === 0 && variant}
            disabled={i === 0 && variant === 'Disabled'}
            aria-selected={i === 0 && variant === 'Selected'}
            data-pseudo={i === 0 && variant.toLowerCase()}
          >
            {name}
          </Chip>
        ))}
      </ChipRow>
    ))}
  </>
);
