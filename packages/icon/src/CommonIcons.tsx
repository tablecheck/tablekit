import styled from '@emotion/styled';

import { Icon } from './Icon';
import { IconProps } from './types';
import { getIcon } from './utils';

export type CommonIconProps = Omit<IconProps, 'icon'>;

const WarningIconElement = styled(Icon)`
  color: ${({ theme }) => theme.colors.warning};
`;
export const WarningIcon = (props: CommonIconProps): JSX.Element => (
  <WarningIconElement {...props} icon={getIcon('warning')} />
);

const SuccessIconElement = styled(Icon)`
  color: ${({ theme }) => theme.colors.success};
`;
export const SuccessIcon = (props: CommonIconProps): JSX.Element => (
  <SuccessIconElement {...props} icon={getIcon('success')} />
);

const DangerIconElement = styled(Icon)`
  color: ${({ theme }) => theme.colors.danger};
`;
export const DangerIcon = (props: CommonIconProps): JSX.Element => (
  <DangerIconElement {...props} icon={getIcon('danger')} />
);
