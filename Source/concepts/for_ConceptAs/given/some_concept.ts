// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatableTo, IEquatable, ConceptAs } from '../../index';

export class some_base implements IEquatableTo<some_base>, IEquatable {
    constructor(public x: string, public y: number) { }
    equals(other: some_base) {
        return other.x === this.x && other.y === this.y;
    }
}

export class some_concept extends ConceptAs<some_base> { }
