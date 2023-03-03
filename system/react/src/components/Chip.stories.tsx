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
  component: Chip,
  parameters: {
    classySelector,
    auxiliaryComponents: [ChipRow],
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
} as Meta;

const chips = ['State', 'Default'];

export const Default: Story<any> = () => (
  <>
    {(['small', undefined] as const).map((size) => (
      <>
        {contentVariants.map((variant) => (
          <ChipRow role="tablist">
            {chips.map((name, i) => (
              <Chip
                key={name}
                data-variant={i === 0 && variant}
                data-size={size}
                disabled={i === 0 && variant === 'Disabled'}
                aria-selected={i === 0 && variant === 'Selected'}
                data-pseudo={i === 0 && variant.toLowerCase()}
              >
                {name} {size}
              </Chip>
            ))}
          </ChipRow>
        ))}
      </>
    ))}
  </>
);
