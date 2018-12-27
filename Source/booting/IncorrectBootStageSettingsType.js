/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from '@dolittle/exceptions';

/**
 * Exception that is thrown if the boot stage settings type is incorrect
 */
export class IncorrectBootStageSettingsType extends Exception {
    /**
     * Initializes a new instance of {IncorrectBootStageSettingsType}
     * @param {*} type The type that is incorrect
     */
    constructor(type) {
        super(`${type} is of incorrect boot stage settings type - must inherit BootStageSettings`);
    }
}