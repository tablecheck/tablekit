import path from 'path';

import chalk from 'chalk';
import chokidar from 'chokidar';
import { execa } from 'execa';

const systemRootPath = path.resolve('system');

let state;
let currentTimeout;
let triggeredFiles = [];

function setState(newState, filepath) {
  if (filepath) {
    triggeredFiles.push(filepath);
  }
  if (state === newState) {
    return;
  }
  state = newState;
  // eslint-disable-next-line no-console
  console.log(chalk.bgCyan(`  ${state}  `));
  if (newState === 'running') {
    // eslint-disable-next-line no-console
    console.log(
      chalk.gray(
        `  Triggered from: \n\t${triggeredFiles
          .map((f) => path.relative(systemRootPath, f))
          .join('\n\t')}`
      )
    );
    triggeredFiles = [];
  }
  // eslint-disable-next-line no-console
  console.log('');
}

setState('waiting');

async function runBuild() {
  setState('running');
  await execa(
    'lerna',
    [
      'run',
      'build',
      '--scope="@tablecheck/tablekit-react"',
      '--scope="@tablecheck/tablekit-react-css"',
      '--scope="@tablecheck/tablekit-react-datepicker"',
      '--scope="@tablecheck/tablekit-react-select"'
    ],
    {
      cwd: path.join(systemRootPath, '..'),
      stdio: 'inherit'
    }
  );
  if (state === 'pending') {
    runBuild();
  } else {
    setState('waiting');
  }
}

function rebuild(filepath) {
  if (state === 'starting') return;
  if (state === 'running' || state === 'pending') {
    setState('pending', filepath);
    return;
  }
  setState('starting', filepath);
  clearTimeout(currentTimeout);
  currentTimeout = setTimeout(runBuild, 4000);
}

const watcher = chokidar.watch(
  [
    path.join(systemRootPath, 'core/src/**/*'),
    path.join(systemRootPath, 'react/src/structuredComponents/**/*'),
    path.join(systemRootPath, 'react/src/*'),
    path.join(systemRootPath, 'react-css/src/structuredComponents/**/*'),
    path.join(systemRootPath, 'react-css/src/*'),
    path.join(systemRootPath, 'react-datepicker/src/**/*'),
    path.join(systemRootPath, 'react-select/src/**/*')
  ],
  {
    ignored: /\/src\/(index|config)\.ts$|node_modules|(^|[/\\])\../,
    ignoreInitial: true,
    persistent: true,
    awaitWriteFinish: true
  }
);
watcher
  .on('add', (filepath) => {
    rebuild(filepath);
  })
  .on('change', (filepath) => {
    rebuild(filepath);
  })
  .on('unlink', (filepath) => {
    rebuild(filepath);
  })
  .on('error', (error) => {
    console.error('Error happened', error);
  });
