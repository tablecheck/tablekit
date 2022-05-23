import * as React from 'react';

import { BorderRadii, BorderSide } from './border';

/**
 * @deprecated Internal use only
 */
export interface Props {
  isInvalid?: boolean | undefined;
  dataTestId: string;
  borderSides?: undefined | BorderSide[];
  isMulti?: boolean;
  borderRadii?: BorderRadii;
  icon?: React.ReactNode;
  isCompact?: boolean;
}
