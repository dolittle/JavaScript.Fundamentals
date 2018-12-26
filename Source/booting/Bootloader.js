/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootBuilder } from './BootBuilder';
import { Boot } from './Boot';

/**
 * Represents the boot loader that boots everything Dolittle
 */
export class Bootloader {
    #boot;

    /**
     * Initializes a new instance of {Bootloader}
     * @param {Boot} boot 
     */
    constructor(boot) {
        this.#boot = boot;
    }

    /**
     * Start the boot sequence
     * @returns {Promise} - Resolve will be called with {BootloaderResult}
     */
    start() {

    }

    /**
     * Start configuration
     */
    static configure(configureCallback) {
        let builder = new BootBuilder();
        configureCallback(builder);
        let boot = builder.build();
        let loader = new Bootloader(boot);
        return loader;
    }
}