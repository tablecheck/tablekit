import {
  CarbonIcon,
  CheckmarkFilled,
  Close,
  Information,
  WarningAlt,
  WarningAltFilled
} from '@carbon/icons-react';
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

const CloseIcon = () => <Close size={20} />;

type LayoutComponents = Record<
  'Title' | 'Description' | 'CloseButton' | 'IconWrapper',
  React.ElementType
>;

const layouts: {
  key: emotion.AlertProps['data-layout'];
  render: (
    layoutComponents: LayoutComponents,
    icon: CarbonIcon
  ) => React.ReactNode;
}[] = [
  {
    key: 'icon-title-close',
    render: (
      { CloseButton, Description, IconWrapper, Title },
      InstanceIcon
    ) => (
      <>
        <IconWrapper>
          <InstanceIcon size={20} />
        </IconWrapper>
        <Title>Title</Title>
        <Description>More text here</Description>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </>
    )
  },
  {
    key: 'title-close',
    render: ({ CloseButton, Description, Title }) => (
      <>
        <Title>Title</Title>
        <Description>More text here</Description>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </>
    )
  },
  {
    key: 'title',
    render: ({ Description, Title }) => (
      <>
        <Title>Title</Title>
        <Description>More text here</Description>
      </>
    )
  },
  {
    key: 'icon-close',
    render: ({ CloseButton, Description, IconWrapper }, InstanceIcon) => (
      <>
        <IconWrapper>
          <InstanceIcon size={16} />
        </IconWrapper>
        <Description>More text here</Description>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </>
    )
  },
  {
    key: 'close',
    render: ({ CloseButton, Description }) => (
      <>
        <Description>More text here</Description>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </>
    )
  },
  {
    key: 'text-only',
    render: ({ Description }) => <Description>More text here</Description>
  }
];

// eslint-disable-next-line consistent-return
function getIcon(variant: (typeof contentVariants)[number]) {
  switch (variant) {
    case 'success':
      return CheckmarkFilled;
    case 'error':
      return WarningAltFilled;
    case 'neutral':
    case 'info':
      return Information;
    case 'warning':
      return WarningAlt;
  }
}

export default {
  title: 'TableKit/Alert',
  component: emotion.Alert,
  parameters: {
    ...alert,
    variants: contentVariants,
    auxiliaryClassNames: ['input-alert-icon'],
    auxiliaryComponents: [
      emotion.AlertTitle,
      emotion.AlertDescription,
      emotion.AlertCloseButton,
      emotion.AlertIconWrapper
    ]
  }
} as Meta;

const Template: StoryFn = ({ Alert, ...layoutComponents }) => (
  <>
    {layouts.map((layout) =>
      contentVariants.map((variant) => (
        <Alert
          key={`${variant}-${layout}`}
          data-variant={variant}
          data-layout={layout.key}
        >
          {layout.render(
            layoutComponents as LayoutComponents,
            getIcon(variant)
          )}
        </Alert>
      ))
    )}
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  Alert: emotion.Alert,
  Title: emotion.AlertTitle,
  Description: emotion.AlertDescription,
  CloseButton: emotion.AlertCloseButton,
  IconWrapper: emotion.AlertIconWrapper
} satisfies LayoutComponents & { Alert: React.ElementType };
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  Alert: css.Alert,
  Title: css.AlertTitle,
  Description: css.AlertDescription,
  CloseButton: css.AlertCloseButton,
  IconWrapper: css.AlertIconWrapper
} satisfies LayoutComponents & { Alert: React.ElementType };
Class.parameters = { useEmotion: false };
