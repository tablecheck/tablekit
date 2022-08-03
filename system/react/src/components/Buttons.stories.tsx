import { ChevronDown, Globe, Mobile } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonVariant, VariantButtons, variants } from './Button';

export default {
  title: 'TableKit/Buttons',
  component: Button,
  argTypes: {
    isLoading: { control: 'boolean', default: false },
    isDisabled: { control: 'boolean', default: false },
    variant: {
      options: variants,
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    onClick: { action: 'onClick' }
  }
} as Meta;

export const Default: Story<any> = ({
  isLoading,
  isDisabled,
  variant,
  onClick
}) => {
  const props = {
    'aria-busy': isLoading,
    'data-variant': variant,
    disabled: isDisabled,
    onClick
  };
  return (
    <Button {...props}>
      <Mobile size={20} />
    </Button>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${variants.length}, 1fr);
  grid-gap: 8px;
  align-items: flex-start;
  justify-items: flex-start;
`;

export const Icons = () => (
  <Grid>
    {['left', 'right', 'both'].map((side) => (
      <Button key={side}>
        {side !== 'right' ? <Globe size={20} /> : null}Button
        {side !== 'left' ? <ChevronDown size={20} /> : null}
      </Button>
    ))}
  </Grid>
);
export const AllVariants = () => (
  <Grid>
    {['Button', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'].map(
      (status) =>
        variants.map((variant) => (
          <Button
            key={`${status}_${variant}`}
            aria-busy={status === 'Loading'}
            disabled={status === 'Disabled'}
            data-variant={variant}
            data-pseudo={status.toLowerCase()}
          >
            Button
          </Button>
        ))
    )}
  </Grid>
);

export const VariantButtonExports = () => (
  <Grid>
    {['Button', 'Active', 'Hover', 'Focus', 'Loading', 'Disabled'].map(
      (status) =>
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
              VariantButtons.{casedKey}
            </Component>
          );
        })
    )}
  </Grid>
);
