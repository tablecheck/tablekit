Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as
stand-alone action triggers.

Button also exports a button-group component to make it easy to display multiple buttons together.

It's important to note that for interactivity styles (hover etc) to function correctly
either `onClick` or `href` must be defined, usually this shouldn't be an issue.

**Important!** Please be careful when using `appearance="outline"` or `appearance="primary-outline"`
, it should not be picked by default and it's use case should be carefully considered. Suggested use
cases are as follows, even if under these categories usage should be discussed with at least 1 other
person.

1. Actions that must be available but we don't want to encourage the user to click.
2. On Marketing pages for aesthetic usage and used sparingly and by design only.

```tsx
import { FieldHeight } from '@tablecheck/tablekit-theme';

<div>
  <strong>Minimum button width:</strong>
  <ol style={{ listStyleType: 'decimal', paddingLeft: '15px' }}>
    {Object.keys(FieldHeight).map((key) => (
      <li key={key}>{`${key}: ${parseInt(FieldHeight[key], 10) * 3}px`}</li>
    ))}
  </ol>
</div>;
```

## Horizontal Buttons

```tsx fullwidth
import { useState, Fragment } from 'react';
import startCase from 'lodash/startCase';
import styled from '@emotion/styled';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import { faCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import {
  Select,
  selectDarkTheme,
  selectThemeNamespace
} from '@tablecheck/tablekit-select';
import { Typography } from '@tablecheck/tablekit-typography';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Tooltip } from '@tablecheck/tablekit-tooltip';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ZIndex,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  Checkbox,
  checkboxDarkTheme,
  checkboxThemeNamespace
} from '@tablecheck/tablekit-checkbox';
import {
  buttonDarkTheme,
  buttonThemeNamespace,
  Button,
  ButtonSize,
  ButtonAppearance,
  ButtonShape,
  ButtonColor
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const ExamplesRow = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 9;
`;

const ExamplesHeader = styled.h4`
  ${({ theme }) => `color: ${theme.colors.text};`}
  ${Typography.Heading3}
  padding: 20px 10px 10px;
  grid-column-start: 1;
  grid-column-end: 9;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [buttonThemeNamespace]: buttonDarkTheme,
  [checkboxThemeNamespace]: checkboxDarkTheme,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const BtnWrapper = styled.div`
  padding: 12px;
  ${({ appearance, theme }) =>
    appearance === 'inverse' ? `background: ${theme.colors.primary}` : ''};
