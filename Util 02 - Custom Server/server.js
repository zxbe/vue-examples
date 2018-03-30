/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global process, require */
/* eslint-disable no-console */

const childProcess = require("child_process");
const fs = require("fs");

const portHttp = process.argv[2] || 8080;
const portRest = +portHttp + 1;
let filePath = process.argv[3];
const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

// Exit if no filePath is given
if (!filePath || !filePath.startsWith(basePath)) {
  console.warn('No file path to open.');
  process.exit();
}

if (fs.statSync(filePath).isDirectory()) {
  filePath += '/';

  const webpackConfigPath = filePath + 'webpack.config.js';
  if (fs.existsSync(webpackConfigPath)) {
    // Webpack config exists, so execute webpack
    console.log('webpack');
    //childProcess.spawnSync('webpack', ['.', '--config', webpackConfigPath]);
    childProcess.spawnSync('webpack-dev-server', ['.', '--hot', '--open', '--config', webpackConfigPath, '--content-base', filePath + 'site/dist']);
    console.log('webpack done');
  }
}

const serverUri = `http://localhost:${portHttp}`;
const extraPath = filePath.substring(basePath.length);
const extraUri = `${serverUri}${extraPath}`;

//console.log('serverUri: ' + serverUri);
//console.log('extraPath: ' + extraPath);
//console.log('extraUri: ' + extraUri);

// Start server
// See: https://github.com/indexzero/http-server/
const httpChild = childProcess.spawn('http-server', ['.', '-p', portHttp, '-c-1']);

// Open browser
const command = process.platform === "win32" ? `start "" "${extraUri}"` :
              /* process.platform === "darwin" */ `open "${extraUri}"`;
childProcess.exec(command);
