// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from './index';

/**
 * Decorator for a extension method.
 *
 * Remarks: Does not work for sealed or frozen objects.
 *
 * Usage:
 *
 * class SomethingExtensions {
 *
 *   \@Extension(Something)
 *
 *   static doSomething(thisArg: Something): any {
 *
 *     // Do something
 *
 *   }
 *
 * }
 *
 * declare module 'path/to/module' {
 *
 *   interface Something {
 *
 *     doSomething(): any
 *
 *   }
 *
 * }
 *
 * var x = new Something();
 *
 * x.doSomething();
 *
 * @export
 * @param {Constructor} ctr
 * @returns
 */
export function Extension(ctr: Constructor) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        ctr.prototype[propertyKey] = function(...args: any[]) {
            return descriptor.value(this, ...args);
        };
    };
}
