/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedure } from './BootProcedure';

/**
 * Represents a system that can run through all registered {BootProcedure}
 */
export class BootProcedures {


    /**
     * Add a {BootProcedure} to the boot
     * @param {BootProcedure} bootProcedure 
     */
    addProcedure(bootProcedure) {
        _bootProcedures.get(this).push(bootProcedure);
    }    
}