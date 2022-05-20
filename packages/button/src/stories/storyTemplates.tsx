import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import { COLORS, CLASSIC_COLORS } from '@tablecheck/tablekit-theme';
import { useState } from 'react';

import { Checkbox } from '../../../checkbox';
import { ItemGroup, ItemGroupOrientation } from '../../../item';
import { Tooltip } from '../../../tooltip';
import {
  Button,
  BaseButtonProps,
  ButtonAppearance,
  ComponentButton
} from '../index';

import { Description, Wrapper, Container, RotatorButton } from './storyStyles';

export const InfoTemplate: Story = () => (
  <Description>
    <p>
      Buttons are used as triggers for actions. They are used in forms,
      toolbars, dialog footers and as stand-alone action triggers.
    </p>
    <p>
      It is important to note that for interactivity styles (hover etc) to
      function correctly either onClick or href must be defined, usually this
      should not be an issue.
    </p>
    <p>
      <b>Important!</b> Please be careful when using
      <span>appearance=&apos;outline&apos;</span> or
      <span>appearance=&apos;primary-outline&apos;</span>, it should not be
      picked by default and it is use case should be carefully considered.
      Suggested use cases are as follows, even if under these categories usage
      should be discussed with at least 1 other person.
    </p>
    <ol type="1">
      <li>
        Actions that must be available but we do not want to encourage the user
        to click.
      </li>
      <li>
        On Marketing pages for aesthetic usage and used sparingly and by design
        only.
      </li>
    </ol>
  </Description>
);

export const Template: Story<BaseButtonProps> = ({ ...args }) => (
  <Wrapper>
    <Container>
      <Button onClick={() => {}} {...args}>
        {args.children}
      </Button>
    </Container>
  </Wrapper>
);

const Ref = styled.a``;

const LinkBtn = ComponentButton.withComponent(Ref);

export const HrefTemplate: Story = ({ ...args }) => (
  <Wrapper>
    <LinkBtn href="http://google.com" {...args}>
      {args.children}
    </LinkBtn>
  </Wrapper>
);

export const RefTemplate: Story<BaseButtonProps> = ({ ...args }) => (
  <Wrapper>
    <Tooltip
      shouldHideOnMouseDown
      content="Some content"
      popperProps={{ placement: 'bottom' }}
    >
      {(setTargetRef: React.ForwardedRef<HTMLButtonElement>) => (
        <Button onClick={() => {}} {...args} ref={setTargetRef}>
          {args.children}
        </Button>
      )}
    </Tooltip>
  </Wrapper>
);

const appearances = Object.values(ButtonAppearance).filter(
  (appearance) =>
    [ButtonAppearance.Vertical, ButtonAppearance.DisabledVertical].indexOf(
      appearance
    ) === -1
);

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

export const CustomTemplate: Story<BaseButtonProps> = (args) => (
  <Wrapper>
    <EmotionThemeProvider theme={customTheme}>
      <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
        {appearances.map((appearance) => (
          <Button {...args} key={appearance} appearance={appearance} />
        ))}
      </ItemGroup>
    </EmotionThemeProvider>
  </Wrapper>
);

const Btn = ComponentButton.withComponent(RotatorButton);

export const RotateTemplate: Story<BaseButtonProps> = ({ ...args }) => {
  const [state, set] = useState('closed');
  return (
    <Wrapper>
      <Checkbox
        onChange={() => set(state === 'open' ? 'closed' : 'open')}
        isChecked={state === 'open'}
      >
        Toggle chevron state
      </Checkbox>
      <Btn {...args} data-state={state}>
        {args.children}
      </Btn>
    </Wrapper>
  );
};
