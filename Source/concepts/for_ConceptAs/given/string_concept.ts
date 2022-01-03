// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';
import { createIsConceptAsString } from '../../createIsConceptAs';

export class string_concept extends ConceptAs<string, 'string_concept'> {
    constructor(value: string) {
        super(value, 'string_concept');
    }
}

export const is_string_concept = createIsConceptAsString(string_concept, 'string_concept');
