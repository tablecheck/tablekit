An animated slide-in panel component. This type of component is useful for side nav or panels that need to be opened from the side of the scren.

### Examples

```tsx
import { useState, useCallback } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Input } from '@tablecheck/tablekit-input';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  color,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Button } from '@tablecheck/tablekit-button';
import { Panel } from './Panel';
import {
  panelDarkTheme,
  panelClassicTheme,
  panelThemeNamespace
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const PanelContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const darkTheme = {
  [panelThemeNamespace]: panelDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [panelThemeNamespace]: panelClassicTheme,
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [state, setPanelState] = useState({
    isOpenLeft: false,
    isOpenRight: false,
    isOpenBottom: false
  });
  const [isDarkMode, setDarkMode] = useState(false);
  const [isClosedOnClickOutside, setClosedOnClickOutside] = useState(true);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const toggleLeftPanel = useCallback(() => {
    setPanelState((oldState) => ({
      ...oldState,
      isOpenLeft: !oldState.isOpenLeft
    }));
  }, [setPanelState]);
  const toggleRightPanel = useCallback(() => {
    setPanelState((oldState) => ({
      ...oldState,
      isOpenRight: !oldState.isOpenRight
    }));
  }, [setPanelState]);
  const toggleBottomPanel = useCallback(() => {
    setPanelState((oldState) => ({
      ...oldState,
      isOpenBottom: !oldState.isOpenBottom
    }));
  }, [setPanelState]);
  const onOutsideClickLeftPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-left');
      if (!button.contains(event.target)) {
        toggleLeftPanel();
      }
    },
    [toggleLeftPanel]
  );
  const onOutsideClickRightPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-right');
      if (!button.contains(event.target)) {
        toggleRightPanel();
      }
    },
    [toggleRightPanel]
  );
  const onOutsideClickBottomPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-bottom');
      if (!button.contains(event.target)) {
        toggleBottomPanel();
      }
    },
    [toggleBottomPanel]
  );
  return (
    <EmotionThemeProvider theme={isDarkMode ? darkTheme : classicTheme}>
      <ExamplesWrapper>
        <ItemGroup hasIndent>
          <ItemGroup orientation="horizontal" hasIndent>
            <ItemGroup orientation="horizontal" hasIndent>
              <Toggle
                isChecked={isDarkMode}
                onChange={() => setDarkMode(!isDarkMode)}
              />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                Use dark theme
              </p>
            </ItemGroup>
            <ItemGroup orientation="horizontal" hasIndent>
              <Toggle
                isChecked={isClosedOnClickOutside}
                onChange={() =>
                  setClosedOnClickOutside(!isClosedOnClickOutside)
                }
              />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                Close on click outside
              </p>
            </ItemGroup>
          </ItemGroup>
          <ItemGroup orientation="horizontal" hasIndent>
            <Input
              value={width}
              onChange={({ target: { value } }) => setWidth(parseFloat(value))}
              type="number"
              label="Panel width"
              size={Size.Small}
              width={Size.Small}
            />
            <Input
              value={height}
              onChange={({ target: { value } }) => setHeight(parseFloat(value))}
              type="number"
              label="Panel height"
              size={Size.Small}
              width={Size.Small}
            />
            <p>
              * Width only applies to the left/right panel
              <br />
              * Height only applies to the bottom panel
              <br />* Bottom panel changes to 100% height in mobile view.
            </p>
          </ItemGroup>
          <ItemGroup orientation="horizontal" hasIndent>
            <Button
              id="button-left"
              style={{ marginRight: '20px' }}
              onClick={toggleLeftPanel}
            >
              Toggle Left Panel
            </Button>
            <Button id="button-right" onClick={toggleRightPanel}>
              Toggle Right Panel
            </Button>
            <Button id="button-bottom" onClick={toggleBottomPanel}>
              Toggle Bottom Panel
            </Button>
          </ItemGroup>
        </ItemGroup>
        <Panel
          className="left-resizable-panel"
          isOpen={state.isOpenLeft}
          position="left"
          width={`${width}px`}
          togglePanel={toggleLeftPanel}
          onClickOutside={isClosedOnClickOutside && onOutsideClickLeftPanel}
        >
          <PanelContent>
            <ItemGroup orientation="horizontal" hasIndent>
              <Button onClick={() => alert('Feel like side nav!')}>
                Side Nav?
              </Button>
              <Button
                onClick={() =>
                  setPanelState((oldState) => ({
                    ...oldState,
                    isOpenLeft: false
                  }))
                }
                appearance="danger"
              >
                Close
              </Button>
            </ItemGroup>
          </PanelContent>
        </Panel>
        <Panel
          className="right-resizable-panel"
          isOpen={state.isOpenRight}
          position="right"
          width={`${width}px`}
          togglePanel={toggleRightPanel}
          onClickOutside={isClosedOnClickOutside && onOutsideClickRightPanel}
        >
          <PanelContent>
            <ItemGroup orientation="horizontal" hasIndent>
              <Button onClick={() => alert('Hello, {{username}}')}>
                Hello World!
              </Button>
              <Button
                onClick={() =>
                  setPanelState((oldState) => ({
                    ...oldState,
                    isOpenRight: false
                  }))
                }
                appearance="danger"
              >
                Close
              </Button>
            </ItemGroup>
          </PanelContent>
        </Panel>
        <Panel
          className="bottom-resizable-panel"
          isOpen={state.isOpenBottom}
          position="bottom"
          height={{
            'max-width: 560px': '100%',
            default: `${height}px`
          }}
          togglePanel={toggleBottomPanel}
          onClickOutside={isClosedOnClickOutside && onOutsideClickBottomPanel}
        >
          <PanelContent>
            <ItemGroup orientation="horizontal" hasIndent>
              <Button onClick={() => alert('Hello, {{username}}')}>
                Hello World!
              </Button>
              <Button
                onClick={() =>
                  setPanelState((oldState) => ({
                    ...oldState,
                    isOpenBottom: false
                  }))
                }
                appearance="danger"
              >
                Close
              </Button>
            </ItemGroup>
          </PanelContent>
        </Panel>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
