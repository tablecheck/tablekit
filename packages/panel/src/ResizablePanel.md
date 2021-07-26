An animated slide-in panel component that can be horizontally resized. This type of component is useful for side nav or panels that need to be opened from the side of the scren.

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
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Button } from '@tablecheck/tablekit-button';
import { ResizablePanel } from './ResizablePanel';
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
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  width: 100%;
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
  const [defaultWidth, setDefaultWidth] = useState(400);
  const [defaultHeight, setDefaultHeight] = useState(400);
  const [maxWidth, setMaxWidth] = useState(800);
  const [minWidth, setMinWidth] = useState(300);
  const [maxHeight, setMaxHeight] = useState(800);
  const [minHeight, setMinHeight] = useState(300);
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
      const button = document.querySelector('#button-left-resizable');
      if (!button.contains(event.target)) {
        toggleLeftPanel();
      }
    },
    [toggleLeftPanel]
  );
  const onOutsideClickRightPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-right-resizable');
      if (!button.contains(event.target)) {
        toggleRightPanel();
      }
    },
    [toggleRightPanel]
  );
  const onOutsideClickBottomPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-bottom-resizable');
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
              value={defaultWidth}
              onChange={({ target: { value } }) =>
                setDefaultWidth(parseFloat(value))
              }
              type="number"
              label="Default width"
              size={Size.Small}
              width={Size.Small}
            />
            <Input
              value={minWidth}
              onChange={({ target: { value } }) =>
                setMinWidth(parseFloat(value))
              }
              type="number"
              label="Min width"
              size={Size.Small}
              width={Size.Small}
            />
            <Input
              value={maxWidth}
              onChange={({ target: { value } }) =>
                setMaxWidth(parseFloat(value))
              }
              type="number"
              label="Max width"
              size={Size.Small}
              width={Size.Small}
            />
          </ItemGroup>
          <p>
            * Width only applies to the left/right panel
            <br />* Height only applies to the bottom panel
          </p>
          <ItemGroup orientation="horizontal" hasIndent>
            <Input
              value={defaultHeight}
              onChange={({ target: { value } }) =>
                setDefaultHeight(parseFloat(value))
              }
              type="number"
              label="Default height"
              size={Size.Small}
              width={Size.Small}
            />
            <Input
              value={minHeight}
              onChange={({ target: { value } }) =>
                setMinHeight(parseFloat(value))
              }
              type="number"
              label="Min height"
              size={Size.Small}
              width={Size.Small}
            />
            <Input
              value={maxHeight}
              onChange={({ target: { value } }) =>
                setMaxHeight(parseFloat(value))
              }
              type="number"
              label="Max height"
              size={Size.Small}
              width={Size.Small}
            />
          </ItemGroup>
          <ItemGroup orientation="horizontal" hasIndent>
            <Button
              id="button-left-resizable"
              style={{ marginRight: '20px' }}
              onClick={toggleLeftPanel}
            >
              Toggle Left Panel
            </Button>
            <Button id="button-right-resizable" onClick={toggleRightPanel}>
              Toggle Right Panel
            </Button>
            <Button id="button-bottom-resizable" onClick={toggleBottomPanel}>
              Toggle Bottom Panel
            </Button>
          </ItemGroup>
        </ItemGroup>
        <ResizablePanel
          key={`${defaultWidth}_left`}
          className="left-resizable-panel"
          isOpen={state.isOpenLeft}
          position="left"
          defaultWidth={defaultWidth}
          minWidth={minWidth}
          maxWidth={maxWidth}
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
        </ResizablePanel>
        <ResizablePanel
          key={`${defaultWidth}_right`}
          className="right-resizable-panel"
          isOpen={state.isOpenRight}
          position="right"
          defaultWidth={defaultWidth}
          minWidth={minWidth}
          maxWidth={maxWidth}
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
        </ResizablePanel>
        <ResizablePanel
          key={`${defaultHeight}_bottom`}
          className="bottom-resizable-panel"
          isOpen={state.isOpenBottom}
          position="bottom"
          defaultHeight={defaultHeight}
          minHeight={minHeight}
          maxHeight={maxHeight}
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
        </ResizablePanel>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
