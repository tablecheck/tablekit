```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import {
  COLORS,
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  Item,
  ItemGroup,
  ItemGroupOrientation,
  itemDarkTheme,
  itemClassicTheme,
  itemThemeNamespace,
  ItemBorderPosition
} from './index';

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

const PresentationModule = () => {
  const [useDarkTheme, toggleTheme] = useState(false);

  return (
    <div>
      <Checkbox onChange={() => toggleTheme(!useDarkTheme)}>
        Use dark theme
      </Checkbox>
      <EmotionThemeProvider theme={useDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup headingText="This is group title">
            <Item>First item</Item>
          </ItemGroup>
          <ItemGroup
            headingText="Horizontal orientation with indent"
            orientation={ItemGroupOrientation.Horizontal}
            hasIndent
          >
            <Item>With text only</Item>
            <Item href="https://www.tablecheck.com" target="_blank">
              With href and target
            </Item>
            <Item elemBefore={<Icon icon={faGlobe} size="small" />}>
              Item with left icon
            </Item>
            <Item
              elemBefore={<Icon icon={faGlobe} />}
              elemAfter={<Icon icon={faGlobe} />}
            >
              Item with both icons
            </Item>
          </ItemGroup>
          <ItemGroup headingText="Item with interactive" hasIndent>
            <Item elemBefore={<Icon icon={faGlobe} />} isDisabled>
              Disabled item
            </Item>
            <Item elemBefore={<Icon icon={faGlobe} />} isSelected>
              Selected item
            </Item>
          </ItemGroup>
          <Item
            elemBefore={<Icon icon={faGlobe} />}
            elemAfter={<Icon icon={faGlobe} />}
            shouldCenterAlignment
          >
            Used center alignment
          </Item>
          <ItemGroup headingText="With set width" hasIndent>
            <Item isSelected width="300px">
              With set width
            </Item>
            <ItemGroup orientation={ItemGroupOrientation.Horizontal}>
              <Item
                elemBefore={<Icon icon={faGlobe} />}
                shouldCenterAlignment
                width="50px"
                borderPosition={ItemBorderPosition.Top}
              />
              <Item
                elemBefore={<Icon icon={faGlobe} />}
                shouldCenterAlignment
                width="50px"
                borderPosition={ItemBorderPosition.Top}
                isSelected
              />
              <Item
                elemBefore={<Icon icon={faGlobe} />}
                shouldCenterAlignment
                width="50px"
                borderPosition={ItemBorderPosition.Top}
              />
            </ItemGroup>
          </ItemGroup>
          <ItemGroup headingText="With different size" hasIndent>
            <Item isSelected size={Size.Regular}>
              This is regular size
            </Item>
            <Item isSelected size={Size.Large}>
              This is large size
            </Item>
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

### Example usage as NavLink

```tsx
import styled from '@emotion/styled';
import { MemoryRouter, NavLink, Route, Switch } from 'react-router-dom';
import startCase from 'lodash/startCase';
import { Item, ItemGroup } from './index';
import { ThemeProvider } from '@tablecheck/tablekit-theme';

const App = styled.div`
  display: flex;
`;

const Page = styled.div`
  padding: 60px;
  min-width: 400px;
  text-align: center;
  color: white;
`;

const NavItem = (props) => (
  <Item
    {...props}
    component={NavLink}
    activeClassName="selected"
    useInteractionStateAsClass
  />
);

const colors = ['red', 'green', 'blue', 'orange'];

<ThemeProvider useLocalStyles>
  <MemoryRouter>
    <App>
      <ItemGroup>
        {colors.map((color) => (
          <NavItem key={color} to={`/${color}`}>
            {startCase(color)} Page
          </NavItem>
        ))}
      </ItemGroup>
      <Switch>
        {colors.map((color) => (
          <Route
            key={color}
            path={`/${color}`}
            render={() => (
              <Page style={{ background: color }}>{startCase(color)} Page</Page>
            )}
          />
        ))}
        <Route
          render={() => <Page style={{ color: 'black' }}>Default Page</Page>}
        />
      </Switch>
    </App>
  </MemoryRouter>
</ThemeProvider>;
```
