import { Earth } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';

export default {
  title: 'TableKit/Menu'
} as Meta;

const MenuItemLink = MenuItem.withComponent('a');

export const Default: Story<any> = () => (
  <Menu>
    <MenuList>
      <li>
        <MenuItem>Item</MenuItem>
      </li>
      <li>
        <MenuItemLink
          href="#"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          Item as link
        </MenuItemLink>
      </li>
      <li>
        <MenuItem as="button" onClick={() => action('button-click')()}>
          Item as button
        </MenuItem>
      </li>
      <li>
        <MenuItem>
          <Earth size={20} />
          Item
        </MenuItem>
      </li>
      <li>
        <MenuItem>Item</MenuItem>
      </li>
      <li>
        <MenuItem>Item</MenuItem>
      </li>
      <li>
        <MenuItem>Item</MenuItem>
      </li>
    </MenuList>
  </Menu>
);
