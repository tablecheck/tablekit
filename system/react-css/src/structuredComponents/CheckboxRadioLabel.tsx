import type { checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = checkboxRadioLabel.Props;

export const CheckboxLabel = React.forwardRef<
  HTMLLabelElement,
  Props & React.HTMLAttributes<HTMLLabelElement>
>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label {...props} ref={ref} className={`${props.className || ''} checkbox`} />
));

export const RadioLabel = React.forwardRef<
  HTMLLabelElement,
  Props & React.HTMLAttributes<HTMLLabelElement>
>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label {...props} ref={ref} className={`${props.className || ''} radio`} />
));
