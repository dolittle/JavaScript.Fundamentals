

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from '@dolittle/exceptions';
import { BootStagePerformer } from './BootStagePerformer';
import { BootStage } from './BootStage';

/**
 * Exception that gets thrown if a {BootStagePerformer} is a duplicate performer of a {BootStage}
 */
export class DuplicateBootStagePerformer extends Exception {
    
    /**
     * Initializes a new instance of {DuplicateBootStagePerformer}
     * @param {BootStagePerformer} performer Performer that is duplicate
     */
    constructor(performer) {
        super(`${performer.prototype} is a duplicate for boot stage ${performer.bootStage}`);
    }
   
}