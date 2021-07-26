// This file is used to fix the infinite loops that are caused by styleguidist.
// The package can't be fixed by NMP as it's a sub-dependency and can't be locked :(
const path = require('path');

const fs = require('fs-extra');

const filePath = path.resolve(
  __dirname,
  'node_modules/watchpack/lib/DirectoryWatcher.js'
);
const fileToFix = fs.readFileSync(filePath, 'utf-8');
const lines = fileToFix.split('\n');
const fixLine = '\tvar flag = false;';
if (lines[188] !== fixLine) {
  lines[187] = 'DirectoryWatcher.prototype.setNestedWatching = function() {';
  lines.splice(188, 0, fixLine);
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}
