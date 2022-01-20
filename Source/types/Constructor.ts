// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * A constructor of a type.
 * @template T The type that is constructed.
 */
export type Constructor<T extends {} = {}> = new (...args: any[]) => T;
