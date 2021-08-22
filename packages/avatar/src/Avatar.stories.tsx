import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Size } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

import { AvatarProps } from './types';

import { Avatar } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const InfoWrapper = styled.div`
  ${Typography.Body1};
  display: flex;
  flex-direction: column;
  width: 94%;
  margin: 20px auto;
  p {
    margin-bottom: 10px;
  }
  ul {
    margin-bottom: 20px;
    list-style: disc;
    padding-left: 3%;
  }
`;

const Wrapper = styled(InfoWrapper)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    margin-top: -20px;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoTemplate: Story<AvatarProps> = (args) => (
  <InfoWrapper>
    <div>
      <p>Avatars represent users that are using the application.</p>
      <ul>
        <li>If the image is passed, then the image will be shown</li>
        <li>If the initials are passed, then the initials will be shown</li>
        <li>
          If no image or initials are passed, then the user icon will be shown
        </li>
      </ul>
    </div>
    <AvatarWrapper>
      <Avatar {...args} />
    </AvatarWrapper>
  </InfoWrapper>
);

export const XSmall = InfoTemplate.bind({});
XSmall.args = {
  size: Size.XSmall
};
XSmall.storyName = 'XSmall';

const Template: Story<AvatarProps> = (args) => (
  <Wrapper>
    <Avatar {...args} />
  </Wrapper>
);

export const Small = Template.bind({});
Small.args = {
  size: Size.Small
};

export const Regular = Template.bind({});
Regular.args = {
  size: Size.Regular
};

export const Regular2 = Template.bind({});
Regular2.args = {
  size: Size.Regular2
};

export const Large = Template.bind({});
Large.args = {
  size: Size.Large
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: Size.XLarge
};
XLarge.storyName = 'XLarge';

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: Size.XXLarge
};
XXLarge.storyName = 'XXLarge';

export const WithInitials = Template.bind({});
WithInitials.args = {
  size: Size.Large,
  initials: 'JS'
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: Size.Large,
  imageUrl: 'https://i.pravatar.cc/200?img=31'
};

export const WithoutImageAndInitials = Template.bind({});
WithoutImageAndInitials.args = {
  name: 'John Smith'
};
