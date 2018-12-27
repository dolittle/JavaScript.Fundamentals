/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStage } from './BootStage';


/**
 * Represents a performer of a {BootStage}
 */
export class BootStagePerformer {

    /**
     * Get {BootStage} the performer represents
     */
    get bootStage() {
        return BootStage.Unknown;
    }

    /**
     * Perform the boot stage
     * @param {*} settings Any settings for the boot stage
     * @param {BootStageBuilder} builder A builder to be used for the stage
     */
    perform(settings, builder) {

    }
}