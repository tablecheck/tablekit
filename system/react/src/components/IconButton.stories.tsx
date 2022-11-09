import { Globe } from '@carbon/icons-react';
import { Meta } from '@storybook/react';

import {
  IconButton,
  variants,
  classlessSelector,
  classySelector
} from './IconButton';

export default {
  title: 'TableKit/IconButtons',
  component: IconButton,
  parameters: { variants, classlessSelector, classySelector }
} as Meta;

const contentVariants = [{}, { 'data-round': true }];

export const AllVariants = () => (
  <>
    {(['small', undefined, 'large'] as const).map((size) =>
      (
        ['Button', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'] as const
      ).map((status) =>
        contentVariants.map((round) =>
          variants.map((variant) => (
            <IconButton
              key={`${status}_${variant}`}
              aria-busy={status === 'Loading'}
              disabled={status === 'Disabled'}
              data-variant={variant}
              data-pseudo={status.toLowerCase()}
              data-size={size}
              {...round}
            >
              <Globe size={size === 'small' ? 16 : 20} />
            </IconButton>
          ))
        )
      )
    )}
  </>
);
