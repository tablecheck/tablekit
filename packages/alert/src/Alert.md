Four main _APPEARANCES_ are presented by default:

- primary
- success
- warning
- error

You can create your custom alerts by overriding appropriate theme values and providing custom icon.

### Types and constants

<div style="display: block; overflow: auto">
| Name                       | Import                                                          |
| -------------------------- | --------------------------------------------------------------- |
| *AlertProps*          | `import type { AlertProps } from '@tablecheck/tablekit-alert';`      |
| *AlertAppearance*      | `import { AlertAppearance } from '@tablecheck/tablekit-alert';`    |
</div>

```tsx
import { useState } from 'react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Button } from '@tablecheck/tablekit-button';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { AlertAppearance } from '@tablecheck/tablekit-alert';

const alertAppearances = Object.values(AlertAppearance);

const PresentationContainer = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowCTAAlert, setIsShowCTAAlert] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const onClose = () => {
    setIsShowAlert(false);
    setIsShowCTAAlert(false);
  };

  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <Button
          appearance="primary"
          onClick={() => {
            setIsShowAlert(true);
            setColorIndex(
              colorIndex + 1 < alertAppearances.length ? colorIndex + 1 : 0
            );
          }}
        >
          {isShowAlert ? 'Change appearance' : 'Show Alert'}
        </Button>
        <Button
          appearance="primary"
          onClick={() => {
            setIsShowCTAAlert(true);
            setColorIndex(
              colorIndex + 1 < alertAppearances.length ? colorIndex + 1 : 0
            );
          }}
        >
          {isShowCTAAlert ? 'Change appearance' : 'Show Alert with CTA'}
        </Button>
      </ItemGroup>
      <Alert
        appearance={alertAppearances[colorIndex]}
        isShow={isShowAlert}
        onClose={onClose}
        isDismissible
        shouldUsePortal
      >
        Message
      </Alert>
      <Alert
        appearance={alertAppearances[colorIndex]}
        isShow={isShowCTAAlert}
        onClose={onClose}
        isDismissible
        shouldUsePortal
        actions={[
          {
            text: 'More info....'
          },
          {
            text: 'Close',
            onClick: () => {
              setIsShowCTAAlert(false);
            }
          }
        ]}
      >
        This content must exceed the maximum permissible width for this
        notification and span multiple lines.
      </Alert>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

### Alert should close on click outside

```tsx
import { useState, Fragment } from 'react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Button } from '@tablecheck/tablekit-button';

