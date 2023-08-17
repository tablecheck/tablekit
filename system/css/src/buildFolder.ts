// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-classes-per-file, @typescript-eslint/explicit-module-boundary-types */
import path from 'path';

import fs from 'fs-extra';

import {
  CssFileBuilder,
  ComponentBuilder,
  ThemeVariablesBuilder,
  UtilFileBuilder
} from './buildFile.js';

const coreSystemPath = path.join(process.cwd(), '../core/lib/es5');

export interface FileStyles {
  classless: string[];
  classy: string[];
}

export class FolderProcesser {
  protected folderName: string;

  protected fileNames?: string[];

  protected styles?: FileStyles[];

  protected get folderPath() {
    return path.join(coreSystemPath, this.folderName);
  }

  constructor(folderName: string) {
    this.folderName = folderName;
  }

  getClasslessStyles(): string[] {
    if (!this.styles) throw new Error('Need to load() and process() first');
    return this.styles.reduce(
      (r, map) => r.concat(map.classless),
      [] as string[]
    );
  }

  getClassyStyles(): string[] {
    if (!this.styles) throw new Error('Need to load() and process() first');
    return this.styles.reduce((r, map) => r.concat(map.classy), [] as string[]);
  }

  async load() {
    this.fileNames = await fs.readdir(this.folderPath);
  }

  async process() {
    if (!this.fileNames)
      throw new Error('Call .load() first and wait for it to finish');
    this.styles = await Promise.all(
      this.fileNames.map(async (fileName) => {
        const fileBuilder = await this.getFileBuilder(fileName);
        return fileBuilder.build();
      })
    );
  }

  async getFileContent(fileName: string) {
    return import(path.join(this.folderPath, fileName));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getFileBuilder(fileName: string): Promise<CssFileBuilder> {
    throw new Error(`Unknown folder ${this.folderPath}`);
  }
}

export class UtilsFolderProcesser extends FolderProcesser {
  async load() {
    await super.load();
    this.sortFiles();
  }

  sortFiles() {
    if (!this.fileNames)
      throw new Error('Need to run load() or super.load() first');
    const fontIndex = this.fileNames.indexOf('font.js');
    this.fileNames.splice(fontIndex, 1);
    const resetIndex = this.fileNames.indexOf('resetCss.js');
    this.fileNames.splice(resetIndex, 1);
    // we want resetCss, then fonts to be the first two things we ever input on the page
    this.fileNames.unshift('resetCss.js', 'font.js');
  }

  async getFileBuilder(fileName: string) {
    const fileContent = await this.getFileContent(fileName);
    return new UtilFileBuilder(this.folderName, fileName, fileContent);
  }

  async process() {
    await super.process();
  }
}

export class ThemeVariablesFolderProcesser extends FolderProcesser {
  async getFileBuilder(fileName: string) {
    const fileContent = await this.getFileContent(fileName);
    return new ThemeVariablesBuilder(this.folderName, fileName, fileContent);
  }
}

export class ComponentFolderProcesser extends FolderProcesser {
  async getFileBuilder(fileName: string) {
    const fileContent = await this.getFileContent(fileName);
    return new ComponentBuilder(this.folderName, fileName, fileContent);
  }
}
