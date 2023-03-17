import { ChevronDown, Globe } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { button } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const variants = Object.keys(button.variantStyles);

export default {
  title: 'TableKit/Buttons',
  component: emotion.Button,
  parameters: { ...button, variants }
} as Meta;

const Template: Story = ({ Button }) => (
  <>
    {(['small', undefined, 'large'] as const).map((size) =>
      (
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
            {status === 'Icon Left' ? <Globe size={20} /> : null}
            {status}
            {status === 'Icon Right' ? <ChevronDown size={20} /> : null}
          </Button>
        ))
      )
    )}
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
