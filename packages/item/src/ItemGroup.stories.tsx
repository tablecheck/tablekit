import styled from '@emotion/styled';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';

import { ItemGroupOrientation, ItemGroupProps } from './types';

import { Item, ItemGroup } from './index';

export default {
  title: 'Components/Item Group',
  component: ItemGroup,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const StyledItem = styled(Item)`
  width: auto;
`;

const Template: Story<ItemGroupProps> = (args) => {
  const list = ['First content', 'Second content', 'Third content'];
  return (
    <ItemGroup {...args}>
      {list.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </ItemGroup>
  );
};

export const DefaultItemGroup = Template.bind({});
DefaultItemGroup.args = {
  headingText: 'Default ItemGroup'
};
const TitleTemplate: Story<ItemGroupProps> = () => (
  <ItemGroup hasIndent>
    <ItemGroup>
      <Item>This text included in group without title</Item>
    </ItemGroup>
    <ItemGroup headingText={<b>Title</b>}>
      <Item>
        <>This text included in group with title &quot;Title&quot;</>
      </Item>
    </ItemGroup>
    <ItemGroup headingText={<b>This title will be uppercase</b>} isUppercase>
      <Item>This text included in group with title in uppercase</Item>
    </ItemGroup>
  </ItemGroup>
);

export const DifferentTitles = TitleTemplate.bind({});

const OrientationTemplate: Story<ItemGroupProps> = () => {
  const items = ['First content', 'Second content', 'Third content'];
  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
        <ItemGroup headingText="Vertical group (by default)">
          {items.map((item) => (
            <Item key={item} elemBefore={<Icon icon={faCheck} />}>
              {item}
            </Item>
          ))}
        </ItemGroup>
        <ItemGroup headingText="Vertical group with indent" hasIndent>
          {items.map((item) => (
            <Item key={item} elemBefore={<Icon icon={faCheck} />}>
              {item}
            </Item>
          ))}
        </ItemGroup>
      </ItemGroup>
      <ItemGroup>
        <ItemGroup
          headingText="Horizontal group"
          orientation={ItemGroupOrientation.Horizontal}
        >
          {items.map((item) => (
            <Item key={item} elemBefore={<Icon icon={faCheck} />}>
              {item}
            </Item>
          ))}
        </ItemGroup>
        <ItemGroup
          headingText="Horizontal group with indent"
          orientation={ItemGroupOrientation.Horizontal}
          hasIndent
        >
          {items.map((item) => (
            <Item key={item} elemBefore={<Icon icon={faCheck} />}>
              {item}
            </Item>
          ))}
        </ItemGroup>
      </ItemGroup>
    </ItemGroup>
  );
};

export const DifferentOrientations = OrientationTemplate.bind({});

const LongListTemplate: Story<ItemGroupProps> = () => {
  const longList = [
    'First content',
    'Second content',
    'Third content',
    'Fourth content',
    'Fifth content',
    'Sixth content',
    'Seventh content',
    'Eighth content',
    'Ninth content',
    'Tenth content'
  ];
  return (
    <ItemGroup
      headingText="Wrap group with indent"
      orientation={ItemGroupOrientation.Horizontal}
      hasIndent
      shouldWrap
    >
      {longList.map((item) => (
        <StyledItem key={item}>{item}</StyledItem>
      ))}
    </ItemGroup>
  );
};

export const LongList = LongListTemplate.bind({});
