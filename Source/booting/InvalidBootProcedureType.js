/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from '@dolittle/exceptions';
import { BootProcedure } from './BootProcedure';

 /**
  * Exception that gets thrown when a {BootProcedure} is of invalid type
  */
 export class InvalidBootProcedureType extends Exception {

    /**
     * Initializes a new instance ofr {InvalidBootProcedureType}
     * @param {*} type The wrong type
     */
    constructor(type) {
        super(`${type} is not a valid BootProcedure`);
    }   
 }