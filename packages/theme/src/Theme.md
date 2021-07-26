### Available Values

| export name | usage |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | |
| `FieldHeight` | enum of standard field heights in px, eg `<input>` |
| `Spacing` | enum of standard spacing size in px |
| `Size` | enum used for referencing standard sizing options |
| `ZIndex` | enum used for separating different z-index usages |
| `BORDER_RADIUS` | Standard border-radius size (number) |
| `DEPTH` | list of box-shadow and borders for simulating depth |
| `COLORS` | default base color palette, usage is `COLORS.RED.L2` |
| `CLASSIC_COLORS` | classic theme color palette, should be put inserted in the theme object |
| `DARK_COLORS` | dark mode theme color palette, should be inserted in the theme object |
| `getCdnPath` | returns a url for the desired font on our tablecheck CDN, `cdnUrl` must be defined in the node-config files |

### Available Types

| export name     | usage                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| `Level`         | enum used for type checking L1 - L9 key values, usually just COLOR keys     |
| `LevelConst<T>` | object type that requires keys L1 - L9 to be defined, `T` is the value type |

### Spacing

Standard spacing set is defined in `Spacing` object.

```ts
import styled from '@emotion/styled';
import Theme from './Theme';

const Spaces = Object.keys(Theme.Spacing).map((space, i) => {
  const StyledDiv = styled('div')((props) => ({
    background: '#C7B6F1',
    width: Theme.Spacing[space],
    height: '20px',
    marginBottom: '10px',
    marginRight: '10px'
  }));
  const Flex = styled('div')(() => ({
    display: 'flex'
  }));
  const Label = styled('div')(() => ({
    width: '90px'
  }));

  return (
    <Flex key={space}>
      <Label>{`Spacing.${space}`}</Label>
      <StyledDiv />
      <Label>{Theme.Spacing[space]}</Label>
    </Flex>
  );
});

<div>{Spaces}</div>;
```

### Depth

```tsx
import { GRAY } from './colors';
import Theme from './Theme';
import styled from '@emotion/styled';

const DepthRow = styled.div((p) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 24,
  backgroundColor: GRAY.L1
}));

const DepthItemWrapper = styled.div`
  display: flex;
  padding: 42px;
`;

const DepthItem = styled.div((p) => ({
  width: 120,
  height: 120,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...p.depth
}));

<DepthRow>
  {Object.keys(Theme.DEPTH).map((key) => (
    <DepthItemWrapper key={key}>
      <DepthItem depth={Theme.DEPTH[key]}>{key}</DepthItem>
    </DepthItemWrapper>
  ))}
</DepthRow>;
```

### font-weights

The following font-weights are also exported as helpers to go along with the font-face definitions that get inserted from `ThemeProvider`

```tsx
import { FontWeight } from './fonts/weights';
import styled from '@emotion/styled';
import Theme from './Theme';

const Text = styled.p((p) => ({
  fontWeight: p.weight
}));

<div>
  {[
    FontWeight.ExtraLight,
    FontWeight.Light,
    FontWeight.Regular,
    FontWeight.Medium,
    FontWeight.SemiBold,
    FontWeight.Bold
  ].map((key) => {
    return (
      <p key={key} weight={key}>
        FontWeight.{FontWeight[key]} ({key})
      </p>
    );
  })}
</div>;
```

### Theme hooks

```tsx
import { useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider } from './ThemeProvider';
import { Spacing } from './Theme';
import { PURPLE_TRANSLUCENT } from './colors';
import { CLASSIC_COLORS } from './palettes';
import { useColor } from './hooks';

const colorKey = 'primary';

const Example = () => {
  const color = useColor(colorKey);
  const style = {
    alignItems: 'center',
    backgroundColor: PURPLE_TRANSLUCENT.L4,
    display: 'flex',
    justifyContent: 'center',
    minHeight: '76px',
    padding: Spacing.L2,
    textAlign: 'center',
    width: '100%',
    color
  };
  return <div style={style}>Use hooks to get a value ...</div>;
};

const PresentationModule = () => {
  const [presenterTheme, setTheme] = useState({
    colors: {
      ...CLASSIC_COLORS
    }
  });
  useEffect(() => {
    const colors = Object.values(CLASSIC_COLORS);
    const intervalId = setInterval(() => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      setTheme((state) => ({
        colors: {
          ...state.colors,
          [colorKey]: colors[colorIndex]
        }
      }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setTheme]);
  return (
    <EmotionThemeProvider theme={presenterTheme} useLocalStyles>
      <Example />
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
