import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import {
  TextArea,
  TextAreaWithIcons,
  classlessSelector,
  classySelector
} from './TextArea';

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
  component: TextArea,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    classlessSelector,
    classySelector
  }
} as Meta;

export const Variants: Story = () => (
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
