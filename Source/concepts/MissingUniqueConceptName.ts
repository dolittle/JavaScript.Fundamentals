// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Exception } from '@dolittle/rudiments';

import { ConceptAs } from './ConceptAs';

/**
 * The exception that gets thrown when a {@link ConceptAs} is constructed without a unique concept name.
 */
export class MissingUniqueConceptName extends Exception {
    /**
     * Initializes a new instace of the {@link MissingUniqueConceptName} class.
     */
    constructor() {
        super('Missing unique concept name argument');
    }
}
