import styled from '@emotion/styled';
import { Close as RxClose } from '@radix-ui/react-dialog';
import {
  Button,
  ButtonAppearance,
  ButtonProps,
  ButtonSize,
  ButtonShape,
  ButtonColor
} from '@tablecheck/tablekit-button';
import { Spacing } from '@tablecheck/tablekit-theme';
import { margin } from '@tablecheck/tablekit-utils';

const BaseCloseBtn = (props: ButtonProps): JSX.Element => (
  <RxClose
    as={Button}
    size={ButtonSize.Small}
    shape={ButtonShape.Circular}
    appearance={ButtonAppearance.Subtle}
    color={ButtonColor.Ghost}
    {...props}
  />
);

export const ModalCloseButton = styled(BaseCloseBtn)`
  flex-shrink: 0;
  ${(props) => margin({ left: Spacing.L2 })(props)};
`;
