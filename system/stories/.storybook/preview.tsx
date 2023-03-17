import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import { styled, themes } from '@storybook/theming';
import { LocaleCode } from '@tablecheck/locales';
import { ThemeProvider as CssThemeProvider } from '@tablecheck/tablekit-react-css';
import mockdate from 'mockdate';
import * as React from 'react';

import { ThemeProvider as EmotionThemeProvider } from '@tablecheck/tablekit-react';

const CssTheme = React.lazy(() =>
  import('@tablecheck/tablekit-css/tablekit.classy.css').then(() => ({
    default: CssThemeProvider
  }))
);

const ThemeProvider = (props) => {
  if (props.useEmotion) return <EmotionThemeProvider {...props} />;
  return (
    <React.Suspense>
      <CssTheme {...props} />
    </React.Suspense>
  );
};

const commonTheme = {
  brandTitle: 'Tablekit',
  brandUrl: 'https://tablekit.tablecheck.com',
  fontBase: 'IBM Plex Sans',
  inputBorderRadius: 4
};

const lightTheme = {
  primary: '#5C11A6'
};

const darkTheme = {
  primary: '#A988EC'
};

// More options here:
// https://storybook.js.org/docs/react/configure/features-and-behavior
// https://storybook.js.org/docs/react/configure/theming
// https://github.com/hipstersmoothie/storybook-dark-mode
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  panelPosition: 'right',
  darkMode: {
    dark: {
      ...themes.dark,
      textColor: 'white',
      textInverseColor: 'rgba(255,255,255,0.9)',
      colorPrimary: darkTheme.primary,
      colorSecondary: darkTheme.primary,
      barSelectedColor: darkTheme.primary,
      brandTitle: commonTheme.brandTitle,
      brandUrl: commonTheme.brandUrl,
      fontBase: commonTheme.fontBase,
      inputBorderRadius: commonTheme.inputBorderRadius,
      brandImage:
        'https://cdn3.tablecheck.com/common/images/logos/tc/v1.0.0/logo-white.svg'
    },
    light: {
      ...themes.normal,
      colorPrimary: lightTheme.primary,
      colorSecondary: lightTheme.primary,
      barSelectedColor: lightTheme.primary,
      brandTitle: commonTheme.brandTitle,
      brandUrl: commonTheme.brandUrl,
      fontBase: commonTheme.fontBase,
      inputBorderRadius: commonTheme.inputBorderRadius,
      brandImage:
        'https://cdn3.tablecheck.com/common/images/logos/tc/v1.0.0/logo.svg'
    }
  }
};

const StoryWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  align-items: stretch;
  min-width: 100vw;
  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface);
    padding: var(--spacing-l7) var(--spacing-l4);
  }
`;

const ThemeInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--variants), 1fr);
  grid-gap: var(--spacing-l7) var(--spacing-l4);
  padding: var(--spacing-l4);
  border: 1px dashed var(--primary);
  border-radius: var(--border-radius-small);
  align-items: flex-start;
  justify-items: flex-start;
`;

const Selectors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: var(--spacing-l3);
  margin-bottom: var(--spacing-l4);
  align-items: center;
  justify-items: flex-start;
  align-self: flex-start;
  color: var(--text);
  & :nth-child(n) {
    justify-self: flex-end;
  }
  & :nth-child(2n) {
    justify-self: flex-start;
  }
`;

const Code = styled.pre`
  display: inline-block;
  padding: 4px 6px;
  border: 1px solid var(--info);
  border-radius: var(--border-radius-small);
  background: var(--info-surface);
  color: var(--info-text);
`;

const MultiCode = styled.span`
  display: flex;
  gap: var(--spacing-l1);
