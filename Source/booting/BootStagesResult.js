/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStageResult } from './BootStageResult';

/**
 * Represents the result from performing all boot stages
 */
export class BootStagesResult {
    #bootStageResults;

    /**
     * Initializes a new instance of {BootStagesResult}
     * @param {BootStageResult[]} bootStageResults Array of all boot stage results
     */
    constructor(bootStageResults) {
        this.#bootStageResults = bootStageResults;
    }

    /**
     * Get the results from all boot stages
     * @returns {BootStageResult[]} Array of all boot stage results
     */
    get bootStageResults() {
        return this.#bootStageResults;
    }
}