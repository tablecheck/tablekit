Avatars represent users that are using the application.

- If the image is passed, then the image will be shown
- If the initials are passed, then the initials will be shown
- If no image or initials are passed, then the user icon will be shown

### Examples

```tsx
import { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Header, Text } from '@tablecheck/tablekit-typography';
import {
  Size,
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ItemGroup } from '@tablecheck/tablekit-item';
import {
  avatarThemeNamespace,
  avatarDarkTheme,
  avatarClassicTheme
} from './index';

const darkTheme = {
  [avatarThemeNamespace]: avatarDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [avatarThemeNamespace]: avatarClassicTheme
};

const customLightTheme = {
  [avatarThemeNamespace]: {
    backgroundColor: CLASSIC_COLORS.success,
    textColor: 'white'
  }
};

const customDarkTheme = {
  [avatarThemeNamespace]: {
    backgroundColor: DARK_COLORS.warning,
    textColor: 'white'
  }
};

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const AvatarList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const AvatarWrapper = styled.li`
  margin-right: 10px;
  display: inline-block;

  @media (max-width: 1080px) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const john = 'https://i.pravatar.cc/200?img=14';
const airi = 'https://i.pravatar.cc/200?img=31';

const avatarSizes = [
  Size.XSmall,
  Size.Small,
  Size.Regular,
  Size.Large,
  Size.XLarge,
  Size.XXLarge
];

const PresentationContainer = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  return (
    <EmotionThemeProvider theme={isDarkTheme ? darkTheme : classicTheme}>
      <ExamplesWrapper>
        <ItemGroup orientation="horizontal" hasIndent>
          <Toggle
            isChecked={isDarkTheme}
            onChange={() => toggleTheme(!isDarkTheme)}
          />
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Use Dark Theme
          </p>
        </ItemGroup>
        <h3>Predefined Themes</h3>
        <AvatarList>
          {avatarSizes.map((size) => (
            <Fragment key={size}>
              <AvatarWrapper>
                <Avatar size={size} name="John Smith" initials="JS" />
              </AvatarWrapper>
              {size !== 'xxlarge' && (
                <AvatarWrapper>
                  <Avatar
                    size={size}
                    name="John Smith"
                    initials="JS"
                    imageUrl={john}
                  />
                </AvatarWrapper>
              )}
            </Fragment>
          ))}
        </AvatarList>
        <h3>Custom Themes</h3>
        <EmotionThemeProvider
          theme={isDarkTheme ? customDarkTheme : customLightTheme}
        >
          <AvatarList>
            {avatarSizes.map((size) => (
              <Fragment key={size}>
                <AvatarWrapper>
                  <Avatar size={size} name="愛梨" initials="愛梨" />
                </AvatarWrapper>
                {size !== 'xxlarge' && (
                  <AvatarWrapper>
                    <Avatar
                      size={size}
                      name="愛梨"
                      initials="愛梨"
                      imageUrl={airi}
                    />
                  </AvatarWrapper>
                )}
              </Fragment>
            ))}
          </AvatarList>
          <h3>How do display the user icon with no initials or image</h3>
          <AvatarList>
            {avatarSizes.map((size) => (
              <Fragment key={size}>
                <AvatarWrapper>
                  <Avatar size={size} />
                </AvatarWrapper>
                {size !== 'xxlarge' && (
                  <AvatarWrapper>
                    <Avatar size={size} imageUrl={airi} />
                  </AvatarWrapper>
                )}
              </Fragment>
            ))}
          </AvatarList>
        </EmotionThemeProvider>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
