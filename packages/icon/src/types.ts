import * as FATypes from '@fortawesome/fontawesome-common-types';
import { Size } from '@tablecheck/tablekit-theme';
import { MediaQuery, VariantProps } from '@tablecheck/tablekit-utils';
import { SVGAttributes } from 'react';
import * as TCTypes from 'tablecheck-icons/definitions';

export interface IconDefinition {
  prefix: FATypes.IconPrefix | TCTypes.IconPrefix;
  iconName: FATypes.IconName | TCTypes.IconName;
  icon: FATypes.IconDefinition['icon'] | TCTypes.IconDefinition['icon'];
}

export type IconConfig = {
  close: IconDefinition;
  primary: IconDefinition;
  warning: IconDefinition;
  success: IconDefinition;
  danger: IconDefinition;
  chevronLeft: IconDefinition;
  chevronRight: IconDefinition;
  chevronDoubleLeft: IconDefinition;
  chevronDoubleRight: IconDefinition;
  search: IconDefinition;
  openEye: IconDefinition;
  closedEye: IconDefinition;
  globe: IconDefinition;
  chevronUp: IconDefinition;
  chevronDown: IconDefinition;
  user: IconDefinition;
  power: IconDefinition;
  minus: IconDefinition;
  confirm: IconDefinition;
};

export type IconProps = VariantProps<
  SVGAttributes<SVGElement> & {
    className?: string;
    colors?: string[];
    icon: IconDefinition;
    opacities?: (string | number)[];
    size?: MediaQuery<Size>;
  }
>;

export interface SvgElementProps {
  size: IconProps['size'];
}
