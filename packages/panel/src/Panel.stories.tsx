import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import { Typography } from '@tablecheck/tablekit-typography';
import faker from 'faker';
import { useState } from 'react';

import { Panel, PanelPosition, PanelProps } from './index';

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    position: {
      control: false
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  p {
    margin-bottom: 10px;
  }
  ul {
    margin-bottom: 20px;
    list-style: disc;
    padding-left: 20px;
  }
`;

const BodyScrollLockWrapper = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(2, 0, 36, 0) 50%,
    rgba(222, 0, 255, 1) 100%
  );
  width: 90vw;
`;

const StyledPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 20px;
  }
`;

const Template: Story<PanelProps> = ({ ...args }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <p>
          An animated slide-in panel component. This type of component is useful
          for side nav or panels that need to be opened from one side of the
          screen.
        </p>
        <ul>
          <li>Width only applies to the left/right panel</li>
          <li>Height only applies to the top/bottom panel</li>
          <li>Bottom and top panels change to 100% height in mobile view.</li>
        </ul>
      </div>
      <Button onClick={() => setOpen(true)}>{args.position} panel</Button>
      <StyledPanel
        {...args}
        isOpen={isOpen}
        onClickOutside={() => setOpen(false)}
      >
        <Button onClick={() => setOpen(false)}>Close Panel</Button>
      </StyledPanel>
    </Wrapper>
  );
};

export const LeftPanel = Template.bind({});
LeftPanel.args = {
  position: PanelPosition.Left,
  width: '400px'
};

export const RightPanel = Template.bind({});
RightPanel.args = {
  position: PanelPosition.Right,
  width: '400px'
};

export const BottomPanel = Template.bind({});
BottomPanel.args = {
  position: PanelPosition.Bottom,
  height: '100px'
};

export const TopPanel = Template.bind({});
TopPanel.args = {
  position: PanelPosition.Top,
  height: '100px'
};

const BodyScrollLockTemplate: Story<PanelProps> = ({ ...args }) => {
  const [state, setState] = useState({
    isOpenRight: false,
    isOpenLeft: false
  });
  const toggleRight = () => {
    setState({
      ...state,
      isOpenRight: !state.isOpenRight
    });
  };
  const toggleLeft = () => {
    setState({
      ...state,
      isOpenLeft: !state.isOpenLeft
    });
  };
  return (
    <BodyScrollLockWrapper>
      <Button onClick={toggleLeft}>Toggle Left Panel</Button>
      <p>
        This story is for testing the case where the panel has full height, and
        making sure it maintains it properly in physical devices when scrolling
        changes the height of the viewport
      </p>
      <Panel {...args} position={PanelPosition.Left} isOpen={state.isOpenLeft}>
        <Button onClick={toggleLeft}>Close Panel</Button>
        <Button onClick={toggleRight}>Toggle Right Panel</Button>
        <p>{faker.lorem.paragraph(30)}</p>
        <Panel
          {...args}
          position={PanelPosition.Right}
          isOpen={state.isOpenRight}
        >
          <Button onClick={toggleRight}>Close Panel</Button>
          <p>{faker.lorem.paragraph(25)}</p>
        </Panel>
      </Panel>
    </BodyScrollLockWrapper>
  );
};

export const BodyScrollLock = BodyScrollLockTemplate.bind({});
BodyScrollLock.args = {
  shouldDisableBodyScroll: true
};
