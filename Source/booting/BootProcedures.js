/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedure } from './BootProcedure';

/**
 * Represents a system that can run through all registered {BootProcedure}
 */
export class BootProcedures {
    #procedures = [];

    /**
     * Perform all the {BootProcedure} 
     */
    perform() {
        let procedures = this.#procedures.filter(procedure => procedure.canPerform());
        procedures.forEach(procedure => procedure.perform());
    }

    /**
     * Get all the procedures
     * @returns {BootProcedure[]}
     */
    get all() { return this.#procedures; }


    /**
     * Add a {BootProcedure} to the boot
     * @param {BootProcedure} bootProcedure 
     */
    add(bootProcedure) {
        this.#procedures.push(bootProcedure);
    }    
}