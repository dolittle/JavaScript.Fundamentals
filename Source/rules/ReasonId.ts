// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '@dolittle/concepts';
import { Guid } from '@dolittle/rudiments';

/**
 * Represents the unique identifier for a Reason.
 */

export class ReasonId extends ConceptAs<Guid, 'ReasonId'> {
    constructor(value: Guid) {
        super(value, 'ReasonId');
    }
}
