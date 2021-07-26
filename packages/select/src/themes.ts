import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';
import chroma from 'chroma-js/chroma-tablekit';

export const selectThemeNamespace = PackageNamespace.Select;

export interface PackageTheme {
  common?: {
    backgroundColor?: PackageThemeValue;
    borderColor?: PackageThemeValue;
  };
  option?: {
    active?: {
      backgroundColor?: PackageThemeValue;
    };
    hovered?: {
      backgroundColor?: PackageThemeValue;
    };
    selected?: {
      backgroundColor?: PackageThemeValue;
      borderColor?: PackageThemeValue;
    };
  };
  icon?: {
    color?: PackageThemeValue;
  };
  dropdownIndicator?: {
    default?: { color?: PackageThemeValue };
    focused?: { color?: PackageThemeValue };
    hovered?: { color?: PackageThemeValue };
  };
  clearIndicator?: {
    default?: { color?: PackageThemeValue };
    focused?: { color?: PackageThemeValue };
    hovered?: { color?: PackageThemeValue };
  };
}

declare module '@emotion/react' {
  export interface Theme {
    [selectThemeNamespace]: PackageTheme;
  }
}

export const selectClassicTheme: PackageTheme = {
  common: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
  },
  option: {
    hovered: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        theme.colors.hoverNeutralBackground
    },
    selected: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        theme.colors.selectedBackground,
      borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary
    },
    active: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        chroma.mix(theme.colors.selectedBackground, '#000000', 0.2).hex()
    }
  },
  icon: {
    color: ({ theme }: ThemeOnlyProps) => theme.colors.primary
  },
  dropdownIndicator: {
    default: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primary },
    focused: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primary },
    hovered: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primaryHover }
  },
  clearIndicator: {
    default: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primary },
    focused: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primary },
    hovered: { color: ({ theme }: ThemeOnlyProps) => theme.colors.primaryHover }
  }
};

export const selectDarkTheme: PackageTheme = {
  ...selectClassicTheme,
  common: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
  },
  option: {
    hovered: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        theme.colors.hoverNeutralBackground
    },
    selected: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        theme.colors.selectedBackground,
      borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary
    },
    active: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        chroma.mix(theme.colors.selectedBackground, '#ffffff', 0.2).hex()
    }
  }
};
