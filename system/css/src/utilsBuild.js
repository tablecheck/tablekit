import { evaluateStyleElement } from './evaluateStyleElement.js';

export function utilsBuild(fileName, fileContent) {
  switch (fileName) {
    case 'constants.js': {
      return evaluateStyleElement(fileContent.constants.styles);
    }
    case 'border.js': {
      return ['', ''];
    }
    case 'font.js': {
      return evaluateStyleElement(fileContent.font.styles);
    }
    case 'resetCss.js': {
      return evaluateStyleElement(fileContent.resetCss.styles);
    }
    default:
      throw new Error(`Unhandled utils file, ${fileName}`);
  }
}
