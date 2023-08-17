import path from 'path';

import fs from 'fs-extra';

const fontWeights = {
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700
};

fs.ensureDirSync(path.join(process.cwd(), 'src/static/css/fonts/woff'));
fs.ensureDirSync(path.join(process.cwd(), 'src/static/css/fonts/woff2'));

function buildFontFace(fontFamily, fontWeightKey, isItalic) {
  const fontPath = `@ibm/plex/${fontFamily.replace(/ /g, '-')}/fonts/complete`;
  const fontFileName = `${fontFamily.replace(/ /g, '')}-${fontWeightKey}${
    isItalic ? 'Italic' : ''
  }`;
  ['woff', 'woff2'].forEach((extension) =>
    fs.copyFileSync(
      path.join(
        process.cwd(),
        'node_modules',
        fontPath,
        extension,
        `${fontFileName}.${extension}`
      ),
      path.join(
        process.cwd(),
        'src/static/css/fonts',
        extension,
        `${fontFileName}.${extension}`
      )
    )
  );
  return /* css */ `@font-face {
  font-family: ${fontFamily};
  src: local('${fontFamily} ${fontWeightKey}${isItalic ? ' Italic' : ''}'),
    local('${fontFamily}-${fontWeightKey}${isItalic ? 'Italic' : ''}'),
    url('fonts/woff2/${fontFileName}.woff2')
      format('woff2'),
    url('fonts/woff/${fontFileName}.woff')
      format('woff');
  font-display: swap;
  ${isItalic ? 'font-style: italic;' : ''}
  font-weight: ${fontWeights[fontWeightKey]};
}`;
}

const fontsInput = [
  ['IBM Plex Sans', 'Regular'],
  ['IBM Plex Sans', 'SemiBold'],
  ['IBM Plex Sans', 'Bold']
]
  .map(([name, weight]) => buildFontFace(name, weight, false))
  .join('\n\n');

fs.writeFileSync(
  path.join(process.cwd(), 'src/static/css/fonts.css'),
  `/* THIS FILE IS GENERATED. DO NOT EDIT! */\n${fontsInput}`
);
