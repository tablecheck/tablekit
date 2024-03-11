import { css } from '@emotion/react';

export const className = 'input-structure';

export const baseStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l2);

  .label-row {
    display: flex;
    justify-content: space-between;
  }
`;
