/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootStagePerformer } from '../../BootStagePerformer';
import { BootProcedures as BP } from '../../BootProcedures';
import { BootProceduresSettings} from './BootProceduresSettings';
import { BootStageBuilder} from '../../BootStageBuilder';
import { BootStage } from '../../BootStage';

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
     * @param {BootProceduresSettings} settings 
     * @param {BootStageBuilder} builder 
     */
    perform(settings, builder) {
        let bootProcedures = new BP();
        settings.procedures.forEach(bootProcedures.add);
        bootProcedures.perform();
    }
}