import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { InputFieldProps, InputSize } from '@tablecheck/tablekit-input';
import {
  FieldHeight,
  Spacing,
  BORDER_RADIUS,
  FontWeight
} from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { variant } from '@tablecheck/tablekit-utils';

import { TRANSITION_SETTINGS, IS_CLICKED_SELECTOR } from './constants';

const transition = css`
  transition: all ${TRANSITION_SETTINGS};
`;

const getContainerShape = variant<
  InputSize,
  SerializedStyles,
  Pick<InputFieldProps, 'fieldSize' | 'shape'>
>({
  prop: 'fieldSize',
  default: InputSize.Regular,
  variants: {
    [InputSize.Large]: () => css`
      height: ${FieldHeight.Large};
      padding: 0 ${Spacing.L4};
    `,
    [InputSize.Regular]: () => css`
      height: ${FieldHeight.Regular};
      padding: 0 ${Spacing.L4};
    `,
    [InputSize.Regular2]: () => css`
      height: ${FieldHeight.Regular2};
      padding: 0 ${Spacing.L4};
    `,
    [InputSize.Small]: () => css`
      height: ${FieldHeight.Small};
      padding: 0 ${Spacing.L2};
    `
  }
});

export const ButtonLabel = styled.label`
  display: inline-flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  ${Typography.Body2};

  &,
  & * {
    user-select: none;
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const ButtonDisplay = styled.div<{
  fieldSize: InputFieldProps['size'];
}>`
  ${getContainerShape};
  border-radius: ${BORDER_RADIUS}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${transition};
  background-color: rgba(255, 255, 255, 0.03);

  &:not(${IS_CLICKED_SELECTOR}):after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    border: 2px solid transparent;
    border-radius: ${BORDER_RADIUS + 2}px;
    ${transition};
  }
`;

export const TextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${Typography.Body1};
  font-weight: ${FontWeight.SemiBold};

  &::after {
    content: attr(data-text);
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: 600;
    display: block;

    @media speech {
      display: none;
    }
`;

export const HiddenInput = styled.input`
  position: absolute;
  user-select: none;
  opacity: 0;

  &:hover + div {
    background: ${({ theme }) => theme.colors.hoverPrimaryBackground};
  }

  &:checked + div {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:checked:hover + div {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:disabled + div,
  &:disabled:hover + div {
    border: 2px solid transparent;
    background: ${({ theme }) => theme.colors.disabledBackground};
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus + div:after {
    border-color: ${({ theme }) => theme.colors.focusOutline};
  }
`;
