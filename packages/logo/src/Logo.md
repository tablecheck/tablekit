TableCheck Classic and Dark Logos

### Logo changing its theme automatically

```tsx
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import styled from '@emotion/styled';

const darkTheme = {
  isDark: true
};

const classicTheme = {
  isDark: false
};

const Surface = styled.div`
  padding: 20px;
  ${({ isDarkMode }) =>
    isDarkMode ? 'background-color: black' : 'background-color: white'};
`;

const PresentationModule = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Checkbox onChange={() => setDarkMode(!isDarkMode)}>
        Use dark theme
      </Checkbox>
      <EmotionThemeProvider theme={isDarkMode ? darkTheme : classicTheme}>
        <Surface isDarkMode={isDarkMode}>
          <Logo symbolSize="48px" wordingSize="200px" />
        </Surface>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```

### Logo using a specific theme

```tsx
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
`;

const WhiteSurface = styled.div`
  padding: 20px;
`;

const DarkSurface = styled.div`
  background-color: black;
  padding: 20px;
`;

<Wrapper>
  <WhiteSurface>
    <Logo symbolSize="48px" wordingSize="200px" />
  </WhiteSurface>
  <DarkSurface>
    <Logo isDarkTheme symbolSize="48px" wordingSize="200px" />
  </DarkSurface>
</Wrapper>;
```
