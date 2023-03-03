import { Story } from '@storybook/react';

import { RadioLabel, classySelector as labelSelector } from './CheckboxLabel';
import { classlessSelector, classySelector, Radio } from './Radio';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Radio',
  component: Radio,
  parameters: {
    variants: contentVariants,
    classlessSelector,
    auxiliaryClasslessSelectors: [labelSelector],
    classySelector,
    auxiliaryClassySelectors: [labelSelector]
  }
};

export const AllVariants: Story = () => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <RadioLabel>
          <Radio
            data-pseudo={variant.toLowerCase()}
            disabled={variant === 'Disabled'}
            checked={isChecked}
          />
          {variant} {isChecked ? '☑' : '☐'}
        </RadioLabel>
      ))
    )}
  </>
);
