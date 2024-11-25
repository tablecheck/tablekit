import styled from '@emotion/styled';
import { inputStructure } from '@tablecheck/tablekit-core';

import { InputAlert, Props as InputAlertProps } from './InputAlert';

export interface Props {
  name: string;
  input: React.ReactNode;
  label: React.ReactNode;
  labelAppend?: React.ReactNode;
  description?: React.ReactNode;
  alert?: InputAlertProps;
}

const Wrapper = styled.div`
  ${inputStructure.fullStyles}
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
        <div className="label-row">
          <label htmlFor={name}>{label}</label>
          <small>{labelAppend}</small>
        </div>
      ) : null}
      {description ? <aside>{description}</aside> : null}
      {input}
      {alert ? <InputAlert {...alert} /> : null}
    </Wrapper>
  );
}
