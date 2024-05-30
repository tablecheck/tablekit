import type { formBanner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getSentimentIcon } from '../config';

export type Props = formBanner.Props;

export const FormBannerCore = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={`${props.className || ''} form-banner`}
  />
));

export const FormBannerMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), font: 'var(--body-2)' }}
  />
));

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
  const { icon, title, children, ...passThrough } = props;
  return (
    <FormBannerCore {...passThrough} ref={ref}>
      <FormBannerIconWrapper>
        {icon ?? getIcon(passThrough['data-variant'])}
      </FormBannerIconWrapper>
      <FormBannerMessage>{children}</FormBannerMessage>
    </FormBannerCore>
  );
});
