import { Story, Meta } from '@storybook/react';
import { toggle } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = ['Default', 'Disabled', 'Hover', 'Focus'] as const;

export default {
  title: 'TableKit/Toggle',
  component: emotion.Toggle,
  parameters: {
    ...toggle,
    variants: contentVariants
  }
} as Meta;

const Template: Story = ({ Toggle, isEmotion }) => (
  <>
    {[false, true].map((state) =>
      [undefined, 'small'].map((size) =>
        contentVariants.map((variant) => (
          <Toggle
            type="checkbox"
            className={isEmotion ? 'custom' : undefined}
            data-pseudo={variant.toLowerCase()}
            data-size={size}
            disabled={variant === 'Disabled'}
            defaultChecked={state}
          />
        ))
      )
    )}
    {[undefined, 'small'].map((size) =>
      contentVariants.map((variant) => (
        <Toggle
          type="checkbox"
          className={isEmotion ? 'custom' : undefined}
          data-pseudo={variant.toLowerCase()}
          data-size={size}
          disabled={variant === 'Disabled'}
          ref={(ref: undefined | HTMLInputElement) => {
            if (ref) ref.indeterminate = true;
          }}
        />
      ))
    )}
  </>
);
export const Emotion: Story = Template.bind({});
Emotion.args = { Toggle: emotion.Toggle, isEmotion: true };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Toggle: css.Toggle };
Class.parameters = { useEmotion: false };
