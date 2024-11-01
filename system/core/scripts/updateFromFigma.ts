// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines, @typescript-eslint/naming-convention, class-methods-use-this, max-classes-per-file */
import path from 'node:path';

import chalk from 'chalk';
import decompress from 'decompress';
import fs from 'fs-extra';

import { prettierWrite } from './prettierWrite';

const DO_NOT_EDIT_COMMENT = `/**
* DO NOT EDIT; File is generated from figma, see './updateFromFigma.ts' for update instructions
*/`;

type CssFileType = {
  name: string;
  value: string;
}[];

type EffectsFileType = Record<'light' | 'dark', Record<string, string>>;

/**
 * To use this file, install Advanced Variables plugin; https://www.figma.com/community/plugin/1260472771849439434
 * Open up Tablekit Components (3.0), clone it to your drafts (as we can't run plugins on files we can't edit)
 * Run the plugin, turn on "Place variables in different folders..." and "Effect styles".
 * Use `CSS` and `RGBa` as the output options
 * Run `npm run update:figma <filepath of downloaded zip file>`
 */

class Formatter {
  constructor(
    private readonly contents: {
      effects: EffectsFileType;
      borderRadius: CssFileType;
      spacing: CssFileType;
      primitives: CssFileType;
      lightTheme: CssFileType;
      darkTheme: CssFileType;
    }
  ) {
    Object.values(this.contents).forEach((content) => {
      if (!Array.isArray(content)) return;
      content.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  public outputFile() {
    return `${this.prologue()}

${this.sentimentColorsType()}

// The following are duplicated as extensions and plugins need the '--name' format
// but we need objects exported for usage with certain 3rd party libraries or when computing colours

${this.css(this.contents.lightTheme, 'lightColors')}

${this.object(this.contents.lightTheme, 'lightColors')}

${this.css(this.contents.darkTheme, 'darkColors')}

${this.object(this.contents.darkTheme, 'darkColors')}

${this.css(this.contents.primitives, 'utilityColors')}

${this.object(this.contents.primitives, 'utilityColors')}

${this.css(this.contents.spacing, 'spacing')}

${this.object(this.contents.spacing, 'spacing', (v) => parseInt(v, 10))}

${this.css(this.contents.borderRadius, 'borderRadius')}

${this.object(this.contents.borderRadius, 'borderRadius', (v) =>
  parseInt(v, 10)
)}

${this.effect(this.contents.effects.light, 'light')}

${this.effect(this.contents.effects.dark, 'dark')}

export const theme = css\`
  :root {
    \${spacing}
    \${borderRadius}
    \${utilityColors}
  }
  \${themedCss({
    selector: '',
    light: css\`
      \${lightColors};
      \${lightEffectStyles}
    \`,
    dark: css\`
      \${darkColors};
      \${darkEffectStyles}
    \`
  })}
\`;
`;
  }

  private prologue() {
    return `// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { css, themedCss } from '../utils';

${DO_NOT_EDIT_COMMENT}`;
  }

  private sentimentColorsType() {
    return `export type SentimentColors =
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning';`;
  }

  private combineCss(...contents: CssFileType[]) {
    return ([] as CssFileType)
      .concat(...contents)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private object(
    content: CssFileType,
    varName: string,
    parse?: (v: string) => unknown
  ) {
    return `export const ${varName}Object = {
  ${content
    .map(
      ({ name, value }) =>
        `'${name.replace(/--/, '')}': ${JSON.stringify(
          parse ? parse(value) : value
        )},`
    )
    .join('\n  ')}
  };`;
  }

  private css(
    content: CssFileType,
    varName: string,
    colorScheme?: 'light' | 'dark'
  ) {
    return `export const ${varName} = css\`
      ${
        colorScheme
          ? `color-scheme: ${colorScheme};
`
          : ''
      }  ${content
      .map(({ name, value }) => this.formatCssProp(name, value))
      .join('\n  ')}
\`;`;
  }

  private formatCssProp(name: string, value: string) {
    return `${name}: ${value};`;
  }

  private effect(effect: Record<string, string>, mode: string) {
    return `export const ${mode}EffectStyles = css\`
  ${Object.entries(effect)
    .map(([size, value]) => `--elevation-${size}: ${value};`)
    .join('\n  ')}
\`;`;
  }
}

class Updater {
  private tempDir = './temp';

  private allCssProperties = new Set<string>();

  private replacements = new Map<RegExp, string>();

  constructor(private readonly filePath: string) {
    if (!filePath) {
      console.error('Please provide a file path');
      process.exit(1);
    }
  }

  public async exec() {
    await this.setupTempDir();
    await this.decompress();
    const contents = await this.loadFiles();
    await this.process(contents);
    await this.writeThemeFile(contents);
    await this.writeTypesFile();
    await this.cleanup();
  }

  private async setupTempDir() {
    await fs.remove(this.tempDir);
    await fs.ensureDir(this.tempDir);
  }

  private async decompress() {
    await decompress(this.filePath, this.tempDir);
  }

  private async cleanup() {
    await fs.remove(this.tempDir);
  }

  private async writeTypesFile() {
    const typesContent = `${DO_NOT_EDIT_COMMENT}
export interface TableKitCSSProperties {
  ${Array.from(this.allCssProperties.values())
    .sort()
    .map((name) => `'${name}'?: string;`)
    .join('\n')}
}`;

    await prettierWrite('themeVariables/types.gen.ts', typesContent);
  }

  private async writeThemeFile(
    contents: Awaited<ReturnType<typeof this.loadFiles>>
  ) {
    await prettierWrite(
      'themeVariables/theme.ts',
      new Formatter(contents).outputFile()
    );
  }

  private async loadFiles() {
    const primitiveFiles = await fs.readdir(
      path.join(this.tempDir, 'variables/Primitives/Color')
    );
    const [effects, borderRadius, spacing, primitives, lightTheme, darkTheme] =
      await Promise.all([
        this.loadEffects('styles/effects/index.css'),
        this.loadCss('variables/Radius/Mode 1/index.css'),
        this.loadCss('variables/Spacing/Mode 1/index.css'),
        Promise.all(
          primitiveFiles.map((fileName) =>
            this.loadCss(`variables/Primitives/Color/${fileName}`)
          )
        ),
        this.loadCss('variables/Theme/Light/index.css'),
        this.loadCss('variables/Theme/Dark/index.css')
      ]);
    return {
      effects,
      borderRadius,
      spacing,
      primitives: primitives.flat(),
      lightTheme,
      darkTheme
    };
  }

  private async process({
    borderRadius,
    spacing,
    primitives,
    lightTheme,
    darkTheme
  }: Awaited<ReturnType<typeof this.loadFiles>>) {
    [borderRadius, spacing, primitives, lightTheme, darkTheme].forEach(
      (block) => {
        this.replaceRemovals(block);
        this.extractCssProperties(block);
        block.sort((a, b) => a.name.localeCompare(b.name));
      }
    );
    this.checkForMissingVars(lightTheme, darkTheme);
  }

  private extractCssProperties(content: CssFileType) {
    content.forEach(({ name }) => {
      this.allCssProperties.add(name);
    });
  }

  private replaceRemovals(content: CssFileType) {
    content.forEach((c) => {
      this.replacements.forEach((add, remove) => {
        c.name = c.name.replace(remove, add);
        c.value = c.value.replace(remove, add);
      });
    });
  }

  private checkForMissingVars(lightTheme: CssFileType, darkTheme: CssFileType) {
    const lightVarNames = lightTheme.map(({ name }) => name);
    const darkVarNames = darkTheme.map(({ name }) => name);
    const missingLightVars = darkVarNames.filter(
      (name) => !lightVarNames.includes(name)
    );
    const missingDarkVars = lightVarNames.filter(
      (name) => !darkVarNames.includes(name)
    );

    if (missingLightVars.length) {
      console.warn(
        chalk.bold.red('Missing light vars:'),
        missingLightVars.join(', ')
      );
    }
    if (missingDarkVars.length) {
      console.warn(
        chalk.bold.red('Missing dark vars:'),
        missingDarkVars.join(', ')
      );
    }
  }

  private async loadEffects(filePath: string) {
    const content = await fs.readFile(
      path.join(this.tempDir, filePath),
      'utf-8'
    );
    const lines = content
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.startsWith('.') || l.startsWith('box-shadow'));
    const effectsObject = {};
    let currentKey: undefined | [string, string];

    lines.forEach((line) => {
      if (line.startsWith('.')) {
        const key = line.replace(/[. {]+/gi, '');
        const [, mode, size] = key.split('-');
        if (!mode || !size) {
          currentKey = undefined;
          return;
        }
        currentKey = [mode, size];
      } else if (currentKey) {
        if (!effectsObject[currentKey[0]]) {
          effectsObject[currentKey[0]] = {};
        }
        effectsObject[currentKey[0]][currentKey[1]] = line
          .replace(/box-shadow:/gi, '')
          .trim();
      }
    });

    return effectsObject as EffectsFileType;
  }

  private async loadCss(filePath: string) {
    const content = await fs.readFile(
      path.join(this.tempDir, filePath),
      'utf-8'
    );
    const lines = content
      .split('\n')
      .map((l) => l.trim())
      .filter((line) => line.trim().startsWith('--'));
    const mappedLines = lines.map((l) => {
      const [name, value] = l.split(':');
      return { name: name.trim(), value: value.replace(/;$/, '').trim() };
    });
    if (filePath.includes('Primitives')) {
      const fileName = path.basename(filePath, '.css');
      mappedLines.forEach(({ name }) => {
        this.replacements.set(
          new RegExp(`(^|var[(])${name}([)]|$)`, 'ig'),
          `$1${name.replace(`--${fileName}-`, '--')}$2`
        );
      });
    }
    return mappedLines;
  }
}

await new Updater(process.argv[2]).exec();
