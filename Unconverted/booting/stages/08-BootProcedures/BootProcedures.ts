// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootStageSettings } from '../../BootStageSettings';
import { BootStagePerformer } from '../../BootStagePerformer';
import { BootProcedures as BP } from '../../BootProcedures';
import { BootProceduresSettings } from './BootProceduresSettings';
import { BootStageBuilder } from '../../BootStageBuilder';
import { BootStage } from '../../BootStage';

/**
 * Represents the {BootStagePerformer} for performing the {BootStage.BootProcedures} stage
 */
export class BootProcedures extends BootStagePerformer {

    /** @inheritdoc */
    get bootStage() {
        return BootStage.BootProcedures;
    }

    /**
     * Perform the boot stage
     * @param {BootStageSettings} settings 
     * @param {BootStageBuilder} builder 
     */
    perform(settings: BootStageSettings, builder: BootStageBuilder) {
        let bootProcedures = new BP();
        let bootProceduresSettings = settings as BootProceduresSettings;
        bootProceduresSettings.procedures.forEach(bootProcedures.add);
        bootProcedures.perform();
    }
}