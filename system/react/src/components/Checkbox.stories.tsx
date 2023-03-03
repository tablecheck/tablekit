import { Story, Meta } from '@storybook/react';

import { Checkbox, classlessSelector, classySelector } from './Checkbox';
import {
  CheckboxLabel,
  classySelector as labelSelector
} from './CheckboxLabel';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Checkbox',
  component: Checkbox,
  parameters: {
    variants: contentVariants,
    classlessSelector,
    auxiliaryClasslessSelectors: [labelSelector],
    classySelector,
    auxiliaryClassySelectors: [labelSelector]
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <CheckboxLabel>
          <Checkbox
            data-pseudo={variant.toLowerCase()}
            disabled={variant.toLowerCase() === 'disabled'}
            checked={isChecked}
          />
          {variant} {isChecked ? '☑' : '☐'}
        </CheckboxLabel>
      ))
    )}
  </>
);
