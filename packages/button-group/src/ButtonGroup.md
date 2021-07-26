```tsx
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ButtonGroup } from './index';
import styled from '@emotion/styled';
import {
  Checkbox,
  checkboxDarkTheme,
  checkboxClassicTheme,
  checkboxThemeNamespace
} from '@tablecheck/tablekit-checkbox';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { faCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import { Icon } from '@tablecheck/tablekit-icon';
import { ItemGroup } from '@tablecheck/tablekit-item';

const darkTheme = {
  colors: DARK_COLORS,
  [checkboxThemeNamespace]: checkboxDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [checkboxThemeNamespace]: checkboxClassicTheme
};

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const items = [
  { label: 'First content', value: 1 },
  { label: 'Second content content content', value: 2 },
  { label: 'Third content', value: 3 },
  { label: 'content', value: 5 },
  { label: 'ad content', value: 32 },
  { label: 'asd content', value: 31 },
  { label: 'asd content', value: 33, iconBefore: <Icon icon={faCircle} /> },
  { label: 'sad content', value: 34 },
  { label: 'Third', value: 4 }
];

const PresentationModule = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  const [values, setValues] = useState([]);
  return (
    <div>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <ItemGroup orientation="vertical" title="Theme">
            <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
              Use dark theme
            </Checkbox>
          </ItemGroup>
          <ButtonGroup
            isValueRequired
            isMulti
            items={items}
            values={values}
            onChange={(newValues) => {
              setValues(newValues);
            }}
          />
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
