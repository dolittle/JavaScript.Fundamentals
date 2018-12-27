/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Boot } from './Boot';
import { Basics } from './stages/01-Basics/Basics';
import { Logging } from './stages/02-Logging/Logging';
import { InitialSystem } from './stages/03-InitialSystem/InitialSystem';
import { Discovery } from './stages/04-Discovery/Discovery';
import { Container } from './stages/07-Container/Container';
import { BootProcedures } from './stages/08-BootProcedures/BootProcedures';
import { BootStageBuilder } from './BootStageBuilder';
import { BootStagesResult } from './BootStagesResult';
import { BootStage } from './BootStage';
import { InvalidBootStageIdentifier } from './InvalidBootStageIdentifier';

/**
 * Represents all the boot stages
 */
export class BootStages {
    #settings;
    #stages = [];

    constructor(settings) {
        this.#settings = settings;
        this.#stages = [
            new Basics(),
            new Logging(),
            new InitialSystem(),
            new Discovery(),
            new Container(),
            new BootProcedures()
        ];
    }

    /**
     * Perform all the boot stages
     * @param {Boot} boot 
     * @returns {BootStagesResult} The result of performing all stages
     */
    perform(boot) {
        let results = [];
        let bootStages = {};

        this.#stages.forEach(performer => {
            if( performer.bootStage == BootStage.Unknown ) InvalidBootStageIdentifier.throw(performer.bootStage);
            if( bootStages.hasOwnProperty(performer.bootStage)) DuplicateBootStages.throw(performer);
            
            bootStages[performer.bootStage] = performer;

            let settings = this.settings.filter(_ => performer instanceof _.bootStage);
            if( settings.length == 1 ) settings = settings[0];
            else settings = {};

            let builder = new BootStageBuilder();
            performer.perform(settings,builder);
            let result = builder.build();
            results.push(result);
        });

        let bootStagesResult = new BootStagesResult(results);
        return bootStagesResult;
    }
}
