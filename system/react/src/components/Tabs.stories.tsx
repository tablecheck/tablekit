import styled from '@emotion/styled';
import * as TabElements from '@radix-ui/react-tabs';
import { Story, Meta } from '@storybook/react';

import { TabButton } from './TabButton';
import { Tabs, TabContent } from './Tabs';

export default {
  title: 'TableKit/Tabs'
} as Meta;

const tabs = ['one', 'two', 'three'];

const Tab = TabButton.withComponent(TabElements.Trigger);
const Content = styled(TabContent.withComponent(TabElements.Content))`
  padding-block: var(--spacing-l5);
`;

export const Default: Story<any> = () => (
  <TabElements.Root defaultValue={tabs[0]}>
    <TabElements.List asChild>
      <Tabs role="tablist">
        {tabs.map((name) => (
          <Tab key={name} value={name}>
            {name}
          </Tab>
        ))}
      </Tabs>
    </TabElements.List>
    {tabs.map((name) => (
      <Content role="tabpanel" id={name} value={name} key={name}>
        Content for tab {name}
      </Content>
    ))}
  </TabElements.Root>
);
