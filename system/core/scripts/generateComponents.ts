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

interface PropsType {
  key: string;
  value: string;
  type: 'value' | 'string';
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

  protected fixedProps: PropsType[];

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
    this.variantStyles = importedValues.variantStyles;
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
    return !!this.getVariants().length;
  }

  getVariants() {
    return typeof this.variantStyles === 'object'
      ? Object.keys(this.variantStyles)
      : [];
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

  abstract writeForwardRefComponent({
    varName,
    elementName,
    omitVariants,
    displayName,
    fixedProps = this.fixedProps || []
  }): string;

  writeForwardRefComponentFunction({
    elementName,
    omitVariants,
    fixedProps: fixedPropsArg = this.fixedProps || []
  }) {
    const props = this.buildProps(fixedPropsArg)
      .map(
        ({ key, value, type }) =>
          `${key}=${type === 'string' ? `"${value}"` : `{${value}}`}`
      )
      .join(' ');
    const propsType = omitVariants ? 'Omit<Props, "data-variant">' : 'Props';
    return `React.forwardRef<${this.elementType}, ${propsType} & ${this.reactHtmlAttributesType}>((props, ref) => <${elementName} {...props} ${props} ref={ref} />)`;
  }

  protected buildProps(fixedProps: PropsType[]): PropsType[] {
    const props = [...fixedProps];
    this.defaultProps.forEach(([key]) => {
      props.push({
        key,
        type: 'value',
        value: this.formatDefaultProp(key)
      });
    });
    if (
      this.element === 'button' &&
      !this.defaultProps.find(([key]) => key === 'type')
    ) {
      props.push({ key: 'type', type: 'string', value: 'button' });
    }
    this.configurableProps.forEach(([propKey, configKey]) => {
      props.push({
        key: propKey,
        type: 'value',
        value: this.formatConfigurableProp(propKey, configKey)
      });
    });
    return props;
  }

  protected formatDefaultProp(key: string) {
    return `props${this.formatKey(key)} ?? (${
      this.importKey
    }.defaultProps${this.formatKey(key)} as never)`;
  }

  protected formatConfigurableProp(key, configKey) {
    return `props${this.formatKey(key)} ?? getConfigDefault('${configKey}')`;
  }
}

class CssComponentBuilder extends ComponentBuilder {
  private className: string;

  get localImports() {
    return [
      ...super.localImports,
      this.hasVariants()
        ? `import { buildVariantComponents, buildWithComponent } from '../utils';`
        : `import { buildWithComponent } from '../utils';`
    ];
  }

  constructor(importedKey, importedValues) {
    super(cssOutputFolderPath, importedKey, importedValues);
    this.className =
      this.pascalImportKey === 'InputLikeButton'
        ? 'input'
        : importedValues.className || '';
    this.fixedProps = this.className
      ? [
          {
            key: 'className',
            type: 'string',
            value: this.className
          }
        ]
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
        displayName: this.pascalImportKey,
        shouldExport: true
      })
    );

    if (this.hasVariants()) {
      fileContent.push(
        `export const Variant${this.pascalImportKey} = buildVariantComponents<
            ${this.getVariants()
              .map((v) => `'${v}'`)
              .join(' | ')},
            Props,
            '${this.element}'
        >({
          variants: ${JSON.stringify(this.getVariants())},
          className: '${this.className}',
          element: '${this.element}',
          displayName: '${this.pascalImportKey}'
        });`
      );
    }

    return fileContent;
  }

  writeForwardRefComponent({
    varName,
    elementName,
    omitVariants = false,
    displayName = '',
    fixedProps: fixedPropsArg = this.fixedProps || [],
    shouldExport = false
  }) {
    const propsType = omitVariants ? 'Omit<Props, "data-variant">' : 'Props';
    const props = this.buildProps(fixedPropsArg);
    const classNameProp = props.find(({ key }) => key === 'className');
    const append: string[] = [
      `className: ${classNameProp ? `'${classNameProp.value}'` : 'undefined'}`
    ];
    const additionalProps = props.filter(({ key }) => key !== 'className');
    if (additionalProps.length) {
      append.push(
        `additionalProps: { ${additionalProps
          .map(
            ({ key, value, type }) =>
              `'${key}': ${type === 'string' ? `'${value}'` : value}`
          )
          .join(', ')} }`
      );
    }
    return `${
      shouldExport ? 'export ' : ''
    }const ${varName} = buildWithComponent<${
      this.elementType
    }, ${propsType} & ${
      this.reactHtmlAttributesType
    }>({ tag: '${elementName}', displayName: '${
      displayName || varName
    }', ${append.join(', ')}});`;
  }

  protected formatDefaultProp(key: string) {
    return `(${this.importKey}.defaultProps${this.formatKey(key)} as never)`;
  }

  // eslint-disable-next-line class-methods-use-this
  protected formatConfigurableProp(key, configKey) {
    return `{ toString: () => getConfigDefault('${configKey}') }`;
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
