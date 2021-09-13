import styled from '@emotion/styled';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';
import startCase from 'lodash/startCase';
import { MemoryRouter, NavLink, Route, Switch } from 'react-router-dom';

import { ItemBorderPosition, ItemGroupOrientation } from './types';

import { Item, ItemGroup } from './index';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    borderPosition: {
      control: { type: 'select' },
      options: [
        ItemBorderPosition.Top,
        ItemBorderPosition.Right,
        ItemBorderPosition.Bottom,
        ItemBorderPosition.Left
      ]
    },
    elemAfter: {
      control: false
    },
    elemBefore: {
      control: false
    },
    component: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const WrapperAligment = styled.div`
  text-align: start;
  width: 500px;
`;

const App = styled.div`
  display: flex;
`;

const Page = styled.div`
  padding: 60px;
  min-width: 400px;
  text-align: center;
  color: white;
`;

const Template: Story = ({ ...args }) => <Item {...args}>{args.children}</Item>;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  children: 'Default Item'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled item',
  isDisabled: true
};

export const Selected = Template.bind({});
Selected.args = {
  children: 'Selected item',
  isSelected: true
};

const CentralTemplate: Story = ({ ...args }) => (
  <WrapperAligment>
    <Item {...args} elemBefore={<Icon icon={faGlobe} />}>
      {args.children}
    </Item>
  </WrapperAligment>
);

export const Central = CentralTemplate.bind({});
Central.args = {
  children: 'Used center alignment',
  shouldCenterAlignment: true
};

const ContentTemplate: Story = (args) => (
  <ItemGroup
    headingText="Horizontal orientation with indent"
    orientation={ItemGroupOrientation.Horizontal}
    hasIndent
  >
    <Item {...args}>With text only</Item>
    <Item {...args} href="https://www.tablecheck.com" target="_blank">
      With href and target
    </Item>
    <Item {...args} elemBefore={<Icon icon={faGlobe} />}>
      Item with left icon
    </Item>
    <Item
      {...args}
      elemBefore={<Icon icon={faGlobe} />}
      elemAfter={<Icon icon={faGlobe} />}
    >
      Item with both icons
    </Item>
  </ItemGroup>
);

export const DifferentContents = ContentTemplate.bind({});

const WidthTemplate: Story = (args) => (
  <ItemGroup headingText="With set width" hasIndent>
    <Item {...args} isSelected width="300px">
      With set width
    </Item>
    <ItemGroup orientation={ItemGroupOrientation.Horizontal}>
      <Item
        {...args}
        elemBefore={<Icon icon={faGlobe} />}
        shouldCenterAlignment
        width="50px"
        isSelected
      />
      <Item
        {...args}
        elemBefore={<Icon icon={faGlobe} />}
        shouldCenterAlignment
        width="100px"
      />
      <Item
        {...args}
        elemBefore={<Icon icon={faGlobe} />}
        shouldCenterAlignment
        width="150px"
        isSelected
      />
    </ItemGroup>
  </ItemGroup>
);

export const DifferentWidths = WidthTemplate.bind({});

const HeightTemplate: Story = (args) => (
  <ItemGroup
    orientation={ItemGroupOrientation.Horizontal}
    headingText="With different size"
    hasIndent
  >
    <Item {...args} isSelected size={Size.Regular}>
      This is regular size
    </Item>
    <Item {...args} isSelected size={Size.Large}>
      This is large size
    </Item>
    <Item {...args} isSelected height="100px">
      100px
    </Item>
  </ItemGroup>
);

export const DifferentHeights = HeightTemplate.bind({});

const BorderTemplate: Story = (args) => (
  <ItemGroup
    headingText="With different border position"
    hasIndent
    orientation={ItemGroupOrientation.Horizontal}
  >
    <Item {...args} borderPosition={ItemBorderPosition.Top} isSelected>
      Top
    </Item>
    <Item {...args} borderPosition={ItemBorderPosition.Right} isSelected>
      Right
    </Item>
    <Item {...args} borderPosition={ItemBorderPosition.Bottom} isSelected>
      Bottom
    </Item>
    <Item {...args} borderPosition={ItemBorderPosition.Left} isSelected>
      Left
    </Item>
  </ItemGroup>
);

export const DifferentBorderPositions = BorderTemplate.bind({});

const NavTemplate: Story = () => {
  const NavItem = (props: any) => (
    <Item
      {...props}
      component={NavLink}
      activeClassName="selected"
      useInteractionStateAsClass
    />
  );
  const colors = ['red', 'green', 'blue', 'orange'];

  return (
    <MemoryRouter>
      <App>
        <ItemGroup>
          {colors.map((color) => (
            <NavItem key={color} to={`/${color}`}>
              {startCase(color)} Page
            </NavItem>
          ))}
        </ItemGroup>
        <Switch>
          {colors.map((color) => (
            <Route
              key={color}
              path={`/${color}`}
              render={() => (
                <Page style={{ background: color }}>
                  {startCase(color)} Page
                </Page>
              )}
            />
          ))}
          <Route
            render={() => <Page style={{ color: 'black' }}>Default Page</Page>}
          />
        </Switch>
      </App>
    </MemoryRouter>
  );
};

export const UsageAsNavLink = NavTemplate.bind({});
