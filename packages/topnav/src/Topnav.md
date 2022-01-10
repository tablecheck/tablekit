The TopNav component displays a top navigation bar with the TableCheck logo by default.

It is meant to be used only at the very top of an app

### Top Nav with portals

```tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider, css } from '@emotion/react';
import { CLASSIC_COLORS, ThemeProvider } from '@tablecheck/tablekit-theme';
import { topnavThemeNamespace, topnavClassicTheme } from './index';

const classicTheme = {
  colors: CLASSIC_COLORS,
  [topnavThemeNamespace]: topnavClassicTheme
};

const sharedStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${sharedStyles};
`;

const LeftContent = styled.div`
  ${sharedStyles};
  background-color: rgba(255, 0, 0, 0.6);
`;

const CenterContent = styled.div`
  ${sharedStyles};
  background-color: rgba(0, 200, 0, 0.6);
`;

const RightContent = styled.div`
  ${sharedStyles};
  background-color: rgba(0, 0, 200, 0.6);
`;

const Block = ({ children, domId }) => {
  const target = usePortal(domId);
  return ReactDOM.createPortal(children, target);
};

const usePortal = (domId) => {
  const el = document.createElement('span');
  const rootElemRef = React.useRef(el);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const parentElem = document.querySelector(`#${domId}`);
    // Add the detached element to the parent
    if (parentElem) parentElem.appendChild(rootElemRef.current);
    // This function is run on unmount
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, []);

  return rootElemRef.current;
};

<ThemeProvider useLocalStyles>
  <EmotionThemeProvider theme={classicTheme}>
    <TopNav hasCenterContainer />
  </EmotionThemeProvider>
  <Block domId="top-nav-left">
    <LeftContent>Left Portal</LeftContent>
  </Block>
  <Block domId="top-nav-center">
    <CenterContent>Center Portal</CenterContent>
  </Block>
  <Block domId="top-nav-right">
    <RightContent>Right Portal</RightContent>
  </Block>
</ThemeProvider>;
```

### Top Nav with 3 or 2 columns with custom content

```tsx
import styled from '@emotion/styled';
import { css, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { CLASSIC_COLORS, ThemeProvider } from '@tablecheck/tablekit-theme';
import { topnavThemeNamespace, topnavClassicTheme } from './index';

const classicTheme = {
  colors: CLASSIC_COLORS,
  [topnavThemeNamespace]: topnavClassicTheme
};

const sharedStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${sharedStyles};
`;

const LeftContent = styled.div`
  ${sharedStyles};
  background-color: rgba(214, 127, 66, 0.6);
`;

const CenterContent = styled.div`
  ${sharedStyles};
  background-color: rgba(48, 145, 191, 0.6);
`;

const RightContent = styled.div`
  ${sharedStyles};
  background-color: rgba(156, 12, 99, 0.6);
`;

<ThemeProvider useLocalStyles>
  <EmotionThemeProvider theme={classicTheme}>
    <TopNav
      leftContent={<LeftContent>Left Block</LeftContent>}
      centerContent={<CenterContent>Center Block</CenterContent>}
      rightContent={<RightContent>Right Block</RightContent>}
    />
    <br />
    <TopNav
      leftContent={<LeftContent>Left Block</LeftContent>}
      rightContent={<RightContent>Right Block</RightContent>}
    />
  </EmotionThemeProvider>
</ThemeProvider>;
```

### Top Nav with themes

```tsx
import { BrowserRouter, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  COLORS,
  CLASSIC_COLORS,
  DARK_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Button } from '@tablecheck/tablekit-button';
import { Logo } from '@tablecheck/tablekit-logo';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  topnavThemeNamespace,
  topnavClassicTheme,
  topnavDarkTheme
} from './index';

const Wording = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'isLight'
})`
  display: inline-block;
  margin-left: 8px;
  font-weight: 500;
  ${({ isLight }) => {
    if (isLight) return `color: ${COLORS.GRAY.L8};`;
    return 'color: white;';
  }};
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;
`;

const classicTheme = {
  isDark: false,
  colors: CLASSIC_COLORS,
  [topnavThemeNamespace]: topnavClassicTheme
};

const darkTheme = {
  isDark: true,
  colors: DARK_COLORS,
  [topnavThemeNamespace]: topnavDarkTheme
};

const PresentationContainer = () => {
  const [selectedAppKey, setSelectedAppKey] = React.useState('tablecheck');
  const [isClassicTheme, setClassicTheme] = React.useState(false);

  return (
    <div
      style={{
        height: '200px',
        backgroundColor: '#EEE',
        overflow: 'hidden',
        border: '1px solid #CCC'
      }}
    >
      <BrowserRouter>
        <EmotionThemeProvider theme={isClassicTheme ? classicTheme : darkTheme}>
          <TopNav
            leftContent={
              <StyledLogo>
                <Logo
                  display={{
                    default: 'none',
                    'min-width: 450px': 'block'
                  }}
                />
              </StyledLogo>
            }
          />
        </EmotionThemeProvider>
      </BrowserRouter>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '150px',
          justifyContent: 'center'
        }}
      >
        <Button onClick={() => setClassicTheme(!isClassicTheme)}>
          Switch to {isClassicTheme ? 'Dark' : 'Classic'} Theme
        </Button>
      </div>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

### Top Nav with custom a href logo

```tsx
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Logo } from '@tablecheck/tablekit-logo';
import { AnchorButton, ButtonAppearance } from '@tablecheck/tablekit-button';
import { topnavThemeNamespace } from './index';

