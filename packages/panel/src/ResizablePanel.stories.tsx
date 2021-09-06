import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import { ItemGroup, ItemGroupOrientation } from '@tablecheck/tablekit-item';
import { Typography } from '@tablecheck/tablekit-typography';
import faker from 'faker';
import { useState } from 'react';

import { ResizablePanel, PanelPosition, ResizablePanelProps } from './index';

export default {
  title: 'Components/ResizablePanel',
  component: ResizablePanel,
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

const BodyLockWrapper = styled.div`
  height: 130vh;
`;

const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 20px;
  }
`;

const StyledScrollable = styled.div`
  display: flex;
  flex-direction: column;
  height: 110vh;
  overflow-y: auto;
  padding: 0 15px;
  p {
    padding-top: 10px;
  }
`;

const Template: Story<ResizablePanelProps> = ({ ...args }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <p>
          An animated slide-in panel component that can be resized. This type of
          component is useful for side nav or panels that need to be opened from
          one side of the screen.
        </p>
        <ul>
          <li>Width only applies to the left/right panel</li>
          <li>Height only applies to the top/bottom panel</li>
        </ul>
      </div>
      <Button onClick={() => setOpen(true)}>{args.position} panel</Button>
      <ResizablePanel
        {...args}
        isOpen={isOpen}
        onClickOutside={() => setOpen(false)}
      >
        <StyledPanel>
          <Button onClick={() => setOpen(false)}>Close Panel</Button>
        </StyledPanel>
      </ResizablePanel>
    </Wrapper>
  );
};

export const LeftPanel = Template.bind({});
LeftPanel.args = {
  position: PanelPosition.Left,
  defaultWidth: 400,
  maxWidth: 600,
  minWidth: 200
};

export const RightPanel = Template.bind({});
RightPanel.args = {
  position: PanelPosition.Right,
  defaultWidth: 400,
  maxWidth: 450,
  minWidth: 200
};

export const BottomPanel = Template.bind({});
BottomPanel.args = {
  position: PanelPosition.Bottom,
  defaultHeight: 100,
  maxHeight: 200,
  minHeight: 50
};

export const TopPanel = Template.bind({});
TopPanel.args = {
  position: PanelPosition.Top,
  defaultHeight: 100,
  maxHeight: 200,
  minHeight: 50
};

const BodyLockTemplate: Story<ResizablePanelProps> = ({ ...args }) => {
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
    <BodyLockWrapper>
      <ItemGroup hasIndent orientation={ItemGroupOrientation.Horizontal}>
        <Button onClick={toggleLeft}>Toggle Left Panel</Button>
        <Button onClick={toggleRight}>Toggle Right Panel</Button>
      </ItemGroup>
      <ResizablePanel
        {...args}
        position={PanelPosition.Left}
        isOpen={state.isOpenLeft}
      >
        <StyledPanel>
          <StyledScrollable>
            <Button onClick={toggleLeft}>Close Panel</Button>
            <p>{faker.lorem.paragraph(30)}</p>
          </StyledScrollable>
        </StyledPanel>
      </ResizablePanel>
      {state.isOpenRight && (
        <ResizablePanel
          {...args}
          position={PanelPosition.Right}
          isOpen={state.isOpenRight}
        >
          <StyledPanel>
            <StyledScrollable>
              <Button onClick={toggleRight}>Close Panel</Button>
              <p>{faker.lorem.paragraph(30)}</p>
            </StyledScrollable>
          </StyledPanel>
        </ResizablePanel>
      )}
    </BodyLockWrapper>
  );
};

export const BodyLock = BodyLockTemplate.bind({});
BodyLock.args = {
  shouldDisableBodyScroll: true,
  minWidth: '200px',
  defaultWidth: 400,
  maxWidth: 600
};
