```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Input } from '@tablecheck/tablekit-input';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Block } from '@tablecheck-react-system/document-utils';
import {
  toggleDarkTheme,
  toggleClassicTheme,
  toggleThemeNamespace
} from './index';

const ToggleGroup = styled.div`
  display: flex;
  flex-direction: row;
  alight-items: flex-start;
`;

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [toggleThemeNamespace]: toggleDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [toggleThemeNamespace]: toggleClassicTheme
};

const PresentationModule = () => {
  const [useDarkTheme, toogleTheme] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);

  return (
    <div>
      <EmotionThemeProvider theme={useDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <Toggle
            label="Use dark theme"
            isChecked={useDarkTheme}
            onChange={() => toogleTheme(!useDarkTheme)}
          />
          <Block heading="Input for tab testing">
            <Input />
          </Block>
          <Block
            heading={`Regular, controlled. state is "${
              isChecked1 ? 'true' : 'false'
            }"`}
          >
            <Toggle
              label="Regular with label"
              isChecked={isChecked1}
              onChange={(event) => {
                console.log(event.currentTarget.checked, 'Regular');
                setIsChecked1(event.currentTarget.checked);
              }}
            />
            <Toggle label="Synchronised" isChecked={isChecked1} />
          </Block>
          <Block heading="Disabled">
            <Toggle
              isDisabled
              label="Disabled with label"
              isChecked={false}
              onChange={(event) =>
                console.log(event.currentTarget.checked, 'Disabled')
              }
            />
          </Block>
          <Block heading="Confirm type, uncontrolled default">
            <Toggle type="confirm" defaultChecked />
          </Block>
          <Block heading="Power type">
            <Toggle
              type="power"
              onChange={(event) =>
                console.log(event.currentTarget.checked, 'Power type')
              }
            />
          </Block>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};
<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
