The SideNav component dispalys navigation items. It's shown on the left side.

List of components that you can use to implement SideNav:

### Elements

<div style="display: block; overflow: auto">
| Name                           | Import                                                         |
| ------------------------------ | -------------------------------------------------------------- |
| _SideNav_                      | `import SideNav from '@tablecheck/tablekit-sidenav';`                     |
| _SideNavContent_               | `import { SideNavContent } from '@tablecheck/tablekit-sidenav';`          |
| _SideNavItem_                  | `import { SideNavItem } from '@tablecheck/tablekit-sidenav';`                 |
| _SideNavSection_               | `import { SideNavSection } from '@tablecheck/tablekit-sidenav';`              |
| _SideNavContentContainer_      | `import { SideNavContentContainer } from '@tablecheck/tablekit-sidenav';` |
</div>

**NOTE** `SideNavItem` extends @tablecheck/tablekit-item, so when using with react-router-dom's `NavLink` follow the item example

### Context

<div style="display: block; overflow: auto">
| Name                 | Import                                                    |
| -------------------- | --------------------------------------------------------- |
| _SideNavProvider_    | `import { SideNavProvider } from '@tablecheck/tablekit-sidenav';`    |
| _SideNavContext_     | `import { SideNavContext } from '@tablecheck/tablekit-sidenav';`     |
| _useSideNav_         | `import { useSideNav } from '@tablecheck/tablekit-sidenav';`         |
</div>

### Themes

<div style="display: block; overflow: auto">
| Name                     | Import                                                             |
| ------------------------ | ------------------------------------------------------------------ |
| _sidenavDarkTheme_       | `import { sidenavDarkTheme } from '@tablecheck/tablekit-sidenav';`       |
| _sidenavClassicTheme_    | `import { sidenavClassicTheme } from '@tablecheck/tablekit-sidenav';`    |
| _sidenavThemeNamespace_  | `import { sidenavThemeNamespace } from '@tablecheck/tablekit-sidenav';`  |
</div>

### Examples

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { MemoryRouter, NavLink, Route, Switch } from 'react-router-dom';
import {
  FieldHeight,
  Size,
  ZIndex,
  DARK_COLORS,
  CLASSIC_COLORS,
  color,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Input } from '@tablecheck/tablekit-input';
import {
  inlineDialogDarkTheme,
  inlineClassicDarkTheme,
  inlineDialogThemeNamespace
} from '@tablecheck/tablekit-inline-dialog';
import { Select } from '@tablecheck/tablekit-select';
import {
  ItemGroup,
  itemClassicTheme,
  itemThemeNamespace,
  itemDarkTheme
} from '@tablecheck/tablekit-item';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { NavItems } from 'packages/sidenav/src/examples/navItems';
import {
  SideNav,
  SideNavProvider,
  sidenavClassicTheme,
  sidenavDarkTheme,
  SideNavContentContainer,
  SideNavItem,
  SideNavSection,
  SideNavState,
  sidenavThemeNamespace,
  NavItemAppearance
} from '../src/index';

const NavSections = NavItems.filter(({ type }) => type === 'section');

const themeKeys = {
  DARK: 'dark',
  CLASSIC: 'classic'
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [sidenavThemeNamespace]: sidenavClassicTheme,
  [inlineDialogThemeNamespace]: inlineClassicDarkTheme,
  [itemThemeNamespace]: itemClassicTheme
};

const darkTheme = {
  [sidenavThemeNamespace]: sidenavDarkTheme,
  [inlineDialogThemeNamespace]: inlineDialogDarkTheme,
  [itemThemeNamespace]: itemClassicTheme,
  colors: DARK_COLORS
};

