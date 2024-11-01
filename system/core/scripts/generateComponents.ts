// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-classes-per-file, max-lines */
import path from 'path';

import fs from 'fs-extra';

import { prettierWrite } from './prettierWrite';

if (process.env.CI) process.exit(0);

const cssOutputFolderPath = path.resolve(process.cwd(), '../react-css');
const reactOutputFolderPath = path.resolve(process.cwd(), '../react');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

abstract class ComponentBuilder {
  static headerComment = `/**
    * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
    * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
    */`;

  protected importKey: string;

  protected element: string;

  protected filePath: string;

  protected structuredFileNames: string[];

  protected fixedProps: string[];

  protected defaultProps: [string, string][];

  protected configurableProps: [string, string][];

  protected variantStyles?: object;

  get imports() {
    return [
      `import { ${this.importKey} } from '@tablecheck/tablekit-core';`,
      `import * as React from 'react';`
    ];
  }

  get localImports(): string[] {
    const imports = [] as string[];
    if (this.configurableProps.length) {
      imports.push(`import { getConfigDefault } from '../config';`);
    }
    return imports;
  }

  get pascalImportKey() {
    return capitalize(this.importKey);
  }

  get fileName() {
    return `${this.pascalImportKey}.tsx`;
  }

  get elementType() {
    return `HTML${this.reactElementType}Element`;
  }

  get reactHtmlAttributesType() {
    if (['span', 'div'].includes(this.element))
      return `React.HTMLAttributes<${this.elementType}>`;
    return `React.${
      this.reactElementType === 'TextArea' ? 'Textarea' : this.reactElementType
    }HTMLAttributes<${this.elementType}>`;
  }

  get reactElementType() {
    if (this.element === 'a') return 'Anchor';
    if (this.element === 'textarea') return 'TextArea';
    return capitalize(this.element);
  }

  constructor(outputFolderPath, importedKey, importedValues) {
    this.fixedProps = [];
    this.importKey = importedKey;
    this.element = importedValues.element || 'div';
    const defaultProps = importedValues.defaultProps
      ? { ...importedValues.defaultProps }
      : {};
    this.defaultProps = Object.entries(defaultProps);
    this.configurableProps = Object.entries(
      importedValues.configurableDefaultProps || {}
    );
    this.filePath = path.join(
      outputFolderPath,
      'src/components',
      this.fileName
    );
    fs.emptyDirSync(path.join(outputFolderPath, 'src/components'));
    this.structuredFileNames = fs.readdirSync(
      path.join(outputFolderPath, 'src/structuredComponents')
    );
  }

  async build() {
    if (!this.isValidComponentImport()) return;
    await prettierWrite(this.filePath, this.buildFileContent().join('\n'));
  }

  abstract buildFileContent(): string[];

  initFileContent() {
    const content = [
      ComponentBuilder.headerComment,
      ...this.imports,
      '',
      ...this.localImports
    ];
    if (this.localImports.length) {
      content.push('');
    }
    content.push('');
    return content;
  }

  getBasePropsType() {
    return this.hasVariants() ? `Omit<Props, 'data-variant'>` : 'Props';
  }

  isValidComponentImport() {
    return !this.structuredFileNames.includes(this.fileName);
  }

  hasVariants() {
    return (
      typeof this.variantStyles === 'object' &&
      Object.keys(this.variantStyles).length
    );
  }

  // eslint-disable-next-line class-methods-use-this
  formatKey(key) {
    if (key.match(/[^a-zA-Z0-9]/)) {
      return `['${key}']`;
    }
    return `.${key}`;
  }

  getPropExport() {
    return `export type Props = ${this.importKey}.${
      this.defaultProps.length ? 'DefaultedProps' : 'Props'
    } & ${this.reactHtmlAttributesType};`;
  }

  writeForwardRefComponent({
    varName,
    elementName,
    omitVariants,
    displayName,
    fixedProps = this.fixedProps || []
  }) {
    return `export const ${varName} = ${this.writeForwardRefComponentFunction({
      elementName,
      omitVariants,
      fixedProps
    })};
    ${varName}.displayName = \`${displayName || varName}\`;`;
  }

