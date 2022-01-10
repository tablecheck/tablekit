This package is a drop-in replacement for `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';` which correctly sizes the icon according to TableKit specifications.

```tsx
import React, { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import { faTimes } from '@fortawesome/pro-duotone-svg-icons';
import { tciSunriseO } from 'tablecheck-icons/tciSunriseO';
import { Icon } from './index';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const Wrapper = styled.div`
  ${({ theme }) => `color: ${theme.colors.text}`};
  margin-top: 10px;
`;

const PresentationModule = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false);
  return (
    <ItemGroup hasIndent>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup orientation="horizontal" hasIndent>
            <Toggle
              isChecked={isDarkTheme}
              onChange={() => toggleDarkTheme(!isDarkTheme)}
            />
            <p style={{ display: 'flex', alignItems: 'center' }}>
              Use Dark Theme
            </p>
          </ItemGroup>
          <Wrapper>
            <p>
              Font Awesome Icons:
              <Icon icon={faEdit} size="small" />
              <Icon icon={faEdit} />
              <Icon icon={faEdit} size="large" />
            </p>
            <p>
              Tablecheck Icons:
              <Icon icon={tciSunriseO} size="large" />
            </p>
            <p>
              Also with Duotone Support:
              <Icon icon={faTimes} />
            </p>
            <p>
              Also with responsive size:
              <Icon
                icon={faEdit}
                size={{
                  '(min-width: 800px) and (max-width: 1199px)': 'regular',
                  'min-width: 1200px': 'large',
                  default: 'small'
                }}
              />
            </p>
          </Wrapper>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
