import path from 'path';

import chalk from 'chalk';
import cssnano from 'cssnano';
import { execa } from 'execa';
import fs from 'fs-extra';
import postcss from 'postcss';
import postcssNested from 'postcss-nested';

import { evaluateStyleElement } from './evaluateStyleElement.js';
import { utilsBuild } from './utilsBuild.js';

const cssProcesser = postcss([postcssNested]);

const outputFolderPath = path.join(process.cwd(), 'lib');
fs.emptyDirSync(outputFolderPath);

const reactSystemPath = path.join(process.cwd(), '../react/lib/es5');
const loadFolders = [
  'utils',
  'themeVariables',
  'selectorStyles',
  'components'
].map((folderName) => {
  const folderPath = path.join(reactSystemPath, folderName);
  const fileNames = fs.readdirSync(folderPath);
  if (folderName === 'utils') {
    const fontIndex = fileNames.indexOf('font.js');
    fileNames.splice(fontIndex, 1);
    const resetIndex = fileNames.indexOf('resetCss.js');
    fileNames.splice(resetIndex, 1);
    // we want resetCss, then fonts to be the first two things we ever input on the page
    fileNames.unshift('resetCss.js', 'font.js');
  }
  return [folderName, folderPath, fileNames];
});

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
        let classlessSelector;
        let classySelector;
        let outputStyles;
        let keyframes;
        switch (folderName) {
          case 'utils': {
            [outputStyles, keyframes] = utilsBuild(fileName, fileContent);
            break;
          }
          case 'themeVariables':
          case 'selectorStyles': {
            [outputStyles, keyframes] = evaluateStyleElement(
              fileContent[exportName]
            );
            break;
          }
          case 'components': {
            if (fileName === 'ThemeProvider.js') return;
            const {
              [exportName]: Component,
              baseStyles,
              baseStylesObject,
              classlessSelector: maybeClasslessSelector
            } = fileContent;
            ({ classySelector } = fileContent);

            classlessSelector = maybeClasslessSelector || classySelector;

            if (!classySelector) {
              throw new Error(
                `${path.relative(
                  process.cwd(),
                  path.join(folderPath, fileName)
                )} does not export either a "classySelector" value`
              );
            }
            [outputStyles, keyframes] = evaluateStyleElement(
              Component.__emotion_styles || baseStyles || baseStylesObject
            );
            break;
          }
          default: {
            throw new Error(`New unhandled folder "${folderName}" detected`);
          }
        }

        if (!outputStyles) return;

        await Promise.all(
          [
            [classlessOutputFolder, allClasslessStyles, classlessSelector],
            [classyOutputFolder, allClassyStyles, classySelector]
          ].map(async ([childOutputFolderPath, aggregateStyles, selector]) => {
            const input = `${keyframes}${
              selector ? `${selector} { ${outputStyles} }` : outputStyles
            }`;
            const { css: output } = await cssProcesser.process(input, {
              from: undefined
            });
            aggregateStyles.push(`\n/* ${folderName}/${fileName} */\n`);
            aggregateStyles.push(output);
            await outputFile(
              path.join(childOutputFolderPath, folderName, `${exportName}.css`),
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
  ].map(([childOutputFolderPath, aggregateStyles, postfix]) =>
    outputFile(
      path.join(childOutputFolderPath, `../tablekit.${postfix}.css`),
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
    const { css: output } = await cssMinifier.process(input, {
      from: undefined
    });
    await fs.outputFile(filepath.replace(/\.css$/gi, '.min.css'), output);
  })
);
