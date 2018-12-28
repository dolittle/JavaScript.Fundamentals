/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import yargs from 'yargs';
import path from 'path';
import gulp from 'gulp';

let _rootFolder = '';

/**
 * Represents the configuration for the build
 */
class config {

    constructor() {
        let root = yargs.argv.root;
        
        if( !root || root == '' ) {
            console.info("Missing root - run 'gulp' with --root [relative folder]");
            process.exit(0);
        }

        let rootFolder = path.resolve();
        
        _rootFolder = rootFolder;

        console.log(`Using root : '${rootFolder}'`);
    }


    /**
     * Get the root folder in which we're building
     */
    get rootFolder() {
        return _rootFolder;
    }

    /**
     * Get the dist folder that will serve as output from the build
     */
    get distFolder() {
        return `${this.root}/dist`;
    }
}

export default new config();