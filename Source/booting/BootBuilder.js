/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedure } from './BootProcedure';
import { BootProcedures } from './BootProcedures';

const _bootProcedures = new WeakMap();

/**
 * Represents a builder for boot - typically used during configuration
 */
export class BootBuilder {

    /**
     * Initializes a new instance of {BootBuilder}
     */
    constructor() {
        _bootProcedures.set(this, new BootProcedures());
    }

    get Procedures() {
        
    }
}