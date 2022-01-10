import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { AlertWrapper } from '../styled';
import { AlertPortalProps, Position } from '../types';
import {
  ALERT_PORTAL_ID,
  getClassByPosition,
  getWrapperBlockStyles
} from '../utils';

export const AlertPortal = ({
  children,
  position: portalPosition = Position.BottomRight,
  shouldUsePortal
}: AlertPortalProps): JSX.Element | null => {
  const [alertPortal, setAlertPortal] = useState(
    document.getElementById(ALERT_PORTAL_ID)
  );

  useEffect(() => {
    if (!document) return;

    if (!alertPortal) {
      const alertPortalElement = document.createElement('div');
      alertPortalElement.setAttribute('id', ALERT_PORTAL_ID);

      Object.values(Position).forEach((position) => {
        const el = document.createElement('div');
        el.setAttribute('class', getClassByPosition(position));
        el.style.cssText = getWrapperBlockStyles(position);

        alertPortalElement.appendChild(el);
      });
      if (document.body) {
        document.body.appendChild(alertPortalElement);
        setAlertPortal(alertPortalElement);
      }
    }
  }, [alertPortal]);

  if (!shouldUsePortal) return children;

  const positionedElement = document.querySelector(
    `.${getClassByPosition(portalPosition)}`
  );

  if (positionedElement) {
    return ReactDOM.createPortal(
      <AlertWrapper>{children}</AlertWrapper>,
      positionedElement
    );
  }

  return null;
};
