#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const fs = require('fs-extra');
const camelCase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const upperFirst = require('lodash/upperFirst');
const prettier = require('prettier');
const prompts = require('prompts');

const currentPackages = fs.readdirSync(path.join(__dirname, 'packages'));

const { version: packageNamespaceVersion } = fs.readJsonSync(
  path.join(__dirname, 'packages', 'theme', 'package.json')
);
const { version: themeVersion } = fs.readJsonSync(
  path.join(__dirname, 'packages', 'package-namespace', 'package.json')
);
const { version: utilsVersion } = fs.readJsonSync(
  path.join(__dirname, 'packages', 'utils', 'package.json')
);

(async () => {
  const prettierConfig = await prettier.resolveConfig(
    path.join(__dirname, 'packages')
  );

  function writeFile(src, content) {
    const { ext } = path.parse(src);
    const parser = {
      '.md': 'markdown',
      '.ts': 'typescript',
      '.tsx': 'typescript',
      '.json': 'json'
    }[ext];
    let stringContent = content;
    if (typeof content === 'object') {
      stringContent = JSON.stringify(content);
    }
    fs.writeFileSync(
      src,
      prettier.format(stringContent, { ...prettierConfig, parser })
    );
  }
  const { inputName, description } = await prompts([
    {
      type: 'text',
      name: 'inputName',
      message:
        'Enter in the new sub-package name, e.g. "button" for "@tablecheck/tablekit-button"',
      validate: (value) => {
        if (!value) return 'A new package name is required.';
        const safeName = kebabCase(value);
        if (currentPackages.indexOf(safeName) >= 1) {
          return `Package "@tablecheck/tablekit-${safeName}" already exists`;
        }
        return true;
      }
    },
    {
      type: 'text',
      name: 'description',
      message: 'Enter in a short description for this package',
      validate: (value) => !!value || 'Description is required'
    }
  ]);
  if (!inputName || !description) return;
  const name = kebabCase(inputName);
  const jsName = camelCase(inputName);
  const componentName = upperFirst(camelCase(inputName));

  const { confirm } = await prompts({
    type: 'confirm',
    message: `We will now create a new package called "@tablecheck/tablekit-${name}" in the folder "/packages/${name}". Is this correct?`,
    name: 'confirm'
  });

  if (!confirm) {
    // eslint-disable-next-line no-console
    console.info('No package created.');
    return;
  }

  const newDirPath = path.join(__dirname, 'packages', name);
  fs.mkdirSync(newDirPath);
  const srcPath = path.join(newDirPath, 'src');
  fs.mkdirSync(srcPath);

  fs.writeFileSync(
    path.join(newDirPath, 'LICENSE'),
    `BSD 3-Clause License

Copyright (c) ${new Date().getFullYear()}, TableCheck Inc
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

`
  );

  writeFile(path.join(newDirPath, 'package.json'), {
    name: `@tablecheck/tablekit-${name}`,
    version: '1.0.0-0',
    description,
    files: ['lib', 'LICENSE'],
    main: 'lib/es5/index.js',
    module: 'lib/esm/index.js',
    types: 'lib/esm/index.ts',
    scripts: {},
    author: 'TableCheck Inc.',
    license: 'MIT',
    peerDependencies: {
      '@emotion/react': '>=11 <12',
      '@emotion/styled': '>=11 <12',
      lodash: '>=4.17.21 <5',
      react: '>=16.8.0 <18',
      'react-dom': '>=16.2.0 <18'
    },
    dependencies: {
      '@tablecheck/tablekit-package-namespace': `^${packageNamespaceVersion}`,
      '@tablecheck/tablekit-theme': `^${themeVersion}`,
      '@tablecheck/tablekit-utils': `^${utilsVersion}`
    },
    devDependencies: {
      '@tablecheck/tablekit-enzyme': `^${
        require('./packages/enzyme/package.json').version
      }`
    }
  });

  writeFile(
    path.join(srcPath, 'index.ts'),
    `
export { ${jsName} } from './${componentName}';
export * from './themes';
  `
  );
  fs.writeFileSync(
    path.join(srcPath, 'index.test.tsx'),
    `import { mount } from '@tablecheck/tablekit-enzyme';
import ${componentName} from './index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-${name} ${componentName}', () => {
  test('should be possible to render', () => {
    const wrapper = mount(<${componentName} />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<${componentName} />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<${componentName} className="test-class" />)).toMatchSnapshot();
  });
});
`
  );

  writeFile(
    path.join(srcPath, `${componentName}.tsx`),
    `import { forwardRef } from 'react';
import { ${componentName}Container, ${componentName}Outer } from './styled';

type Props = {
  /** custom className to put on the Outer div element */
  className?: string
};

const ${componentName} = forwardRef<*, Props>(({className}: Props, ref): JSX.Element => {
  return (
    <${componentName}Outer className={className} ref={ref}>
      <${componentName}Container />
    </${componentName}Outer>
  );
});

export default ${componentName};
`
  );
  writeFile(
    path.join(srcPath, 'themes.ts'),
    `import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type { PackageThemeValue } from '@tablecheck/tablekit-utils';

export const ${jsName}ThemeNamespace = PackageNamespace.${componentName};

interface PackageTheme {
  // TODO add themes here
  // or if there are no themeable values use the following
  // type PackageTheme = Record<never, never>;
}

declare module '@emotion/react' {
  export interface Theme {
    [${jsName}ThemeNamespace]: PackageTheme;
  }
}

export const ${jsName}ClassicTheme: PackageTheme = {};

export const ${jsName}DarkTheme: PackageTheme = {};
`
  );

  writeFile(
    path.join(srcPath, `${componentName}.md`),
    `TODO: Write documentation for ${componentName}

### Examples

#### Basic

\`\`\`tsx
  <div>
    <${componentName} />
  </div>
\`\`\`

`
  );

  writeFile(
    path.join(srcPath, 'styled.ts'),
    `import styled from '@emotion/styled';

export const ${componentName}Container = styled.span\`\`;

export const ${componentName}Outer = styled.span\`
  display: inline-flex;
  justify-content: center;
  align-items: center;
\`;
`
  );

  // eslint-disable-next-line no-console
  console.info(
    `Please add ${componentName} = '@tablecheck/tablekit-${name}' to the types package.`
  );

  // if we only bootstrap the new package it unlinks all the existing packages when run from here
  const lerna = spawn('lerna', ['bootstrap']);
  lerna.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  lerna.stderr.on('data', (data) => {
    process.stderr.write(data);
  });

  lerna.on('error', (error) => {
    console.error(`error: ${error.message}`);
  });

  lerna.on('close', (code) => {
    if (code === 1) {
      console.error(
        'An error occurred while bootstrapping, please check the logs'
      );
    } else {
      // eslint-disable-next-line no-console
      console.info(
        `Finished creating new package @tablecheck/tablekit-${name}`
      );
    }
  });
})();
