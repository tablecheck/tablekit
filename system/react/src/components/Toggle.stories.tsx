import { Story } from '@storybook/react';
import * as React from 'react';

import { classySelector, Toggle } from './Toggle';

const contentVariants = ['Default', 'Disabled', 'Hover', 'Focus'] as const;

export default {
  title: 'TableKit/Toggle',
  component: Toggle,
  parameters: {
    classySelector,
    variants: contentVariants
  }
};

export const AllVariants: Story = () => (
  <>
    {[false, true].map((state) =>
      [undefined, 'small'].map((size) =>
        contentVariants.map((variant) => (
          <Toggle
            type="checkbox"
            data-pseudo={variant.toLowerCase()}
            data-size={size}
            disabled={variant === 'Disabled'}
            checked={state}
          />
        ))
      )
    )}
    {[undefined, 'small'].map((size) =>
      contentVariants.map((variant) => (
        <Toggle
          type="checkbox"
          data-pseudo={variant.toLowerCase()}
          data-size={size}
          disabled={variant === 'Disabled'}
          ref={(ref) => {
            if (ref) ref.indeterminate = true;
          }}
        />
      ))
    )}
  </>
);
