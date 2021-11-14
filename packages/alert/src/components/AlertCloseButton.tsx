import {
  ButtonAppearance,
  ButtonProps,
  ButtonShape,
  ButtonSize
} from '@tablecheck/tablekit-button';
import { getIcon, Icon } from '@tablecheck/tablekit-icon';

import { AlertCloseButton as StyledCloseButton } from '../styled';

export const AlertCloseButton = ({
  onClick
}: {
  onClick: ButtonProps['onClick'];
}): JSX.Element => (
  <StyledCloseButton
    appearance={ButtonAppearance.Subtle}
    shape={ButtonShape.Circular}
    onClick={onClick}
    aria-label="Alert close button"
    iconBefore={() => <Icon icon={getIcon('close')} />}
    size={ButtonSize.Small}
  />
);
