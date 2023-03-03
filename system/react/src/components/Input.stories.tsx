import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import {
  Input,
  InputWithIcons,
  classlessSelector,
  classySelector
} from './Input';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content' },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', 'data-variant': 'disabled' as const },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'TableKit/Input',
  component: Input,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    classlessSelector,
    classySelector,
    auxiliaryComponents: [InputWithIcons]
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map(({ title: key, ...props }) => (
      <Input key={key} {...props} placeholder="Placeholder" />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </InputWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
      </InputWithIcons>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <InputWithIcons key={key} {...props}>
        <FavoriteFilled size={16} />
        <input placeholder="Placeholder" defaultValue={props.defaultValue} />
        <Close size={16} />
      </InputWithIcons>
    ))}
  </>
);
