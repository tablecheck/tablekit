import { Story, Meta } from '@storybook/react';
import { anchor } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = [
  'Default',
  'Disabled',
  'Hover',
  'Focus',
  'Visited'
] as const;

export default {
  title: 'TableKit/Anchor',
  component: emotion.Anchor,
  parameters: {
    ...anchor,
    variants: contentVariants
  }
} as Meta;

const Template: Story = ({ Anchor }) => (
  <>
    {contentVariants.map((variant) => (
      <Anchor
        href={variant === 'Disabled' ? undefined : '#'}
        data-pseudo={variant.toLowerCase()}
      >
        Link text here
      </Anchor>
    ))}
  </>
);
export const Emotion: Story = Template.bind({});
Emotion.args = { Anchor: emotion.Anchor };

export const Class: Story = Template.bind({});
Class.args = { Anchor: css.Anchor };
