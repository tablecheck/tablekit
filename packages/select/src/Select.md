React component which allows selection of an item or items from a dropdown list, wrapper around react-select.
Please refer to react-select for [prop documentation](https://react-select.com/props).

Additional props to match with `@tablecheck/tablekit-input` are; `size`, `shouldFitContainer`, `isInvalid`, `isSuccess` and `isWarning`

### Simple Select

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  ClassNames,
  ThemeProvider as EmotionThemeProvider
} from '@emotion/react';
import { faCity } from '@fortawesome/pro-solid-svg-icons/faCity';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Icon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Block } from '@tablecheck-react-system/document-utils';
import {
  SelectWrapper,
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';

const inputSizes = [
  InputSize.Large,
  InputSize.Regular2,
  InputSize.Regular,
  InputSize.Small
];

const options = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra' },
  { label: 'Darwin', value: 'darwin' },
  { label: 'Hobart', value: 'hobart' },
  { label: 'Melbourne', value: 'melbourne' },
  { label: 'Perth', value: 'perth' },
  { label: 'Sydney', value: 'sydney' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Detroit', value: 'detroit' },
  { label: 'Lansing', value: 'lansing' }
];

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

const PresentationModule = () => {
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
          <SelectWrapper label="Text only" isMessageHidden>
            <Select
              options={options}
              placeholder="Choose a City"
              menuPortalTarget={document.body}
            />
          </SelectWrapper>
          <SelectWrapper label="Icon + text" isMessageHidden>
            <Select
              options={options}
              iconBefore={<Icon icon={faCity} />}
              placeholder="Choose a City"
              menuPortalTarget={document.body}
            />
          </SelectWrapper>
          <ItemGroup orientation="horizontal" hasIndent>
            {inputSizes.map((sizeKey) => {
              const label = `${sizeKey
                .charAt(0)
                .toUpperCase()}${sizeKey.substring(1)}`;
              return (
                <SelectWrapper key={sizeKey} label={label} isMessageHidden>
                  <Select
                    options={options}
                    iconBefore={<Icon icon={faCity} />}
                    placeholder="Choose a City"
                    menuPortalTarget={document.body}
                    size={sizeKey}
                  />
                </SelectWrapper>
              );
            })}
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```

### Disabled Select

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  ClassNames,
  ThemeProvider as EmotionThemeProvider
} from '@emotion/react';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  color,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';
import { Block } from '@tablecheck-react-system/document-utils';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

const PresentationModule = () => {
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
          <Block>
            <ClassNames>
              {({ css, cx }) => (
                <Select
                  className={css({ marginBottom: '16px' })}
                  options={[{ label: 'Lansing', value: 'lansing' }]}
                  isDisabled
                  placeholder="Choose a City"
                  menuPortalTarget={document.body}
                />
              )}
            </ClassNames>
          </Block>
          <Block>
            <Select
              options={[
                { label: 'Lansing', value: 'lansing', isDisabled: true },
                { label: 'Perth', value: 'perth' }
              ]}
              placeholder="Choose a City"
              menuPortalTarget={document.body}
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

### Validation

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { cities } from '../examples/data';
import { SelectWrapper } from '../src/SelectWrapper';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  color,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';
import { Block } from '@tablecheck-react-system/document-utils';

const errorMsg = 'This field is required.';
const successMsg = 'Great job selecting an option!';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

const PresentationModule = () => {
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
          <Block>
            <SelectWrapper id="error" isInvalid message={errorMsg}>
              <Select
                options={cities}
                placeholder="Choose a City"
                menuPortalTarget={document.body}
              />
            </SelectWrapper>
          </Block>
          <Block>
            <SelectWrapper id="success" isSuccess message={successMsg}>
              <Select
                options={cities}
                defaultValue={cities[0]}
                placeholder="Choose a City"
                menuPortalTarget={document.body}
              />
            </SelectWrapper>
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

### Multi Select

```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  ClassNames,
  ThemeProvider as EmotionThemeProvider
} from '@emotion/react';
import { faCity } from '@fortawesome/pro-solid-svg-icons/faCity';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Icon } from '@tablecheck/tablekit-icon';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Block } from '@tablecheck-react-system/document-utils';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';