`;

function SunSvg() {
  return (
    <svg viewBox="0 0 302.4 302.4" width="16" height="16">
      <path
        fill="currentColor"
        d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"
      />
    </svg>
  );
}

const Btn = (props) => (
  <BtnWrapper appearance={props.appearance}>
    <Button {...props} onClick={() => {}} />
  </BtnWrapper>
);

const appearances = Object.values(ButtonAppearance).filter(
  (appearance) =>
    [ButtonAppearance.Vertical, ButtonAppearance.DisabledVertical].indexOf(
      appearance
    ) === -1
);
const shapes = Object.values(ButtonShape);
const sizes = Object.values(ButtonSize);
const colors = Object.values(ButtonColor);

const appearanceOptions = appearances.map((appearance) => ({
  label: startCase(appearance),
  value: appearance
}));

const colorOptions = colors.map((color) => ({
  label: startCase(color),
  value: color
}));

const PresentationWrapper = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonAppearance, setButtonAppearance] = useState(
    ButtonAppearance.Disabled
  );
  const [buttonColor, setButtonColor] = useState(ButtonColor.Primary);

  return (
    <div>
      <ThemeProvider
        useLocalStyles
        theme={isDarkTheme ? darkTheme : classicTheme}
        isDark={isDarkTheme}
      >
        <ExamplesWrapper>
          <ExamplesRow>
            <Checkbox
              onChange={() => setIsLoading(!isLoading)}
              isChecked={isLoading}
            >
              Toggle loading state
            </Checkbox>
            <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
              Use dark theme
            </Checkbox>
          </ExamplesRow>
          <ExamplesRow>
            <ItemGroup orientation="horizontal" hasIndent>
              <ItemGroup>
                <div>Button appearance</div>
                <Select
                  options={appearanceOptions}
                  value={appearanceOptions.find(
                    ({ value }) => value === buttonAppearance
                  )}
                  menuPortalTarget={document.body}
                  onChange={({ value }) => setButtonAppearance(value)}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
                  }}
                />
              </ItemGroup>
              <ItemGroup>
                <div>Button сolor</div>
                <Select
                  options={colorOptions}
                  value={colorOptions.find(
                    ({ value }) => value === buttonColor
                  )}
                  menuPortalTarget={document.body}
                  onChange={({ value }) => setButtonColor(value)}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
                  }}
                />
              </ItemGroup>
            </ItemGroup>
          </ExamplesRow>
          <ExamplesHeader>
            Appearance {startCase(buttonAppearance)}
          </ExamplesHeader>
          {shapes.map((shape) =>
            sizes.map((size) => (
              <Fragment key={`${shape}_${size}`}>
                <Btn
                  shape={shape}
                  isLoading={isLoading}
                  shouldFitContainer
                  size={size}
                  appearance={buttonAppearance}
                  color={buttonColor}
                >
                  {`${startCase(size)} ${startCase(shape)}`}
                </Btn>
                <Btn
                  shape={shape}
                  isLoading={isLoading}
                  size={size}
                  appearance={buttonAppearance}
                  color={buttonColor}
                  iconBefore={<Icon icon={faEdit} />}
                />
              </Fragment>
            ))
          )}
          <ExamplesRow>
            <Btn
              iconBefore={<Icon icon={faEdit} />}
              isLoading={isLoading}
              size={ButtonSize.Small}
            >
              Icon before Small
            </Btn>
            <Btn iconBefore={<Icon icon={faEdit} />} isLoading={isLoading}>
              Icon before
            </Btn>
            <Btn
              appearance="default"
              iconAfter={<Icon icon={faChevronDown} />}
              isLoading={isLoading}
              isDisabled
            >
              Icon after
            </Btn>
            <Btn
              iconBefore={<Icon icon={faEdit} size="large" />}
              isLoading={isLoading}
              size={ButtonSize.Large}
            >
              Icon before Large
            </Btn>
          </ExamplesRow>
          <ExamplesRow>
            <Btn
              size={ButtonSize.Small}
              shape={ButtonShape.Circular}
              iconBefore={<Icon icon={faCircle} />}
              isLoading={isLoading}
            />
            <Btn
              shape={ButtonShape.Circular}
              iconBefore={<Icon icon={faCircle} />}
              isLoading={isLoading}
            />
            <Btn
              size={ButtonSize.Large}
              shape={ButtonShape.Circular}
              iconBefore={<Icon icon={faCircle} />}
              isLoading={isLoading}
            />
          </ExamplesRow>
          <ExamplesRow>
            <Btn isDisabled href="http://google.com" isLoading={isLoading}>
              Disabled Link to Google
            </Btn>
            <Btn href="http://google.com" isLoading={isLoading}>
              Link to Google
            </Btn>
            <Btn iconBefore={SunSvg}>With Custom Icon</Btn>
            <Tooltip
              shouldHideOnMouseDown
              content="Some content"
              popperProps={{ placement: 'bottom' }}
            >
              {(setTargetRef) => (
                <Button ref={setTargetRef}>Forwarded Ref</Button>
              )}
            </Tooltip>
          </ExamplesRow>
          <ExamplesRow>
            <Btn
              shape={ButtonShape.Circular}
              appearance={ButtonAppearance.Subtle}
              iconBefore={<Icon icon={faEdit} />}
              isLoading={isLoading}
            />
            <div style={{ padding: 12 }}>
              <Button
                onClick={() => {}}
                isLoading={isLoading}
                size={{
                  'min-width: 800px': ButtonSize.Large,
                  default: ButtonSize.Regular
                }}
              >
                Size can also be responsive
              </Button>
            </div>
          </ExamplesRow>
          <ExamplesRow>
            <Button
              iconBefore={<Icon icon={faEdit} />}
              iconAfter={<Icon icon={faEdit} />}
              shouldFitContainer
              isLoading={isLoading}
            >
              Center aligned icons
            </Button>
          </ExamplesRow>
        </ExamplesWrapper>
      </ThemeProvider>
    </div>
  );
};

<PresentationWrapper />;
```

## Vertical Buttons

```tsx fullwidth
import { useState, Fragment } from 'react';
import startCase from 'lodash/startCase';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import {
  Select,
  selectDarkTheme,
  selectThemeNamespace
} from '@tablecheck/tablekit-select';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  COLORS,
  CLASSIC_COLORS,
  DARK_COLORS,
  ZIndex,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  Checkbox,
  checkboxDarkTheme,
  checkboxThemeNamespace
} from '@tablecheck/tablekit-checkbox';
import {
  Button,
  ButtonSize,
  ButtonColor,
  buttonThemeNamespace,
  buttonDarkTheme,
  ButtonShape,
  ButtonAppearance
} from './index';

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ExamplesRow = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 5;
`;

