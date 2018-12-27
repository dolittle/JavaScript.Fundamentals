/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from '@dolittle/exceptions';
import { BootStage } from './BootStage';


/**
 * Exception that gets thrown when a {BootStage} identifier is wrong
 */
export class InvalidBootStageIdentifier extends Exception {

    /**
     * Initializes a new instance of {InvalidBootStageIdentifier}
     * @param {BootStage} bootStage The invalid boot stage
     */
    constructor(bootStage) {
        super(`${bootStage} is an invalid boot stage identifier`);
    }  
}