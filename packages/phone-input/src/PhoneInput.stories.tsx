import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import {
  Input,
  inputDarkTheme,
  inputClassicTheme,
  inputThemeNamespace,
  InputSize
} from '@tablecheck/tablekit-input';
import { ModalDialog, ModalTrigger } from '@tablecheck/tablekit-modal-dialog';
import {
  selectDarkTheme,
  selectClassicTheme,
  selectThemeNamespace
} from '@tablecheck/tablekit-select';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Link, Typography } from '@tablecheck/tablekit-typography';
import { CountryCode } from 'libphonenumber-js/types';
import { useState, ChangeEventHandler, ChangeEvent } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

// this is just a mock data - i18nCountries needs to be localized data passed from each project.
import { groupedCountries } from './defaultI18nCountries';

import { PhoneFieldProps, PhoneInput } from './index';

export default {
  title: 'Components/Phone Input',
  component: PhoneInput,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid', 'errorMessage']
    }
  }
} as Meta;

const ModalBtnTrigger = (props: any) => <ModalTrigger as={Button} {...props} />;

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

const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  width: 94%;
  margin: 0 auto;
  ${Typography.Body1};
  p {
    margin-bottom: 20px;
  }
`;

const EventPreview = styled.div`
  border-style: dashed;
  border-width: 1px;
  border-color: #ccc;
  padding: 0.5em;
  color: #ccc;
  margin: 0.5em;
`;

type OnChangeTypes = ChangeEventHandler<HTMLInputElement> &
  ((
    value: string | undefined,
    metadata: {
      country?: CountryCode | undefined;
      input?: string | undefined;
      isValid: boolean;
    },
    event?: ChangeEvent<HTMLInputElement> | undefined
  ) => void);

type MetadataTypes = {
  country?: CountryCode | undefined;
  input?: string | undefined;
  isValid: boolean;
};

type StateTypes = {
  value: string | undefined;
  parsed?: string;
  isValid?: boolean;
};

const ModalTemplate: Story<PhoneFieldProps> = ({ ...args }) => {
  const [state, setObjectState] = useState({ value: '+333333' });
  const setState = (newState = {}) => setObjectState({ ...state, ...newState });

  const onChangeWithDefault = (
    value: string | undefined,
    metadata: {
      ountry?: CountryCode | undefined;
      input?: string | undefined;
      isValid: boolean;
    }
  ) => {
    setState({
      value,
      parsed: `parsed phone number value: ${value}`,
      isValid: metadata.isValid
    });
  };
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Wrapper>
        <p>
          Phone Input provides country select and phone number input field with
          format validation based off{' '}
          <Link href="https://github.com/catamphetamine/react-phone-number-input">
            react-phone-number-input
          </Link>{' '}
          and{' '}
          <Link href="https://www.npmjs.com/package/libphonenumber-js">
            libphonenumber-js
          </Link>
          .
        </p>
        <ModalDialog
          trigger={<ModalBtnTrigger>Open modal</ModalBtnTrigger>}
          headerContent="Modal"
          width={Size.Regular}
          hasCloseIcon
        >
          <PhoneInput
            {...args}
            value={state.value}
            i18nCountries={groupedCountries}
            onChange={onChangeWithDefault as OnChangeTypes}
            shouldFitContainer
            flagSelectOptions={{
              menuPortalTarget: document.body,
              styles: {
                menuPortal: (base: any) => ({
                  ...base,
                  zIndex: Number.MAX_SAFE_INTEGER
                })
              } as any
            }}
          />
        </ModalDialog>
      </Wrapper>
    </ThemeProvider>
  );
};

export const Modal = ModalTemplate.bind({});

const Template: Story<PhoneFieldProps> = ({ ...args }) => {
  const [isRtl, setRtl] = useState(false);
  const [state, setObjectState] = useState<StateTypes>({ value: undefined });
  const setState = (newState = {}) => setObjectState({ ...state, ...newState });

  const onChange = (value: string | undefined, metadata: MetadataTypes) => {
    setState({
      parsed: `parsed phone number value: ${value}`,
      isValid: metadata.isValid
    });
  };
  const isDark = useDarkMode();
  return (
    <Wrapper>
      <Toggle
        label="Ussse RTL"
        isChecked={isRtl}
        onChange={() => setRtl((previousValue) => !previousValue)}
      />
      <EmotionThemeProvider
        theme={{ ...(isDark ? darkTheme : classicTheme), isRtl }}
      >
        <div dir={isRtl ? 'rtl' : ''}>
          <PhoneInput
            {...args}
            onChange={onChange as OnChangeTypes}
            i18nCountries={groupedCountries}
            flagSelectOptions={{
              menuPortalTarget: document.body,
              styles: {
                menuPortal: (base: any) => ({
                  ...base,
                  zIndex: Number.MAX_SAFE_INTEGER
                })
              } as any
            }}
          />
          <EventPreview>
            Value: {state.parsed}
            <br />
            Is Valid: {state.isValid ? 'True' : 'False'}
          </EventPreview>
        </div>
      </EmotionThemeProvider>
    </Wrapper>
  );
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  shouldFitContainer: true
};

export const WithHiddenFlag = Template.bind({});
WithHiddenFlag.args = {
  label: 'Phone input with hidden flag',
  isRequired: true,
  shouldFitContainer: true,
  shouldHideFlags: true
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: 'Large size',
  size: InputSize.Large,
  isMessageHidden: true,
  shouldFitContainer: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  isDisabled: true,
  isMessageHidden: true,
  shouldFitContainer: true
};

const LinkedTemplate: Story<PhoneFieldProps> = ({ ...args }) => {
  const [state, setObjectState] = useState<StateTypes>({ value: '+333333' });
  const setState = (newState = {}) => setObjectState({ ...state, ...newState });
  const onChangeWithDefault = (
    value: string | undefined,
    metadata: MetadataTypes
  ) => {
    setState({
      value,
      parsed: `parsed phone number value: ${value}`,
      isValid: metadata.isValid
    });
  };
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Wrapper>
        <Input
          label="Value linked to below phone input"
          value={state.value || undefined}
          shouldFitContainer
          onChange={(event) => setState({ value: event.currentTarget.value })}
        />
        <PhoneInput
          {...args}
          label="With default value"
          value={state.value}
          onChange={onChangeWithDefault as OnChangeTypes}
          i18nCountries={groupedCountries}
          flagSelectOptions={{
            menuPortalTarget: document.body,
            styles: {
              menuPortal: (base: any) => ({
                ...base,
                zIndex: Number.MAX_SAFE_INTEGER
              })
            } as any
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export const Linked = LinkedTemplate.bind({});
