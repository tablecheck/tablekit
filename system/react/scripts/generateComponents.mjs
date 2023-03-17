import path from 'path';

import fs from 'fs-extra';

if (process.env.CI) process.exit(0);

const outputFolderPath = path.join(process.cwd(), 'src/components');
fs.emptyDirSync(outputFolderPath);

const structuredFileNames = fs.readdirSync(
  path.join(process.cwd(), 'src/structuredComponents')
);

class ComponentBuilder {
  get pascalImportKey() {
    return `${this.importKey
      .substring(0, 1)
      .toUpperCase()}${this.importKey.substring(1)}`;
  }

  get fileName() {
    return `${this.pascalImportKey}.tsx`;
  }

  get filePath() {
    return path.join(outputFolderPath, this.fileName);
  }

  constructor(importedKey, importedValues) {
    this.importKey = importedKey;
    this.element = importedValues.element || 'div';
    this.variantStyles = importedValues.variantStyles;
    this.baseStyles = importedValues.baseStyles;
    this.coreStyles = importedValues.coreStyles;
    this.defaultProps = importedValues.defaultProps;
  }

  async build() {
    if (!this.isValidComponentImport()) return;
    const fileContent = [
      `/**
      * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
      * The exports here are generated from @tablecheck/tablekit-core
      * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
      */`,
      `import styled from '@emotion/styled';`,
      `import { ${this.importKey} } from '@tablecheck/tablekit-core';`
    ];
    if (this.element === 'button') {
      fileContent.push(`import * as React from 'react';`);
    }
    if (this.hasVariants()) {
      fileContent.push(
        `\nimport { buildVariantComponents, buildComponentWithVariants } from '../buildVariantComponents';`
      );
    }
    fileContent.push('');
    fileContent.push(
      `export type Props = ${this.importKey}.${
        this.defaultProps ? 'DefaultedProps' : 'Props'
      }${
        this.element === 'button'
          ? ' & React.ButtonHTMLAttributes<HTMLButtonElement>'
          : ''
      };`
    );
    if (this.hasVariants()) {
      fileContent.push(
        `export type ${this.pascalImportKey}Variant = ${this.importKey}.${this.pascalImportKey}Variant;`
      );
    }
    fileContent.push('');
    if (this.hasVariants()) {
      fileContent.push(`export const ${this.pascalImportKey}Base = styled.${this.element}<Omit<Props, 'data-variant'>>\`
      \${${this.importKey}.baseStyles}
      \`;`);
      fileContent.push(`export const ${this.pascalImportKey} = buildComponentWithVariants(
        ${this.importKey}.variantStyles,
        ${this.pascalImportKey}Base,
        {} as Props
        )`);
      fileContent.push(
        `${this.pascalImportKey}.displayName = '${this.pascalImportKey}';`
      );
      if (this.hasCoreStyles()) {
        fileContent.push(`const ${this.pascalImportKey}Core = styled.${this.element}<Props>\`
          \${${this.importKey}.coreStyles}
        \`;`);
      }
    } else {
      fileContent.push(`export const ${this.pascalImportKey} = styled.${this.element}<Props>\`
      \${${this.importKey}.baseStyles}
      \`;`);
    }
    const defaultProps = this.getDefaultProps();
    if (defaultProps) {
      fileContent.push(
        `${this.pascalImportKey}.defaultProps = ${JSON.stringify(defaultProps)}`
      );
    }

    if (this.hasVariants()) {
      fileContent.push(`export const Variant${
        this.pascalImportKey
      } = buildVariantComponents(
  ${this.importKey}.variantStyles,
  ${this.hasCoreStyles() ? `${this.pascalImportKey}Core` : this.pascalImportKey}
);`);
    }

    await fs.outputFile(this.filePath, fileContent.join('\n'));
  }

  isValidComponentImport() {
    if (!this.baseStyles) return false;
    return !structuredFileNames.includes(this.fileName);
  }

  hasVariants() {
    return (
      typeof this.variantStyles === 'object' &&
      Object.keys(this.variantStyles).length
    );
  }

  hasCoreStyles() {
    return !!this.coreStyles;
  }

  getDefaultProps() {
    const defaultProps = this.defaultProps ? { ...this.defaultProps } : {};
    if (this.element === 'button') {
      defaultProps.type = 'button';
    }
    return Object.keys(defaultProps).length ? defaultProps : undefined;
  }
}

const coreExports = await import('@tablecheck/tablekit-core');

await Promise.all(
  Object.entries(coreExports).map(([key, imports]) =>
    new ComponentBuilder(key, imports).build()
  )
);
