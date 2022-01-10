```tsx
import { useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  checkboxDarkTheme,
  checkboxClassicTheme,
  checkboxThemeNamespace
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  [checkboxThemeNamespace]: checkboxDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [checkboxThemeNamespace]: checkboxClassicTheme,
  colors: CLASSIC_COLORS
};

const PresentationModule = () => {
  const [state, setObjectState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false
  });

  const [isDarkTheme, toggleDarkTheme] = useState(false);
  const toggleCheckbox = ({ target: { name } }) =>
    setObjectState({
      ...state,
      [name]: !state[name]
    });
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

          <ItemGroup hasIndent>
            <Checkbox
              name="checkbox1"
              value="value1"
              onChange={toggleCheckbox}
              isChecked={state.checkbox1}
            >
              Default
            </Checkbox>
            <Checkbox
              name="checkbox2"
              value="value2"
              isRequired
              onChange={toggleCheckbox}
              isChecked={state.checkbox2}
            >
              Required
            </Checkbox>
            <Checkbox
              name="checkbox3"
              value="value3"
              isDisabled
              onChange={toggleCheckbox}
              isChecked={state.checkbox3}
            >
              Disabled
            </Checkbox>
            <Checkbox isDisabled isChecked>
              Checked and Disabled
            </Checkbox>
            <Checkbox
              name="checkbox4"
              value="value4"
              onChange={toggleCheckbox}
              isChecked={state.checkbox4}
            >
              <ul>
                <li>This text box</li>
                <li>has multiple lines of code</li>
                <li>
                  and actually has quite a lot of content just to fill out the
                  space like certain clients do in TableCheck
                </li>
              </ul>
            </Checkbox>
            <Checkbox
              name="checkbox5"
              value="value5"
              isInvalid={!state.checkbox5}
              isRequired
              onChange={toggleCheckbox}
              isChecked={state.checkbox5}
            >
              Required (Highlight)
            </Checkbox>
            <Checkbox
              name="checkbox6"
              value="value6"
              isInvalid={!state.checkbox6}
              isRequired
              onChange={toggleCheckbox}
              isChecked={state.checkbox6}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Checkbox>
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
