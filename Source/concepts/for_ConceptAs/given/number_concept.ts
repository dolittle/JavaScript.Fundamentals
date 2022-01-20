// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';
import { createIsConceptAsNumber } from '../../createIsConceptAs';

export class number_concept extends ConceptAs<number, 'number_concept'> {
    constructor(value: number) {
        super(value, 'number_concept');
    }
}

export const is_number_concept = createIsConceptAsNumber(number_concept, 'number_concept');
