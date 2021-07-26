Password Field provides a bar for custom password strength.
It exports both a stateful default component, and a stateless component `{ PasswordFieldStateless }`.

For calculating and displaying the errors, you can use the default `calculateScore` and `validationFunc` or provide your own. `validationFunc` should return one of the keys in `i18nMessage` on error, so that this component can show invalidMessage from `i18nMessage[key]`.

### Example

```tsx
import { useState } from 'react';
import { InputSize } from '@tablecheck/tablekit-input';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from '@tablecheck/tablekit-typography';
import { Size, ThemeProvider } from '@tablecheck/tablekit-theme';
import { Icon } from '@tablecheck/tablekit-icon';
import { faLock } from '@fortawesome/pro-solid-svg-icons/faLock';
import { EventPreview } from '../../../oldDocs/helpers/styled';
import { PasswordField, calculateScore, validationFunc } from './index';

const [invalidKey, setInvalidKey] = useState('');
const [score, setScore] = useState('');

const minLength = 6;
const normalLength = 10;

const onChange = (value, metadata) => {
  setInvalidKey(`current error key: ${metadata.invalidKey}`);
};

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotLink = styled(Link)`
  margin-left: 16px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: initial;
  padding-left: 20px;
  margin-bottom: 16px;
`;

const isRequired = 'Password field is required';
const isInvalidFormat =
  'Must include at least one uppercase letter, one lowercase letter, one number, and one symbol';
const danger = 'Your password is too short';
const warning = 'Your password could be longer';
const success = 'Your password is long enough';

<ThemeProvider useLocalStyles>
  <List>
    <li>Password length must be equal or greater than {minLength}</li>
    <li>
      Password must include at least one uppercase letter, one lowercase letter,
      one number, and one symbol
    </li>
  </List>

  <PasswordField
    onChangeValue={onChange}
    calculateScore={calculateScore}
    label="Regular2 size with password strength bar"
    iconBefore={<Icon icon={faLock} />}
    validationFunc={validationFunc}
    width={Size.Large}
    size={InputSize.Regular2}
    i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
  />
  <EventPreview>
    {invalidKey}
    <br />
    {score}
  </EventPreview>

  <PasswordField
    hideScore
    onChangeValue={onChange}
    calculateScore={calculateScore}
    width={Size.XLarge}
    size={InputSize.Large}
    label={
      <LabelContainer>
        <div>With link</div>
        <ForgotLink>Forgot your password?</ForgotLink>
      </LabelContainer>
    }
    iconBefore={<Icon icon={faLock} />}
    validationFunc={validationFunc}
    i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
  />

  <div>
    <PasswordField
      onChangeValue={onChange}
      calculateScore={calculateScore}
      label="XXLarge size"
      width={Size.XXLarge}
      validationFunc={validationFunc}
      i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
    />
  </div>

  <PasswordField
    onChangeValue={onChange}
    calculateScore={calculateScore}
    label="Regular size and should fit container"
    shouldFitContainer
    validationFunc={validationFunc}
    i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
  />

  <PasswordField
    onChangeValue={onChange}
    calculateScore={calculateScore}
    label="Large size and should fit container"
    shouldFitContainer
    size={InputSize.Large}
    validationFunc={validationFunc}
    i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
  />

  <PasswordField
    hideScore
    onChangeValue={onChange}
    calculateScore={calculateScore}
    width={Size.Large}
    size={InputSize.Small}
    label="Small size without password strength bar"
    iconBefore={<Icon icon={faLock} />}
    validationFunc={validationFunc}
    i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
    shouldHideScore
  />

  <div>
    <PasswordField
      hideScore
      onChangeValue={onChange}
      calculateScore={calculateScore}
      label="Regular size with small width"
      iconBefore={<Icon icon={faLock} />}
      validationFunc={validationFunc}
      width={Size.Small}
      i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
    />
  </div>
</ThemeProvider>;
```
