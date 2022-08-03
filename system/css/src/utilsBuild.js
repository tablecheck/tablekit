import kebabCase from 'lodash/kebabCase.js';

import { evaluateStyleElement } from './evaluateStyleElement.js';

function formatName(name) {
  if (name.match(/^[A-Z0-9]+$/g) || name.match(/^--/gi))
    return name.toLowerCase().replace(/^[-]+/gi, '');
  return kebabCase(name).replace(/^[-]+/gi, '');
}

function formatCssVar(exportName, value) {
  const varName = `--${formatName(exportName)}`;
  const isPureNumberChild = varName.match(/^--(font-weight|z-index)-/gi);
  if (typeof value === 'number' && !isPureNumberChild)
    return `${varName}: ${value}px;`;
  if (typeof value === 'string' || isPureNumberChild)
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
      const cssVars = Object.entries(fileContent)
        .filter((args) => args[0] !== 'default')
        .map(([exportName, value]) => formatCssVar(exportName, value))
        .join('');
      return [`:root {\n${cssVars}\n}`, ''];
    }
    case 'border.js': {
      return ['', ''];
    }
    case 'fontFace.js': {
      return ['', ''];
    }
    case 'resetCss.js': {
      return evaluateStyleElement(fileContent.resetCss.styles);
    }
    default:
      throw new Error(`Unhandled utils file, ${fileName}`);
  }
}
