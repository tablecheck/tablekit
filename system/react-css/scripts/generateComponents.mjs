import path from 'path';

import fs from 'fs-extra';

if (process.env.CI) process.exit(0);

const outputFolderPath = path.join(process.cwd(), 'src/components');
fs.emptyDirSync(outputFolderPath);

const structuredFileNames = fs.readdirSync(
  path.join(process.cwd(), 'src/structuredComponents')
);

function upperFirstChar(word) {
  return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
}

class ComponentBuilder {
  get pascalImportKey() {
    return upperFirstChar(this.importKey);
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
    this.className = importedValues.className;
    this.selectors = importedValues.selectors;
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
      `import type { ${this.importKey} } from '@tablecheck/tablekit-core';`,
      `import * as React from 'react';`
    ];
    if (this.hasVariants()) {
      fileContent.push(
        `\nimport { buildVariantComponents } from '../buildVariantComponents';`
      );
    }
    fileContent.push('');
    fileContent.push(
      `export type Props = ${this.importKey}.${
        this.defaultProps ? 'DefaultedProps' : 'Props'
      }${
        this.element === 'button'
          ? '& React.ButtonHTMLAttributes<HTMLButtonElement>'
          : ''
      };`
    );
    if (this.hasVariants()) {
      fileContent.push(
        `export type ${this.pascalImportKey}Variant = ${this.importKey}.${this.pascalImportKey}Variant;`
      );
    }
    const elementTypeName = upperFirstChar(this.element);
    const elementType = `HTML${
      this.element === 'textarea' ? 'TextArea' : elementTypeName
    }Element`;
    const attributesTypePrefix = ['div', 'span'].includes(this.element)
      ? ''
      : elementTypeName;
    fileContent.push(
      '',
      `export const ${
        this.pascalImportKey
      } = React.forwardRef<${elementType}, Props & React.${attributesTypePrefix}HTMLAttributes<${elementType}>>((props, ref) => <${
        this.element
      } ${this.getDefaultAttributes()} {...props} ref={ref} className={\`\${(props.className || '')} ${this.getClassName()}\`} />);`
    );

    if (this.hasVariants()) {
      fileContent.push(`export const Variant${
        this.pascalImportKey
      } = buildVariantComponents(
  ${this.importKey}.variantStyles,
  '${this.getClassName()}',
  ${this.importKey}.element
);`);
    }

    await fs.outputFile(this.filePath, fileContent.join('\n'));
  }

  getClassName() {
    if (this.pascalImportKey === 'InputLikeButton') return 'input';
    return this.className || '';
  }

  isValidComponentImport() {
    return (
      this.hasValidSelectors() && !structuredFileNames.includes(this.fileName)
    );
  }

  hasValidSelectors() {
    if (this.className) return true;
    if (!this.element) return false;
    const defaultProps = this.getDefaultProps();
    return defaultProps && !!defaultProps.type;
  }

  hasVariants() {
    return (
      typeof this.variantStyles === 'object' &&
      Object.keys(this.variantStyles).length
    );
  }

  getDefaultAttributes() {
    const defaultProps = this.getDefaultProps();
    return Object.entries(defaultProps || {})
      .map(([key, value]) => {
        if (this.pascalImportKey === 'InputLikeButton' && key === 'role')
          return '';
        if (typeof value === 'string') return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(' ');
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
