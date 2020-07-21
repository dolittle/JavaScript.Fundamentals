// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Exception } from '@dolittle/rudiments';

export class MissingUniqueConceptName extends Exception {
    constructor() {
        super('Missing unique concept name argument');
    }
}