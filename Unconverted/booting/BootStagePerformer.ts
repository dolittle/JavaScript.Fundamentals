// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStage } from './BootStage';
import { BootStageSettings } from './BootStageSettings';
import { BootStageBuilder } from './BootStageBuilder';

/**
 * Represents a performer of a {BootStage}
 */
export class BootStagePerformer {

    /**
     * Get {BootStage} the performer represents
     */
    get bootStage(): BootStage {
        return BootStage.Unknown;
    }

    /**
     * Perform the boot stage
     * @param {BootStageSettings} settings Any settings for the boot stage
     * @param {BootStageBuilder} builder A builder to be used for the stage
     */
    perform(settings: BootStageSettings, builder: BootStageBuilder) {

    }
}