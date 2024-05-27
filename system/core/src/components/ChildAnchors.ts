import { css } from '../utils';

import { fullStyles as anchorStyles } from './Anchor';

export const element = 'div';
export const className = 'child-anchors';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export const fullStyles = css`
  & a {
    ${anchorStyles}
  }
`;
