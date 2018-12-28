/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import path from 'path';
import fs from 'fs';
import config from './config';

function loadConfig() {
    let configFilenames = [
        '.babelrc',
        '.babelrc.js'
    ];

    let dirname = path.resolve(config.rootFolder);

    let configFile = null;

    while (true) {
        let found = configFilenames.some(filename => {
            let fullpath = path.join(dirname, filename)
            if (fs.existsSync(fullpath)) {
                configFile = fullpath;
                
                return true;
            }
        });

        if (found) break;

        const nextDir = path.dirname(dirname);
        if (dirname === nextDir) break;
        dirname = nextDir;
    }

    if (configFile) {
        console.log(`Using Babel configuration file '${configFile}'`);
        if (path.extname(configFile) == '.js') return require(configFile);
        else {
            let json = fs.readFileSync(configFile);
            return JSON.parse(json);
        }
    }
    else {
        console.log('No Babel configuration file found');
        return {};
    }
}



let moduleConfigurations = {
    commonjs: (config) => {

    },
    amd: (config) => {

    },
    umd: (config) => {

    },
    systemjs: (config) => {

    }
}

let projectConfig = null;


export class babelConfig {

    constructor() {
        if( projectConfig == null ) {
            projectConfig = loadConfig();
        }
        this.plugins = [];
        this.presets = [];
        Object.assign(this, projectConfig);
    }

    static getConfigForModuleFormat(moduleFormat) {
        let config = new babelConfig();
        config.plugins.push(`@babel/plugin-transform-modules-${moduleFormat}`);
        return config;
    }
}