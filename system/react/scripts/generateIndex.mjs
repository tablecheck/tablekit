import path from 'path';

import fs from 'fs-extra';
import prettier from 'prettier';
import ts from 'typescript';

const subDirectories = ['components', 'styles', 'utils', 'hooks'];

const filenames = ['fonts/weights.ts']
  .concat(
    subDirectories.reduce(
      (result, folder) =>
        result.concat(
          fs
            .readdirSync(path.join(process.cwd(), `src/${folder}`))
            .map((filepath) => path.join(folder, filepath)),
          []
        ),
      []
    )
  )
  .filter(
    (filepath) =>
      filepath.match(/\.tsx?$/gi) &&
      !filepath.match(/(^index|\.stories)\.tsx?$/gi)
  );

async function getExport(filename) {
  const filepath = path.join(process.cwd(), 'src', filename);
  const parsedName = path.parse(filename);
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
    .reduce(
      (r, s) =>
        r.concat(s.declarationList ? s.declarationList.declarations : s),
      []
    )
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
  const exportNames = exportNodes
    .filter((node) => !nodeIsType(node))
    .map((node) => node.name.escapedText)
    .filter((name) => !name.match(/^base/g));
  const exportTypes = exportNodes
    .filter((node) => nodeIsType(node))
    .map((node) => {
      const name = node.name.escapedText;
      if (name === 'Props') return `Props as ${parsedName.name}Props`;
      return name;
    });
  const exportDeclarations = [];
  if (exportNames.length)
    exportDeclarations.push(
      `export {${exportNames.join(',')}} from './${path.join(
        parsedName.dir,
        parsedName.name
      )}';`
    );
  if (exportTypes.length)
    exportDeclarations.push(
      `export type {${exportTypes.join(',')}} from './${path.join(
        parsedName.dir,
        parsedName.name
      )}';`
    );
  return exportDeclarations.join('\n');
}

Promise.all(filenames.map(getExport)).then((exportLines) => {
  const fileContent = exportLines.join('\n');

  const filepath = path.join(process.cwd(), 'src/index.ts');
  const config = prettier.resolveConfig.sync(filepath);
  fs.outputFileSync(
    filepath,
    prettier.format(
      `/**
        * DO NOT EDIT: This file is generated, run 'pnpm update:exports' to update this.
        * The exports here are generated from all ts/tsx files at the root level
        */
       ${fileContent}`,
      { filepath, ...config }
    )
  );
});
