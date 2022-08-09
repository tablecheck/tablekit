import { Information, WarningAlt, WarningAltFilled } from '@carbon/icons-react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';

import { SentimentColors } from '../themeVariables/theme';

const inputAlertIconMap: Record<
  Extract<SentimentColors, 'info' | 'error' | 'warning'>,
  JSX.Element
> = {
  info: <Information size={16} />,
  error: <WarningAltFilled size={16} />,
  warning: <WarningAlt size={16} />
};

export interface Props {
  /**
   * This prop should be used with `aria-describedby` on the input field
   */
  id?: string;
  type: keyof typeof inputAlertIconMap;
  content: React.ReactNode;
}

export const baseSelector = 'span.input-alert';

export const baseStyles = css`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: var(--spacing-l2);
  margin-top: var(--spacing-l2);
  color: var(--text);
  border-radius: var(--border-radius-small);

  &[data-variant='error'],
  &[data-variant='warning'] {
    border-radius: var(--border-radius-small);
    padding: var(--spacing-l2) var(--spacing-l3);
  }

  &[data-variant='info'] > svg:first-child {
    color: var(--info);
  }

  &[data-variant='error'] {
    background: var(--error-surface);
    color: var(--error);
  }

  &[data-variant='warning'] {
    background: var(--warning-surface);
    color: var(--warning);
  }
`;

const AlertWrapper = styled.span<{
  'data-variant': Props['type'];
}>`
  ${baseStyles}
`;

/**
 * React export to apply the specific structure
 */
export const InputAlert = React.forwardRef<
  HTMLSpanElement,
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> & Props
>(({ type, content, ...props }, ref) => (
  <AlertWrapper {...props} data-variant={type} ref={ref}>
    {inputAlertIconMap[type]}
    <small>{content}</small>
  </AlertWrapper>
));
