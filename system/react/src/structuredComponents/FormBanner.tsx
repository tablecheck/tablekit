import styled from '@emotion/styled';
import { formBanner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getSentimentIcon } from '../config';

export type Props = formBanner.Props;

export const FormBannerCore = styled.div<Props>`
  ${formBanner.fullStyles}
`;

export const FormBannerMessage = styled.div`
  font: var(--body-2);
`;

export const FormBannerIconWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), display: 'inline-flex', marginTop: '2px' }}
    className={`${props.className || ''} form-banner-icon`}
  />
));

interface ComposedProps extends Props {
  /**
   * Icon to display in the form banner. Pass `null` to display sentiment one.
   */
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function getIcon(variant: Props['data-variant']): JSX.Element {
  if (variant === 'purple' || variant === 'orange')
    return getSentimentIcon('default');
  return getSentimentIcon(variant);
}

export const FormBanner = React.forwardRef<
  HTMLDivElement,
  ComposedProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { icon, children, ...passThrough } = props;
  return (
    <FormBannerCore {...passThrough} ref={ref}>
      <FormBannerIconWrapper>
        {icon ?? getIcon(passThrough['data-variant'])}
      </FormBannerIconWrapper>
      <FormBannerMessage>{children}</FormBannerMessage>
    </FormBannerCore>
  );
});
