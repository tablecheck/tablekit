import {
  CheckmarkFilled,
  Information,
  WarningAlt,
  WarningAltFilled
} from '@carbon/icons-react';
import { ConfigDefaults as CoreConfigDefaults } from '@tablecheck/tablekit-core';

interface ConfigDefaults extends CoreConfigDefaults {
  iconSize: number;
  inputIconSize: number;
}

const moduleVar = {
  defaults: {} as ConfigDefaults
};

export function getConfigDefault<T extends keyof ConfigDefaults>(
  key: T
): ConfigDefaults[T] {
  return moduleVar.defaults[key];
}

export function getCarbonIconSize(size: 'small' | 'medium' | 'large'): number {
  return size === 'small' ? 16 : 20;
}

/**
 * Used to configure some default props that should be synchronised across multiple components
 * An example of this is the data-size of inputs and buttons
 * @param defaults
 */
export function configureDefaults(defaults: CoreConfigDefaults): void {
  moduleVar.defaults = {
    ...defaults,
    inputIconSize: 20,
    iconSize: getCarbonIconSize(defaults.controlSize ?? 'medium')
  };
}

export function getSentimentIcon(
  variant: 'success' | 'error' | 'neutral' | 'info' | 'warning',
  size = getConfigDefault('iconSize')
): JSX.Element {
  switch (variant) {
    case 'success':
      return <CheckmarkFilled size={size} />;
    case 'error':
      return <WarningAltFilled size={size} />;
    case 'neutral':
    case 'info':
      return <Information size={size} />;
    case 'warning':
      return <WarningAlt size={size} />;
  }
}
