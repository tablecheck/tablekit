import { css } from '@emotion/react';

import { OptionalKeys } from '../typeUtils';

export const className = 'tabs';
export interface Props {
  role: 'tablist';
}

export type DefaultedProps = OptionalKeys<Props, 'role'>;
export const defaultProps = { role: 'tablist' };

export const baseStyles = css`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l5);
`;
