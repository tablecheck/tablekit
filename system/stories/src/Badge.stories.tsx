import { FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { badge } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const variants = Object.keys(badge.variantStyles);

const meta: Meta = {
  title: 'Components/Badge',
  component: emotion.Badge,
  parameters: { ...badge, variants }
};

export default meta;

const Template: Story = ({ Badge }) => (
  <>
    {(['x-large', 'large', 'medium', 'small', 'x-small'] as const).map(
      (size) => (
        <React.Fragment key={size}>
          <h4>{size}</h4>
          {['left', 'right', false].map((hasIcon) =>
            variants.map((variant) => (
              <Badge
                key={variant + hasIcon}
                data-variant={variant}
                data-size={size}
              >
                {hasIcon === 'left' ? (
                  <FavoriteFilled size={size ? 16 : 20} />
                ) : null}
                Text
                {hasIcon === 'right' ? (
                  <FavoriteFilled size={size ? 16 : 20} />
                ) : null}
              </Badge>
            ))
          )}
        </React.Fragment>
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
