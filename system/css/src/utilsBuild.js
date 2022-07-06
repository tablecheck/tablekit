// eslint-disable-next-line import/extensions -- commonjs import requires extension
import kebabCase from 'lodash/kebabCase.js';

function formatName(name) {
  if (name.match(/^[A-Z0-9]+$/gi) || name.match(/^--/gi))
    return name.toLowerCase().replace(/^[-]+/gi, '');
  return kebabCase(name).replace(/^[-]+/gi, '');
}

function formatCssVar(exportName, value) {
  const varName = `--${formatName(exportName)}`;
  const isFontWeightChild = varName.match(/^--fontweight-/gi);
  if (typeof value === 'number' && !isFontWeightChild)
    return `${varName}: ${value}px;`;
  if (typeof value === 'string' || isFontWeightChild)
    return `${varName}: ${value};`;
  // should be object
  return Object.entries(value)
    .map(([optionName, optionValue]) =>
      formatCssVar(`--${varName}-${formatName(optionName)}`, optionValue)
    )
    .join('');
}

export function utilsBuild(fileName, fileContent) {
  switch (fileName) {
    case 'constants.js': {
      const output = Object.entries(fileContent)
        .filter((args) => args[0] !== 'default')
        .map(([exportName, value]) => formatCssVar(exportName, value))
        .join('');
      return [output, ''];
    }
    default:
      throw new Error(`Unhandled utils file, ${fileName}`);
  }
}
