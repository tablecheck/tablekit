import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';

import { Props } from './Logo';

import { Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  },
  args: {
    symbolSize: '24px',
    wordingSize: '96px'
  }
} as Meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const DarkThemeWrapper = styled(Wrapper)`
  height: 110px;
`;

const Surface = styled.div`
  background-color: black;
  padding: 20px;
`;

const Template: Story<Props> = (args) => (
  <Wrapper>
    <p>Logo changing its theme automatically</p>
    <Logo {...args} />
  </Wrapper>
);

export const DefaultLogo = Template.bind({});

const DarkThemeTemplate: Story<Props> = (args) => (
  <DarkThemeWrapper>
    <p>Logo using a specific theme</p>
    <Surface>
      <Logo {...args} />
    </Surface>
  </DarkThemeWrapper>
);

export const DarkTheme = DarkThemeTemplate.bind({});
DarkTheme.args = {
  isDarkTheme: true
};
