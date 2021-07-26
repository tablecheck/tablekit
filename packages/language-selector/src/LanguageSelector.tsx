import {
  Button,
  ButtonAppearance,
  ButtonColor,
  ButtonShape,
  ButtonSize
} from '@tablecheck/tablekit-button';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { ChildRenderProps as InlineDialogChildRenderProps } from '@tablecheck/tablekit-inline-dialog';
import { Panel, PanelPosition } from '@tablecheck/tablekit-panel';
import { Size } from '@tablecheck/tablekit-theme';
import { useState } from 'react';

import {
  ButtonWrapper,
  Container,
  InlineDialogWrapper,
  ItemSubtitle,
  LangItem,
  ScrollWrapper
} from './styled';
import { LanguageSelectorProps, View, Locale } from './types';

export const LanguageSelector = ({
  className,
  containerCss,
  currentLanguage = 'en',
  onChangeLanguage,
  locales,
  view = View.Desktop,
  itemWidth = '33.33%',
  itemHeight = 'initial',
  inlineDialogContainerCss,
  renderTrigger,
  shouldShowCloseIcon = false
}: LanguageSelectorProps): JSX.Element => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  if (view === View.Mobile) {
    return (
      <>
        {renderTrigger({
          onClick: () => {
            setPanelOpen(true);
          },
          isOpen: isPanelOpen,
          ref: null
        })}
        <Panel
          isOpen={isPanelOpen}
          position={PanelPosition.Bottom}
          togglePanel={() => {}}
        >
          {shouldShowCloseIcon && (
            <ButtonWrapper>
              <Button
                size={ButtonSize.Small}
                appearance={ButtonAppearance.Subtle}
                shape={ButtonShape.Circular}
                color={ButtonColor.Ghost}
                onClick={() => setPanelOpen(false)}
                iconBefore={() => <Icon icon={getIcon('close')} />}
                tabIndex={-1}
              />
            </ButtonWrapper>
          )}
          <ScrollWrapper>
            <Container css={containerCss}>
              {locales.map((item) => {
                const isSelected = item.code === currentLanguage;
                return (
                  <LangItem
                    key={item.code}
                    itemWidth={itemWidth}
                    itemHeight={itemHeight}
                    isSelected={isSelected}
                    aria-selected={isSelected}
                    data-value={item.code}
                    size={Size.Large}
                    onClick={() => {
                      onChangeLanguage(item.code);
                      setPanelOpen(false);
                    }}
                  >
                    {item.label}
                    {item.code !== currentLanguage && (
                      <ItemSubtitle>
                        {
                          locales.find(
                            (opt: Locale) => opt.code === currentLanguage
                          )?.translations[item.code]
                        }
                      </ItemSubtitle>
                    )}
                  </LangItem>
                );
              })}
            </Container>
          </ScrollWrapper>
        </Panel>
      </>
    );
  }

  return (
    <InlineDialogWrapper
      className={className}
      containerCss={inlineDialogContainerCss}
      renderTrigger={renderTrigger}
    >
      {({ onClose }: InlineDialogChildRenderProps) => (
        <Container css={containerCss}>
          {locales.map((item: Locale) => {
            const isSelected = item.code === currentLanguage;
            return (
              <LangItem
                key={item.code}
                itemWidth={itemWidth}
                itemHeight={itemHeight}
                isSelected={isSelected}
                aria-selected={isSelected}
                data-value={item.code}
                size={Size.Large}
                onClick={() => {
                  onChangeLanguage(item.code);
                  onClose();
                }}
              >
                {item.label}
                {item.code !== currentLanguage && (
                  <ItemSubtitle>
                    {
                      locales.find(
                        (opt: Locale) => opt.code === currentLanguage
                      )?.translations[item.code]
                    }
                  </ItemSubtitle>
                )}
              </LangItem>
            );
          })}
        </Container>
      )}
    </InlineDialogWrapper>
  );
};
