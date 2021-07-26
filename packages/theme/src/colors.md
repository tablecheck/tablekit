**Note** There are 2 colors which are allowed to be "un-themed" and essentially "magic". These
are `white` (`#FFFFFF`) and `black` (`#000000`) and may be used as their CSS name values as this is
unambiguous and cannot have a secondary meaning, eg `background-color: white;`.

## Named colors

```tsx noeditor
import { Fragment, useState } from 'react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Header, Text } from '@tablecheck/tablekit-typography';
import styled from '@emotion/styled';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Canvas, Swatch } from '../../../oldDocs/helpers/styled';
import { getColors } from '../../../oldDocs/helpers/colors';
import { CLASSIC_COLORS, DARK_COLORS } from './palettes';

const ColorBox = styled.div`
  display: inline-block;
  width: calc(20% - 10px);
  height: 120px;
  margin: 0 5px 100px 5px;
  font-size: 14px;
`;

const darkTheme = {
  colors: DARK_COLORS
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [colors, toggleColors] = useState(CLASSIC_COLORS);
  const [isDarkTheme, toggleTheme] = useState(false);

  const colorObjs = getColors(colors);

  return (
    <ThemeProvider useLocalStyles>
      <ItemGroup orientation="horizontal" hasIndent>
        <Toggle
          isChecked={isDarkTheme}
          onChange={() => {
            toggleTheme(!isDarkTheme);
            toggleColors(colors === DARK_COLORS ? CLASSIC_COLORS : DARK_COLORS);
          }}
        />
        <p style={{ display: 'flex', alignItems: 'center' }}>Use Dark Theme</p>
      </ItemGroup>
      <ThemeProvider
        useLocalStyles
        theme={isDarkTheme ? darkTheme : classicTheme}
      >
        <Canvas backgroundColor={colors.canvas}>
          {colorObjs.map((o) => (
            <ColorBox key={`${o.color}_${o.colorLevel}_${o.name}`}>
              <Swatch color={o.color} />
              <h2>{o.name}</h2>
              <p>{o.color}</p>
              <p>{o.colorLevel}</p>
            </ColorBox>
          ))}
        </Canvas>
      </ThemeProvider>
    </ThemeProvider>
  );
};

<PresentationContainer />;
```

The theme colors can be overwritten via a `ThemeProvider`.

```tsx static
import { COLORS, ThemeProvider } from '@tablecheck/tablekit-theme';

const SecondarySpan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const PrimarySpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
```

```tsx noeditor
import styled from '@emotion/styled';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import Code from 'rsg-components/Code/CodeRenderer';
import { Block } from '@tablecheck-react-system/document-utils';
import { COLORS, CLASSIC_COLORS } from './index';

// doc does not compile styled-component in string template format properly
// See the static example above
const PrimarySpan = styled('span')(({ theme }) => ({
  color: theme.colors.primary
}));

const SecondarySpan = styled('span')(({ theme }) => ({
  color: theme.colors.secondary
}));

<ThemeProvider useLocalStyles>
  <Block heading="use secondary color">
    <SecondarySpan>
      Default base <Code>theme.colors.secondary</Code>
    </SecondarySpan>
  </Block>
  <Block heading="use primary color">
    <PrimarySpan>
      Default theme <Code>theme.colors.primary</Code>
    </PrimarySpan>
  </Block>
  <Block heading="overwrite primary color">
    <ThemeProvider
      useLocalStyles
      theme={{ colors: { ...CLASSIC_COLORS, primary: COLORS.GREEN.L5 } }}
    >
      <PrimarySpan>
        Custom theme <Code>theme.colors.primary</Code>
      </PrimarySpan>
    </ThemeProvider>
  </Block>
</ThemeProvider>;
```
