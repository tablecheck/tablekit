import { FavoriteFilled, Close } from '@carbon/icons-react';
import { Meta, StoryFn } from '@storybook/react';
import { inputLikeButton } from '@tablecheck/tablekit-core';
import { getCarbonIconSize } from '@tablecheck/tablekit-react';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  { name: 'Default' },
  { name: 'Hover', 'data-pseudo': 'hover' as const },
  { name: 'Active', 'data-pseudo': 'active' as const },
  { name: 'Focus', 'data-pseudo': 'focus' as const },
  { name: 'Disabled', 'data-variant': 'disabled' as const },
  { name: 'Error', 'data-variant': 'error' as const },
  { name: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'Components/InputLikeButton',
  component: emotion.InputLikeButton,
  parameters: {
    variants: contentVariants,
    variantWidth: '280px',
    ...inputLikeButton
  }
} as Meta;

const Template: StoryFn<{
  InputLikeButton: typeof emotion.InputLikeButton | typeof css.InputLikeButton;
}> = ({ InputLikeButton }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map(({ name: key, ...props }) => (
          <InputLikeButton key={key} {...props} data-size={size}>
            Click Me!
          </InputLikeButton>
        ))}
        {contentVariants.map(({ name: key, ...props }) => (
          <InputLikeButton key={key} {...props} data-size={size}>
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>
        ))}
        {contentVariants.map(({ name: key, ...props }) => (
          <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
          </InputLikeButton>
        ))}
        {contentVariants.map(({ name: key, ...props }) => (
          <InputLikeButton key={key} {...props} data-size={size}>
            <FavoriteFilled size={getCarbonIconSize('small')} />
            <span>Click Me!</span>
            <Close size={getCarbonIconSize('small')} />
          </InputLikeButton>
        ))}
      </React.Fragment>
    ))}
  </>
);

export const Emotion = Template.bind({});
Emotion.args = { InputLikeButton: emotion.InputLikeButton };
Emotion.parameters = { useEmotion: true };

export const Class = Template.bind({});
Class.args = { InputLikeButton: css.InputLikeButton };
Class.parameters = { useEmotion: false };
