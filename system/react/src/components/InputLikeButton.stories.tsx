import { Close, FavoriteFilled } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import * as React from 'react';

import { InputLikeButton } from './InputLikeButton';

export default {
  title: 'TableKit/InputLikeButton',
  component: InputLikeButton
} as Meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Template: Story<React.ComponentProps<typeof InputLikeButton>> = (
  props
) => (
  <Wrapper>
    <InputLikeButton {...props}>Click Me!</InputLikeButton>
    <InputLikeButton {...props}>
      Click Me!
      <Close size={16} />
    </InputLikeButton>
    <InputLikeButton {...props}>
      <FavoriteFilled size={16} />
      Click Me!
    </InputLikeButton>
    <InputLikeButton {...props}>
      <FavoriteFilled size={16} />
      Click Me!
      <Close size={16} />
    </InputLikeButton>
  </Wrapper>
);
Template.storyName = 'Default';

export const Disabled = Template.bind({});
Disabled.args = {
  'data-disabled': true
};
export const Stretched = Template.bind({});
Stretched.args = {
  'data-stretch': true
};
export const Error = Template.bind({});
Error.args = {
  'data-error': true
};
