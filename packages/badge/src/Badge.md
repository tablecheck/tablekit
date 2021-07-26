### Theme

<div style="display: block; overflow: auto">
| Name                   | Import                                                    |
| -----------------------| --------------------------------------------------------- |
| _badgeDarkTheme_       | `import { badgeDarkTheme } from '@tablecheck/tablekit-badge';`       |
| _badgeClassicTheme_    | `import { badgeClassicTheme } from '@tablecheck/tablekit-badge';`    |
| _badgeThemeNamespace_  | `import { badgeThemeNamespace } from '@tablecheck/tablekit-badge';`  |
</div>

```tsx
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import {
  badgeDarkTheme,
  badgeRedTheme,
  badgeClassicTheme,
  badgeThemeNamespace
} from './themes';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  [badgeThemeNamespace]: badgeDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [badgeThemeNamespace]: badgeClassicTheme,
  colors: CLASSIC_COLORS
};

const redTheme = {
  [badgeThemeNamespace]: badgeRedTheme
};

const PresentationModule = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  return (
    <div>
      <ItemGroup orientation="vertical" title="Default styles">
        <div>
          <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
            Use dark theme
          </Checkbox>
        </div>
      </ItemGroup>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup title="Small size">
            <Badge size="small" value={0} />
          </ItemGroup>
          <ItemGroup title="Regular size">
            <Badge value={0} />
          </ItemGroup>
          <ItemGroup title="Use solid type">
            <Badge type="solid" value={5} />
          </ItemGroup>
          <ItemGroup title="Value 20 with max of 9">
            <Badge maxValue={9} value={20} />
          </ItemGroup>
          <ItemGroup title="Without flexible width">
            <Badge value={1000} />
          </ItemGroup>
          <ItemGroup title="With flexible width">
            <Badge isFlexible value={1000} />
          </ItemGroup>
          <ItemGroup title="With custom children">
            <Badge isFlexible>
              <p>a child</p>
            </Badge>
          </ItemGroup>
          <EmotionThemeProvider theme={redTheme}>
            <ItemGroup
              title="With custom styles"
              orientation="horizontal"
              hasIndent
            >
              <Badge type="solid" value={9} />
              <Badge value={9} />
            </ItemGroup>
          </EmotionThemeProvider>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
