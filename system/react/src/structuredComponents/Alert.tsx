import styled from '@emotion/styled';
import { alert } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = alert.Props;

export const Alert = styled.div<Props>`
  ${alert.baseStyles}
`;

export const AlertTitle = styled.h4`
  grid-area: title;
`;

export const AlertDescription = styled.div`
  grid-area: description;
`;

export const AlertCloseButton = styled.button`
  grid-area: close;
  color: currentColor;
  cursor: pointer;
`;

export const AlertIconWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'icon' }}
    className={`${props.className || ''} alert-icon`}
  />
));
