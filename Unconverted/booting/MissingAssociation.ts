// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Exception } from '@dolittle/exceptions';
import { BootStageBuilder } from './BootStageBuilder'

/**
 * The exception that gets thrown when an association is missing from {BootStageBuilder}
 */
export class MissingAssociation extends Exception {

    /**
     * Initializes a new instance of {MissingAssociation}
     * @param {string} association Key of the association missing
     */
    constructor(association) {
        super(`'${association}' is missing during building of boot stages`);
    }
}