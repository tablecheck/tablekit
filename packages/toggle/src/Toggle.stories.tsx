import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Input } from '@tablecheck/tablekit-input';
import { DARK_COLORS, CLASSIC_COLORS } from '@tablecheck/tablekit-theme';
import { useState, ChangeEvent } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { ToggleProps } from './types';

import {
  Toggle,
  toggleDarkTheme,
  toggleClassicTheme,
  toggleThemeNamespace
} from './index';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    isChecked: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const darkTheme = {
  colors: DARK_COLORS,
  [toggleThemeNamespace]: toggleDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [toggleThemeNamespace]: toggleClassicTheme
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  font-size: 13px;
  line-height: 20px;
  ${({ theme }) => `color: ${theme.colors.text}`}
`;

const ExamplesWrapper = styled(Wrapper)`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 20px 20px 0;
  height: 165px;
`;

const DarkThemeTemplate: Story<ToggleProps> = (args) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((previousValue) => !previousValue);
  };
  return (
    <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
      <ExamplesWrapper>
        <Toggle {...args} isChecked={isDarkTheme} onChange={toggleTheme} />
        <div>
          <p>Input for tab testing</p>
          <Input />
        </div>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

export const DarkTheme = DarkThemeTemplate.bind({});
DarkTheme.args = {
  label: 'Use dark theme'
};

const Template: Story<ToggleProps> = (args) => {
  const isDark = useDarkMode();
  console.log('dark', isDark);
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Toggle {...args} />
    </EmotionThemeProvider>
  );
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled with label',
  isDisabled: true,
  isChecked: false,
  onChange: (event) => console.log(event.currentTarget.checked, 'Disabled')
};

export const PowerType = Template.bind({});
PowerType.args = {
  label: 'Power type',
  type: 'power',
  onChange: (event) => console.log(event.currentTarget.checked, 'Power type')
};

export const ConfirmType = Template.bind({});
ConfirmType.args = {
  label: 'Confirm type, uncontrolled default',
  type: 'confirm',
  defaultChecked: true
};

const SynchronisedTemplate: Story<ToggleProps> = (args) => {
  const [isChecked, setIsChecked] = useState(true);
  const changeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.checked, 'Regular');
    setIsChecked(event.currentTarget.checked);
  };
  return (
    <Wrapper>
      <p>{`Regular, controlled. State is "${isChecked ? 'true' : 'false'}"`}</p>
      <div>
        <Toggle {...args} isChecked={isChecked} onChange={changeTheme} />
        <Toggle {...args} label="Synchronised" isChecked={isChecked} />
      </div>
    </Wrapper>
  );
};

export const Synchronised = SynchronisedTemplate.bind({});
Synchronised.args = {
  label: 'Regular with label'
};
