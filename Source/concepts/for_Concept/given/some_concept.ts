// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ConceptAs } from '../../index';
import { IEquatable, IEquatableTo } from '@dolittle/rudiments';

export class some_base implements IEquatableTo<some_base>, IEquatable {
    constructor(public x: string, public y: number) { }
    equals(other: some_base) {
        return other.x === this.x && other.y === this.y;
    }
}

export type some_concept = ConceptAs<some_base, 'some_concept'>;
