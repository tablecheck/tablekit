import { Story, Meta } from '@storybook/react';
import { toggle } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = ['Default', 'Disabled', 'Focus'] as const;

export default {
  title: 'Components/Toggle',
  component: emotion.Toggle,
  parameters: {
    ...toggle,
    variants: contentVariants
  }
} as Meta;

const sizes = ['small', 'medium', 'large'] as const;
const states = [false, true, 'indefinite'] as const;

const Template: Story = ({ Toggle, isEmotion }) => (
  <>
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {states.map((state) =>
          contentVariants.map((variant) => (
            <Toggle
              type="checkbox"
              className={isEmotion ? 'custom' : undefined}
              data-pseudo={variant.toLowerCase()}
              data-size={size}
              disabled={variant === 'Disabled'}
              ref={(ref: undefined | HTMLInputElement) => {
                if (!ref) return;
                if (typeof state === 'boolean') ref.checked = state;
                else ref.indeterminate = true;
              }}
            />
          ))
        )}
      </React.Fragment>
    ))}
  </>
);
export const Emotion: Story = Template.bind({});
Emotion.args = { Toggle: emotion.Toggle, isEmotion: true };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Toggle: css.Toggle };
Class.parameters = { useEmotion: false };
