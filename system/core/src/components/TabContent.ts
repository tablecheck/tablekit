import { css } from '@emotion/react';

import { OptionalKeys } from '../typeUtils';

export const className = 'tab-content';
export interface Props {
  role: 'tabpanel';
  id: string;
}

export type DefaultedProps = OptionalKeys<Props, 'role'>;
export const defaultProps = { role: 'tabpanel' };

export const baseStyles = css``;
