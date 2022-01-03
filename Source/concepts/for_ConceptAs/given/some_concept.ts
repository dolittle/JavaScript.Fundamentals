// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from '@dolittle/rudiments';

import { ConceptAs } from '../../ConceptAs';
import { createIsConceptAs } from '../../createIsConceptAs';

export class some_base implements IEquatable {
    constructor(public x: string, public y: number) { }

    equals(other: any) {
        if (other instanceof some_base) {
            return other.x === this.x && other.y === this.y;
        }
        return false;
    }
}

export class some_concept extends ConceptAs<some_base, 'some_concept'> {
    constructor(some_base: some_base) {
        super(some_base, 'some_concept');
    }
}

export const is_some_concept = createIsConceptAs(some_concept, 'some_concept', (o): o is some_base => o instanceof some_base);
