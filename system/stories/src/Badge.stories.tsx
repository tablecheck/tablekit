import { FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { badge } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const variants = Object.keys(badge.variantStyles);

export default {
  title: 'TableKit/Badge',
  component: emotion.Badge,
  parameters: { ...badge, variants }
} as Meta;

const Template: Story = ({ Badge }) => (
  <>
    {[undefined, 'small'].map((size) =>
      ['left', 'right', false].map((hasIcon) =>
        variants.map((variant) => (
          <Badge key={variant} data-variant={variant} data-size={size as any}>
            {hasIcon === 'left' ? (
              <FavoriteFilled size={size ? 16 : 20} />
            ) : null}
            Text
            {hasIcon === 'right' ? (
              <FavoriteFilled size={size ? 16 : 20} />
            ) : null}
          </Badge>
        ))
      )
    )}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Badge: emotion.Badge };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Badge: css.Badge };
Class.parameters = { useEmotion: false };
