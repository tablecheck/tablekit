import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { textArea, textAreaWithIcons } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content' },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', 'data-variant': 'disabled' as const },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'TableKit/TextArea',
  component: emotion.TextArea,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    ...textArea,
    auxiliaryClassNames: [textAreaWithIcons.className]
  }
} as Meta;

const Template: Story = ({ TextArea, TextAreaWithIcons }) => (
  <>
    {contentVariants.map(({ title: key, ...props }) => (
      <TextArea key={key} {...props} placeholder="Placeholder" />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <TextAreaWithIcons key={key} {...props}>
        <textarea placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </TextAreaWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <TextAreaWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <textarea placeholder="Placeholder" defaultValue={props.defaultValue} />
      </TextAreaWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <TextAreaWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <textarea placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </TextAreaWithIcons>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = {
  TextArea: emotion.TextArea,
  TextAreaWithIcons: emotion.TextAreaWithIcons
};
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = {
  TextArea: css.TextArea,
  TextAreaWithIcons: css.TextAreaWithIcons
};
Class.parameters = { useEmotion: false };
