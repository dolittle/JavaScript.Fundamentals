/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStage } from './BootStage';

/**
 * Represents the result of a {BootStage}
 */
export class BootStageResult {
    #associations;

    /**
     * Initializes a new instance of {BootStageResult}
     * @param {object} associations 
     */
    constructor(associations) {
        this.#associations = associations;
    }

    /**
     * Get the key/value {object} with associations
     */
    get associations() {
        return this.#associations;
    }
}