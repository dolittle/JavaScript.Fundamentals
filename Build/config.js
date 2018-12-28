/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import yargs from 'yargs';
import path from 'path';

let _rootFolder = null;

function initializeIfNotInitalized() {
    if( _rootFolder !== null ) return;

    let root = yargs.argv.root;
        
    if( !root || root == '' ) {
        console.info("Missing root - run 'gulp' with --root [relative folder]");
        process.exit(0);
        return;
    }

    let rootFolder = path.resolve(root);
    
    _rootFolder = rootFolder;

    console.log(`Using root : '${rootFolder}'`);
}


/**
 * Represents the configuration for the build
 */
class config {

    /**
     * Get the root folder in which we're building
     */
    get rootFolder() {
        initializeIfNotInitalized();
        return _rootFolder;
    }

    /**
     * Get the dist folder that will serve as output from the build
     */
    get distFolder() {
        initializeIfNotInitalized();
        return `${this.root}/dist`;
    }
}

export default new config();