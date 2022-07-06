import path from 'path';

import fs from 'fs-extra';
import chalk from 'chalk';
import { execa } from 'execa';
import { css } from '@emotion/react';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssNested from 'postcss-nested';
import { utilsBuild } from './utilsBuild.js';

const cssProcesser = postcss([postcssNested]);

const outputFolderPath = path.join(process.cwd(), 'lib');
fs.emptyDirSync(outputFolderPath);

const reactSystemPath = path.join(process.cwd(), '../react/lib/es5');
const loadFolders = ['utils', 'styles', 'components'].map((folderName) => {
  const folderPath = path.join(reactSystemPath, folderName);
  return [folderName, folderPath, fs.readdirSync(folderPath)];
});

function innerEvaluateStyleElement(style, keyframes) {
  if (!style) return '';
  if (typeof style === 'function')
    throw new Error(
      `Cannot parse dynamic CSS, use attribute selectors not props`
    );
  if (Array.isArray(style))
    return style.map((s) => innerEvaluateStyleElement(s, keyframes)).join('');
  if (style.anim) {
    keyframes.push(innerEvaluateStyleElement(style.styles, keyframes));
    return style.name;
  }
  if (style.styles) return innerEvaluateStyleElement(style.styles, keyframes);
  if (typeof style === 'object') return innerEvaluateStyleElement(css(style));
  return style.toString();
}
function evaluateStyleElement(style) {
  const keyframes = [];
  return [
    innerEvaluateStyleElement(style, keyframes)
      .replace(/(^|;)label:[a-z]+;/gi, '$1')
      .replace(/;+|^;/gi, ';'),
    keyframes.join('')
  ];
}
const classlessOutputFolder = path.join(outputFolderPath, 'classless');
const classyOutputFolder = path.join(outputFolderPath, 'classy');

const allClasslessStyles = [];
const allClassyStyles = [];
const allFiles = [];

async function outputFile(filepath, content) {
  if (allFiles.includes(filepath))
    console.log(`Warning, overwriting ${filepath}`);
  allFiles.push(filepath);
  await fs.outputFile(filepath, content);
}

await Promise.all(
  loadFolders.map(([folderName, folderPath, fileNames]) =>
    Promise.all(
      fileNames.map(async (fileName) => {
        const fileContent = await import(path.join(folderPath, fileName));
        const exportName = fileName.split('.')[0];
        if (folderName !== 'utils' && !fileContent[exportName]) {
          console.log(
            chalk.yellow(
              `No export "${exportName}" found in "${folderName}/${fileName}", skipping file generation.`
            )
          );
          return;
        }
        let baseElement;
        let baseSelector;
        let outputStyles;
        let keyframes;
        switch (folderName) {
          case 'utils': {
            [outputStyles, keyframes] = utilsBuild(fileName, fileContent);
            break;
          }
          case 'styles': {
            [outputStyles, keyframes] = evaluateStyleElement(
              fileContent[exportName].styles
            );
            break;
          }
          case 'components': {
            const {
              [exportName]: Component,
              baseStyles,
              baseElement: maybeBaseElement,
              baseSelector: maybeBaseSelector
            } = fileContent;

            baseElement = maybeBaseElement || maybeBaseSelector;
            baseSelector = maybeBaseSelector || maybeBaseElement;

            if (!baseElement || !baseSelector) {
              throw new Error(
                `${path.relative(
                  process.cwd(),
                  path.join(folderPath, fileName)
                )} does not export either a "baseSelector" or "baseElement" value`
              );
            }
            [outputStyles, keyframes] = evaluateStyleElement(
              Component.__emotion_styles || baseStyles
            );
            break;
          }
        }

        if (!outputStyles) return;

        await Promise.all(
          [
            [classlessOutputFolder, allClasslessStyles, baseElement],
            [classyOutputFolder, allClassyStyles, baseSelector]
          ].map(async ([outputFolderPath, aggregateStyles, selector]) => {
            const input = `${keyframes}${
              selector ? `${selector} { ${outputStyles} }` : outputStyles
            }`;
            const { css: output } = await new Promise((resolve, reject) =>
              cssProcesser
                .process(input, { from: undefined })
                .then(resolve, reject)
            );
            aggregateStyles.push(output);
            await outputFile(
              path.join(outputFolderPath, folderName, `${exportName}.css`),
              output
            );
          })
        );
      })
    )
  )
);

await Promise.all(
  [
    [classlessOutputFolder, allClasslessStyles, 'classless'],
    [classyOutputFolder, allClassyStyles, 'classy']
  ].map(([outputFolderPath, aggregateStyles, postfix]) =>
    outputFile(
      path.join(outputFolderPath, `../tablekit.${postfix}.css`),
      aggregateStyles.join('\n')
    )
  )
);

await execa(
  'prettier',
  [
    '--write',
    path.join(outputFolderPath, '**/*'),
    path.join(outputFolderPath, '*')
  ],
  {
    stdio: 'inherit'
  }
);

const cssMinifier = postcss([cssnano({ preset: 'default' })]);
await Promise.all(
  allFiles.map(async (filepath) => {
    const input = await fs.readFile(filepath);
    const { css: output } = await new Promise((resolve, reject) =>
      cssMinifier.process(input, { from: undefined }).then(resolve, reject)
    );
    await fs.outputFile(filepath.replace(/\.css$/gi, '.min.css'), output);
  })
);
