import { Globe } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { iconButton } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const variants = Object.keys(iconButton.variantStyles);

export default {
  title: 'TableKit/IconButtons',
  component: emotion.IconButton,
  parameters: { ...iconButton, variants }
} as Meta;

const contentVariants = [{}, { 'data-round': true }];

const Template: Story = ({ IconButton }) => (
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

export const Emotion: Story = Template.bind({});
Emotion.args = { IconButton: emotion.IconButton };
Emotion.parameters = { useEmotion: true };
export const EmotionVariants: Story = Template.bind({});
EmotionVariants.args = {
  IconButton: ({ 'data-variant': variant, ...props }: iconButton.Props) => {
    if (!variant) return <emotion.IconButton {...props} />;
    const casedKey = `${variant.substring(0, 1).toUpperCase()}${variant
      .substring(1)
      .toLowerCase()}` as keyof typeof emotion.VariantIconButton;
    const Component = emotion.VariantIconButton[casedKey];
    return <Component {...props} />;
  }
};
EmotionVariants.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { IconButton: css.IconButton };
Class.parameters = { useEmotion: false };
