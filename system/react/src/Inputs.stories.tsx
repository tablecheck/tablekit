import { Close16, FavoriteFilled16 } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import * as React from 'react';

import { Input, InputWithIcons } from './Input';

export default {
  title: 'TableKit/Input'
} as Meta;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Template: Story<React.ComponentProps<typeof Input>> = (props) => (
  <Wrapper>
    <Input {...props} placeholder="Placeholder" />
    <InputWithIcons {...props}>
      <input placeholder="Placeholder" />
      <Close16 />
    </InputWithIcons>
    <InputWithIcons {...props}>
      <FavoriteFilled16 />
      <input placeholder="Placeholder" />
    </InputWithIcons>
    <InputWithIcons {...props}>
      <FavoriteFilled16 />
      <input placeholder="Placeholder" />
      <Close16 />
    </InputWithIcons>
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
