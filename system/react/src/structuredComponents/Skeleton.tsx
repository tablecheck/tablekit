import styled from '@emotion/styled';
import { skeleton } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = skeleton.Props;

function pixelParam(
  param: string | number | undefined,
  fallback: string
): string {
  if (typeof param === 'string') return param;
  if (typeof param === 'number') return `${param}px`;
  return fallback;
}

const SkeletonAnimation = styled.span`
  ${skeleton.fullStyles}
`;

export const Skeleton = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>(({ width, height, borderRadius, ...props }, ref): JSX.Element => {
  const style = React.useMemo(
    () =>
      ({
        '--tk-skeleton-width': pixelParam(width, '100%'),
        '--tk-skeleton-height': pixelParam(height, '100%'),
        '--tk-skeleton-border-radius': pixelParam(
          borderRadius,
          'var(--border-radius-large)'
        )
      } as React.CSSProperties & skeleton.SkeletonCSSProperties),
    [width, height, borderRadius]
  );
  return <SkeletonAnimation {...props} ref={ref} style={style} />;
});
Skeleton.displayName = 'Skeleton';
