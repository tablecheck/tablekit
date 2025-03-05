import { Close, FavoriteFilled } from '@carbon/icons-react';
import { StoryFn, Meta } from '@storybook/react';
import {
  textAreaCore,
  textAreaWithIcons,
  textAreaWithPrefix,
  textAreaWithSuffix
} from '@tablecheck/tablekit-core';
import { getCarbonIconSize } from '@tablecheck/tablekit-react';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content\nOn two lines' },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', 'data-variant': 'disabled' as const },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

const meta: Meta = {
  title: 'Components/TextArea',
  component: emotion.TextArea,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    variantWidth: '280px',
    ...textAreaCore,
    auxiliaryComponents: [
      emotion.TextAreaWithIcons,
      emotion.TextAreaWithPrefix,
      emotion.TextAreaWithSuffix
    ],
    auxiliaryClassNames: [
      textAreaWithIcons.className,
      textAreaWithPrefix.className,
      textAreaWithSuffix.className
    ]
  }
};

export default meta;

const getPropRows: (
  size: NonNullable<textAreaCore.Props['data-size']>
) => Partial<React.ComponentProps<typeof emotion.TextArea>>[] = (size) => {
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
      iconBefore,
      'data-stretch': true
    },
    { prefix: <span>EN</span> },
    {
      prefix: <span>ZH-CN</span>,
      iconAfter
    },
    {
      suffix: <span>.com</span>,
      defaultValue: 'LongLongLongLongTextWithoutSpaces'
    },
    {
      suffix: <span>@tablecheck.com</span>,
      iconBefore,
      'data-stretch': true,
      defaultValue: 'LongLongLongLongTextWithoutSpaces'
    },
    {
      prefix: <span>EN</span>,
      defaultValue: 'LongLongLongLongTextWithoutSpaces'
    },
    {
      prefix: <span>ZH-CN</span>,
      iconAfter,
      defaultValue: 'LongLongLongLongTextWithoutSpaces'
    }
  ];
};

const Template: StoryFn<{
  TextArea: typeof emotion.TextArea | typeof css.TextArea;
}> = ({ TextArea }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {getPropRows(size).map((withProps, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {contentVariants.map(({ title: key, ...props }) => (
              <TextArea
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
  TextArea: emotion.TextArea
};
Emotion.parameters = { useEmotion: true };

export const Class: typeof Template = Template.bind({});
Class.args = {
  TextArea: css.TextArea
};
Class.parameters = { useEmotion: false };
