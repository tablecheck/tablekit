import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Spacing } from '../utils/constants';

import { InputAlert, Props as InputAlertProps } from './InputAlert';

interface Props {
  name: string;
  input: React.ReactNode;
  label: React.ReactNode;
  labelAppend?: React.ReactNode;
  description?: React.ReactNode;
  alert?: InputAlertProps;
}

export const baseSelector = '.input-structure';

export const baseStyles = css`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${Spacing.L2};
  align-items: stretch;
`;

const Wrapper = styled.div`
  ${baseStyles}
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelAppend = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

export function InputStructure({
  input,
  name,
  label,
  description,
  alert,
  labelAppend
}: Props): JSX.Element {
  return (
    <Wrapper>
      {label || labelAppend ? (
        <LabelRow>
          <label htmlFor={name}>{label}</label>
          <LabelAppend>{labelAppend}</LabelAppend>
        </LabelRow>
      ) : null}
      {description ? <aside>{description}</aside> : null}
      {input}
      {alert ? <InputAlert {...alert} /> : null}
    </Wrapper>
  );
}
