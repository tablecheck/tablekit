import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';

import {
  ScrollShadow as CoreScrollShadow,
  classySelector
} from './ScrollShadow';

export default {
  title: 'TableKit/ScrollShadow',
  component: CoreScrollShadow,
  parameters: { variants: ['Start', 'Center', 'End'], classySelector }
} as Meta;

const ScrollShadow = styled(CoreScrollShadow)`
  width: 200px;
  height: 200px;
  border: 1px solid var(--border);
  & > div {
    display: flex;
    place-items: center;
    place-content: center;
  }
  &[data-overflow='y'] > div {
    width: 100%;
    height: 360px;
  }
  &[data-overflow='x'] > div {
    width: 360px;
    height: 100%;
  }
`;

export const AllVariants: Story = () => (
  <>
    <ScrollShadow data-overflow="y">
      <div>Scrolled Top</div>
    </ScrollShadow>
    <ScrollShadow ref={(ref) => ref?.scrollTo({ top: 80 })} data-overflow="y">
      <div>Scrolled Center</div>
    </ScrollShadow>
    <ScrollShadow ref={(ref) => ref?.scrollTo({ top: 400 })} data-overflow="y">
      <div>Scrolled Bottom</div>
    </ScrollShadow>
    <ScrollShadow data-overflow="x">
      <div>Scrolled Left</div>
    </ScrollShadow>
    <ScrollShadow ref={(ref) => ref?.scrollTo({ left: 80 })} data-overflow="x">
      <div>Scrolled Center</div>
    </ScrollShadow>
    <ScrollShadow ref={(ref) => ref?.scrollTo({ left: 400 })} data-overflow="x">
      <div>Scrolled Right</div>
    </ScrollShadow>
  </>
);
