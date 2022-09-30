import { FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import { Badge, variants, classySelector } from './Badge';

export default {
  title: 'TableKit/Badges',
  component: Badge,
  parameters: { variants, classySelector }
} as Meta;

export const AllVariants: Story = () => (
  <>
    {[undefined, 'small'].map((size) =>
      ['left', 'right', false].map((hasIcon) =>
        variants.map((variant) => (
          <Badge key={variant} data-variant={variant} data-size={size as any}>
            {hasIcon === 'left' ? (
              <FavoriteFilled size={size ? 16 : 20} />
            ) : null}
            Text
            {hasIcon === 'right' ? (
              <FavoriteFilled size={size ? 16 : 20} />
            ) : null}
          </Badge>
        ))
      )
    )}
  </>
);
