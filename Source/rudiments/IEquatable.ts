// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Defines something that is equatable to other things.
 */
export interface IEquatable {
    /**
     * Check whether this instance is equal to another instance.
     * @param {any} other - The instance to compare to.
     * @returns {boolean} True if the instances are equal, false if not.
     */
    equals(other: any): boolean
}
