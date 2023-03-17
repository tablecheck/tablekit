import { Story, Meta } from '@storybook/react';
import { select } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

export default {
  title: 'TableKit/Select',
  component: emotion.Select,
  parameters: {
    variants: contentVariants,
    ...select
  }
} as Meta;

const Template: Story = ({ Select }) => (
  <>
    {[true, undefined].map((isError) =>
      contentVariants.map((variant) => (
        <Select
          data-error={isError}
          data-pseudo={variant.toLowerCase()}
          disabled={variant.toLowerCase() === 'disabled'}
        >
          <option selected>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
          <option>Option 6</option>
        </Select>
      ))
    )}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Select: emotion.Select };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Select: css.Select };
Class.parameters = { useEmotion: false };
