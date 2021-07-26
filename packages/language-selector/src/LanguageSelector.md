Inline dialog to select a language

### Examples

```tsx
import { useState } from 'react';
import { useMedia } from 'react-use';
import styled from '@emotion/styled';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Spacing,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faLanguage } from '@fortawesome/pro-solid-svg-icons/faLanguage';
import {
  Item,
  languageSelectorThemeNamespace,
  languageSelectorClassicTheme,
  languageSelectorDarkTheme
} from '@tablecheck/tablekit-item';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

const LangTriggerButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  ${({ theme }) => `color: ${theme.colors.text};`}
`;

const SelectedLang = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
  text-align: center;
`;

const SelectedLang2 = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
  text-align: center;
`;

const ThemeToggle = styled(Toggle)`
  margin-right: 15px;
`;

const Surface = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
`;

const LangText = styled.h3`
  margin-right: 10px;
  display: inline-block;
  font-weight: normal;
`;

const GrowWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 0 20px;
  ${({ theme }) => `color: ${theme.colors.text};`}

  &:hover {
    transform: scale(1.15);
  }
`;

const [selectedLang, setLanguage] = useState('ja');
const [selectedLang2, setLanguage2] = useState('es');
const [selectedLang3, setLanguage3] = useState('en');

const darkTheme = {
  [languageSelectorThemeNamespace]: languageSelectorDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [languageSelectorThemeNamespace]: languageSelectorClassicTheme,
  colors: CLASSIC_COLORS
};

const isMobile = useMedia(`(max-width: 768px)`);

const PresentationContainer = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  return (
    <div>
      <ThemeToggle
        isChecked={isDarkTheme}
        onChange={() => toggleDarkTheme(!isDarkTheme)}
        label="Use dark theme"
      />
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <Surface>
          <LanguageSelector
            defaultLanguageCode={selectedLang}
            view="mobile"
            containerCss={{ width: '100%' }}
            itemWidth="100%"
            shouldShowCloseIcon
            renderTrigger={({ onClick, isOpen, ref }) => (
              <LangTriggerButton onClick={onClick} ref={ref}>
                <SelectedLang>
                  {selectedLang.slice(-2).toUpperCase()} (Mobile view)
                </SelectedLang>
                <Icon icon={faGlobe} size="regular2" />
              </LangTriggerButton>
            )}
            onChangeLanguage={(locale) => setLanguage(locale)}
          />

          <LanguageSelector
            defaultLanguageCode={selectedLang2}
            itemWidth="50%"
            containerCss={{ width: '750px' }}
            shouldShowCloseIcon
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                elemBefore={
                  <LangTriggerButton>
                    <SelectedLang2>
                      {selectedLang2.slice(-2).toUpperCase()}
                    </SelectedLang2>
                    <Icon icon={faLanguage} size="xxlarge" />
                  </LangTriggerButton>
                }
                borderPosition="top"
                isSelected={isOpen}
                width="fit-content"
                shouldCenterAlignment
                onClick={onClick}
                ref={ref}
              />
            )}
            onChangeLanguage={(locale) => setLanguage2(locale)}
          />

          <LanguageSelector
            inlineDialogContainerCss={{
              borderRadius: !isMobile && '16px',
              overflow: 'hidden'
            }}
            containerCss={{ padding: !isMobile && Spacing.L3 }}
            defaultLanguageCode={selectedLang3}
            shouldShowCloseIcon
            languages={['en', 'ja', 'ko']}
            renderTrigger={({ onClick, isOpen, ref }) => (
              <GrowWrapper onClick={onClick} ref={ref}>
                <LangText>{selectedLang3.slice(-2).toUpperCase()}</LangText>
                <Icon icon={faGlobe} size="xlarge" />
              </GrowWrapper>
            )}
            onChangeLanguage={(locale) => setLanguage3(locale)}
          />
        </Surface>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
