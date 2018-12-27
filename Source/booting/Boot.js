/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStages } from './BootStages';

/**
 * Represents the necessary information to perform a boot
 */
export class Boot {
    #bootStages;

    /**
     * Initializes a new instance of {Boot}
     * @param {BootStages} bootStages The {BootStages}
     */
    constructor(bootStages) {
        this.#bootStages = bootStages;
    }

    /**
     * Gets the {BootStages} for the {Boot}
     */
    get bootStages() {
        return this.#bootStages;
    }
}