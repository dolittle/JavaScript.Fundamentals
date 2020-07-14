// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from './';

// Taken from https://dev.to/krumpet/generic-type-guard-in-typescript-258l

interface TypeMap {
    string: string;
    number: number;
    boolean: boolean;
}

type PrimitiveOrConstructor =
    | (new (...args: any[]) => any)
    | keyof TypeMap;


type GuardedType<T extends PrimitiveOrConstructor> = T extends new(...args: any[]) => infer U ? U : T extends keyof TypeMap ? TypeMap[T] : never;


export function typeGuard<T extends PrimitiveOrConstructor>(o: any, className: T): o is GuardedType<T> {
        const localPrimitiveOrConstructor: PrimitiveOrConstructor = className;
        if (typeof localPrimitiveOrConstructor === 'string') {
        return typeof o === localPrimitiveOrConstructor;
    }
    return o instanceof localPrimitiveOrConstructor;
}

