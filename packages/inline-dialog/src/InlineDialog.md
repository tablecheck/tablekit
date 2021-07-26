```tsx
import { useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@tablecheck/tablekit-checkbox';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons/faQuestionCircle';
import { Icon } from '@tablecheck/tablekit-icon';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider, css } from '@emotion/react';
import {
  Item,
  ItemGroup,
  itemDarkTheme,
  itemClassicTheme,
  itemThemeNamespace
} from '@tablecheck/tablekit-item';
import {
  inlineDialogDarkTheme,
  inlineDialogThemeNamespace,
  inlineDialogClassicTheme
} from './index';

const options = [
  { key: 'EN', label: 'English', subtitle: 'English' },
  { key: 'JA', label: '日本語', subtitle: 'Japanese' },
  { key: 'KO', label: '한국어', subtitle: 'Korean' },
  { key: 'CN', label: '简体中文', subtitle: 'Traditional Chinese' },
  { key: 'TW', label: '繁体中文', subtitle: 'Simplified Chinese' },
  { key: 'DE', label: 'Deutsch', subtitle: 'German' },
  { key: 'ES', label: 'Español', subtitle: 'Spanish' },
  { key: 'FR', label: 'Français', subtitle: 'French' },
  { key: 'IT', label: 'Italiano', subtitle: 'Italian' },
  { key: 'PT', label: 'Português', subtitle: 'Portuguese' },
  { key: 'RU', label: 'Русский', subtitle: 'Russian' },
  { key: 'ID', label: 'Bahasa Indonesia', subtitle: 'Indonesian' },
  { key: 'MS', label: 'Bahasa Melayu', subtitle: 'Malaysian' },
  { key: 'TL', label: 'Tagalog', subtitle: 'Tagalog' },
  { key: 'TH', label: 'ไทย', subtitle: 'Thai' },
  { key: 'LO', label: 'ພາສາລາວ', subtitle: 'Lao' },
  { key: 'VI', label: 'Tiếng việt', subtitle: 'Vietnamese' },
  { key: 'AR', label: 'عربى', subtitle: 'Arabic' }
];

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const StyledGroup = styled.div`
  display: flex;
  width: 450px;
  flex-wrap: wrap;
`;

const StyledMaxHeightGroup = styled(StyledGroup)`
  max-height: 300px;
  overflow-y: auto;
`;

const CustomText = styled.div`
  padding: 10px;
  max-width: 300px;
`;

const CustomWidthDialog = styled(InlineDialog)`
  width: 75%;
`;

const fullWidthStyle = css`
  width: 100%;
