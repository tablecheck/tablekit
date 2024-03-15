import { Story, Meta } from '@storybook/react';
import { useReactSelectConfig } from '@tablecheck/tablekit-react-select';
import ReactSelect from 'react-select';

const options = ['One', 'Two', 'Three'].map((value) => ({
  label: `Option ${value}`,
  value
}));

const getContentVariants = (isMulti = false) => {
  const defaultValue = isMulti ? [options[0], options[1]] : options[0];

  return [
    { title: 'Default' },
    {
      title: 'With Value',
      defaultValue
    },
    { title: 'Focus', isInternalFocused: true },
    { title: 'Disabled', isDisabled: true },
    {
      title: 'Disabled with value',
      isDisabled: true,
      defaultValue
    },
    { title: 'Error', isInvalid: true }
  ] as const;
};

export default {
  title: 'TableKit/useReactSelect hook',
  parameters: {
    variants: getContentVariants().map(({ title }) => title),
    importName: 'useReactSelectConfig',
    packageName: '@tablecheck/tablekit-react-select'
  }
} as Meta;

const Select = (
  props: Omit<ReturnType<typeof getContentVariants>[number], 'title'>
) => {
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

const MultiSelect = ({
  ...props
}: Omit<ReturnType<typeof getContentVariants>[number], 'title'> & {
  useVerticalMultiValues?: boolean;
}) => {
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
    {getContentVariants().map(({ title: key, ...props }) => (
      <Select key={key} {...props} />
    ))}
    {getContentVariants(true).map(({ title: key, ...props }) => (
      <MultiSelect key={key} {...props} />
    ))}
    {getContentVariants(true).map(({ title: key, ...props }) => (
      <MultiSelect key={key} useVerticalMultiValues {...props} />
    ))}
  </>
);
