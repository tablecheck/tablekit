import { Story, Meta } from '@storybook/react';
import '@tablecheck/tablekit-free-icon-config';
import { Button } from '@tablecheck/tablekit-button';
import { Size } from '@tablecheck/tablekit-theme';
import { useState } from 'react';

import { Appearance, BannerProps } from './types';

import { Banner } from './index';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [
        Appearance.Primary,
        Appearance.Success,
        Appearance.Danger,
        Appearance.Warning
      ]
    },
    customIcon: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: Size.Small,
  message: 'Lorem ipsum dolor'
};

export const Regular = Template.bind({});
Regular.args = {
  size: Size.Regular,
  message: 'Lorem ipsum dolor'
};

export const Regular2 = Template.bind({});
Regular2.args = {
  size: Size.Regular2,
  message: 'Lorem ipsum dolor'
};
Regular2.storyName = 'Regular2';

export const Large = Template.bind({});
Large.args = {
  size: Size.Large,
  message: 'Lorem ipsum dolor'
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: Size.XLarge,
  message: 'Lorem ipsum dolor'
};
XLarge.storyName = 'XLarge';

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: Size.XXLarge,
  message: 'Lorem ipsum dolor'
};
XXLarge.storyName = 'XXLarge';

export const Primary = Template.bind({});
Primary.args = {
  appearance: Appearance.Primary,
  message: 'Lorem ipsum dolor'
};

export const Success = Template.bind({});
Success.args = {
  appearance: Appearance.Success,
  message: 'Lorem ipsum dolor'
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: Appearance.Danger,
  message: 'Lorem ipsum dolor'
};

export const Warning = Template.bind({});
Warning.args = {
  appearance: Appearance.Warning,
  message: 'Lorem ipsum dolor'
};

export const ShotMessage = Template.bind({});
ShotMessage.args = {
  message: 'Lorem ipsum dolor'
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue eget sem viverra, nec vehicula risus aliquam. Nulla a ornare elit. Quisque varius vestibulum nisi quis elementum. Sed in condimentum nisl, at egestas purus. Ut odio magna, sodales sed justo at, mollis dapibus nibh. Phasellus vitae convallis justo. Suspendisse blandit mauris purus, nec dictum dui lobortis ac. Etiam posuere lectus lorem, quis efficitur quam faucibus vitae. Curabitur tincidunt ut purus non tristique.'
};

const DismissedTemplate: Story<BannerProps> = (args) => {
  const [isShowBanner, setIsShowBanner] = useState(true);
  const toggleBaner = () => {
    setIsShowBanner((previousValue) => !previousValue);
  };
  return (
    <>
      {isShowBanner ? (
        <Banner {...args} onClose={toggleBaner} />
      ) : (
        <Button onClick={toggleBaner}>Show Banner</Button>
      )}
    </>
  );
};

export const Dismissed = DismissedTemplate.bind({});
Dismissed.args = {
  isDismissible: true,
  message: 'Lorem ipsum dolor'
};
