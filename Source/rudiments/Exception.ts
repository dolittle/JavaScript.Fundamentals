// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents the base class for an exception.
 *
 * @export
 * @class Exception
 * @extends {Error}
 */
export class Exception extends Error {

    /**
     * Instantiates an instance of {Exception}.
     *
     * Remarks: instanceof won't work if the target is es5.
     * Make sure to target a newer version of ECMAScript if you use instanceof to check the type of the {Exception}.
     * @param {string} [message]
     */
    constructor(message?: string) {
        super(message ?? '');
        this.name = this.constructor.name;
        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        Object.defineProperty(Exception.prototype, Symbol.toStringTag, {
            value: 'Error',
            writable: false,
            configurable: false,
            enumerable: false
        });
    }
}
