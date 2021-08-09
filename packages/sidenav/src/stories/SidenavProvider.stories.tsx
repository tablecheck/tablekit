import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import '@tablecheck/tablekit-free-icon-config';
import { Story, Meta } from '@storybook/react';
import {
  inlineDialogDarkTheme,
  inlineDialogClassicTheme,
  inlineDialogThemeNamespace
} from '@tablecheck/tablekit-inline-dialog';
import {
  itemClassicTheme,
  itemThemeNamespace
} from '@tablecheck/tablekit-item';
import { Size, DARK_COLORS, CLASSIC_COLORS } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { MemoryRouter, NavLink, Route, Switch } from 'react-router-dom';
import { useDarkMode } from 'storybook-dark-mode';

import { NavItems, NavItem } from '../examples/navItems';
import {
  SideNav,
  SideNavProvider,
  sidenavClassicTheme,
  sidenavDarkTheme,
  SideNavContentContainer,
  SideNavItem,
  SideNavSection,
  SideNavState,
  sidenavThemeNamespace
} from '../index';
import { SideNavProviderProps } from '../types';

import {
  Wrapper,
  Container,
  Page,
  Text,
  LinkFooter,
  Header,
  Description,
  Heading,
  Table
} from './storyStyles';

export default {
  title: 'Components/Side Nav Provider',
  component: SideNavProvider,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const InfoTemplate: Story = () => (
  <Description>
    <p>
      The <span>SideNav</span> component dispalys navigation items. It is shown
      on the left side. List of components that you can use to implement{' '}
      <span>SideNav</span>:
    </p>
    <Heading>Elements</Heading>
    <Table>
      <tbody>
        <tr>
          <td width="250">SideNav</td>
          <td>import SideNav from &apos;@tablekit/sidenav&apos;;</td>
        </tr>
        <tr>
          <td>SideNavContent</td>
          <td>{`import { SideNavContent } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>SideNavItem</td>
          <td>{`import { SideNavItem } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>SideNavSection</td>
          <td>{`import { SideNavSection } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>SideNavContentContainer</td>
          <td>
            {`import { SideNavContentContainer } from '@tablekit/sidenav';`}
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      <b>NOTE</b> <span>SideNavItem</span> extends <span>@tablekit/item</span>,
      so when using with react-router-dom&apos;s <span>NavLink</span> follow the
      item example
    </p>
    <Heading>Context</Heading>
    <Table>
      <tbody>
        <tr>
          <td width="250">SideNavProvider</td>
          <td>{` import { SideNavProvider } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>SideNavContext</td>
          <td>{`import { SideNavContext } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>useSideNav</td>
          <td>{` import { useSideNav } from '@tablekit/sidenav';`}</td>
        </tr>
      </tbody>
    </Table>
    <Heading>Themes</Heading>
    <Table>
      <tbody>
        <tr>
          <td width="250">sidenavDarkTheme</td>
          <td>{`import { sidenavDarkTheme } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>sidenavClassicTheme</td>
          <td>{`import { sidenavClassicTheme } from '@tablekit/sidenav';`}</td>
        </tr>
        <tr>
          <td>sidenavThemeNamespace</td>
          <td>
            {`import { sidenavThemeNamespace } from '@tablekit/sidenav';`}
          </td>
        </tr>
      </tbody>
    </Table>
  </Description>
);

export const Information = InfoTemplate.bind({});

const NavSections: NavItem[] | undefined = NavItems.filter(
  ({ type }) => type === 'section'
);

const classicTheme = {
  colors: CLASSIC_COLORS,
  [sidenavThemeNamespace]: sidenavClassicTheme,
  [inlineDialogThemeNamespace]: inlineDialogClassicTheme,
  [itemThemeNamespace]: itemClassicTheme
};

const darkTheme = {
  [sidenavThemeNamespace]: sidenavDarkTheme,
  [inlineDialogThemeNamespace]: inlineDialogDarkTheme,
  [itemThemeNamespace]: itemClassicTheme,
  colors: DARK_COLORS
};

const renderNavItem = ({
  item,
  activeNavItem,
  setActiveNavItem,
  activeSection,
  openedSection,
  setOpenedSection
}: // eslint-disable-next-line consistent-return
any): JSX.Element | undefined => {
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
        {item.children.map((child: any) =>
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

type SideNavExampleProps = {
  currentSize: Size.Regular | Size.Large | undefined;
};

const SideNavExample = ({ currentSize }: SideNavExampleProps) => {
  const [activeNavItem, setActiveNavItem] = useState(NavItems[0].label);
  const [openedSection, setOpenedSection] = useState('');
  const section = NavSections.find(({ children }: any) =>
    children.some(({ label }: any) => label === activeNavItem)
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

const Template: Story<SideNavProviderProps> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Wrapper>
        <Container>
          <SideNavProvider {...args}>
            <MemoryRouter>
              <SideNavExample currentSize={args.size} />
              <Page>
                <Switch>
                  <Route exact path="/">
                    <Text>
                      Home Route. Click on the links below to see React-Router
                      wrapped NavLink in action
                    </Text>
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
      </Wrapper>
    </EmotionThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  toggleStateLabels: { expand: 'Expand', collapse: 'Collapse' },
  isExpanded: true,
  shouldHideToggle: false,
  size: Size.Regular,
  state: SideNavState.Expanded
};
