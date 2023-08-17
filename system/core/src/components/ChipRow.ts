import { css } from '@emotion/react';

export const className = 'chip-row';

export interface Props {
  role: 'tablist';
}

export type DefaultedProps = Partial<Props>;

export const defaultProps = {
  role: 'tablist'
};

export const baseStyles = css`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l2);
`;
