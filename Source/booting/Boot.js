/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedures } from './BootProcedures';

/**
 * Represents the necessary information to perform a boot
 */
export class Boot {
    #procedures;

    /**
     * Initializes a new instance of {Boot}
     * @param {BootProcedures} procedures 
     */
    constructor(procedures) {
        this.#procedures = procedures;
    }

    /**
     * Gets the {BootProcedures} for the {Boot}
     */
    get procedures() {
        return this.#procedures;
    }
}