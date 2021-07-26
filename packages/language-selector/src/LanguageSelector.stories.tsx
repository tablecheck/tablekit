import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { Meta } from '@storybook/react';
import { ordered } from '@tablecheck/locales';
import { Icon } from '@tablecheck/tablekit-icon';
import { Item, ItemBorderPosition } from '@tablecheck/tablekit-item';
import { Size, Spacing } from '@tablecheck/tablekit-theme';
import { useState } from 'react';
import { useMedia } from 'react-use';

import { LanguageSelector } from './LanguageSelector';
import { View } from './types';

const LangTriggerButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;
const SelectedLang = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
  text-align: center;
`;
const SelectedLang2 = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
  text-align: center;
`;
const Surface = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvas};
`;
const LangText = styled.h3`
  margin-right: 10px;
  display: inline-block;
  font-weight: normal;
`;
const GrowWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    transform: scale(1.15);
  }
`;

export const Examples = ({
  shouldShowCloseIcon = true
}: {
  shouldShowCloseIcon: boolean;
}) => {
  const [selectedLang, setLanguage] = useState('en');
  const [selectedLang2, setLanguage2] = useState('es');
  const [selectedLang3, setLanguage3] = useState('en');
  const isMobile = useMedia(`(max-width: 768px)`);
  return (
    <Surface>
      <LanguageSelector
        currentLanguage={selectedLang}
        locales={ordered}
        view={View.Mobile}
        containerCss={css`
          width: 100%;
        `}
        itemWidth="100%"
        shouldShowCloseIcon={shouldShowCloseIcon}
        renderTrigger={({ onClick, ref }) => (
          <LangTriggerButton onClick={onClick} ref={ref}>
            <SelectedLang>
              {selectedLang.slice(-2).toUpperCase()} (Mobile view)
            </SelectedLang>
            <Icon icon={faGlobe} size={Size.Regular2} />
          </LangTriggerButton>
        )}
        onChangeLanguage={(locale) => setLanguage(locale)}
      />
      <LanguageSelector
        currentLanguage={selectedLang2}
        locales={ordered}
        itemWidth="50%"
        containerCss={css`
          width: 750px;
        `}
        shouldShowCloseIcon={shouldShowCloseIcon}
        renderTrigger={({ onClick, isOpen, ref }) => (
          <Item
            elemBefore={
              <LangTriggerButton>
                <SelectedLang2>
                  {selectedLang2.slice(-2).toUpperCase()}
                </SelectedLang2>
                <Icon icon={faLanguage} size={Size.XXLarge} />
              </LangTriggerButton>
            }
            borderPosition={ItemBorderPosition.Top}
            isSelected={isOpen}
            width="fit-content"
            shouldCenterAlignment
            onClick={onClick}
            ref={ref}
          />
        )}
        onChangeLanguage={(locale) => setLanguage2(locale)}
      />
      <LanguageSelector
        inlineDialogContainerCss={css`
          border-radius: ${!isMobile ? '16px' : 'none'};
          overflow: hidden;
        `}
        containerCss={css`
          padding: ${!isMobile && Spacing.L3};
        `}
        currentLanguage={selectedLang3}
        locales={ordered}
        shouldShowCloseIcon={shouldShowCloseIcon}
        renderTrigger={({ onClick, ref }) => (
          <GrowWrapper onClick={onClick} ref={ref}>
            <LangText>{selectedLang3.slice(-2).toUpperCase()}</LangText>
            <Icon icon={faGlobe} size={Size.XLarge} />
          </GrowWrapper>
        )}
        onChangeLanguage={(locale) => setLanguage3(locale)}
      />
    </Surface>
  );
};

export default {
  title: 'Components/LanguageSelector',
  component: Examples,
  argTypes: {
    shouldShowCloseIcon: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as Meta;
