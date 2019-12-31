// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Exception } from '@dolittle/exceptions';
import { BootStage } from './BootStage';


/**
 * Exception that gets thrown when a {BootStage} identifier is wrong
 */
export class InvalidBootStageIdentifier extends Exception {

    /**
     * Initializes a new instance of {InvalidBootStageIdentifier}
     * @param {BootStage} bootStage The invalid boot stage
     */
    constructor(bootStage) {
        super(`${bootStage} is an invalid boot stage identifier`);
    }  
}