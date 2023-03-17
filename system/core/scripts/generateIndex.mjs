import path from 'path';

import fs from 'fs-extra';
// eslint-disable-next-line @tablecheck/forbidden-imports
import _ from 'lodash';
import prettier from 'prettier';
import ts from 'typescript';

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
    []
  )
  .filter(
    (filepath) =>
      filepath.match(/\.tsx?$/gi) &&
      !filepath.match(/(^index|\.stories)\.tsx?$/gi)
  );

async function getExports(filename) {
  const filepath = path.join(process.cwd(), 'src', filename);
  const sourceFile = ts.createSourceFile(
    filename,
    fs.readFileSync(filepath).toString(),
    ts.ScriptTarget.ES6,
    false
  );
  const exportNodes = sourceFile.statements
    .filter(
      (s) =>
        s.modifiers &&
        s.modifiers.find((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    )
    .reduce((r, s) => {
      if (s.declarationList) {
        return r.concat(
          s.declarationList.declarations.map((d) => ({ ...d, jsDoc: s.jsDoc }))
        );
      }
      return r.concat(s);
    }, [])
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
  function nodeIsType(node) {
    return (
      node.kind === ts.SyntaxKind.InterfaceDeclaration ||
      node.kind === ts.SyntaxKind.TypeAliasDeclaration
    );
  }
  return exportNodes
    .filter((node) => !nodeIsType(node))
    .map((node) => node.name.escapedText);
}

async function buildExport(filename) {
  const parsedName = path.parse(filename);
  const exportPath = `'./${path.join(parsedName.dir, parsedName.name)}'`;
  if (exportPath.match(/^'\.\/themeVariables\/(types|theme)'$/g)) {
    return `export * from ${exportPath};`;
  }
  const exportNames = await getExports(filename);
  if (exportNames.length === 1 && exportNames[0] === parsedName.name) {
    return `export { ${parsedName.name} } from ${exportPath};`;
  }
  return `export * as ${_.camelCase(parsedName.name)} from ${exportPath};`;
}

await Promise.all(filenames.map(buildExport)).then((exportLines) => {
  const fileContent = exportLines.join('\n');

  const filepath = path.join(process.cwd(), 'src/index.ts');
  const config = prettier.resolveConfig.sync(filepath);
  fs.outputFileSync(
    filepath,
    prettier.format(
      `/**
        * DO NOT EDIT: This file is generated, run 'npm update:exports' to update this.
        * The exports here are generated from all ts/tsx files at the root level
        */
       ${fileContent}
       export { globalStyles } from './globalStyles';`,
      { filepath, ...config }
    )
  );
});
