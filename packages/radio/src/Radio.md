```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  radioDarkTheme,
  radioClassicTheme,
  radioThemeNamespace
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [radioThemeNamespace]: radioDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [radioThemeNamespace]: radioClassicTheme
};

const PresentationModule = () => {
  const [checked, setChecked] = useState(0);
  const [useDarkTheme, toogleTheme] = useState(false);

  return (
    <div>
      <EmotionThemeProvider theme={useDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <Toggle
            label="Use dark theme"
            isChecked={useDarkTheme}
            onChange={() => toogleTheme(!useDarkTheme)}
          />
          <Radio
            name="radio1"
            value="value1"
            onChange={() => setChecked(1)}
            isChecked={checked === 1}
          >
            Default
          </Radio>
          <Radio
            name="radio2"
            value="value2"
            isRequired
            onChange={() => setChecked(2)}
            isChecked={checked === 2}
          >
            Required
          </Radio>
          <Radio
            name="radio3"
            value="value3"
            onChange={() => setChecked(3)}
            isChecked={checked === 3}
          >
            <ul>
              <li>This text box</li>
              <li>has multiple lines of code</li>
              <li>
                and actually has quite a lot of content just to fill out the
                space like certain clients do in TableCheck
              </li>
            </ul>
          </Radio>
          <Radio
            name="radio4"
            value="value4"
            isDisabled
            onChange={() => setChecked(4)}
            isChecked={checked === 4}
          >
            Disabled
          </Radio>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
