import { ButtonAppearance, ButtonShape } from '@tablecheck/tablekit-button';

import { AlertFooterContainer, AlertFooterButton } from '../styled';
import { AlertFooterProps } from '../types';

export const AlertFooter = ({ actions }: AlertFooterProps): JSX.Element => (
  <AlertFooterContainer>
    {actions.map((action) => {
      const {
        text,
        appearance = ButtonAppearance.Subtle,
        shape = ButtonShape.Circular,
        ...otherProps
      } = action;
      return (
        <AlertFooterButton
          key={text}
          appearance={appearance}
          shape={shape}
          {...otherProps}
        >
          {text}
        </AlertFooterButton>
      );
    })}
  </AlertFooterContainer>
);