const CustomTopNav = styled(TopNav)`
  height: 100px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;

  *:first-of-type {
    padding: 0;
    border: none;

    &:hover {
      border: none;
      background-color: transparent;
      padding: 0;
    }

    &:focus {
      border-radius: 4px;
      height: 30px;
      margin: 5px 0;
    }
  }
`;

const HiltonLogo = styled.img`
  width: 200px;
`;

const customTheme = {
  [topnavThemeNamespace]: {
    backgroundColor: '#104C97',
    textColor: 'white'
  }
};

<ThemeProvider theme={customTheme} useLocalStyles>
  <CustomTopNav
    height={100}
    leftContent={
      <LogoWrapper>
        <AnchorButton
          appearance={ButtonAppearance.Subtle}
          isInteractive
          href="https://www.google.com/"
          target="_blank"
        >
          <HiltonLogo src="/img/logos/demo-logo.svg" />
        </AnchorButton>
      </LogoWrapper>
    }
  />
</ThemeProvider>;
```

### Top Nav with default logo (no link)

```tsx
import styled from '@emotion/styled';
import { DARK_COLORS, ThemeProvider } from '@tablecheck/tablekit-theme';
import { Logo } from '@tablecheck/tablekit-logo';
import { topnavThemeNamespace, topnavDarkTheme } from './index';

const darkTheme = {
  isDark: true,
  colors: DARK_COLORS,
  [topnavThemeNamespace]: topnavDarkTheme
};

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;
`;

<ThemeProvider theme={darkTheme} isDark useLocalStyles>
  <TopNav
    leftContent={
      <StyledLogo>
        <Logo
          display={{
            default: 'none',
            'min-width: 450px': 'block'
          }}
        />
      </StyledLogo>
    }
  />
</ThemeProvider>;
```

### Top Nav with custom logo

