import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons/faCompressAlt';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons/faExpandAlt';
import { Story, Meta } from '@storybook/react';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { Button, Appearance } from '../../button';
import { Checkbox } from '../../checkbox';
import { ItemGroupOrientation, ItemGroup } from '../../item';

import {
  tooltipThemeNamespace,
  tooltipClassicTheme,
  tooltipDarkTheme
} from './themes';
import { TooltipProps } from './types';

import { Tooltip } from './index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.p`
  margin-bottom: 20px;
  text-align: start;
  width: 100%;
  padding: 0 10px;
`;

const DescriptionOptions = styled(Description)`
  margin-bottom: 30px;
`;

const IconWrapper = styled.div<{ isDarkTheme: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  margin-right: 10px;
  border-radius: 20px;
  ${({ isDarkTheme }) => isDarkTheme && 'color: white;'};
`;

const icons = [
  { icon: faCompressAlt, label: 'faCompressAlt' },
  { icon: faChevronDown, label: 'faChevronDown' },
  { icon: faExpandAlt, label: 'faExpandAlt' }
];

const darkTheme = {
  [tooltipThemeNamespace]: tooltipDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [tooltipThemeNamespace]: tooltipClassicTheme,
  colors: CLASSIC_COLORS
};

const BasicTemplate: Story<TooltipProps> = (args) => {
  const isDark = useDarkMode();
  return (
    <Wrapper>
      <Description>
        You can wrap Tooltip around any other React component to display the
        given content when the user hovers over the wrapped component.
      </Description>
      <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
        <ItemGroup hasIndent>
          <Wrapper>
            <Tooltip {...args} popperProps={{ placement: 'bottom' }}>
              {(setTargetRef) => (
                <Button ref={setTargetRef}>Hover Over Me</Button>
              )}
            </Tooltip>
            <br />
            <ItemGroup hasIndent orientation={ItemGroupOrientation.Horizontal}>
              {icons.map(({ icon, label }) => (
                <Tooltip
                  key={label}
                  content={label}
                  popperProps={{ placement: 'top' }}
                >
                  {(setTargetRef) => (
                    <IconWrapper ref={setTargetRef} isDarkTheme={isDark}>
                      <Icon icon={icon} />
                    </IconWrapper>
                  )}
                </Tooltip>
              ))}
            </ItemGroup>
          </Wrapper>
        </ItemGroup>
      </EmotionThemeProvider>
    </Wrapper>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  shouldHideOnMouseDown: true,
  content: 'Some content'
};

const DetailTemplate: Story<TooltipProps> = (args) => {
  const [position, setPosition] = useState(0);
  const VALID_POSITIONS: any = ['top', 'right', 'bottom', 'left'];

  const changePosition = () => {
    setPosition((position + 1) % VALID_POSITIONS.length);
  };
  return (
    <Wrapper>
      <Description>
        Tooltips have four positions available: &quot;top&quot;,
        &quot;right&quot;, &quot;bottom&quot;, and &quot;left&quot;. Each
        position center-aligns itself along the appropriate axis. Click the
        target below to see each position.
      </Description>
      <ThemeProvider useLocalStyles>
        <div style={{ display: 'flex' }}>
          <div onClick={changePosition}>
            <Tooltip
              {...args}
              content={VALID_POSITIONS[position]}
              popperProps={{
                placement: VALID_POSITIONS[position]
              }}
            >
              {(setTargetRef) => <Button ref={setTargetRef}>Target</Button>}
            </Tooltip>
          </div>
        </div>
      </ThemeProvider>
    </Wrapper>
  );
};

export const Details = DetailTemplate.bind({});

const OptionTemplate: Story<TooltipProps> = (args) => {
  const appearances = [Appearance.Solid, Appearance.Outline, Appearance.Subtle];
  return (
    <Wrapper>
      <DescriptionOptions>
        <p>
          Tooltips should only appear when the user has paused on the target
          element. They should remain visible if the user briefly moves the
          mouse off and back on to the target.
        </p>
        <p>
          Similarly tooltips should not immediately disappear, unless the user
          hovers over another element with a tooltip.
        </p>
        <p>
          When the user scrolls, their attention is no longer on the tooltip. We
          take this opportunity to immediately hide the tooltip.
        </p>
      </DescriptionOptions>
      <ThemeProvider useLocalStyles>
        <div style={{ display: 'flex' }}>
          {appearances.map((appearance: Appearance) => (
            <Tooltip
              {...args}
              key={appearance}
              content={appearance}
              popperProps={{ placement: 'top' }}
            >
              {(setTargetRef) => (
                <Button
                  ref={setTargetRef}
                  appearance={appearance}
                  style={{ marginRight: 30 }}
                >
                  {appearance}
                </Button>
              )}
            </Tooltip>
          ))}
        </div>
      </ThemeProvider>
    </Wrapper>
  );
};

export const Option = OptionTemplate.bind({});

const TruncateTemplate: Story<TooltipProps> = (args) => {
  const [isTruncate, setIsTruncate] = useState(false);
  const trancateText = () => setIsTruncate(!isTruncate);
  const content =
    'The red panda (Ailurus fulgens), also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China.';
  const srcSmiling =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Red_Panda_in_a_Gingko_tree.jpg/220px-Red_Panda_in_a_Gingko_tree.jpg ';
  return (
    <ThemeProvider useLocalStyles>
      <Tooltip
        {...args}
        content={content}
        shouldTruncate={isTruncate}
        popperProps={{ placement: 'left' }}
      >
        {(setTargetRef) => (
          <img
            ref={setTargetRef}
            alt="Red panda - smiling"
            src={srcSmiling}
            width="220"
          />
        )}
      </Tooltip>
      <Checkbox onChange={trancateText}>Truncate text</Checkbox>
    </ThemeProvider>
  );
};

export const TruncateText = TruncateTemplate.bind({});
