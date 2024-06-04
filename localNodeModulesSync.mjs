/**
 * USAGE: node localNodeModulesSync.mjs <target1> <target2> ...
 * Run this after a build and it will copy the build lib folders
 * into the node_modules of the specified target project folders.
 */
import path from 'path';

import fs from 'fs-extra';

const systemDir = path.join(process.cwd(), 'system');

const targets = process.argv.slice(2).map((t) => path.resolve(t));

const folders = fs
  .readdirSync(systemDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

for (const target of targets) {
  for (const folder of folders) {
    const root = path.join(systemDir, folder);
    const packageName = fs.readJsonSync(path.join(root, 'package.json')).name;
    if (packageName === '@tablecheck/tablekit-css') {
      const dest = path.join(target, 'node_modules', packageName);
      if (!fs.existsSync(dest)) {
        continue;
      }
      console.log(`Copying ${packageName} to ${target}`);
      fs.readdirSync(dest, { withFileTypes: true }).forEach((dirent) => {
        if (dirent.isDirectory()) return;
        if (!dirent.name.endsWith('.css')) return;
        fs.copyFileSync(
          path.join(root, dirent.name),
          path.join(dest, dirent.name)
        );
      });
    }
    const dest = path.join(target, 'node_modules', packageName, 'lib');
    if (!fs.existsSync(dest)) {
      continue;
    }
    console.log(`Copying ${packageName} to ${target}`);
    fs.emptyDirSync(dest);
    fs.copySync(path.join(root, 'lib'), dest, { overwrite: true });
  }
  console.log(
    'Stop any dev servers and run `rm -rf node_modules/.vite` to see changes'
  );
}
