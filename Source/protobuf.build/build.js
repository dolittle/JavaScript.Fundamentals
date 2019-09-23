#!/usr/bin/env node

let toolsPath = require.resolve('grpc-tools');
let nodeModulesRoot = toolsPath.substr(0, toolsPath.indexOf('/grpc-tools'));

console.log(`Using tooling from ${nodeModulesRoot}`);

const path = require('path');
const glob = require('glob');
const del = require('del');

const { exec, execSync } = require('child_process');

if (process.argv.length < 3) {
    console.log('You have to provide one or more roots to paths to where .proto files are located')
    process.exit(0);
    return;
}

console.log('Delete existing declaration files');
del('./*.d.ts', '**/*.d.ts', '!node_modules/**/*', 'lib');

let args = '';

let patterns = ['*.proto', '**/*.proto'];
let ignorePatterns = ['', '*.proto'];

for (var i = 2; i < process.argv.length; i++) {
    let folder = path.join(process.cwd(), process.argv[i]);
    patterns.forEach((pattern, patternIndex) => {
        let files = glob.sync(pattern, {
            cwd: folder,
            ignore: ignorePatterns[patternIndex]
        });
        if (files.length > 0) {
            args += `${path.join(process.argv[i], pattern)} `;
        }
    });
}

console.log(`Looking for .proto files in '${args.trim()}'`);

process.env.nodemodules = nodeModulesRoot;

let scriptPath = path.join(__dirname, `generate_proxies.sh ${args.trim()}`);
const generate = exec(`${scriptPath}`,  (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);

    if (error == null) {
        console.log('Transpile any TypeScript files');
        execSync(`tsc -p tsconfig.json --declaration false`, { stdio: 'inherit' });

        console.log('Copy declaration files to lib')
        execSync(`find . -name '*.d.ts' -not -path './node_modules/*' -not -path './lib/*' | cpio -pdm ./lib`, { stdio: 'inherit' });
    }
});

