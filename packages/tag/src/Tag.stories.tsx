import { ThemeProvider } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { COLORS } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { PropsType } from './Tag';

import {
  Tag,
  TagSize,
  TagAppearance,
  tagDarkTheme,
  tagClassicTheme,
  tagThemeNamespace
} from './index';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        COLORS.RED.L5,
        COLORS.PURPLE.L5,
        COLORS.BLUE.L5,
        COLORS.YELLOW.L5,
        COLORS.GREEN.L5
      ]
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  },
  args: {
    isSelected: false
  }
} as Meta;

const darkTheme = {
  [tagThemeNamespace]: tagDarkTheme
};

const classicTheme = {
  [tagThemeNamespace]: tagClassicTheme
};

const Template: Story<PropsType> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Tag {...args} isSelected={args.isSelected}>
        tag
      </Tag>
    </ThemeProvider>
  );
};

export const Small = Template.bind({});
Small.args = {
  size: TagSize.Small
};

export const Regular = Template.bind({});
Regular.args = {
  size: TagSize.Regular
};

export const Outline = Template.bind({});
Outline.args = {
  appearance: TagAppearance.Outline
};

export const Solid = Template.bind({});
Solid.args = {
  appearance: TagAppearance.Solid
};

export const Color = Template.bind({});
Color.args = {
  color: COLORS.PURPLE.L5
};

const SelectedTemplate: Story<PropsType> = ({ ...args }) => {
  const isDark = useDarkMode();
  const [selectedTag, setSelectedTag] = useState<boolean | undefined>(
    args.isSelected
  );
  const toggleTags = () => {
    setSelectedTag((previousValue) => !previousValue);
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Tag {...args} onClick={toggleTags} isSelected={selectedTag}>
        tag
      </Tag>
    </ThemeProvider>
  );
};

export const Selected = SelectedTemplate.bind({});
Selected.args = {
  isSelected: true
};
