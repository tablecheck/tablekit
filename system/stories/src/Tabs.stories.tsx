import styled from '@emotion/styled';
import * as TabElements from '@radix-ui/react-tabs';
import { Story, Meta } from '@storybook/react';
import { tabs, tabButton, tabContent } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'Components/Tabs',
  component: emotion.Tabs,
  parameters: {
    ...tabs,
    auxiliaryClassNames: [tabContent.className, tabButton.className],
    auxiliaryComponents: [emotion.TabContent, emotion.TabButton]
  }
} as Meta;

const tabNames = ['one', 'two', 'three'];

const EmotionTab = emotion.TabButton.withComponent(TabElements.Trigger);
const EmotionTabContent = styled(
  emotion.TabContent.withComponent(TabElements.Content)
)`
  padding-block: var(--spacing-l5);
`;

export const Emotion: Story<any> = () => (
  <TabElements.Root defaultValue={tabNames[0]}>
    <TabElements.List asChild>
      <emotion.Tabs role="tablist">
        {tabNames.map((name) => (
          <EmotionTab key={name} role="tab" aria-controls={name} value={name}>
            {name}
          </EmotionTab>
        ))}
      </emotion.Tabs>
    </TabElements.List>
    {tabNames.map((name) => (
      <EmotionTabContent role="tabpanel" id={name} value={name} key={name}>
        Content for tab {name}
      </EmotionTabContent>
    ))}
  </TabElements.Root>
);
Emotion.parameters = { useEmotion: true };

export const Class: Story<any> = () => (
  <TabElements.Root defaultValue={tabNames[0]}>
    <TabElements.List asChild>
      <css.Tabs role="tablist">
        {tabNames.map((name) => (
          <TabElements.Trigger
            key={name}
            role="tab"
            aria-controls={name}
            value={name}
            className={tabButton.className}
          >
            {name}
          </TabElements.Trigger>
        ))}
      </css.Tabs>
    </TabElements.List>
    {tabNames.map((name) => (
      <TabElements.Content
        role="tabpanel"
        id={name}
        value={name}
        key={name}
        className={tabContent.className}
        style={{ paddingBlock: 'var(--spacing-l5)' }}
      >
        Content for tab {name}
      </TabElements.Content>
    ))}
  </TabElements.Root>
);
Class.parameters = { useEmotion: false };
