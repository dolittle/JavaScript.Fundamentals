// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const lookUpTable: string[] = [];
(() => {
    for (let i = 0; i < 256; i += 1) {
        lookUpTable[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
})();

/**
 * Represents a Guid according to the http://www.ietf.org/rfc/rfc4122.txt
 *
 * @export
 * @class Guid
 */
export class Guid {

    /**
     * Gets an empty {Guid}
     */
    static readonly empty = new Guid([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    private _stringVersion: string = '';

    /**
     * Initializes a new instance of the {Guid} class.
     * @param {number[]} bytes - The 16 bytes that represents a {Guid}.
     */
    constructor(readonly bytes: number[]) {
        this._stringVersion = '' +
            bytes[0].toString(16) + bytes[1].toString(16) + bytes[2].toString(16) + bytes[3].toString(16) +
            '-' +
            bytes[4].toString(16) + bytes[5].toString(16) +
            '-' +
            bytes[6].toString(16) + bytes[7].toString(16) +
            '-' +
            bytes[8].toString(16) + bytes[9].toString(16) +
            '-' +
            bytes[10].toString(16) + bytes[11].toString(16) + bytes[12].toString(16) + bytes[13].toString(16) + bytes[14].toString(16) + bytes[15].toString(16);
    }

    /**
     * Create a new {Guid}
     * @returns {Guid}
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

    /**
     * Parses a string and turns it into a {Guid}.
     * @param {string} guid String representation of guid.
     */
    static parse(guid: string): Guid {
        const bytes: number[] = [];
        guid.split('-').map((number, index) => {
            const bytesInChar = number.match(/.{1,2}/g);
            bytesInChar?.map((byte) => { bytes.push(parseInt(byte, 16)); });
        });
        return new Guid(bytes);
    }

    /**
     * Return a string representation of the {Guid} in the format: 00000000-0000-0000-0000-000000000000
     * @returns {string}
     */
    toString(): string {
        return this._stringVersion;
    }
}
