// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStage } from './BootStage';

/**
 * Represents the result of a {BootStage}
 */
export class BootStageResult {
    private _associations;

    /**
     * Initializes a new instance of {BootStageResult}
     * @param {object} associations 
     */
    constructor(associations) {
        this._associations = associations;
    }

    /**
     * Get the key/value {object} with associations
     */
    get associations() {
        return this._associations;
    }
}