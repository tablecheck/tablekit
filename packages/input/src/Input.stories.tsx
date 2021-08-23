import styled from '@emotion/styled';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { useDarkMode } from 'storybook-dark-mode';

import {
  Input,
  InputProps,
  inputDarkTheme,
  inputClassicTheme,
  inputThemeNamespace,
  Appearance,
  InputSize,
  InputShape
} from './index';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        InputSize.Small,
        InputSize.Regular,
        InputSize.Regular2,
        InputSize.Large
      ]
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
    shape: {
      control: { type: 'select' },
      options: [InputShape.Circular, InputShape.Rounded, InputShape.Sharp]
    },
    iconBefore: {
      control: false
    },
    iconAfter: {
      control: false
    },
    message: {
      control: false
    }
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const darkTheme = {
  colors: DARK_COLORS,
  [inputThemeNamespace]: inputDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [inputThemeNamespace]: inputClassicTheme
};

const Wrapper = styled.div`
  width: 94%;
  margin: 0 auto;
  padding-top: 50px;
  div {
    margin: 0 auto;
  }
  p {
    ${Typography.Body1};
    margin-bottom: 20px;
  }
`;

const FormWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;
`;

const FormInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  border: 1px solid blue;
`;

const Template: Story<InputProps> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Wrapper>
        <div>
          <Input {...args} />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  label: 'small',
  size: InputSize.Small
};

export const RegularSize = Template.bind({});
RegularSize.args = {
  label: 'Regular size',
  size: InputSize.Regular
};

export const Regular2Size = Template.bind({});
Regular2Size.args = {
  label: 'Regular2 size',
  size: InputSize.Regular2
};
Regular2Size.storyName = 'Regular2 Size';

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: 'Large size',
  size: InputSize.Large
};

export const ResponsiveSize = Template.bind({});
ResponsiveSize.args = {
  label: 'Responsive size ',
  size: {
    'min-width: 600px': InputSize.Regular,
    'min-width: 800px': InputSize.Large,
    default: InputSize.Small
  }
};

export const CircularShape = Template.bind({});
CircularShape.args = {
  label: 'Circular shape',
  shape: InputShape.Circular
};

export const RoundedShape = Template.bind({});
RoundedShape.args = {
  label: 'Rounded shape',
  shape: InputShape.Rounded
};

export const SharpShape = Template.bind({});
SharpShape.args = {
  label: 'Sharp shape',
  shape: InputShape.Sharp
};

export const HasPlaceholder = Template.bind({});
HasPlaceholder.args = {
  label: 'Has a placeholder',
  placeholder: 'placeholder'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required',
  isRequired: true
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'With value',
  value: 'Some Value'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With icon',
  iconBefore: <Icon icon={faEdit} />
};

export const SuccessAppearance = Template.bind({});
SuccessAppearance.args = {
  label: 'Success apperance',
  appearance: Appearance.Success
};

export const LoadingAppearance = Template.bind({});
LoadingAppearance.args = {
  label: 'Loading apperance',
  appearance: Appearance.Loading
};

export const WarningAppearance = Template.bind({});
WarningAppearance.args = {
  label: 'Warning apperance',
  appearance: Appearance.Warning
};

export const InvalidAppearance = Template.bind({});
InvalidAppearance.args = {
  label: 'Invalid without message',
  appearance: Appearance.Invalid,
  isMessageHidden: true
};

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = {
  label: 'Invalid with message',
  appearance: Appearance.Invalid,
  message: 'Some message to tell the user what is what when invalid!'
};

export const DisabledAppearance = Template.bind({});
DisabledAppearance.args = {
  label: 'Disabled apperance',
  appearance: Appearance.Disabled
};

export const SearchType = Template.bind({});
SearchType.args = {
  label: 'Search input',
  type: 'search'
};

export const EmailType = Template.bind({});
EmailType.args = {
  label: 'Email input',
  message: 'Checking Autofill style browser extensions positioning',
  type: 'email'
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  label: 'Password input',
  message: 'Checking Autofill style browser extensions positioning',
  type: 'password'
};

export const XSmallWidth = Template.bind({});
XSmallWidth.args = {
  label: 'XSmall width',
  width: Size.XSmall
};
XSmallWidth.storyName = 'XSmall Width';

export const SmallWidth = Template.bind({});
SmallWidth.args = {
  label: 'Small width',
  width: Size.Small
};

export const RegularWidth = Template.bind({});
RegularWidth.args = {
  label: 'Regular width',
  width: Size.Regular
};

export const Regular2Width = Template.bind({});
Regular2Width.args = {
  label: 'Regular2 width',
  width: Size.Regular2
};
Regular2Width.storyName = 'Regular2 Width';

export const LargeWidth = Template.bind({});
LargeWidth.args = {
  label: 'Large width',
  width: Size.Large
};

export const XLargeWidth = Template.bind({});
XLargeWidth.args = {
  label: 'XLarge width',
  width: Size.XLarge
};
XLargeWidth.storyName = 'XLarge Width';

export const XXLargeWidth = Template.bind({});
XXLargeWidth.args = {
  label: 'XXLarge width',
  width: Size.XXLarge
};
XXLargeWidth.storyName = 'XXLarge Width';

export const FittedForContainer = Template.bind({});
FittedForContainer.args = {
  label: 'Should be fited to container',
  shouldFitContainer: true
};

const FormTemplate: Story<InputProps> = ({ ...args }) => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <FormWrapper>
        <div>
          <p>
            By default, the Input field has no external padding, the div that
            wraps the input is the exact size of the content. When using in a
            form, often we will want to space inputs apart from each other, here
            is the minimal example of how to do this.
          </p>
          <p>
            A blue border has been added around the inputs to assist with
            clarity.
          </p>
        </div>
        <div>
          <FormInput {...args} isMessageHidden />
          <FormInput {...args} message="Some helper text" />
          <FormInput {...args} isMessageHidden />
        </div>
      </FormWrapper>
    </ThemeProvider>
  );
};

export const UsingInForms = FormTemplate.bind({});
