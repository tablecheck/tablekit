import { Information, WarningAlt, WarningAltFilled } from '@carbon/icons-react';
import type { inputAlert } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getCarbonIconSize } from '../config';

export interface Props extends inputAlert.Props {
  children: React.ReactNode;
}

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
