import { Globe } from '@carbon/icons-react';
import { Meta } from '@storybook/react';

import {
  IconButton,
  IconButtonVariant,
  VariantIconButtons,
  variants,
  classySelector,
  classlessSelector
} from './IconButton';

export default {
  title: 'TableKit/IconButtons',
  component: IconButton,
  parameters: { variants: variants.length, classySelector, classlessSelector }
} as Meta;

export const AllVariants = () => (
  <>
    {(
      ['Button', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const
    ).map((status) =>
      variants.map((variant) => (
        <IconButton
          key={`${status}_${variant}`}
          aria-busy={status === 'Loading'}
          disabled={status === 'Disabled'}
          data-variant={variant}
          data-pseudo={status.toLowerCase()}
        >
          <Globe size={20} />
        </IconButton>
      ))
    )}
  </>
);
export const VariantButtonExports = () => (
  <>
    {(
      ['Button', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const
    ).map((status) =>
      variants.map((variant) => {
        const casedKey = `${variant.substring(0, 1).toUpperCase()}${variant
          .substring(1)
          .toLowerCase()}` as Capitalize<IconButtonVariant>;
        const Component = VariantIconButtons[casedKey];
        return (
          <Component
            key={`${variant}`}
            aria-busy={status === 'Loading'}
            disabled={status === 'Disabled'}
            data-variant={variant}
            data-pseudo={status.toLowerCase()}
          >
            <Globe size={20} />
          </Component>
        );
      })
    )}
  </>
);
