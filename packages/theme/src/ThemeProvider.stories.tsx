import { CodeBlock } from '@atlaskit/code';
import { useTheme, Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { ifRtl } from '@tablecheck/tablekit-utils';
import { useState } from 'react';

import { Button, ButtonAppearance } from '../../button';
import { Toggle } from '../../toggle';
import { Link, Typography } from '../../typography';

import { DARK_COLORS } from './palettes';

import { ThemeProvider } from './index';

export default {
  title: 'UI Helpers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  },
  excludeStories: ['Wrapper']
} as Meta;

export const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
  p,
  ul li {
    padding: 10px 0;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 2px 4px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
  ul {
    list-style: disc;
    padding-left: 20px;
    li {
      padding-bottom: 10px;
    }
  }
  label {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
  button {
    margin-right: 10px;
  }
`;

const Heading = styled.h4`
  ${Typography.Heading4};
  padding: 10px 0;
`;

const themeProviderCode = `
import ThemeProvider from '@tablekit/theme/ThemeProvider'; 
import {useTheme} from 'emotion-theming';

<ThemeProvider useLocalStyles locale="ja" country="JP" isDark>
  //Children with context available
  {useTheme().isRtl === false}
</ThemeProvider>;
`;

const ThemeProviderCodeBlock = ({ children }: { children: JSX.Element }) => (
  <div>{children}</div>
);

const InfoTemplate = () => (
  <Wrapper>
    <p>
      <em>Formerly ResetStyles</em>
    </p>
    <p>
      This component sets up the correct css and theme variables to
      &quot;reset&quot; the browsers CSS to the correct base for TableKit
      applications.
    </p>
    <p>
      Via <span>ThemeProvider</span>
      An important part of this is the correct setting of fonts and sizing per
      language and providing a consistent way of resetting this value via
      emotions ThemeProvider.
    </p>
    <p>
      The country and locale props are used to correctly set the font-family and
      load the correct font-face settings. By default only FontWeight.Regular
      and FontWeight.Bold are preloaded if your app needs more fonts than this
      at the start use the <span>fontWeights</span> prop and pass in all the
      font weights your app needs. The other font weights are also defined, but
      the font will not be loaded for that font-weight until it is used. This{' '}
      <span>font-family</span> value is also available via a Context. This also
      adds the <span>isRtl</span> flag to the theme based on matching{' '}
      <span>locale</span> prop to <span>@tablecheck/locales</span>.
    </p>
    <p>
      The <span>isDark</span> prop is used to indicate the components within the
      ThemeProvider that the current theme has dark tones. This is useful to
      know in certain situations that colors need to be inverted.
    </p>
    <p>
      The context value is useful for cases when you are also using custom
      Header fonts, for example the Poppins Header styles from
      <span>@tablecheck/tablekit-typography</span>.
    </p>
    <ThemeProviderCodeBlock>
      <CodeBlock
        language="jsx"
        showLineNumbers={false}
        text={themeProviderCode}
      />
    </ThemeProviderCodeBlock>
  </Wrapper>
);

export const Information = InfoTemplate.bind({});

const DirSpan = styled.div`
  padding: 12px;
  ${({ theme }) =>
    `background-color: ${theme.colors.canvas}; color: ${theme.colors.text};`};
  ${(props) => ({ textAlign: ifRtl('right', 'left')(props) })};
`;

const ThemeTest = () => (
  <div>
    <DirSpan>{useTheme().isRtl ? <b>rtl</b> : <b>ltr</b>}</DirSpan>
    <DirSpan>{useTheme().fontFamily}</DirSpan>
  </div>
);

const Template = () => {
  const [locale, setLocale] = useState('ja');
  return (
    <Wrapper>
      <ThemeProvider>
        <div>
          <Button
            appearance={
              locale === 'en' ? ButtonAppearance.Solid : ButtonAppearance.Subtle
            }
            onClick={() => setLocale('en')}
          >
            en locale
          </Button>
          <Button
            appearance={
              locale === 'ja' ? ButtonAppearance.Solid : ButtonAppearance.Subtle
            }
            onClick={() => setLocale('ja')}
          >
            ja locale
          </Button>
          <Button
            appearance={
              locale === 'ar' ? ButtonAppearance.Solid : ButtonAppearance.Subtle
            }
            onClick={() => setLocale('ar')}
          >
            ar locale
          </Button>
        </div>
        <div>
          <Heading>Theme Test with Classic Mode</Heading>
        </div>
        <ThemeProvider useLocalStyles locale={locale}>
          <ThemeTest />
        </ThemeProvider>
        <ThemeProvider
          useLocalStyles
          locale={locale}
          theme={{ colors: DARK_COLORS }}
          isDark
        >
          <Heading>Theme Test with Dark Mode</Heading> <ThemeTest />
        </ThemeProvider>
      </ThemeProvider>
    </Wrapper>
  );
};

export const Examples = Template.bind({});

const firstCodeBlock = `
variables:
  APP_VERSION: '\${CI_COMMIT_REF_NAME}'
`;

const secondCodeBlock = `
{
  "appVersion": "development"
}
`;

const thirdCodeBlock = `
{
  "appVersion": "APP_VERSION"
}
`;

const CDHelperTemplate = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <Wrapper>
      <p>
        As part of the ThemeProvider we include a way of rendering the current
        CI branch/tag value as passed through from the CI. By default this tag
        is hidden but can be toggled with the{' '}
        <Link href="https://chrome.google.com/webstore/detail/tablekit-app-version-togg/hiiiajcbnfpdhiljobbmaigaampclckb">
          TableKit chrome browser plugin
        </Link>
      </p>
      <p>
        To enable this in a project the following extra steps need to be
        undertaken.
      </p>
      <ul>
        <li>
          Add the following to you <span>.gitlab-ci.yml</span> file.
        </li>
        <ThemeProviderCodeBlock>
          <CodeBlock
            language="jsx"
            showLineNumbers={false}
            text={firstCodeBlock}
          />
        </ThemeProviderCodeBlock>
        <li>
          Add the following to the <span>config/default.json</span>
        </li>
        <ThemeProviderCodeBlock>
          <CodeBlock
            language="jsx"
            showLineNumbers={false}
            text={secondCodeBlock}
          />
        </ThemeProviderCodeBlock>
        <li>
          In <span>config/custom-environment-variables.json</span> add the
          following, this should pull the value from the gitlab-ci environment
          vars.
        </li>
        <ThemeProviderCodeBlock>
          <CodeBlock
            language="jsx"
            showLineNumbers={false}
            text={thirdCodeBlock}
          />
        </ThemeProviderCodeBlock>
      </ul>
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
      </ThemeProvider>
    </Wrapper>
  );
};

export const CDHelper = CDHelperTemplate.bind({});
