Banners are used to display important messages for users.

Four main _APPEARANCES_ are presented by default:

- primary
- success
- warning
- error

You can create your custom banners by overriding appropriate theme values and providing custom icon.

### Types and constants

<div style="display: block; overflow: auto">
| Name                       | Import                                                          |
| -------------------------- | --------------------------------------------------------------- |
| *BannerProps*          | `import type { BannerProps } from '@tablecheck/tablekit-banner';`      |
| *BannerAppearance*      | `import { BannerAppearance } from '@tablecheck/tablekit-banner';`    |
</div>

```tsx
import { Button } from '@tablecheck/tablekit-button';
import { useState } from 'react';
import { faOmega } from '@fortawesome/pro-solid-svg-icons/faOmega';
import { Select } from '@tablecheck/tablekit-select';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  Size,
  ZIndex,
  COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  bannerThemeNamespace,
  BannerAppearance
} from '@tablecheck/tablekit-banner';

const sizeOptions = [
  { label: 'Regular', value: Size.Regular },
  { label: 'Large', value: Size.Large }
];

const appearanceOptions = [
  { label: 'Primary', value: BannerAppearance.Primary },
  { label: 'Success', value: BannerAppearance.Success },
  { label: 'Danger', value: BannerAppearance.Danger },
  { label: 'Warning', value: BannerAppearance.Warning },
  { label: 'Custom', value: 'custom' }
];

const colorOptions = [
  { label: 'Orange', value: COLORS.ORANGE.L6 },
  { label: 'Red', value: COLORS.RED.L6 },
  { label: 'Blue', value: COLORS.BLUE.L6 },
  { label: 'Aqua', value: COLORS.AQUA.L6 }
];

const longMessage =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue eget sem viverra, nec vehicula risus aliquam. Nulla a ornare elit. Quisque varius vestibulum nisi quis elementum. Sed in condimentum nisl, at egestas purus. Ut odio magna, sodales sed justo at, mollis dapibus nibh. Phasellus vitae convallis justo. Suspendisse blandit mauris purus, nec dictum dui lobortis ac. Etiam posuere lectus lorem, quis efficitur quam faucibus vitae. Curabitur tincidunt ut purus non tristique. Aenean fermentum lobortis volutpat.';
const shortMessage = 'Lorem ipsum dolor.';

const PresentationContainer = () => {
  const [bannerSize, setBannerSize] = useState(Size.Regular);
  const [bannerAppearance, setBannerAppearance] = useState(
    BannerAppearance.Primary
  );
  const [isShownBanner, setBannerState] = useState(false);
  const [useLongMessage, toggleMessageLength] = useState(false);
  const [isDismissible, toggleDismissibleState] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(COLORS.ORANGE.L6);
  const [fillColor, setFillColor] = useState(COLORS.AQUA.L6);
  const [textColor, setTextColor] = useState(COLORS.BLUE.L6);

  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <ItemGroup>
          <div>Banner size</div>
          <Select
            options={sizeOptions}
            value={sizeOptions.find(({ value }) => value === bannerSize)}
            menuPortalTarget={document.body}
            onChange={({ value }) => setBannerSize(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </ItemGroup>
        <ItemGroup>
          <div>Banner appearance</div>
          <Select
            options={appearanceOptions}
            value={appearanceOptions.find(
              ({ value }) => value === bannerAppearance
            )}
            menuPortalTarget={document.body}
            onChange={({ value }) => setBannerAppearance(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
        </ItemGroup>
      </ItemGroup>
      <ItemGroup orientation="horizontal" hasIndent>
        <ItemGroup orientation="horizontal" hasIndent>
          <Toggle
            isChecked={useLongMessage}
            onChange={() => toggleMessageLength(!useLongMessage)}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Use long message
          </div>
        </ItemGroup>
        <ItemGroup orientation="horizontal" hasIndent>
          <Toggle
            isChecked={isDismissible}
            onChange={() => toggleDismissibleState(!isDismissible)}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Can be dismissed
          </div>
        </ItemGroup>
      </ItemGroup>
      {bannerAppearance === 'custom' && (
        <ItemGroup orientation="horizontal" hasIndent>
          <ItemGroup>
            <div>Background color</div>
            <Select
              options={colorOptions}
              value={colorOptions.find(
                ({ value }) => value === backgroundColor
              )}
              menuPortalTarget={document.body}
              onChange={({ value }) => setBackgroundColor(value)}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
              }}
            />
          </ItemGroup>
          <ItemGroup>
            <div>Icons color</div>
            <Select
              options={colorOptions}
              value={colorOptions.find(({ value }) => value === fillColor)}
              menuPortalTarget={document.body}
              onChange={({ value }) => setFillColor(value)}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
              }}
            />
          </ItemGroup>
          <ItemGroup>
            <div>Text color</div>
            <Select
              options={colorOptions}
              value={colorOptions.find(({ value }) => value === textColor)}
              menuPortalTarget={document.body}
              onChange={({ value }) => setTextColor(value)}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
              }}
            />
          </ItemGroup>
        </ItemGroup>
      )}
      <br />
      {isShownBanner ? (
        <EmotionThemeProvider
          theme={
            bannerAppearance === 'custom'
              ? {
                  [bannerThemeNamespace]: {
                    [BannerAppearance.Primary]: {
                      backgroundColor,
                      fillColor,
                      textColor
                    }
                  }
                }
              : {}
          }
        >
          <Banner
            size={bannerSize}
            appearance={
              bannerAppearance === 'custom'
                ? BannerAppearance.Primary
                : bannerAppearance
            }
            message={useLongMessage ? longMessage : shortMessage}
            isDismissible={isDismissible}
            customIcon={bannerAppearance === 'custom' && faOmega}
            onClose={() => setBannerState(false)}
          />
        </EmotionThemeProvider>
      ) : (
        <Button
          shouldFitContainer
          appearance="warning"
          onClick={() => setBannerState(true)}
        >
          Show Banner
        </Button>
      )}
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```

### Banner components with theme

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import {
  Checkbox,
  checkboxDarkTheme,
  checkboxThemeNamespace
} from '@tablecheck/tablekit-checkbox';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { bannerThemeNamespace, BannerAppearance } from './index';

const bannerAppearances = Object.values(BannerAppearance);

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const shortMessage = 'Lorem ipsum dolor.';

const darkTheme = {
  colors: DARK_COLORS,
  [checkboxThemeNamespace]: checkboxDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const PresentationContainer = () => {
  const [isDarkTheme, toggleTheme] = useState(false);

  return (
    <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
      <ExamplesWrapper>
        <ItemGroup hasIndent>
          <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
            Use dark theme
          </Checkbox>
          <ItemGroup hasIndent>
            {bannerAppearances.map((color) => (
              <Banner
                key={color}
                appearance={color}
                isDismissible
                message={shortMessage}
              />
            ))}
          </ItemGroup>
        </ItemGroup>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