`;

declare global {
  interface Window {
    firstStorybookGridRef?: HTMLDivElement;
  }
}

function handleGridRef(ref: HTMLDivElement) {
  if (!window.firstStorybookGridRef) window.firstStorybookGridRef = ref;
  else {
    const width1 = ref.getBoundingClientRect().width;
    const width2 = window.firstStorybookGridRef.getBoundingClientRect().width;
    const width = `${Math.max(width1, width2)}px`;
    ref.style.setProperty('min-width', width);
    window.firstStorybookGridRef.style.setProperty('min-width', width);
    window.firstStorybookGridRef = undefined;
  }
}

interface StoryParametersOptions {
  variants: (string | { name: string })[];
  selectors: string[];
  auxiliarySelectors: (string | undefined)[];
  className: string;
  auxiliaryClassNames: (string | undefined)[];
  packageName: string;
  showStarImport: boolean;
  importName: string;
  auxiliaryComponents: any[];
  useEmotion: boolean;
}

class StoryParametersParser {
  private direction: 'rtl' | 'ltr' = 'ltr';

  private parameters: Partial<StoryParametersOptions>;

  private component?: React.FC;

  setDirection(direction: string) {
    this.direction = direction as typeof this.direction;
  }

  parse(
    parameters: Partial<StoryParametersOptions>,
    component: React.FC | undefined
  ) {
    this.parameters = parameters;
    this.component = component;
  }

  getUseEmotion() {
    return this.parameters?.useEmotion || false;
  }

  getGridStyles() {
    return { '--variants': this.parameters?.variants?.length || 1 };
  }

  getStoryHeader() {
    const variants = this.parameters?.variants?.map((variantArg) =>
      typeof variantArg === 'string' ? variantArg : variantArg.name
    );
    if (variants?.every((variant: any) => typeof variant === 'string')) {
      return variants.map((variant) => (
        <b key={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </b>
      ));
    }
    return null;
  }

  getPackageSelector() {
    const name = 'React Import';
    const {
      packageName: packageNameArg,
      showStarImport,
      useEmotion
    } = this.parameters;
    const packageName =
      packageNameArg ||
      (useEmotion
        ? '@tablecheck/tablekit-react'
        : '@tablecheck/tablekit-react-css');
    const starImportName = packageNameArg
      ?.split('/')
      .at(-1)
      ?.replace(/tablekit-react-(?!css)/gi, '')
      .split('-')
      .map((name) => `${name[0].toUpperCase()}${name.substring(1)}`)
      .join('');
    if (showStarImport && starImportName) {
      return {
        value: `import * as ${starImportName} from '${packageName}';`,
        name
      };
    }
    const componentNames = this.getComponentNames();
    if (componentNames) {
      return {
        value: `import { ${componentNames} } from '${packageName}';`,
        name
      };
    }
    return { value: packageName, name: 'React Import' };
  }

  getComponentNames() {
    const { importName, auxiliaryComponents } = this.parameters;
    const componentDisplayName = importName || this.component?.displayName;
    const auxiliaryComponentNames = (auxiliaryComponents || []).map(
      (c) => c.displayName
    );
    return [componentDisplayName]
      .concat(auxiliaryComponentNames)
      .filter((v) => !!v)
      .join(', ');
  }

  chooseSelectors(main, secondary) {
    if (main) return main;
    if (secondary) return secondary;
    return [];
  }

  getSelectors() {
    const {
      className,
      auxiliaryClassNames: auxiliaryClassNamesParam,
      selectors,
      auxiliarySelectors
    } = this.parameters;
    const auxiliaryClassNames = auxiliaryClassNamesParam?.map(
      (auxClassName) => `.${auxClassName}`
    );
    const classySelectors = (className ? [`.${className}`] : []).concat(
      this.chooseSelectors(auxiliaryClassNames, auxiliarySelectors)
    );
    const classlessSelectors = ([] as (string | undefined)[]).concat(
      selectors || [],
      this.chooseSelectors(auxiliarySelectors, auxiliaryClassNames)
    );
    for (let i = 0; i < classySelectors.length; i += 1) {
      if (!classlessSelectors[i] && classySelectors[i]) {
        classlessSelectors[i] = classySelectors[i];
      }
    }
    return [
      this.getPackageSelector(),
      {
        value: classlessSelectors,
        name: 'Classless Selector'
      },
      {
        value: classySelectors,
        name: 'Classy Selector'
      }
    ].filter(({ value }) => {
      if (!value) return false;
      if (Array.isArray(value) && !value.filter((v) => !!v).length)
        return false;
      return true;
    });
  }
}

const storyParameterParser = new StoryParametersParser();

export const decorators = [
  (story: () => JSX.Element, context): JSX.Element => {
    mockdate.reset();
    mockdate.set(
      context.parameters.mockDate || new Date('2023-03-14T16:47:18.502Z')
    );
    return story();
  },
  (story: () => JSX.Element, context): JSX.Element => {
    const direction = getDirection();
    storyParameterParser.setDirection(direction);
    storyParameterParser.parse(context.parameters, context.component);
    const gridStyles = storyParameterParser.getGridStyles();
    const storyHeader = storyParameterParser.getStoryHeader();
    const selectors = storyParameterParser.getSelectors();
    return (
      <StoryWrapper>
        <ThemeProvider
          useEmotion={storyParameterParser.getUseEmotion()}
          theme={'light'}
          lang={direction === 'rtl' ? LocaleCode.Arabic : LocaleCode.English}
          isRtl={direction === 'rtl'}
        >
          <ThemeInner>
            {selectors.length ? (
              <Selectors>
                {selectors.map(({ name, value }) => (
                  <React.Fragment key={name}>
                    <b>{name}:</b>
                    {Array.isArray(value) ? (
                      <MultiCode>
                        {value.map((v, i) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <Code key={i}>{v}</Code>
                        ))}
                      </MultiCode>
                    ) : (
                      <Code>{value}</Code>
                    )}
                  </React.Fragment>
                ))}
              </Selectors>
            ) : null}
            <Grid ref={handleGridRef} style={gridStyles as any}>
              {storyHeader}
              {story()}
            </Grid>
          </ThemeInner>
        </ThemeProvider>
        <ThemeProvider
          useLocalCssVariables
          theme={'dark'}
          lang={direction === 'rtl' ? LocaleCode.Arabic : LocaleCode.English}
          isRtl={direction === 'rtl'}
        >
          <ThemeInner>
            <Grid ref={handleGridRef} style={gridStyles as any}>
              {storyHeader}
              {story()}
            </Grid>
          </ThemeInner>
        </ThemeProvider>
      </StoryWrapper>
    );
  }
];
