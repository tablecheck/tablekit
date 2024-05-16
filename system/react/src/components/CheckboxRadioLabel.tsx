/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = checkboxRadioLabel.Props &
  React.LabelHTMLAttributes<HTMLLabelElement>;

const Base = styled.label<Props>`
  ${checkboxRadioLabel.fullStyles}
`;
export const checkboxRadioLabelStyledComponents = { Base } as const;

const _CheckboxRadioLabel = React.forwardRef<
  HTMLLabelElement,
  Props & React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => (
  <checkboxRadioLabelStyledComponents.Base {...props} ref={ref} />
));
_CheckboxRadioLabel.displayName = `CheckboxRadioLabel`;
export const CheckboxRadioLabel =
  _CheckboxRadioLabel as never as typeof _CheckboxRadioLabel & {
    withComponent: (typeof checkboxRadioLabelStyledComponents.Base)['withComponent'];
  };
CheckboxRadioLabel.withComponent = ((withComponent: any) => {
  const Styled =
    checkboxRadioLabelStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLLabelElement,
    Props & React.LabelHTMLAttributes<HTMLLabelElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `CheckboxRadioLabel(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
