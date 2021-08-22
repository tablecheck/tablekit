import styled from '@emotion/styled';
import '@tablecheck/tablekit-free-icon-config';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import { Size } from '@tablecheck/tablekit-theme';
import { Link, Typography } from '@tablecheck/tablekit-typography';
import { useState } from 'react';

import { PasswordFieldProps } from './PasswordField';

import { PasswordField, calculateScore, validationFunc } from './index';

export default {
  title: 'Components/Password Field',
  component: PasswordField,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  },
  argTypes: {
    iconBefore: {
      control: false
    },
    iconAfter: {
      control: false
    },
    width: {
      control: {
        type: 'select'
      },
      options: [
        Size.XSmall,
        Size.Small,
        Size.Regular,
        Size.Regular2,
        Size.Large,
        Size.XLarge,
        Size.XXLarge
      ]
    },
    size: {
      control: {
        type: 'select'
      },
      options: [
        InputSize.Small,
        InputSize.Regular,
        InputSize.Regular2,
        InputSize.Large
      ]
    }
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94%;
  height: 100vh;
  margin: 20px auto;
  p {
    margin-bottom: 20px;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 2px 4px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
  ul {
    list-style-type: initial;
    padding-left: 20px;
    margin-bottom: 16px;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotLink = styled(Link)`
  margin-left: 16px;
  cursor: pointer;
`;

const EventPreview = styled.div`
  border-style: dashed;
  border-width: 1px;
  border-color: #ccc;
  padding: 0.5em;
  color: #ccc;
  margin: 0.5em;
  width: 100%;
`;

const isRequired = 'Password field is required';
const isInvalidFormat =
  'Must include at least one uppercase letter, one lowercase letter, one number, and one symbol';
const danger = 'Your password is too short';
const warning = 'Your password could be longer';
const success = 'Your password is long enough';
const minLength = 6;

const RegularTemplate: Story<PasswordFieldProps> = (args) => {
  const [invalidKey, setInvalidKey] = useState('isRequired');
  const onChange = (value: string, metadata: { invalidKey?: string }) => {
    setInvalidKey(`current error key: ${metadata.invalidKey}`);
  };
  return (
    <Wrapper>
      <div>
        <p>
          Password Field provides a bar for custom password strength. It exports
          both a stateful default component, and a stateless component&nbsp;
          <span>PasswordFieldStateless</span> .
        </p>
        <p>
          For calculating and displaying the errors, you can use the default{' '}
          <span>calculateScore</span> and <span>validationFunc</span> or provide
          your own. <span>validationFunc</span> should return one of the keys in
          <span>i18nMessage</span> on error, so that this component can show
          invalidMessage from <span>i18nMessage[key]</span>.
        </p>
        <ul>
          <li>Password length must be equal or greater than {minLength}</li>
          <li>
            Password must include at least one uppercase letter, one lowercase
            letter, one number, and one symbol
          </li>
        </ul>
      </div>
      <PasswordField
        {...args}
        onChangeValue={onChange}
        iconBefore={<Icon icon={faLock} />}
        calculateScore={calculateScore}
        validationFunc={validationFunc}
        i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
      />
      <EventPreview>{invalidKey}</EventPreview>
    </Wrapper>
  );
};

export const Regular = RegularTemplate.bind({});
Regular.args = {
  label: 'Regular2 size with password strength bar',
  width: Size.Large,
  size: InputSize.Regular2
};

const Template: Story<PasswordFieldProps> = (args) => (
  <Wrapper>
    <PasswordField
      {...args}
      calculateScore={calculateScore}
      validationFunc={validationFunc}
      i18nMessages={{ isRequired, isInvalidFormat, danger, warning, success }}
    />
  </Wrapper>
);

export const WithLink = Template.bind({});
WithLink.args = {
  width: Size.XLarge,
  size: InputSize.Large,
  label: (
    <LabelContainer>
      <div>With link</div>
      <ForgotLink>Forgot your password?</ForgotLink>
    </LabelContainer>
  ) as any,
  iconBefore: <Icon icon={faLock} />
};

export const WithoutStrengthBar = Template.bind({});
WithoutStrengthBar.args = {
  label: 'Small size without password strength bar',
  shouldHideScore: true,
  size: InputSize.Small,
  width: Size.Large,
  iconBefore: <Icon icon={faLock} />
};

export const RegularFittedForContainer = Template.bind({});
RegularFittedForContainer.args = {
  label: 'Regular size and should fit container',
  shouldFitContainer: true
};