const darkTheme = {
  colors: DARK_COLORS,
  [buttonThemeNamespace]: buttonDarkTheme,
  [checkboxThemeNamespace]: checkboxDarkTheme,
  [selectThemeNamespace]: selectDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const BtnWrapper = styled.div`
  padding: 12px;
  ${({ appearance, theme }) =>
    appearance === 'inverse' ? `background: ${theme.colors.primary}` : ''};
`;

const VerticalButton = (props) => (
  <BtnWrapper appearance={props.appearance}>
    <Button {...props} onClick={() => {}} />
  </BtnWrapper>
);

const shapes = Object.values(ButtonShape).filter(
  (shape) => shape === ButtonShape.Sharp
);
const sizes = Object.values(ButtonSize);
const colors = Object.values(ButtonColor);

const appearanceOptions = [
  {
    label: startCase(ButtonAppearance.DisabledVertical),
    value: ButtonAppearance.DisabledVertical
  },
  {
    label: startCase(ButtonAppearance.Vertical),
    value: ButtonAppearance.Vertical
  }
];
const colorOptions = colors.map((color) => ({
  label: startCase(color),
  value: color
}));

const PresentationWrapper = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonAppearance, setButtonAppearance] = useState(
    ButtonAppearance.Vertical
  );
  const [buttonColor, setButtonColor] = useState(ButtonColor.Primary);

  return (
    <div>
      <ThemeProvider
        useLocalStyles
        theme={isDarkTheme ? darkTheme : classicTheme}
        isDark={isDarkTheme}
      >
        <ExamplesWrapper>
          <ExamplesRow>
            <Checkbox
              onChange={() => setIsLoading(!isLoading)}
              isChecked={isLoading}
            >
              Toggle loading state
            </Checkbox>
            <Checkbox onChange={() => toggleTheme(!isDarkTheme)}>
              Use dark theme
            </Checkbox>
          </ExamplesRow>
          <ExamplesRow>
            <ItemGroup orientation="horizontal" hasIndent>
              <ItemGroup>
                <div>Button appearance</div>
                <Select
                  options={appearanceOptions}
                  value={appearanceOptions.find(
                    ({ value }) => value === buttonAppearance
                  )}
                  menuPortalTarget={document.body}
                  onChange={({ value }) => setButtonAppearance(value)}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
                  }}
                />
              </ItemGroup>
              <ItemGroup>
                <div>Button сolor</div>
                <Select
                  options={colorOptions}
                  value={colorOptions.find(
                    ({ value }) => value === buttonColor
                  )}
                  menuPortalTarget={document.body}
                  onChange={({ value }) => setButtonColor(value)}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
                  }}
                />
              </ItemGroup>
            </ItemGroup>
          </ExamplesRow>
          {shapes.map((shape) =>
            sizes.map((size) => (
              <VerticalButton
                key={`${shape}_${size}`}
                iconBefore={<Icon icon={faEdit} />}
                isLoading={isLoading}
                size={size}
                appearance={buttonAppearance}
                color={buttonColor}
                shape={shape}
              >
                {`${startCase(size)} ${startCase(shape)}`}
              </VerticalButton>
            ))
          )}
        </ExamplesWrapper>
      </ThemeProvider>
    </div>
  );
};

<PresentationWrapper />;
```

## Button custom theming

```tsx
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { faEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import { Icon } from '@tablecheck/tablekit-icon';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  Button,
  buttonThemeNamespace,
  ButtonAppearance,
  ButtonShape
} from './index';

const appearances = Object.values(ButtonAppearance);

const customTheme = {
  colors: {
    ...CLASSIC_COLORS,
    primary: COLORS.BLUE.L5,
    primary2: COLORS.BLUE.L7,
    danger: COLORS.PINK.L5,
    success: COLORS.AQUA.L5,
    warning: COLORS.ORANGE.L5,
    focusOutline: COLORS.ORANGE.L4
  }
};

const PresentationWrapper = () => {
  return (
    <EmotionThemeProvider theme={customTheme}>
      <ItemGroup orientation="horizontal" hasIndent>
        {appearances.map((appearance) => (
          <Button
            shape={ButtonShape.Circular}
            key={appearance}
            appearance={appearance}
            iconBefore={<Icon icon={faEdit} />}
          />
        ))}
      </ItemGroup>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationWrapper />
</ThemeProvider>;
```

## ComponentButton usage

```tsx
import styled from '@emotion/styled';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { Icon } from '@tablecheck/tablekit-icon';
import { ComponentButton } from './index';

const Chevron = styled(Icon)`
  transition: 0.25s ease-in-out;
  transform: rotate(0deg);
`;
const RotatorButton = styled.button`
  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

const Button = ComponentButton.withComponent(RotatorButton);

function DemoComponent() {
  const [state, set] = useState('closed');
  return (
    <ThemeProvider>
      <Checkbox
        onChange={() => set(state === 'open' ? 'closed' : 'open')}
        isChecked={state === 'open'}
      >
        Toggle chevron state
      </Checkbox>
      <Button data-state={state} iconAfter={<Chevron icon={faChevronDown} />}>
        Animated Button Icon
      </Button>
    </ThemeProvider>
  );
}

<DemoComponent />;
```
