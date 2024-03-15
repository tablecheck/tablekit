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
  ${skeleton.baseStyles}
`;

export const Skeleton = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>(({ width, height, borderRadius, ...props }, ref): JSX.Element => {
  const style = React.useMemo(() => {
    // the animation takes 2s to run so we just -ve delay to start early
    const delay = 2000 - (new Date().getTime() % 2000);
    return {
      '--animation-delay': `${-delay}ms`,
      '--skeleton-width': pixelParam(width, '100%'),
      '--skeleton-height': pixelParam(height, '100%'),
      '--skeleton-border-radius': pixelParam(
        borderRadius,
        'var(--border-radius-large)'
      )
    } as React.CSSProperties & skeleton.SkeletonCSSProperties;
  }, [width, height, borderRadius]);
  return <SkeletonAnimation {...props} ref={ref} style={style} />;
});
