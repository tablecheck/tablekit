import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonShape } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import {
  FieldHeight,
  BORDER_RADIUS,
  FontWeight
} from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { variant, ifRtl, MediaQuery } from '@tablecheck/tablekit-utils';

import { TRANSITION_SETTINGS, IS_CLICKED_SELECTOR } from './constants';
import { InputButtonProps } from './types';

const transition = css`
  transition: border-color ${TRANSITION_SETTINGS}, color ${TRANSITION_SETTINGS},
    background-color ${TRANSITION_SETTINGS}, box-shadow ${TRANSITION_SETTINGS};
`;

export const SelectedIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  margin: 2.5px;
  margin-${ifRtl('left', 'right')}: 10.5px;
  color: ${({ theme }) => theme.colors.primary2};
`;

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

interface DisplayProps {
  shape: MediaQuery<ButtonShape>;
  fieldSize: MediaQuery<InputButtonProps['size']>;
}

export const ButtonDisplay = styled.div<DisplayProps>`
  border-radius: ${variant<ButtonShape, string | number, DisplayProps>({
    prop: 'shape',
    variants: {
      [ButtonShape.Sharp]: 0,
      [ButtonShape.Rounded]: `${BORDER_RADIUS}px`,
      [ButtonShape.Circular]: (props) =>
        variant<InputSize, string, DisplayProps>({
          prop: 'fieldSize',
          default: InputSize.Regular,
          variants: {
            [InputSize.Large]: FieldHeight.Large,
            [InputSize.Regular]: FieldHeight.Regular,
            [InputSize.Regular2]: FieldHeight.Regular2,
            [InputSize.Small]: FieldHeight.Small
          }
        })(props) as string
    }
  })};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary2};
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${transition};
  background-color: ${({ theme }) => theme.colors.inputBackground};

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

export const HiddenInput = styled.input<DisplayProps>`
  position: absolute;
  user-select: none;
  opacity: 0;

  & + div {
    ${variant<InputSize, SerializedStyles, Pick<DisplayProps, 'fieldSize'>>({
      prop: 'fieldSize',
      default: InputSize.Regular,
      variants: {
        [InputSize.Large]: () => css`
          height: ${FieldHeight.Large};
          padding: 0 32px;
        `,
        [InputSize.Regular]: () => css`
          height: ${FieldHeight.Regular};
          padding: 0 22px;
        `,
        [InputSize.Regular2]: () => css`
          height: ${FieldHeight.Regular2};
          padding: 0 26px;
        `,
        [InputSize.Small]: () => css`
          height: ${FieldHeight.Small};
          padding: 0 20px;
        `
      }
    })}
  }
  & + div > svg {
    display: none;
  }

  &:hover + div {
    background: ${({ theme }) => theme.colors.hoverPrimaryBackground};
  }

  &:checked + div > svg {
    display: block;
  }
  &:checked + div {
    background: ${({ theme }) => theme.colors.primarySelected};
    border: 1px solid ${({ theme }) => theme.colors.primary2};

    ${variant<InputSize, SerializedStyles, DisplayProps>({
      prop: 'fieldSize',
      default: InputSize.Regular,
      variants: {
        [InputSize.Large]: css`
          height: ${FieldHeight.Large};
          padding: 0 18px;
        `,
        [InputSize.Regular]: css`
          height: ${FieldHeight.Regular};
          padding: 0 8px;
        `,
        [InputSize.Regular2]: css`
          height: ${FieldHeight.Regular2};
          padding: 0 12px;
        `,
        [InputSize.Small]: (props: DisplayProps) => css`
          height: ${FieldHeight.Small};
          padding: 0 ${props.shape === ButtonShape.Circular ? '10px' : '6px'};
        `
      }
    })}
  }

  &:checked:hover + div {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.hoverPrimaryBackground};
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