const stateOptions = [
  { label: 'Expanded', value: SideNavState.Expanded },
  { label: 'Collapsed', value: SideNavState.Collapsed }
];
const themeOptions = [
  { label: 'Classic', value: themeKeys.CLASSIC },
  { label: 'Dark', value: themeKeys.DARK }
];
const sizesOptions = [
  { label: 'Regular', value: Size.Regular },
  { label: 'Large', value: Size.Large }
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1 1 100%;
  ${({ theme }) =>
    `
    background-color: ${theme.colors.canvas};
    &, & * {
     color: ${theme.colors.text};
    }`};
`;

const LinkFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  & > * {
    margin: 0 4px;
    padding: 4px;

    &.active:after {
      display: inline;
      content: ' (active)';
    }
  }
`;

const Header = styled.div`
  ${`font-weight: bold;`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ size }) =>
    size !== Size.Large
      ? `line-height: ${FieldHeight.Regular}; padding: 12px 20px;  font-size: 14px; line-height: 20px;`
      : `line-height: ${FieldHeight.Large}; padding: 18px 24px; font-size: 18px; line-height: 24px;`}
`;

const renderNavItem = ({
  item,
  activeNavItem,
  setActiveNavItem,
  activeSection,
  openedSection,
  setOpenedSection
}) => {
  if (item.type === 'link') {
    return (
      <SideNavItem
        key={item.label}
        to={item.to}
        icon={item.icon}
        isNested={item.isNested}
        onClick={() => setActiveNavItem('')}
        component={NavLink}
        activeClassName="selected"
        useInteractionStateAsClass
      >
        {item.label}
      </SideNavItem>
    );
  }
  if (item.type === 'item') {
    return (
      <SideNavItem
        key={item.label}
        icon={item.icon}
        isDisabled={item.isDisabled}
        isNested={item.isNested}
        isSelected={item.label === activeNavItem}
        onClick={() => setActiveNavItem(item.label)}
      >
        {item.label}
      </SideNavItem>
    );
  }

  if (item.type === 'section') {
    return (
      <SideNavSection
        key={item.label}
        icon={item.icon}
        label={item.label}
        childrenCount={item.children.length}
        isSelected={item.label === activeSection}
        isOpened={item.label === openedSection}
        onClick={() =>
          setOpenedSection(openedSection !== item.label ? item.label : '')
        }
      >
        {item.children.map((child) =>
          renderNavItem({
            item: child,
            activeNavItem,
            setActiveNavItem,
            activeSection,
            openedSection,
            setOpenedSection
          })
        )}
      </SideNavSection>
    );
  }
};

const SideNavExample = ({ currentSize, children }) => {
  const [activeNavItem, setActiveNavItem] = useState(NavItems[0].label);
  const [openedSection, setOpenedSection] = useState('');
  const section = NavSections.find(({ children }) =>
    children.some(({ label }) => label === activeNavItem)
  );
  const activeSection = section ? section.label : '';
  return (
    <SideNav>
      <Header size={currentSize}>Header</Header>
      <SideNavContentContainer>
        {NavItems.map((item) =>
          renderNavItem({
            item,
            activeNavItem,
            setActiveNavItem,
            openedSection,
            setOpenedSection,
            activeSection
          })
        )}
      </SideNavContentContainer>
    </SideNav>
  );
};

const PresentationModule = () => {
  const [currentTheme, setCurrentTheme] = useState(themeKeys.CLASSIC);
  const [currentSize, setCurrentSize] = useState(Size.Regular);
  const [initialState, setInitialState] = useState(SideNavState.Collapsed);
  const [collapseLabel, setCollapseLabel] = useState('Collapse');
  const [shouldHideToggle, setToggleButtonState] = useState(false);
  const [expandLabel, setExpandLabel] = useState('Expand');
  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <div>
          <div>Initial State of the SideNav</div>
          <Select
            options={stateOptions}
            value={stateOptions.find(({ value }) => value === initialState)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setInitialState(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
        <div>
          <div>Size of the SideNav</div>
          <Select
            options={sizesOptions}
            value={sizesOptions.find(({ value }) => value === currentSize)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setCurrentSize(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
        <div>
          <div>Theme of the SideNav</div>
          <Select
            options={themeOptions}
            value={themeOptions.find(({ value }) => value === currentTheme)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setCurrentTheme(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </div>
      </ItemGroup>
      <ItemGroup orientation="horizontal" hasIndent>
        <Toggle
          isChecked={shouldHideToggle}
          onChange={() => setToggleButtonState(!shouldHideToggle)}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Hide `Expand/Collapse Button`
        </div>
      </ItemGroup>
      {!shouldHideToggle && (
        <ItemGroup orientation="horizontal" hasIndent>
          <div>
            <Input
              label="Custom label when Sidenav is expanded"
              value={collapseLabel}
              onChange={(event) => setCollapseLabel(event.currentTarget.value)}
              isMessageHidden
            />
          </div>
          <div>
            <Input
              label="Custom label when Sidenav is collapsed"
              value={expandLabel}
              onChange={(event) => setExpandLabel(event.currentTarget.value)}
              isMessageHidden
            />
          </div>
        </ItemGroup>
      )}

      <EmotionThemeProvider
        theme={currentTheme === themeKeys.DARK ? darkTheme : classicTheme}
      >
        <Container>
          <SideNavProvider
            shouldHideToggle={shouldHideToggle}
            size={currentSize}
            state={initialState}
            toggleStateLabels={{ collapse: collapseLabel, expand: expandLabel }}
          >
            <MemoryRouter>
              <SideNavExample currentSize={currentSize} />
              <Page>
                <Switch>
                  <Route exact path="/">
                    <div>
                      Home Route. Click on the links below to see React-Router
                      wrapped NavLink in action
                    </div>
                  </Route>
                  <Route path="/page-1">
                    <div>Page 1</div>
                  </Route>
                  <Route path="/page-2">
                    <div>Page 2</div>
                  </Route>
                </Switch>
                <LinkFooter>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  <NavLink to="/page-1">Page 1</NavLink>
                  <NavLink to="/page-2">Page 2</NavLink>
                </LinkFooter>
              </Page>
            </MemoryRouter>
          </SideNavProvider>
        </Container>
      </EmotionThemeProvider>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
