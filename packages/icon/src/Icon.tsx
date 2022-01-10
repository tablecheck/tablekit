import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Size } from '@tablecheck/tablekit-theme';
import { variant } from '@tablecheck/tablekit-utils';
import { forwardRef } from 'react';

import { SvgElementProps, IconProps } from './types';

function sizeVariantCss(pixelSize: number): SerializedStyles {
  return css`
    height: ${pixelSize}px;
    width: ${pixelSize}px;
    font-size: ${pixelSize}px;
  `;
}

const SvgElement = styled('svg', {
  shouldForwardProp: (prop) => prop !== 'size'
})<SvgElementProps>`
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  vertical-align: -0.175em;
  ${variant<Size, SerializedStyles, SvgElementProps>({
    prop: 'size',
    default: Size.Regular,
    variants: {
      [Size.XXLarge]: sizeVariantCss(32),
      [Size.XLarge]: sizeVariantCss(28),
      [Size.Large]: sizeVariantCss(24),
      [Size.Regular2]: sizeVariantCss(20),
      [Size.Regular]: sizeVariantCss(16),
      [Size.Small]: sizeVariantCss(12),
      [Size.XSmall]: sizeVariantCss(8)
    }
  })}
`;

/** @component */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size,
      icon: iconProp,
      colors,
      color,
      opacities,
      className,
      ...restProps
    }: IconProps,
    ref
  ): JSX.Element => {
    const { icon, prefix, iconName: dataIconName } = iconProp;
    const [width, height, , , iconPath] = icon;
    const iconPaths = iconPath instanceof Array ? iconPath : [iconPath];
    const viewBox = `0 0 ${width} ${height}`;
    const paths = iconPaths.map((subPath, index) => {
      const styling = {
        fill: color || 'currentColor',
        style: {}
      };
      if (colors && index < colors.length) {
        styling.fill = colors[index];
      }
      if (opacities && index < opacities.length) {
        styling.style = { opacity: opacities[index] };
      } else if (
        !opacities &&
        !(colors || color) &&
        iconPaths.length > 1 &&
        index === 0
      ) {
        styling.style = { opacity: 0.4 };
      }
      return <path {...styling} key={subPath} d={subPath} />;
    });
    return (
      <SvgElement
        {...restProps}
        ref={ref}
        size={size}
        className={className}
        aria-hidden="true"
        focusable="false"
        data-prefix={prefix}
        data-icon={dataIconName}
        role="img"
        xmlns="http://www.w2.org/2000/svg"
        viewBox={viewBox}
      >
        {paths}
      </SvgElement>
    );
  }
);
