import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { Meta, Story } from '@storybook/react';
import {
  Badge,
  badgeThemeNamespace,
  badgeDarkTheme,
  badgeClassicTheme
} from '@tablecheck/tablekit-badge';
import { Icon } from '@tablecheck/tablekit-icon';
import { DARK_COLORS, CLASSIC_COLORS, Size } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { TabsAlignment, Tab } from './types';

import {
  Tabs,
  tabsDarkTheme,
  tabsClassicTheme,
  tabsThemeNamespace
} from './index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    align: {
      control: { type: 'select' },
      options: [TabsAlignment.Left, TabsAlignment.Center, TabsAlignment.Right]
    },
    currentTab: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const TabContent = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div<{ isActive: boolean }>`
  padding: 20px;
  ${({ isActive }) => (isActive ? 'display: block;' : 'display: none;')};
  ${({ theme }) => `color: ${theme.colors.text};`}
`;

const ItemBadge = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ItemIcon = styled(Icon)`
  margin-left: 5px;
`;

const StyledBadge = styled(Badge)`
  margin-left: 5px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [tabsThemeNamespace]: tabsDarkTheme,
  [badgeThemeNamespace]: badgeDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [tabsThemeNamespace]: tabsClassicTheme,
  [badgeThemeNamespace]: badgeClassicTheme
};

const tabs: Tab[] = [
  {
    content: <span>Tab 1</span>,
    key: 'tab-1'
  },
  {
    content: <span>Tab 2</span>,
    key: 'tab-2',
    isDisabled: true
  },
  {
    content: <span>Tab 3</span>,
    key: 'tab-3'
  },
  {
    content: <span>Tab 4</span>,
    key: 'tab-4'
  }
];

const tabs2 = [
  {
    content: (
      <ItemBadge>
        <span>Shops</span>
        <StyledBadge size={Size.Small} value={2} isFlexible />
      </ItemBadge>
    ),
    key: 'tab-1'
  },
  {
    content: (
      <ItemBadge>
        <span>Customers</span>
        <ItemIcon icon={faUsers} />
      </ItemBadge>
    ),
    key: 'tab-2'
  },
  {
    content: (
      <ItemBadge>
        <span>Reservations</span>
        <StyledBadge size={Size.Small} value={44} isFlexible />
      </ItemBadge>
    ),
    key: 'tab-3'
  },
  {
    content: <span>Tables</span>,
    key: 'tab-4'
  }
];

const Template: Story = (args: any) => {
  const [currentTab, setCurrentTab] = useState('tab-1');
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Tabs {...args} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TabContent>
        <Content isActive={currentTab === 'tab-1'}>
          LoAenean et dapibus massa. Cras sagittis maximus urna. In egestas,
          libero vel egestas ornare, purus urna faucibus urna, et accumsan nisi
          velit vitae arcu. Maecenas tempor orci scelerisque sapien tristique
          semper. Vivamus scelerisque metus ipsum, in sagittis tortor blandit
          ac. Mauris sit amet metus non erat mollis suscipit quis eu libero.
        </Content>
        <Content isActive={currentTab === 'tab-2'}>
          Convallis ac ligula. Curabitur ut neque eget velit mollis feugiat
          vitae sit amet nibh. Integer quis accumsan nulla. In laoreet bibendum
          volutpat. Aliquam molestie sapien sit amet eros luctus, sit amet
          laoreet eros pretium. Aenean et dapibus massa. Cras sagittis maximus
          urna. In egestas, libero vel egestas ornare, purus urna faucibus urna,
          et accumsan nisi velit vitae arcu. Maecenas tempor orci scelerisque
          sapien tristique semper. Vivamus scelerisque metus ipsum, in sagittis
          tortor blandit ac. Mauris sit amet metus non erat mollis suscipit quis
          eu libero.
        </Content>
        <Content isActive={currentTab === 'tab-3'}>
          Aliquam molestie sapien sit amet eros luctus, sit amet laoreet eros
          pretium. Aenean et dapibus massa. Cras sagittis maximus urna. In
          egestas, libero vel egestas ornare, purus urna faucibus urna, et
          accumsan nisi velit vitae arcu. Maecenas tempor orci scelerisque
          sapien tristique semper. Vivamus scelerisque metus ipsum, in sagittis
          tortor blandit ac. Mauris sit amet metus non erat mollis suscipit quis
          eu libero.
        </Content>
        <Content isActive={currentTab === 'tab-4'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          porta lorem. Proin laoreet mauris sit amet pretium suscipit. Etiam ut
          gravida justo. Vivamus placerat maximus nulla. Vestibulum odio enim,
          condimentum maximus auctor nec, convallis ac ligula. Curabitur ut
          neque eget velit mollis feugiat vitae sit amet nibh. Integer quis
          accumsan nulla. In laoreet bibendum volutpat. libero.
        </Content>
      </TabContent>
    </EmotionThemeProvider>
  );
};

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  tabs
};

const AlignTemplate = () => {
  const [currentTab, setCurrentTab] = useState('tab-1');
  const [currentTab2, setCurrentTab2] = useState('tab-1');
  const [currentTab3, setCurrentTab3] = useState('tab-3');
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Tabs
        align={TabsAlignment.Left}
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <TabContent>
        <Content isActive={currentTab === 'tab-1'}>One</Content>
        <Content isActive={currentTab === 'tab-2'}>Two</Content>
        <Content isActive={currentTab === 'tab-3'}>Three</Content>
        <Content isActive={currentTab === 'tab-4'}>Four</Content>
      </TabContent>
      <Tabs
        align={TabsAlignment.Center}
        tabs={tabs2}
        currentTab={currentTab2}
        setCurrentTab={setCurrentTab2}
      />
      <TabContent>
        <Content isActive={currentTab2 === 'tab-1'}>
          LoAenean et dapibus massa. Cras sagittis maximus urna. In egestas,
          libero vel egestas ornare, purus urna faucibus urna, et accumsan nisi
          velit vitae arcu.
        </Content>
        <Content isActive={currentTab2 === 'tab-2'}>
          LoAenean et dapibus massa. Cras sagittis maximus urna. In egestas,
          libero vel egestas ornare, purus urna faucibus urna, et accumsan nisi
          velit vitae arcu.
        </Content>
        <Content isActive={currentTab2 === 'tab-3'}>
          LoAenean et dapibus massa. Cras sagittis maximus urna. In egestas,
          libero vel egestas ornare, purus urna faucibus urna, et accumsan nisi
          velit vitae arcu.
        </Content>
        <Content isActive={currentTab2 === 'tab-4'}>
          LoAenean et dapibus massa. Cras sagittis maximus urna. In egestas,
          libero vel egestas ornare, purus urna faucibus urna, et accumsan nisi
          velit vitae arcu.
        </Content>
      </TabContent>
      <Tabs
        align={TabsAlignment.Right}
        tabs={tabs}
        currentTab={currentTab3}
        setCurrentTab={setCurrentTab3}
      />
      <TabContent>
        <Content isActive={currentTab3 === 'tab-1'}>One</Content>
        <Content isActive={currentTab3 === 'tab-2'}>Two</Content>
        <Content isActive={currentTab3 === 'tab-3'}>Three</Content>
        <Content isActive={currentTab3 === 'tab-4'}>Four</Content>
      </TabContent>
    </EmotionThemeProvider>
  );
};

export const DifferentAligns = AlignTemplate.bind({});
