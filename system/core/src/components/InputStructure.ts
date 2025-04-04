import { css } from '../utils';

export const className = 'input-structure';

export const fullStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l2);

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;
