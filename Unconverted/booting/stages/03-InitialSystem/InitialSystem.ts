// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStagePerformer } from '../../BootStagePerformer';
import { BootStageBuilder } from '../../BootStageBuilder';
import { BootStageSettings } from '../../BootStageSettings';
import { BootStage } from '../../BootStage';

/**
 * Represents the {BootStagePerformer} for performing the {BootStage.InitialSystem} stage
 */
export class InitialSystem extends BootStagePerformer {

    /** @inheritdoc */
    get bootStage() {
        return BootStage.InitalSystem;
    }

    /** @inheritdoc */
    perform(settings: BootStageSettings, builder: BootStageBuilder) {
    
    }
}