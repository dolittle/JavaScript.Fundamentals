// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../ConceptAs';

export class number_concept extends ConceptAs<number, 'number_concept'> {
    constructor(value: number) {
        super(value, 'number_concept');
    }
}
