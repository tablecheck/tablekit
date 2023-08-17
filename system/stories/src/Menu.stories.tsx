import { Earth } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { menu, menuItem, menuList } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'TableKit/Menu',
  component: emotion.Menu,
  parameters: {
    ...menu,
    auxiliaryClassNames: [menuItem.className, menuList.className],
    auxiliarySelectors: [`.${menuItem.className}`, menuList.selectors],
    auxiliaryComponents: [emotion.MenuItem, emotion.MenuList],
    variants: ['Menu', 'Menu Items']
  }
} as Meta;

function AllMenuItems({ components }: any) {
  return (
    <>
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
        <components.MenuItem data-variant="success">
          <Earth size={20} />
          Success
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-variant="info">
          <Earth size={20} />
          Info
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-variant="error">
          <Earth size={20} />
          Error
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-variant="warning">
          <Earth size={20} />
          Warn
        </components.MenuItem>
      </li>
    </>
  );
}

const Template: StoryFn = ({ components }) => (
  <>
    <components.Menu>
      <components.MenuList>
        <AllMenuItems components={components} />
      </components.MenuList>
    </components.Menu>
    <components.MenuList style={{ maxHeight: 'none' }}>
      <AllMenuItems components={components} />
    </components.MenuList>
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  components: {
    Menu: emotion.Menu,
    MenuList: emotion.MenuList,
    MenuItem: emotion.MenuItem,
    MenuItemLink: emotion.MenuItem.withComponent('a')
  }
};
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  components: {
    Menu: css.Menu,
    MenuList: css.MenuList,
    MenuItem: css.MenuItem,
    MenuItemLink: (props: any) => <a {...props} className="menu-item" />
  }
};
Class.parameters = { useEmotion: false };
