import { ZIndex } from '@tablecheck/tablekit-theme';

import { Position } from './types';

export const ALERT_PORTAL_ID = 'alert_portal';

export const getWrapperBlockStyles = (position: Position): string => {
  const [yPosition, xPosition] = position.split('-');

  return `
    position: fixed;
    z-index: ${ZIndex.Flag};
    width: fit-content;
    ${yPosition}: 3%;
    ${
      xPosition
        ? `${xPosition}: 3%;`
        : 'left: 50%; transform: translateX(-50%);'
    }
  `;
};

export const getClassByPosition = (position: Position): string =>
  `alert_manager_${position}`;
