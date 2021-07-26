const path = require('path');

const execa = require('execa');
const { flow, camelCase, upperFirst } = require('lodash');
const prettier = require('prettier');

const { stdout } = execa.sync('lerna', ['list', '--json', '--all'], {
  cwd: path.resolve('../../')
});

const lernaPackages = JSON.parse(stdout);

module.exports = function runner(file, api) {
  const j = api.jscodeshift;
  let root = j(file.source);

  root
    .find(j.TSEnumDeclaration, {
      id: {
        name: 'PackageNamespace'
      }
    })
    .forEach((enumDeclarationPath) => {
      const newMembers = [];
      lernaPackages.forEach(({ name }) => {
        // eslint-disable-next-line no-unused-vars
        const [orgname, namespace, ...packageNameParts] = name.split(/[\/-]/);
        if (
          !packageNameParts.length ||
          ['utils', 'theme'].indexOf(packageNameParts[0]) > -1
        )
          return;
        const packageName = packageNameParts.join('-');
        const formattedName = flow(camelCase, upperFirst)(packageName);
        newMembers.push({
          type: 'TSEnumMember',
          loc: null,
          comments: null,
          id: j.identifier(formattedName),
          initializer: j.stringLiteral(packageName)
        });
      });
      enumDeclarationPath.node.members = newMembers;
    });

  const prettierOptions = prettier.resolveConfig.sync(file.path);
  return prettier.format(root.toSource(), {
    ...prettierOptions,
    filepath: file.path
  });
};
