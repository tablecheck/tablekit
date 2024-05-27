import { CheckmarkFilled, ErrorFilled } from '@carbon/icons-react';
import { chip } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = chip.Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  const size = props['data-size'] ?? getConfigDefault('controlSize');
  const icon = props['aria-selected'] ? (
    <CheckmarkFilled size={getConfigDefault('iconSize')} />
  ) : (
    <ErrorFilled size={getConfigDefault('iconSize')} />
  );
  return (
    <button
      {...props}
      className={`${props.className ?? ''} chip`}
      type="button"
      data-size={size}
      ref={ref}
    >
      {icon}
      {children}
    </button>
  );
});
Chip.displayName = `Chip`;
