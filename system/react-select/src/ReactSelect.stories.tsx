import { Story, Meta } from '@storybook/react';
import ReactSelect from 'react-select';

import { useReactSelectConfig } from './index';

const options = ['One', 'Two', 'Three'].map((value) => ({
  label: `Option ${value}`,
  value
}));

const contentVariants = [
  { title: 'Default' },
  {
    title: 'With Value',
    defaultValue: options[0]
  },
  { title: 'Focus', isInternalFocused: true },
  { title: 'Disabled', isDisabled: true },
  { title: 'Disabled with value', isDisabled: true, defaultValue: options[0] },
  { title: 'Error', isInvalid: true }
] as const;

export default {
  title: 'TableKit/useReactSelect hook',
  parameters: {
    variants: contentVariants.map(({ title }) => title),
    packageName: '@tablecheck/tablekit-react-select'
  }
} as Meta;

const Select = (props: Omit<(typeof contentVariants)[number], 'title'>) => {
  const config = useReactSelectConfig({
    dataTestId: 'test-id',
    ...props
  });
  return (
    <ReactSelect
      {...props}
      {...config}
      name="select"
      options={options}
      placeholder="Placeholder"
    />
  );
};

const MultiSelect = (
  props: Omit<(typeof contentVariants)[number], 'title'>
) => {
  const config = useReactSelectConfig<{ label: string; value: string }, true>({
    dataTestId: 'test-id',
    isMulti: true,
    ...props
  });
  return (
    <ReactSelect
      {...props}
      {...config}
      isMulti
      name="select"
      options={options}
      placeholder="Placeholder"
    />
  );
};

export const Variants: Story = () => (
  <>
    {contentVariants.map(({ title: key, ...props }) => (
      <Select key={key} {...props} />
    ))}
    {contentVariants.map(({ title: key, ...props }) => (
      <MultiSelect key={key} {...props} />
    ))}
  </>
);
