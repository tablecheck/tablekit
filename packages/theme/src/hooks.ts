import { useTheme } from '@emotion/react';

import type { ThemeColors } from './types';

export const useColor = (colorName: keyof ThemeColors): string => {
  const theme = useTheme();
  return theme.colors[colorName];
};
