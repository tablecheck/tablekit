_Formerly `ResetStyles`_

This component sets up the correct css and theme variables to "reset" the browsers CSS to the correct base for TableKit applications.

Via `ThemeProvider`
An important part of this is the correct setting of fonts and sizing per language and providing a consistent way of resetting this value via emotions ThemeProvider.

The country and locale props are used to correctly set the font-family and load the correct font-face settings. By default only FontWeight.Regular and FontWeight.Bold are preloaded if your app needs more fonts than this at the start use the `fontWeights` prop and pass in all the font weights your app needs.
The other font weights are also defined, but the font will not be loaded for that font-weight until it is used.
This `font-family` value is also available via a Context.
This also adds the `isRtl` flag to the theme based on matching `locale` prop to `@tablecheck/locales`.

The `isDark` prop is used to indicate the components within the ThemeProvider that the current theme has dark tones. This is useful to know in certain situations that colors need to be inverted.

The context value is useful for cases when you are also using custom Header fonts, for example the Poppins Header styles from @tablecheck/tablekit-typography.

```tsx static
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { useTheme } from '@emotion/react';

<ThemeProvider useLocalStyles locale="ja" country="JP" isDark>
  // Children with context available
  {useTheme().isRtl === false}
</ThemeProvider>;
```

```tsx
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from '@tablecheck/tablekit-button';
import { useTheme } from '@emotion/react';
import { ifRtl } from '@tablecheck/tablekit-utils';
import { DARK_COLORS } from './palettes';

const [locale, setLocale] = useState('ja');

const DirSpan = styled.div(
  {
    padding: '12px',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  (props) => ({ backgroundColor: ifRtl('green', 'blue')(props) })
);

const ThemeTest = () => {
  return (
    <div style={{ marginTop: 12 }}>
      <DirSpan>{useTheme().isRtl ? 'rtl' : 'ltr'}</DirSpan>
      <DirSpan>{useTheme().fontFamily}</DirSpan>
    </div>
  );
};

<ThemeProvider>
  <Button
    appearance={locale === 'en' ? 'primary' : 'subtle'}
    onClick={() => setLocale('en')}
  >
    en locale
  </Button>
  <Button
    appearance={locale === 'ja' ? 'primary' : 'subtle'}
    onClick={() => setLocale('ja')}
  >
    ja locale
  </Button>
  <Button
    appearance={locale === 'ar' ? 'primary' : 'subtle'}
    onClick={() => setLocale('ar')}
  >
    ar locale
  </Button>
  <ThemeProvider useLocalStyles locale={locale}>
    <ThemeTest />
  </ThemeProvider>
  <ThemeProvider
    useLocalStyles
    locale={locale}
    theme={{ colors: DARK_COLORS }}
    isDark
  >
    Theme Test with Dark Mode <ThemeTest />
  </ThemeProvider>
</ThemeProvider>;
```

### Typescript

To provide your own custom colors and theme values in addition to those defined by tablekit, use the following;

```ts static
// in a definition file
declare module '@tablecheck/tablekit-theme' {
  export interface CustomTheme {
    myCustomThemeValue: string;
  }

  export interface CustomColors {
    happyBlue: string;
  }
}
```

To use the final resolved type of theme in your code, use `import { Theme } from '@emotion/react';`

### CD Helper

As part of the ThemeProvider we include a way of rendering the current CI branch/tag value as passed through from the CI.
By default this tag is hidden but can be toggled with the [TableKit chrome browser plugin](https://chrome.google.com/webstore/detail/tablekit-app-version-togg/hiiiajcbnfpdhiljobbmaigaampclckb)

To enable this in a project the following extra steps need to be undertaken.

1. Add the following to you `.gitlab-ci.yml` file.

```yml
variables:
  APP_VERSION: '${CI_COMMIT_REF_NAME}'
```

2. Add the following to the `config/default.json`

```json
{
  "appVersion": "development"
}
```

3. In `config/custom-environment-variables.json` add the following, this should pull the value from the gitlab-ci environment vars.

```json
{
  "appVersion": "APP_VERSION"
}
```

```tsx showeditor
import { useState } from 'react';
import { Global, css } from '@emotion/react';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
const [isDisplayed, setIsDisplayed] = useState(false);

<ThemeProvider>
  <Toggle
    label="Toggle Version Display"
    isChecked={isDisplayed}
    onChange={() => {
      setIsDisplayed(!isDisplayed);
    }}
  />
  <Global
    styles={
      isDisplayed
        ? css`
            #tablecheck-version-tag {
              display: block;
            }
          `
        : css`
            #tablecheck-version-tag {
              display: none;
            }
          `
    }
  />
</ThemeProvider>;
```
