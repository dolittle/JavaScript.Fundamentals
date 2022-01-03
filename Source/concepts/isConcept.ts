// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { isEquatable } from '@dolittle/rudiments';

import { ConceptAs } from './ConceptAs';
import { ConceptBase } from './ConceptBase';

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Checks whether or not an object is an instance of {@link ConceptAs}.
 * @param {any} object - The object to check.
 * @returns {boolean} True if the object is an {@link ConceptAs}, false if not.
 */
export const isConcept = (object: any): object is ConceptAs<ConceptBase, string> => {
    if (typeof object !== 'object') return false;

    const { __uniqueConceptName, value } = object;
    if (typeof __uniqueConceptName !== 'string') return false;
    switch (typeof value) {
        case 'function':
        case 'undefined':
        case 'symbol':
            return false;
        case 'object':
            if (!isEquatable(value)) return false;
    }

    if (!isEquatable(object)) return false;

    return true;
};
