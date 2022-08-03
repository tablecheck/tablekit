import path from 'path';

import fs from 'fs-extra';
// eslint-disable-next-line @tablecheck/forbidden-imports
import _ from 'lodash';
import pluralize from 'pluralize';
import prettier from 'prettier';

/**
 * To use this file, install this figma plugin; https://www.figma.com/community/plugin/888356646278934516
 * Open up Tablekit Components (3.0), clone it to your drafts (as we can't run plugins on files we can't edit)
 * Run the plugin, exporting everything.
 * Run `node src/Tablekit/updateFromFigma.mjs <filepath of exported file>`
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
  sentiments: [],
  utilities: [],
  greys: []
};

const effectVars = [];

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
    if (/^grey-/.test(name))
      colorVars.greys.push([parseFloat(name.replace(/^grey-/gi, '')), value]);
    else colorVars[group].push([name, value]);
  });
});

Object.keys(effectTokens).forEach((name) => {
  const { value, type } = effectTokens[name];
  switch (type) {
    case 'custom-shadow': {
      effectVars.push([
        _.kebabCase(name),
        `${[value.offsetX, value.offsetY, value.radius, value.spread]
          .map((v) => (v && !Number.isNaN(v) ? `${v}px` : v))
          .join(' ')} ${hexToRgba(value.color)}`
      ]);
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

const { greys } = colorVars;

const darkInsert = colorVars.dark.length;
while (greys.length) {
  const [level, color] = greys.pop();
  colorVars.light.push([`grey-${level}`, color]);
  colorVars.dark.splice(darkInsert, 0, [`grey-${1000 - level}`, color]);
}

delete colorVars.greys;

const fileContent = `import { css } from '@emotion/react';

/**
 * DO NOT EDIT; File is generated from figma, see './updateFromFigma.mjs' for update instructions
 */

export type SentimentColors = ${_.uniq(
  colorVars.sentiments.map((arr) => `'${arr[0].split('-')[0]}'`)
).join(' | ')};

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
    .map(([name, value]) => `--${name}: ${value};`)
    .join('\n  ')}
\`;

export const ${pluralize.singular(groupKey)}ColorsObject = {
  ${colorVars[groupKey]
    .map(([name, value]) => `'${name}': '${value}',`)
    .join('\n  ')}
  };`
  )
  .join('\n\n')}
  
  export const effectStyles = css\`
  ${effectVars.map(([name, value]) => `--${name}: ${value};`).join('\n  ')}
\`;

  export const theme = css\`
  [data-theme='light'],
  :root {
    \${lightColors};
  }
  @media (prefers-color-scheme: dark) {
    :root {
      \${darkColors}
    }
  }
  [data-theme='dark'] {
    \${darkColors}
  }
  :root {
    ${Object.keys(colorVars)
      .filter((key) => !['light', 'dark'].includes(key))
      .map((key) => `\${${key}Colors}`)
      .join('\n')}
  }
\``;

const filepath = path.join(process.cwd(), 'src/theme.ts');
const config = prettier.resolveConfig.sync(filepath);
fs.outputFileSync(
  filepath,
  prettier.format(fileContent, { filepath, ...config })
);