const options = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra' },
  { label: 'Darwin', value: 'darwin' },
  { label: 'Hobart', value: 'hobart' },
  { label: 'Melbourne', value: 'melbourne' },
  { label: 'Perth', value: 'perth' },
  { label: 'Sydney', value: 'sydney' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Detroit', value: 'detroit' },
  { label: 'Lansing', value: 'lansing' }
];

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

const PresentationModule = () => {
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
          <Block heading="Multi select">
            <ClassNames>
              {({ css, cx }) => (
                <Select
                  isMulti
                  className={css({ marginBottom: '16px' })}
                  options={options}
                  shouldFitContainer
                  placeholder="Choose a City"
                  menuPortalTarget={document.body}
                />
              )}
            </ClassNames>
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

### Named Exports

To consolidate patterns and improve developer experience `@tablecheck/tablekit-Select`
provides some pre-configure components as named exports.

`import { AsyncSelect } from '@tablecheck/tablekit-Select';`

```tsx
import { cities } from '../examples/data';
import { AsyncSelect } from '../src/index';
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
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';
import { Block } from '@tablecheck-react-system/document-utils';

// you control how the options are filtered
const filter = (inputValue) =>
  cities.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme
};

// async load function using callback (promises also supported)
const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filter(inputValue));
  }, 1000);
};

const PresentationModule = () => {
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
          <Block>
            <AsyncSelect
              defaultOptions
              menuPortalTarget={document.body}
              loadOptions={loadOptions}
              options={cities}
              placeholder="Choose a City"
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

`import { ButtonDropdown } from '@tablecheck/tablekit-Select';`

```tsx
import styled from '@emotion/styled';
import { ButtonDropdown } from '../src/index';
import { Icon } from '@tablecheck/tablekit-icon';
import { faSortAmountDown } from '@fortawesome/pro-solid-svg-icons/faSortAmountDown';
import { faGlobe } from '@fortawesome/pro-solid-svg-icons/faGlobe';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import { useState } from 'react';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Toggle } from '@tablecheck/tablekit-toggle';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from './index';
import {
  buttomDarkTheme,
  buttomClassicTheme,
  buttonThemeNamespace
} from '@tablecheck/tablekit-button';
import { Block } from '@tablecheck-react-system/document-utils';

const RightChevron = styled(Icon)`
  float: right;
`;

const OptionLabel = styled.span`
  margin-left: 10px;
`;

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const options = [
  {
    label: 'Name',
    value: 'name',
    iconBefore: <Icon icon={faGlobe} />,
    iconAfter: <RightChevron icon={faChevronRight} />
  },
  {
    label: 'Creation Date',
    value: 'date',
    iconBefore: <Icon icon={faGlobe} />,
    iconAfter: <RightChevron icon={faChevronRight} />
  },
  {
    label: 'Modified',
    value: 'modified',
    iconBefore: <Icon icon={faGlobe} />,
    iconAfter: <RightChevron icon={faChevronRight} />
  },
  {
    label: 'Franchise',
    value: 'franchise',
    iconBefore: <Icon icon={faGlobe} />,
    iconAfter: <RightChevron icon={faChevronRight} />
  },
  {
    label: 'Status',
    value: 'status',
    iconBefore: <Icon icon={faGlobe} />,
    iconAfter: <RightChevron icon={faChevronRight} />
  }
];

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme,
  [buttonThemeNamespace]: buttomDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme,
  [buttonThemeNamespace]: buttomClassicTheme
};

const PresentationModule = () => {
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
          <Block>
            <ItemGroup hasIndent orientation="horizontal">
              <ButtonDropdown
                buttonProps={{
                  appearance: 'subtle',
                  iconBefore: <Icon icon={faSortAmountDown} />
                }}
                menuPortalTarget={document.body}
                defaultValue={options[0]}
                options={options}
              />
              <ButtonDropdown
                buttonProps={{
                  appearance: 'subtle',
                  iconBefore: <Icon icon={faSortAmountDown} />
                }}
                defaultValue={options[0]}
                options={options}
                menuPortalTarget={document.body}
                getOptionLabel={(option) => (
                  <div>
                    {option.iconBefore}
                    <OptionLabel>{option.label}</OptionLabel>
                    {option.iconAfter}
                  </div>
                )}
              />
            </ItemGroup>
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
