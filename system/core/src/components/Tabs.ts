import { OptionalKeys, css } from '../utils';

export const className = 'tabs';
export interface Props {
  role: 'tablist';
  'data-wrap'?: boolean;
}

export type DefaultedProps = OptionalKeys<Props, 'role'>;
export const defaultProps = { role: 'tablist' };

export const fullStyles = css`
  display: flex;
  flex-direction: row;
  &[data-wrap='true'] {
    flex-wrap: wrap;
  }
`;
