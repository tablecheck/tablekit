import path from 'path';

import fs from 'fs-extra';
// eslint-disable-next-line @tablecheck/forbidden-imports
import _ from 'lodash';
import prettier from 'prettier';
import ts from 'typescript';

if (process.env.CI) process.exit(0);

const subDirectories = fs
  .readdirSync(path.join(process.cwd(), 'src'), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && dirent.name !== 'fonts')
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
  const selectorRegex = /^base|class(less|y)/g;
  const exportNames = exportNodes
    .filter((node) => !nodeIsType(node))
    .map((node) => {
      if (node.jsDoc) {
        const alias = node.jsDoc
          .map(
            (doc) =>
              doc.tags &&
              doc.tags.find(
                (tag) =>
                  tag && tag.tagName && tag.tagName.escapedText === 'alias'
              )
          )
          .filter((n) => !!n);
        if (alias[alias.length - 1] && alias[alias.length - 1].comment) {
          return `${node.name.escapedText} as ${alias[
            alias.length - 1
          ].comment.trim()}`;
        }
      }
      return node.name.escapedText;
    })
    .filter(
      (name) =>
        name.match(/ as /g) ||
        !name.match(selectorRegex) ||
        (name.match(selectorRegex) && name.match(/Object$/g))
    );
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
      `export {${exportNames
        .map((name) => {
          if (name.match(/ as /g) || !name.match(selectorRegex)) return name;
          return `${name} as ${name.replace(
            selectorRegex,
            _.camelCase(parsedName.name)
          )}`;
        })
        .join(',')}} from './${path.join(parsedName.dir, parsedName.name)}';`
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
        * DO NOT EDIT: This file is generated, run 'npm update:exports' to update this.
        * The exports here are generated from all ts/tsx files at the root level
        */
       export * from './config';
       export type { WithComponentType } from './utils';
       ${fileContent}`,
      { filepath, ...config }
    )
  );
});
