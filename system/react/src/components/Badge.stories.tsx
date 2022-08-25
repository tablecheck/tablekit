import { FavoriteFilled } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';

import { Badge, variants } from './Badge';

export default {
  title: 'TableKit/Badges',
  component: Badge,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
  }
} as Meta;

export const Default: Story<any> = ({ isSmall, variant }) => {
  const props = {
    'data-size': isSmall ? 'small' : (undefined as any),
    'data-variant': variant
  };
  return (
    <Badge {...props}>
      <FavoriteFilled size={20} />
      <span>Label</span>
    </Badge>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${variants.length}, 1fr);
  grid-gap: var(--spacing-l7) var(--spacing-l4);
  padding: var(--spacing-l4);
  border: 1px dashed var(--primary);
  border-radius: var(--border-radius-small);
  align-items: flex-start;
  justify-items: flex-start;
`;

export const Icons = () => (
  <Grid>
    {['left', 'right', 'both'].map((side) => (
      <Badge key={side}>
        {side !== 'right' ? <FavoriteFilled size={20} /> : null}Button
        {side !== 'left' ? <FavoriteFilled size={20} /> : null}
      </Badge>
    ))}
  </Grid>
);
export const AllVariants = () => (
  <Grid>
    {[undefined, 'small'].map((size) =>
      [true, false].map((hasIcon) =>
        variants.map((variant) => (
          <Badge key={variant} data-variant={variant} data-size={size as any}>
            {hasIcon ? <FavoriteFilled size={size ? 16 : 20} /> : null}
            Text
          </Badge>
        ))
      )
    )}
  </Grid>
);
