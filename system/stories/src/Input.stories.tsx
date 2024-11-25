import { FavoriteFilled, Close } from '@carbon/icons-react';
import { Meta, StoryFn } from '@storybook/react';
import {
  inputCore,
  inputWithIcons,
  inputWithPrefix,
  inputWithSuffix
} from '@tablecheck/tablekit-core';
import { getCarbonIconSize } from '@tablecheck/tablekit-react';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content' },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', disabled: true },
  {
    title: 'Disabled With Value',
    disabled: true,
    defaultValue: 'Some Content'
  },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

const meta: Meta = {
  title: 'Components/Input',
  component: emotion.Input,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    variantWidth: '280px',
    auxiliaryComponents: [
      emotion.InputWithIcons,
      emotion.InputWithPrefix,
      emotion.InputWithSuffix
    ],
    auxiliaryClassNames: [
      inputWithIcons.className,
      inputWithPrefix.className,
      inputWithSuffix.className
    ],
    ...inputCore
  }
};

export default meta;

const getPropRows: (
  size: NonNullable<inputCore.Props['data-size']>
) => Partial<React.ComponentProps<typeof emotion.Input>>[] = (size) => {
  const iconAfter = <Close size={getCarbonIconSize(size)} />;
  const iconBefore = <FavoriteFilled size={getCarbonIconSize(size)} />;
  return [
    {},
    { iconAfter },
    { iconBefore },
    {
      iconBefore,
      iconAfter
    },
    { suffix: <span>.com</span> },
    {
      suffix: <span>@tablecheck.com</span>,
      iconBefore
    },
    { prefix: <span>EN</span> },
    {
      prefix: <span>ZH-CN</span>,
      iconAfter
    }
  ];
};

const Template: StoryFn<{
  Input: typeof emotion.Input | typeof css.Input;
}> = ({ Input }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {contentVariants.map(({ title: key, ...props }) => (
              <Input
                key={key}
                {...props}
                {...withProps} // suffix, prefix, iconBefore, iconAfter
                placeholder="Placeholder"
                data-size={size}
              />
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </>
);

export const Emotion: typeof Template = Template.bind({});
Emotion.args = {
  Input: emotion.Input
};
Emotion.parameters = { useEmotion: true };

export const Class: typeof Template = Template.bind({});
Class.args = {
  Input: css.Input
};
Class.parameters = { useEmotion: false };
