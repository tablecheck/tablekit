import { css } from '../utils';

export const className = 'chip-row';

export interface Props {
  role: 'tablist';
}

export type DefaultedProps = Partial<Props>;

export const defaultProps = {
  role: 'tablist'
};

export const fullStyles = css`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l2);
`;
