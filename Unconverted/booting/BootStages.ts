// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Boot } from './Boot';
import { Basics } from './stages/01-Basics/Basics';
import { Logging } from './stages/02-Logging/Logging';
import { InitialSystem } from './stages/03-InitialSystem/InitialSystem';
import { Discovery } from './stages/04-Discovery/Discovery';
import { Container } from './stages/07-Container/Container';
import { BootProcedures } from './stages/08-BootProcedures/BootProcedures';
import { BootStageBuilder } from './BootStageBuilder';
import { BootStagesResult } from './BootStagesResult';
import { BootStageSettings } from './BootStageSettings';
import { BootStagePerformer } from './BootStagePerformer';
import { BootStage } from './BootStage';
import { InvalidBootStageIdentifier } from './InvalidBootStageIdentifier';
import { DuplicateBootStagePerformer } from './DuplicateBootStagePerformer';

/**
 * Represents all the boot stages
 */
export class BootStages {
    private _settings: BootStageSettings;
    private _stages: BootStagePerformer[] = [];

    constructor(settings: BootStageSettings) {
        this._settings = settings;
        this._stages = [
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
    perform(boot: Boot): BootStagesResult {
        let results = [];
        let bootStages = {};

        this._stages.forEach(performer => {
            if( performer.bootStage == BootStage.Unknown ) throw new InvalidBootStageIdentifier(performer.bootStage);
            if( bootStages.hasOwnProperty(performer.bootStage)) throw new DuplicateBootStagePerformer(performer);
            
            bootStages[performer.bootStage] = performer;

            let settings = this._settings.filter(_ => performer instanceof _.bootStage);
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
