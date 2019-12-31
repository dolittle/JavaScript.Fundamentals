// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStages } from './BootStages';

/**
 * Represents the necessary information to perform a boot
 */
export class Boot {
    private _bootStages: BootStages

    /**
     * Initializes a new instance of {Boot}
     * @param {BootStages} bootStages The {BootStages}
     */
    constructor(bootStages: BootStages) {
        this._bootStages = bootStages;
    }

    /**
     * Gets the {BootStages} for the {Boot}
     */
    get bootStages() {
        return this._bootStages;
    }
}