import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ZIndex
} from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { v4 as uuid } from 'uuid';

import { ItemGroup, ItemGroupOrientation } from '../../item';
import { Select } from '../../select';

import {
  Alert,
  AlertAppearance,
  AlertProps,
  AlertPosition,
  alertThemeNamespace,
  alertDarkTheme
} from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [
        AlertAppearance.Primary,
        AlertAppearance.Success,
        AlertAppearance.Warning,
        AlertAppearance.Danger
      ]
    }
  },
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const darkTheme = {
  colors: DARK_COLORS,
  [alertThemeNamespace]: alertDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const positionOptions = [
  {
    label: 'Top left',
    value: AlertPosition.TopLeft
  },
  {
    label: 'Top center',
    value: AlertPosition.Top
  },
  {
    label: 'Top right',
    value: AlertPosition.TopRight
  },
  {
    label: 'Bottom left',
    value: AlertPosition.BottomLeft
  },
  {
    label: 'Bottom center',
    value: AlertPosition.Bottom
  },
  {
    label: 'Bottom right',
    value: AlertPosition.BottomRight
  }
];

const Template: Story<AlertProps> = ({ ...args }) => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Button
        appearance={ButtonAppearance.Solid}
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Show Alert
      </Button>
      <Alert
        {...args}
        onClose={() => setAlertVisible(false)}
        isShow={isAlertVisible}
      >
        {args.children || <>Message for Alert</>}
      </Alert>
    </EmotionThemeProvider>
  );
};

export const Success = Template.bind({});
Success.args = {
  appearance: AlertAppearance.Success,
  isDismissible: true,
  shouldUsePortal: true
};

export const Primary = Template.bind({});
Primary.args = {
  appearance: AlertAppearance.Primary,
  isDismissible: true,
  shouldUsePortal: true
};

export const Warning = Template.bind({});
Warning.args = {
  appearance: AlertAppearance.Warning,
  isDismissible: true,
  shouldUsePortal: true
};

export const Danger = Template.bind({});
Danger.args = {
  appearance: AlertAppearance.Danger,
  isDismissible: true,
  shouldUsePortal: true
};

const ActionsTemplate: Story<AlertProps> = ({ ...args }) => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <Button
        appearance={ButtonAppearance.Solid}
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Show Alert
      </Button>
      <Alert
        {...args}
        onClose={() => setAlertVisible(false)}
        isShow={isAlertVisible}
        actions={[
          {
            text: 'More info...'
          } as any,
          {
            text: 'Close',
            onClick: () => {
              setAlertVisible(false);
            }
          }
        ]}
      >
        <>Message for Alert with CTA</>
      </Alert>
    </EmotionThemeProvider>
  );
};

export const WithCTA = ActionsTemplate.bind({});
WithCTA.args = {
  isDismissible: true,
  shouldUsePortal: true
};

export const ClosingClickOutside = Template.bind({});
ClosingClickOutside.args = {
  isDismissible: true,
  shouldUsePortal: true,
  shouldCloseOnClickOutside: true
};

const PositionsTemplate: Story<AlertProps> = ({ ...args }) => {
  const [isShow, setIsShow] = useState(false);
  const [alerts, setAlerts] = useState<any>([]);
  const [position, setPosition] = useState(positionOptions[0].value);
  const getAlertData = (index: number) => {
    const id = uuid();
    return {
      text: `Message ${index + 1}`,
      appearance: 'success',
      onClose: () => {
        setAlerts((curAlerts: any) => {
          const newArray = [...curAlerts];
          newArray.splice(-(index + 1), 1);
          return newArray;
        });
      },
      key: id
    };
  };
  const isDark = useDarkMode();
  return (
    <EmotionThemeProvider theme={isDark ? darkTheme : classicTheme}>
      <ItemGroup hasIndent>
        <ItemGroup hasIndent title="Initial position for Alert">
          <Select
            options={positionOptions}
            value={positionOptions.find(({ value }) => value === position)}
            menuPortalTarget={document.body}
            onChange={({ value }: any) => setPosition(value)}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: ZIndex.Modal })
            }}
          />
          <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
            <Button
              appearance={ButtonAppearance.Solid}
              onClick={() => {
                setIsShow(!isShow);
                if (alerts.length === 0) {
                  setAlerts([getAlertData(alerts.length), ...alerts]);
                } else {
                  setAlerts([]);
                }
              }}
            >
              {isShow ? 'Reset All' : 'Show Alert!'}
            </Button>
            <Button
              appearance={ButtonAppearance.Solid}
              isDisabled={!isShow}
              onClick={() => {
                setAlerts([getAlertData(alerts.length), ...alerts]);
              }}
            >
              Generate new Alert
            </Button>
          </ItemGroup>
        </ItemGroup>
        {alerts.map(({ key, text }: any) => (
          <Alert
            {...args}
            key={key}
            isShow={isShow}
            position={position}
            isDismissible
            shouldUsePortal
          >
            {text}
          </Alert>
        ))}
      </ItemGroup>
    </EmotionThemeProvider>
  );
};

export const DifferentPositions = PositionsTemplate.bind({});

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  isDismissible: true,
  shouldUsePortal: true,
  children: (
    <>
      <h3>Content heading</h3>
      <ul>
        <li>First item</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec risus
          a libero dictum aliquam maximus tincidunt nisi. Aliquam metus tellus
        </li>
      </ul>
    </>
  )
};