  writeForwardRefComponentFunction({
    elementName,
    omitVariants,
    fixedProps: fixedPropsArg = this.fixedProps || []
  }) {
    const fixedProps = [...fixedPropsArg];
    this.defaultProps.forEach(([key]) => {
      fixedProps.push(
        `${key}={props${this.formatKey(key)} ?? (${
          this.importKey
        }.defaultProps${this.formatKey(key)} as never)}`
      );
    });
    if (
      this.element === 'button' &&
      !this.defaultProps.find(([key]) => key === 'type')
    ) {
      fixedProps.push(`type="button" `);
    }
    this.configurableProps.forEach(([propKey, configKey]) => {
      fixedProps.push(
        `${propKey}={props${this.formatKey(
          propKey
        )} ?? getConfigDefault('${configKey}')}`
      );
    });
    const propsType = omitVariants ? 'Omit<Props, "data-variant">' : 'Props';
    return `React.forwardRef<${this.elementType}, ${propsType} & ${
      this.reactHtmlAttributesType
    }>((props, ref) => <${elementName} {...props} ${fixedProps.join(
      ' '
    )} ref={ref} />)`;
  }
}

class CssComponentBuilder extends ComponentBuilder {
  private className: string;

  private selectors: string[];

  constructor(importedKey, importedValues) {
    super(cssOutputFolderPath, importedKey, importedValues);
    this.className =
      this.pascalImportKey === 'InputLikeButton'
        ? 'input'
        : importedValues.className || '';
    this.selectors = importedValues.selectors;
    this.fixedProps = this.className
      ? [`className={\`\${(props.className ?? '')} ${this.className}\`}`]
      : [];
  }

  isValidComponentImport() {
    if (!this.hasValidSelectors()) {
      console.warn(
        `Skipping ${this.importKey} as it does not have valid selectors`
      );
      return false;
    }
    return super.isValidComponentImport();
  }

  hasValidSelectors() {
    if (this.pascalImportKey === 'Spinner') return true;
    if (this.className) return true;
    if (!this.element) return false;
    return !!this.defaultProps.find(([key]) => key === 'type');
  }

  buildFileContent() {
    const fileContent = this.initFileContent();
    fileContent.push(this.getPropExport());
    if (this.hasVariants()) {
      fileContent.push(
        `export type ${this.pascalImportKey}Variant = ${this.importKey}.${this.pascalImportKey}Variant;`
      );
    }
    fileContent.push('');
    fileContent.push(
      this.writeForwardRefComponent({
        varName: this.pascalImportKey,
        elementName: this.element,
        omitVariants: false,
        displayName: this.pascalImportKey
      })
    );

    if (this.hasVariants()) {
      fileContent.push(
        `export const Variant${this.pascalImportKey} = Object.entries(${
          this.importKey
        }.variantStyles).reduce(
        (result, [key, value]) => {
            result[\`\${key.charAt(0).toUpperCase()}\${key.slice(1).toLowerCase()}\`] = ${this.writeForwardRefComponentFunction(
              {
                elementName: this.element,
                omitVariants: true,
                fixedProps: [...this.fixedProps, `data-variant={key}`]
              }
            )};
            return result;
        },
        {} as Record<Capitalize<${
          this.pascalImportKey
        }Variant>, React.ComponentType<${this.getBasePropsType()}>>
        );`
      );
    }

    return fileContent;
  }
}

class ReactComponentBuilder extends ComponentBuilder {
  private fullStyles?: string;

  private coreStyles?: string;

  get variantComponentsName() {
    return `${this.importKey}VariantComponents`;
  }

  get styledComponentsName() {
    return `${this.importKey}StyledComponents`;
  }

  get imports() {
    return [`import styled from '@emotion/styled';`, ...super.imports];
  }

  get localImports() {
    return [
      ...super.localImports,
      `import { extractDisplayName } from '../utils';`
    ];
  }

  constructor(importedKey, importedValues) {
    super(reactOutputFolderPath, importedKey, importedValues);
    this.variantStyles = importedValues.variantStyles;
    this.fullStyles = importedValues.fullStyles;
    this.coreStyles = importedValues.coreStyles;
  }

  isValidComponentImport() {
    if (typeof this.fullStyles !== 'string') {
      console.warn(
        `Skipping ${this.importKey} as it does not export 'fullStyles'`
      );
      return false;
    }
    return super.isValidComponentImport();
  }

