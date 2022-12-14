import { Close, FavoriteFilled } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';

import { FitContentTextarea } from './index';

const contentVariants = [
  { title: 'Default' },
  { title: 'With Value', defaultValue: 'Some Content' },
  {
    title: 'With Multi-Row',
    defaultValue: 'Some Content 1\nSome Content 2\nSome Content 3'
  },
  { title: 'Focus', 'data-pseudo': 'focus' },
  { title: 'Disabled', 'data-variant': 'disabled' as const },
  { title: 'Error', 'data-variant': 'error' as const },
  { title: 'Stretch', 'data-stretch': true }
];

export default {
  title: 'TableKit/FitContentTextarea',
  component: FitContentTextarea,
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    packageName: '@tablecheck/tablekit-react-fit-content-textarea'
  }
} as Meta;

export const Variants: Story = () => (
  <>
    {contentVariants.map(({ title: key, ...props }) => (
      <div>
        <FitContentTextarea key={key} {...props} placeholder="Placeholder" />
      </div>
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <FitContentTextarea
        {...props}
        placeholder="Placeholder"
        key={key}
        iconAfter={<Close size={16} />}
      />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <FitContentTextarea
        {...props}
        placeholder="Placeholder"
        key={key}
        iconBefore={<FavoriteFilled size={16} />}
      />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <FitContentTextarea
        {...props}
        placeholder="Placeholder"
        key={key}
        iconBefore={<FavoriteFilled size={16} />}
        iconAfter={<Close size={16} />}
      />
    ))}
  </>
);
