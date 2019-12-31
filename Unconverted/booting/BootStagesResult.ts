// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStageResult } from './BootStageResult';

/**
 * Represents the result from performing all boot stages
 */
export class BootStagesResult {
    private _bootStageResults: BootStageResult[];

    /**
     * Initializes a new instance of {BootStagesResult}
     * @param {BootStageResult[]} bootStageResults Array of all boot stage results
     */
    constructor(bootStageResults: BootStageResult[]) {
        this._bootStageResults = bootStageResults;
    }

    /**
     * Get the results from all boot stages
     * @returns {BootStageResult[]} Array of all boot stage results
     */
    get bootStageResults(): BootStageResult[] {
        return this._bootStageResults;
    }
}