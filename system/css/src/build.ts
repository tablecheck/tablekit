// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable class-methods-use-this */
import path from 'path';

import cssnano from 'cssnano';
import { execa } from 'execa';
import fs from 'fs-extra';
import postcss from 'postcss';

import {
  ComponentFolderProcesser,
  ThemeVariablesFolderProcesser,
  UtilsFolderProcesser,
  FolderProcesser
} from './buildFolder.js';
import { outputFolderPath } from './constants.js';

const cssMinifier = postcss([cssnano({ preset: 'default' })]);

interface FolderProcessers {
  utils: UtilsFolderProcesser;
  components: ComponentFolderProcesser;
  themeVariables: ThemeVariablesFolderProcesser;
}

class CssBuilder {
  protected allClasslessStyles: string[] = [];

  protected allClassyStyles: string[] = [];

  protected allFiles: string[] = [];

  protected processers?: FolderProcessers;

  prebuild() {
    fs.emptyDirSync(outputFolderPath);
  }

  async processFolders(folderNames: (keyof FolderProcessers)[]) {
    const processers = await Promise.all(
      folderNames.map(async (folderName) => {
        const processer = this.getFolderProcesser(folderName);
        await processer.load();
        await processer.process();
        this.allClasslessStyles.push(...processer.getClasslessStyles());
        this.allClassyStyles.push(...processer.getClassyStyles());
        return processer;
      })
    );
    this.processers = processers.reduce(
      (r, p, i) => ({ ...r, [folderNames[i]]: p }),
      {} as NonNullable<typeof this.processers>
    );
  }

  getFolderProcesser(folderName: keyof FolderProcessers) {
    switch (folderName) {
      case 'components':
        return new ComponentFolderProcesser(folderName);
      case 'themeVariables':
        return new ThemeVariablesFolderProcesser(folderName);
      case 'utils':
        return new UtilsFolderProcesser(folderName);
      default:
        return new FolderProcesser(folderName);
    }
  }

  async outputCombinedCss() {
    if (!this.processers) throw new Error('Run processFolders before output');
    const resetStyles = this.processers.utils.getClassyStyles();
    const variableStyles = this.processers.themeVariables.getClassyStyles();
    await Promise.all(
      (
        [
          [variableStyles, 'variables'],
          [resetStyles, 'reset'],
          [this.allClasslessStyles, 'classless'],
          [this.allClassyStyles, 'classy']
        ] as const
      ).map(([aggregateStyles, postfix]) =>
        this.outputFile(
          path.join(outputFolderPath, `tablekit.${postfix}.css`),
          aggregateStyles.join('\n')
        )
      )
    );
  }

  async outputFile(filepath: string, content: string) {
    if (this.allFiles.includes(filepath))
      console.log(`Warning, overwriting ${filepath}`);
    this.allFiles.push(filepath);
    await fs.outputFile(filepath, content);
  }

  async formatOutput() {
    await execa(
      'prettier',
      [
        '--write',
        path.join(outputFolderPath, '**/*.css'),
        path.join(outputFolderPath, '*.css')
      ],
      {
        stdio: 'inherit'
      }
    );
    await Promise.all(
      this.allFiles.map(async (filepath) => {
        const input = await fs.readFile(filepath);
        const { css: output } = await cssMinifier.process(input, {
          from: undefined
        });
        await fs.outputFile(filepath.replace(/\.css$/gi, '.min.css'), output);
      })
    );
  }
}

const builder = new CssBuilder();
await builder.processFolders(['utils', 'themeVariables', 'components']);
await builder.outputCombinedCss();
await builder.formatOutput();
