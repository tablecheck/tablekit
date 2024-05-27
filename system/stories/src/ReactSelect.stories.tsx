import { UserRole } from '@carbon/icons-react';
import { Story, Meta } from '@storybook/react';
import { getCarbonIconSize } from '@tablecheck/tablekit-react';
import { useReactSelectConfig } from '@tablecheck/tablekit-react-select';
import * as React from 'react';
import ReactSelect from 'react-select';

const options = ['One', 'Two', 'Three'].map((value) => ({
  label: value,
  value
}));

const getContentVariants = (
  valuesCount: number,
  size: Parameters<typeof getCarbonIconSize>[0]
) => {
  const defaultValue = options.slice(0, valuesCount);

  return [
    { title: 'Default' },
    {
      title: 'Placeholder + Icon',
      icon: <UserRole size={getCarbonIconSize(size)} />
    },
    {
      title: 'With Value',
      defaultValue
    },
    {
      title: 'Value + Icon',
      icon: <UserRole size={getCarbonIconSize(size)} />,
      defaultValue
    },
    { title: 'Focus', isInternalFocused: true, defaultValue },
    { title: 'Disabled', isDisabled: true },
    {
      title: 'Disabled with value',
      isDisabled: true,
      defaultValue
    },
    { title: 'Error', isInvalid: true, defaultValue }
  ] as const;
};

export default {
  title: 'Components/useReactSelect hook',
  parameters: {
    variants: getContentVariants(1, 'small').map(({ title }) => title),
    importName: 'useReactSelectConfig',
    packageName: '@tablecheck/tablekit-react-select'
  }
} as Meta;

const Select = ({
  placeholder,
  ...props
}: Omit<ReturnType<typeof getContentVariants>[number], 'title'> & {
  size: 'small' | 'medium' | 'large';
  placeholder?: string;
}) => {
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
      placeholder={placeholder ?? 'Placeholder'}
    />
  );
};

const MultiSelect = ({
  placeholder = 'Placeholder',
  ...props
}: Omit<ReturnType<typeof getContentVariants>[number], 'title'> & {
  useVerticalMultiValues?: boolean;
  size: 'small' | 'medium' | 'large';
  placeholder?: string;
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
      placeholder={placeholder}
    />
  );
};

export const Variants: Story = () => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {getContentVariants(1, size).map(({ title: key, ...props }) => (
          <Select key={key} placeholder="Single" {...props} size={size} />
        ))}
        {getContentVariants(2, size).map(({ title: key, ...props }) => (
          <MultiSelect
            key={key}
            placeholder="Multiple"
            {...props}
            size={size}
          />
        ))}
        {getContentVariants(2, size).map(({ title: key, ...props }) => (
          <MultiSelect
            key={key}
            placeholder="Vertical Multi"
            useVerticalMultiValues
            {...props}
            size={size}
          />
        ))}
      </React.Fragment>
    ))}
  </>
);
