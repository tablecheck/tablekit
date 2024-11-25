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

const meta: Meta = {
  title: 'Components/Anchor',
  component: emotion.Anchor,
  parameters: {
    ...anchor,
    variants: contentVariants
  }
};

export default meta;

const Template: Story = ({ Anchor, ButtonAnchor }) => (
  <>
    {contentVariants.map((variant) => (
      <Anchor
        href={variant === 'Disabled' ? undefined : '#'}
        data-pseudo={variant.toLowerCase()}
      >
        Link text here
      </Anchor>
    ))}
    {contentVariants.map((variant) => (
      <ButtonAnchor
        disabled={variant === 'Disabled'}
        data-pseudo={variant.toLowerCase()}
      >
        Button text here
      </ButtonAnchor>
    ))}
  </>
);
export const Emotion: Story = Template.bind({});
Emotion.args = {
  Anchor: emotion.Anchor,
  ButtonAnchor: emotion.Anchor.withComponent('button')
};

export const Class: Story = Template.bind({});
Class.args = {
  Anchor: css.Anchor,
  ButtonAnchor: (props: css.AnchorProps) => (
    <button
      className={anchor.className}
      {...(props as never as object)}
      type="button"
    />
  )
};
