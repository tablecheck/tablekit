import { OptionalKeys, css } from '../utils';

export const className = 'tab-content';
export interface Props {
  role: 'tabpanel';
  id: string;
}

export type DefaultedProps = OptionalKeys<Props, 'role'>;
export const defaultProps = { role: 'tabpanel' };

export const fullStyles = css``;
