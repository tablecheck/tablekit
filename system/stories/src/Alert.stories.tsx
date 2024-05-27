import { Meta, StoryFn } from '@storybook/react';
import { alert } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants: emotion.AlertProps['data-variant'][] = [
  'success',
  'info',
  'error',
  'warning',
  'neutral'
];

type LayoutComponents = Record<'Alert', React.ElementType>;

const layouts: ({
  key: emotion.AlertProps['data-layout'];
} & Omit<
  React.ComponentPropsWithoutRef<typeof emotion.Alert>,
  'data-variant' | 'children'
>)[] = [
  {
    key: 'icon-title-close',
    title: 'Icon, title, and close button',
    onClose: () => {}
  },
  {
    key: 'title-close',
    title: 'Title and close button',
    icon: null,
    onClose: () => {}
  },
  {
    key: 'icon-title',
    title: 'Icon and title'
  },
  {
    key: 'title',
    title: 'Title',
    icon: null
  },
  {
    key: 'icon-close',
    onClose: () => {}
  },
  {
    key: 'close',
    icon: null,
    onClose: () => {}
  },
  {
    key: 'icon'
  },
  {
    key: 'text-only',
    icon: null
  }
];

export default {
  title: 'Components/Alert',
  component: emotion.Alert,
  parameters: {
    ...alert,
    variants: contentVariants,
    auxiliaryClassNames: ['alert-icon'],
    auxiliaryComponents: [
      emotion.AlertTitle,
      emotion.AlertDescription,
      emotion.AlertCloseButton,
      emotion.AlertIconWrapper
    ]
  }
} as Meta;

const Template: StoryFn = ({ Alert }) => (
  <>
    {layouts.map(({ key, ...layout }) =>
      contentVariants.map((variant) => (
        <Alert
          key={`${variant}-${key}`}
          data-variant={variant}
          data-layout={key}
          {...layout}
        >
          <p>More text here</p>
          <p>More text here</p>
          <p>More text here</p>
        </Alert>
      ))
    )}
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  Alert: emotion.Alert
} satisfies LayoutComponents;
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  Alert: css.Alert
} satisfies LayoutComponents;
Class.parameters = { useEmotion: false };
