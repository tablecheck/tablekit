```tsx
import { useState } from 'react';
import {
  Item,
  ItemGroup,
  ItemGroupContainer,
  itemDarkTheme,
  itemClassicTheme,
  itemThemeNamespace,
  ItemGroupOrientation,
  ItemBorderPosition
} from './index';
import styled from '@emotion/styled';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

const StyledItem = styled(Item)`
  width: auto;
`;

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  [itemThemeNamespace]: itemDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [itemThemeNamespace]: itemClassicTheme,
  colors: CLASSIC_COLORS
};

const items = ['First content', 'Second content', 'Third content'];
const longList = [
  'First content',
  'Second content',
  'Third content',
  'Fourth content',
  'Fifth content',
  'Sixth content',
  'Seventh content',
  'Eighth content',
  'Ninth content',
  'Tenth content'
];

const PresentationModule = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <div>
      <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
        Use dark theme
      </Checkbox>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup>
            <StyledItem>This text included in group without title</StyledItem>
          </ItemGroup>
          <ItemGroup headingText="Title">
            <StyledItem>This text included in group with title</StyledItem>
          </ItemGroup>
          <ItemGroup headingText="This title will be uppercase" isUppercase>
            <StyledItem>Example</StyledItem>
          </ItemGroup>
          <ItemGroup headingText="Vertical group (by default)">
            {items.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </ItemGroup>
          <ItemGroup headingText="Vertical group with indent" hasIndent>
            {items.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </ItemGroup>
          <ItemGroup
            headingText="Horizontal group"
            orientation={ItemGroupOrientation.Horizontal}
          >
            {items.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </ItemGroup>
          <ItemGroup
            headingText="Horizontal group with indent"
            orientation={ItemGroupOrientation.Horizontal}
            hasIndent
          >
            {items.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
          </ItemGroup>
          <ItemGroup
            headingText="Wrap group with indent"
            orientation={ItemGroupOrientation.Horizontal}
            hasIndent
            shouldWrap
          >
            {longList.map((item) => (
              <StyledItem key={item}>{item}</StyledItem>
            ))}
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
