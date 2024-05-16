import { CheckmarkFilled, ErrorFilled } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { chip } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = chip.Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Base = styled.button<Props>`
  ${chip.fullStyles}
`;
export const chipStyledComponents = { Base } as const;

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
    <chipStyledComponents.Base
      {...props}
      type="button"
      data-size={size}
      ref={ref}
    >
      {icon}
      {children}
    </chipStyledComponents.Base>
  );
});
Chip.displayName = `Chip`;
