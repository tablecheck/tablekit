import { keyframes as skeleton } from '../components/Skeleton';
import { keyframes as spinner } from '../components/Spinner';
import { keyframes as tooltip } from '../components/Tooltip';
import { css } from '../utils';

export const keyframes = css`
  ${skeleton}
  ${spinner}
  ${tooltip}
`;
