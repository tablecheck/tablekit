import type { checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = checkboxRadioLabel.Props;

export const CheckboxLabel = buildWithComponent<
  HTMLLabelElement,
  Props & React.HTMLAttributes<HTMLLabelElement>
>({
  tag: 'label',
  className: 'checkbox',
  displayName: 'CheckboxLabel'
});

export const RadioLabel = buildWithComponent<
  HTMLLabelElement,
  Props & React.HTMLAttributes<HTMLLabelElement>
>({
  tag: 'label',
  className: 'radio',
  displayName: 'RadioLabel'
});
