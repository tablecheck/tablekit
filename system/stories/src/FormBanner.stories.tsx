import { Meta, StoryFn } from '@storybook/react';
import { formBanner } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants: emotion.FormBannerProps['data-variant'][] = [
  'success',
  'info',
  'error',
  'warning',
  'neutral',
  'purple',
  'orange'
];

type LayoutComponents = Record<'FormBanner', React.ElementType>;

export default {
  title: 'Components/FormBanner',
  component: emotion.FormBanner,
  parameters: {
    ...formBanner,
    variants: contentVariants,
    auxiliaryComponents: [
      emotion.FormBannerIconWrapper,
      emotion.FormBannerMessage
    ]
  }
} as Meta;

const Template: StoryFn = ({ FormBanner }) => (
  <>
    {contentVariants.map((variant) => (
      <FormBanner key={variant} data-variant={variant}>
        Important message to explain a form or a section of a form.
      </FormBanner>
    ))}
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  FormBanner: emotion.FormBanner
} satisfies LayoutComponents;
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  FormBanner: css.FormBanner
} satisfies LayoutComponents;
Class.parameters = { useEmotion: false };
