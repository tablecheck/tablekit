International phone number input

### Usage

Phone Input provides country select and phone number input field with format validation based off [react-phone-number-input](https://github.com/catamphetamine/react-phone-number-input) and [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js).

```tsx
import { EventPreview } from '@tablecheck-react-system/document-utils';
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ModalDialog, ModalTrigger } from '@tablecheck/tablekit-modal-dialog';
import { Button } from '@tablecheck/tablekit-button';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  Input,
  inputDarkTheme,
  inputClassicTheme,
  inputThemeNamespace,
  Appearance
} from '@tablecheck/tablekit-input';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from '@tablecheck/tablekit-select';
// this is just a mock data - i18nCountries needs to be localized data passed from each project.
import { groupedCountries } from './defaultI18nCountries';

const ModalBtnTrigger = (props) => <ModalTrigger as={Button} {...props} />;

const [isRtl, setRtl] = useState(false);

const validationFunc = (value, input, isInvalidFormat) => {
  if (isInvalidFormat) {
    return 'Phone field must be a valid phone number.';
  }
  if (!input) {
    return 'Phone field is required.';
  }
  return null;
};

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [selectThemeNamespace]: selectDarkTheme,
  [inputThemeNamespace]: inputDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [selectThemeNamespace]: selectClassicTheme,
  [inputThemeNamespace]: inputClassicTheme
};

const PresentationModule = () => {
  const [state, setObjectState] = useState({ value: '+333333' });
  const [useDarkTheme, toogleTheme] = useState(false);
  const setState = (newState = {}) => setObjectState({ ...state, ...newState });

  const onChange = (value, metadata) => {
    setState({
      parsed: `parsed phone number value: ${value}`,
      isValid: metadata.isValid
    });
  };

  const onChangeWithDefault = (value, metadata) => {
    setState({
      value,
      parsedWithValue: `parsed phone number value: ${value}`,
      isValid2: metadata.isValid
    });
  };

  return (
    <div>
      <ItemGroup orientation="horizontal" hasIndent>
        <Toggle
          label="Use dark theme"
          isChecked={useDarkTheme}
          onChange={() => toogleTheme(!useDarkTheme)}
        />
        <Toggle
          label="Use RTL"
          isChecked={isRtl}
          onChange={() => setRtl(!isRtl)}
        />
      </ItemGroup>
      <EmotionThemeProvider
        theme={{ ...(useDarkTheme ? darkTheme : classicTheme), isRtl: isRtl }}
      >
        <ExamplesWrapper dir={isRtl ? 'rtl' : ''}>
          <ModalDialog
            trigger={<ModalBtnTrigger>Open modal</ModalBtnTrigger>}
            headerContent="Modal"
            width={Size.Regular}
            hasCloseIcon
          >
            <PhoneInput
              value={state.value}
              i18nCountries={groupedCountries}
              validationFunc={validationFunc}
              onChange={onChangeWithDefault}
              shouldFitContainer
              flagSelectOptions={{
                menuPortalTarget: document.body,
                styles: {
                  menuPortal: (base) => ({
                    ...base,
                    zIndex: Number.MAX_SAFE_INTEGER
                  })
                }
              }}
            />
          </ModalDialog>
          <PhoneInput
            label="Phone input with hidden flag"
            validationFunc={validationFunc}
            onChange={onChange}
            i18nCountries={groupedCountries}
            defaultCountry="JP"
            onValidityChange={(isValid) => setState({ isValid })}
            isRequired
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body
            }}
            shouldHideFlags
          />
          <PhoneInput
            label="With error message"
            validationFunc={validationFunc}
            onChange={onChange}
            i18nCountries={groupedCountries}
            defaultCountry="JP"
            onValidityChange={(isValid) => setState({ isValid })}
            isRequired
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body
            }}
            appearance={Appearance.Disabled}
          />
          <EventPreview>
            Value: {state.parsed}
            <br />
            Is Valid: {state.isValid ? 'True' : 'False'}
          </EventPreview>

          <Input
            label="Value linked to below phone input"
            value={state.value || ''}
            shouldFitContainer
            onChange={(event) => setState({ value: event.currentTarget.value })}
          />

          <PhoneInput
            label="With default value"
            value={state.value}
            i18nCountries={groupedCountries}
            validationFunc={validationFunc}
            onChange={onChangeWithDefault}
            isMessageHidden
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body
            }}
          />
          <EventPreview>
            Value: {state.parsedWithValue}
            <br />
            Is Valid: {state.isValid2 ? 'True' : 'False'}
          </EventPreview>
          <PhoneInput
            label="Large size"
            value={state.value}
            size={Size.Large}
            i18nCountries={groupedCountries}
            validationFunc={validationFunc}
            onChange={onChangeWithDefault}
            isMessageHidden
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body
            }}
          />
          <PhoneInput
            label="Disabled"
            value={state.value}
            isDisabled
            i18nCountries={groupedCountries}
            validationFunc={validationFunc}
            onChange={onChangeWithDefault}
            isMessageHidden
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body
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
