import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Item } from '@tablecheck/tablekit-item';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const ItemContainer = styled(Item.withComponent('button'))`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  flex: 1;
  text-align: center;
  padding: 0 ${Spacing.L4};
  box-shadow: none;
  position: relative;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: bold;
  ${Typography.Body2};

  &:hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.hoverNeutralBackground};
  }
  ${({ isSelected, theme }) => {
    if (isSelected) {
      return css`
        color: white;
        background-color: ${theme.colors.primary};
        &:hover {
          background-color: ${theme.colors.primary2};
        }
      `;
    }
    return '';
  }}
  :focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary2};
    border-radius: 4px;
    box-shadow: none;
  } 
 }
`;

export const ButtonGroupContainer = styled.div<{
  width?: number | string;
  isInvalid: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  border:  ${(props) =>
    props.isInvalid
      ? `2px solid ${props.theme.colors.danger}`
      : `1px solid ${props.theme.colors.border}`};
  border-radius: 4px;
  border-bottom: ${(props) =>
    props.isInvalid ? `2px solid ${props.theme.colors.danger}` : 'none'};
  border-right: ${(props) =>
    props.isInvalid ? `2px solid ${props.theme.colors.danger}` : 'none'};
  ${({ width }) => css`
    max-width: ${width};
    width: 100%;
  `}}
`;
