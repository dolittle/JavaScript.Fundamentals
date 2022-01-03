// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PrimitiveOrConstructor } from './PrimitiveOrConstructor';
import { PrimitiveTypeMap } from './PrimitiveTypeMap';

/**
 * Defines a guarded type.
 */
export type GuardedType<T extends PrimitiveOrConstructor> = T extends new(...args: any[]) => infer U ?
                                                                U
                                                                : T extends keyof PrimitiveTypeMap ? PrimitiveTypeMap[T] : never;

/**
 * Checks whether an object is an instance of a guarded type.
 * @param {any} o - The object to check.
 * @param {T} className - The type to check if the object is an instance of.
 * @returns {boolean} True if the object is an instance of the guarded type, false if not.
 * @template T The type of the guarded type.
 */
export function typeGuard<T extends PrimitiveOrConstructor>(o: any, className: T): o is GuardedType<T> {
    const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;
    if (typeof localPrimitiveOrConstructor === 'string') {
        return typeof o === localPrimitiveOrConstructor;
    }
    return o instanceof localPrimitiveOrConstructor;
}
