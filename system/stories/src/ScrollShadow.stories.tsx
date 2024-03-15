import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { scrollShadow } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'TableKit/ScrollShadow',
  component: emotion.ScrollShadow,
  parameters: { variants: ['Start', 'Center', 'End'], ...scrollShadow }
} as Meta;

const ScrollShadowWrapper = styled.div`
  & > div {
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
  }
`;

const Template: Story<{
  ScrollShadow: typeof emotion.ScrollShadow | typeof css.ScrollShadow;
}> = ({ ScrollShadow }) => (
  <>
    <ScrollShadowWrapper>
      <ScrollShadow data-overflow="y">
        <div>Scrolled Top</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
    <ScrollShadowWrapper>
      <ScrollShadow ref={(ref) => ref?.scrollTo({ top: 80 })} data-overflow="y">
        <div>Scrolled Center</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
    <ScrollShadowWrapper>
      <ScrollShadow
        ref={(ref) => ref?.scrollTo({ top: 400 })}
        data-overflow="y"
      >
        <div>Scrolled Bottom</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
    <ScrollShadowWrapper>
      <ScrollShadow data-overflow="x">
        <div>Scrolled Left</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
    <ScrollShadowWrapper>
      <ScrollShadow
        ref={(ref) => ref?.scrollTo({ left: 80 })}
        data-overflow="x"
      >
        <div>Scrolled Center</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
    <ScrollShadowWrapper>
      <ScrollShadow
        ref={(ref) => ref?.scrollTo({ left: 400 })}
        data-overflow="x"
      >
        <div>Scrolled Right</div>
      </ScrollShadow>
    </ScrollShadowWrapper>
  </>
);

export const Emotion = Template.bind({});
Emotion.args = { ScrollShadow: emotion.ScrollShadow };
Emotion.parameters = { useEmotion: true };

export const Class = Template.bind({});
Class.args = { ScrollShadow: css.ScrollShadow };
Class.parameters = { useEmotion: false };
