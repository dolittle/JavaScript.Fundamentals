// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from '../../IEquatable';

export class an_equatable implements IEquatable {
    equals(other: any): boolean {
        return other === this;
    }
}
