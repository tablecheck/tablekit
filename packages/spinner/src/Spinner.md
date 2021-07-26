Spinners are used for showing a system process of unknown length going on
that ends with the system displaying results to the user.

### Examples

#### Basic

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  spinnerDarkTheme,
  spinnerClassicTheme,
  spinnerThemeNamespace
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  [spinnerThemeNamespace]: spinnerDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [spinnerThemeNamespace]: spinnerClassicTheme,
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <Toggle
          isChecked={isDarkTheme}
          onChange={() => toggleDarkTheme(!isDarkTheme)}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Use Dark Theme
        </div>
      </ItemGroup>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup hasIndent>
            <ItemGroup orientation="horizontal" hasIndent>
              <Spinner size="large" />
              <Spinner size="regular" />
            </ItemGroup>
            <p>
              Some text here before a responsive inline spinner,{' '}
              <Spinner
                size={{ 'min-width: 800px': 'large', default: 'regular' }}
              />
            </p>
            <EmotionThemeProvider
              theme={{
                [spinnerThemeNamespace]: {
                  fillColor: isDarkTheme
                    ? DARK_COLORS.danger
                    : CLASSIC_COLORS.danger
                }
              }}
            >
              <ItemGroup orientation="horizontal" hasIndent>
                <p>Custom colors are applied on spinner:</p>
                <Spinner size="regular" />
                <Spinner size="large" />
              </ItemGroup>
            </EmotionThemeProvider>
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

#### Animation Options

The spinner animates in, as well as animating out when \`isCompleting\` is passed to it.

```tsx
import { useState } from 'react';
import { Button } from '@tablecheck/tablekit-button';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { ThemeProvider } from '@tablecheck/tablekit-theme';

const PresentationContainer = () => {
  const [isCompleting, setIsCompleting] = useState(false);
  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <div>
          <Spinner
            size="large"
            delay={3000}
            isCompleting={isCompleting}
            onComplete={() => console.log('Spinner has completed')}
          />
        </div>
        <div>
          <Spinner size="large" isCompleting={isCompleting} />
        </div>
      </ItemGroup>
      <div>
        <Button onClick={() => setIsCompleting(!isCompleting)}>
          Toggle Spinners
        </Button>
      </div>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
