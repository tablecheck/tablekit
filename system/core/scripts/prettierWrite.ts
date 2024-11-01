import path from 'path';

import fs from 'fs-extra';
import prettier from 'prettier';

export async function prettierWrite(
  relativeOrAbsolutePath: string,
  fileContent: string
): Promise<void> {
  const filepath = relativeOrAbsolutePath.startsWith('/')
    ? relativeOrAbsolutePath
    : path.join(process.cwd(), 'src', relativeOrAbsolutePath);
  try {
    const config = await prettier.resolveConfig(filepath);
    await fs.outputFile(
      filepath,
      await prettier.format(fileContent, { filepath, ...config })
    );
  } catch (e) {
    console.error('Error writing/formatting file', relativeOrAbsolutePath);
    await fs.outputFile(filepath, fileContent);
  }
}
