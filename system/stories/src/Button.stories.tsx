import { ChevronDown, Globe } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { button } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const variants = Object.keys(button.variantStyles);

const meta: Meta = {
  title: 'Components/Buttons',
  component: emotion.Button,
  parameters: { ...button, variants }
};

export default meta;

const Template: Story = ({ Button }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
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
              key={variant}
              aria-busy={status === 'Loading'}
              disabled={status === 'Disabled'}
              data-variant={variant}
              data-pseudo={status.toLowerCase()}
              data-size={size}
            >
              {status === 'Icon Left' ? (
                <Globe size={size === 'small' ? 16 : 20} />
              ) : null}
              {status}
              {status === 'Icon Right' ? (
                <ChevronDown size={size === 'small' ? 16 : 20} />
              ) : null}
            </Button>
          ))
        )}
      </React.Fragment>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Button: emotion.Button };
Emotion.parameters = { useEmotion: true };
export const EmotionVariants: Story = Template.bind({});
EmotionVariants.args = {
  Button: ({ 'data-variant': variant, ...props }: button.Props) => {
    if (!variant) return <emotion.Button {...props} />;
    const casedKey = `${variant.substring(0, 1).toUpperCase()}${variant
      .substring(1)
      .toLowerCase()}` as keyof typeof emotion.VariantButton;
    const Component = emotion.VariantButton[casedKey];
    return <Component {...props} />;
  }
};
EmotionVariants.parameters = { useEmotion: true, importName: 'VariantButton' };

export const Class: Story = Template.bind({});
Class.args = { Button: css.Button };
Class.parameters = { useEmotion: false };
