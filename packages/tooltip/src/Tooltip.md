You can wrap Tooltip around any other React component to display the given content when the user
hovers over the wrapped component.

### Examples

## Basic

```tsx
import { useState } from 'react';
import { Button } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import styled from '@emotion/styled';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { faOmega } from '@fortawesome/pro-solid-svg-icons/faOmega';
import { faCompressAlt } from '@fortawesome/pro-solid-svg-icons/faCompressAlt';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faExpandAlt } from '@fortawesome/pro-solid-svg-icons/faExpandAlt';

import {
  tooltipThemeNamespace,
  tooltipClassicTheme,
  tooltipDarkTheme
} from './themes';

const icons = [
  { icon: faOmega, label: 'faOmega' },
  { icon: faCompressAlt, label: 'faCompressAlt' },
  { icon: faChevronDown, label: 'faChevronDown' },
  { icon: faExpandAlt, label: 'faExpandAlt' }
];

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  margin-right: 10px;
  border-radius: 20px;
  ${({ isDarkTheme }) => isDarkTheme && 'color: white;'};
`;

const darkTheme = {
  [tooltipThemeNamespace]: tooltipDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [tooltipThemeNamespace]: tooltipClassicTheme,
  colors: CLASSIC_COLORS
};

const PresentationModule = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <div>
      <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
        Use dark theme
      </Checkbox>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup hasIndent>
            <Tooltip
              shouldHideOnMouseDown
              content="Some content"
              popperProps={{ placement: 'bottom' }}
            >
              {(setTargetRef) => (
                <Button ref={setTargetRef}>Hover Over Me</Button>
              )}
            </Tooltip>
            <ItemGroup hasIndent orientation="horizontal">
              {icons.map(({ icon, label }) => (
                <Tooltip
                  key={label}
                  content={label}
                  popperProps={{ placement: 'top' }}
                >
                  {(setTargetRef) => (
                    <IconWrapper ref={setTargetRef} isDarkTheme={isDarkTheme}>
                      <Icon icon={icon} />
                    </IconWrapper>
                  )}
                </Tooltip>
              ))}
            </ItemGroup>
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```

## Details

Tooltips have four positions available; "top", "right", "bottom", and "left". Each position
center-aligns itself along the appropriate axis. Click the target below to see each position.

```tsx
import { useState } from 'react';
import { Button } from '@tablecheck/tablekit-button';
import { ThemeProvider } from '@tablecheck/tablekit-theme';

const [position, changePosition] = useState(0);
const VALID_POSITIONS = ['top', 'right', 'bottom', 'left'];

changeDirection = () => {
  changePosition((position + 1) % VALID_POSITIONS.length);
};

<ThemeProvider useLocalStyles>
  <div style={{ display: 'flex' }}>
    <div onClick={changeDirection}>
      <Tooltip
        content={VALID_POSITIONS[position]}
        popperProps={{ placement: VALID_POSITIONS[position] }}
      >
        {(setTargetRef) => <Button ref={setTargetRef}>Target</Button>}
      </Tooltip>
    </div>
  </div>
</ThemeProvider>;
```

Tooltips should only appear when the user has paused on the target element. They should remain
visible if the user briefly moves the mouse off and back on to the target.

Similarly tooltips should not immediately disappear, unless the user hovers over another element
with a tooltip.

When the user scrolls, their attention is no longer on the tooltip. We take this opportunity to
immediately hide the tooltip.

```tsx
import { Button } from '@tablecheck/tablekit-button';
import { ThemeProvider } from '@tablecheck/tablekit-theme';

const appearances = ['primary', 'outline', 'subtle'];

<ThemeProvider useLocalStyles>
  <div style={{ display: 'flex' }}>
    {appearances.map((appearance, i) => (
      <Tooltip
        key={appearance}
        content={appearance}
        popperProps={{ placement: 'top' }}
      >
        {(setTargetRef) => (
          <Button
            ref={setTargetRef}
            appearance={appearance}
            style={{ marginRight: 30 }}
          >
            {appearance}
          </Button>
        )}
      </Tooltip>
    ))}
  </div>
</ThemeProvider>;
```

## Truncate text

```tsx
import { useState } from 'react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Checkbox } from '@tablecheck/tablekit-checkbox';

const [shouldTruncate, toggleTruncate] = useState(false);

toggle = () => toggleTruncate(!shouldTruncate);

const content =
  'The red panda (Ailurus fulgens), also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China.';
const srcSmiling =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Red_Panda_in_a_Gingko_tree.jpg/220px-Red_Panda_in_a_Gingko_tree.jpg ';

<ThemeProvider useLocalStyles>
  <div>
    <Checkbox onChange={toggle}>Truncate text</Checkbox>
    <div style={{ display: 'flex' }}>
      <Tooltip content={content} shouldTruncate={shouldTruncate}>
        {(setTargetRef) => (
          <img
            ref={setTargetRef}
            alt="Red panda - smiling"
            src={srcSmiling}
            style={{ borderRadius: 4, marginRight: 4 }}
            width="220"
          />
        )}
      </Tooltip>
    </div>
  </div>
</ThemeProvider>;
```
