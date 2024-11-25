import { Close } from '@carbon/icons-react';
import type { alert } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault, getSentimentIcon } from '../config';
import { buildWithComponent } from '../utils';

export type Props = alert.Props;

export const AlertCore = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  className: 'alert',
  displayName: 'AlertCore'
});

export const AlertTitle = buildWithComponent<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>({
  tag: 'h5',
  displayName: 'AlertTitle',
  className: undefined,
  style: { gridArea: 'title' }
});

export const AlertDescription = buildWithComponent<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  displayName: 'AlertDescription',
  className: undefined,
  style: { gridArea: 'description', font: 'var(--body-2)' }
});

export const AlertCloseButton = buildWithComponent<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'AlertCloseButton',
  className: undefined,
  style: { cursor: 'pointer', color: 'currentColor', gridArea: 'close' }
});

export const AlertIconWrapper = buildWithComponent<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>({
  tag: 'span',
  className: 'alert-icon',
  displayName: 'AlertIconWrapper',
  style: { gridArea: 'icon' }
});

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
