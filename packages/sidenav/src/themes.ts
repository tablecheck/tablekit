import { itemClassicTheme } from '@tablecheck/tablekit-item';
import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const sidenavThemeNamespace = PackageNamespace.Sidenav;

interface PackageTheme {
  body: {
    default: {
      background: PackageThemeValue;
      fillColor: PackageThemeValue;
      textColor: PackageThemeValue;
    };
  };
  navSection: {
    opened: {
      background: PackageThemeValue;
      fillColor: PackageThemeValue;
    };
    selectedBorderColor: PackageThemeValue;
  };
  navFooter: {
    hoverBackground: PackageThemeValue;
  };
}

declare module '@emotion/react' {
  export interface Theme {
    [sidenavThemeNamespace]: PackageTheme;
  }
}

export const sidenavClassicTheme: PackageTheme = {
  body: {
    default: {
      background: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
      fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
      textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
    }
  },
  navSection: {
    opened: {
      background: COLORS.GRAY.L1,
      fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
    },
    selectedBorderColor: itemClassicTheme.selected.borderColor
  },
  navFooter: {
    hoverBackground: itemClassicTheme.default.hoverBackground
  }
};

export const sidenavDarkTheme: PackageTheme = {
  body: {
    default: {
      background: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
      fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
      textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
    }
  },
  navSection: {
    opened: {
      background: COLORS.WHITE_TRANSLUCENT.L2,
      fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
    },
    selectedBorderColor: itemClassicTheme.selected.borderColor
  },
  navFooter: {
    hoverBackground: itemClassicTheme.default.hoverBackground
  }
};
