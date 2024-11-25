import { Calendar, Globe } from '@carbon/icons-react';
import { Meta, StoryFn } from '@storybook/react';
import { iconButton } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const variants = [''].concat(Object.keys(iconButton.variantStyles)) as (
  | ''
  | emotion.IconButtonVariant
)[];

const meta: Meta = {
  title: 'Components/IconButtons',
  component: emotion.IconButton,
  parameters: { ...iconButton, variants }
};

export default meta;

const contentVariants = [{}, { 'data-round': true }];
const sizes = ['small', 'medium', 'large'] as const;

const Template: StoryFn<{
  IconButton: typeof css.IconButton | typeof emotion.IconButton;
  Input: typeof css.Input | typeof emotion.Input;
  TextArea: typeof css.TextArea | typeof emotion.TextArea;
}> = ({ IconButton, Input, TextArea }) => (
  <>
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {(
          [
            'Default',
            'Active',
            'Hover',
            'Focus',
            'Loading',
            'Disabled'
          ] as const
        ).map((status) =>
          variants.map((variant) =>
            variant === '' ? (
              <div key={`${status}_${variant}`}>{status}</div>
            ) : (
              <div
                key={`${status}_${variant}`}
                style={{ display: 'flex', gap: 'var(--spacing-l4)' }}
              >
                {contentVariants.map((round) => (
                  <IconButton
                    key={`${status}_${variant}`}
                    aria-busy={status === 'Loading'}
                    disabled={status === 'Disabled'}
                    data-variant={variant}
                    data-pseudo={status.toLowerCase()}
                    data-size={size}
                    {...round}
                  >
                    <Globe size={emotion.getCarbonIconSize(size)} />
                  </IconButton>
                ))}
              </div>
            )
          )
        )}
      </React.Fragment>
    ))}
    <h4>Input Append mode</h4>
    {[{ prefix: undefined }, { prefix: <small>EN</small> }].map(
      (props, index) => (
        <p
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
        >
          {sizes.map((size) => (
            <React.Fragment key={size}>
              <Input
                {...props}
                data-size={size}
                placeholder="Enter a Date"
                iconAfter={
                  <IconButton
                    data-mode="input-append"
                    data-size={size}
                    disabled
                  >
                    <Calendar size={emotion.getCarbonIconSize(size)} />
                  </IconButton>
                }
              />
              <TextArea
                {...props}
                data-size={size}
                placeholder="Enter some text"
                iconAfter={
                  <IconButton
                    data-mode="input-append"
                    data-size={size}
                    disabled
                  >
                    <Calendar size={emotion.getCarbonIconSize(size)} />
                  </IconButton>
                }
              />
            </React.Fragment>
          ))}
        </p>
      )
    )}
  </>
);

export const Emotion: typeof Template = Template.bind({});
Emotion.args = {
  IconButton: emotion.IconButton,
  Input: emotion.Input,
  TextArea: emotion.TextArea
};
Emotion.parameters = { useEmotion: true };
export const EmotionVariants: typeof Template = Template.bind({});
EmotionVariants.args = {
  Input: emotion.Input,
  TextArea: emotion.TextArea,
  IconButton: (({ 'data-variant': variant, ...props }: iconButton.Props) => {
    if (!variant) return <emotion.IconButton {...props} />;
    const casedKey = `${variant.substring(0, 1).toUpperCase()}${variant
      .substring(1)
      .toLowerCase()}` as keyof typeof emotion.VariantIconButton;
    const Component = emotion.VariantIconButton[casedKey];
    return <Component {...props} />;
  }) as any
};
EmotionVariants.parameters = { useEmotion: true };

export const Class: typeof Template = Template.bind({});
Class.args = {
  IconButton: css.IconButton,
  Input: css.Input,
  TextArea: css.TextArea
};
Class.parameters = { useEmotion: false };
