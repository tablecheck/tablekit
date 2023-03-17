import { Earth } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { menu, menuItem, menuList } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'TableKit/Menu',
  component: emotion.Menu,
  parameters: {
    ...menu,
    auxiliaryClassNames: [menuItem.className, menuList.className],
    auxiliarySelectors: [undefined, menuList.selectors],
    auxiliaryComponents: [emotion.MenuItem, emotion.MenuList]
  }
} as Meta;

const Template: Story = ({ components }) => (
  <components.Menu>
    <components.MenuList>
      <li>
        <components.MenuItem>Item</components.MenuItem>
      </li>
      <li>
        <components.MenuItemLink
          href="#"
          onMouseDown={(e: Event) => {
            e.preventDefault();
          }}
        >
          Item as link
        </components.MenuItemLink>
      </li>
      <li>
        <components.MenuItem
          as="button"
          onClick={() => action('button-click')()}
        >
          Item as button
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem>
          <Earth size={20} />
          Item
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem>Item</components.MenuItem>
      </li>
      <li>
        <components.MenuItem>Item</components.MenuItem>
      </li>
      <li>
        <components.MenuItem>Item</components.MenuItem>
      </li>
    </components.MenuList>
  </components.Menu>
);

export const Emotion: Story = Template.bind({});
Emotion.args = {
  components: {
    Menu: emotion.Menu,
    MenuList: emotion.MenuList,
    MenuItem: emotion.MenuItem,
    MenuItemLink: emotion.MenuItem.withComponent('a')
  }
};
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = {
  components: {
    Menu: css.Menu,
    MenuList: css.MenuList,
    MenuItem: css.MenuItem,
    MenuItemLink: (props: any) => <a {...props} className="menu-item" />
  }
};
Class.parameters = { useEmotion: false };
