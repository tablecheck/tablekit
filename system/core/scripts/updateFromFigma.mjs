import path from 'path';

import fs from 'fs-extra';
// eslint-disable-next-line @tablecheck/forbidden-imports
import _ from 'lodash';
import pluralize from 'pluralize';
import prettier from 'prettier';

/**
 * To use this file, install design tokens figma plugin; https://www.figma.com/community/plugin/888356646278934516
 * Open up Tablekit Components (3.0), clone it to your drafts (as we can't run plugins on files we can't edit)
 * Run the plugin, exporting everything.
 * Run `npm run update:figma <filepath of exported file>`
 */

function hexToRgba(color) {
  const hexValues = color
    .toUpperCase()
    .replace('#', '')
    .split('')
    .reduce((r, char) => {
      const lastValue = r[r.length - 1];
      if (lastValue && lastValue.length < 2) r[r.length - 1] += char;
      else r.push(char);
      return r;
    }, [])
    .map((hex) => parseInt(hex, 16));
  hexValues[3] = +(hexValues[3] / 255).toFixed(2);
  return `rgba(${hexValues.join(', ')})`;
}

const filePath = process.argv[2];
const { color: colorTokens, effect: effectTokens } = fs.readJSONSync(filePath);

const colorVars = {
  light: [],
  dark: [],
  brand: [],
  utilities: []
};

const lightEffectVars = [];
const darkEffectVars = [];

Object.keys(colorTokens).forEach((groupKey) => {
  const group = _.kebabCase(groupKey).replace('tk-3-0-', '');
  Object.keys(colorTokens[groupKey]).forEach((nameKey) => {
    const { value, type } = colorTokens[groupKey][nameKey];
    if (type !== 'color') {
      console.warn(
        'Unknown Color',
        groupKey,
        nameKey,
        colorTokens[groupKey][nameKey]
      );
      return;
    }
    const name = _.kebabCase(nameKey);
    colorVars[group].push([name, value]);
  });
});

function valueToCssValue(value) {
  if (typeof value === 'string') return value;
  if (value === 0) return '0';
  return `${value}px`;
}

Object.keys(effectTokens).forEach((name) => {
  const { value, type } = effectTokens[name];
  switch (type) {
    case 'custom-shadow': {
      const effectName = _.kebabCase(name);
      const effectValue = `${[
        value.offsetX,
        value.offsetY,
        value.radius,
        value.spread
      ]
        .map((v) => valueToCssValue(v))
        .join(' ')} ${hexToRgba(value.color)}`;

      if (/light/.test(effectName)) {
        lightEffectVars.push([effectName.replace(/light-/gi, ''), effectValue]);
      } else if (/dark/.test(effectName)) {
        darkEffectVars.push([effectName.replace(/dark-/gi, ''), effectValue]);
      }
      return;
    }
    default: {
      console.warn('Unknown Effect', name, type, effectTokens[name]);
    }
  }
});

Object.keys(colorVars).forEach((groupKey) => {
  colorVars[groupKey] = _.sortBy(colorVars[groupKey], '0').map(
    ([name, value]) => [name, hexToRgba(value)]
  );
});

const allCssProperties = [];
function addProperty(name) {
  if (allCssProperties.includes(name)) return;
  allCssProperties.push(name);
}

function formatCssProp(name, value) {
  addProperty(name);
  return `--${name}: ${value};`;
}

const themeContent = `// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { css } from '@emotion/react';

/**
 * DO NOT EDIT; File is generated from figma, see './updateFromFigma.mjs' for update instructions
 */

export type SentimentColors =
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning';

// The following are duplicated as extensions and plugins need the '--name' format
// but we need objects exported for usage with certain 3rd party libraries or when computing colours

${Object.keys(colorVars)
  .map(
    (groupKey) =>
      `export const ${pluralize.singular(groupKey)}Colors = css\`
      ${
        ['dark', 'light'].includes(groupKey) ? `color-scheme: ${groupKey};` : ''
      }
  ${colorVars[groupKey]
    .map(([name, value]) => formatCssProp(name, value))
    .join('\n  ')}
\`;

export const ${pluralize.singular(groupKey)}ColorsObject = {
  ${colorVars[groupKey]
    .map(([name, value]) => `'${name}': '${value}',`)
    .join('\n  ')}
  };`
  )
  .join('\n\n')}
  
export const lightEffectStyles = css\`
  ${lightEffectVars
    .map(([name, value]) => formatCssProp(name, value))
    .join('\n  ')}
\`;

export const darkEffectStyles = css\`
  ${darkEffectVars
    .map(([name, value]) => formatCssProp(name, value))
    .join('\n  ')}
\`;

export const theme = css\`
  [data-theme='light'],
  :root {
    \${lightColors};
    \${lightEffectStyles}
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) {
      \${darkColors}
      \${darkEffectStyles}
    }
  }
  [data-theme='dark'] {
    \${darkColors}
    \${darkEffectStyles}
  }
  :root {
    ${Object.keys(colorVars)
      .filter((key) => !['light', 'dark'].includes(key))
      .map((key) => `\${${pluralize.singular(key)}Colors}`)
      .join('\n')}
  }
\``;

function outputFile(relativePath, fileContent) {
  const filepath = path.join(process.cwd(), 'src', relativePath);
  const config = prettier.resolveConfig.sync(filepath);
  fs.outputFileSync(
    filepath,
    prettier.format(fileContent, { filepath, ...config })
  );
}

outputFile('themeVariables/theme.ts', themeContent);

const typesContent = `
export interface TableKitCSSProperties {
  ${allCssProperties.map((name) => `'--${name}'?: string;`).join('\n')}
}`;

outputFile('themeVariables/types.ts', typesContent);