```tsx
import { COLORS, DARK_COLORS, ThemeProvider } from '@tablecheck/tablekit-theme';
import { MemoryRouter, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AnchorButton, ButtonAppearance } from '@tablecheck/tablekit-button';
import { topnavThemeNamespace, topnavDarkTheme } from './index';

const darkTheme = {
  isDark: true,
  colors: DARK_COLORS,
  [topnavThemeNamespace]: topnavDarkTheme
};

const Logo = ({ className }) => {
  const color = COLORS.RED.L5;

  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 58.3 58.4"
      className={className}
    >
      <g transform="translate(0 3)">
        <path
          fill={color}
          d="M0 37.7c1.5 3.9 3.9 7.5 7 10.7 3.1 3.1 6.8 5.5 10.7 7L28.1 45c-4.5-.2-8.8-2.1-12.2-5.5s-5.2-7.8-5.5-12.2L0 37.7"
        />
        <path
          fill={color}
          d="M58.3 37.7c-1.5 3.9-3.9 7.5-7 10.7-3.1 3.1-6.8 5.5-10.7 7L30.2 45c4.5-.2 8.8-2.1 12.2-5.5s5.2-7.8 5.5-12.2l10.4 10.4"
        />
        <path
          fill={color}
          d="M40.6-3c3.9 1.5 7.5 3.9 10.7 7 3.1 3.1 5.5 6.8 7 10.7L47.9 25.2c-.2-4.5-2.1-8.8-5.5-12.2s-7.8-5.2-12.2-5.5l1.7-1.7L40.6-3"
        />
        <path
          fill={color}
          d="M17.7-3C13.8-1.5 10.2.9 7 4c-3.1 3.1-5.5 6.8-7 10.7l10.4 10.5c.2-4.5 2.1-8.8 5.5-12.2s7.8-5.2 12.2-5.5L17.7-3"
        />
      </g>
    </svg>
  );
};

const Wording = ({ className }) => (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    viewBox="0 0 235.4 85"
    className={className}
  >
    <path
      fill="white"
      d="M9.6 65.3c0 .8-.4 1.2-1.1 1.2H1.1c-.7 0-1.1-.4-1.1-1.2V10.4c0-.8.4-1.2 1.1-1.2h7.4c.7 0 1.1.4 1.1 1.2v54.9zm12.7 1.2c-.8 0-1.2-.4-1.2-1.2V28.6c0-.6.2-1.1.9-1.4 4.6-2 10.2-3.1 15.9-3.1 11 0 18.6 5.1 18.6 17.9v23.3c0 .8-.4 1.2-1.1 1.2h-7c-.7 0-1.2-.4-1.2-1.2V42.1c0-7.5-3.4-9.8-9.3-9.8-2.7 0-5.7.4-7.5.9v32c0 .8-.4 1.2-1.2 1.2h-6.9v.1zm58.1.9c-5.4 0-11.2-1.5-16.2-5.2-.7-.4-.7-1-.3-1.6l3-5.2c.4-.7.9-.8 1.6-.3 3.6 2.6 7.9 4.1 12.1 4.1s7.4-1.6 7.4-4.6c0-3.2-3.8-4.1-7.4-4.7-6-1.1-16.2-3.6-16.2-13.3 0-8.9 8.4-12.6 17-12.6 4.6 0 9.2 1.1 13.9 3.7.6.3.8 1 .4 1.6l-3 5.1c-.4.6-1 .7-1.6.4-3-1.6-6.6-2.6-10.2-2.6-4.7 0-7.3 1.8-7.3 4.4 0 3.3 3.6 4.1 8.9 5.1 6.6 1.2 14.9 3.3 14.9 12.5-.1 8.9-7.4 13.2-17 13.2zm29.2-48c-3 0-5.3-2.3-5.3-5.3s2.3-5.2 5.3-5.2 5.2 2.2 5.2 5.2-2.2 5.3-5.2 5.3zM106 66.5c-.7 0-1.2-.4-1.2-1.2V26.1c0-.7.5-1.1 1.2-1.1h7c.7 0 1.1.4 1.1 1.1v39.1c0 .8-.4 1.2-1.1 1.2h-7v.1zm34.4 16c-6.6 0-11.4-1.7-15.6-5-.6-.4-.6-.9-.2-1.6l3.4-5c.4-.6 1-.8 1.6-.3 3 2.2 6.6 3.6 10.8 3.6 6 0 8.9-2.6 8.6-10.7-2.6 1.1-6 1.8-8.9 1.8-9.4 0-17.3-5.3-17.3-16.6v-7.5c0-12.6 8.3-17.1 18.5-17.1 5.9 0 11.7 1.3 16 3.1.6.2.9.7.9 1.4v35.3c-.1 11.8-5.2 18.6-17.8 18.6zm.5-25.4c3 0 6.4-.7 7.9-2V33.2c-1.7-.6-5-.9-7.4-.9-5.5 0-9.3 1.9-9.3 8.8v7.5c0 6.4 3.9 8.5 8.8 8.5zM186.1 24c9.8 0 17.4 5.2 17.4 18.1v23.1c0 .8-.4 1.2-1.1 1.2h-7c-.7 0-1.2-.4-1.2-1.2V42.4c0-7.7-3.2-10-9.1-10-2.9 0-5.8.5-7.7 1.4v31.4c0 .8-.4 1.2-1.2 1.2h-6.9c-.8 0-1.2-.4-1.2-1.2V10.4c0-.8.4-1.2 1.2-1.2h6.9c.8 0 1.2.4 1.2 1.2v15c2.4-.8 5.3-1.4 8.7-1.4zm42.5 34.9c.7 0 2-.1 3.3-.2.8 0 1.3.4 1.3 1.1V66c0 .6-.3 1.2-1.1 1.3-1.4.1-3 .2-4.2.2-8.3 0-14.8-4.2-14.8-14.8V16c0-.7.4-1.1 1.2-1.1h6.1c.6 0 1.1.4 1.2 1l.7 9.6h8.6c.7 0 1.2.4 1.2 1.1v5.8c0 .7-.5 1.1-1.2 1.1h-8.5V52c-.1 4.4 2.1 6.9 6.2 6.9z"
    />
  </svg>
);

const CustomWording = styled(Wording)`
  width: 70px;
  height: 22px;
  margin-left: 8px;
`;

const CustomLogo = styled(Logo)`
  width: 24px;
  height: 24px;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;

  *:first-of-type {
    padding: 0;
    border: none;

    &:hover {
      border: none;
      background-color: transparent;
      padding: 0;
    }

    &:focus {
      border-radius: 4px;
      height: 30px;
      margin: 5px 0;
    }
  }
`;

<ThemeProvider theme={darkTheme} useLocalStyles>
  <MemoryRouter>
    <TopNav
      leftContent={
        <StyledLogo>
          <AnchorButton
            appearance={ButtonAppearance.Subtle}
            isInteractive
            href="/"
          >
            <CustomLogo />
            <CustomWording />
          </AnchorButton>
        </StyledLogo>
      }
    />
  </MemoryRouter>
</ThemeProvider>;
```
