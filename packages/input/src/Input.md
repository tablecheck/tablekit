```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  Input,
  inputDarkTheme,
  inputClassicTheme,
  inputThemeNamespace,
  Appearance,
  InputSize,
  InputShape
} from './index';

const inputSizes = [
  InputSize.Large,
  InputSize.Regular2,
  InputSize.Regular,
  InputSize.Small
];
const inputShapes = Object.values(InputShape);

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [inputThemeNamespace]: inputDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [inputThemeNamespace]: inputClassicTheme
};

const SizesPresentation = () => {
  return (
    <ItemGroup hasIndent>
      <ItemGroup headingText="Input sizes" orientation="horizontal" hasIndent>
        {inputSizes.map((sizeKey) => {
          const label = `${sizeKey.charAt(0).toUpperCase()}${sizeKey.substring(
            1
          )}`;
          return (
            <Input
              key={sizeKey}
              label={label}
              size={sizeKey}
              placeholder={label}
              isMessageHidden
            />
          );
        })}
      </ItemGroup>
      {inputSizes.map((sizeKey) => {
        const sizeLabel = `${sizeKey
          .charAt(0)
          .toUpperCase()}${sizeKey.substring(1)}`;
        return (
          <ItemGroup
            headingText={sizeLabel}
            orientation="horizontal"
            key={sizeKey}
            hasIndent
          >
            {inputShapes.map((shapeKey) => {
              const label = `${shapeKey
                .charAt(0)
                .toUpperCase()}${shapeKey.substring(1)}`;
              return (
                <Input
                  key={shapeKey}
                  size={sizeKey}
                  shape={shapeKey}
                  placeholder={label}
                  iconBefore={<Icon icon={faEdit} />}
                  appearance={Appearance.Success}
                  isMessageHidden
                />
              );
            })}
          </ItemGroup>
        );
      })}
    </ItemGroup>
  );
};

const PresentationModule = () => {
  const [value, setValue] = useState('');
  const [isDarkTheme, toggleTheme] = useState(false);
  const handleOnChange = () => {};

  return (
    <div>
      <ItemGroup orientation="vertical" hasIndent>
        <div>
          <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
            Use dark theme
          </Checkbox>
        </div>
      </ItemGroup>
      <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <SizesPresentation />
          <Input
            label="Has a placeholder"
            placeholder="Placeholder Example"
            shouldFitContainer
          />
          <Input
            label="Is Required and small"
            size={InputSize.Small}
            isRequired
            value="Some Value"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Large size with value"
            size={InputSize.Large}
            value="Large content value"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Small size with value and icon"
            iconBefore={<Icon icon={faEdit} />}
            size={InputSize.Small}
            value="Small content value"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Regular size with value and icon"
            iconBefore={<Icon icon={faEdit} />}
            value="Regular content value"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Large size with value and icon"
            iconBefore={<Icon icon={faEdit} />}
            size={InputSize.Large}
            value="Large content value"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Disabled"
            appearance={Appearance.Disabled}
            value="Disabled"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Loading"
            appearance={Appearance.Loading}
            shouldFitContainer
          />
          <Input
            label="Warning"
            appearance={Appearance.Warning}
            shouldFitContainer
          />
          <Input
            label="Invalid with message"
            appearance={Appearance.Invalid}
            message="Some message to tell the user what's what when invalid!"
            shouldFitContainer
          />
          <Input
            label="Invalid without message placeholder"
            appearance={Appearance.Invalid}
            isMessageHidden
            shouldFitContainer
          />
          <Input
            label="Type To fill out the Message"
            onChange={(event) => setValue(event.currentTarget.value)}
            value={value}
            message={value}
            shouldFitContainer
          />
          <Input
            value="Minimalistic Settings"
            onChange={handleOnChange}
            shouldFitContainer
          />
          <Input
            label="Success"
            appearance={Appearance.Success}
            shouldFitContainer
          />
          <Input
            label="Small search input"
            size={InputSize.Small}
            type="search"
            placeholder="Type to search..."
            appearance={Appearance.Loading}
            shouldFitContainer
          />
          <Input
            label="Search input"
            type="search"
            placeholder="Type to search..."
            appearance={Appearance.Loading}
            shouldFitContainer
          />
          <Input
            label="Large search input"
            size={InputSize.Large}
            type="search"
            placeholder="Type to search..."
            appearance={Appearance.Loading}
            shouldFitContainer
          />
          <Input
            label="Email Input"
            type="email"
            name="email"
            placeholder="Email"
            message="Checking Autofill style browser extensions positioning"
            appearance={Appearance.Success}
            shouldFitContainer
          />
          <Input
            label="Password Input"
            type="password"
            name="password"
            placeholder="Password"
            message="Checking Autofill style browser extensions positioning"
            appearance={Appearance.Warning}
            shouldFitContainer
          />
          <Input label="Should Fit Container" shouldFitContainer />
          <Input
            label="Responsive Size"
            size={{
              'min-width: 600px': 'regular',
              'min-width: 800px': 'large',
              default: 'small'
            }}
            shouldFitContainer
          />
          {Object.values(Size).map((sizeValue) => (
            <Input
              key={sizeValue}
              label={sizeValue}
              name={sizeValue}
              placeholder={sizeValue}
              width={sizeValue}
            />
          ))}
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```

## Using in forms

By default, the Input field has no external padding, the div that wraps the input is the exact size of the content.
When using in a form, often we will want to space inputs apart from each other, here is the minimal example of how to do this.
A blue border has been added around the inputs to assist with clarity.

```jsx
import styled from '@emotion/styled';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Input } from './index';

const FormInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  border: 1px solid blue;
`;

<ThemeProvider>
  <div>
    <FormInput isMessageHidden />
    <FormInput message="Some helper text" />
    <FormInput isMessageHidden />
  </div>
</ThemeProvider>;
```
