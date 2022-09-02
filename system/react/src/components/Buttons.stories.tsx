import { ChevronDown, Globe } from '@carbon/icons-react';
import { Meta } from '@storybook/react';

import {
  Button,
  ButtonVariant,
  VariantButtons,
  variants,
  classlessSelector,
  classySelector
} from './Button';

export default {
  title: 'TableKit/Buttons',
  component: Button,
  parameters: { variants: variants.length, classlessSelector, classySelector }
} as Meta;

export const AllVariants = () => (
  <>
    {(
      [
        'Button',
        'Icon Left',
        'Icon Right',
        'Active',
        'Hover',
        'Focus',
        'Loading',
        'Disabled'
      ] as const
    ).map((status) =>
      variants.map((variant) => (
        <Button
          key={`${status}_${variant}`}
          aria-busy={status === 'Loading'}
          disabled={status === 'Disabled'}
          data-variant={variant}
          data-pseudo={status.toLowerCase()}
        >
          {status === 'Icon Left' ? <Globe size={20} /> : null}
          {status}
          {status === 'Icon Right' ? <ChevronDown size={20} /> : null}
        </Button>
      ))
    )}
  </>
);
export const VariantButtonExports = () => (
  <>
    {(
      [
        'Button',
        'Icon Left',
        'Icon Right',
        'Active',
        'Hover',
        'Focus',
        'Loading',
        'Disabled'
      ] as const
    ).map((status) =>
      variants.map((variant) => {
        const casedKey = `${variant.substring(0, 1).toUpperCase()}${variant
          .substring(1)
          .toLowerCase()}` as Capitalize<ButtonVariant>;
        const Component = VariantButtons[casedKey];
        return (
          <Component
            key={`${status}_${variant}`}
            aria-busy={status === 'Loading'}
            disabled={status === 'Disabled'}
            data-variant={variant}
            data-pseudo={status.toLowerCase()}
          >
            {status === 'Icon Left' ? <Globe size={20} /> : null}
            {status}
            {status === 'Icon Right' ? <ChevronDown size={20} /> : null}
          </Component>
        );
      })
    )}
  </>
);
