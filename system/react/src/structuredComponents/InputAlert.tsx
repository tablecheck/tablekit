import { Information, WarningAlt, WarningAltFilled } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { inputAlert } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getCarbonIconSize } from '../config';

export interface Props extends inputAlert.Props {
  children: React.ReactNode;
}

export const InputAlertInner = styled(inputAlert.element)<Props>`
  ${inputAlert.fullStyles}
  margin-top: 0;
`;

const inputAlertIconMap: Record<
  inputAlert.Props['data-variant'],
  JSX.Element | null
> = {
  info: <Information size={getCarbonIconSize('small')} />,
  error: <WarningAltFilled size={getCarbonIconSize('small')} />,
  warning: <WarningAlt size={getCarbonIconSize('small')} />,
  bare: null,
  disabled: null
};

export const InputAlert = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & Props
>(({ 'data-variant': type, children, ...props }, ref) => (
  <InputAlertInner {...props} data-variant={type} ref={ref}>
    {inputAlertIconMap[type]}
    <small>{children}</small>
  </InputAlertInner>
));
