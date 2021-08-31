import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Story, Meta } from '@storybook/react';
import { Size } from '@tablecheck/tablekit-theme';
import { tciSunriseO } from 'tablecheck-icons/tciSunriseO';

import { Icon, IconProps } from './index';

export default {
  title: 'Icon System/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: [
        Size.XSmall,
        Size.Small,
        Size.Regular,
        Size.Regular2,
        Size.Large,
        Size.XLarge,
        Size.XXLarge
      ]
    },
    icon: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const DifferentSizeTemplate: Story<IconProps> = (args) => (
  <>
    <Icon {...args} size={Size.Small} />
    <Icon {...args} />
    <Icon {...args} size={Size.Large} />
  </>
);

export const FontAwesomeIcons = DifferentSizeTemplate.bind({});
FontAwesomeIcons.args = {
  icon: faEdit
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const TablecheckIcons = Template.bind({});
TablecheckIcons.args = {
  size: Size.Large,
  icon: tciSunriseO
};

export const DuotoneIcon = Template.bind({});
DuotoneIcon.args = {
  size: Size.Large,
  icon: faTimes
};

export const ResponsiveIcon = Template.bind({});
ResponsiveIcon.args = {
  size: {
    '(min-width: 800px) and (max-width: 1199px)': Size.Regular,
    'min-width: 1200px': Size.Large,
    default: Size.Small
  },
  icon: faEdit
};
