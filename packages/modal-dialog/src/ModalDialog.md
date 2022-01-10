This component displays content in a layer that sits above the rest of the page content. Users won't
be able to interact with the page until the dialog is closed.

```tsx
import {
  AnimatedContent,
  HeaderAppearance,
  ModalBody,
  modalClassicTheme,
  ModalClosePrimitive,
  ModalContent,
  modalDarkTheme,
  ModalDialog,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  modalThemeNamespace,
  ModalTitle,
  ModalTrigger
} from './index';
import {
  Button,
  ButtonAppearance,
  buttonThemeNamespace,
  buttonDarkTheme,
  buttonClassicTheme
} from '@tablecheck/tablekit-button';
import styled from '@emotion/styled';
import { ItemGroup, ItemGroupOrientation } from '@tablecheck/tablekit-item';
import { ModalContentMock } from './docs';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  Size,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useState } from 'react';
import faker from 'faker';
import {
  Toggle,
  toggleDarkTheme,
  toggleClassicTheme,
  toggleThemeNamespace
} from '@tablecheck/tablekit-toggle';

const darkTheme = {
  colors: DARK_COLORS,
  [buttonThemeNamespace]: buttonDarkTheme,
  [modalThemeNamespace]: modalDarkTheme
};

const classicTheme = {
  colors: CLASSIC_COLORS,
  [buttonThemeNamespace]: buttonClassicTheme,
  [modalThemeNamespace]: modalClassicTheme
};

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
`;

const appearances = [undefined, ...Object.values(HeaderAppearance)];
const sizes = [undefined, Size.Small, Size.Regular, Size.Large, Size.XLarge];

const ModalBtnTrigger = (props) => <ModalTrigger as={Button} {...props} />;
const ModalCloseBtn = (props) => <ModalClosePrimitive as={Button} {...props} />;

const AppearancePresentation = ({ isControlled }) => {
  const [openedModals, toggleModal] = useState([]);
  return (
    <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
      {isControlled
        ? appearances.map((appearance) => (
            <Button
              key={appearance || 'default'}
              appearance={appearance}
              onClick={() => {
                toggleModal((opened) => {
                  const newOpened = opened.slice();
                  newOpened.push(appearance);
                  return newOpened;
                });
              }}
            >
              {`Appearance: ${appearance || 'default'}`}
            </Button>
          ))
        : null}
      {appearances.map((appearance, index) => {
        const sibling =
          index + 1 < appearances.length
            ? appearances[index + 1]
            : appearances[0];
        const isSiblingOpen = openedModals.indexOf(sibling) === -1;
        return (
          <ModalDialog
            shouldPreventCloseOutside={isControlled}
            key={`${appearance || 'default'}_${
              isControlled ? 'controlled' : 'uncontrolled'
            }`}
            hasCloseIcon
            headerAppearance={appearance}
            headerContent={`Modal: ${appearance || 'default'}`}
            isOpen={
              isControlled ? openedModals.indexOf(appearance) !== -1 : undefined
            }
            onOpenChange={
              isControlled
                ? (modalState) => {
                    toggleModal((opened) => {
                      if (!modalState) {
                        return opened.filter((modal) => modal !== appearance);
                      }
                      const newOpened = opened.slice();
                      newOpened.push(appearance);
                      return newOpened;
                    });
                  }
                : undefined
            }
            trigger={
              !isControlled ? (
                <ModalBtnTrigger appearance={appearance}>
                  {`Appearance: ${appearance || 'default'}`}
                </ModalBtnTrigger>
              ) : undefined
            }
            footerContent={
              <ItemGroup
                orientation={ItemGroupOrientation.Horizontal}
                hasIndent
              >
                <ModalCloseBtn appearance={ButtonAppearance.Outline}>
                  Close Modal
                </ModalCloseBtn>
                {isControlled && isSiblingOpen ? (
                  <Button
                    appearance={sibling}
                    onClick={() => {
                      toggleModal((opened) => {
                        const newOpened = opened.slice();
                        newOpened.push(sibling);
                        return newOpened;
                      });
                    }}
                  >
                    {`Open other: ${sibling || 'default'}`}
                  </Button>
                ) : null}
              </ItemGroup>
            }
          >
            {faker.lorem.paragraph()}
          </ModalDialog>
        );
      })}
    </ItemGroup>
  );
};

