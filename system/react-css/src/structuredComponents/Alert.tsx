import { Close } from '@carbon/icons-react';
import type { alert } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault, getSentimentIcon } from '../config';

export type Props = alert.Props;

export const AlertCore = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div {...props} ref={ref} className={`${props.className || ''} alert`} />
));

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h4
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'title' }}
  />
));
export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'description' }}
  />
));

export const AlertCloseButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    type="button"
    {...props}
    ref={ref}
    style={{
      cursor: 'pointer',
      color: 'currentColor',
      ...(props.style || {}),
      gridArea: 'close'
    }}
  />
));

export const AlertIconWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'icon' }}
    className={`${props.className || ''} input-alert-icon`}
  />
));

interface ComposedProps extends Omit<Props, 'data-layout' | 'children'> {
  /**
   * Icon to display in the alert. Pass `null` to hide the icon.
   */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  onClose?: VoidFunction;
  /**
   * @deprecated if you need to manually set the layout, use the `AlertCore` component instead
   */
  'data-layout'?: never;
}

function getLayout(props: ComposedProps): Props['data-layout'] {
  const checks = [
    [props.icon !== null, 'icon'],
    [props.title, 'title'],
    [props.onClose, 'close']
  ].filter((check) => check[0]);
  if (checks.length === 0) {
    return 'text-only';
  }
  return checks.map((check) => check[1]).join('-') as Props['data-layout'];
}

export const Alert = React.forwardRef<
  HTMLDivElement,
  ComposedProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { icon, title, children, onClose, ...passthrough } = props;
  return (
    <AlertCore {...passthrough} data-layout={getLayout(props)} ref={ref}>
      {icon !== null ? (
        <AlertIconWrapper>
          {icon ?? getSentimentIcon(passthrough['data-variant'])}
        </AlertIconWrapper>
      ) : null}
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription>{children}</AlertDescription>
      {onClose ? (
        <AlertCloseButton onClick={onClose}>
          <Close size={getConfigDefault('iconSize')} />
        </AlertCloseButton>
      ) : null}
    </AlertCore>
  );
});
