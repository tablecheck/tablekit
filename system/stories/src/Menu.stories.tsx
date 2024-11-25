import { Earth } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { menu, menuItem, menuList } from '@tablecheck/tablekit-core';
import { getConfigDefault } from '@tablecheck/tablekit-react';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const meta: Meta = {
  title: 'Components/Menu',
  component: emotion.Menu,
  parameters: {
    ...menu,
    auxiliaryClassNames: [menuItem.className, menuList.className],
    auxiliarySelectors: [`.${menuItem.className}`, menuList.selectors],
    auxiliaryComponents: [emotion.MenuItem, emotion.MenuList],
    variants: ['Menu', 'Menu Items', 'Selected']
  }
};

export default meta;

function AllMenuItems({ components, isSelected }: any) {
  return (
    <>
      <li>
        <components.MenuItem data-selected={isSelected}>
          Item
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItemLink
          data-selected={isSelected}
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
          data-selected={isSelected}
          as="button"
          onClick={() => action('button-click')()}
        >
          Item as button
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-selected={isSelected}>
          <Earth size={getConfigDefault('iconSize')} />
          Item
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-selected={isSelected} data-variant="success">
          <Earth size={getConfigDefault('iconSize')} />
          Success
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-selected={isSelected} data-variant="info">
          <Earth size={getConfigDefault('iconSize')} />
          Info
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-selected={isSelected} data-variant="error">
          <Earth size={getConfigDefault('iconSize')} />
          Error
        </components.MenuItem>
      </li>
      <li>
        <components.MenuItem data-selected={isSelected} data-variant="warning">
          <Earth size={getConfigDefault('iconSize')} />
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
    <components.MenuList style={{ maxHeight: 'none' }}>
      <AllMenuItems components={components} isSelected />
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
