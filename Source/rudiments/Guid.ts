// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IEquatable } from './IEquatable';

const lookUpTable: string[] = [];
(() => {
    for (let i = 0; i < 256; i += 1) {
        lookUpTable[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
})();

const getString = (num: number) => {
    return num.toString(16).padStart(2, '0');
};

/**
 * Represents a Guid according to the http://www.ietf.org/rfc/rfc4122.txt.
 */
export class Guid implements IEquatable {

    private _stringVersion = '';

    /**
     * Initializes a new instance of the {@link Guid} class.
     * @param {number[] | Uint8Array} bytes - The 16 bytes that represents the Guid.
     */
    constructor(readonly bytes: number[] | Uint8Array) {
        this._stringVersion = '' +
            getString(bytes[3]) + getString(bytes[2]) + getString(bytes[1]) + getString(bytes[0]) +
            '-' +
            getString(bytes[5]) + getString(bytes[4]) +
            '-' +
            getString(bytes[7]) + getString(bytes[6]) +
            '-' +
            getString(bytes[8]) + getString(bytes[9]) +
            '-' +
            getString(bytes[10]) + getString(bytes[11]) + getString(bytes[12]) + getString(bytes[13]) + getString(bytes[14]) + getString(bytes[15]);
    }

    /**
     * Creates a new random {@link Guid}.
     * @returns {Guid} The random Guid.
     */
    static create(): Guid {
        const d0 = Math.random() * 0xFFFFFFFF | 0;
        const d1 = Math.random() * 0xFFFFFFFF | 0;
        const d2 = Math.random() * 0xFFFFFFFF | 0;
        const d3 = Math.random() * 0xFFFFFFFF | 0;

        const bytes = [
            lookUpTable[d0 & 0xFF],
            lookUpTable[d0 >> 8 & 0xFF],
            lookUpTable[d0 >> 16 & 0xFF],
            lookUpTable[d0 >> 24 & 0xFF],
            lookUpTable[d1 & 0xFF],
            lookUpTable[d1 >> 8 & 0xFF],
            lookUpTable[d1 >> 16 & 0x0F | 0x40],
            lookUpTable[d1 >> 24 & 0xFF],
            lookUpTable[d2 & 0x3F | 0x80],
            lookUpTable[d2 >> 8 & 0xFF],
            lookUpTable[d2 >> 16 & 0xFF],
            lookUpTable[d2 >> 24 & 0xFF],
            lookUpTable[d3 & 0xFF],
            lookUpTable[d3 >> 8 & 0xFF],
            lookUpTable[d3 >> 16 & 0xFF],
            lookUpTable[d3 >> 24 & 0xFF]
        ];

        return new Guid(bytes.map(_ => parseInt(`0x${_}`, 16)));
    }

    /** @inheritdoc */
    equals(other: any): boolean {
        if (isGuid(other) || typeof other === 'string') {
            return this.toString() === other.toString();
        }

        return false;
    }

    /**
     * Return a string representation of the {@link Guid} in the format: 00000000-0000-0000-0000-000000000000.
     * @returns {string} The formatted string.
     */
    toString(): string {
        return this._stringVersion;
    }

    /**
     * Parses a string and turns it into a {@link Guid}.
     * @param {string} guid - String representation of Guid.
     * @returns {Guid} The parsed Guid.
     */
    static parse(guid: string): Guid {
        const bytes: number[] = [];
        guid.split('-').map((number, index) => {
            const bytesInChar = index < 3 ? number.match(/.{1,2}/g)?.reverse() : number.match(/.{1,2}/g);
            bytesInChar?.map((byte) => { bytes.push(parseInt(byte, 16)); });
        });

        return new Guid(bytes);
    }

    /**
     * Parses if the type is a string parse, otherwise pass through the input as desired output type.
     * @template T Type to handle for.
     * @param {string|T} input - String or the generic type.
     * @returns {T} Identifier Parsed or passed through.
     */
    static as<T extends Guid = Guid>(input: string | T): T {
        if (typeof input === 'string') {
            return Guid.parse(input) as T;
        }
        return input as T;
    }

    /**
     * Gets an instance of the empty {@link Guid}.
     */
    static get empty() {
        return new Guid([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
}

const isNumberArrayOrUint8Array = (object: any): object is number[] | Uint8Array => {
    if (object instanceof Uint8Array) return true;
    if (!Array.isArray(object)) return false;
    return object.every(value => typeof value === 'number');
};

/**
 * Checks whether or not an object is an instance of {@link Guid}.
 * @param {any} object - The object to check.
 * @returns {boolean} True if the object is a {@link Guid}, false if not.
 */
export const isGuid = (object: any): object is Guid => {
    if (object instanceof Guid) return true;

    if (typeof object !== 'object' || object === null) return false;
    const { bytes, _stringVersion, equals, toString } = object;
    if (!isNumberArrayOrUint8Array(bytes)) return false;
    if (typeof _stringVersion !== 'string' || _stringVersion.length !== 36) return false;
    if (typeof equals !== 'function' || equals.length !== 1) return false;
    if (typeof toString !== 'function' || toString.length !== 0) return false;

    return true;
};
