import styled from '@emotion/styled';
import { faCity } from '@fortawesome/free-solid-svg-icons/faCity';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Link, Typography } from '@tablecheck/tablekit-typography';
import { useDarkMode } from 'storybook-dark-mode';

import {
  SelectWrapper,
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace,
  Select,
  SelectProps
} from './index';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        InputSize.Small,
        InputSize.Regular,
        InputSize.Regular2,
        InputSize.Large
      ]
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const options = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra' },
  { label: 'Darwin', value: 'darwin' },
  { label: 'Hobart', value: 'hobart' },
  { label: 'Melbourne', value: 'melbourne' },
  { label: 'Perth', value: 'perth' },
  { label: 'Sydney', value: 'sydney' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Detroit', value: 'detroit' },
  { label: 'Lansing', value: 'lansing' }
];

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

const Description = styled.p`
  ${Typography.Body1};
  padding-top: 20px;
  span {
    line-height: 1;
    margin: 0 2px;
    padding: 3px 5px;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 13px;
    border: 1px solid #eeeeee;
    color: rgba(51, 51, 51, 0.9);
    background-color: #f8f8f8;
  }
`;

const Template: Story<SelectProps> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <SelectWrapper label="Text only" id="id" isMessageHidden>
        <Select {...args} />
      </SelectWrapper>
      <Description>
        React component which allows selection of an item or items from a
        dropdown list, wrapper around react-select. Please refer to react-select
        for{' '}
        <Link href="https://react-select.com/props">prop documentation</Link>.
      </Description>
      <Description>
        Additional props to match with <span>@tablekit/input</span> are:{' '}
        <span>size</span>,<span>shouldFitContainer</span>,{' '}
        <span>isInvalid</span>, <span>isSuccess</span> and{' '}
        <span>isWarning</span>
      </Description>
    </ThemeProvider>
  );
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  options,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body
};

const IconTemplate: Story<SelectProps> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <SelectWrapper label="Icon + text" id="id" isMessageHidden>
        <Select {...args} />
      </SelectWrapper>
    </ThemeProvider>
  );
};

export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
  options,
  iconBefore: <Icon icon={faCity} />,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body
};

export const SmallSize = IconTemplate.bind({});
SmallSize.args = {
  options,
  iconBefore: <Icon icon={faCity} />,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body,
  size: InputSize.Small
};

export const RegularSize = IconTemplate.bind({});
RegularSize.args = {
  options,
  iconBefore: <Icon icon={faCity} />,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body,
  size: InputSize.Regular
};

export const Regular2Size = IconTemplate.bind({});
Regular2Size.args = {
  options,
  iconBefore: <Icon icon={faCity} />,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body,
  size: InputSize.Regular2
};
Regular2Size.storyName = 'Regular2 Size';

export const LargeSize = IconTemplate.bind({});
LargeSize.args = {
  options,
  iconBefore: <Icon icon={faCity} />,
  placeholder: 'Choose a City',
  menuPortalTarget: document.body,
  size: InputSize.Large
};
