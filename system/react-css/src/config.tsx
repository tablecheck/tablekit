import {
  CheckmarkFilled,
  Information,
  WarningAlt,
  WarningAltFilled
} from '@carbon/icons-react';
import {
  ConfigDefaults as CoreConfigDefaults,
  inputCore
} from '@tablecheck/tablekit-core';

interface ConfigDefaults extends CoreConfigDefaults {
  iconSize: number;
  inputIconSize: number;
  controlHeight: number;
}

const moduleVar = {
  defaults: {} as ConfigDefaults
};

export function getConfigDefault<T extends keyof ConfigDefaults>(
  key: T
): ConfigDefaults[T] {
  return moduleVar.defaults[key];
}

export function getCarbonIconSize<T extends 'small' | 'medium' | 'large'>(
  size: T
): T extends 'small' ? 16 : 20 {
  return (size === 'small' ? 16 : 20) as never;
}

/**
 * Used to configure some default props that should be synchronised across multiple components
 * An example of this is the data-size of inputs and buttons
 * @param defaults
 */
export function configureDefaults(defaults: Partial<ConfigDefaults>): void {
  moduleVar.defaults = {
    ...defaults,
    controlSize: defaults.controlSize ?? 'medium',
    controlHeight: inputCore.heightMap[defaults.controlSize ?? 'medium'],
    inputIconSize: 20,
    iconSize: getCarbonIconSize(defaults.controlSize ?? 'medium')
  };
}
configureDefaults({} as never);

export function getSentimentIcon(
  variant:
    | 'success'
    | 'error'
    | 'neutral'
    | 'info'
    | 'warning'
    | 'default'
    | 'tertiary'
    | 'ghost',
  size?: number
): JSX.Element {
  const sizeProp = size ?? getConfigDefault('iconSize');
  switch (variant) {
    case 'success':
      return <CheckmarkFilled size={sizeProp} />;
    case 'error':
      return <WarningAltFilled size={sizeProp} />;
    case 'warning':
      return <WarningAlt size={sizeProp} />;
    case 'neutral':
    case 'info':
    case 'default':
    case 'tertiary':
    case 'ghost':
      return <Information size={sizeProp} />;
  }
}
