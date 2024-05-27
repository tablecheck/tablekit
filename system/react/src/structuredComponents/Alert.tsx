import { Close } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { alert } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault, getSentimentIcon } from '../config';

export type Props = alert.Props;

export const AlertCore = styled.div<Props>`
  ${alert.fullStyles}
`;

export const AlertTitle = styled.h4`
  grid-area: title;
`;

export const AlertDescription = styled.div`
  grid-area: description;
`;

export const AlertCloseButton = styled.button`
  grid-area: close;
  color: currentColor;
  cursor: pointer;
`;

export const AlertIconWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'icon' }}
    className={`${props.className || ''} alert-icon`}
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