  buildFileContent() {
    const fileContent = this.initFileContent();
    fileContent.push(this.getPropExport());
    if (this.hasVariants()) {
      fileContent.push(
        `export type ${this.pascalImportKey}Variant = ${this.importKey}.${this.pascalImportKey}Variant;`
      );
    }
    fileContent.push('');
    fileContent.push(
      `const Base = styled.${this.element}<${this.getBasePropsType()}>\`\${${
        this.importKey
      }.fullStyles}\`;`
    );
    if (this.coreStyles) {
      fileContent.push(
        `const Core = styled.${this.element}<${this.getBasePropsType()}>\`\${${
          this.importKey
        }.coreStyles}\`;`
      );
    }

    if (this.hasVariants()) {
      fileContent.push(`const ${this.variantComponentsName} = Object.entries(${
        this.importKey
      }.variantStyles).reduce(
        (result, [key, value]) => ({ ...result,
          [\`\${key.charAt(0).toUpperCase()}\${key.slice(1).toLowerCase()}\`]: styled(${
            this.coreStyles ? 'Core' : 'Base'
          })\`\${value}\`
        }),
        {} as Record<Capitalize<${this.pascalImportKey}Variant>, typeof Base>
      );`);
    }

    fileContent.push(this.buildStyledComponents());
    fileContent.push('');

    if (!this.hasVariants()) {
      fileContent.push(
        this.writeForwardRefComponent({
          elementName: `${this.styledComponentsName}.Base`,
          omitVariants: false,
          varName: `${this.pascalImportKey}`,
          shouldExport: true
        })
      );
      return fileContent;
    }
    fileContent.push(
      this.writeForwardRefComponent({
        elementName: `${this.styledComponentsName}.Base`,
        omitVariants: false,
        varName: `${this.pascalImportKey}`,
        shouldExport: true
      })
    );

    if (this.coreStyles) {
      fileContent.push(
        this.writeForwardRefComponent({
          elementName: `${this.styledComponentsName}.Core`,
          omitVariants: true,
          varName: `${this.pascalImportKey}Base`,
          shouldExport: true
        })
      );
    } else {
      fileContent.push(
        `export const ${this.pascalImportKey}Base = ${this.pascalImportKey};`
      );
    }

    fileContent.push(`export const Variant${
      this.pascalImportKey
    } = Object.fromEntries(Object.entries(${this.variantComponentsName}).map(
      ([key, Component]) => {
        ${this.writeForwardRefComponent({
          elementName: 'Component',
          omitVariants: true,
          varName: 'VariantComponent',
          displayName: `${this.pascalImportKey}\${key}`
        })}
        return [key, VariantComponent];
      })) as never as Record<Capitalize<${
        this.pascalImportKey
      }Variant>, typeof ${this.pascalImportKey}Base>;`);

    return fileContent;
  }

  buildStyledComponents() {
    const elements = [] as string[];
    if (this.coreStyles) {
      elements.push('Core');
    }
    if (this.hasVariants()) {
      elements.push(`Base: styled(Base)<Props>\`
      \${Object.entries(${this.importKey}.variantStyles).map(
        ([v, s]) => \`&[data-variant="\${v}"] { \${s} }\`
      )}
      \``);
      elements.push(`...${this.variantComponentsName}`);
    } else {
      elements.push('Base');
    }
    return `export const ${this.styledComponentsName} = {${elements.join(
      ','
    )}} as const;`;
  }

  writeForwardRefComponent({
    varName,
    elementName,
    omitVariants,
    displayName = '',
    fixedProps: fixedPropsArg = this.fixedProps || [],
    shouldExport = false
  }) {
    return `const _${varName} = ${super.writeForwardRefComponentFunction({
      elementName,
      omitVariants,
      fixedProps: fixedPropsArg
    })};
    _${varName}.displayName = \`${displayName || varName}\`;
    ${
      shouldExport ? 'export' : ''
    } const ${varName} = _${varName} as never as typeof _${varName} & {
      withComponent: typeof ${elementName}['withComponent'];
    };
    ${varName}.withComponent = ((withComponent: any) => {
      const Styled = ${elementName}.withComponent(withComponent);
      const component = ${this.writeForwardRefComponentFunction({
        elementName: 'Styled',
        omitVariants,
        fixedProps: fixedPropsArg
      })};
      component.displayName = \`${
        displayName || varName
      }(\${extractDisplayName(withComponent)})\`;
      return component;
    }) as never;`;
  }
}

const coreExports = await import(
  path.join(process.cwd(), 'lib', 'es5', 'index.js')
);

await Promise.all(
  Object.entries(coreExports).map(([key, imports]) =>
    Promise.all([
      new ReactComponentBuilder(key, imports).build(),
      new CssComponentBuilder(key, imports).build()
    ])
  )
);
