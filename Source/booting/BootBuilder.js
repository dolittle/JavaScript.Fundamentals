/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Boot } from './Boot';
import { BootProcedures } from './BootProcedures';
import { BootStages } from './BootStages';
import { IncorrectBootStageSettingsType } from './IncorrectBootStageSettingsType';
import { BootStageSettings } from './BootStageSettings';



/**
 * Represents a builder for boot - typically used during configuration
 */
export class BootBuilder {
    #procedures;
    #settingsForBootStages = {};

    /**
     * Initializes a new instance of {BootBuilder}
     */
    constructor() {
        this.#procedures = new BootProcedures();
        
    }

    /**
     * Get the {BootProcedures}
     * @returns {BootProcedures} for the {Boot}
     */
    get procedures() { return this.#procedures; }

    /**
     * Get settings for a boot stage, it will be created if it does not exist
     * @param {*} type Type of settings object to get
     */
    getBootStageSettings(type) {
        this.#throwIfIncorrectBootStageSettingsType(type);

        if( this.#settingsForBootStages.hasOwnProperty(type)) return this.#settingsForBootStages[type];

        let settings = new type();
        this.#settingsForBootStages[type] = settings;
        return settings;
    }

    /**
     * Build a {Boot} instance
     * @returns {Boot} Configured instance
     */
    build() {
        let settings = [];
        for( let setting in this.#settingsForBootStages ) settings.push(this.#settingsForBootStages[setting]);

        let bootStages = new BootStages(settings);
        let boot = new Boot(bootStages);
        return boot;
    }

    #throwIfIncorrectBootStageSettingsType(type) {
        if (!(type.prototype instanceof BootStageSettings))
            IncorrectBootStageSettingsType.throw();
    }
}
