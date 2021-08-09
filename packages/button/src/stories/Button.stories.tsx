import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';

import {
  Button,
  ButtonSize,
  ButtonAppearance,
  ButtonShape,
  ButtonColor
} from '../index';

import {
  InfoTemplate,
  RotateTemplate,
  CustomTemplate,
  Template,
  HrefTemplate,
  RefTemplate
} from './storyTemplates';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['submit', 'reset', 'button']
    },
    shape: {
      control: { type: 'select' },
      options: [ButtonShape.Sharp, ButtonShape.Rounded, ButtonShape.Circular]
    },
    color: {
      control: { type: 'select' },
      options: [
        ButtonColor.Primary,
        ButtonColor.Ghost,
        ButtonColor.Danger,
        ButtonColor.Success,
        ButtonColor.Warning
      ]
    },
    size: {
      control: { type: 'select' },
      options: [
        ButtonSize.Small,
        ButtonSize.Regular,
        ButtonSize.Regular2,
        ButtonSize.Large
      ]
    },
    IconBefore: {
      control: false
    },
    IconAfter: {
      control: false
    }
  }
} as Meta;

export const Information = InfoTemplate.bind({});

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: ButtonSize.Small,
  children: 'small'
};

export const RegularSize = Template.bind({});
RegularSize.args = {
  size: ButtonSize.Regular,
  children: 'regular'
};

export const Regular2Size = Template.bind({});
Regular2Size.args = {
  size: ButtonSize.Regular2,
  children: 'regular2'
};
Regular2Size.storyName = 'Regular2 Size';

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: ButtonSize.Large,
  children: 'large'
};

export const VerticalAppearance = Template.bind({});
VerticalAppearance.args = {
  appearance: ButtonAppearance.Vertical,
  children: 'vertical'
};

export const SubtleOutlineAppearance = Template.bind({});
SubtleOutlineAppearance.args = {
  appearance: ButtonAppearance.SubtleOutline,
  children: 'subtleOutline'
};

export const SubtleAppearance = Template.bind({});
SubtleAppearance.args = {
  appearance: ButtonAppearance.Subtle,
  children: 'subtle'
};

export const SolidAppearance = Template.bind({});
SolidAppearance.args = {
  appearance: ButtonAppearance.Solid,
  children: 'solid'
};

export const OutlineAppearance = Template.bind({});
OutlineAppearance.args = {
  appearance: ButtonAppearance.Outline,
  children: 'outline'
};

export const DisabledVerticalAppearance = Template.bind({});
DisabledVerticalAppearance.args = {
  appearance: ButtonAppearance.DisabledVertical,
  children: 'disabledVertical'
};

export const DisabledAppearance = Template.bind({});
DisabledAppearance.args = {
  appearance: ButtonAppearance.Disabled,
  children: 'disabled'
};

export const DangerColor = Template.bind({});
DangerColor.args = {
  color: ButtonColor.Danger,
  children: 'danger'
};

export const GhostColor = Template.bind({});
GhostColor.args = {
  color: ButtonColor.Ghost,
  children: 'ghost'
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: ButtonColor.Primary,
  children: 'primary'
};

export const SuccessColor = Template.bind({});
SuccessColor.args = {
  color: ButtonColor.Success,
  children: 'success'
};

export const WarningColor = Template.bind({});
WarningColor.args = {
  color: ButtonColor.Warning,
  children: 'warning'
};

export const CircularShape = Template.bind({});
CircularShape.args = {
  shape: ButtonShape.Circular,
  children: 'circular'
};

export const RoundedShape = Template.bind({});
RoundedShape.args = {
  shape: ButtonShape.Rounded,
  children: 'rounded'
};

export const SharpShape = Template.bind({});
SharpShape.args = {
  shape: ButtonShape.Sharp,
  children: 'sharp'
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  iconBefore: <Icon icon={faEdit} />,
  children: 'icon before'
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  iconAfter: <Icon icon={faChevronDown} />,
  children: 'icon after'
};

export const IconBeforeShapeCircular = Template.bind({});
IconBeforeShapeCircular.args = {
  iconAfter: <Icon icon={faCircle} />,
  shape: ButtonShape.Circular,
  appearance: ButtonAppearance.Solid,
  color: ButtonColor.Primary
};

export const Link = HrefTemplate.bind({});
Link.args = {
  children: 'link to Google'
};

export const DisabledLink = HrefTemplate.bind({});
DisabledLink.args = {
  isDisabled: true,
  children: 'disabled Link to Google'
};

export const ForwardedRef = RefTemplate.bind({});
ForwardedRef.args = {
  children: 'forwarded Ref'
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  shape: ButtonShape.Circular,
  size: ButtonSize.Small,
  appearance: ButtonAppearance.Subtle,
  iconBefore: <Icon icon={faEdit} />
};

export const ResponsiveButton = Template.bind({});
ResponsiveButton.args = {
  size: {
    'min-width: 800px': ButtonSize.Large,
    default: ButtonSize.Regular
  },
  children: 'size can also be responsive '
};

export const FittedForContainer = Template.bind({});
FittedForContainer.args = {
  children: 'center aligned icons',
  iconBefore: <Icon icon={faEdit} />,
  iconAfter: <Icon icon={faEdit} />,
  shouldFitContainer: true
};

export const ButtonCustomTheming = CustomTemplate.bind({});
ButtonCustomTheming.args = {
  shape: ButtonShape.Circular,
  iconBefore: <Icon icon={faEdit} />
};

export const AnimatedButtonIcon = RotateTemplate.bind({});
AnimatedButtonIcon.args = {
  iconAfter: <Icon icon={faChevronDown} />,
  children: ' Animated Button Icon'
};
