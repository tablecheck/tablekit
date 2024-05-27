import * as CSS from 'csstype';

export type OptionalKeys<T extends object, TKeys extends keyof T> = Omit<
  T,
  TKeys
> & {
  [K in keyof T as K extends TKeys ? K : never]?: T[K];
};

export type CSSProperties = CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | Array<Extract<CSSProperties[K], string>>;
};

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {}

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | CSSObject;

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export interface CSSOthersObject {
  [propertiesName: string]: CSSInterpolation;
}

export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudos,
    CSSOthersObject {}

export function css(
  first: TemplateStringsArray,
  ...interpolations: Array<CSSInterpolation>
): string;
export function css(object: CSSObject): string;
export function css(
  object: CSSObject | TemplateStringsArray,
  ...interpolations: Array<CSSInterpolation>
): string {
  if (Array.isArray(object))
    return String.raw(object as TemplateStringsArray, ...interpolations);
  let styles = '';
  Object.entries(object).forEach(([camelCaseKey, unsafeValue]) => {
    if (!unsafeValue) return;
    if (typeof unsafeValue === 'object') {
      if (Array.isArray(unsafeValue)) throw new Error('Array is not allowed');
      styles += `${camelCaseKey} { ${css(unsafeValue)} }`;
      return;
    }
    const kebabCaseKey = camelCaseKey.replace(
      /[A-Z]/g,
      (match) => `-${match.toLowerCase()}`
    );
    let value;
    if (typeof unsafeValue === 'number') value = `${unsafeValue}px`;
    else value = unsafeValue;
    styles += `${kebabCaseKey}: ${value};`;
  });
  return styles;
}

interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

function handleInterpolation(value: ReturnType<typeof css> | SerializedStyles) {
  if (typeof value === 'string') return value;
  return value.styles;
}

export function themedCss({
  selector,
  light,
  dark
}: {
  selector: string;
  light: ReturnType<typeof css> | SerializedStyles;
  dark: ReturnType<typeof css> | SerializedStyles;
}): ReturnType<typeof css> {
  return css`
    [data-theme='light'] ${selector}, :root ${selector} {
      ${handleInterpolation(light)}
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme='light'])
        ${selector},
        [data-theme='system']
        ${selector} {
        ${handleInterpolation(dark)}
      }
    }
    [data-theme='dark'] ${selector} {
      ${handleInterpolation(dark)}
    }
  `;
}
