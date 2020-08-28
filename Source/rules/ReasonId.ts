// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs, conceptFrom } from '@dolittle/concepts';
import { Guid } from '@dolittle/rudiments';

/**
 * Represents the unique identifier for a Reason.
 */

export class ReasonId extends ConceptAs<Guid, '@dolittle/rules.ReasonId'> {
    constructor(id: Guid) {
        super(id, '@dolittle/rules.ReasonId');
    }

    /**
     * Creates a {ReasonId} from {string} or {Guid}
     *
     * @static
     * @param {(string | Guid)} id
     * @returns {ReasonId}
     */
    static from(id: string | Guid): ReasonId {
        return conceptFrom(ReasonId, Guid.as(id));
    }
}
