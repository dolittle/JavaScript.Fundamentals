// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs, conceptFrom } from '@dolittle/concepts';
import { Guid } from '@dolittle/rudiments';

/**
 * Represents the unique identifier for a Reason.
 */
export class ReasonId extends ConceptAs<Guid, '@dolittle/rules.ReasonId'> {
    /**
     * Initializes a new instance of the {@link ReasonId} class.
     * @param {Guid} id - The reason id.
     */
    constructor(id: Guid) {
        super(id, '@dolittle/rules.ReasonId');
    }

    /**.
     * Creates a {@link ReasonId} from {@link string} or {@link Guid}
     * @static
     * @param {string | Guid} id - The reason id.
     * @returns {ReasonId} The created concept.
     */
    static from(id: string | Guid): ReasonId {
        return conceptFrom(ReasonId, Guid.as(id));
    }
}
