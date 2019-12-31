// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BootProcedure } from '../../BootProcedure';
import { BootStageSettings } from '../../BootStageSettings';

/**
 * Represents the settings for boot procedures
 */
export class BootProceduresSettings extends BootStageSettings {
    private _procedures: BootProcedure[] = [];

    /**
     * Get all {BootProcedure}
     */
    get procedures() {
        return this._procedures;
    }

    /**
     * Add {BootProcedure}
     */
    addProcedure(procedure: BootProcedure) {
        this._procedures.push(procedure);
    }
}