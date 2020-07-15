
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from './index';

/**
 * Defines a thing that is equatable to something else that is equatable.
 *
 * @export
 * @interface IEquatableTo
 * @extends {IEquatable}
 * @template T
 */
export interface IEquatableTo<T extends IEquatable | number | bigint | string | boolean> extends IEquatable {
    /**
     * Check whether this is equal to other.
     *
     * @param {T} other
     * @returns {boolean}
     */
    equals(other: T): boolean
}
