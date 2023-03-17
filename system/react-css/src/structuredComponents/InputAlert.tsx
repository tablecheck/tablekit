import { Information, WarningAlt, WarningAltFilled } from '@carbon/icons-react';
import type { inputAlert } from '@tablecheck/tablekit-core';
import * as React from 'react';

export interface Props extends inputAlert.Props {
  children: React.ReactNode;
}

const inputAlertIconMap: Record<inputAlert.Props['data-variant'], JSX.Element> =
  {
    info: <Information size={16} />,
    error: <WarningAltFilled size={16} />,
    warning: <WarningAlt size={16} />
  };

export const InputAlert = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & Props
>(({ 'data-variant': type, children, ...props }, ref) => (
  <span
    {...props}
    data-variant={type}
    ref={ref}
    className={`${props.className || ''} input-alert`}
  >
    {inputAlertIconMap[type]}
    <small>{children}</small>
  </span>
));