const SizePresentation = () => {
  const [hasHeader, setHasHeader] = useState(true);
  const [hasFooter, setHasFooter] = useState(true);
  const [hasCloseIcon, setHasHasCloseIcon] = useState(true);
  const [hasKeylines, setHasKeylines] = useState(true);
  const [preventClose, setPreventClose] = useState(false);

  return (
    <>
      <ItemGroup hasIndent orientation={ItemGroupOrientation.Horizontal}>
        <Toggle
          label="Has title"
          isChecked={hasHeader}
          onChange={() => setHasHeader(!hasHeader)}
        />
        <Toggle
          label="Has footer"
          isChecked={hasFooter}
          onChange={() => setHasFooter(!hasFooter)}
        />
        <Toggle
          label="Has close icon"
          isChecked={hasCloseIcon}
          onChange={() => setHasHasCloseIcon(!hasCloseIcon)}
        />
        <Toggle
          label="Has keylines"
          isChecked={hasKeylines}
          onChange={() => setHasKeylines(!hasKeylines)}
        />
      </ItemGroup>
      <ItemGroup hasIndent orientation={ItemGroupOrientation.Horizontal}>
        <Toggle
          label="Prevent close on click outside"
          isChecked={preventClose}
          onChange={() => setPreventClose(!preventClose)}
        />
      </ItemGroup>
      <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
        {sizes.map((size) => (
          <ModalDialog
            key={size || 'auto'}
            hasCloseIcon={hasCloseIcon}
            hasKeylines={hasKeylines}
            shouldPreventCloseOutside={preventClose}
            headerContent={hasHeader ? `Modal: ${size || 'auto'}` : undefined}
            trigger={
              <ModalBtnTrigger appearance={ButtonAppearance.Outline}>{`Size: ${
                size || 'auto'
              }`}</ModalBtnTrigger>
            }
            width={size}
            footerContent={
              hasFooter ? (
                <ItemGroup
                  orientation={ItemGroupOrientation.Horizontal}
                  hasIndent
                >
                  <ModalCloseBtn appearance={ButtonAppearance.Outline}>
                    Close Modal
                  </ModalCloseBtn>
                  <Button appearance={ButtonAppearance.Subtle}>
                    {`Action: ${size || 'auto'}`}
                  </Button>
                </ItemGroup>
              ) : undefined
            }
          >
            {faker.lorem
              .paragraphs(12, '-----')
              .split('-----')
              .map((p) => (
                <>
                  <h3>{faker.lorem.sentence()}</h3>
                  <p>{p}</p>
                </>
              ))}
          </ModalDialog>
        ))}
      </ItemGroup>
    </>
  );
};

const StyledOverlay = styled(ModalOverlay)`
  background: rgba(123, 123, 123, 0.3);
`;
const CustomElement = styled.div`
  text-align: center;
  color: red;
  background: pink;
  padding: 20px 0;
`;

const CustomizedPresentation = () => {
  const [isOpen, setOpened] = useState(false);
  const [hasHeader, setHasHeader] = useState(false);
  const [hasTitle, setHasTitle] = useState(false);
  const [hasCloseIcon, setHasCloseIcon] = useState(false);
  const [hasBodyIndents, setHasBodyIndents] = useState(false);

  return (
    <>
      <ItemGroup hasIndent orientation={ItemGroupOrientation.Horizontal}>
        <Toggle
          label="Has gutters on Body"
          isChecked={hasBodyIndents}
          onChange={() => setHasBodyIndents(!hasBodyIndents)}
        />
        <Toggle
          label="Use header wrapper"
          isChecked={hasHeader}
          onChange={() => setHasHeader(!hasHeader)}
        />
        {hasHeader ? (
          <Toggle
            label="Use header title"
            isChecked={hasTitle}
            onChange={() => setHasTitle(!hasTitle)}
          />
        ) : null}
        {hasHeader ? (
          <Toggle
            label="Use close icon"
            isChecked={hasCloseIcon}
            onChange={() => setHasCloseIcon(!hasCloseIcon)}
          />
        ) : null}
      </ItemGroup>
      <ModalRoot onOpenChange={(st) => setOpened(st)} open={isOpen}>
        <ModalTrigger as={Button}>Open Customized Modal</ModalTrigger>
        <AnimatedContent
          isOpen={isOpen}
          width="100%"
          height="50vh"
          shouldPreventOverflow
        >
          {hasHeader ? (
            <ModalHeader hasCloseIcon={hasCloseIcon}>
              {hasTitle ? (
                <ModalTitle hasCloseIcon={hasCloseIcon}>
                  Simple header title
                </ModalTitle>
              ) : (
                'Simple header container'
              )}
            </ModalHeader>
          ) : null}
          <CustomElement>{faker.lorem.sentence(4)}</CustomElement>
          <ModalBody hasGutters={hasBodyIndents}>
            {faker.lorem.paragraphs(12)}
          </ModalBody>
          <CustomElement>{faker.lorem.sentence(8)}</CustomElement>
        </AnimatedContent>
      </ModalRoot>
    </>
  );
};

const PresentationModule = () => {
  const [useDarkTheme, toogleTheme] = useState(false);
  const theme = useDarkTheme ? darkTheme : classicTheme;
  return (
    <EmotionThemeProvider theme={theme}>
      <ExamplesWrapper>
        <ItemGroup>
          <Toggle
            label="Use dark theme"
            isChecked={useDarkTheme}
            onChange={() => toogleTheme(!useDarkTheme)}
          />
          <ItemGroup
            headingText="Uncontrolled modals"
            orientation={ItemGroupOrientation.Vertical}
            hasIndent
          >
            <AppearancePresentation />
          </ItemGroup>
          <ItemGroup
            headingText="Basic modal customization"
            orientation={ItemGroupOrientation.Vertical}
            hasIndent
          >
            <SizePresentation />
          </ItemGroup>
          <ItemGroup
            headingText="Controlled modals (click outside is disabled)"
            orientation={ItemGroupOrientation.Vertical}
            hasIndent
          >
            <AppearancePresentation isControlled />
          </ItemGroup>
          <ItemGroup
            headingText="Customized modal"
            orientation={ItemGroupOrientation.Vertical}
            hasIndent
          >
            <CustomizedPresentation />
          </ItemGroup>
        </ItemGroup>
      </ExamplesWrapper>
    </EmotionThemeProvider>
  );
};

<ThemeProvider useLocalStyles theme={classicTheme}>
  <PresentationModule />
</ThemeProvider>;
```
