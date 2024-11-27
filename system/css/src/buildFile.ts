// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-classes-per-file, @typescript-eslint/explicit-module-boundary-types, class-methods-use-this */
import path from 'path';

import chalk from 'chalk';
import { outputFile } from 'fs-extra';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';

import { outputFolderPath } from './constants.js';
import { evaluateStyleElement } from './evaluateStyleElement.js';

const classlessOutputFolder = path.join(outputFolderPath, 'classless');
const classyOutputFolder = path.join(outputFolderPath, 'classy');

const cssProcesser = postcss([
  postcssNesting({
    noIsPseudoSelector: true
  })
]);

export class CssFileBuilder<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TFileContent extends Record<string, any> = Record<string, any>
> {
  protected folderName: string;

  protected fileName: string;

  protected fileContent: TFileContent;

  protected exportName: string;

  protected classlessSelectors: string[] = [];

  protected classySelectors: string[] = [];

  constructor(folderName: string, fileName: string, fileContent: TFileContent) {
    this.folderName = folderName;
    this.fileName = fileName;
    this.fileContent = { ...fileContent };
    [this.exportName] = fileName.split('.');
  }

  async build(): Promise<{ classless: string[]; classy: string[] }> {
    throw new Error('Implement in sub-class');
  }

  async buildCssFiles(
    outputStyles: string,
    keyframes: string,
    variantOutputStyles?: string
  ) {
    const [classless, classy] = await Promise.all([
      this.buildCssFile(
        classlessOutputFolder,
        `${keyframes}${this.buildCssString(
          this.classlessSelectors,
          outputStyles,
          variantOutputStyles
        )}`
      ),
      this.buildCssFile(
        classyOutputFolder,
        `${keyframes}${this.buildCssString(
          this.classySelectors,
          outputStyles,
          variantOutputStyles
        )}`
      )
    ]);
    return { classless, classy };
  }

  buildCssString(
    selectors: string[],
    outputStyles: string,
    variantOutputStyles = ''
  ) {
    if (!selectors || !selectors.length) return outputStyles;
    return `${selectors.join(',')} { ${outputStyles} ${variantOutputStyles} }`;
  }

  async buildCssFile(outputPath: string, input: string) {
    const { css: output } = await cssProcesser.process(input, {
      from: undefined
    });
    await outputFile(
      path.join(outputPath, this.folderName, `${this.exportName}.css`),
      output
    );
    return [`\n/* ${this.folderName}/${this.fileName} */\n`, output];
  }
}

export class UtilFileBuilder extends CssFileBuilder {
  async build() {
    if (!this.fileContent[this.exportName])
      throw new Error(
        `utils files must have a single export with the same name as the file`
      );
    const [outputStyles, keyframes] = evaluateStyleElement(
      this.fileContent[this.exportName]
    );
    return this.buildCssFiles(outputStyles, keyframes);
  }
}

export class ThemeVariablesBuilder extends CssFileBuilder {
  async build() {
    const [outputStyles, keyframes] = evaluateStyleElement(
      this.fileContent[this.exportName]
    );
    return this.buildCssFiles(outputStyles, keyframes);
  }
}

interface ComponentFileContent {
  element?: string;
  className?: string;
  classNameSelector?: string;
  selectors?: string[];
  fullStyles: string;
  variantStyles?: Record<string, string>;
}

export class ComponentBuilder extends CssFileBuilder<ComponentFileContent> {
  constructor(
    folderName: string,
    fileName: string,
    fileContent: ComponentFileContent
  ) {
    super(folderName, fileName, fileContent);

    if (this.fileContent.selectors) {
      this.fileContent.selectors = this.fileContent.selectors.map(
        (selector) => `${selector.trim()}:not(.custom)`
      );
    }
  }

  getClassySelectors() {
    const {
      element,
      className,
      classNameSelector,
      selectors = []
    } = this.fileContent;
    if (!className) {
      throw new Error(
        `className is missing in ${this.folderName}/${this.fileName}`
      );
      return selectors;
    }
    if (classNameSelector) return [classNameSelector];
    if (element === 'input') return [`input.${className}`];
    return [`.${className}`];
  }

  async build() {
    const { selectors = [], fullStyles, variantStyles } = this.fileContent;
    if (typeof fullStyles !== 'string') {
      console.log(
        chalk.yellow(
          `No export "fullStyles" found in "${this.folderName}/${this.fileName}", skipping file generation.`
        )
      );
      return { classy: [], classless: [] };
    }
    this.classySelectors = this.getClassySelectors();
    this.classlessSelectors = (
      selectors.length ? selectors : this.classySelectors
    ).filter((selector) => !!selector);
    if (!this.classlessSelectors) {
      throw new Error(
        `${path.relative(
          process.cwd(),
          path.join(this.folderName, this.fileName)
        )} does not export either a "className" or "selectors" value`
      );
    }
    const [outputStyles, keyframes] = evaluateStyleElement(fullStyles);
    let variantOutputStyles;
    if (variantStyles) {
      variantOutputStyles = Object.entries(variantStyles).reduce(
        (r, [key, style]) => {
          const [styles] = evaluateStyleElement(style);
          return `${r}&[data-variant='${key}']{${styles}}`;
        },
        ''
      );
    }
    return this.buildCssFiles(outputStyles, keyframes, variantOutputStyles);
  }
}
