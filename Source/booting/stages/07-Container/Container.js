/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStagePerformer } from '../../BootStagePerformer';
import { BootStage } from '../../BootStage';

/**
 * Represents the {BootStagePerformer} for performing the {BootStage.Container} stage
 */
export class Container extends BootStagePerformer {

    /** @inheritdoc */
    get bootStage() {
        return BootStage.Container;
    }

    /** @inheritdoc */
    perform(settings, builder) {

    }
}