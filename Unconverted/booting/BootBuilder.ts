// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Boot } from './Boot';
import { BootProcedures } from './BootProcedures';
import { BootStages } from './BootStages';
import { IncorrectBootStageSettingsType } from './IncorrectBootStageSettingsType';
import { BootStageSettings } from './BootStageSettings';

/**
 * Represents a builder for boot - typically used during configuration
 */
export class BootBuilder {
    private _procedures: BootProcedures;
    private _settingsForBootStages = {};

    /**
     * Initializes a new instance of {BootBuilder}
     */
    constructor() {
        this._procedures = new BootProcedures();
        
    }

    /**
     * Get the {BootProcedures}
     * @returns {BootProcedures} for the {Boot}
     */
    get procedures() { 
        return this._procedures; 
    }

    /**
     * Get settings for a boot stage, it will be created if it does not exist
     * @param {BootStageSettings} type Type of settings object to get
     */
    getBootStageSettings(type: BootStageSettings) {
        if( this._settingsForBootStages.hasOwnProperty(type)) return this._settingsForBootStages[type];

        let settings = new type();
        this._settingsForBootStages[type] = settings;
        return settings;
    }

    /**
     * Build a {Boot} instance
     * @returns {Boot} Configured instance
     */
    build(): Boot {
        let settings = [];
        for( let setting in this._settingsForBootStages ) settings.push(this._settingsForBootStages[setting]);

        let bootStages = new BootStages(settings);
        let boot = new Boot(bootStages);
        return boot;
    }
}
