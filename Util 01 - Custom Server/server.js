/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global process, require */
/* eslint-disable no-console */

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const portHttp = process.argv[2] || 8080;
const portRest = +portHttp + 1;
let filePath = process.argv[3];
const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

// Exit if no filePath is given
if (!filePath || !filePath.toLowerCase().startsWith(basePath.toLowerCase())) {
  console.warn('No file path to open.');
  process.exit();
}

/*** Helper functions ***/

function findFileInPath(directory, file) {
  const filename = path.join(directory, file);
  if (fs.existsSync(filename)) {
    return filename;
  } else {
    const basename = path.dirname(directory);
    return basename && basename !== directory
      ? findFileInPath(basename, file)
      : null;
  }
}

/*** Main functions ***/

/// Is Webpack project? ///

if (fs.statSync(filePath).isDirectory()) {
  const webpackConfigNames = ['webpack.config.js', 'webpack.dev.js'];
  const webpackConfigPath = webpackConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (webpackConfigPath) {
    // Webpack config exists, so execute webpack
    console.log('webpack');
    console.log('webpack config: ' + webpackConfigPath);
    childProcess.spawnSync(
      'webpack-dev-server',
      ['--config', `"${webpackConfigPath}"`],
      {
        cwd: path.dirname(webpackConfigPath),
        shell: true,
        stdio: 'inherit'
      }
    );
    console.log('webpack done');
    process.exit();
  }
}

/// Just plain html? ///

const serverUri = `http://localhost:${portHttp}`;
const extraPath = filePath.substring(basePath.length);
const extraUri = extraPath.split('\\').join('/');
const totalUri = `${serverUri}${extraUri}`;

//console.log('serverUri: ' + serverUri);
//console.log('extraPath: ' + extraPath);
//console.log('extraUri: ' + extraUri);
//console.log('totalUri: ' + totalUri);

// Start server
// See: https://github.com/indexzero/http-server/
const httpChild = childProcess.spawn(
  'http-server',
  ['.', '-p', portHttp, '-c-1'],
  { shell: true, stdio: 'inherit' }
);

// Open browser
const command =
  process.platform === 'win32'
    ? `start "" "${totalUri}"`
    : /* process.platform === "darwin" */ `open "${totalUri}"`;
childProcess.exec(command);
