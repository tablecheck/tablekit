import { ReactNode } from 'react';

import { DEFAULT_MOBILE_BREAKPOINT } from '../../styled';

import { ActionButtonsColumn } from './styled';

type ActionButtonsProps<ActionItem extends Record<string, unknown>> = {
  /** a collection of buttons to render */
  actionButtons: ActionItem[];

  /** breakpoint to switch between mobile and desktop views */
  mobileBreakpoint?: string;

  /** a custom render function for the items */
  renderActionItem: (item: ActionItem) => ReactNode;
};

export const ActionButtons = <ActionItem extends Record<string, unknown>>({
  actionButtons,
  mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
  renderActionItem
}: ActionButtonsProps<ActionItem>): JSX.Element => (
  <>
    {actionButtons && actionButtons.length > 0 && (
      <ActionButtonsColumn mobileBreakpoint={mobileBreakpoint}>
        {actionButtons.map(renderActionItem)}
      </ActionButtonsColumn>
    )}
  </>
);
