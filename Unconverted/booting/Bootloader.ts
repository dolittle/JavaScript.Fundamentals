// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootBuilder } from './BootBuilder';
import { Boot } from './Boot';

/**
 * Represents the boot loader that boots everything Dolittle
 */
export class Bootloader {
    private _boot: Boot;

    /**
     * Initializes a new instance of {Bootloader}
     * @param {Boot} boot 
     */
    constructor(boot: Boot) {
        this._boot = boot;
    }

    /**
     * Start the boot sequence
     * @returns {Promise} - Resolve will be called with {BootloaderResult}
     */
    start() {
        this._boot.bootStages.perform(this._boot);
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