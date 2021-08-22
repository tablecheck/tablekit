import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import { ItemGroup, ItemGroupOrientation } from '@tablecheck/tablekit-item';
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

const BodyLockWrapper = styled.div`
  height: 130vh;
`;

const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  button {
    margin-top: 20px;
  }
`;

const StyledScrollable = styled.div`
  display: flex;
  flex-direction: column;
  height: 110vh;
  overflow-y: auto;
  padding: 15px;
  p {
    padding-top: 10px;
  }
`;

const Template: Story<PanelProps> = ({ ...args }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <p>
          An animated slide-in panel component. This type of component is useful
          for side nav or panels that need to be opened from the side of the
          scren.
        </p>
        <ul>
          <li>Width only applies to the left/right panel</li>
          <li>Height only applies to the bottom panel</li>
          <li>Bottom panel changes to 100% height in mobile view.</li>
        </ul>
      </div>
      <Button onClick={() => setOpen(true)}>{args.position} panel</Button>
      <Panel {...args} isOpen={isOpen} onClickOutside={() => setOpen(false)}>
        <StyledPanel>
          <Button onClick={() => setOpen(false)}>Close Panel</Button>
        </StyledPanel>
      </Panel>
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

const BodyLockTemplate: Story<PanelProps> = ({ ...args }) => {
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
      <Panel {...args} position={PanelPosition.Left} isOpen={state.isOpenLeft}>
        <StyledPanel>
          <StyledScrollable>
            <Button onClick={toggleLeft}>Close Panel</Button>
            <p>{faker.lorem.paragraph(30)}</p>
          </StyledScrollable>
        </StyledPanel>
      </Panel>
      {state.isOpenRight && (
        <Panel
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
        </Panel>
      )}
    </BodyLockWrapper>
  );
};

export const BodyLock = BodyLockTemplate.bind({});
BodyLock.args = {
  shouldDisableBodyScroll: true,
  width: '400px'
};
