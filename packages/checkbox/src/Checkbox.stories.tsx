import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { DARK_COLORS, CLASSIC_COLORS, Size } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { CheckboxProps } from './types';

import {
  Checkbox,
  checkboxDarkTheme,
  checkboxClassicTheme,
  checkboxThemeNamespace
} from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  },
  args: {
    name: 'checkbox',
    value: 'value'
  }
} as Meta;

const darkTheme = {
  [checkboxThemeNamespace]: checkboxDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [checkboxThemeNamespace]: checkboxClassicTheme,
  colors: CLASSIC_COLORS
};

const Template: Story<CheckboxProps> = ({ children, ...args }) => {
  const isDark = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);
  const check = () => {
    setIsChecked((previousValue) => !previousValue);
  };
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Checkbox {...args} onChange={check} isChecked={isChecked}>
        {children}
      </Checkbox>
    </EmotionThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default'
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: Size.Large,
  children: 'Large Size'
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
  children: 'Required'
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: 'Disabled'
};

const CheckedTemplate: Story<CheckboxProps> = ({ children, ...args }) => {
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Checkbox {...args}>{children}</Checkbox>
    </EmotionThemeProvider>
  );
};

export const CheckedAndDisabled = CheckedTemplate.bind({});
CheckedAndDisabled.args = {
  isDisabled: true,
  isChecked: true,
  children: 'Checked and Disabled'
};

export const Multilined = Template.bind({});
Multilined.args = {
  children: (
    <ul>
      <li>This text box</li>
      <li>has multiple lines of code</li>
      <li>
        and actually has quite a lot of content just to fill out the space like
        certain clients do in TableCheck
      </li>
    </ul>
  )
};

const RequiredTemplate: Story<CheckboxProps> = ({ children, ...args }) => {
  const isDark = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);
  const check = () => {
    setIsChecked((previousValue) => !previousValue);
  };
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Checkbox
        {...args}
        onChange={check}
        isChecked={isChecked}
        isInvalid={!isChecked}
      >
        {children}
      </Checkbox>
    </EmotionThemeProvider>
  );
};

export const RequiredHighlight = RequiredTemplate.bind({});
RequiredHighlight.args = {
  children: 'Required (Highlight)',
  isRequired: true
};

export const LongText = RequiredTemplate.bind({});
LongText.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </>
  ),
  isRequired: true
};
