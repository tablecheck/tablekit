import fs from 'fs';
import path from 'path';

import carbonIcons from '@carbon/icons-react';

const fileContent = `${Object.keys(carbonIcons).reduce(
  (result, iconName) =>
    `${result}  declare export const ${iconName}: CarbonIconType;\n`,
  `/* this file is generated, recommend adding to prettier and eslint ignore and committing to git. DO NOT EDIT */
  declare module '@carbon/icons-react' {
    export type CarbonIconSizeType = 16 | 20 | 24 | 32;
    export type CarbonIconType = React.ForwardRefExoticComponent<
      {
        size: CarbonIconSizeType | \`\${CarbonIconSizeType}\`;
      } & React.RefAttributes<SVGSVGElement>
    >;
`
)}\n}`;

fs.writeFileSync(
  path.resolve('./src/definitions/carbonIcons.d.ts'),
  fileContent
);
