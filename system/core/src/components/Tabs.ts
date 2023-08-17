import { css } from '@emotion/react';

import { OptionalKeys } from '../typeUtils';

export const className = 'tabs';
export interface Props {
  role: 'tablist';
  'data-wrap'?: boolean;
}

export type DefaultedProps = OptionalKeys<Props, 'role'>;
export const defaultProps = { role: 'tablist' };

export const baseStyles = css`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l2);
  &[data-wrap='true'] {
    flex-wrap: wrap;
  }
`;
