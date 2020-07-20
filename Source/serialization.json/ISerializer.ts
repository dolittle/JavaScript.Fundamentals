// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Defines a serializer for JSON.
 *
 * @export
 * @interface ISerializer
 */
export interface ISerializer {

    /**
     * Serialize the input to JSON.
     *
     * @param {*} input
     * @param {number} [spaces]
     * @returns {string}
     */
    toJSON(input: any, spaces?: number): string

    /**
     * Deserialize from JSON.
     *
     * @param {string} jsonString
     * @returns {*}
     */
    fromJSON(jsonString: string): any
}