`;

const darkTheme = {
  [inlineDialogThemeNamespace]: inlineDialogDarkTheme,
  [itemThemeNamespace]: itemDarkTheme,
  colors: DARK_COLORS
};

const classicTheme = {
  [inlineDialogThemeNamespace]: inlineDialogClassicTheme,
  [itemThemeNamespace]: itemClassicTheme,
  colors: CLASSIC_COLORS
};

const PresentationModule = () => {
  const [option, setOption] = useState(options[0]);
  const [useDarkTheme, toggleTheme] = useState(false);
  const [isOpenControllableDialog, setIsOpenConrollableDialog] =
    useState(false);
  const [
    isOpenControllableDialogWithClosingAfterSelect,
    setIsOpenControllableDialogWithClosingAfterSelect
  ] = useState(false);

  return (
    <div>
      <Checkbox onChange={() => toggleTheme(!useDarkTheme)}>
        Use dark theme
      </Checkbox>

      <EmotionThemeProvider theme={useDarkTheme ? darkTheme : classicTheme}>
        <ExamplesWrapper>
          <InlineDialog
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                ref={ref}
                onClick={onClick}
                isSelected={isOpen}
                width="fit-content"
              >
                Open Dialog
              </Item>
            )}
          >
            <StyledGroup>
              {options.map((item) => (
                <Item
                  key={item.key}
                  width="50%"
                  isSelected={item.key === option.key}
                  onClick={() => setOption(item)}
                >{`${item.label} (${item.subtitle})`}</Item>
              ))}
            </StyledGroup>
          </InlineDialog>
          <InlineDialog
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                ref={ref}
                onClick={onClick}
                isSelected={isOpen}
                width="fit-content"
              >
                Should close menu after selected option
              </Item>
            )}
          >
            {({ onClose }) => (
              <StyledGroup>
                {options.map((item) => (
                  <Item
                    key={item.key}
                    width="50%"
                    isSelected={item.key === option.key}
                    onClick={() => {
                      setOption(item);
                      onClose();
                    }}
                  >{`${item.label} (${item.subtitle})`}</Item>
                ))}
              </StyledGroup>
            )}
          </InlineDialog>
          <InlineDialog
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                ref={ref}
                onClick={onClick}
                isSelected={isOpen}
                width="fit-content"
              >
                Dialog with max-height
              </Item>
            )}
          >
            <StyledMaxHeightGroup useDarkTheme={useDarkTheme}>
              {options.map((item) => (
                <Item
                  key={item.key}
                  width="50%"
                  isSelected={item.key === option.key}
                  onClick={() => {
                    setOption(item);
                  }}
                >{`${item.label} (${item.subtitle})`}</Item>
              ))}
            </StyledMaxHeightGroup>
          </InlineDialog>
          <InlineDialog
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                ref={ref}
                onClick={onClick}
                isSelected={isOpen}
                borderPosition="top"
                shouldCenterAlignment
                width="fit-content"
              >
                Custom text
              </Item>
            )}
          >
            <CustomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              posuere mauris enim, id tincidunt diam ultrices a. Integer vitae
              dui ut elit mattis feugiat nec nec magna. Duis ornare ex a quam
              sollicitudin, eu tincidunt augue auctor. Vestibulum sed hendrerit
              justo. Duis hendrerit libero ac orci luctus sodales.
            </CustomText>
          </InlineDialog>
          <CustomWidthDialog
            popperProps={{
              strategy: 'absolute',
              placement: 'bottom-start'
            }}
            containerCss={fullWidthStyle}
            renderTrigger={({ onClick, isOpen, ref }) => (
              <Item
                ref={ref}
                onClick={onClick}
                isSelected={isOpen}
                borderPosition="top"
              >
                Treat the popper container as a styled component
              </Item>
            )}
          >
            <ItemGroup
              title="expands to render trigger's width"
              orientation="vertical"
            >
              <Item>foo</Item>
              <Item>bar</Item>
              <Item>fizz</Item>
              <Item>buzz</Item>
            </ItemGroup>
          </CustomWidthDialog>
          <ItemGroup
            title="Horizontal grouped trigger buttons"
            orientation="horizontal"
          >
            <InlineDialog
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  elemBefore={<Icon icon={faGlobe} />}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                ></Item>
              )}
            >
              <StyledGroup>
                {options.map((item) => (
                  <Item
                    key={item.key}
                    width="50%"
                    isSelected={item.key === option.key}
                    onClick={() => setOption(item)}
                  >{`${item.label} (${item.subtitle})`}</Item>
                ))}
              </StyledGroup>
            </InlineDialog>
            <InlineDialog
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  elemBefore={<Icon icon={faQuestionCircle} />}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                ></Item>
              )}
            >
              <StyledGroup>
                {options.map((item) => (
                  <Item
                    key={item.key}
                    width="50%"
                    isSelected={item.key === option.key}
                    onClick={() => setOption(item)}
                  >{`${item.label} (${item.subtitle})`}</Item>
                ))}
              </StyledGroup>
            </InlineDialog>
          </ItemGroup>
          <ItemGroup title="With different positions" orientation="horizontal">
            <InlineDialog
              popperProps={{
                placement: 'left'
              }}
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                >
                  Left
                </Item>
              )}
            >
              <Item>Left dialog</Item>
            </InlineDialog>
            <InlineDialog
              popperProps={{
                placement: 'top'
              }}
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                >
                  Top
                </Item>
              )}
            >
              <Item>Top dialog</Item>
            </InlineDialog>
            <InlineDialog
              popperProps={{
                placement: 'top-start'
              }}
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                >
                  Top-start
                </Item>
              )}
            >
              <Item>Top-start dialog</Item>
            </InlineDialog>
            <InlineDialog
              popperProps={{
                placement: 'right'
              }}
              renderTrigger={({ onClick, isOpen, ref }) => (
                <Item
                  ref={ref}
                  onClick={onClick}
                  isSelected={isOpen}
                  borderPosition="top"
                  shouldCenterAlignment
                  width="fit-content"
                >
                  Right
                </Item>
              )}
            >
              <Item>Right dialog</Item>
            </InlineDialog>
          </ItemGroup>
          <ItemGroup
            title="Controllable inline dialog"
            orientation="horizontal"
            hasIndent
          >
            <InlineDialog
              isControllable
              isOpen={isOpenControllableDialog}
              onClose={() => setIsOpenConrollableDialog(false)}
              renderTrigger={({ ref }) => (
                <Item
                  ref={ref}
                  onClick={() =>
                    setIsOpenConrollableDialog(!isOpenControllableDialog)
                  }
                  isSelected={isOpenControllableDialog}
                  shouldCenterAlignment
                  width="fit-content"
                >
                  Open dialog
                </Item>
              )}
            >
              <Item>Content of inline dialog</Item>
            </InlineDialog>
            <InlineDialog
              isControllable
              isOpen={isOpenControllableDialogWithClosingAfterSelect}
              onClose={() =>
                setIsOpenControllableDialogWithClosingAfterSelect(false)
              }
              renderTrigger={({ ref }) => (
                <Item
                  ref={ref}
                  onClick={() =>
                    setIsOpenControllableDialogWithClosingAfterSelect(
                      !isOpenControllableDialogWithClosingAfterSelect
                    )
                  }
                  isSelected={isOpenControllableDialogWithClosingAfterSelect}
                  width="fit-content"
                >
                  Should close menu after selected option
                </Item>
              )}
            >
              <StyledGroup>
                {options.map((item) => (
                  <Item
                    key={item.key}
                    width="50%"
                    isSelected={item.key === option.key}
                    onClick={() => {
                      setOption(item);
                      setIsOpenControllableDialogWithClosingAfterSelect(false);
                    }}
                  >{`${item.label} (${item.subtitle})`}</Item>
                ))}
              </StyledGroup>
            </InlineDialog>
          </ItemGroup>
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </div>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationModule />
</ThemeProvider>;
```
