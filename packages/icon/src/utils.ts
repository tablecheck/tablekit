import { IconConfig, IconDefinition } from './types';

export const componentConfig: { icons?: Partial<IconConfig> } = {};
export const config = (iconConfig: IconConfig): void => {
  componentConfig.icons = iconConfig;
};
export const getIcon = (key: keyof IconConfig): IconDefinition => {
  const { icons } = componentConfig;
  if (!icons)
    throw new Error(
      "'@tablecheck/tablekit-Icon: no configured icons, try adding one of the following as high in the component tree as possible `import '@tablecheck/tablekit-pro-icon-config';` or `import '@tablecheck/tablekit-free-icon-config';`'"
    );
  const icon = icons[key];
  if (!icon)
    throw new Error(
      `@tablecheck/tablekit-Icon: Icon "${key}" is not configured`
    );
  return icon;
};
