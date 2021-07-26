import { SideNavContextState } from './types';

export const BORDER_WIDTH = 2;
export const slideIn = '0.3s cubic-bezier(0.77, 0.2, 0.05, 1)';

// the `+ 1` in the below 2 getters are to account for the extra width for the 1px border
export const getSideNavRegularWidth = ({
  isExpanded
}: Pick<SideNavContextState, 'isExpanded'>): number =>
  (isExpanded ? 200 : 56) + 1;

export const getSideNavLargeWidth = ({
  isExpanded
}: Pick<SideNavContextState, 'isExpanded'>): number =>
  (isExpanded ? 240 : 72) + 1;
