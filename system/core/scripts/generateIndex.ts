import path from 'path';

import fs from 'fs-extra';
// eslint-disable-next-line @tablecheck/forbidden-imports
import _ from 'lodash';
import ts from 'typescript';

import { prettierWrite } from './prettierWrite';

if (process.env.CI) process.exit(0);

const subDirectories = fs
  .readdirSync(path.join(process.cwd(), 'src'), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && dirent.name !== 'definitions')
  .map((dirent) => dirent.name);

const filenames = subDirectories
  .reduce(
    (result, folder) =>
      result.concat(
        fs
          .readdirSync(path.join(process.cwd(), `src/${folder}`))
          .map((filepath) => path.join(folder, filepath)),
        []
      ),
    [] as string[]
  )
  .filter(
    (filepath) =>
      filepath.match(/\.tsx?$/gi) &&
      !filepath.match(/(^index|\.stories)\.tsx?$/gi)
  );

function checkForRequiredExports(exportName, exportNodes, reExportedNodes) {
  const defaultPropsValue = exportNodes.find(
    (n) =>
      n.name.escapedText === 'configurableDefaultProps' ||
      n.name.escapedText === 'defaultProps'
  );
  const defaultedPropsType = exportNodes.find(
    (n) => n.name.escapedText === 'DefaultedProps'
  );
  const reExportedDefaultedPropsType = reExportedNodes.find((n) =>
    n.exportClause.elements.find((e) => e.name.escapedText === 'DefaultedProps')
  );
  if (
    defaultPropsValue &&
    !defaultedPropsType &&
    !reExportedDefaultedPropsType
  ) {
    throw new Error(
      `${exportName} exports a defaultProps or configurableDefaultProps, it must also export a DefaultedProps type`
    );
  }
}

async function getExports(filename) {
  const filepath = path.join(process.cwd(), 'src', filename);
  const sourceFile = ts.createSourceFile(
    filename,
    fs.readFileSync(filepath).toString(),
    ts.ScriptTarget.ESNext,
    false
  );
  const reExports = sourceFile.statements.filter(
    (s) => s.kind === ts.SyntaxKind.ExportDeclaration
  );
  const exportNodes = sourceFile.statements
    .filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (s): s is any =>
        ts.canHaveModifiers(s) &&
        !!ts
          .getModifiers(s)
          ?.find((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    )
    .reduce((r, s) => {
      if (s.declarationList) {
        return r.concat(
          s.declarationList.declarations.map((d) => ({ ...d, jsDoc: s.jsDoc }))
        );
      }
      return r.concat(s);
    }, [] as unknown[])
    .filter(
      (node) =>
        !(
          node.jsDoc &&
          node.jsDoc.find(
            (doc) =>
              doc.tags &&
              doc.tags.find(
                (tag) => tag.kind === ts.SyntaxKind.JSDocDeprecatedTag
              )
          )
        )
    );
  checkForRequiredExports(filename, exportNodes, reExports);
  return exportNodes;
}
function nodeIsType(node) {
  return (
    node.kind === ts.SyntaxKind.InterfaceDeclaration ||
    node.kind === ts.SyntaxKind.TypeAliasDeclaration
  );
}

const defaults: Record<string, string[]> = {};

async function collectDefaults(exportName, exportNodes) {
  const configurableProps = exportNodes.find(
    (n) => n.name.escapedText === 'configurableDefaultProps'
  );
  if (!configurableProps) return;
  const entries = configurableProps.initializer.properties.map((p) => [
    p.name.text,
    p.initializer.text
  ]);
  entries.forEach(([prop, value]) => {
    defaults[value] = defaults[value] || [];
    defaults[value].push(`Core.${exportName}.Props['${prop}']`);
  });
}

async function buildExport(
  filename: string
): Promise<[exports: string, filepath: string]> {
  if (
    ['src/index.ts', 'src/config.tsx'].includes(filename) ||
    filename.includes('.gen.')
  )
    return ['', ''];
  const parsedName = path.parse(filename);
  const importPath = `./${path.join(parsedName.dir, parsedName.name)}`;
  const exportPath = `'${importPath}'`;
  if (exportPath.match(/^'\.\/themeVariables\/(types|theme)'$/g)) {
    return ['*', exportPath];
  }
  const exportNodes = await getExports(filename);
  const exportNames = exportNodes
    .filter((node) => !nodeIsType(node))
    .map((node) => node.name.escapedText);
  if (exportNames.length === 1 && exportNames[0] === parsedName.name) {
    collectDefaults(parsedName.name, exportNodes);
    return [`{ ${parsedName.name} }`, exportPath];
  }
  const exportName = _.camelCase(parsedName.name);
  collectDefaults(exportName, exportNodes);
  return [`* as ${exportName}`, exportPath];
}

await Promise.all(filenames.map(buildExport)).then((exportLines) => {
  const fileContent = exportLines
    .filter((s) => !!s[0].trim())
    .sort(([, a], [, b]) => a.localeCompare(b))
    .map(
      ([exportLine, exportPath]) => `export ${exportLine} from ${exportPath};`
    )
    .join('\n');

  return prettierWrite(
    'index.ts',
    `/**
        * DO NOT EDIT: This file is generated, run 'npm update:exports' to update this.
        * The exports here are generated from all ts/tsx files at the root level
        */
       ${fileContent}
       export * from './config';
       export { globalStyles } from './globalStyles';
       export { themedCss } from './utils';`
  );
});

await prettierWrite(
  'config.ts',
  `/**
  * DO NOT EDIT: This file is generated, run 'npm update:exports' to update this.
  * The exports here are generated from all ts/tsx files at the root level
  */
  import type * as Core from './index';

  export interface ConfigDefaults {
    ${Object.entries(defaults)
      .map(
        ([value, types]) =>
          `${value}: NonNullable<${types.sort().join(' & ')}>;`
      )
      .join('\n')}
  }
  `
);
