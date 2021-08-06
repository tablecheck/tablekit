import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Size, DARK_COLORS, CLASSIC_COLORS } from '@tablecheck/tablekit-theme';
import { useDarkMode } from 'storybook-dark-mode';

import {
  Badge,
  BadgeType,
  BadgeProps,
  badgeDarkTheme,
  badgeRedTheme,
  badgeClassicTheme,
  badgeThemeNamespace
} from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const darkTheme = {
  [badgeThemeNamespace]: badgeDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [badgeThemeNamespace]: badgeClassicTheme,
  colors: CLASSIC_COLORS
};

const redTheme = {
  [badgeThemeNamespace]: badgeRedTheme
};

const Template: Story<BadgeProps> = (args) => {
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Badge {...args} />
    </EmotionThemeProvider>
  );
};

export const Small = Template.bind({});
Small.args = {
  size: Size.Small,
  value: 111
};

export const Regular = Template.bind({});
Regular.args = {
  size: Size.Regular,
  value: 111
};

export const Solid = Template.bind({});
Solid.args = {
  type: BadgeType.Solid,
  value: 111
};

export const Outline = Template.bind({});
Outline.args = {
  type: BadgeType.Outline,
  value: 111
};

export const Flexible = Template.bind({});
Flexible.args = {
  type: BadgeType.Solid,
  value: 111,
  isFlexible: true
};

export const WithMaxValue = Template.bind({});
WithMaxValue.args = {
  type: BadgeType.Solid,
  value: 100,
  isFlexible: true,
  maxValue: 50
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  type: BadgeType.Solid,
  children: <p>a child</p>,
  isFlexible: true
};

const CustomTemplate: Story<BadgeProps> = (args) => (
  <EmotionThemeProvider theme={redTheme}>
    <Badge {...args} />
  </EmotionThemeProvider>
);

export const WithCustomTheme = CustomTemplate.bind({});
WithCustomTheme.args = {
  type: BadgeType.Solid,
  value: 1
};
