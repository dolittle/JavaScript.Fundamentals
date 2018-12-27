/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStagePerformer } from '../../BootStagePerformer';
import { BootStage } from '../../BootStage';

/**
 * Represents the {BootStagePerformer} for performing the {BootStage.Discovery} stage
 */
export class Discovery extends BootStagePerformer {

    /** @inheritdoc */
    get bootStage() {
        return BootStage.Discovery;
    }

    /** @inheritdoc */
    perform(settings, builder) {

    }
}