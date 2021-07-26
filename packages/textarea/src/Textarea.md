The `Textarea` component supports all the same display features as the `Input` component, in addition the following 3 props are added specifically for interacting with the Textarea.

```tsx
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  inputDarkTheme,
  inputClassicTheme,
  inputThemeNamespace
} from '@tablecheck/tablekit-input';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [inputThemeNamespace]: inputDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [inputThemeNamespace]: inputClassicTheme
};

const PresentationModule = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <div>
      <ItemGroup orientation="vertical" hasIndent>
        <div>
          <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
            Use dark theme
          </Checkbox>
        </div>
      </ItemGroup>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <Textarea label="Default Textarea" placeholder="Default Settings" />
          <Textarea
            label="Resize Enabled"
            placeholder="Can be resized"
            enableResize
            shouldFitContainer
          />
          <Textarea
            label="Minumum Rows"
            placeholder="Minimum of 6 rows"
            minimumRows={6}
            shouldFitContainer
          />
          <Textarea
            label="Without message placeholder"
            placeholder="Minimum of 6 rows"
            minimumRows={6}
            isMessageHidden
            shouldFitContainer
          />
          <Textarea
            label="Auto Expand"
            placeholder="Type to auto-expand text area"
            shouldAutoExpand
            shouldFitContainer
          />
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
