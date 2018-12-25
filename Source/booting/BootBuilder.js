/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Boot } from './Boot';

/**
 * Represents a builder for boot - typically used during configuration
 */
export class BootBuilder {

    /**
     * Initializes a new instance of {BootBuilder}
     */
    constructor() {
    }

    /**
     * Build a {Boot} instance
     * @returns {Boot} Configured instance
     */
    build() {
        let boot = new Boot();
        return boot;
    }
}
