// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../index';
import { IEquatable } from '@dolittle/rudiments';
import { typeGuard } from '@dolittle/types';

export class some_base implements IEquatable {
    constructor(public x: string, public y: number) { }

    equals(other: any) {
        if (typeGuard(other, some_base)) {
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