const PresentationContainer = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);

  const onClose = () => {
    setIsShowAlert(false);
  };

  return (
    <Fragment>
      <Button
        appearance="primary"
        onClick={() => {
          setIsShowAlert(true);
        }}
      >
        Show Alert
      </Button>
      <Alert
        appearance="primary"
        isShow={isShowAlert}
        onClose={onClose}
        shouldCloseOnClickOutside
        shouldUsePortal
      >
        Should close on click outside
      </Alert>
    </Fragment>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

### Alert with different positions

```tsx
import { useState } from 'react';
import { Button } from '@tablecheck/tablekit-button';
import { Select } from '@tablecheck/tablekit-select';
import { ZIndex, ThemeProvider } from '@tablecheck/tablekit-theme';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { v4 as uuid } from 'uuid';

const positionOptions = [
  {
    label: 'Top left',
    value: 'top-left'
  },
  {
    label: 'Top center',
    value: 'top'
  },
  {
    label: 'Top right',
    value: 'top-right'
  },
  {
    label: 'Bottom left',
    value: 'bottom-left'
  },
  {
    label: 'Bottom center',
    value: 'bottom'
  },
  {
    label: 'Bottom right',
    value: 'bottom-right'
  },
  {
    label: 'All',
    value: 'all'
  }
];

const PresentationContainer = () => {
  const [isShow, setIsShow] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [position, setPosition] = useState(positionOptions[0].value);

  const getAlertData = (index) => {
    const id = uuid();
    return {
      text: `Message ${index + 1}`,
      appearance: 'success',
      onClose: () => {
        setAlerts((curAlerts) => {
          const newArray = [...curAlerts];
          newArray.splice(-(index + 1), 1);
          return newArray;
        });
      },
      key: id
    };
  };

  return (
    <ItemGroup hasIndent>
      <ItemGroup hasIndent title="Initial position for Alert">
        <Select
          options={positionOptions}
          value={positionOptions.find(({ value }) => value === position)}
          menuPortalTarget={document.body}
          onChange={({ value }) => setPosition(value)}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
          }}
        />
        <ItemGroup orientation="horizontal" hasIndent>
          <Button
            appearance="primary"
            onClick={() => {
              setIsShow(!isShow);
              if (alerts.length === 0) {
                setAlerts([getAlertData(alerts.length), ...alerts]);
              } else {
                setAlerts([]);
              }
            }}
          >
            {isShow ? 'Reset All' : 'Show Alert!'}
          </Button>
          <Button
            appearance="primary"
            isDisabled={!isShow}
            onClick={() => {
              setAlerts([getAlertData(alerts.length), ...alerts]);
            }}
          >
            Generate new Alert
          </Button>
        </ItemGroup>
      </ItemGroup>
      {position === 'all'
        ? positionOptions.map(({ value }) => {
            if (value !== 'all') {
              return alerts.map(({ key, text, ...alertProp }) => (
                <Alert
                  key={key}
                  {...alertProp}
                  isShow={isShow}
                  position={value}
                  isDismissible
                  shouldUsePortal
                >
                  {text}
                </Alert>
              ));
            }
          })
        : alerts.map(({ key, text, ...alertProp }) => (
            <Alert
              key={key}
              {...alertProp}
              isShow={isShow}
              position={position}
              isDismissible
              shouldUsePortal
            >
              {text}
            </Alert>
          ))}
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

### Alert components

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  Alert,
  alertThemeNamespace,
  alertDarkTheme,
  AlertAppearance
} from '@tablecheck/tablekit-alert';

const alertAppearances = Object.values(AlertAppearance);

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [alertThemeNamespace]: alertDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <ItemGroup hasIndent>
      <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
        Use dark theme
      </Checkbox>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup hasIndent title="Content">
            {alertAppearances.map((color) => (
              <Alert key={color} appearance={color} isShow isDismissible>
                Message
              </Alert>
            ))}
          </ItemGroup>
          <ItemGroup hasIndent title="Content + CTA">
            {alertAppearances.map((color) => (
              <Alert
                key={color}
                appearance={color}
                isShow
                isDismissible
                actions={[
                  {
                    text: 'More info....'
                  },
                  {
                    text: 'Close'
                  }
                ]}
              >
                This content must exceed the maximum permissible width for this
                notification and span multiple lines.
              </Alert>
            ))}
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

### Alert with bullet point list and no icon

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { Header } from '@tablecheck/tablekit-typography';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  Spacing,
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  Alert,
  alertThemeNamespace,
  alertDarkTheme
} from '@tablecheck/tablekit-alert';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
  max-width: 360px;
`;

const List = styled.ul`
  list-style-type: initial;
  ${`padding-left: ${Spacing.L4};`}
`;

const darkTheme = {
  colors: DARK_COLORS,
  [alertThemeNamespace]: alertDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
      <ItemGroup hasIndent>
        <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
          Use dark theme
        </Checkbox>
        <ExamplesWrapper>
          <Alert appearance="info" isShow shouldHideIcon>
            <h3>Content heading</h3>
            <List>
              <li>First item</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
                risus a libero dictum aliquam maximus tincidunt nisi. Aliquam
                metus tellus
              </li>
            </List>
          </Alert>
        </ExamplesWrapper>
      </ItemGroup>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
