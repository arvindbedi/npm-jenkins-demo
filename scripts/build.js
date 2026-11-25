'use strict';

// Tiny "build": copies src/ into dist/ and writes a build-info.json file.
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, 'src'), path.join(dist, 'src'), { recursive: true });

const pkg = require('../package.json');
const info = {
  name: pkg.name,
  version: pkg.version,
  buildNumber: process.env.BUILD_NUMBER || 'local',
  builtAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(dist, 'build-info.json'), JSON.stringify(info, null, 2));

console.log('Build complete ->', dist);
